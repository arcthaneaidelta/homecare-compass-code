import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "./PageHero";
import { CtaBand } from "./CtaBand";
import { Eyebrow } from "./Eyebrow";

export type ServicePageProps = {
  slug: string;
  eyebrow: string;
  title: string;
  italic: string;
  description: string;
  image: string;
  intro: string;
  includes: string[];
  benefits: { icon: LucideIcon; t: string; d: string }[];
  idealFor: string[];
};

export function ServicePage(p: ServicePageProps) {
  return (
    <>
      <PageHero
        eyebrow={p.eyebrow}
        title={p.title}
        italic={p.italic}
        description={p.description}
        image={p.image}
        crumbs={[{ label: "Services", to: "/services" }, { label: p.eyebrow }]}
      />

      {/* Intro + image */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[32px] shadow-card">
            <img src={p.image} alt={p.title} className="size-full object-cover" loading="lazy" />
          </div>
          <div>
            <Eyebrow>What's Included</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Person-centred care, <span className="display-italic text-brand-red">tailored to you.</span>
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">{p.intro}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {p.includes.map((i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-accent text-brand-red">
                    <Check className="size-3.5" />
                  </span>
                  <span className="text-navy">{i}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>Key Benefits</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Care that brings <span className="display-italic text-brand-red">real peace of mind.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {p.benefits.map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
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

      {/* Ideal for */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <Eyebrow>Who It's For</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl">
              Ideal for those who need <span className="display-italic text-brand-red">a little extra support.</span>
            </h2>
            <Button asChild className="mt-6 h-11 rounded-full bg-brand-red px-5 text-brand-red-foreground hover:bg-brand-red/90">
              <Link to="/contact">
                Discuss your needs <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2">
            {p.idealFor.map((i) => (
              <li key={i} className="flex gap-3 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-brand-red text-white">
                  <Check className="size-4" />
                </span>
                <span className="text-sm text-navy">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Next Steps"
        title="Start your care plan"
        italic="in three simple steps."
        description="Free assessment, personalised plan and a matched carer — typically within a week."
      />
    </>
  );
}
