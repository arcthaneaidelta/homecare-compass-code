import { createFileRoute, Link } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/site/Reveal";
import {
  ArrowUpRight,
  Check,
  Star,
  ShieldCheck,
  HeartHandshake,
  Users,
  Clock,
  Pill,
  UtensilsCrossed,
  Home as HomeIcon,
  Activity,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  BadgeCheck,
  ClipboardCheck,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Eyebrow } from "@/components/site/Eyebrow";
import { StatCounter } from "@/components/site/StatCounter";
import { cn } from "@/lib/utils";

import heroImg from "@/assets/hero-domiciliary.webp";
import aboutImg from "@/assets/about-care.webp";
import masonWardImg from "@/assets/mason-ward-director.png.asset.json";
import hourlyImg from "@/assets/care-hourly.webp";
import overnightImg from "@/assets/care-overnight.webp";
import liveinImg from "@/assets/care-livein.webp";
import respiteImg from "@/assets/care-respite.webp";
import contactImg from "@/assets/contact-carer.webp";


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
      <Reveal><AboutDomiciliary /></Reveal>
      <Reveal><ServicesOverview /></Reveal>
      <Reveal><WhyChooseUs /></Reveal>
      <Reveal><DirectorMessage /></Reveal>
      <Reveal><OurValues /></Reveal>
      <Reveal><CareOptions /></Reveal>
      <Reveal><HowItWorks /></Reveal>
      <Reveal><CareTeam /></Reveal>
      <Reveal><Compliance /></Reveal>
      <Reveal><Testimonials /></Reveal>
      <Reveal><Stats /></Reveal>
      <Reveal><FAQ /></Reveal>
      <Reveal><CareerCTA /></Reveal>
      <Reveal><ContactSection /></Reveal>
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
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  const ease = [0.22, 1, 0.36, 1] as const;
  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.1 + i * 0.12, ease },
    }),
  };

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8">
        <div className="relative overflow-hidden rounded-[32px] bg-navy text-navy-foreground shadow-elegant">
          <motion.img
            src={heroImg}
            alt="WeCare2 caregiver supporting an elderly woman at home"
            className="absolute inset-0 size-full object-cover opacity-65 will-change-transform"
            width={1600}
            height={1024}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            style={prefersReducedMotion ? undefined : { y: imageY, scale: imageScale }}
          />

          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/55 to-navy/30"
            style={prefersReducedMotion ? undefined : { opacity: overlayOpacity }}
          />

          {!prefersReducedMotion && (
            <>
              <div
                aria-hidden
                className="pointer-events-none absolute -left-24 top-10 size-72 rounded-full opacity-60 mix-blend-screen blur-3xl animate-drift"
                style={{ background: "radial-gradient(circle, oklch(0.62 0.215 25 / 0.55), transparent 70%)" }}
              />
              <div
                aria-hidden
                className="pointer-events-none absolute right-[-6rem] bottom-[-4rem] size-96 rounded-full opacity-50 mix-blend-screen blur-3xl animate-drift"
                style={{ background: "radial-gradient(circle, oklch(0.55 0.12 250 / 0.55), transparent 70%)", animationDelay: "-6s" }}
              />
              <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
                {[
                  { l: "12%", t: "22%", d: "0s",  s: "6px" },
                  { l: "78%", t: "30%", d: "-2s", s: "4px" },
                  { l: "40%", t: "75%", d: "-4s", s: "8px" },
                  { l: "65%", t: "62%", d: "-1s", s: "5px" },
                  { l: "22%", t: "60%", d: "-3s", s: "4px" },
                  { l: "88%", t: "78%", d: "-5s", s: "7px" },
                ].map((p, i) => (
                  <span
                    key={i}
                    className="absolute rounded-full bg-white/40 animate-float"
                    style={{ left: p.l, top: p.t, width: p.s, height: p.s, animationDelay: p.d }}
                  />
                ))}
              </div>
            </>
          )}
          <div className="relative grid gap-10 px-6 py-16 sm:px-12 sm:py-24 lg:py-32">
            <div className="max-w-3xl">
              <motion.div initial="hidden" animate="show" custom={0} variants={fadeUp}>
                <Eyebrow className="text-brand-red">Welcome to WeCare2</Eyebrow>
              </motion.div>
              <motion.h1
                initial="hidden"
                animate="show"
                custom={1}
                variants={fadeUp}
                className="mt-5 text-balance text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Professional Domiciliary Care{" "}
                <span className="display-italic text-white/95">in the comfort of your home.</span>
              </motion.h1>
              <motion.p
                initial="hidden"
                animate="show"
                custom={2}
                variants={fadeUp}
                className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg"
              >
                Compassionate, reliable and personalised home care that helps individuals
                maintain independence, dignity and quality of life — supported by a team you can trust.
              </motion.p>
              <motion.div
                initial="hidden"
                animate="show"
                custom={3}
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-brand-red px-6 text-brand-red-foreground shadow-lg transition-transform hover:bg-brand-red/90 hover:scale-[1.03]"
                >
                  <Link to="/contact">
                    Request Care Assessment <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-white/40 bg-white/0 px-6 text-white backdrop-blur transition-transform hover:bg-white/10 hover:text-white hover:scale-[1.03]"
                >
                  <Link to="/careers">Become A Carer</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } },
              }}
              className="mt-2 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {[
                "Fully Trained Carers",
                "Personalised Care Plans",
                "Flexible Scheduling",
                "24/7 Support",
              ].map((t) => (
                <motion.div
                  key={t}
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                  }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-medium text-white backdrop-blur"
                >
                  <span className="grid size-6 place-items-center rounded-full bg-brand-red">
                    <Check className="size-3.5 text-white" />
                  </span>
                  {t}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About Domiciliary ---------------- */
function AboutDomiciliary() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="group overflow-hidden rounded-[32px] shadow-card">
            <img
              src={aboutImg}
              alt="Elderly man reading while caregiver brings tea"
              className="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              width={1200}
              height={1200}
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 hidden rounded-2xl bg-white px-5 py-4 shadow-elegant sm:flex sm:items-center sm:gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="size-9 rounded-full border-2 border-white bg-gradient-to-br from-brand-red/70 to-navy/70" />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-0.5 text-brand-red">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold text-navy">4.9/5 Family Rating</p>
              <p className="text-[11px] text-muted-foreground">500+ families supported</p>
            </div>
          </div>
        </div>

        <div>
          <Eyebrow>About Domiciliary Care</Eyebrow>
          <h2 className="mt-4 text-balance text-3xl sm:text-4xl md:text-5xl">
            Care delivered <span className="display-italic text-brand-red">where you feel most at home.</span>
          </h2>
          <p className="mt-5 text-muted-foreground sm:text-lg">
            Domiciliary care brings trained, compassionate carers directly to your door — so your
            loved one can stay surrounded by familiar comforts, routines and memories.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              { t: "Remain in your own home", d: "Familiar surroundings reduce stress and support wellbeing." },
              { t: "Protect independence and dignity", d: "Care is shaped around how you choose to live." },
              { t: "Peace of mind for families", d: "Consistent updates, trained carers and 24/7 support." },
            ].map((it) => (
              <li key={it.t} className="flex gap-4">
                <span className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-full bg-accent text-brand-red">
                  <Check className="size-4" />
                </span>
                <div>
                  <p className="font-semibold text-navy">{it.t}</p>
                  <p className="text-sm text-muted-foreground">{it.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Services Overview ---------------- */
const SERVICES = [
  { icon: HeartHandshake, title: "Personal Care", desc: "Discreet support with bathing, dressing, hygiene and continence — always with dignity.", to: "/services/personal-care" },
  { icon: Users, title: "Companionship Care", desc: "Warm conversation, hobbies and trips out that brighten every day.", to: "/services/companionship-care" },
  { icon: Pill, title: "Medication Assistance", desc: "Reliable prompts, administration and tracking by trained carers.", to: "/services" },
  { icon: UtensilsCrossed, title: "Meal Preparation", desc: "Nourishing, home-cooked meals tailored to taste, culture and dietary needs.", to: "/services" },
  { icon: HomeIcon, title: "Household Support", desc: "Light housekeeping, laundry and errands that keep home running smoothly.", to: "/services" },
  { icon: Activity, title: "Mobility Assistance", desc: "Safe transfers, walking support and gentle exercise to keep you moving.", to: "/services" },
];

function ServicesOverview() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <Eyebrow>Our Services</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              Professional home care rooted in{" "}
              <span className="display-italic text-brand-red">compassion.</span>
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            Every WeCare2 service is built around a personalised plan, delivered by trained
            carers and supervised by experienced coordinators.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, desc, to }) => (
            <Link
              key={title}
              to={to}
              className="card-lift group flex flex-col gap-4 rounded-3xl border border-border bg-card p-7 shadow-soft"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-brand-red transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="size-6" />
              </span>
              <h3 className="text-xl font-semibold text-navy">{title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                Learn more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Why Choose Us ---------------- */
function WhyChooseUs() {
  const items = [
    { t: "Experienced Care Team", d: "Carers and coordinators with years of frontline experience in nursing and care home management." },
    { t: "Personalised Care Plans", d: "Every plan is shaped around the person — their routines, preferences and goals." },
    { t: "Flexible Care Packages", d: "From hourly visits to live-in care, our packages flex around your changing needs." },
    { t: "Reliable & Consistent", d: "The same trusted faces wherever possible, with 24/7 support behind every visit." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative overflow-hidden rounded-[32px] bg-navy px-6 py-16 text-navy-foreground sm:px-12 sm:py-20">
        <div className="absolute inset-0 opacity-30" style={{ background: "radial-gradient(800px 400px at 80% 0%, oklch(0.62 0.215 25 / 0.35), transparent 60%)" }} />
        <div className="relative grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <Eyebrow className="text-brand-red">Why Choose Us</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl text-white sm:text-4xl md:text-5xl">
              Dedicated to comfort, dignity{" "}
              <span className="display-italic text-white/95">and true compassion.</span>
            </h2>
            <p className="mt-5 max-w-md text-white/75">
              We pair carefully recruited carers with the right clients — and back them with
              ongoing training, supervision and 24/7 support.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <div key={it.t} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                <div className="grid size-10 place-items-center rounded-xl bg-brand-red">
                  <Sparkles className="size-5 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">{it.t}</h3>
                <p className="mt-2 text-sm text-white/70">{it.d}</p>
              </div>
            ))}
          </div>
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
            <div className="overflow-hidden rounded-[32px] shadow-elegant">
              <img
                src={masonWardImg.url}
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
            <p className="mt-4 text-muted-foreground">
              Every carer we welcome is carefully selected, fully trained and supported. Every care
              plan is built around the person — never the schedule. That's our promise.
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

            <div className="mt-10 grid gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft sm:grid-cols-4">
              {[
                ["500+", "Families Supported"],
                ["100+", "Care Professionals"],
                ["95%", "Satisfaction Rate"],
                ["100%", "Fully Qualified"],
              ].map(([n, l]) => (
                <div key={l} className="text-center">
                  <div className="font-display text-2xl font-medium text-navy">{n}</div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Our Values ---------------- */
const VALUES = [
  { t: "Compassion", d: "Every visit begins with genuine kindness and patience." },
  { t: "Respect", d: "Care that honours your choices, identity and routines." },
  { t: "Dignity", d: "Discreet, considerate support — always on your terms." },
  { t: "Integrity", d: "Honest communication with families, always." },
  { t: "Independence", d: "Care that supports — never replaces — what you can do." },
];

function OurValues() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">Our Values</Eyebrow>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
          The principles that <span className="display-italic text-brand-red">guide every visit.</span>
        </h2>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {VALUES.map((v, i) => (
          <div
            key={v.t}
            className={cn(
              "rounded-3xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1",
              i === 2 && "bg-navy text-navy-foreground border-navy",
            )}
          >
            <div className={cn(
              "grid size-10 place-items-center rounded-xl",
              i === 2 ? "bg-brand-red text-white" : "bg-accent text-brand-red",
            )}>
              <HeartHandshake className="size-5" />
            </div>
            <h3 className={cn("mt-4 text-lg font-semibold", i === 2 ? "text-white" : "text-navy")}>{v.t}</h3>
            <p className={cn("mt-2 text-sm", i === 2 ? "text-white/75" : "text-muted-foreground")}>{v.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Care Options ---------------- */
const OPTIONS = [
  { img: hourlyImg, title: "Hourly Care", desc: "From short check-in visits to several hours of daily support — flexible care that fits your routine.", bullets: ["Visits from 30 minutes", "Daily personal care", "Errands & companionship"] },
  { img: overnightImg, title: "Overnight Care", desc: "A trained carer on hand through the night for reassurance, mobility support and medication.", bullets: ["Sleeping or waking nights", "Medication overnight", "Help with toileting"] },
  { img: liveinImg, title: "Live-In Care", desc: "A dedicated carer living in your home — a trusted alternative to moving into residential care.", bullets: ["24/7 dedicated support", "Continuity & companionship", "Complex needs supported"] },
  { img: respiteImg, title: "Respite Care", desc: "Short-term, flexible care that gives family carers a well-deserved break with total peace of mind.", bullets: ["Days, weeks or longer", "After hospital discharge", "Holiday cover"] },
];

function CareOptions() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow className="justify-center">Care Options</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            Choose the care that <span className="display-italic text-brand-red">fits your life.</span>
          </h2>
        </div>

        <div className="mt-14 flex flex-col gap-16">
          {OPTIONS.map((o, i) => (
            <div
              key={o.title}
              className={cn(
                "grid items-center gap-10 lg:grid-cols-2",
                i % 2 === 1 && "lg:[&>div:first-child]:order-2",
              )}
            >
              <div className="overflow-hidden rounded-[28px] shadow-card">
                <img src={o.img} alt={o.title} className="size-full object-cover" width={1280} height={960} loading="lazy" />
              </div>
              <div>
                <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wider text-brand-red">
                  Option {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-3xl sm:text-4xl">{o.title}</h3>
                <p className="mt-3 text-muted-foreground sm:text-lg">{o.desc}</p>
                <ul className="mt-6 space-y-2">
                  {o.bullets.map((b) => (
                    <li key={b} className="flex items-center gap-3 text-sm">
                      <Check className="size-4 text-brand-red" />
                      <span className="text-navy">{b}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-7 h-11 rounded-full bg-navy px-5 text-navy-foreground hover:bg-navy/90">
                  <Link to="/contact">Discuss this option <ArrowUpRight className="size-4" /></Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- How It Works ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", t: "Request A Free Assessment", d: "Tell us about you or your loved one. We'll arrange a free, no-obligation visit." },
    { n: "02", t: "Receive A Personalised Plan", d: "Together we build a care plan around routines, preferences and goals." },
    { n: "03", t: "Start Care With A Qualified Carer", d: "Care begins with the carer matched to you — supported 24/7 by our team." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">How It Works</Eyebrow>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
          Care that starts <span className="display-italic text-brand-red">with a conversation.</span>
        </h2>
      </div>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="relative rounded-3xl border border-border bg-card p-8 shadow-soft">
            <span className="font-display text-5xl font-medium text-brand-red/30">{s.n}</span>
            <h3 className="mt-4 text-xl font-semibold text-navy">{s.t}</h3>
            <p className="mt-3 text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Care Team ---------------- */
function CareTeam() {
  const features = [
    { icon: ShieldCheck, t: "DBS Checked", d: "Every carer fully vetted." },
    { icon: GraduationCap, t: "Trained To Standard", d: "Care Certificate and beyond." },
    { icon: BadgeCheck, t: "Continuous Development", d: "Ongoing supervision & training." },
    { icon: ClipboardCheck, t: "Quality Monitored", d: "Regular audits and reviews." },
  ];
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <Eyebrow>Our Care Team</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              People you can <span className="display-italic text-brand-red">truly trust.</span>
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              We recruit for warmth and character first — then invest in the training, supervision
              and support that turns good carers into great ones.
            </p>
            <Button asChild className="mt-6 h-11 rounded-full bg-brand-red px-5 text-brand-red-foreground hover:bg-brand-red/90">
              <Link to="/team">Meet The Team <ArrowUpRight className="size-4" /></Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="grid size-11 place-items-center rounded-xl bg-accent text-brand-red">
                  <Icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-navy">{t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Compliance ---------------- */
function Compliance() {
  const items = [
    "Safeguarding Policies",
    "Quality Monitoring",
    "Professional Standards",
    "Continuous Training",
    "Fully Vetted Staff",
    "Care Assessments",
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <Eyebrow className="justify-center">Compliance &amp; Quality</Eyebrow>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
          Built on the standards <span className="display-italic text-brand-red">families deserve.</span>
        </h2>
      </div>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it} className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
            <span className="grid size-11 place-items-center rounded-xl bg-navy text-white">
              <ShieldCheck className="size-5" />
            </span>
            <span className="font-semibold text-navy">{it}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const TESTIMONIALS = [
  { name: "Lauren Sharna", role: "Home Carer", text: "Worked with WeCare2 for a few months. Would highly recommend. I felt supported and all my questions were answered. If you're seeking flexibility, this company is for you." },
  { name: "James Hopper", role: "Son of Client", text: "The team at WeCare2 brought calm and confidence into our home. Mum is happier, safer and still very much herself — and that's everything to us." },
  { name: "Diane Hawthorne", role: "Daughter of Client", text: "Compassionate, professional and always communicative. I never worry — and that peace of mind is priceless." },
  { name: "Michael Reid", role: "Client", text: "My carer arrives like clockwork and treats me like family. WeCare2 has given me back my independence." },
];

function Testimonials() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Eyebrow>Testimonials</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              Heartfelt feedback from <span className="display-italic text-brand-red">people who chose us.</span>
            </h2>
          </div>
        </div>

        <Carousel className="mt-12" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {TESTIMONIALS.map((t) => (
              <CarouselItem key={t.name} className="md:basis-1/2 lg:basis-1/3">
                <div className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft">
                  <div className="flex items-center gap-1 text-brand-red">
                    {[...Array(5)].map((_, i) => <Star key={i} className="size-4 fill-current" />)}
                  </div>
                  <Quote className="mt-5 size-6 text-brand-red/40" />
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-foreground/85">"{t.text}"</p>
                  <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                    <div className="size-10 rounded-full bg-gradient-to-br from-brand-red/70 to-navy/70" />
                    <div>
                      <p className="font-semibold text-navy">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="mt-8 flex justify-end gap-2">
            <CarouselPrevious className="static size-11 translate-x-0 translate-y-0 rounded-full border-navy/20 bg-card text-navy hover:bg-navy hover:text-white">
              <ChevronLeft className="size-4" />
            </CarouselPrevious>
            <CarouselNext className="static size-11 translate-x-0 translate-y-0 rounded-full border-navy/20 bg-card text-navy hover:bg-navy hover:text-white">
              <ChevronRight className="size-4" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="rounded-[32px] bg-navy px-6 py-14 sm:px-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { to: 500, suffix: "+", label: "Clients Supported" },
            { to: 100, suffix: "+", label: "Care Professionals" },
            { to: 20, suffix: "+", label: "Service Areas" },
            { to: 95, suffix: "%", label: "Satisfaction Rate" },
          ].map((s) => (
            <StatCounter key={s.label} {...s} inverted />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
const FAQS = [
  { q: "What is domiciliary care?", a: "Domiciliary care brings trained carers into your own home to provide support with daily living — from personal care and medication to companionship and household help." },
  { q: "How much does care cost?", a: "Cost depends on the type and frequency of care you need. After a free assessment we'll provide a clear, transparent quote tailored to your care plan." },
  { q: "Can services be customised?", a: "Yes — every WeCare2 care plan is built around the individual. You choose what support you need, when and how it's delivered." },
  { q: "Are your carers trained?", a: "Every WeCare2 carer is fully DBS-checked, holds the Care Certificate and receives continuous supervision and additional specialist training." },
  { q: "What areas do you cover?", a: "We currently support 20+ service areas across the UK. Get in touch with your postcode and we'll confirm availability." },
  { q: "Is overnight care available?", a: "Yes — we offer both sleeping and waking night care, and full live-in care for round-the-clock support." },
  { q: "How quickly can care start?", a: "In many cases care can start within 48–72 hours of your assessment. Urgent and hospital-discharge cases are prioritised." },
  { q: "How do I book an assessment?", a: "Use the form below, call 01229 846646 or email admin@wecare2.co.uk and a coordinator will be in touch within one working day." },
];

function FAQ() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <Eyebrow className="justify-center">FAQ</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            Everything you need to know about <span className="display-italic text-brand-red">home care.</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="mt-10 space-y-3">
          {FAQS.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="overflow-hidden rounded-2xl border border-border bg-card px-5 shadow-soft">
              <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="font-display text-sm text-brand-red">{String(i + 1).padStart(2, "0")}</span>
                  {f.q}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

/* ---------------- Career CTA ---------------- */
function CareerCTA() {
  const benefits = ["Flexible Hours", "Competitive Pay", "Ongoing Training", "Career Growth", "Supportive Environment"];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
      <div className="relative overflow-hidden rounded-[32px] bg-navy px-6 py-16 text-navy-foreground sm:px-12 sm:py-20">
        <div className="absolute -right-20 -top-20 size-80 rounded-full bg-brand-red/30 blur-3xl" />
        <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Eyebrow className="text-brand-red">Careers</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl text-white sm:text-4xl md:text-5xl">
              Join our team of <span className="display-italic">professional carers.</span>
            </h2>
            <p className="mt-5 max-w-xl text-white/80">
              We'll take care of uniforms, DBS checks and training — so you can focus on what truly
              matters: delivering exceptional care.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {benefits.map((b) => (
                <span key={b} className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-white">
                  {b}
                </span>
              ))}
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="rounded-3xl bg-white p-8 text-center shadow-elegant">
              <p className="font-display text-xl italic text-navy">Ready to make a difference?</p>
              <p className="mt-2 text-sm text-muted-foreground">Apply in minutes — we respond within one working day.</p>
              <Button asChild size="lg" className="mt-6 h-12 rounded-full bg-brand-red px-7 text-brand-red-foreground hover:bg-brand-red/90">
                <Link to="/careers">Apply Now <ArrowUpRight className="size-4" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact Section ---------------- */
function ContactSection() {
  const [submitting, setSubmitting] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Thank you — we'll be in touch within one working day.");
      (e.target as HTMLFormElement).reset();
    }, 700);
  };
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-[32px] shadow-elegant">
            <img src={contactImg} alt="Friendly WeCare2 caregiver" className="size-full object-cover" width={1200} height={1400} loading="lazy" />
          </div>
          <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/95 px-5 py-4 backdrop-blur sm:max-w-xs">
            <div className="flex items-center gap-2">
              <Clock className="size-4 text-brand-red" />
              <p className="text-sm font-semibold text-navy">Mon – Sun · 7am – 10pm</p>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">Out of hours? Leave a message and we'll call you back first thing.</p>
          </div>
        </div>

        <div>
          <Eyebrow>Contact Us</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            Caring support, <span className="display-italic text-brand-red">starts here.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us a little about your situation and a senior coordinator will reach out to arrange
            a free, no-obligation care assessment.
          </p>

          <form onSubmit={onSubmit} className="mt-8 grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Full Name" name="name" type="text" required placeholder="Jane Smith" />
              <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Phone Number" name="phone" type="tel" required placeholder="07700 900000" />
              <div>
                <label className="mb-1.5 block text-sm font-medium text-navy">Service Required</label>
                <Select>
                  <SelectTrigger className="h-11 rounded-xl">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    {["Personal Care", "Companionship Care", "Live-In Care", "Overnight Care", "Respite Care", "Dementia Support", "Other / Not Sure"].map((s) => (
                      <SelectItem key={s} value={s}>{s}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-navy">Message</label>
              <Textarea name="message" rows={5} placeholder="Tell us a little about the support you're looking for…" className="rounded-xl" />
            </div>
            <Button type="submit" disabled={submitting} size="lg" className="mt-2 h-12 w-full rounded-full bg-brand-red text-brand-red-foreground hover:bg-brand-red/90 sm:w-auto sm:self-start sm:px-7">
              {submitting ? "Sending…" : (
                <>Request A Care Consultation <ArrowUpRight className="size-4" /></>
              )}
            </Button>
            <p className="text-xs text-muted-foreground">By submitting, you agree to be contacted by WeCare2 about your enquiry.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="mb-1.5 block text-sm font-medium text-navy">{label}</label>
      <Input className="h-11 rounded-xl" {...props} />
    </div>
  );
}
