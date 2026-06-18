import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, GraduationCap, BadgeCheck, ClipboardCheck } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Eyebrow } from "@/components/site/Eyebrow";


export const Route = createFileRoute("/team")({
  head: () => ({
    meta: [
      { title: "Our Care Team — WeCare2 Domiciliary Care" },
      { name: "description", content: "Meet the trained, DBS-checked carers and coordinators behind WeCare2 — the people delivering care every day." },
      { property: "og:title", content: "Meet The WeCare2 Care Team" },
      { property: "og:description", content: "Trained, vetted, and chosen for kindness as much as skill." },
      { property: "og:image", content: "/mason-ward-director.png" },
    ],
  }),
  component: TeamPage,
});

const LEADERS = [
  { name: "Mason Ward", role: "Director of Care", bio: "Experienced care leader and founder of WeCare2, committed to compassionate, person-centred home care across the UK." },
  { name: "James O'Connor", role: "Operations Manager", bio: "Leads our coordinator and quality teams across the North West." },
  { name: "Priya Shah", role: "Lead Care Coordinator", bio: "Matches carers to clients and oversees personalised care planning." },
  { name: "Daniel Brooks", role: "Recruitment & Training Lead", bio: "Designs our induction, shadow shifts and ongoing development programme." },
];

const CARERS = [
  { name: "Emma R.", role: "Senior Carer", focus: "Live-in & dementia care" },
  { name: "Michael T.", role: "Senior Carer", focus: "Personal & post-hospital care" },
  { name: "Aisha K.", role: "Companion Carer", focus: "Companionship & social outings" },
  { name: "Robert M.", role: "Night Carer", focus: "Overnight & waking nights" },
];

const STANDARDS = [
  { icon: BadgeCheck, t: "DBS Checked", d: "Enhanced DBS check before any visit." },
  { icon: GraduationCap, t: "Care Certificate", d: "Industry-standard 15-standard training." },
  { icon: ClipboardCheck, t: "Shadow Shifts", d: "Paired with senior carers before working alone." },
  { icon: ShieldCheck, t: "Ongoing Supervision", d: "Regular spot-checks and refresher training." },
];

function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Team"
        title="The people behind"
        italic="every visit."
        description="Carefully selected, fully trained, and chosen for kindness as much as skill. Meet the coordinators and carers delivering WeCare2's care across the UK."
        image="/mason-ward-director.png"
        crumbs={[{ label: "Our Team" }]}
      />

      {/* Leadership */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Leadership</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            Experienced care leaders <span className="display-italic text-brand-red">guiding every plan.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERS.map((p) => (
            <div key={p.name} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-br from-brand-red/15 via-accent to-navy/15" />
              <h3 className="mt-5 text-lg font-semibold text-navy">{p.name}</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">{p.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Carers */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>Our Carers</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              Trained, vetted, and <span className="display-italic text-brand-red">truly compassionate.</span>
            </h2>
            <p className="mt-5 text-muted-foreground">
              For privacy we don't show client-facing carer photos, but every WeCare2 carer is interviewed
              in person, reference-checked, DBS-cleared and trained before stepping into a home.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CARERS.map((p) => (
              <div key={p.name} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <div className="grid size-16 place-items-center rounded-2xl bg-accent font-display text-2xl text-brand-red">
                  {p.name.split(" ")[0][0]}
                </div>
                <h3 className="mt-5 text-lg font-semibold text-navy">{p.name}</h3>
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">{p.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{p.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Our Standards</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            Every carer meets <span className="display-italic text-brand-red">the same high bar.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STANDARDS.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-brand-red">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-navy">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        eyebrow="Join Our Team"
        title="Want to be part of"
        italic="something meaningful?"
        description="We're always looking for kind, reliable carers. Flexible hours, paid training and real support from day one."
      />
    </>
  );
}
