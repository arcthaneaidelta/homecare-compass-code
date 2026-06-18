import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  Clock,
  Menu,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  ArrowUpRight,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const SERVICES = [
  { label: "Personal Care", to: "/services/personal-care" },
  { label: "Live-In Care", to: "/services/live-in-care" },
  { label: "Companionship Care", to: "/services/companionship-care" },
  { label: "Respite Care", to: "/services/respite-care" },
] as const;

const NAV = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Team", to: "/team" },
  { label: "Careers", to: "/careers" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50">
      {/* Top info bar */}
      <div className="hidden bg-brand-red text-brand-red-foreground lg:block">
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-[13px]">
          <div className="flex items-center gap-6">
            <a href="tel:01229846646" className="flex items-center gap-2 hover:opacity-90">
              <Phone className="size-3.5" /> 01229 846646
            </a>
            <a href="mailto:admin@wecare2.co.uk" className="flex items-center gap-2 hover:opacity-90">
              <Mail className="size-3.5" /> admin@wecare2.co.uk
            </a>
            <span className="flex items-center gap-2 opacity-90">
              <Clock className="size-3.5" /> Mon – Sun · 7am – 10pm
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook" className="grid size-7 place-items-center rounded-full border border-white/30 hover:bg-white/10">
              <Facebook className="size-3.5" />
            </a>
            <a href="#" aria-label="Instagram" className="grid size-7 place-items-center rounded-full border border-white/30 hover:bg-white/10">
              <Instagram className="size-3.5" />
            </a>
            <a href="#" aria-label="Twitter" className="grid size-7 place-items-center rounded-full border border-white/30 hover:bg-white/10">
              <Twitter className="size-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div
        className={cn(
          "border-b transition-all duration-500 ease-out",
          scrolled
            ? "border-border/60 bg-card/70 shadow-soft backdrop-blur-xl supports-[backdrop-filter]:bg-card/55"
            : "border-transparent bg-card/95 backdrop-blur",
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 transition-[height] duration-400 ease-out sm:px-6",
            scrolled ? "h-[60px]" : "h-[72px]",
          )}
        >
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img src={logoAsset.url} alt="WeCare2" className="h-11 w-auto" width={120} height={44} />
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                Domiciliary Care
              </span>
              <span className="text-[11px] text-muted-foreground">www.wecare2.co.uk</span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {NAV.slice(0, 2).map((n) => (
              <NavLink key={n.to} to={n.to} label={n.label} />
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                Services <ChevronDown className="size-3.5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link to="/services" className="w-full font-medium">
                    All Services
                  </Link>
                </DropdownMenuItem>
                {SERVICES.map((s) => (
                  <DropdownMenuItem key={s.to} asChild>
                    <Link to={s.to} className="w-full">
                      {s.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            {NAV.slice(2).map((n) => (
              <NavLink key={n.to} to={n.to} label={n.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              asChild
              variant="outline"
              className="h-10 rounded-full border-navy/20 px-4 text-navy hover:bg-navy hover:text-navy-foreground"
            >
              <Link to="/careers">Become A Carer</Link>
            </Button>
            <Button
              asChild
              className="h-10 rounded-full bg-brand-red px-5 text-brand-red-foreground shadow hover:bg-brand-red/90"
            >
              <Link to="/contact">
                Request Care Assessment <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          {/* Mobile */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu" className="xl:hidden">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto p-0">
              <SheetHeader className="border-b border-border/60 px-6 py-4 text-left">
                <SheetTitle className="flex items-center gap-2">
                  <img src={logoAsset.url} alt="WeCare2" className="h-9 w-auto" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-red">
                    Domiciliary Care
                  </span>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 px-4 py-6">
                {NAV.slice(0, 2).map((n) => (
                  <MobileLink key={n.to} to={n.to} label={n.label} />
                ))}
                <div className="px-2 pt-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Services
                </div>
                <MobileLink to="/services" label="All Services" />
                {SERVICES.map((s) => (
                  <MobileLink key={s.to} to={s.to} label={s.label} />
                ))}
                <div className="my-2 border-t border-border/60" />
                {NAV.slice(2).map((n) => (
                  <MobileLink key={n.to} to={n.to} label={n.label} />
                ))}
                <div className="mt-6 flex flex-col gap-2 px-2">
                  <SheetClose asChild>
                    <Button asChild className="rounded-full bg-brand-red text-brand-red-foreground hover:bg-brand-red/90">
                      <Link to="/contact">Request Care Assessment</Link>
                    </Button>
                  </SheetClose>
                  <SheetClose asChild>
                    <Button asChild variant="outline" className="rounded-full border-navy/20 text-navy">
                      <Link to="/careers">Become A Carer</Link>
                    </Button>
                  </SheetClose>
                </div>
                <div className="mt-8 space-y-3 rounded-2xl bg-surface px-4 py-4 text-sm text-muted-foreground">
                  <p className="flex items-center gap-2"><Phone className="size-4 text-brand-red" /> 01229 846646</p>
                  <p className="flex items-center gap-2"><Mail className="size-4 text-brand-red" /> admin@wecare2.co.uk</p>
                  <p className="flex items-center gap-2"><Clock className="size-4 text-brand-red" /> Mon – Sun · 7am – 10pm</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="group relative rounded-full px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-brand-red"
      activeProps={{ className: "text-brand-red" }}
      activeOptions={{ exact: to === "/" }}
    >
      <span>{label}</span>
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-3 -bottom-0.5 h-px origin-right scale-x-0 bg-brand-red transition-transform duration-400 ease-out group-hover:origin-left group-hover:scale-x-100"
      />
    </Link>
  );
}

function MobileLink({ to, label }: { to: string; label: string }) {
  return (
    <SheetClose asChild>
      <Link
        to={to}
        className="rounded-xl px-3 py-3 text-[15px] font-medium text-foreground transition-colors hover:bg-surface hover:text-brand-red"
        activeProps={{ className: "bg-surface text-brand-red" }}
        activeOptions={{ exact: to === "/" }}
      >
        {label}
      </Link>
    </SheetClose>
  );
}
