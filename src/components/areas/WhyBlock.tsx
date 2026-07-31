import Image from "next/image";
import { Award, FileCheck, Clock } from "lucide-react";
import type { ReactNode } from "react";

interface Props {
  eyebrow: string;
  headingId: string;
  heading: string;
  imageSrc: string;
  imageAlt: string;
  children: ReactNode;
}

const PROOF_POINTS = [
  {
    Icon: Award,
    label: "Factory-Trained Crew",
    body: "NATE, EPA, and manufacturer-certified technicians on every visit.",
  },
  {
    Icon: FileCheck,
    label: "Documented Every Visit",
    body: "Same-day service reports with equipment readings and photos.",
  },
  {
    Icon: Clock,
    label: "Full-Scope, Not Time-Block",
    body: "We complete the checklist — not the clock.",
  },
];

export function AreaWhyBlock({
  eyebrow,
  headingId,
  heading,
  imageSrc,
  imageAlt,
  children,
}: Props) {
  return (
    <section
      aria-labelledby={headingId}
      className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
    >
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
          <div className="flex flex-col justify-center">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              {eyebrow}
            </p>
            <h2
              id={headingId}
              className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              {heading}
            </h2>
            <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
              {children}
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-full">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-[#111318]/60 via-[#111318]/10 to-transparent"
            />
            <div className="absolute inset-x-0 bottom-0 p-6 lg:p-8">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 mb-1">
                Local Coverage
              </p>
              <p
                className="font-bold text-white leading-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.125rem, 1.5vw, 1.375rem)",
                }}
              >
                Dispatched from Murrieta
              </p>
            </div>
          </div>
        </div>

        <div
          className="mt-12 lg:mt-16 rounded-2xl px-7 lg:px-10 py-8 lg:py-9 grid grid-cols-1 md:grid-cols-[auto_1fr] lg:grid-cols-[auto_1fr_1fr_1fr] gap-x-10 gap-y-6 items-start"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
          aria-label="Why Gardner Air"
        >
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] md:col-span-2 lg:col-span-1 lg:self-center lg:pr-6 lg:border-r lg:border-white/10">
            What You Can<br className="hidden lg:inline" /> Count On
          </p>
          {PROOF_POINTS.map(({ Icon, label, body }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-[#D42027]/15 flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-[#D42027]" aria-hidden="true" />
              </div>
              <div className="min-w-0">
                <p
                  className="font-bold text-white text-sm leading-tight mb-1"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  {label}
                </p>
                <p className="text-[13px] text-white/60 leading-snug">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
