/**
 * ClosingCTA — Pass 8. Light editorial redesign.
 *
 * - Section bg: warm off-white #F7F6F3 — light, NOT full red
 * - Left half: massive DM Sans headline, "operations" word in red accent
 * - Below headline: trust chips row (CheckCircle icons, gray labels)
 * - Right half: intro paragraph + primary red button + ghost phone button
 * - Red vertical accent bar left-edge of the right panel on desktop
 * - No diagonal stripes. No red background. No mono "serving commercial" line.
 * - Generous padding: py-24 lg:py-36 — last impression before footer.
 */
import Link from "next/link";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const TRUST_CHIPS = [
  "Owner-occupied commercial buildings",
  "Scope proposals in writing",
  "CSLB licensed & insured",
];

export function ClosingCTA() {
  return (
    <section
      id="contact"
      aria-labelledby="cta-heading"
      className="border-t border-[#E5E7EB] py-24 lg:py-36"
      style={{ background: "#F7F6F3" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Pre-label */}
        <p
          className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9CA3AF] mb-8"
          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
        >
          — Get Started
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-14 lg:gap-20 items-start">

          {/* Left: Headline + trust chips */}
          <div>
            <h2
              id="cta-heading"
              className="font-bold text-[#111318] leading-[0.92] tracking-[-0.03em] mb-10"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.5rem, 5.5vw, 5rem)",
              }}
            >
              Ready to protect
              <br />
              your equipment
              <br />
              and your{" "}
              <span style={{ color: "#D42027" }}>operations?</span>
            </h2>

            {/* Trust chips */}
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 sm:gap-x-8 sm:gap-y-3">
              {TRUST_CHIPS.map((chip) => (
                <div key={chip} className="flex items-center gap-2.5">
                  <CheckCircle
                    size={16}
                    className="text-[#D42027] flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span
                    className="text-sm font-medium text-[#4B5563]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {chip}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA panel with subtle left red accent bar */}
          <div className="relative lg:pl-10 lg:border-l-2 lg:border-[#D42027]/25">

            {/* Context copy */}
            <p className="text-[#6B7280] text-base leading-relaxed mb-8">
              Tell us about your facility and the equipment you operate. We build
              structured preventative programs for owner-occupied commercial
              buildings that value reliability and long-term partnership over
              lowest-bid contracting.
            </p>

            {/* Primary CTA — solid red */}
            <Link
              href="/contact"
              className="btn-arrow-slide flex items-center justify-center gap-3 h-14 px-8 rounded-xl
                         text-sm font-bold bg-[#D42027] text-white
                         hover:bg-[#B01C22]
                         shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)]
                         hover:shadow-[0_8px_28px_-4px_rgba(212,32,39,0.50)]
                         transition-all duration-200 min-h-[44px] mb-3 w-full lg:w-auto"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a Maintenance Proposal
              <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
            </Link>

            {/* Phone button — white bg, dark text, red phone icon */}
            <a
              href="tel:+19516964495"
              className="flex items-center justify-center gap-3 h-14 px-8 rounded-xl
                         text-sm font-bold bg-white text-[#111318] border border-[#D4D0CA]
                         hover:border-[#B0AAA0] hover:shadow-[0_2px_8px_-2px_rgba(17,19,24,0.10)]
                         transition-all duration-200 min-h-[44px] w-full lg:w-auto"
              style={{ fontFamily: "var(--font-dm-sans)" }}
              aria-label="Call Gardner Air"
            >
              <Phone size={16} className="text-[#D42027] flex-shrink-0" aria-hidden="true" />
              Call Us &mdash; (951) 696-4495
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
