import Link from "next/link";
import {
  ArrowRight,
  Wrench,
  Settings,
  RefreshCw,
  HardHat,
  Cpu,
  type LucideIcon,
} from "lucide-react";

type ServiceItem = {
  num: string;
  Icon: LucideIcon;
  title: string;
  body: string;
  href: string;
  wide?: boolean;
};

const SERVICES: ServiceItem[] = [
  {
    num: "01",
    Icon: Wrench,
    title: "Preventative Maintenance",
    body: "Scheduled visits, full-scope checklists, and same-day documentation that keep equipment ahead of the failure curve.",
    href: "/commercial-hvac-services/preventative-maintenance/",
    wide: true,
  },
  {
    num: "02",
    Icon: Settings,
    title: "Commercial HVAC Repair",
    body: "Diagnostic-first repair with root-cause fixes and written scope.",
    href: "/commercial-hvac-services/repair/",
  },
  {
    num: "03",
    Icon: RefreshCw,
    title: "Equipment Replacement",
    body: "Right-sized replacements engineered for your facility's load profile.",
    href: "/commercial-hvac-services/replacement/",
  },
  {
    num: "04",
    Icon: HardHat,
    title: "Installation",
    body: "New-construction and retrofit installs with clean handoff documentation.",
    href: "/commercial-hvac-services/installation/",
  },
  {
    num: "05",
    Icon: Cpu,
    title: "Building Automation",
    body: "Controls integration and BAS solutions for smarter energy management.",
    href: "/building-automation/",
  },
];

interface Props {
  headingId: string;
  eyebrow?: string;
  heading: string;
}

export function AreaServicesGrid({ headingId, eyebrow = "HVAC Services We Offer", heading }: Props) {
  return (
    <section
      aria-labelledby={headingId}
      style={{ background: "#F7F6F3" }}
      className="border-t border-[#E5E7EB] py-16 lg:py-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 lg:mb-14">
          <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
            {eyebrow}
          </p>
          <h2
            id={headingId}
            className="font-bold text-[#111318] leading-[0.95] tracking-tight"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            {heading}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {SERVICES.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              className={`group relative flex flex-col gap-5 rounded-2xl bg-white border border-[#D8D4CC] p-7 lg:p-8 overflow-hidden hover:border-[#D42027]/40 hover:shadow-[0_10px_40px_-12px_rgba(17,19,24,0.15)] hover:-translate-y-0.5 transition-all duration-300${
                svc.wide ? " lg:col-span-2" : ""
              }`}
            >
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-[3px] bg-[#D42027] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"
              />

              <div className="flex items-start justify-between gap-4">
                <div className="w-11 h-11 rounded-lg bg-[#D42027]/[0.08] flex items-center justify-center group-hover:bg-[#D42027] transition-colors duration-200">
                  <svc.Icon
                    size={20}
                    className="text-[#D42027] group-hover:text-white transition-colors duration-200"
                    aria-hidden="true"
                    strokeWidth={2}
                  />
                </div>
                <span
                  className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.25rem, 1.75vw, 1.5rem)",
                  }}
                  aria-hidden="true"
                >
                  {svc.num}
                </span>
              </div>

              <div className="flex-1">
                <h3
                  className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-2 group-hover:text-[#D42027] transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                  }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm text-[#6B7280] leading-relaxed">
                  {svc.body}
                </p>
              </div>

              <div className="pt-4 border-t border-[#EDEEF0]">
                <span
                  className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#111318] group-hover:text-[#D42027] transition-colors duration-200"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Explore More
                  <ArrowRight
                    size={13}
                    className="group-hover:translate-x-1 transition-transform duration-200"
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
