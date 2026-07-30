import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const FEATURED = {
  caseNum: "Case 001",
  sector: "Education · Private College",
  location: "Claremont, CA",
  scope: "Full-Service Maintenance",
  timeline: "Year 2 of program",
  equipment: "Full facility HVAC",
  headline: "$80,000 in year-two service savings.",
  outcome: "Corrected deficiencies the previous provider missed.",
  excerpt:
    "A private college in Claremont needed a reliable partner to keep its HVAC systems performing. Gardner Air stepped in with a customized HVAC preventative maintenance plan. By performing thorough inspections, correcting deficiencies the previous provider missed, and taking over full-time service, we saved them $80,000 in overall service expenses during their second year with us — all without compromising performance or comfort.",
  link: "/commercial-hvac-services/preventative-maintenance/",
};

const METRICS = [
  { value: "$80K", label: "Year-two savings" },
  { value: "100%", label: "Scope completion" },
  { value: "{{TBD}}", label: "TBD metric" },
  { value: "{{TBD}}", label: "TBD metric" },
];

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      aria-labelledby="case-studies-heading"
      className="bg-white border-t border-[#E5E7EB]"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 pt-16 lg:pt-28 pb-16 lg:pb-28">

        {/* Single-column header — kill the floating top-right link */}
        <div className="mb-14 lg:mb-20 max-w-3xl">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600 mb-5">
            Featured Case
          </p>
          <h2
            id="case-studies-heading"
            className="font-bold text-ga-black leading-[0.95] tracking-tight"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(2.25rem, 4vw, 3.25rem)",
            }}
          >
            What structured maintenance actually delivers.
          </h2>
        </div>

        {/* Featured case — editorial layout */}
        <article
          aria-label={`Case study: ${FEATURED.sector} — ${FEATURED.location}`}
          className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 lg:gap-20 border-t border-[#D8D4CC] pt-12 lg:pt-16"
        >

          {/* Left: project photo, case number anchor, meta rail, credibility marker */}
          <div className="flex flex-col">
            {/* Project photo — evidence, not banner */}
            <div className="relative aspect-21/25 rounded-xl overflow-hidden mb-8">
              <Image
                src="/CaseStudies.webp"
                alt={`Commercial ${FEATURED.sector.toLowerCase()} facility — rooftop HVAC units in the Inland Empire, Southern California`}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
              />
            </div>

            {/* Display case number — magazine index anchor */}
            <p
              className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-3"
            >
              Case Study
            </p>
            <p
              className="tabular-nums font-bold text-ga-black leading-[0.85]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(3rem, 5vw, 4.5rem)",
              }}
            >
              001
            </p>

            {/* Credibility marker — anchors bottom of left column */}
            <div className="mt-8 pt-6 border-t border-[#D8D4CC]">
              <div className="flex items-center gap-3">
                <span className="block h-2 w-2 rounded-full bg-ga-red" aria-hidden="true" />
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-ga-black">
                  Active program · Documented monthly
                </p>
              </div>
            </div>
          </div>

          {/* Right: headline + narrative + meta band + metrics */}
          <div className="flex flex-col">
            <h3
              className="font-bold text-ga-black leading-[1.05] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
              }}
            >
              {FEATURED.headline}
              <br />
              <span className="text-ga-red">{FEATURED.outcome}</span>
            </h3>

            <p className="text-base lg:text-lg text-ga-gray-600 leading-relaxed mb-10 max-w-2xl">
              {FEATURED.excerpt}
            </p>

            {/* Meta band — horizontal spec strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-5 border-t border-[#D8D4CC] pt-6 mb-8">
              {[
                { label: "Sector", value: FEATURED.sector },
                { label: "Location", value: FEATURED.location },
                { label: "Scope", value: FEATURED.scope },
                { label: "Equipment", value: FEATURED.equipment },
              ].map((m) => (
                <div key={m.label}>
                  <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-ga-gray-600 mb-1.5">
                    {m.label}
                  </p>
                  <p
                    className="font-bold text-ga-black text-sm lg:text-base leading-snug"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {m.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Metrics band */}
            <div className="grid grid-cols-2 sm:grid-cols-4 border-t border-b border-[#D8D4CC] mb-8">
              {METRICS.map((m, i) => (
                <div
                  key={m.label}
                  className={[
                    "py-6 lg:py-8 flex flex-col gap-2",
                    i > 0 ? "sm:border-l sm:border-[#D8D4CC] sm:pl-5" : "",
                    i >= 2 ? "border-t sm:border-t-0 border-[#D8D4CC]" : "",
                  ].join(" ")}
                >
                  <p
                    className="tabular-nums font-bold text-ga-black leading-none"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    }}
                  >
                    {m.value}
                  </p>
                  <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ga-gray-600 leading-snug">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href={FEATURED.link}
              className="btn-arrow-slide inline-flex items-center gap-2 text-sm font-semibold text-ga-red self-start"
            >
              Read the full case study
              <ArrowRight size={15} className="arrow-icon" aria-hidden="true" />
            </Link>
          </div>
        </article>

        {/* Bottom section CTA — view all */}
        <div className="mt-14 lg:mt-20 pt-8 border-t border-[#D8D4CC] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600">
            Commercial facilities served across the Inland Empire &amp; Orange County
          </p>
          <Link
            href="/case-studies"
            className="btn-arrow-slide inline-flex items-center gap-2 text-sm font-semibold text-ga-red"
          >
            View all case studies
            <ArrowRight size={15} className="arrow-icon" aria-hidden="true" />
          </Link>
        </div>

      </div>
    </section>
  );
}
