import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const SERVICES = [
  {
    num: "01",
    eyebrow: "Core Service",
    title: "Preventative Maintenance",
    body: "Programs built around your facility's schedule and equipment mix. Full-scope visits — not time-blocks — so nothing gets skipped.",
    link: "/commercial-hvac-services/preventative-maintenance/",
  },
  {
    num: "02",
    eyebrow: "On-Call Service",
    title: "Repair",
    body: "Certified technicians resolve HVAC issues fast, without guesswork or upsells. Same-visit resolution on the majority of calls.",
    link: "/commercial-hvac-services/repair/",
  },
  {
    num: "03",
    eyebrow: "Capital Planning",
    title: "Replacement",
    body: "We help determine when a replacement saves more than a repair — then install with minimal disruption to operations.",
    link: "/commercial-hvac-services/replacement/",
  },
  {
    num: "04",
    eyebrow: "New Construction & TI",
    title: "Installation",
    body: "Retrofits and full-system overhauls, engineered for your building. Commercial-grade equipment, certified installation.",
    link: "/commercial-hvac-services/installation/",
  },
];

export function FeaturedServices() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-white py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Editorial intro — text left, environmental photo right */}
        <div className="mb-14 lg:mb-20 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-start">
          <div className="flex flex-col gap-8 lg:gap-10">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600 mb-5">
                What We Do
              </p>
              <h2
                id="services-heading"
                className="font-bold text-ga-black leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                }}
              >
                Four services.
                <br />
                <span className="text-ga-red">One standard.</span>
              </h2>
            </div>
            <p className="text-ga-gray-600 text-base lg:text-lg leading-relaxed max-w-md">
              Gardner Air is a commercial-only HVAC contractor. Every service is
              delivered to the same standard — full scope, factory-trained
              technicians, documented on every visit.
            </p>
          </div>

          <div className="relative aspect-4/5 lg:aspect-3/2 rounded-2xl overflow-hidden">
            <Image
              src="/EnvironmentBand.webp"
              alt="Gardner Air technician working on a commercial rooftop HVAC unit at a Southern California facility"
              fill
              sizes="(max-width: 1024px) 100vw, 560px"
              className="object-cover"
            />
          </div>
        </div>

        {/* Numbered service rows */}
        <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
          {SERVICES.map((svc) => (
            <Link
              key={svc.num}
              href={svc.link}
              className="group grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr_60px] gap-4 lg:gap-12 py-10 lg:py-12 items-start hover:bg-[#FAF9F6] transition-colors -mx-5 sm:-mx-6 lg:-mx-8 px-5 sm:px-6 lg:px-8"
            >
              <p
                className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none group-hover:text-ga-red transition-colors"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                }}
                aria-hidden="true"
              >
                {svc.num}
              </p>

              <div>
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-gray-600 mb-3">
                  {svc.eyebrow}
                </p>
                <h3
                  className="font-bold text-ga-black leading-tight tracking-[-0.02em]"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.5rem, 2.25vw, 1.875rem)",
                  }}
                >
                  {svc.title}
                </h3>
              </div>

              <p className="text-base text-ga-gray-600 leading-relaxed">
                {svc.body}
              </p>

              <div className="flex lg:justify-end lg:items-center">
                <ArrowRight
                  size={22}
                  className="text-ga-black group-hover:text-ga-red group-hover:translate-x-1 transition-all"
                  aria-hidden="true"
                />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
