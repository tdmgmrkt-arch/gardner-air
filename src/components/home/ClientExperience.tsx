import { Zap, CalendarCheck, FileText, RefreshCw } from "lucide-react";

const PILLARS = [
  {
    id: "response",
    Icon: Zap,
    eyebrow: "Response",
    title: "Fast response.",
    body: "When you reach out — to schedule, ask a question, or report an issue — you get a response same business day. We understand facilities operations don't pause.",
    metric: "Same business day",
    metricLabel: "Response SLA",
  },
  {
    id: "planning",
    Icon: CalendarCheck,
    eyebrow: "Planning",
    title: "Professional planning.",
    body: "Every maintenance visit is pre-planned with your operational schedule in mind. We arrive prepared, with the parts and tools the scope requires.",
    metric: "96% on-schedule visits",
    metricLabel: "Scheduling reliability",
  },
  {
    id: "reporting",
    Icon: FileText,
    eyebrow: "Reporting",
    title: "Clear reporting after every visit.",
    body: "After each visit you receive a clear report of work performed, system condition, and any flagged follow-up items. No guesswork about what was done.",
    metric: "Reports: same day",
    metricLabel: "Documentation standard",
  },
  {
    id: "reliability",
    Icon: RefreshCw,
    eyebrow: "Reliability",
    title: "Consistent, reliable coordination.",
    body: "The same scheduling structure, the same communication standard, the same technician familiarity with your facility over time. Reliability built into the relationship.",
    metric: "8+ yr avg. client retention",
    metricLabel: "Partnership longevity",
  },
];

export function ClientExperience() {
  return (
    <section
      id="client-experience"
      aria-labelledby="experience-heading"
      className="bg-white"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 pt-20 lg:pt-28 pb-14 lg:pb-20">
        {/* Section header */}
        <div className="max-w-2xl mb-12 lg:mb-16">
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-4">
            The Gardner Air Experience
          </p>
          <h2
            id="experience-heading"
            className="font-bold text-[#111318] leading-[0.98] tracking-[-0.025em]"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(1.875rem, 4vw, 3rem)",
            }}
          >
            How we work with your facility.
          </h2>
          <p className="mt-5 text-base lg:text-lg text-[#4B5259] leading-relaxed">
            Four commitments that define the partnership &mdash; from first call
            to long-term reliability.
          </p>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {PILLARS.map((pillar) => {
            const { Icon } = pillar;
            return (
              <div
                key={pillar.id}
                className="group relative flex flex-row gap-5 rounded-xl bg-white p-6 lg:p-8
                           border border-[#E5E7EB]
                           border-l-4 border-l-[#2E3239]
                           hover:border-l-[#D42027]
                           shadow-[0_4px_20px_-8px_rgba(38,41,47,0.06)]
                           hover:shadow-[0_12px_40px_-12px_rgba(38,41,47,0.14)]
                           transition-all duration-300"
              >
                {/* Icon block — left column */}
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ background: "#2E3239" }}
                  >
                    <Icon size={22} className="text-white" aria-hidden="true" strokeWidth={1.75} />
                  </div>
                </div>

                {/* Content — right column */}
                <div className="flex flex-col flex-1 min-w-0">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9CA3AF] mb-2">
                    {pillar.eyebrow}
                  </p>
                  <h3
                    className="font-bold text-lg text-[#111318] mb-2 tracking-[-0.01em] leading-snug"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-sm lg:text-base leading-relaxed text-[#4B5259] flex-1">
                    {pillar.body}
                  </p>

                  {/* Stat chip */}
                  <div className="mt-5 inline-flex items-center gap-3 px-4 py-2.5 bg-[#F7F6F3] rounded-lg border border-[#E8E5DF] w-fit">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#D42027]" aria-hidden="true" />
                    <div>
                      <p
                        className="text-sm font-bold text-[#2A2D33] leading-none"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {pillar.metric}
                      </p>
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#9CA3AF] mt-0.5">
                        {pillar.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
