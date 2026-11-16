import { PORTFOLIO_DATA } from "@/data/portfolioData";

// Sends a contact-form message by email through Resend's HTTP API.
// Configure in the host's environment:
//   RESEND_API_KEY       required to send
//   CONTACT_TO_EMAIL     optional, defaults to the address on the site
//   CONTACT_FROM_EMAIL   optional, a sender verified in Resend
// Without RESEND_API_KEY the endpoint answers 503 and the form falls back to
// the visitor's own email app.

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  company?: unknown; // honeypot: real visitors never fill this in
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Best-effort limiter. It resets when the server instance restarts, so it
// slows down casual abuse but is not a substitute for a shared store.
const WINDOW_MS = 60 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [key, times] of hits) {
      if (times.every((t) => now - t >= WINDOW_MS)) hits.delete(key);
    }
  }
  return recent.length > MAX_PER_WINDOW;
}

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const json = (body: Record<string, unknown>, status: number) =>
  Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  let data: Payload;
  try {
    data = (await request.json()) as Payload;
  } catch {
    return json({ error: "invalid_request" }, 400);
  }

  // Bots that fill the hidden field get a success response and nothing is sent.
  if (typeof data.company === "string" && data.company.trim() !== "") {
    return json({ ok: true }, 200);
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  const fields: Record<string, string> = {};
  if (name.length < 1 || name.length > 100) fields.name = "Enter your name.";
  if (!EMAIL.test(email) || email.length > 254) fields.email = "Enter a valid email address.";
  if (message.length < 10) fields.message = "Write at least a sentence so I can help.";
  if (message.length > 4000) fields.message = "Keep the message under 4,000 characters.";
  if (Object.keys(fields).length > 0) {
    return json({ error: "validation", fields }, 422);
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return json({ error: "rate_limited" }, 429);
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return json({ error: "not_configured" }, 503);
  }

  const to = process.env.CONTACT_TO_EMAIL ?? PORTFOLIO_DATA.identity.email;
  const from = process.env.CONTACT_FROM_EMAIL ?? "Portfolio <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Portfolio message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p><p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  }).catch(() => null);

  if (!res || !res.ok) {
    return json({ error: "send_failed" }, 502);
  }
  return json({ ok: true }, 200);
}
