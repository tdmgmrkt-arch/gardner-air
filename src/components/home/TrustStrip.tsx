const STATS = [
  {
    value: "100%",
    label: "Scope completed",
    sub: "Every maintenance visit — nothing skipped",
  },
  {
    value: "50mi",
    label: "Service radius",
    sub: "Focused coverage — never overextended",
  },
  {
    value: "3",
    label: "Counties served",
    sub: "Riverside · San Bernardino · Orange",
  },
  {
    value: "5+",
    label: "Factory-trained brands",
    sub: "Carrier · York · Samsung · Mitsubishi · Raypak",
  },
];

export function TrustStrip() {
  return (
    <section
      aria-label="Gardner Air by the numbers"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,1) 39px, rgba(255,255,255,1) 40px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,1) 79px, rgba(255,255,255,1) 80px)",
        }}
        aria-hidden="true"
      />

      {/* Red accent bar at top */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-ga-red" aria-hidden="true" />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className={[
                "flex flex-col py-8 lg:py-10 px-6 lg:px-10 relative",
                i % 2 === 1 ? "border-l border-white/10" : "",
                i >= 2 ? "border-t border-white/10 lg:border-t-0" : "",
                i > 0 ? "lg:border-l lg:border-white/10" : "",
              ].join(" ")}
            >
              <p
                className="tabular-nums font-bold leading-none text-white mb-3"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2.5rem, 5vw, 4rem)",
                }}
              >
                {stat.value}
              </p>

              <p
                className="text-sm font-semibold text-white/80 leading-snug mb-1.5"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {stat.label}
              </p>

              <p className="font-mono text-[10px] font-medium uppercase tracking-[0.15em] text-white/35">
                {stat.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
