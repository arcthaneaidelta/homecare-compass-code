import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Eyebrow } from "./Eyebrow";

export function PagePlaceholder({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
        {description}
      </p>
      <div className="mt-10 inline-flex flex-col items-center gap-3 rounded-3xl bg-surface px-8 py-8 shadow-soft sm:flex-row sm:px-10">
        <p className="text-sm text-muted-foreground">
          This page is being prepared. In the meantime, get in touch — we're here to help.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-medium text-brand-red-foreground transition-colors hover:bg-brand-red/90"
        >
          Contact us <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
