import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";


export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2">
              <img src="/wecare2-logo.png" alt="WeCare2" className="h-10 w-auto" width={110} height={40} />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/70">
              Professional domiciliary care delivered with compassion, dignity and reliability —
              helping people live well in the comfort of their own home.
            </p>
            <div className="mt-6 flex gap-2">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="grid size-9 place-items-center rounded-full border border-white/20 transition-colors hover:bg-brand-red hover:border-brand-red"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Quick Links" links={[
            { label: "Home", to: "/" },
            { label: "About Us", to: "/about" },
            { label: "Our Team", to: "/team" },
            { label: "Careers", to: "/careers" },
            { label: "FAQ", to: "/faq" },
            { label: "Contact", to: "/contact" },
          ]} />

          <FooterCol title="Services" links={[
            { label: "Personal Care", to: "/services/personal-care" },
            { label: "Live-In Care", to: "/services/live-in-care" },
            { label: "Companionship Care", to: "/services/companionship-care" },
            { label: "Respite Care", to: "/services/respite-care" },
            { label: "All Services", to: "/services" },
          ]} />

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Get In Touch
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-red" />
                <a href="tel:01229846646" className="hover:text-white">01229 846646</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-red" />
                <a href="mailto:admin@wecare2.co.uk" className="hover:text-white">admin@wecare2.co.uk</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-red" />
                <span>Monday – Sunday · 7am – 10pm</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-red" />
                <span>Clear Water Fisheries, Warton, Carnforth LA6 1FQ</span>
              </li>
            </ul>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-medium text-brand-red-foreground transition-colors hover:bg-brand-red/90"
            >
              Request Assessment <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-gradient-to-r from-transparent via-brand-red/60 to-transparent" />

        <div className="mt-6 flex flex-col items-start justify-between gap-3 text-xs text-white/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} WeCare2. All rights reserved.</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms &amp; Conditions</a>
            <a href="#" className="hover:text-white">Safeguarding</a>
            <a href="#" className="hover:text-white">Help</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">{title}</h4>
      <ul className="mt-5 space-y-3 text-sm text-white/70">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="link-underline transition-colors hover:text-brand-red"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
