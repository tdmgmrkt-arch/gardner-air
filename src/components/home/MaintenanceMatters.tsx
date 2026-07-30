const OUTCOMES = [
  {
    stat: "68%",
    label: "Reduction in emergency repair calls",
    note: "Facilities on active preventative maintenance programs",
    citation: "SOURCE: ASHRAE STD 180",
  },
  {
    stat: "40%",
    label: "Longer average equipment lifespan",
    note: "Properly maintained vs. reactive-only service",
    citation: "SOURCE: DOE COMMERCIAL BUILDINGS",
  },
  {
    stat: "22%",
    label: "Energy efficiency improvement",
    note: "Clean, calibrated systems at designed capacity",
    citation: "SOURCE: ASHRAE / ENERGY STAR",
  },
  {
    stat: "81%",
    label: "Reduction in unplanned downtime",
    note: "Facilities with scheduled maintenance programs",
    citation: "SOURCE: ASHRAE STD 180",
  },
];

export function MaintenanceMatters() {
  return (
    <section
      id="maintenance-matters"
      aria-labelledby="maintenance-heading"
      className="py-16 lg:py-28"
      style={{ background: "#F7F6F3" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Full-width eyebrow above the two-column grid so both columns share the same top baseline */}
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600 mb-8 lg:mb-10">
          The Case for Prevention
        </p>

        {/* Two-column header — headline left, description right, both top-aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-start mb-16 lg:mb-20">
          <h2
            id="maintenance-heading"
            className="font-bold text-ga-black leading-[0.95] tracking-tight"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
            }}
          >
            Prevent failures.
            <br />
            Extend equipment life.
            <br />
            <span className="text-ga-red">Protect operations.</span>
          </h2>

          <p className="text-base lg:text-lg text-[#4B5259] leading-relaxed max-w-md">
            Commercial HVAC equipment is not self-sustaining. Without a structured
            maintenance program, systems degrade incrementally — coils foul,
            refrigerant levels drift, electrical connections loosen. Each is a
            minor inefficiency compounding over time into a major one — a
            well-executed program addresses each before they matter.
          </p>
        </div>

        {/* Full-width 4-column stat band */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b border-[#D8D4CC]">
          {OUTCOMES.map((item, i) => (
            <div
              key={i}
              className={[
                "flex flex-col px-6 py-10 lg:px-8 lg:py-12",
                i > 0 ? "sm:border-l sm:border-[#D8D4CC]" : "",
                i >= 2 ? "border-t sm:border-t-0 border-[#D8D4CC]" : "",
                i > 0 && i < 2 ? "" : "",
                i >= 2 ? "lg:border-l lg:border-[#D8D4CC]" : "",
              ].join(" ")}
            >
              <p
                className="tabular-nums font-bold text-ga-red leading-none mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(3rem, 5vw, 4.5rem)",
                }}
              >
                {item.stat}
              </p>

              <p
                className="font-bold text-ga-black text-[15px] leading-snug mb-2"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                {item.label}
              </p>

              <p className="text-sm text-ga-gray-600 leading-relaxed mb-4">
                {item.note}
              </p>

              <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#B8B2A8] mt-auto">
                {item.citation}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
