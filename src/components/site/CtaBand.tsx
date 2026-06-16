import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Eyebrow } from "./Eyebrow";

export function CtaBand({
  eyebrow = "Get In Touch",
  title = "Ready to arrange compassionate care?",
  italic = "We're here to help.",
  description = "Speak with our care team for a free, no-obligation home assessment — usually within 24 hours.",
}: {
  eyebrow?: string;
  title?: string;
  italic?: string;
  description?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
      <div className="relative overflow-hidden rounded-[32px] bg-navy px-6 py-14 text-navy-foreground sm:px-12 sm:py-20">
        <div
          className="absolute inset-0 opacity-30"
          style={{ background: "radial-gradient(700px 360px at 90% 0%, oklch(0.62 0.215 25 / 0.4), transparent 60%)" }}
        />
        <div className="relative grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Eyebrow className="text-brand-red">{eyebrow}</Eyebrow>
            <h2 className="mt-4 text-balance text-3xl text-white sm:text-4xl md:text-5xl">
              {title} <span className="display-italic text-white/95">{italic}</span>
            </h2>
            <p className="mt-4 max-w-xl text-white/75">{description}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3 lg:justify-end">
            <Button asChild size="lg" className="h-12 rounded-full bg-brand-red px-6 text-brand-red-foreground hover:bg-brand-red/90">
              <Link to="/contact">
                Request Assessment <ArrowUpRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-white/40 px-6 text-white hover:bg-white/10 hover:text-white">
              <a href="tel:01229846646">
                <Phone className="size-4" /> 01229 846646
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
