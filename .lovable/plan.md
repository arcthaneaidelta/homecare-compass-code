# Homepage Rebuild — Carely Layout, WeCare2 Brand

Replace the current `src/routes/index.tsx` homepage with a section-for-section reconstruction of the Carely reference (`demo.awaikenthemes.com/carely/index.html`), keeping our existing WeCare2 colors, fonts, content, and images. The header, footer, ambient backdrop, cursor system, and global tokens stay exactly as they are.

## Section order (matching the reference exactly)

1. **Hero** — large H1 left, hero image right, "Discover The Power Of Premium" rotating badge over image, dual CTA buttons, working-hours card.
2. **Trust / Feature strip** — three small icon cards: "Family-Like Bonds", "Comfort That Never Compromises on Dignity", "Every Detail Designed with Seniors in Mind".
3. **About Us** — eyebrow "About Us", H2 "Dedicated to compassionate domiciliary care…", two stacked images (one offset), bullet list with check icons, signature/CTA row.
4. **Our Services** — eyebrow "Our Services", H2, 5 service cards in an asymmetric grid (large left card + 4 smaller right) mapping to our services: Personal Care, Live-In Care, Companionship, Respite, Overnight/Dementia.
5. **Service CTA banner** — "Ready to start your journey…" full-width image band with overlay text and circular CTA button.
6. **Why Choose Us** — eyebrow, H2, left image + right list of 3 reasons with numbered icons (Compassionate Staff, State-of-the-Art Service, Holistic Approach).
7. Directors Message -- same as of now. 
8. **How It Works** — 4-step horizontal timeline with connector line: Free Consultation, Caregiver Matching, Ongoing Support, Regular Check-ins.
9. **Stats / Our Facts** — dark navy band with 4 animated counters (reuse `StatCounter`): Happy Clients, Years Experience, Carers, Hours of Care.
10. **Consultation CTA** — split layout: left image, right form/CTA "Schedule a personalized assessment".
11. **Features highlight** — "Designed for comfort and everyday living" with icon grid (4 items).
12. **Testimonials** — large 4.9 rating block on left, testimonial carousel/cards on right.
13. **FAQ** — accordion of 5–6 questions, left intro column + right accordion.
14. **Reviews strip** — small marquee/grid of 3 short review quotes with avatars.
15. **Blog teaser** — 3 article cards with image, date, title, "Read more" link.
16. **Final CTA Band** — reuse existing `CtaBand` component.

## Animation & interaction parity

Match the reference site's motion vocabulary using our existing libraries (framer-motion + Tailwind utilities already wired):

- **Reveal on scroll** — reuse `Reveal` for every section heading, paragraph, and card grid with staggered delays (0, 0.08, 0.16…).
- **Image parallax** — hero image and about images use `useScroll` + `useTransform` for subtle Y translate + scale (already pattern in Hero).
- **Rotating badge** — keep current `spin` animation on "Discover The Power Of Premium" disc badge; also apply to service CTA circular button.
- **Card hover** — translate-y -4px, shadow lift, border tint to brand-red, icon scale 1.1 + 6deg rotate (extend existing `card-lift` utility).
- **Image hover zoom** — service/blog images use `img-zoom` (internal `scale-105` on hover, overflow hidden).
- **Number counters** — `StatCounter` IntersectionObserver count-up (already implemented).
- **Accordion** — shadcn `Accordion` with smooth height + chevron rotation.
- **Marquee** — testimonials/reviews use CSS `@keyframes` horizontal scroll with `motion-safe` guard.
- **Button micro-press** — existing `active:scale-[0.98]` from `buttonVariants`.
- **prefers-reduced-motion** honored everywhere via `useReducedMotion` and `motion-safe:` utilities.

## Brand mapping (no color/font changes)

- Reference orange/green → our `brand-red` and `navy`.
- Reference cream sections → our `bg-surface` / `bg-accent`.
- Reference Plus Jakarta Sans / Lora → keep our existing display + body fonts.
- All images reuse current `src/assets/*.webp` (about-care, care-hourly, care-livein, care-overnight, care-respite, contact-carer, director-portrait, hero-domiciliary).

## Files

- **Edit** `src/routes/index.tsx` — replace all section components below `Hero` (keep `Route` export, meta, `HomePage` shell). Hero gets minor tweaks to match the badge placement exactly.
- **Edit** `src/styles.css` — add `@keyframes marquee` + `.animate-marquee` utility and any small helpers (`.img-zoom`, `.step-connector`) if missing.
- **No** changes to header, footer, root layout, routing, or other routes.

## Out of scope

- No color palette, typography, or design-token changes.
- No content rewrites beyond what's needed to fill the new section structure (uses existing copy where it fits, paraphrased domiciliary-care text otherwise).
- No new dependencies.
- No backend, routing, or data-layer work.