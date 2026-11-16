"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

type Status = "idle" | "sending" | "sent" | "unavailable" | "error";
type FieldErrors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "mt-2 block w-full border border-white/35 bg-white/10 px-4 py-3 text-base text-white placeholder:text-white/55 focus:border-white focus:bg-white/15 focus:outline-2 focus:outline-offset-2 focus:outline-white";
const label = "text-sm font-medium";
const errorText = "mt-1.5 text-sm text-[#ffd9d9]";

export default function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [message, setMessage] = useState<string>("");
  const [draft, setDraft] = useState({ name: "", email: "", message: "" });

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    `Message from ${draft.name || "your portfolio"}`,
  )}&body=${encodeURIComponent(draft.message)}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const body = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      message: String(form.get("message") ?? ""),
      company: String(form.get("company") ?? ""),
    };
    setDraft({ name: body.name, email: body.email, message: body.message });
    setErrors({});
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const data = (await res.json().catch(() => ({}))) as {
        error?: string;
        fields?: FieldErrors;
      };

      if (res.ok) {
        setStatus("sent");
        setMessage("");
        (e.target as HTMLFormElement).reset();
        return;
      }
      if (data.error === "validation" && data.fields) {
        setErrors(data.fields);
        setStatus("idle");
        return;
      }
      if (data.error === "not_configured") {
        setStatus("unavailable");
        return;
      }
      if (data.error === "rate_limited") {
        setMessage("You have sent several messages in a short time. Please try again in an hour, or email me directly.");
        setStatus("error");
        return;
      }
      setMessage("The message could not be sent. Please try again, or email me directly.");
      setStatus("error");
    } catch {
      setMessage("You appear to be offline. Check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="border border-white/35 bg-white/10 p-8">
        <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
        <p className="mt-4 font-serif text-3xl font-medium">Message sent.</p>
        <p className="mt-2 max-w-[44ch] leading-relaxed text-white/85">
          Thank you. I read every message and will reply by email.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium underline decoration-white/40 decoration-2 underline-offset-4 hover:decoration-white"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate aria-describedby="contact-status" className="space-y-6">
      <div>
        <label htmlFor="cf-name" className={label}>
          Your name
        </label>
        <input
          id="cf-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          maxLength={100}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "cf-name-err" : undefined}
          className={field}
          placeholder="Ada Lovelace"
        />
        {errors.name && (
          <p id="cf-name-err" className={errorText}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-email" className={label}>
          Your email
        </label>
        <input
          id="cf-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "cf-email-err" : undefined}
          className={field}
          placeholder="ada@company.com"
        />
        {errors.email && (
          <p id="cf-email-err" className={errorText}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="cf-message" className={label}>
          What are you building?
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={6}
          maxLength={4000}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "cf-message-err" : undefined}
          className={`${field} resize-y`}
          placeholder="A few lines on the project, the team and where you need help."
        />
        {errors.message && (
          <p id="cf-message-err" className={errorText}>
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot: hidden from people, filled in by simple bots. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="cf-company">Company</label>
        <input id="cf-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2.5 bg-white px-7 py-3.5 text-sm font-semibold text-[#1b2f9e] hover:bg-[#eef1ff] disabled:cursor-wait disabled:opacity-70"
        >
          <Send className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
          {status === "sending" ? "Sending" : "Send message"}
        </button>
        <p className="text-sm text-white/75">
          Or email{" "}
          <a
            href={`mailto:${email}`}
            className="font-medium text-white underline decoration-white/40 decoration-2 underline-offset-4 hover:decoration-white"
          >
            {email}
          </a>
        </p>
      </div>

      <div id="contact-status" role="status" aria-live="polite">
        {status === "unavailable" && (
          <p className="flex items-start gap-2.5 border border-white/35 bg-white/10 p-4 text-sm leading-relaxed">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              The form cannot send right now.{" "}
              <a href={mailto} className="font-medium underline underline-offset-4">
                Open your email app with this message ready to send
              </a>
              .
            </span>
          </p>
        )}
        {status === "error" && (
          <p className="flex items-start gap-2.5 border border-white/35 bg-white/10 p-4 text-sm leading-relaxed">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              {message}{" "}
              <a href={mailto} className="font-medium underline underline-offset-4">
                Email me directly
              </a>
              .
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
