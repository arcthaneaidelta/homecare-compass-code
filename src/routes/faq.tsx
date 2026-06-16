import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { PageHero } from "@/components/site/PageHero";
import { CtaBand } from "@/components/site/CtaBand";
import { Eyebrow } from "@/components/site/Eyebrow";
import aboutImg from "@/assets/about-care.webp";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — WeCare2 Domiciliary Care" },
      { name: "description", content: "Answers to common questions about WeCare2's home care services, assessments, pricing, carers and safeguarding." },
      { property: "og:title", content: "WeCare2 FAQ" },
      { property: "og:description", content: "Honest answers to the questions families ask us most." },
      { property: "og:image", content: aboutImg },
    ],
  }),
  component: FAQPage,
});

const GROUPS: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "Getting Started",
    items: [
      { q: "How do I arrange care with WeCare2?", a: "Call us on 01229 846646 or send a message via our contact form. A coordinator will arrange a free, no-obligation home assessment — usually within 24 hours." },
      { q: "Is the assessment really free?", a: "Yes. There is no charge and no obligation. We'll discuss needs, preferences and routines so we can recommend the right package for you." },
      { q: "How quickly can care start?", a: "For most non-complex packages, care can begin within a few days of the assessment. Live-in placements may take 1–2 weeks to match the right carer." },
    ],
  },
  {
    title: "Care & Carers",
    items: [
      { q: "Are your carers trained and DBS-checked?", a: "Every WeCare2 carer is enhanced DBS-checked, completes the Care Certificate, and is paired with a senior carer for shadow shifts before working independently." },
      { q: "Will the same carer visit every time?", a: "Wherever possible, yes. Consistency matters, so we build small, dedicated teams around each client to ensure familiar faces and routines." },
      { q: "Can you support people with dementia?", a: "Yes. Our carers receive specialist dementia training and follow personalised plans designed around the person's history and preferences." },
    ],
  },
  {
    title: "Pricing & Hours",
    items: [
      { q: "How much does home care cost?", a: "Pricing depends on the type and frequency of care. We'll provide a clear, written quote after your free assessment — with no hidden fees." },
      { q: "Is there a minimum visit length?", a: "Most visits are a minimum of one hour to give carers time to deliver quality care without rushing." },
      { q: "Do you offer overnight or 24-hour care?", a: "Yes — we offer waking nights, sleeping nights and live-in care for round-the-clock support." },
    ],
  },
  {
    title: "Safety & Standards",
    items: [
      { q: "How do you handle safeguarding?", a: "WeCare2 follows national safeguarding standards. Every concern is documented, escalated and acted on, with clear policies and trained safeguarding leads." },
      { q: "Are you regulated?", a: "We operate within the framework of the relevant UK home care regulator, with full policies, complaints procedures and quality monitoring." },
      { q: "What happens if a carer can't make a visit?", a: "Our coordination team arranges cover from another trained carer, and we let you know straight away. There's always someone on call 24/7." },
    ],
  },
];

function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title="Honest answers to"
        italic="the questions families ask most."
        description="Everything you need to know about starting care with WeCare2 — from assessments and pricing through to safeguarding and our carers."
        image={aboutImg}
        crumbs={[{ label: "FAQ" }]}
      />

      <section className="mx-auto max-w-4xl px-6 py-20 sm:py-24">
        <div className="space-y-14">
          {GROUPS.map((g) => (
            <div key={g.title}>
              <Eyebrow>{g.title}</Eyebrow>
              <Accordion type="single" collapsible className="mt-4 divide-y divide-border rounded-3xl border border-border bg-card shadow-soft">
                {g.items.map((it, i) => (
                  <AccordionItem key={i} value={`${g.title}-${i}`} className="border-0 px-6">
                    <AccordionTrigger className="py-5 text-left text-base font-semibold text-navy hover:no-underline">
                      {it.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-5 text-sm leading-relaxed text-muted-foreground">
                      {it.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-3 rounded-3xl bg-surface p-8 text-center shadow-soft">
          <p className="font-display text-2xl text-navy">Still have a question?</p>
          <p className="max-w-md text-sm text-muted-foreground">
            Our care team is happy to talk things through — no pressure, no obligation.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-medium text-brand-red-foreground hover:bg-brand-red/90"
          >
            Speak with our team <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
