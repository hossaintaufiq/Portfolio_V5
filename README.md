# Epic Panda 22 — Portfolio Website

Premium, interactive portfolio built with **Next.js (App Router)** + **TypeScript** + **Tailwind CSS**.
The page is designed for fast recruiter scanning (strong hero CTA), then deep dive into skills (3D globe), projects, experience, research, education, and contact.

## Tech Stack

- **Next.js** 16.2.10 (Webpack mode)
- **React** 19.x
- **Tailwind CSS** (v4)
- **Three.js / React Three Fiber / Drei** (Skills 3D globe)
- **Framer Motion** (micro-interactions, reveals, transitions)
- **Lenis** (smooth-scroll provider exists; see note below)
- **GSAP** (installed for future motion work)

## Run / Build

```bash
npm run dev
npm run build
npm run start
npm run lint
```

Note (Windows): scripts use `--webpack` in `package.json` to avoid Turbopack native binary issues.

## Page Layout (What you see)

`app/page.tsx` composes the portfolio in this order:

1. `Header` (fixed, full-width navigation)
2. `Hero` (headline, rotating tagline, CTAs, tech visual)
3. `About` (tabbed bio + interactive info cards)
4. `Skills` (3D globe + legend)
5. `SkillsList` (neural-network styled skills list right after the globe)
6. `Projects` (selected featured + additional projects)
7. `Experience` (road-style timeline, alternating sides)
8. `Research` (neural network concept + “research node” cards)
9. `Education` (academic ledger layout with periods, details, certifications, languages)
10. `Contact` (connection vibe + contact cards + social links)
11. `Footer`

## Global UI / Providers

- `app/layout.tsx`
  - Loads brand typography (`Fredoka`) and Geist fonts via `next/font`.
  - Adds global background effects:
    - `AuroraBackground` (animated aurora + grid/noise)
    - `PremiumCursor` (dotted cursor trail on fine pointers)
    - `ScrollProgress` (fixed top progress bar)
  - Sets favicon via `metadata.icons` to `public/EpicPandaLogo.png`.
- `components/background/AuroraBackground.tsx`
  - Fixed, animated background layer.
- `components/ui/PremiumCursor.tsx`
  - Shows a dotted cursor trail on devices that match `(pointer: fine)` and non-reduced motion preferences.
- `components/ui/ScrollProgress.tsx`
  - Uses Framer Motion `useScroll` to draw a thin top progress bar.

### Smooth scrolling note

`components/providers/SmoothScrollProvider.tsx` (Lenis) exists, but the provider is **not mounted** in `app/layout.tsx` right now. If you want it back, re-add `<SmoothScrollProvider />` in the root layout.

## Data-Driven Content

Most page text is stored under `data/`:

- `data/site.ts`: brand name, nav links, socials, contact info
- `data/profile.ts`: hero + about sidebar content (name, role, bio, resume url, CGPA, etc.)
- `data/skills.ts`: skill categories and skill items (used by the globe + legend + list)
- `data/projects.ts`: projects rendered in the Projects section
- `data/experience.ts`: experience rendered in the Experience section
- `data/research.ts`: research cards rendered in the Research section
- `data/education.ts`: education timeline + certifications + language levels

## Skills: 3D Globe + Node Data

Globe implementation:

- `components/three/SkillsGlobe.tsx`
  - Reads `skillCategories` from `data/skills.ts`
  - Places category-colored nodes on a sphere and draws subtle connection lines.
  - Uses `OrbitControls` for auto-rotation (zoom/pan disabled for stability).
  - Displays a label for hovered nodes (plus a subset for visibility).

Extra nodes:

- `EXTRA_SKILLS` inside `SkillsGlobe.tsx` adds additional nodes beyond `data/skills.ts`.

If you update `data/skills.ts`, the globe reflects it automatically.

## Favicon

Browser icon is configured in `app/layout.tsx` and points to:

- `public/EpicPandaLogo.png`

## Where to Customize

- Edit site content: `data/*.ts`
- Change section styling/behavior: `components/sections/*.tsx`
- Update 3D globe visuals/data mapping: `components/three/SkillsGlobe.tsx`
- Change global background/cursor/progress: `components/background/*` and `components/ui/*`
