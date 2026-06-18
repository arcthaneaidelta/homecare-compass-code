import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowUpRight,
  Check,
  Star,
  ShieldCheck,
  HeartHandshake,
  Users,
  Sparkles,
  Brain,
  UtensilsCrossed,
  Stethoscope,
  HomeIcon,
  Phone,
  ClipboardCheck,
  UserCheck,
  Repeat,

  CalendarCheck,
  Quote,
  BadgeCheck,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "@/components/site/Eyebrow";
import { StatCounter } from "@/components/site/StatCounter";
import { CtaBand } from "@/components/site/CtaBand";
import { cn } from "@/lib/utils";

import heroImg from "@/assets/hero-domiciliary.webp";
import aboutImg from "@/assets/about-care.webp";
import hourlyImg from "@/assets/care-hourly.webp";
import overnightImg from "@/assets/care-overnight.webp";
import liveinImg from "@/assets/care-livein.webp";
import respiteImg from "@/assets/care-respite.webp";
import contactImg from "@/assets/contact-carer.webp";

const DIRECTOR_IMAGE_URL = "/mason-ward-director.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WeCare2 Domiciliary Care — Compassionate Home Care UK" },
      {
        name: "description",
        content:
          "Professional domiciliary care in the comfort of your home. Personalised, compassionate care that supports independence and dignity across the UK.",
      },
      { property: "og:title", content: "WeCare2 Domiciliary Care" },
      {
        property: "og:description",
        content: "Compassionate, reliable home care that supports independence and dignity.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
    links: [
      { rel: "preload", as: "image", href: heroImg, fetchpriority: "high" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Reveal><AboutSection /></Reveal>
      <Reveal><ServicesSection /></Reveal>
      <Reveal><ServiceCtaBanner /></Reveal>
      <Reveal><WhyChooseUs /></Reveal>
      <Reveal><DirectorMessage /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><StatsBand /></Reveal>
      <Reveal><ConsultationCta /></Reveal>
      <Reveal><FeatureHighlights /></Reveal>
      <Reveal><TestimonialsSection /></Reveal>
      <Reveal><FaqSection /></Reveal>
      <Reveal><ReviewsMarquee /></Reveal>
      <Reveal><BlogTeaser /></Reveal>
      <CtaBand />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.06, 1.14]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1 + i * 0.1, ease },
    }),
  };

  const trustItems = [
    { icon: Users, t: "Family-Like Bonds, Not Just Carers and Clients" },
    { icon: ShieldCheck, t: "Comfort That Never Compromises on Dignity" },
    { icon: Sparkles, t: "Every Detail Designed Around Each Individual" },
  ];

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8">
        <div className="grid gap-5 lg:grid-cols-[1.05fr_1fr]">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="relative overflow-hidden rounded-[32px] bg-navy p-8 text-navy-foreground shadow-elegant sm:p-12 lg:p-14"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-60"
              style={{
                background:
                  "radial-gradient(700px 400px at 110% 110%, color-mix(in oklab, var(--color-brand-red) 22%, transparent), transparent 60%)",
              }}
            />
            <div className="relative flex h-full flex-col">
              <motion.div variants={fadeUp} custom={1}>
                <Eyebrow className="text-brand-red">Discover The Power Of Premium</Eyebrow>
              </motion.div>
              <motion.h1
                variants={fadeUp}
                custom={2}
                className="mt-5 text-balance text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl"
              >
                Delivering compassionate home care that honours each{" "}
                <span className="display-italic text-white/95">individual&apos;s life journey.</span>
              </motion.h1>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="mt-8 max-w-md text-sm leading-relaxed text-white/80 sm:text-base"
              >
                At WeCare2, we understand that ageing is a deeply personal journey. That&apos;s
                why we focus on personalised, person-centred care that nurtures mind, body and spirit.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={4}
                className="mt-10 flex items-center gap-5"
              >
                <Link
                  to="/contact"
                  aria-label="Request care assessment"
                  className="group relative grid size-28 shrink-0 place-items-center rounded-full border border-brand-red/40"
                >
                  <svg
                    viewBox="0 0 100 100"
                    className={cn(
                      "absolute inset-0 size-full text-brand-red",
                      !prefersReducedMotion && "motion-safe:animate-[spin_18s_linear_infinite]",
                    )}
                    aria-hidden
                  >
                    <defs>
                      <path
                        id="hero-badge-circle"
                        d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
                      />
                    </defs>
                    <text fill="currentColor" className="text-[11px] uppercase tracking-[0.18em]">
                      <textPath href="#hero-badge-circle">
                        Book Assessment • Book Assessment •
                      </textPath>
                    </text>
                  </svg>
                  <ArrowUpRight className="size-6 text-brand-red transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <div className="flex flex-col gap-2">
                  <Button
                    asChild
                    size="lg"
                    className="h-11 rounded-full bg-brand-red px-5 text-brand-red-foreground shadow-lg hover:bg-brand-red/90"
                  >
                    <Link to="/contact">Request Care Assessment</Link>
                  </Button>
                  <Button
                    asChild
                    variant="link"
                    className="justify-start px-0 text-white/80 hover:text-white"
                  >
                    <Link to="/careers">Become A Carer →</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease }}
            className="relative overflow-hidden rounded-[32px] shadow-elegant min-h-[340px] lg:min-h-0"
          >
            <motion.img
              src={heroImg}
              alt="WeCare2 caregiver supporting an elderly woman at home"
              className="absolute inset-0 size-full object-cover will-change-transform"
              width={1600}
              height={1024}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              style={prefersReducedMotion ? undefined : { y: imageY, scale: imageScale }}
            />
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } } }}
          className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr_1fr]"
        >
          <motion.div
            variants={fadeUp}
            className="img-zoom relative rounded-[28px] shadow-card min-h-[200px]"
          >
            <img
              src={aboutImg}
              alt="Caregiver with senior in a bright home"
              className="absolute inset-0 size-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="rounded-[28px] bg-accent p-7 text-navy shadow-card sm:p-8"
          >
            <h3 className="text-xl font-semibold sm:text-2xl">Working Hours</h3>
            <p className="mt-2 max-w-xs text-sm text-navy/75">
              We believe care should always be available — with the right people, at the right time.
            </p>
            <div className="my-5 h-px w-full bg-navy/15" />
            <dl className="space-y-2 text-sm">
              <div className="flex items-center justify-between">
                <dt className="text-navy/80">Monday – Friday</dt>
                <dd className="font-semibold">8:00 AM – 8:00 PM</dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-navy/80">Saturday – Sunday</dt>
                <dd className="font-semibold">On-Call 24/7</dd>
              </div>
            </dl>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="hidden rounded-[28px] bg-surface p-7 shadow-card sm:p-8 lg:block"
          >
            <Eyebrow>Trusted Across The UK</Eyebrow>
            <div className="mt-4 flex items-center gap-1 text-brand-red">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-current" />
              ))}
              <span className="ml-2 text-sm font-semibold text-navy">4.9 / 5</span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Rated by 500+ families for compassionate, dependable home care.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-navy">
                <BadgeCheck className="size-3.5 text-brand-red" /> CQC Aligned
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-navy">
                <ShieldCheck className="size-3.5 text-brand-red" /> DBS Checked
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-5 rounded-full border border-border bg-surface px-6 py-4 shadow-soft"
        >
          <ul className="grid gap-4 sm:grid-cols-3">
            {trustItems.map(({ icon: Icon, t }) => (
              <li key={t} className="flex items-center gap-3 text-sm font-medium text-navy">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent text-brand-red">
                  <Icon className="size-4" />
                </span>
                {t}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function AboutSection() {
  const ABOUT_POINTS = [
    "Person-centred care plans built around routines, preferences and goals.",
    "Carefully matched carers — same familiar face, visit after visit.",
    "Fully trained, DBS-checked and continuously supported staff.",
    "Family portal with real-time visit notes and updates.",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
        {/* Stacked images */}
        <div className="relative">
          <div className="img-zoom rounded-[32px] shadow-elegant">
            <img
              src={aboutImg}
              alt="Carer supporting a senior in their living room"
              className="aspect-[4/5] size-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="img-zoom absolute -bottom-10 -right-4 hidden w-2/3 rounded-[24px] border-8 border-background shadow-elegant sm:block">
            <img
              src={liveinImg}
              alt="Carer assisting with daily activities"
              className="aspect-[5/4] size-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="absolute -left-4 top-6 hidden rounded-2xl bg-white px-4 py-3 shadow-elegant md:flex md:items-center md:gap-3">
            <span className="grid size-10 place-items-center rounded-full bg-accent text-brand-red">
              <HeartHandshake className="size-5" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Since 2018</p>
              <p className="font-display text-base text-navy">Care with heart</p>
            </div>
          </div>
        </div>

        {/* Copy */}
        <div>
          <Eyebrow>About Us</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
            Dedicated to quality home care with{" "}
            <span className="display-italic text-brand-red">compassion and respect</span> always.
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            WeCare2 is a UK domiciliary care provider supporting people to live independently
            and well in their own home. From a few hours a week of companionship to round-the-clock
            live-in care, we tailor every plan to the person — never the schedule.
          </p>

          <ul className="mt-7 grid gap-3 sm:grid-cols-2">
            {ABOUT_POINTS.map((p) => (
              <li key={p} className="flex items-start gap-3 text-sm text-navy">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-red text-white">
                  <Check className="size-3.5" />
                </span>
                <span className="leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-full bg-brand-red px-6 text-brand-red-foreground cta-glow hover:bg-brand-red/90"
            >
              <Link to="/about">
                More About Us <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="grid size-10 place-items-center rounded-full bg-accent text-brand-red">
                <Phone className="size-4" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-wider">Speak to our team</p>
                <a href="tel:01229846646" className="font-semibold text-navy hover:text-brand-red">
                  01229 846646
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services (asymmetric) ---------------- */
const SERVICES = [
  { icon: HeartHandshake, t: "Personal Care", d: "Discreet support with bathing, dressing, hygiene and continence.", img: hourlyImg, to: "/services/personal-care" },
  { icon: HomeIcon, t: "Live-In Care", d: "Round-the-clock dedicated care from a carer who lives with you.", img: liveinImg, to: "/services/live-in-care" },
  { icon: Users, t: "Companionship Care", d: "Warm conversation, hobbies and trips out that brighten every day.", img: aboutImg, to: "/services/companionship-care" },
  { icon: CalendarCheck, t: "Respite Care", d: "Flexible cover that gives family carers a well-deserved break.", img: respiteImg, to: "/services/respite-care" },
  { icon: Brain, t: "Dementia & Overnight", d: "Specialist, patient support through day and night.", img: overnightImg, to: "/services" },
];

function ServicesSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
              Personalised support for a{" "}
              <span className="display-italic text-brand-red">better quality of life.</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="h-11 rounded-full border-navy/15 px-5">
            <Link to="/services">
              All Services <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          {/* Large feature card */}
          <Link
            to={SERVICES[0].to}
            className="group card-lift img-zoom relative flex min-h-[460px] flex-col justify-end overflow-hidden rounded-[32px] bg-navy p-8 text-white shadow-card lg:row-span-2"
          >
            <img
              src={SERVICES[0].img}
              alt={SERVICES[0].t}
              className="absolute inset-0 size-full object-cover opacity-70"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/60 to-transparent" />
            <div className="relative">
              <span className="inline-grid size-12 place-items-center rounded-2xl bg-brand-red text-brand-red-foreground transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                <HeartHandshake className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl text-white sm:text-3xl">{SERVICES[0].t}</h3>
              <p className="mt-3 max-w-md text-sm text-white/85">{SERVICES[0].d}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
                Learn more
                <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          {/* Right side: 2x2 grid of small cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {SERVICES.slice(1).map(({ icon: Icon, t, d, to }) => (
              <Link
                key={t}
                to={to}
                className="group card-lift flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-brand-red transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="size-6" />
                </span>
                <h3 className="text-lg font-semibold text-navy">{t}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
                <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                  Learn more
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Service CTA Banner ---------------- */
function ServiceCtaBanner() {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="relative overflow-hidden rounded-[32px] shadow-elegant">
        <img
          src={contactImg}
          alt="Carer with senior client"
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-transparent" />
        <div className="relative grid gap-10 px-8 py-16 sm:px-14 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <Eyebrow className="text-brand-red">Your Trusted Partner</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl text-white sm:text-4xl md:text-5xl">
              Ready to start your journey to{" "}
              <span className="display-italic text-white/95">comfort and recovery?</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/80">
              From a free home assessment to a fully tailored care plan — we make
              arranging care simple, transparent and stress-free.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <Link
              to="/contact"
              aria-label="Request care assessment"
              className="group relative grid size-36 place-items-center rounded-full bg-brand-red text-brand-red-foreground shadow-elegant transition-transform duration-500 hover:scale-105"
            >
              <svg
                viewBox="0 0 100 100"
                className={cn(
                  "absolute inset-0 size-full text-white/90",
                  !prefersReducedMotion && "motion-safe:animate-[spin_20s_linear_infinite]",
                )}
                aria-hidden
              >
                <defs>
                  <path id="cta-circle" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
                </defs>
                <text fill="currentColor" className="text-[10px] uppercase tracking-[0.22em]">
                  <textPath href="#cta-circle">
                    Get Started • Get Started •
                  </textPath>
                </text>
              </svg>
              <ArrowUpRight className="size-8 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose Us ---------------- */
const REASONS = [
  { icon: HeartHandshake, t: "Compassionate & Experienced Staff", d: "Carefully selected carers with real warmth, deep training and ongoing support." },
  { icon: ShieldCheck, t: "Outstanding Standards of Service", d: "CQC-aligned policies, DBS-checked staff and rigorous quality monitoring." },
  { icon: Sparkles, t: "Holistic Approach to Wellbeing", d: "Care that nurtures mind and body — companionship, nutrition and routine matter." },
];
function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
        <div className="img-zoom relative rounded-[32px] shadow-elegant">
          <img
            src={liveinImg}
            alt="Carer with senior client at home"
            className="aspect-[4/5] size-full object-cover"
            loading="lazy"
          />
          <div className="absolute -right-4 bottom-8 hidden rounded-2xl bg-white px-5 py-4 shadow-elegant sm:block">
            <div className="flex items-center gap-1 text-brand-red">
              {[...Array(5)].map((_, i) => <Star key={i} className="size-3.5 fill-current" />)}
            </div>
            <p className="mt-1 text-sm font-semibold text-navy">4.9 / 5 average rating</p>
            <p className="text-xs text-muted-foreground">From 500+ families across the UK</p>
          </div>
        </div>
        <div>
          <Eyebrow>Why Choose Us</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
            A community where seniors{" "}
            <span className="display-italic text-brand-red">thrive, not just survive.</span>
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            We blend professional clinical standards with genuine human warmth — the kind of care
            we would want for our own families.
          </p>
          <ol className="mt-8 space-y-5">
            {REASONS.map(({ icon: Icon, t, d }, i) => (
              <li
                key={t}
                className="group flex items-start gap-5 rounded-2xl border border-transparent p-4 transition-all duration-500 hover:border-border hover:bg-card hover:shadow-card"
              >
                <span className="relative grid size-14 shrink-0 place-items-center rounded-2xl bg-accent text-brand-red transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Icon className="size-6" />
                  <span className="absolute -right-1 -top-1 grid size-6 place-items-center rounded-full bg-brand-red text-[11px] font-bold text-brand-red-foreground">
                    {i + 1}
                  </span>
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Director Message ---------------- */
function DirectorMessage() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative">
            <div className="img-zoom rounded-[32px] shadow-elegant">
              <img
                src={DIRECTOR_IMAGE_URL}
                alt="Mason Ward, Director of Care at WeCare2"
                className="size-full object-cover"
                width={1024}
                height={1280}
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-5 left-6 right-6 rounded-2xl bg-white px-5 py-4 shadow-elegant sm:left-auto sm:right-6 sm:max-w-xs">
              <div className="flex items-center gap-2 text-brand-red">
                <Quote className="size-4" />
                <span className="text-xs font-semibold uppercase tracking-wider">A Note From Our Director</span>
              </div>
              <p className="mt-1 font-display text-base italic text-navy">
                "Exceptional care begins with genuine compassion."
              </p>
            </div>
          </div>

          <div>
            <Eyebrow>Director's Message</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
              A personal commitment to{" "}
              <span className="display-italic text-brand-red">exceptional care.</span>
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              WeCare2 was founded to bring person-centred, family-focused care into more homes
              across the UK. We hold ourselves to the same standard we would expect for our own
              loved ones — compassion, dignity, independence and complete trust.
            </p>

            <div className="mt-8 flex items-end gap-4">
              <div>
                <p className="font-display text-2xl italic text-navy">Mason Ward</p>
                <p className="text-sm text-muted-foreground">Director of Care, WeCare2</p>
              </div>
              <Button asChild className="ml-auto h-11 rounded-full bg-brand-red px-5 text-brand-red-foreground hover:bg-brand-red/90">
                <Link to="/contact">
                  Speak With Our Team <ArrowUpRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How It Works ---------------- */
const STEPS = [
  { icon: Phone, t: "Free Consultation", d: "We listen and learn about your needs, routines and goals." },
  { icon: ClipboardCheck, t: "Tailored Care Plan", d: "A bespoke plan written with you and your family, not for you." },
  { icon: UserCheck, t: "Caregiver Matching", d: "We carefully match a small team of carers to your personality and needs." },
  { icon: Repeat, t: "Ongoing Reviews", d: "Regular check-ins so the plan grows with you over time." },
];
function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">How It Works</Eyebrow>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
          Your trusted partner in{" "}
          <span className="display-italic text-brand-red">home health and wellness.</span>
        </h2>
      </div>

      <div className="relative mt-16">
        {/* connector line */}
        <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent lg:block" />
        <ol className="grid gap-8 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, t, d }, i) => (
            <li key={t} className="group relative text-center">
              <div className="relative mx-auto grid size-14 place-items-center rounded-full border-2 border-brand-red/30 bg-background text-brand-red transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-6">
                <Icon className="size-6" />
                <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-brand-red text-xs font-bold text-brand-red-foreground shadow-soft">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Stats Band ---------------- */
function StatsBand() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="relative overflow-hidden rounded-[32px] bg-navy px-6 py-14 sm:px-12">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{ background: "radial-gradient(800px 320px at 0% 100%, color-mix(in oklab, var(--color-brand-red) 30%, transparent), transparent 60%)" }}
        />
        <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow className="text-brand-red">Our Facts</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl text-white sm:text-4xl">
              Our home care impact in{" "}
              <span className="display-italic text-white/95">real numbers.</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <StatCounter to={500} suffix="+" label="Happy Families" inverted />
            <StatCounter to={12} suffix="+" label="Years Experience" inverted />
            <StatCounter to={100} suffix="+" label="Care Professionals" inverted />
            <StatCounter to={95} suffix="%" label="Satisfaction" inverted />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Consultation CTA ---------------- */
function ConsultationCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="img-zoom rounded-[32px] shadow-elegant">
          <img
            src={contactImg}
            alt="Friendly carer chatting with family"
            className="aspect-[5/4] size-full object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <Eyebrow>Join Us Today</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
            Schedule a personalised{" "}
            <span className="display-italic text-brand-red">tour or care consultation.</span>
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            A free, no-obligation conversation is the easiest first step. Our coordinators
            will guide you through every option and answer every question.
          </p>
          <ul className="mt-7 space-y-3 text-sm text-navy">
            {[
              "Usually within 24 hours of contact",
              "Free in-home assessment with no obligation",
              "Detailed written care proposal and pricing",
            ].map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-red text-white">
                  <Check className="size-3.5" />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-12 rounded-full bg-brand-red px-6 text-brand-red-foreground hover:bg-brand-red/90 cta-glow">
              <Link to="/contact">Request Assessment <ArrowUpRight className="size-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-6">
              <a href="tel:01229846646"><Phone className="size-4" /> 01229 846646</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------- Feature Highlights ---------------- */
const FEATURES = [
  { icon: HeartHandshake, t: "Social & Wellbeing" },
  { icon: Brain, t: "Dementia Support" },
  { icon: UtensilsCrossed, t: "Nutritious Meals" },
  { icon: Stethoscope, t: "Skilled Nursing" },
];
function FeatureHighlights() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">Comfort & Care</Eyebrow>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
          Designed for comfort care and{" "}
          <span className="display-italic text-brand-red">everyday living.</span>
        </h2>
      </div>
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map(({ icon: Icon, t }) => (
          <div key={t} className="card-lift group flex flex-col items-center gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-soft">
            <span className="grid size-16 place-items-center rounded-full bg-accent text-brand-red transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Icon className="size-7" />
            </span>
            <h3 className="text-lg font-semibold text-navy">{t}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { q: "WeCare2 has been a blessing for our mum. The carers are warm, patient and treat her with such dignity.", a: "Sarah J.", r: "Daughter, Lancaster" },
  { q: "Our live-in carer feels like part of the family. Dad is happier at home than he has been in years.", a: "Peter M.", r: "Son, Carnforth" },
  { q: "From the first assessment they were honest and reassuring. The whole experience has been outstanding.", a: "Helen B.", r: "Wife, Kendal" },
];
function TestimonialsSection() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.4fr]">
          <div className="rounded-[32px] bg-navy p-8 text-white shadow-elegant sm:p-10">
            <Eyebrow className="text-brand-red">Testimonials</Eyebrow>
            <div className="mt-4 flex items-center gap-3">
              <span className="font-display text-6xl font-medium text-white">4.9</span>
              <div>
                <div className="flex text-brand-red">
                  {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                </div>
                <p className="text-xs text-white/70">From 500+ verified reviews</p>
              </div>
            </div>
            <h2 className="mt-6 text-balance text-2xl text-white sm:text-3xl">
              Real voices. Real care.{" "}
              <span className="display-italic text-white/90">Real peace of mind.</span>
            </h2>
            <p className="mt-3 text-sm text-white/75">
              Families across the UK trust WeCare2 to support the people they love most.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <figure
                key={i}
                className="card-lift flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <Quote className="size-7 text-brand-red" />
                <blockquote className="text-sm leading-relaxed text-navy">"{t.q}"</blockquote>
                <figcaption className="mt-auto">
                  <div className="font-semibold text-navy">{t.a}</div>
                  <div className="text-xs text-muted-foreground">{t.r}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "How quickly can care begin?", a: "Most packages start within 5–7 days of your initial assessment, with urgent cases supported sooner." },
  { q: "Are your carers fully vetted?", a: "Yes — every carer is enhanced DBS-checked, reference-verified and trained to Skills for Care standards." },
  { q: "Can we change the care plan over time?", a: "Absolutely. Your plan is reviewed regularly and can be adjusted any time as needs change." },
  { q: "Do you provide live-in care?", a: "Yes. A live-in carer moves in with you to provide round-the-clock support and companionship." },
  { q: "How are visits monitored?", a: "Every visit is logged digitally with notes available to nominated family members through our portal." },
];
function FaqSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.2fr]">
        <div>
          <Eyebrow>FAQs</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
            Get the answers you need about{" "}
            <span className="display-italic text-brand-red">our home care.</span>
          </h2>
          <p className="mt-5 text-muted-foreground">
            Can't see your question? Speak with a friendly coordinator — no obligation, ever.
          </p>
          <Button asChild className="mt-6 h-11 rounded-full bg-brand-red px-5 text-brand-red-foreground hover:bg-brand-red/90">
            <Link to="/contact">Talk To Our Team <ArrowUpRight className="size-4" /></Link>
          </Button>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="rounded-2xl border border-border bg-card px-5 shadow-soft transition-shadow hover:shadow-card"
            >
              <AccordionTrigger className="text-left text-base font-semibold text-navy hover:text-brand-red">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Reviews Marquee ---------------- */
const REVIEWS = [
  "Brilliant team — kind, professional and reliable.",
  "Mum loves her carers. We finally have peace of mind.",
  "Outstanding service from the very first phone call.",
  "Truly compassionate care delivered with a smile.",
  "Made a stressful time so much easier for our family.",
  "Trustworthy, punctual and genuinely caring people.",
];
function ReviewsMarquee() {
  const items = [...REVIEWS, ...REVIEWS];
  return (
    <section className="bg-surface py-14">
      <div className="overflow-hidden">
        <div className="flex w-max gap-4 motion-safe:animate-marquee">
          {items.map((r, i) => (
            <div
              key={i}
              className="flex shrink-0 items-center gap-3 rounded-full border border-border bg-card px-6 py-3 text-sm text-navy shadow-soft"
            >
              <Star className="size-4 fill-current text-brand-red" />
              <span>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Blog Teaser ---------------- */
const POSTS = [
  {
    img: aboutImg,
    date: "10 Jun 2026",
    t: "Simple Activities That Boost Senior Mental Health",
    d: "Small daily rituals that nurture mood, memory and connection.",
  },
  {
    img: liveinImg,
    date: "02 Jun 2026",
    t: "Family Involvement in Care: Staying Connected",
    d: "How families and carers can work together for the best outcomes.",
  },
  {
    img: respiteImg,
    date: "24 May 2026",
    t: "Navigating the Costs of Home Care: What to Know",
    d: "A clear guide to funding options, allowances and planning ahead.",
  },
];
function BlogTeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-2xl">
          <Eyebrow>From The Journal</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
            Explore articles that nurture,{" "}
            <span className="display-italic text-brand-red">educate and inspire.</span>
          </h2>
        </div>
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {POSTS.map((p) => (
          <article key={p.t} className="card-lift group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
            <div className="img-zoom relative aspect-[4/3]">
              <img src={p.img} alt={p.t} className="absolute inset-0 size-full object-cover" loading="lazy" />
              <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-navy shadow-soft">
                {p.date}
              </span>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-navy transition-colors group-hover:text-brand-red">{p.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.d}</p>
              <Link to="/contact" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                Read More <ChevronRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
