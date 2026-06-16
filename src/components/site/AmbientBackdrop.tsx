/**
 * Site-wide ambient backdrop.
 * - Three large, very low-opacity radial gradients in brand-red, navy, and cream.
 * - Drifts very slowly via `aurora-pan`.
 * - Adds a barely-there grain overlay for premium texture.
 * - Fixed, pointer-events-none, behind all content. Honors prefers-reduced-motion via CSS.
 */
export function AmbientBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* soft drifting color fields */}
      <div
        className="absolute -top-[20%] -left-[15%] size-[70vmax] rounded-full blur-3xl opacity-[0.55] motion-safe:animate-aurora"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-brand-red) 14%, transparent), transparent 70%)",
        }}
      />
      <div
        className="absolute top-[30%] -right-[20%] size-[80vmax] rounded-full blur-3xl opacity-[0.45] motion-safe:animate-aurora"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-navy) 12%, transparent), transparent 70%)",
          animationDelay: "-12s",
        }}
      />
      <div
        className="absolute bottom-[-20%] left-[20%] size-[60vmax] rounded-full blur-3xl opacity-[0.4] motion-safe:animate-aurora"
        style={{
          background:
            "radial-gradient(closest-side, color-mix(in oklab, var(--color-accent) 50%, transparent), transparent 70%)",
          animationDelay: "-22s",
        }}
      />
      {/* premium grain */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.85'/></svg>\")",
        }}
      />
    </div>
  );
}
