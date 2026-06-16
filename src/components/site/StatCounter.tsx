import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function StatCounter({
  to,
  suffix = "",
  label,
  duration = 1600,
  inverted = false,
}: {
  to: number;
  suffix?: string;
  label: string;
  duration?: number;
  inverted?: boolean;
}) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setValue(Math.round(eased * to));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className={cn("font-display text-5xl font-medium sm:text-6xl", inverted ? "text-white" : "text-navy")}>
        {value}
        <span className="text-brand-red">{suffix}</span>
      </div>
      <div className={cn("mt-2 text-sm font-medium uppercase tracking-wider", inverted ? "text-white/70" : "text-muted-foreground")}>
        {label}
      </div>
    </div>
  );
}
