# WeCare2 Domiciliary Care — Phase 1 Plan

Build the design system, site shell (header + footer), and full Home page that visually matches the existing WeCare2 site (we2care.arcthaneai.com). Forms render but are static for now. Remaining pages (About, Services, Team, Why Us, Careers, FAQ, Contact) come in follow-up phases.

## Visual identity (locked from reference)

Extracted from the PDF/logo so every later phase reuses the same tokens.

- **Primary Navy:** deep indigo navy (~`oklch(0.22 0.08 265)`) — used for headlines, dark cards, footer.
- **Primary Red:** vivid coral red (~`oklch(0.62 0.22 25)`) — used for top info bar, CTA buttons, eyebrow labels, accent dots, link arrows.
- **Backgrounds:** white cards on a very soft mint/cream page background (`oklch(0.97 0.015 165)`), plus pure white for inner cards.
- **Typography:** display serif with italic emphasis for headlines (Fraunces), clean humanist sans for body (Inter). Eyebrow labels use small uppercase red with a leading red dot.
- **Shape language:** large 24–32px rounded cards, soft shadows, dark navy "feature" cards with red accent, watercolor/illustrated healthcare imagery.
- **Header:** thin red top info bar (phone · email · address · socials) + white sticky main header with logo left, nav center, red pill CTA right.
- **Footer:** dark navy, 4 columns (brand + quick links + open hours/contact + address), red divider line, copyright row.

These get codified as CSS custom properties in `src/styles.css` (light + dark) and Tailwind tokens, so all later pages inherit automatically.

## Phase 1 deliverables

### Site shell
- `Header` — red top info bar, sticky white nav with all primary links (Home, About, Services dropdown with Personal/Live-In/Companionship/Respite Care, Our Team, Careers, FAQ, Contact), red "Request Care Assessment" pill CTA + outlined "Become A Carer" secondary, and a slide-out mobile sheet menu.
- `Footer` — brand block (logo + tagline), Quick Links, Services, Contact (phone 01229846646, email admin@wecare2.co.uk, hours Mon–Sun 7am–10pm, address Clear Water Fisheries, Warton Carnforth LA6 1FQ), socials, legal row.
- All other pages stubbed as placeholder routes so navigation works.

### Home page sections (matching brief order)
1. **Hero** — illustrated carer/client imagery, eyebrow "Welcome to WeCare2", serif headline "Professional Domiciliary Care In The Comfort Of Your Home", subhead, dual CTAs, 4 trust checkmarks (Fully Trained Carers · Personalized Care Plans · Flexible Scheduling · 24/7 Support).
2. **About Domiciliary Care** — two-column with supporting image, what it is + benefits + independence + family peace of mind, 4.9/5 rating chip + families-supported avatar stack (mirrors reference).
3. **Services Overview** — 6 rounded service cards (Personal Care, Companionship, Medication, Meal Prep, Household, Mobility) with icon, title, copy, red arrow link.
4. **Why Choose WeCare2** — dark navy section, 4 feature cards (Experienced Team, Personalized Plans, Flexible Packages, Reliable Support).
5. **Director's Message** — portrait left, navy serif headline "A Personal Commitment To Exceptional Care", body, pull-quote "Exceptional care begins with genuine compassion.", signature, "Speak With Our Team" CTA, achievements strip (500+ Families, 100+ Professionals, 95% Satisfaction, Fully Qualified).
6. **Our Values** — 5 premium cards (Compassion, Respect, Dignity, Integrity, Independence).
7. **Care Options** — alternating image/text rows for Hourly, Overnight, Live-In, Respite.
8. **How It Works** — 3 numbered steps (Assessment → Plan → Care).
9. **Meet Our Care Team** — intro + 4 sample team cards highlighting DBS, training, vetting.
10. **Compliance & Quality** — trust badges row (Safeguarding, Quality Monitoring, Standards, Training, Vetted Staff, Assessments).
11. **Testimonials** — carousel of client/family quotes with star ratings.
12. **Statistics** — animated counters (500+ / 100+ / 20+ / 95%).
13. **FAQ** — accordion with 8 questions from the brief.
14. **Career Recruitment** — large navy CTA band, 5 benefits, "Apply Now".
15. **Contact** — two-column: caregiver image left, static form right (Name, Email, Phone, Service Required select, Message, submit shows toast).

### Imagery
Generate ~8 illustrated healthcare images (hero, about, director portrait, care options, contact) in the same warm watercolor/illustration style as the reference, plus reuse the uploaded logo. Stock-photo substitutes only where illustration would slow the build.

### Behavior
- Fully responsive, mobile-first (375px → 1440px+).
- Smooth fade-in / scale-in entrance animations on scroll.
- Sticky header with subtle shadow on scroll.
- Accordion + carousel + animated counters work client-side.
- SEO `head()` meta on every route (route-specific title, description, OG tags). Home gets the OG image.

### Out of scope for Phase 1
- About, Services (individual + sub-service pages), Our Team, Why Choose Us, Careers, FAQ, Contact full pages — stubbed only.
- Backend / form submission — forms are static, toast on submit.
- CMS, blog, multi-language.

## Technical notes
- TanStack Start file-based routes under `src/routes/`: `index.tsx` (full Home), plus stub routes for `about`, `services`, `services.personal-care`, `services.live-in-care`, `services.companionship-care`, `services.respite-care`, `team`, `careers`, `faq`, `contact`.
- Design tokens in `src/styles.css` via `@theme inline` (navy, red, mint surface, card, foreground, muted, ring, radius scale, shadow-elegant, gradient-hero).
- Fraunces + Inter loaded via `<link>` in `__root.tsx` head, registered as `--font-display` / `--font-sans` tokens.
- Shared components: `SiteHeader`, `SiteFooter`, `SectionEyebrow`, `ServiceCard`, `ValueCard`, `StepCard`, `StatCounter`, `TestimonialCarousel`, `FAQAccordion`, `ContactForm`. All consume tokens — no hardcoded hex.
- Logo (`imgi_1_logo-removebg-preview.png`) registered via lovable-assets and used in header + footer.
- All shadcn primitives reused (Accordion, Carousel, Sheet, Button, Input, Textarea, Select, Sonner toast).

After you approve I'll execute Phase 1, then we'll iterate page-by-page on the remaining sections.
