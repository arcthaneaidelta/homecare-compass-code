import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  image,
  crumbs = [],
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description: string;
  image: string;
  crumbs?: { label: string; to?: string }[];
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 sm:pt-8">
      <div className="relative overflow-hidden rounded-[32px] bg-navy text-navy-foreground shadow-elegant">
        <img
          src={image}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-55"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/65 to-navy/35" />
        <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:py-24">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-white/70">
            <Link to="/" className="hover:text-white">Home</Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <ChevronRight className="size-3" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-white">{c.label}</Link>
                ) : (
                  <span className="text-white">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <div className="mt-5 max-w-3xl">
            <Eyebrow className="text-brand-red">{eyebrow}</Eyebrow>
            <h1 className="mt-4 text-balance text-4xl leading-[1.05] text-white sm:text-5xl md:text-6xl">
              {title}
              {italic && <> <span className="display-italic text-white/95">{italic}</span></>}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
