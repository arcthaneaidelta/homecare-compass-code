# Premium Refinement Pass — WeCare2

Goal: layer in calm, premium micro-interactions and depth without touching brand colors, type, layout, or content. Every effect stays subtle, accessible, and `prefers-reduced-motion` aware.

## 1. Global depth & motion primitives

**`src/styles.css`** — extend the existing token/utility system (do not replace it):
- New shadow tokens: `--shadow-ambient` (very soft, large radius), `--shadow-lift` (hover state, slightly stronger than `--shadow-card`).
- New keyframes: `aurora-pan` (slow background gradient drift, 24–30s), `sheen` (one‑shot button highlight).
- New utilities:
  - `ambient-bg` — fixed/absolute layered radial gradients in brand-red + navy at 4–8% opacity, animated with `aurora-pan`.
  - `section-divider` — thin gradient hairline between sections for soft separation.
  - `card-lift` — `transition: transform, box-shadow, border-color`; on hover: `translateY(-4px)`, `--shadow-lift`, border tinted toward brand-red/15.
  - `btn-press` — `active:scale-[0.98]`, smooth `transition-transform`.
  - `img-zoom` — wrapper rule for `group-hover:scale-[1.03]` with longer easing.
  - `field-focus` — input focus ring upgrade (soft brand-red ring + subtle inset shadow).
- Wrap all new keyframes/utilities in `@media (prefers-reduced-motion: no-preference)` where they auto-run.

## 2. Ambient background system

**New `src/components/site/AmbientBackdrop.tsx`**
- Fixed, `pointer-events-none`, `z -10`, `aria-hidden`.
- 2–3 large radial gradients (brand-red ~6%, navy ~5%, warm cream ~4%) blurred and very slowly drifting via `animate-drift` / new `aurora-pan`.
- Mounted once in `src/routes/__root.tsx` so it sits behind every page.
- Reduced-motion: render static, no animation.

**Per-section ambience** (opt-in, very low opacity):
- Add a single `<div className="ambient-bg">` layer inside Hero, Director's Message, Why Choose Us, Testimonials, Careers CTA on `index.tsx` and the corresponding sections in `about.tsx`, `careers.tsx`, `team.tsx`.

## 3. Mouse-responsive lighting (very subtle)

**New `src/components/site/AmbientCursorLight.tsx`**
- Tracks pointer with rAF, writes `--mx` / `--my` CSS vars on `<body>`.
- A fixed `pointer-events-none` div uses `radial-gradient(240px at var(--mx) var(--my), color-mix(... brand-red 6%), transparent 60%)`.
- Disabled on coarse pointers and reduced motion.
- Mounted in `__root.tsx` alongside existing `CursorFollower` (kept as-is, already subtle).

## 4. Section reveal animations

- Reuse the existing `Reveal` component. Audit pages and wrap any currently un-revealed blocks on:
  - `about.tsx`, `team.tsx`, `careers.tsx`, `contact.tsx`, `faq.tsx`, and all `services.*.tsx` pages.
- Standardize: `direction="up"`, `duration={0.7}`, staggered `delay` in 0.08–0.12s steps for sibling cards.
- Grids (service cards, value cards, trust indicators, team) get a stagger wrapper instead of per-child delays.

## 5. Card hover system

Apply `card-lift` utility (plus existing classes) to:
- Service cards (`services.tsx`, `index.tsx` care options)
- Value / "Why Choose Us" cards
- Team cards (`team.tsx`)
- Testimonial cards
- Trust indicator tiles

Effect: `translateY(-4px)`, shadow upgrade, border tint, image inside scales to 1.03 via `img-zoom`. No scale on the card itself.

## 6. Buttons

- Extend `src/components/ui/button.tsx` default/primary variants with: `transition-all duration-300`, `active:scale-[0.98]`, soft shadow on hover, optional `hover-shimmer` only on the two key CTAs (`Request Care Assessment`, `Become A Carer`, `Apply Now`). Keep existing `cta-glow` usage but tone radius/opacity down if too strong.
- No color/scheme changes.

## 7. Imagery

- Hero image already has parallax — verify timing feels calm (tighten range if needed).
- Director portrait, service images, caregiver images: wrap in `overflow-hidden rounded-*` container and add `img-zoom` for 700ms ease hover zoom.
- Add gentle on-scroll parallax (`useScroll` + `useTransform`, ~15px range) for the Director portrait and the About hero image only — keep cards static.

## 8. Statistics

- `StatCounter.tsx`: confirm it animates on in-view; add easing curve `[0.22,1,0.36,1]`, 1.6s duration, and a `Reveal` wrapper with stagger across the four stats.

## 9. Testimonials

- If using a carousel: add fade + slight slide transition between slides, soft card elevation on the active slide. Touch/swipe already supported by the existing carousel primitive — verify enabled.

## 10. Header

**`SiteHeader.tsx`**
- On scroll past 8px (already tracked): also reduce nav height from 72px → 64px, strengthen `backdrop-blur` and add `--shadow-soft`. Transition 400ms.
- Keep all existing structure, colors, links.

## 11. Scroll experience

- `html { scroll-behavior: smooth }` already set — leave native.
- No scroll hijacking. Just ensure section padding and reveal thresholds feel consistent.

## 12. Forms

- `contact.tsx` and any assessment form: apply `field-focus` utility to `Input`, `Textarea`, `Select` via a small className addition on the form fields (no component API change). Add `transition-colors` on labels, soft success/error states using existing `--destructive` and a new `--success` token-less inline class only if needed (prefer existing tokens).

## 13. Subtle texture

- Add a single SVG noise overlay (`opacity-[0.025]`, `mix-blend-multiply`, fixed) inside `AmbientBackdrop` for premium grain. No patterned imagery.

## 14. Accessibility

- Every new keyframe-driven utility wrapped in `prefers-reduced-motion: no-preference`.
- `AmbientCursorLight` and `CursorFollower` early-return on reduced motion / coarse pointer (already true for cursor follower).
- No animations on focus rings; focus visible kept crisp.
- No color-only state; contrast unchanged.

## Files touched

- Edit: `src/styles.css`, `src/routes/__root.tsx`, `src/components/site/SiteHeader.tsx`, `src/components/ui/button.tsx`, `src/components/site/StatCounter.tsx`, `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/team.tsx`, `src/routes/careers.tsx`, `src/routes/contact.tsx`, `src/routes/faq.tsx`, `src/routes/services.tsx`, `src/routes/services.*.tsx`.
- Create: `src/components/site/AmbientBackdrop.tsx`, `src/components/site/AmbientCursorLight.tsx`.

## Out of scope

- No changes to colors, fonts, copy, layout, routes, or data.
- No new dependencies (framer-motion already present).
- No redesign of any component shell.
