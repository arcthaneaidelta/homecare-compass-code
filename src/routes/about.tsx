import { createFileRoute } from "@tanstack/react-router";
import {
  HeartHandshake,
  ShieldCheck,
  Sparkles,
  Users,
  Compass,
  Target,
  Award,
  Clock,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Eyebrow } from "@/components/site/Eyebrow";

const aboutImg = "/about-care.webp";
const DIRECTOR_IMAGE_URL = "/mason-ward-director.webp";


export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About WeCare2 — Compassionate Domiciliary Care UK" },
      { name: "description", content: "Founded by experienced care leaders, WeCare2 delivers person-centred home care built on compassion, dignity and trust." },
      { property: "og:title", content: "About WeCare2 Domiciliary Care" },
      { property: "og:description", content: "Our mission, values and the team raising the standard of home care across the UK." },
      { property: "og:image", content: aboutImg },
      { name: "twitter:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

const VALUES = [
  { icon: HeartHandshake, t: "Compassion", d: "Every visit begins with genuine kindness and patience." },
  { icon: ShieldCheck, t: "Integrity", d: "Honest, transparent communication with families." },
  { icon: Sparkles, t: "Dignity", d: "Discreet, considerate support — always on your terms." },
  { icon: Users, t: "Respect", d: "Care that honours your choices, identity and routines." },
  { icon: Compass, t: "Independence", d: "Care that supports — never replaces — what you can do." },
  { icon: Award, t: "Excellence", d: "Continual training, supervision and improvement." },
];

const MILESTONES = [
  { y: "2015", t: "Founded", d: "Established by experienced nursing and care home leaders." },
  { y: "2018", t: "Team grows", d: "100+ carers across the North West, all DBS-checked." },
  { y: "2021", t: "Quality awards", d: "Recognised for outstanding family-centred care." },
  { y: "2024", t: "500+ families", d: "Half a thousand families now supported in their own homes." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About WeCare2"
        title="Raising the standard of"
        italic="home care across the UK."
        description="Founded by experienced nursing and care home leaders, WeCare2 was built to bring person-centred, family-focused domiciliary care into more homes — with the warmth, dignity and reliability every person deserves."
        image={aboutImg}
        crumbs={[{ label: "About" }]}
      />

      {/* Story */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] shadow-card">
            <img src={DIRECTOR_IMAGE_URL} alt="Mason Ward, Director of Care at WeCare2" className="size-full object-cover" loading="lazy" />
          </div>
          <div>
            <Eyebrow>Our Story</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              Care that feels <span className="display-italic text-brand-red">personal — because it is.</span>
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              WeCare2 was founded by a team of nurses and care home managers who saw, day after day, how much
              of a difference compassionate, consistent home care could make. We set out to build the kind of
              service we would trust for our own families.
            </p>
            <p className="mt-4 text-muted-foreground">
              Today our trained carers support hundreds of families across the UK — from a few hours a week of
              companionship through to 24/7 live-in care. Every plan is built around the person, never the schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Promise */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              { icon: Target, t: "Our Mission", d: "To deliver domiciliary care that protects independence, dignity and quality of life — at home, where it matters most." },
              { icon: Compass, t: "Our Vision", d: "A UK where every person who needs care can stay safely and happily in their own home, supported by a team they trust." },
              { icon: ShieldCheck, t: "Our Promise", d: "Trained, vetted carers. Personalised plans. Honest communication. 24/7 support. Every single day." },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-border bg-card p-8 shadow-soft">
                <span className="grid size-12 place-items-center rounded-2xl bg-accent text-brand-red">
                  <Icon className="size-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Our Values</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            The principles behind <span className="display-italic text-brand-red">every visit.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-brand-red">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-xl font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>Our Journey</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              Nearly a decade of <span className="display-italic text-brand-red">family-centred care.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {MILESTONES.map((m) => (
              <div key={m.y} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
                <div className="flex items-center gap-2 text-brand-red">
                  <Clock className="size-4" />
                  <span className="font-display text-2xl">{m.y}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-navy">{m.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want to learn more about"
        italic="how we work?"
        description="Speak with our team or arrange a free home assessment — no obligation, no pressure."
      />
    </>
  );
}
