// The public address of the site. Set NEXT_PUBLIC_SITE_URL in the host's
// environment once the final domain is confirmed.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://taufiq.dev"
).replace(/\/$/, "");

export const SITE_NAME = "Hossain Ahmmed Taufiq";
