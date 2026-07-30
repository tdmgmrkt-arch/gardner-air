import Image from "next/image";
import { Check } from "lucide-react";

const CATEGORIES = [
  {
    label: "Air Handling",
    items: [
      "Filter inspection and replacement",
      "Evaporator coil cleaning and inspection",
      "Blower wheel cleaning and bearing lubrication",
      "Belt tension, alignment, and condition inspection",
    ],
  },
  {
    label: "Refrigeration",
    items: [
      "Condenser coil cleaning — chemical treatment",
      "Refrigerant charge verification and adjustment",
      "Refrigerant leak inspection — all fittings",
    ],
  },
  {
    label: "Electrical",
    items: [
      "Electrical connection torque and inspection",
      "Capacitor and contactor condition test",
      "Compressor amperage and oil level check",
    ],
  },
  {
    label: "Controls",
    items: [
      "Thermostat and controls calibration check",
      "Economizer operation and linkage inspection",
      "Return air temperature and static pressure readings",
    ],
  },
  {
    label: "Combustion",
    items: [
      "Heat exchanger visual inspection (heating season)",
      "Gas valve and burner operation check (where applicable)",
    ],
  },
  {
    label: "Reporting",
    items: [
      "Drain pan clearing and condensate line flush",
      "Service report completed and delivered same day",
    ],
  },
];

export function CompleteScope() {
  return (
    <section
      id="complete-scope"
      aria-labelledby="scope-heading"
      className="relative py-20 lg:py-28 overflow-hidden"
      style={{ background: "#1E2126" }}
    >
      {/* Atmospheric background image — faint texture behind content */}
      <Image
        src="/CompleteScope.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-25 pointer-events-none select-none"
        aria-hidden="true"
      />
      {/* Tinted overlay preserves text contrast */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(30,33,38,0.7) 0%, rgba(30,33,38,0.88) 70%, rgba(30,33,38,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Eyebrow */}
        <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-white/60 mb-10 lg:mb-14">
          What One Visit Includes
        </p>

        {/* Header — headline+copy left, stat anchor right */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-10 lg:gap-16 items-start mb-14 lg:mb-16">

          {/* Left: headline + copy */}
          <div className="flex flex-col gap-8 lg:gap-10">
            <h2
              id="scope-heading"
              className="font-bold text-white leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.5rem, 4.5vw, 4rem)",
              }}
            >
              Others sell time.
              <br />
              We sell{" "}
              <span className="text-ga-red">completed</span> maintenance.
            </h2>
            <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-xl">
              Most contractors block a fixed amount of technician time and leave
              when the clock runs out. Gardner Air delivers the full scope on
              every visit — regardless of how long it takes.
            </p>
          </div>

          {/* Right: display stat as magazine index number */}
          <div className="flex flex-col lg:items-end lg:text-right">
            <p
              className="tabular-nums font-bold text-ga-red leading-[0.85]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(4.5rem, 8vw, 7rem)",
              }}
            >
              17
            </p>
            <div className="mt-4 pt-4 border-t border-white/10 max-w-60">
              <p
                className="font-bold text-white leading-tight mb-2"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                }}
              >
                point maintenance scope
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                Completed in full · Every visit
              </p>
            </div>
          </div>
        </div>

        {/* Category grid — spec-sheet layout: 1 col mobile → 2 col tablet → 3 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 lg:gap-x-14 gap-y-10 lg:gap-y-12 pt-10 lg:pt-12 border-t border-white/8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.label}
              className="self-start"
            >
              {/* Category label — white bold with red accent bar */}
              <div className="flex items-center gap-3 mb-6">
                <span className="block h-3 w-0.5 bg-ga-red" aria-hidden="true" />
                <p
                  className="font-bold text-white uppercase tracking-[0.15em] text-xs lg:text-[13px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {cat.label}
                </p>
              </div>

              <ul className="flex flex-col gap-3.5" role="list">
                {cat.items.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={14}
                      className="shrink-0 mt-0.5 text-ga-red"
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    <span className="text-sm lg:text-[15px] text-white/85 leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
