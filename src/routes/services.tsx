import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  HeartHandshake,
  Users,
  Pill,
  UtensilsCrossed,
  Home as HomeIcon,
  Activity,
  Moon,
  Sun,
  CalendarClock,
  Brain,
  ShieldPlus,
} from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Eyebrow } from "@/components/site/Eyebrow";

const aboutImg = "/about-care.webp";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Home Care Services — WeCare2 Domiciliary Care" },
      { name: "description", content: "Personal care, live-in care, companionship, respite, dementia support, medication assistance and more — delivered with compassion." },
      { property: "og:title", content: "WeCare2 Home Care Services" },
      { property: "og:description", content: "A full range of professional domiciliary care services tailored to you." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: ServicesPage,
});

const PRIMARY = [
  { icon: HeartHandshake, t: "Personal Care", d: "Discreet, dignified support with bathing, dressing, hygiene and continence.", to: "/services/personal-care" },
  { icon: Sun, t: "Live-In Care", d: "Round-the-clock dedicated care from a carer who lives in your home.", to: "/services/live-in-care" },
  { icon: Users, t: "Companionship Care", d: "Warm conversation, hobbies and trips out that brighten every day.", to: "/services/companionship-care" },
  { icon: CalendarClock, t: "Respite Care", d: "Flexible cover that gives family carers a well-deserved break.", to: "/services/respite-care" },
];

const ADDITIONAL = [
  { icon: Pill, t: "Medication Assistance", d: "Prompts, administration and tracking by trained carers." },
  { icon: UtensilsCrossed, t: "Meal Preparation", d: "Home-cooked meals tailored to taste, culture and dietary needs." },
  { icon: HomeIcon, t: "Household Support", d: "Light housekeeping, laundry and errands to keep home running." },
  { icon: Activity, t: "Mobility Assistance", d: "Safe transfers, walking support and gentle exercise." },
  { icon: Moon, t: "Overnight Care", d: "Reassuring waking or sleeping cover through the night." },
  { icon: Brain, t: "Dementia Support", d: "Specialist, patient care for those living with dementia." },
  { icon: ShieldPlus, t: "Post-Hospital Care", d: "Smooth, supported recovery after a stay in hospital." },
  { icon: HeartHandshake, t: "End-of-Life Care", d: "Compassionate, dignified palliative support at home." },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="A full range of"
        italic="professional home care."
        description="From a few hours a week of companionship to round-the-clock live-in care, every WeCare2 service is built around a personalised plan and delivered by trained, vetted carers."
        image={aboutImg}
        crumbs={[{ label: "Services" }]}
      />

      {/* Primary services */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Core Services</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            Care packages built around <span className="display-italic text-brand-red">your life.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {PRIMARY.map(({ icon: Icon, t, d, to }) => (
            <Link
              key={t}
              to={to}
              className="group flex flex-col gap-4 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-card"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-accent text-brand-red">
                <Icon className="size-6" />
              </span>
              <h3 className="text-2xl font-semibold text-navy">{t}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{d}</p>
              <span className="mt-auto inline-flex items-center gap-1 text-sm font-semibold text-brand-red">
                Learn more <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional services */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>Additional Support</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              Specialist support, <span className="display-italic text-brand-red">whenever you need it.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {ADDITIONAL.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span className="grid size-11 place-items-center rounded-2xl bg-accent text-brand-red">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Not Sure What You Need?"
        title="We'll help you find"
        italic="the right care package."
        description="A free, friendly assessment is the easiest way to start. Our coordinators will guide you through every option."
      />
    </>
  );
}
