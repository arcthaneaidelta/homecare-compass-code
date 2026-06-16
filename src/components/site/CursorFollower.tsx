import { useEffect, useRef, useState } from "react";

/**
 * Premium secondary cursor enhancement.
 * - Keeps the OS cursor visible (no `cursor:` override).
 * - Tight dot + soft trailing ring that gently magnetises to interactive elements.
 * - Short, low-opacity trail of 8 particles with smooth interpolation and soft blur.
 * - Disabled on coarse pointers (touch) and when reduced motion is requested.
 */

const TRAIL_COUNT = 8;
const INTERACTIVE_SEL =
  'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"], article, .card-lift';

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 1024px)").matches;
    if (!fine || reduced || !wide) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y, s: 1, o: 0 };
    const trail = Array.from({ length: TRAIL_COUNT }, () => ({
      x: target.x,
      y: target.y,
    }));
    let hovering = false;
    let visible = false;
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
      }
      const el = e.target as Element | null;
      const hovered = el?.closest?.(INTERACTIVE_SEL) as HTMLElement | null;
      hovering = !!hovered;
      if (hovered) {
        const r = hovered.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        // gentle magnetic pull (stronger for small buttons, lighter for cards)
        const pull = Math.min(0.18, 40 / Math.max(r.width, r.height));
        target.x = e.clientX + (cx - e.clientX) * pull;
        target.y = e.clientY + (cy - e.clientY) * pull;
      }
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
    };

    const tick = () => {
      // tight dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }

      // ring trails with easing + soft scale + opacity
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      const targetScale = hovering ? 1.9 : 1;
      const targetOpacity = visible ? (hovering ? 1 : 0.55) : 0;
      ring.s += (targetScale - ring.s) * 0.18;
      ring.o += (targetOpacity - ring.o) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${ring.s})`;
        ringRef.current.style.opacity = String(ring.o);
      }

      // particle trail — chained easing, each follows the previous
      let prevX = target.x;
      let prevY = target.y;
      for (let i = 0; i < TRAIL_COUNT; i++) {
        const p = trail[i];
        p.x += (prevX - p.x) * 0.28;
        p.y += (prevY - p.y) * 0.28;
        const node = trailRefs.current[i];
        if (node) {
          node.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) translate(-50%, -50%)`;
          node.style.opacity = visible ? String(0.18 * (1 - i / TRAIL_COUNT)) : "0";
        }
        prevX = p.x;
        prevY = p.y;
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      {Array.from({ length: TRAIL_COUNT }).map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            trailRefs.current[i] = el;
          }}
          style={{
            opacity: 0,
            transition: "opacity 300ms ease-out",
            filter: "blur(2px)",
            width: `${6 - (i * 0.4)}px`,
            height: `${6 - (i * 0.4)}px`,
          }}
          className="fixed left-0 top-0 rounded-full bg-brand-red will-change-transform"
        />
      ))}
      <div
        ref={ringRef}
        style={{ opacity: 0, transition: "opacity 200ms ease-out" }}
        className="fixed left-0 top-0 size-9 rounded-full border border-brand-red/40 bg-brand-red/[0.04] backdrop-blur-[2px] mix-blend-multiply will-change-transform"
      />
      <div
        ref={dotRef}
        style={{ opacity: 0, transition: "opacity 200ms ease-out" }}
        className="fixed left-0 top-0 size-1.5 rounded-full bg-brand-red shadow-[0_0_8px_rgba(220,38,38,0.4)] will-change-transform"
      />
    </div>
  );
}
