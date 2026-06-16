import { useEffect, useRef, useState } from "react";

/**
 * Premium secondary cursor follower.
 * - Keeps the OS cursor visible (we do not override `cursor:`).
 * - Smoothly trails the pointer with rAF interpolation.
 * - Expands and softly magnetises toward interactive elements.
 * - Disabled on coarse pointers (touch) and when reduced motion is requested.
 */
export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    const target = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: target.x, y: target.y, s: 1 };
    let hovering = false;
    let visible = false;
    let raf = 0;

    const interactiveSel = 'a, button, [role="button"], input, textarea, select, label, summary, [data-cursor="hover"]';

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
      if (!visible) {
        visible = true;
        if (dotRef.current) dotRef.current.style.opacity = "1";
        if (ringRef.current) ringRef.current.style.opacity = "1";
      }
      const el = e.target as Element | null;
      const isInteractive = !!el?.closest?.(interactiveSel);
      hovering = isInteractive;
      if (isInteractive && el) {
        const hovered = el.closest(interactiveSel) as HTMLElement | null;
        if (hovered) {
          const r = hovered.getBoundingClientRect();
          // gentle magnetic pull toward element center
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          target.x = e.clientX + (cx - e.clientX) * 0.18;
          target.y = e.clientY + (cy - e.clientY) * 0.18;
        }
      }
    };

    const onLeave = () => {
      visible = false;
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    const tick = () => {
      // dot follows tightly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.x}px, ${target.y}px, 0) translate(-50%, -50%)`;
      }
      // ring trails with easing
      ring.x += (target.x - ring.x) * 0.18;
      ring.y += (target.y - ring.y) * 0.18;
      const targetScale = hovering ? 1.8 : 1;
      ring.s += (targetScale - ring.s) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.x}px, ${ring.y}px, 0) translate(-50%, -50%) scale(${ring.s})`;
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
      <div
        ref={ringRef}
        style={{ opacity: 0, transition: "opacity 200ms ease-out" }}
        className="fixed left-0 top-0 size-9 rounded-full border border-brand-red/50 bg-brand-red/5 backdrop-blur-[2px] mix-blend-multiply will-change-transform"
      />
      <div
        ref={dotRef}
        style={{ opacity: 0, transition: "opacity 200ms ease-out" }}
        className="fixed left-0 top-0 size-1.5 rounded-full bg-brand-red shadow-[0_0_10px_rgba(220,38,38,0.55)] will-change-transform"
      />
    </div>
  );
}
