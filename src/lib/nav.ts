/** Scroll to a section or project and pulse it so the eye finds it. */
export function goTo(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: calm ? "auto" : "smooth", block: "start" });
  el.classList.remove("nav-flash");
  void el.offsetWidth; // restart the animation if it is already running
  el.classList.add("nav-flash");
  window.setTimeout(() => el.classList.remove("nav-flash"), 1800);
}

/** Flip between the light and dark theme and remember the choice. */
export function toggleTheme() {
  const root = document.documentElement;
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  root.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch {
    /* private mode: the choice just lasts for this visit */
  }
}

export const OPEN_PALETTE = "open-palette";
export const OPEN_GUIDE = "open-guide";
