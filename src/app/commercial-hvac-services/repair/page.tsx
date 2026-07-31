import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Award,
  Shield,
  Zap,
  ChevronDown,
  Clock,
  FileCheck,
  Wrench,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title:
    "Commercial HVAC Repair — Southern California | Gardner Air",
  description:
    "Fast, certified commercial HVAC repair across Southern California. Gardner Air diagnoses complex failures on rooftop units, split systems, chillers, boilers, and refrigeration — and restores full operation with minimal downtime.",
  alternates: {
    canonical: "https://gardnerair.com/commercial-hvac-services/repair/",
  },
  openGraph: {
    title:
      "Commercial HVAC Repair — Southern California | Gardner Air",
    description:
      "Fast, certified commercial HVAC repair across Southern California. Gardner Air diagnoses complex failures on rooftop units, split systems, chillers, boilers, and refrigeration — and restores full operation with minimal downtime.",
    url: "https://gardnerair.com/commercial-hvac-services/repair/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const repairSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial HVAC Repair",
  description:
    "Gardner Air's commercial HVAC repair services for warehouses, schools, industrial buildings, and owner-occupied commercial facilities across Southern California. Diagnostic-first process, factory-trained technicians, honest scope.",
  url: "https://gardnerair.com/commercial-hvac-services/repair/",
  provider: {
    "@type": "HVACBusiness",
    name: "Gardner Air",
    telephone: "+19516964495",
    email: "service@gardnerci.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "30714 Wealth St",
      addressLocality: "Murrieta",
      addressRegion: "CA",
      postalCode: "92563",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "County", name: "Riverside County" },
      { "@type": "County", name: "San Bernardino County" },
      { "@type": "County", name: "Orange County" },
    ],
  },
  serviceType: "HVAC Repair",
  areaServed: "Southern California",
};

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
const TECH_READOUT = [
  { label: "SERVICE", value: "HVAC REPAIR" },
  { label: "SCOPE", value: "DIAGNOSE · REPAIR · VERIFY" },
  { label: "REGION", value: "IE · ORANGE COUNTY" },
  { label: "FOCUS", value: "COMMERCIAL ONLY" },
];

const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified" },
  { Icon: Shield, text: "CSLB Licensed" },
  { Icon: Zap, text: "Factory-Trained" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Diagnose the Root Cause",
    body: "We isolate the actual failure, not just the symptom. Factory-trained technicians use system data and hands-on inspection to identify what broke and why.",
  },
  {
    num: "02",
    title: "Repair With the Right Scope",
    body: "You receive a clear, written recommendation with parts, labor, and pricing. No upselling, no rushed fixes that fail again next week.",
  },
  {
    num: "03",
    title: "Verify Full Performance",
    body: "Before we leave, we confirm the system meets performance specs across airflow, refrigerant, electrical load, and controls. You get a documented report.",
  },
];

const SCOPE_PANEL_CATEGORIES = [
  {
    label: "Cooling",
    items: [
      "Compressor and condenser diagnostics",
      "Refrigerant leak detection and recovery",
      "Evaporator coil and airflow correction",
    ],
  },
  {
    label: "Heating",
    items: [
      "Boiler and furnace troubleshooting",
      "Heat exchanger and ignition repair",
      "Gas valve and flame sensor service",
    ],
  },
  {
    label: "Electrical & Controls",
    items: [
      "Contactor, capacitor, and relay replacement",
      "Sensor, thermostat, and controls calibration",
      "Motor and VFD failure diagnosis",
    ],
  },
  {
    label: "Specialty Equipment",
    items: [
      "Chiller, cooling tower, and refrigeration repair",
      "Rooftop package unit and split-system service",
      "Computer room and precision cooling units",
    ],
  },
];

const CERT_LOGOS = [
  { src: "/diamond-contractor.webp", alt: "Diamond Contractor — Elite Factory-Authorized Dealer", widthClass: "w-28 lg:w-36" },
  { src: "/epa-logo.webp", alt: "EPA Certified — Environmental Protection Agency", widthClass: "w-14 lg:w-16" },
  { src: "/nate-logo.webp", alt: "NATE Certified — North American Technician Excellence", widthClass: "w-14 lg:w-16" },
  { src: "/nci-logo.webp", alt: "NCI Certified — National Comfort Institute", widthClass: "w-24 lg:w-28" },
  { src: "/york-logo.webp", alt: "York Authorized — Factory-Authorized Dealer", widthClass: "w-20 lg:w-24" },
];

const OUTCOMES = [
  {
    eyebrow: "OUTCOME 01",
    body: "Faster restoration · Less operational disruption",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Root-cause fixes · Fewer repeat service calls",
    Icon: Wrench,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "Documented work · Cleaner warranty and audit history",
    Icon: FileCheck,
  },
];

const FACILITIES = [
  {
    label: "Electrical & Controls",
    src: "/Gardner-Air-HVAC-equipment-electrical-panel-1030x644.webp",
    alt: "Commercial HVAC electrical panel and controls repaired by Gardner Air",
  },
  {
    label: "Compressor & Refrigerant",
    src: "/Gardner-Air-HVAC-equipment-close-up-1030x644.webp",
    alt: "Close-up of commercial HVAC compressor and refrigerant equipment serviced by Gardner Air",
  },
  {
    label: "Boilers & Heating",
    src: "/Gardner-Air-HVAC-equipment-Hi-Delta-1030x644.webp",
    alt: "Hi-Delta commercial boiler repaired by Gardner Air in Southern California",
  },
  {
    label: "Package Units",
    src: "/Package-Units-2.webp",
    alt: "Commercial rooftop package units repaired by Gardner Air",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How quickly can Gardner Air respond to a commercial HVAC repair call?",
    a: "We prioritize commercial and industrial service calls across Southern California and dispatch based on operational impact. Maintenance-agreement clients receive priority response, and our team confirms an arrival window on every call so your facility team can plan around it.",
  },
  {
    q: "Do you repair systems installed by another contractor?",
    a: "Yes. Gardner Air services equipment installed by any contractor, including package units, split systems, chillers, boilers, cooling towers, and refrigeration circuits. We honor most factory warranties on the equipment we service.",
  },
  {
    q: "What happens if the system needs replacement instead of repair?",
    a: "If our diagnosis shows a system has reached the end of its cost-effective life, we provide a written comparison of repair versus replacement — factoring in equipment age, efficiency losses, refrigerant type, and expected remaining life. You make the decision with full information, not sales pressure.",
  },
  {
    q: "Do you service refrigeration and specialty commercial equipment?",
    a: "Yes. In addition to standard commercial HVAC, we repair refrigeration systems, cooling towers, chillers, boilers, computer room precision cooling, and humidification/dehumidification equipment.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function RepairPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(repairSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
              { "@type": "ListItem", position: 2, name: "Commercial HVAC Services", item: "https://gardnerair.com/commercial-hvac-services/" },
              { "@type": "ListItem", position: 3, name: "Repair", item: "https://gardnerair.com/commercial-hvac-services/repair/" },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQS.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }),
        }}
      />

      <SiteHeader />

      <main id="main-content">

        {/* ------------------------------------------------------------------ */}
        {/* Hero                                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="repair-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Gardner-Air-HVAC-equipment-panel-1030x644.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-35"
              aria-hidden="true"
            />
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(42,45,51,0.72) 0%, rgba(42,45,51,0.60) 35%, rgba(42,45,51,0.85) 70%, rgba(42,45,51,0.98) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="absolute top-0 inset-x-0 h-[3px] bg-[#D42027] z-10" aria-hidden="true" />

          <div
            className="absolute top-[92px] lg:top-[112px] right-5 sm:right-6 lg:right-8 xl:right-10 hidden sm:block z-10"
            aria-hidden="true"
          >
            <div className="flex flex-col gap-[5px] items-end">
              {TECH_READOUT.map((row, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
                    {row.label}
                  </span>
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">
                    {row.value}
                  </span>
                </div>
              ))}
              <div className="mt-2 w-full h-px bg-[#D42027]/40" />
            </div>
          </div>

          <div
            className="relative flex-1 flex flex-col justify-center w-full mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 z-10"
            style={{ paddingTop: "calc(100px + 5vh)", paddingBottom: "5vh" }}
          >
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-2 text-[11px] font-mono font-semibold uppercase tracking-[0.15em] text-white/40">
                <li>
                  <Link href="/" className="hover:text-white/70 transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/commercial-hvac-services/" className="hover:text-white/70 transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Repair</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Commercial HVAC Repair
            </p>

            <h1
              id="repair-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Commercial HVAC repair,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">fixed at the root.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Fast, diagnostic-driven repair for commercial and industrial HVAC
              systems across Southern California — so your facility gets back
              to full operation and stays there.
            </p>

            <Link
              href="#repair-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a Repair Visit
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative z-10" aria-label="Gardner Air credentials">
            <div
              className="border-t border-white/10"
              style={{ background: "rgba(42,45,51,0.85)", backdropFilter: "blur(12px)" }}
            >
              <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
                <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                  {TRUST_BADGES.map(({ Icon, text }, i) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded flex items-center justify-center bg-[#D42027]/15 flex-shrink-0">
                        <Icon size={14} className="text-[#D42027]" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                        {text}
                      </span>
                      {i < TRUST_BADGES.length - 1 && (
                        <span className="hidden lg:block text-white/20 ml-2" aria-hidden="true">·</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Credentials strip                                                   */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Gardner Air certifications and credentials"
          className="bg-white border-t border-[#E5E7EB] py-8 lg:py-10"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-7 text-center">
              Credentialed · Certified · Continuously Trained
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
              {CERT_LOGOS.map((cert) => (
                <div key={cert.src} className={`relative h-12 lg:h-14 ${cert.widthClass}`}>
                  <Image
                    src={cert.src}
                    alt={cert.alt}
                    fill
                    sizes="(max-width: 640px) 25vw, 150px"
                    className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Case for Repair                                                      */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="case-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  The Case for Doing It Right
                </p>
                <h2
                  id="case-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Diagnostic-First HVAC Repair That Actually Solves the Problem
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Most repeat service calls happen because the original repair
                    treated a symptom instead of a root cause. Gardner Air is
                    known across Southern California as the contractor other
                    HVAC teams call when they can&rsquo;t figure out why a
                    system keeps failing.
                  </p>
                  <p>
                    Whether it&rsquo;s a rooftop unit that keeps tripping, a
                    chiller that&rsquo;s losing capacity, or a refrigeration
                    circuit with an elusive leak, our technicians work from
                    system data and hands-on inspection to isolate what
                    actually broke — and repair it so it stays repaired.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/repair.webp"
                    alt="Gardner Air technician diagnosing a commercial HVAC electrical panel during a repair call in Southern California"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>

                <div className="rounded-xl border border-[#D8D4CC] bg-[#F7F6F3] px-6 py-5 flex items-center gap-5">
                  <p
                    className="tabular-nums font-bold text-[#D42027] leading-none flex-shrink-0"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(2rem, 3vw, 2.5rem)",
                    }}
                  >
                    1x
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Fix rate goal
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      One visit · No callbacks
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 3-Step Process + Scope Panel                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="process-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Our Repair Process
                </p>
                <h2
                  id="process-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  A Repair Process Built to Solve Problems, Not Sell Parts
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed mb-10">
                  Guesswork gets expensive. Gardner Air runs every commercial
                  HVAC repair through a three-step process that isolates the
                  actual failure and verifies the fix before we leave the
                  rooftop.
                </p>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {PROCESS_STEPS.map((step) => (
                    <div
                      key={step.num}
                      className="grid grid-cols-[72px_1fr] gap-6 py-8 items-start"
                    >
                      <p
                        className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(2rem, 3vw, 2.75rem)",
                        }}
                        aria-hidden="true"
                      >
                        {step.num}
                      </p>
                      <div>
                        <h3
                          className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-2"
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "1.125rem",
                          }}
                        >
                          {step.title}
                        </h3>
                        <p className="text-base text-[#6B7280] leading-relaxed">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-base text-[#6B7280] leading-relaxed">
                  Every repair is documented with parts, labor, readings, and
                  photos — clean data for your maintenance history and
                  warranty file.
                </p>
              </div>

              <div
                className="rounded-2xl p-7 lg:p-8 flex flex-col gap-0"
                style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
                aria-label="Equipment we repair"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Equipment We Repair
                </p>

                <div className="flex flex-col divide-y divide-white/8">
                  {SCOPE_PANEL_CATEGORIES.map((cat) => (
                    <div key={cat.label} className="py-6 first:pt-0">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="block h-3 w-0.5 bg-[#D42027]" aria-hidden="true" />
                        <p
                          className="font-bold text-white uppercase tracking-[0.15em] text-xs"
                          style={{ fontFamily: "var(--font-dm-sans)" }}
                        >
                          {cat.label}
                        </p>
                      </div>
                      <ul className="flex flex-col gap-2.5" role="list">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check
                              size={13}
                              className="shrink-0 mt-0.5 text-[#D42027]"
                              aria-hidden="true"
                              strokeWidth={2.5}
                            />
                            <span className="text-sm text-white/75 leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Outcomes — icon card grid                                            */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="outcomes-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                What You Gain
              </p>
              <h2
                id="outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Repairs That Restore Uptime and Stay Fixed
              </h2>
              <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  A good repair is more than a running system — it&rsquo;s
                  one that stops failing for the same reason. Our technicians
                  verify every fix against manufacturer performance specs
                  before closing the call.
                </p>
                <p>
                  You get honest scope, documented work, and a repair that
                  holds. That&rsquo;s why other commercial HVAC teams
                  across Southern California route their toughest problems
                  to Gardner Air.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {OUTCOMES.map((o) => (
                <div
                  key={o.eyebrow}
                  className="rounded-2xl bg-white border border-[#D8D4CC] p-7 lg:p-8 flex flex-col gap-4 hover:border-[#D42027]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D42027]/8 flex items-center justify-center flex-shrink-0">
                    <o.Icon size={18} className="text-[#D42027]" aria-hidden="true" />
                  </div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027]">
                    {o.eyebrow}
                  </p>
                  <p
                    className="font-bold text-[#111318] leading-tight tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                    }}
                  >
                    {o.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Facilities & Equipment gallery band                                  */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="facilities-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
                  Equipment We Repair
                </p>
                <h2
                  id="facilities-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  Complex systems, solved at the source.
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-base text-[#6B7280] leading-relaxed">
                  From electrical panels and refrigerant circuits to boilers and package
                  units, Gardner Air diagnoses and repairs the full range of commercial
                  HVAC equipment — with documented work on every job.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {FACILITIES.map((item) => (
                <div
                  key={item.label}
                  className="group relative rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:ring-ga-red/30 transition-[transform,box-shadow,--tw-ring-color] duration-300 ease-out"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-ga-black/85 to-transparent px-4 py-3 flex items-center justify-between">
                    <span
                      className="text-white text-xs font-semibold leading-snug"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {item.label}
                    </span>
                    <ArrowRight
                      size={12}
                      className="text-ga-red opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Mid CTA band ---- */}
        <section
          aria-label="Request a repair visit"
          className="relative overflow-hidden bg-[#1E2126] py-16 lg:py-24"
        >
          <Image
            src="/schematic.webp"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-[0.13] [filter:invert(1)] pointer-events-none select-none"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
                Get the System Back Up
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Have a Commercial HVAC System Down? Talk to a Technician Today.
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Gardner Air responds to commercial and industrial service
                calls across the Inland Empire and Orange County. Get an
                arrival window, a diagnostic, and a written repair scope from
                a factory-trained team.
              </p>
              <Link
                href="#repair-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a Repair Visit
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ---- Cross-sell block ---- */}
        <section
          aria-labelledby="crosssell-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/Gardner-Air-HVAC-equipment-boiler-room-1030x644.webp"
                    alt="Commercial boiler room HVAC equipment maintained by Gardner Air"
                    fill
                    sizes="(max-width: 1024px) 100vw, 288px"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    Stop Repeat Repair Calls
                  </p>
                  <h2
                    id="crosssell-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Turn Emergencies Into Scheduled Work
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    Facilities on our preventative maintenance program see fewer
                    emergency calls, longer equipment life, and lower total
                    repair cost year over year.
                  </p>
                  <div>
                    <Link
                      href="/commercial-hvac-services/preventative-maintenance/"
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors duration-200 min-h-[44px]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Explore Preventative Maintenance
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* FAQ                                                                 */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="repair-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                FAQ
              </p>
              <h2
                id="repair-faq-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Frequently Asked Questions About Our Repair Services
              </h2>

              <div className="flex flex-col gap-3 mb-12 lg:mb-16">
                {FAQS.map((faq, i) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>

              <div className="rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-[#D8D4CC]">
                  <div className="p-8 lg:p-10">
                    <p
                      className="font-bold text-[#111318] mb-3 leading-tight"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(1.125rem, 1.75vw, 1.375rem)",
                      }}
                    >
                      Don&rsquo;t see your question?
                    </p>
                    <p className="text-base text-[#6B7280] leading-relaxed">
                      Every failure has a story. If you have a specific
                      question about symptoms you&rsquo;re seeing, equipment
                      you run, or a repair another contractor couldn&rsquo;t
                      solve, our team responds within one business day.
                    </p>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                    <a
                      href="tel:+19516964495"
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-lg text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] transition-colors min-h-[44px] justify-center"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                      aria-label="Call Gardner Air"
                    >
                      Call (951) 696-4495
                    </a>
                    <a
                      href="mailto:service@gardnerci.com"
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-lg text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors min-h-[44px] justify-center"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Email Our Team
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Contact form                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="repair-contact"
          aria-labelledby="repair-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Tell Us About Your HVAC Repair Need"
                  subhead="Describe the equipment, the symptoms, and your operating window. Our team confirms an arrival time and a diagnostic scope."
                  submitLabel="Request a Repair Visit"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We confirm your equipment and symptoms" },
                    { num: "02", body: "A technician arrives and diagnoses on-site" },
                    { num: "03", body: "You approve a written scope before we repair" },
                  ].map((step) => (
                    <div key={step.num} className="grid grid-cols-[56px_1fr] gap-4 py-7 items-start">
                      <p
                        className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)",
                        }}
                        aria-hidden="true"
                      >
                        {step.num}
                      </p>
                      <p
                        className="font-bold text-[#111318] leading-tight pt-1"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "1.0625rem",
                        }}
                      >
                        {step.body}
                      </p>
                    </div>
                  ))}
                </div>

                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-3">
                    System down right now?
                  </p>
                  <a
                    href="tel:+19516964495"
                    className="text-base font-bold text-[#D42027] underline underline-offset-2 hover:text-[#B01C22] transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    aria-label="Call Gardner Air"
                  >
                    (951) 696-4495
                  </a>
                </div>

                <div className="mt-10 overflow-hidden rounded-xl border border-[#D8D4CC]">
                  <Image
                    src="/customer-service-reps-v2.webp"
                    alt="Gardner Air customer service representatives"
                    width={1536}
                    height={1024}
                    className="w-full h-auto"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

      <SiteFooter />
      <MobileCTABar />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* FAQ Accordion Item                                                  */
/* ------------------------------------------------------------------ */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-[#E5E1D8] bg-white open:bg-[#FAF8F4] open:border-ga-red/30 hover:border-ga-red/25 open:shadow-[0_1px_3px_rgba(17,19,24,0.04)] transition-colors duration-200">
      <summary className="flex items-center justify-between gap-4 px-5 py-5 lg:px-6 lg:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3
          className="font-semibold text-ga-black text-base lg:text-lg leading-snug"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          {question}
        </h3>
        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#F7F6F3] text-ga-gray-600 group-open:bg-ga-red group-open:text-white transition-colors duration-200">
          <ChevronDown
            size={18}
            className="transition-transform duration-200 group-open:rotate-180"
            aria-hidden="true"
          />
        </span>
      </summary>
      <p className="px-5 pb-5 lg:px-6 lg:pb-6 text-base text-ga-gray-600 leading-relaxed max-w-2xl">
        {answer}
      </p>
    </details>
  );
}
