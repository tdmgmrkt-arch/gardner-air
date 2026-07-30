import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const COUNTIES = [
  { name: "Riverside County", abbr: "Temecula · Murrieta · Riverside" },
  { name: "San Bernardino County", abbr: "Ontario · San Bernardino" },
  { name: "Orange County", abbr: "Anaheim · Irvine · Santa Ana" },
];

export function ServiceArea() {
  return (
    <section
      id="service-area"
      aria-labelledby="service-area-heading"
      className="relative py-16 lg:py-28 border-t border-[#E5E7EB] overflow-hidden"
      style={{ background: "#F7F6F3" }}
    >
      <Image
        src="/areasweservebackground.webp"
        alt=""
        fill
        priority={false}
        aria-hidden="true"
        className="object-cover object-center opacity-15 pointer-events-none select-none"
        sizes="100vw"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, #F7F6F3 20%, rgba(247,246,243,0.7) 100%)",
        }}
      />

      <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Two-column header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-end mb-14 lg:mb-16">
          <div>
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600 mb-5">
              Service Area
            </p>
            <h2
              id="service-area-heading"
              className="font-bold text-ga-black leading-[0.95] tracking-tight"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
              }}
            >
              Inland Empire
              <br />
              <span className="text-ga-red">&amp; Orange County.</span>
            </h2>
          </div>
          <p className="text-ga-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
            Gardner Air services commercial facilities within a focused
            50-mile radius. Close enough for planned coordination, structured
            response, and consistent technician familiarity with your building.
          </p>
        </div>

        {/* Typographic county list */}
        <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-10">
          {COUNTIES.map((county) => (
            <div
              key={county.name}
              className="flex items-center justify-between py-6 lg:py-7 gap-6"
            >
              <div className="flex items-center gap-5 lg:gap-8 min-w-0">
                <MapPin
                  size={18}
                  className="text-ga-red shrink-0"
                  aria-hidden="true"
                />
                <p
                  className="font-bold text-ga-black leading-tight tracking-[-0.015em]"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.25rem, 2vw, 1.625rem)",
                  }}
                >
                  {county.name}
                </p>
              </div>
              <p
                className="font-mono text-[10px] lg:text-xs font-medium uppercase tracking-[0.14em] text-ga-gray-600 shrink-0 text-right"
              >
                {county.abbr}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <Link
            href="/contact"
            className="btn-arrow-slide inline-flex items-center gap-2.5 h-12 px-7 rounded-xl
                       bg-ga-charcoal text-white text-sm font-semibold
                       hover:bg-[#3A3E45] transition-colors min-h-11"
            style={{ fontFamily: "var(--font-dm-sans)" }}
          >
            Confirm service availability
            <ArrowRight size={15} className="arrow-icon" aria-hidden="true" />
          </Link>
          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ga-gray-600">
            Not sure if we serve your area? Ask.
          </p>
        </div>

      </div>
    </section>
  );
}
