import { useEffect, useRef, useState } from "react";

/**
 * Extremely subtle radial light that follows the cursor.
 * Disabled on coarse pointers and when reduced motion is requested.
 */
export function AmbientCursorLight() {
  const ref = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const cur = { x: target.x, y: target.y };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const tick = () => {
      cur.x += (target.x - cur.x) * 0.12;
      cur.y += (target.y - cur.y) * 0.12;
      if (ref.current) {
        ref.current.style.background = `radial-gradient(280px at ${cur.x}px ${cur.y}px, color-mix(in oklab, var(--color-brand-red) 7%, transparent), transparent 60%)`;
      }
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  if (!enabled) return null;
  return <div ref={ref} aria-hidden className="pointer-events-none fixed inset-0 z-0 mix-blend-multiply" />;
}
