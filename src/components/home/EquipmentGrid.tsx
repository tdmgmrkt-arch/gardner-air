import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const CATEGORIES = [
  {
    label: "Air Systems",
    items: [
      { name: "Package Units", spec: "Rooftop", href: "/equipment/package-units/" },
      { name: "Split Systems", spec: "Multi-Zone", href: "/equipment/split-systems/" },
      { name: "Ductless Systems", spec: "VRF / Mini-Split", href: "/equipment/ductless-systems/" },
      { name: "Computer Room Units", spec: "CRAC / CRAH", href: "/equipment/computer-room-units/" },
    ],
  },
  {
    label: "Cooling & Refrigeration",
    items: [
      { name: "Chillers", spec: "Centrifugal / Screw", href: "/equipment/chillers/" },
      { name: "Cooling Towers", spec: "Induced Draft", href: "/equipment/cooling-towers/" },
      { name: "Refrigeration", spec: "Commercial-Grade", href: "/equipment/refrigeration/" },
      { name: "Dehumidification", spec: "Desiccant / Refrigerant", href: "/equipment/dehumidification/" },
    ],
  },
  {
    label: "Heating & Precision",
    items: [
      { name: "Boilers", spec: "Hot Water / Steam", href: "/equipment/boilers/" },
      { name: "Humidification", spec: "Steam / Evaporative", href: "/equipment/humidification/" },
      { name: "Rooftop Heating", spec: "Gas-Fired", href: "/equipment/rooftop-heating/" },
      { name: "Precision Controls", spec: "BAS Integration", href: "/equipment/precision-controls/" },
    ],
  },
];

export function EquipmentGrid() {
  return (
    <section
      id="equipment"
      aria-labelledby="equipment-heading"
      className="py-16 lg:py-28 border-t border-[#E5E7EB]"
      style={{ background: "#F7F6F3" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Two-column header */}
        <div className="mb-14 lg:mb-16 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-end">
          <div>
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600 mb-5">
              Equipment
            </p>
            <h2
              id="equipment-heading"
              className="font-bold text-ga-black leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              }}
            >
              The full commercial spectrum.
            </h2>
          </div>
          <p className="text-ga-gray-600 text-base leading-relaxed max-w-md">
            From rooftop package units to complex chiller systems —
            factory-trained technicians certified across the full commercial
            HVAC spectrum.
          </p>
        </div>

        {/* 3-column categorized list */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-[#D8D4CC]">
          {CATEGORIES.map((cat, i) => (
            <div
              key={cat.label}
              className={[
                "py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0",
                i > 0 ? "border-t md:border-t-0 md:border-l border-[#D8D4CC]" : "",
              ].join(" ")}
            >
              <p
                className="font-mono text-[12px] font-semibold uppercase tracking-[0.18em] text-ga-red mb-6"
              >
                {cat.label}
              </p>

              <ul className="flex flex-col divide-y divide-[#D8D4CC]" role="list">
                {cat.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group flex items-baseline justify-between gap-4 py-4 -mx-2 px-2 rounded transition-colors hover:bg-[#EFEBE3]"
                    >
                      <p
                        className="font-bold text-ga-black leading-tight group-hover:text-ga-red transition-colors"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(0.9375rem, 1.15vw, 1.0625rem)",
                        }}
                      >
                        {item.name}
                      </p>
                      <span className="flex items-baseline gap-2 shrink-0">
                        <span className="font-mono text-[9px] lg:text-[10px] uppercase tracking-[0.15em] text-ga-gray-600 text-right">
                          {item.spec}
                        </span>
                        <ArrowUpRight
                          size={12}
                          className="text-ga-gray-600 group-hover:text-ga-red group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* See-all CTA */}
        <div className="mt-12 lg:mt-14 flex justify-center">
          <Link
            href="/equipment/"
            className="btn-arrow-slide inline-flex items-center gap-2 h-12 px-6 rounded-lg text-sm font-semibold border-2 border-ga-black text-ga-black hover:bg-ga-black hover:text-white transition-colors"
          >
            See all equipment we service
            <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
