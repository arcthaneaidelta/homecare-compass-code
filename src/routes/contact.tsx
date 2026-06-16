import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { ArrowUpRight, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import img from "@/assets/contact-carer.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact WeCare2 — Request A Free Care Assessment" },
      { name: "description", content: "Speak with the WeCare2 team. Call 01229 846646 or send a message to arrange your free, no-obligation home care assessment." },
      { property: "og:title", content: "Contact WeCare2" },
      { property: "og:description", content: "Free, no-obligation home care assessments across the UK." },
      { property: "og:image", content: img },
    ],
  }),
  component: ContactPage,
});

const DETAILS = [
  { icon: Phone, t: "Call Us", d: "01229 846646", href: "tel:01229846646" },
  { icon: Mail, t: "Email", d: "admin@wecare2.co.uk", href: "mailto:admin@wecare2.co.uk" },
  { icon: Clock, t: "Open Hours", d: "Monday – Sunday · 7am – 10pm" },
  { icon: MapPin, t: "Address", d: "Clear Water Fisheries, Warton, Carnforth LA6 1FQ" },
];

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's talk about"
        italic="the care you need."
        description="A friendly coordinator will guide you through every option — at your pace, with no pressure. Free, no-obligation home assessments usually within 24 hours."
        image={img}
        crumbs={[{ label: "Contact" }]}
      />

      {/* Details strip */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DETAILS.map(({ icon: Icon, t, d, href }) => {
            const Body = (
              <>
                <span className="grid size-11 place-items-center rounded-2xl bg-accent text-brand-red">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">{t}</p>
                  <p className="mt-1 text-sm font-medium text-navy">{d}</p>
                </div>
              </>
            );
            return href ? (
              <a key={t} href={href} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-card">
                {Body}
              </a>
            ) : (
              <div key={t} className="flex items-center gap-4 rounded-3xl border border-border bg-card p-5 shadow-soft">
                {Body}
              </div>
            );
          })}
        </div>
      </section>

      {/* Form + side panel */}
      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="relative overflow-hidden rounded-[32px] bg-navy p-8 text-navy-foreground shadow-elegant sm:p-10">
            <div
              className="absolute inset-0 opacity-30"
              style={{ background: "radial-gradient(500px 280px at 90% 0%, oklch(0.62 0.215 25 / 0.35), transparent 60%)" }}
            />
            <div className="relative">
              <Eyebrow className="text-brand-red">Why Get In Touch</Eyebrow>
              <h2 className="mt-4 text-3xl text-white sm:text-4xl">
                A free home assessment, <span className="display-italic">no obligation.</span>
              </h2>
              <ul className="mt-8 space-y-4 text-sm text-white/85">
                {[
                  "Speak with an experienced care coordinator",
                  "Free, friendly home assessment within 24 hours",
                  "Honest, written quote — no hidden fees",
                  "Care can usually start within a few days",
                ].map((i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 size-2 shrink-0 rounded-full bg-brand-red" />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-brand-red">Out of hours?</p>
                <p className="mt-2 text-sm text-white/85">
                  Our on-call team answers urgent enquiries 24/7. Call <a className="font-semibold text-white" href="tel:01229846646">01229 846646</a>.
                </p>
              </div>
              <div className="mt-8 flex items-center gap-3">
                {[Facebook, Instagram, Twitter].map((Icon, i) => (
                  <a key={i} href="#" aria-label="Social" className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors hover:bg-brand-red hover:border-brand-red">
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Map */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="overflow-hidden rounded-[32px] border border-border shadow-card">
          <iframe
            title="WeCare2 location"
            src="https://www.google.com/maps?q=Warton+Carnforth+LA6+1FQ&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Thank you — we'll be in touch within 24 hours.");
          (e.target as HTMLFormElement).reset();
        }, 600);
      }}
      className="grid gap-4 rounded-[32px] border border-border bg-card p-6 shadow-card sm:p-10"
    >
      <div>
        <Eyebrow>Send A Message</Eyebrow>
        <h2 className="mt-3 text-2xl sm:text-3xl">
          Tell us about <span className="display-italic text-brand-red">your needs.</span>
        </h2>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Your Name"><Input required name="name" placeholder="Jane Doe" /></Field>
        <Field label="Email"><Input required type="email" name="email" placeholder="jane@example.com" /></Field>
        <Field label="Phone"><Input required type="tel" name="phone" placeholder="07…" /></Field>
        <Field label="Postcode"><Input required name="postcode" placeholder="LA6 1FQ" /></Field>
      </div>
      <Field label="Service Required">
        <Select name="service">
          <SelectTrigger><SelectValue placeholder="Select a service" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="personal">Personal Care</SelectItem>
            <SelectItem value="livein">Live-In Care</SelectItem>
            <SelectItem value="companion">Companionship Care</SelectItem>
            <SelectItem value="respite">Respite Care</SelectItem>
            <SelectItem value="overnight">Overnight Care</SelectItem>
            <SelectItem value="other">Something else</SelectItem>
          </SelectContent>
        </Select>
      </Field>
      <Field label="Your Message">
        <Textarea required name="message" rows={5} placeholder="A little about who care is for and what would help…" />
      </Field>
      <Button type="submit" disabled={submitting} className="h-12 rounded-full bg-brand-red text-brand-red-foreground hover:bg-brand-red/90">
        {submitting ? "Sending…" : "Send Message"} <ArrowUpRight className="size-4" />
      </Button>
      <p className="text-[11px] text-muted-foreground">
        By submitting you consent to us contacting you about your enquiry. We never share your details.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="grid gap-1.5">
      <span className="text-xs font-semibold uppercase tracking-wider text-navy">{label}</span>
      {children}
    </label>
  );
}
