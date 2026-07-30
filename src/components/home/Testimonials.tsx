/**
 * Testimonials — Pass 8. Light editorial redesign.
 *
 * - Section bg: warm off-white #F7F6F3
 * - Three equal-weight cards in a horizontal grid
 * - Each card: white bg, subtle shadow, small red top-rule, clean DM Sans quote,
 *   hairline divider, warm-neutral initials avatar, two-line attribution
 * - No featured hierarchy. No dark background. No red panel. No italic quotes.
 * - "Trust by the Numbers" panel removed — stats already live in TrustStrip.
 */

const TESTIMONIALS = [
  {
    quote:
      "We've worked with a number of commercial HVAC contractors over the years. Gardner Air is the first where I never have to wonder what was done — the report shows up same day, every task is documented, and if something needs attention they flag it before it becomes a problem.",
    name: "J. Valdez",
    initials: "JV",
    role: "Facilities Director",
    company: "Mid-Sized Manufacturer · Inland Empire",
    industry: "Manufacturing",
    // TODO: Replace with real client testimonial
  },
  {
    quote:
      "Our equipment life has extended noticeably since we moved to Gardner Air's program. The difference between a contractor who completes the scope and one who just shows up is significant.",
    name: "M. Torres",
    initials: "MT",
    role: "Operations Manager",
    company: "Commercial Real Estate",
    industry: "Real Estate",
    // TODO: Replace with real testimonial
  },
  {
    quote:
      "When we had a critical system failure mid-summer, they were on-site fast and diagnosed accurately on the first visit. That kind of reliability is what you need in a commercial HVAC partner.",
    name: "R. Chen",
    initials: "RC",
    role: "VP of Facilities",
    company: "Class A Office Portfolio",
    industry: "Office",
    // TODO: Replace with real testimonial
  },
];

// Warm-neutral initials discs — alternating so cards feel distinct
const AVATAR_BG = ["#E8E4DC", "#DDE3E8", "#E6E0DC"] as const;
const AVATAR_TEXT = ["#6B5E4A", "#435260", "#5A4A42"] as const;

export function Testimonials() {
  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="py-16 lg:py-28 border-t border-[#E5E7EB]"
      style={{ background: "#F7F6F3" }}
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-10 lg:mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-3 mb-5 px-4 py-2 bg-[#D42027]/10 rounded-full border border-[#D42027]/20">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D42027]" aria-hidden="true" />
            <span
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027]"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              Client Perspectives
            </span>
          </div>

          <h2
            id="testimonials-heading"
            className="font-bold text-[#111318] leading-[0.95] tracking-[-0.025em] mb-4"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(2rem, 3.5vw, 3rem)",
            }}
          >
            What our clients say.
          </h2>

          <p className="text-[#6B7280] text-base leading-relaxed">
            A partnership approach, backed by results our clients can measure.
          </p>
        </div>

        {/* Three equal-weight testimonial cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <blockquote
              key={t.name}
              className="bg-white rounded-2xl p-8 lg:p-10 flex flex-col
                         shadow-[0_2px_16px_-4px_rgba(17,19,24,0.08),0_1px_4px_-2px_rgba(17,19,24,0.04)]
                         hover:shadow-[0_8px_32px_-8px_rgba(17,19,24,0.14),0_2px_8px_-4px_rgba(17,19,24,0.06)]
                         transition-shadow duration-300"
            >
              {/* Red top rule */}
              <div
                className="w-8 h-[3px] rounded-full bg-[#D42027] mb-6"
                aria-hidden="true"
              />

              {/* Industry badge — top-right, subtle mono */}
              <div className="flex items-start justify-between gap-4 mb-6">
                <p
                  className="text-[#111318] leading-[1.55] flex-1"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                    fontWeight: 400,
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Hairline divider + attribution */}
              <footer className="mt-auto pt-5 border-t border-[#EDEEF0] flex items-center gap-3">
                {/* Initials avatar — warm neutral disc */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: AVATAR_BG[i], color: AVATAR_TEXT[i] }}
                  aria-hidden="true"
                >
                  <span
                    className="text-xs font-bold"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t.initials}
                  </span>
                </div>

                <div>
                  <p
                    className="text-sm font-bold text-[#111318] leading-snug"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF] mt-0.5 leading-tight"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {t.role}
                    <span className="text-[#D42027] mx-1">·</span>
                    {t.company}
                  </p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
