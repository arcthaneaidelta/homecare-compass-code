import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import {
  ArrowUpRight,
  Heart,
  Calendar,
  GraduationCap,
  Wallet,
  Users,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { PageHero } from "@/components/site/PageHero";
import { Eyebrow } from "@/components/site/Eyebrow";
import img from "@/assets/contact-carer.webp";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers At WeCare2 — Become A Carer" },
      { name: "description", content: "Flexible hours, competitive pay, paid training and ongoing support. Build a rewarding career in home care with WeCare2." },
      { property: "og:title", content: "Careers At WeCare2" },
      { property: "og:description", content: "Join a team that genuinely cares — about clients and carers." },
      { property: "og:image", content: img },
    ],
  }),
  component: CareersPage,
});

const BENEFITS = [
  { icon: Wallet, t: "Competitive Pay", d: "Above-average rates with paid travel and holiday pay." },
  { icon: Calendar, t: "Flexible Hours", d: "Choose shifts that fit your life — days, evenings, nights or weekends." },
  { icon: GraduationCap, t: "Paid Training", d: "Full Care Certificate training, paid from day one." },
  { icon: Users, t: "Real Support", d: "Coordinators on call 24/7 and regular catch-ups with your team." },
  { icon: Sparkles, t: "Career Growth", d: "Pathways into senior carer, coordinator and trainer roles." },
];

const ROLES = [
  { t: "Care Assistant", d: "Day visits across our local areas — flexible hours.", type: "Full / part-time" },
  { t: "Live-In Carer", d: "Live-in placements, typically 2 weeks on / 2 weeks off.", type: "Rotational" },
  { t: "Night Carer", d: "Waking nights and overnight cover for clients needing reassurance.", type: "Nights" },
  { t: "Care Coordinator", d: "Office-based role planning rotas and supporting carers.", type: "Full-time" },
];

function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build a rewarding career"
        italic="in home care."
        description="If you're kind, reliable and genuinely want to make a difference, we'd love to hear from you. Flexible hours, paid training and a team that supports you every step."
        image={img}
        crumbs={[{ label: "Careers" }]}
      />

      {/* Benefits */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="max-w-2xl">
          <Eyebrow>Why Work With Us</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
            More than a job — <span className="display-italic text-brand-red">a calling.</span>
          </h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, t, d }) => (
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

      {/* Open roles */}
      <section className="bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <Eyebrow>Open Roles</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              We're hiring across <span className="display-italic text-brand-red">the North West.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {ROLES.map((r) => (
              <div key={r.t} className="flex flex-col gap-3 rounded-3xl border border-border bg-card p-7 shadow-soft sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="inline-block rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-red">
                    {r.type}
                  </span>
                  <h3 className="mt-3 text-xl font-semibold text-navy">{r.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.d}</p>
                </div>
                <Button asChild className="shrink-0 rounded-full bg-brand-red text-brand-red-foreground hover:bg-brand-red/90">
                  <a href="#apply">
                    Apply <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we look for */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>What We Look For</Eyebrow>
            <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl">
              Kindness <span className="display-italic text-brand-red">comes first.</span>
            </h2>
            <p className="mt-5 text-muted-foreground sm:text-lg">
              We hire for character. Experience helps, but compassion, reliability and a willingness to learn matter most.
              Full training is paid and provided.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Warm, patient and reliable",
              "Right to work in the UK",
              "Willing to undergo a DBS check",
              "Good written and spoken English",
              "Driving licence (preferred)",
              "Available for some weekends",
              "Comfortable working alone",
              "Open to ongoing training",
            ].map((i) => (
              <li key={i} className="flex gap-3 rounded-2xl border border-border bg-card p-4 shadow-soft text-sm">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-brand-red text-white">
                  <Check className="size-3.5" />
                </span>
                <span className="text-navy">{i}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Application form */}
      <CareerApplication />
    </>
  );
}

function CareerApplication() {
  const [submitting, setSubmitting] = useState(false);
  return (
    <section id="apply" className="mx-auto max-w-7xl px-6 pb-24">
      <div className="grid gap-12 rounded-[32px] bg-surface p-8 shadow-soft lg:grid-cols-[1fr_1.2fr] lg:p-12">
        <div>
          <Eyebrow>Apply Now</Eyebrow>
          <h2 className="mt-4 text-3xl sm:text-4xl">
            Start your application <span className="display-italic text-brand-red">today.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill in the short form and our recruitment team will be in touch within 2 working days.
            Or call us on <a className="text-brand-red font-semibold" href="tel:01229846646">01229 846646</a>.
          </p>
          <div className="mt-8 flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
            <span className="grid size-10 place-items-center rounded-xl bg-accent text-brand-red">
              <Heart className="size-5" />
            </span>
            <p className="text-sm text-navy">
              We aim to respond to every application — even if we're not hiring right now.
            </p>
          </div>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitting(true);
            setTimeout(() => {
              setSubmitting(false);
              toast.success("Application received — we'll be in touch within 2 working days.");
              (e.target as HTMLFormElement).reset();
            }, 600);
          }}
          className="grid gap-4 rounded-3xl bg-card p-6 shadow-soft sm:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full Name"><Input required name="name" placeholder="Jane Doe" /></Field>
            <Field label="Email"><Input required type="email" name="email" placeholder="jane@example.com" /></Field>
            <Field label="Phone"><Input required type="tel" name="phone" placeholder="07…" /></Field>
            <Field label="Postcode"><Input required name="postcode" placeholder="LA6 1FQ" /></Field>
          </div>
          <Field label="Role of interest">
            <Select name="role">
              <SelectTrigger><SelectValue placeholder="Choose a role" /></SelectTrigger>
              <SelectContent>
                {ROLES.map((r) => <SelectItem key={r.t} value={r.t}>{r.t}</SelectItem>)}
                <SelectItem value="Not Sure">Not sure yet</SelectItem>
              </SelectContent>
            </Select>
          </Field>
          <Field label="Tell us about yourself">
            <Textarea required name="message" rows={5} placeholder="Any care experience, availability, why you'd like to join…" />
          </Field>
          <Button type="submit" disabled={submitting} className="h-12 rounded-full bg-brand-red text-brand-red-foreground hover:bg-brand-red/90">
            {submitting ? "Sending…" : "Submit Application"} <ArrowUpRight className="size-4" />
          </Button>
          <p className="text-[11px] text-muted-foreground">
            By submitting you agree to be contacted about your application. We never share your details.
          </p>
        </form>
      </div>
    </section>
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
