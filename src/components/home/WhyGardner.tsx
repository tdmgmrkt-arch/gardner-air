const DIFFERENTIATORS = [
  {
    num: "01",
    eyebrow: "Elite Diagnostics",
    title: "We solve what others can't.",
    body: "Facilities call Gardner Air after multiple contractors have failed to diagnose a chronic HVAC issue. Better training, better instruments, and years of commercial-specific experience let our technicians resolve problems others walk away from.",
  },
  {
    num: "02",
    eyebrow: "Communication",
    title: "Fast response. Clear coordination.",
    body: "Phone calls returned quickly. Emails answered the same day. After-hours access when the situation requires it. Planned visits scheduled around your operations — never dropped on your dock unannounced.",
  },
  {
    num: "03",
    eyebrow: "Training Investment",
    title: "Continuously trained on evolving technology.",
    body: "Factory training on Carrier, York, Samsung, Mitsubishi, and Raypak equipment. Continuing education on refrigerant transition and DOE regulation changes. We invest in expertise so your equipment stays ahead of the curve.",
  },
  {
    num: "04",
    eyebrow: "Long-Term Partnership",
    title: "A relationship, not a transaction.",
    body: "Same scheduling structure, same communication standard, same technician familiarity with your facility over time. Structured for owner-occupied commercial buildings that value reliability over the lowest bid.",
  },
];

import Image from "next/image";

export function WhyGardner() {
  return (
    <section
      id="why-gardner"
      aria-labelledby="why-gardner-heading"
      style={{ background: "#F7F6F3" }}
      className="py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Editorial intro — text left, environmental photo right (mirrors FeaturedServices) */}
        <div className="mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-8 lg:gap-10">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-red mb-5">
                Why Gardner Air
              </p>
              <h2
                id="why-gardner-heading"
                className="font-bold text-ga-black leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                }}
              >
                Four commitments.
                <br />
                <span className="text-ga-red">One outcome.</span>
              </h2>
            </div>
            <p className="text-ga-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
              Elite diagnostics, disciplined communication, continuous training,
              and long-term partnership — the four commitments that separate
              Gardner Air from time-block contractors and low-bid competitors.
            </p>
          </div>

          <div className="relative aspect-3/2 rounded-2xl overflow-hidden">
            <Image
              src="/gardner-air-fleet.webp"
              alt="Gardner Air fleet of commercial HVAC service trucks lined up — the long-term partnership Gardner Air offers Southern California facilities"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Numbered editorial list — parallels FeaturedServices */}
        <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
          {DIFFERENTIATORS.map((item) => (
            <div
              key={item.num}
              className="grid grid-cols-1 lg:grid-cols-[120px_1fr_1.4fr] gap-4 lg:gap-12 py-10 lg:py-12 items-start"
            >
              {/* Display number */}
              <p
                className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                }}
                aria-hidden="true"
              >
                {item.num}
              </p>

              {/* Eyebrow + Title */}
              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-3">
                  {item.eyebrow}
                </p>
                <h3
                  className="font-bold text-ga-black leading-tight tracking-[-0.02em]"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.5rem, 2.25vw, 1.875rem)",
                  }}
                >
                  {item.title}
                </h3>
              </div>

              {/* Body */}
              <p className="text-base text-ga-gray-600 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
