import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Award,
  Shield,
  Zap,
  Clock,
  TrendingDown,
  BarChart3,
  ChevronDown,
  Wrench,
  AlertTriangle,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: { absolute: "Commercial Split System Service | Gardner Air | Southern California" },
  description:
    "Gardner Air provides preventative maintenance, repair, and installation for commercial split systems across Southern California. Factory-trained technicians. Call (951) 696-4495.",
  alternates: {
    canonical: "https://gardnerair.com/equipment/split-systems/",
  },
  openGraph: {
    title: "Commercial Split System Service | Gardner Air | Southern California",
    description:
      "Gardner Air provides preventative maintenance, repair, and installation for commercial split systems across Southern California. Factory-trained technicians. Call (951) 696-4495.",
    url: "https://gardnerair.com/equipment/split-systems/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const splitSystemServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Split System Maintenance",
  description:
    "Gardner Air provides complete preventative maintenance, diagnostics, and installation support for standard, multi-zone, heat pump, and high-efficiency inverter commercial split systems serving offices, professional buildings, and commercial facilities across Southern California.",
  url: "https://gardnerair.com/equipment/split-systems/",
  serviceType: "Commercial Split System Maintenance",
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
  areaServed: "Southern California",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://gardnerair.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Equipment",
      item: "https://gardnerair.com/equipment/",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Split Systems",
      item: "https://gardnerair.com/equipment/split-systems/",
    },
  ],
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How often should commercial split systems be serviced?",
    a: "Commercial split systems should receive a comprehensive preventative maintenance inspection at minimum twice per year — spring and fall — to address both cooling and heating season preparation. Buildings with high occupant density, kitchen exhaust near the outdoor unit, or significant dust environments benefit from quarterly visits. Southern California's long cooling season places sustained demand on split system compressors and condenser fans, making pre-season service in spring particularly important. A maintenance program scoped to your specific equipment and application is more reliable than a generic calendar default.",
  },
  {
    q: "What is the difference between a multi-zone split and a VRF system?",
    a: "A multi-zone split system connects a single outdoor unit to multiple indoor air handlers through a shared refrigerant circuit, typically with a fixed number of zones and a defined total capacity. A commercial VRF (Variable Refrigerant Flow) system uses more sophisticated refrigerant circuit controls to simultaneously heat some zones while cooling others, supports a larger number of indoor units, and modulates compressor output more precisely across the full installed capacity. Multi-zone splits are appropriate for buildings with 2–6 zones and moderate complexity; VRF systems are the right choice for larger buildings with diverse zone loads and complex control requirements.",
  },
  {
    q: "How long do commercial split systems typically last?",
    a: "Commercial split systems maintained on a disciplined preventative maintenance program typically last 15 to 18 years. The compressor is the primary cost driver in aging equipment, and compressor life is directly tied to refrigerant charge accuracy, capacitor condition, and coil cleanliness over the life of the system. Units that receive irregular maintenance accumulate the conditions — low charge, dirty condenser coils, failing capacitors — that shorten compressor life. A documented maintenance history informs the replacement-vs.-repair decision when a major component fails.",
  },
  {
    q: "What are warning signs that a split system needs attention?",
    a: "Warning signs that a commercial split system requires attention include: loss of cooling or heating capacity in one or more zones, ice formation on the indoor unit or refrigerant lines, unusual noise from the outdoor unit, water staining below the indoor unit drain pan, and zone temperature that does not respond to thermostat changes. Any of these conditions can escalate from a serviceable repair to a compressor failure or water damage event if not addressed. Facilities with Gardner Air maintenance agreements receive priority scheduling when these conditions are reported.",
  },
  {
    q: "Does Gardner Air handle urgent split system issues for maintenance clients?",
    a: "Gardner Air is a preventative maintenance firm. The commercial facilities Gardner Air serves experience far fewer unplanned split system failures because maintenance is completed to full scope on every visit, and developing problems are identified before they become failures. When an existing maintenance client reports an urgent condition, Gardner Air prioritizes their scheduling. Facilities looking for reactive-only dispatch service are not the right fit. Facilities looking to reduce the frequency and cost of unplanned split system failures are.",
  },
  {
    q: "Can Gardner Air service my brand of split system?",
    a: "Gardner Air holds factory training on all major commercial split system platforms, including Carrier, Trane, Daikin, Mitsubishi Electric, LG, and Lennox. For manufacturers not listed, call (951) 696-4495 with the make and model. Gardner Air services a wide range of commercial equipment and will give a direct answer on whether the specific unit falls within their program.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified" },
  { Icon: Shield, text: "CSLB Licensed" },
  { Icon: Zap, text: "Factory-Trained" },
];

const CERT_LOGOS = [
  {
    src: "/diamond-contractor.webp",
    alt: "Diamond Contractor — Elite Factory-Authorized Dealer",
    widthClass: "w-28 lg:w-36",
  },
  {
    src: "/epa-logo.webp",
    alt: "EPA Certified — Environmental Protection Agency",
    widthClass: "w-14 lg:w-16",
  },
  {
    src: "/nate-logo.webp",
    alt: "NATE Certified — North American Technician Excellence",
    widthClass: "w-14 lg:w-16",
  },
  {
    src: "/nci-logo.webp",
    alt: "NCI Certified — National Comfort Institute",
    widthClass: "w-24 lg:w-28",
  },
  {
    src: "/york-logo.webp",
    alt: "York Authorized — Factory-Authorized Dealer",
    widthClass: "w-20 lg:w-24",
  },
];

const SPLIT_TYPES = [
  {
    title: "Standard Commercial Split Systems",
    body: "Standard commercial split systems pair a single outdoor condensing unit with a single indoor air handler or fan coil. They are common in small-to-mid-size commercial buildings, professional suites, and applications where a single zone of conditioning is required. Gardner Air services the full system on every visit: refrigerant charge, indoor coil condition, condenser coil and fan, electrical components, drain system, and controls.",
  },
  {
    title: "Multi-Zone Splits",
    body: "Multi-zone commercial split systems distribute conditioned air from a single or paired outdoor unit to multiple indoor air handlers serving distinct zones within a building. They are used in office suites, medical buildings, and multi-tenant commercial spaces where individual zone control is required without the cost and complexity of a full VRF system. Gardner Air services the outdoor unit, each indoor air handler, the refrigerant line sets, and the zone controls as an integrated system.",
  },
  {
    title: "Heat Pump Splits",
    body: "Commercial heat pump split systems provide both heating and cooling through a reversing refrigerant circuit, eliminating the need for separate gas-fired or electric resistance heat. They are increasingly specified in California commercial construction under Title 24 all-electric requirements. Proper maintenance requires attention to reversing valve function, refrigerant charge behavior across both heating and cooling modes, defrost controls, and auxiliary heat staging.",
  },
  {
    title: "High-Efficiency Inverter Splits",
    body: "High-efficiency inverter-driven commercial split systems use variable-speed compressors to modulate capacity precisely to building load, achieving significantly lower energy consumption than fixed-speed equipment. The efficiency gains depend entirely on the system operating within specification: refrigerant charge tolerances are tighter, controls calibration matters more, and coil condition has a larger impact on performance than with standard equipment.",
  },
  {
    title: "Indoor and Outdoor Unit Pairing",
    body: "Commercial split systems are engineered as matched systems — the indoor air handler and outdoor condensing unit are specified together to deliver rated capacity and efficiency. Mismatched replacements, field modifications, or uncertified indoor-outdoor combinations can void manufacturer warranties, reduce efficiency, and create refrigerant circuit instability. When Gardner Air recommends replacement of any component, the pairing is verified against manufacturer specifications before equipment is ordered.",
  },
];

const SERVICES = [
  {
    title: "Preventative Maintenance",
    href: "/commercial-hvac-services/preventative-maintenance/",
    body: "The foundation of Gardner Air's split system program. Every visit covers the complete maintenance scope: refrigerant charge verification, indoor coil inspection and cleaning, condenser coil and fan service, capacitor testing, electrical connection tightening, drain line flush, filter replacement, thermostat calibration, and a written service report.",
  },
  {
    title: "Repair and Troubleshooting",
    href: "/commercial-hvac-services/repair/",
    body: "When a split system is underperforming or offline, Gardner Air's technicians diagnose the root cause rather than replacing components sequentially. Covers refrigerant leak detection and recovery, indoor coil freeze analysis, condenser fan evaluation, capacitor and contactor testing, drain line clearing, and zone controls fault isolation.",
  },
  {
    title: "Replacement",
    href: "/commercial-hvac-services/replacement/",
    body: "When a split system reaches the end of its service life, Gardner Air manages the replacement process from equipment specification through startup documentation — including refrigerant recovery, matched-system selection, line set evaluation, controls integration, and a documented startup baseline.",
  },
  {
    title: "Installation and Startup",
    href: "/commercial-hvac-services/installation/",
    body: "New split system installation requires correct line set sizing, proper refrigerant charging, drain system installation, and controls commissioning. Gardner Air follows the manufacturer's startup procedures and delivers a startup report with measured performance data before the system is accepted.",
  },
];

const COMMON_ISSUES = [
  {
    title: "Refrigerant line leaks",
    body: "Line sets on commercial split systems pass through walls, ceilings, and mechanical chases — and fittings, flared connections, and brazed joints along the run are all potential leak points. Gardner Air performs a complete line-set and coil leak survey rather than adding refrigerant without identifying the source.",
  },
  {
    title: "Indoor coil freezing",
    body: "A frozen indoor coil is a symptom, not a root cause. The underlying cause may be low refrigerant charge, a restricted filter, a failed blower motor, or a partially closed damper. Each cause requires a different corrective action. Gardner Air's diagnostic process identifies the cause before any remediation is performed.",
  },
  {
    title: "Condenser fan issues",
    body: "Condenser fan motor failures, capacitor failures, and blade damage reduce heat rejection capacity and drive up head pressure — accelerating compressor wear and reducing system efficiency. Gardner Air tests capacitors, verifies fan motor amperage, and inspects blade condition on every maintenance visit.",
  },
  {
    title: "Zone and thermostat mismatches",
    body: "Commercial multi-zone split systems depend on accurate thermostat calibration and zone sequencing to distribute conditioning correctly. Miscalibrated thermostats, wiring faults, and zone controller programming errors create temperature imbalances that occupants notice long before the system generates a fault code.",
  },
  {
    title: "Drain line clogs",
    body: "Indoor air handlers in commercial applications produce significant condensate volumes. A clogged drain line floods the drain pan, can damage ceiling assemblies, and often triggers a safety float switch that shuts the unit down. Gardner Air flushes and inspects drain lines as a standard component of every maintenance visit.",
  },
  {
    title: "Capacitor failure",
    body: "Compressor and condenser fan motor capacitors degrade over time, particularly in the high-ambient-temperature conditions common on Southern California equipment pads. A failing capacitor causes hard-start conditions, increased motor amperage, and eventual motor failure. Gardner Air tests capacitors at every maintenance visit.",
  },
];

const OUTCOMES = [
  {
    eyebrow: "OUTCOME 01",
    body: "Fewer split system failures · Fewer zone outages",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Lower energy costs · Higher system efficiency",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "15–18 year equipment lifespan · Stronger ROI",
    Icon: BarChart3,
  },
];

const WHY_CHOOSE = [
  {
    title: "Complete scope on every visit.",
    body: "Gardner Air does not operate on a fixed time block. Every maintenance item on the scope gets completed — or a documented reason is provided for any exception. Facilities managers receive a full written report after each visit.",
  },
  {
    title: "Factory-trained technicians.",
    body: "Gardner Air's technicians receive manufacturer-specific training on the split system platforms they service. A commercial split system integrates refrigeration, airflow, drainage, and controls across two separated mechanical sections — that demands technicians who evaluate the full system on every visit.",
  },
  {
    title: "Accurate diagnostics.",
    body: "When other contractors reach the limit of their diagnostic capability on a split system, they call Gardner Air. That reputation exists because Gardner Air's technicians are trained to identify root causes, not symptoms.",
  },
  {
    title: "Long-term partnership model.",
    body: "Gardner Air's client relationships are built around a maintenance program, not individual service calls. Your split system fleet's performance history is documented, trends are tracked, and Gardner Air knows your equipment before something goes wrong.",
  },
];

const BRANDS = [
  "Carrier",
  "Trane",
  "Daikin",
  "Mitsubishi Electric",
  "LG",
  "Lennox",
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function SplitSystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(splitSystemServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <main id="main-content">

        {/* ------------------------------------------------------------------ */}
        {/* Hero                                                                 */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="split-systems-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/equipment/equipment-hero-bg.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-60"
              aria-hidden="true"
            />
          </div>

          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(42,45,51,0.50) 0%, rgba(42,45,51,0.35) 35%, rgba(42,45,51,0.75) 70%, rgba(42,45,51,0.95) 100%)",
            }}
            aria-hidden="true"
          />

          <div className="absolute top-0 inset-x-0 h-[3px] bg-[#D42027] z-10" aria-hidden="true" />

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
                  <Link href="/equipment/" className="hover:text-white/70 transition-colors">
                    Equipment
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Split Systems</li>
              </ol>
            </nav>
            <h1
              id="split-systems-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
Multi-zone systems drift out of spec quietly.
              <br className="hidden lg:block" />{" "}
              <span className="text-[#D42027]">Catch it before your tenants do.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air provides complete preventative maintenance, diagnostics, and installation support for standard, multi-zone, heat pump, and high-efficiency inverter commercial split systems serving offices, professional buildings, and commercial facilities across Southern California.
            </p>

            <Link
              href="#split-systems-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a Split System Service Proposal
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative z-10" aria-label="Gardner Air credentials">
            <div
              className="border-t border-white/10"
              style={{ background: "rgba(42,45,51,0.75)", backdropFilter: "blur(12px)" }}
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
        {/* Cert logo strip                                                      */}
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
        {/* Intro                                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="split-systems-intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Specialized Service Matters
                </p>
                <h2
                  id="split-systems-intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Split System Flexibility Creates Maintenance Complexity That Demands a Complete Program
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Commercial split systems separate the condensing unit from the air handler — placing heat rejection outside and air distribution inside — and that separation creates both flexibility and complexity. The refrigerant lines connecting the two sections can span long distances through mechanical chases, ceiling plenums, and exterior walls. When the refrigerant circuit, drain system, or controls degrade, the failure often does not surface until occupant complaints accumulate or a zone goes offline.
                  </p>
                  <p>
                    Gardner Air specializes in the commercial split systems that condition professional offices, medical suites, financial service buildings, small commercial facilities, and any application where rooftop equipment is structurally or logistically impractical. The firm serves facilities throughout Riverside County, San Bernardino County, and Orange County.
                  </p>
                  <p>
                    Gardner Air completes every item on the maintenance scope during every visit and delivers a written report afterward. Facilities managers across Southern California retain Gardner Air to prevent split system failures, not to recover from them.
                  </p>
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF]">
                  Last Updated: August 2026
                </p>
              </div>

              <div className="flex flex-col gap-5">
                <div
                  className="relative rounded-2xl overflow-hidden border border-[#D8D4CC] bg-[#F7F6F3]"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded px-2.5 py-1.5 bg-black/55 backdrop-blur-sm border border-white/10">
                    <span className="block h-1.5 w-1.5 rounded-full bg-[#D42027]" aria-hidden="true" />
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white/90">Split System · Exterior</span>
                  </div>
                  <Image
                    src="/equipment/split-systems-intro-detail.webp"
                    alt="Gardner Air technician inspecting a split HVAC system at a Southern California commercial facility."
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
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
                    15+
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Years of service life
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      With disciplined PM program
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Split System Types                                                   */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="split-types-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Equipment Coverage
                </p>
                <h2
                  id="split-types-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Split System Types We Service
                </h2>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {SPLIT_TYPES.map((type, i) => (
                    <div
                      key={type.title}
                      className="grid grid-cols-[52px_1fr] gap-5 py-7 items-start"
                    >
                      <p
                        className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none pt-1"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                        }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </p>
                      <div>
                        <h3
                          className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-2"
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "1.0625rem",
                          }}
                        >
                          {type.title}
                        </h3>
                        <p className="text-base text-[#6B7280] leading-relaxed">
                          {type.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-7 lg:p-8 flex flex-col gap-0"
                style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
                aria-label="Split system brands Gardner Air services"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Brands We Service
                </p>

                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Gardner Air&rsquo;s technicians hold factory training on the major commercial split system platforms in service across Southern California. Factory training means Gardner Air follows manufacturer-prescribed service procedures, uses the correct refrigerants and lubricants, and interprets model-specific diagnostics accurately rather than applying generic practices to equipment that requires precision.
                </p>

                <ul className="flex flex-col gap-3 mb-8" role="list">
                  {BRANDS.map((brand) => (
                    <li key={brand} className="flex items-center gap-3">
                      <Check
                        size={13}
                        className="shrink-0 text-[#D42027]"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm text-white/80 font-medium">{brand}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-white/10 pt-6">
                  <p className="text-white/55 text-xs leading-relaxed mb-4">
                    Operating a split system not listed above? Call with the make and model — Gardner Air services a wide range of commercial equipment.
                  </p>
                  <a
                    href="tel:+19516964495"
                    className="group inline-flex items-center gap-3 h-12 pl-5 pr-4 rounded-full text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.5)] transition-all duration-200 min-h-[44px]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                    aria-label="Call Gardner Air"
                  >
                    (951) 696-4495
                    <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/15 group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all">
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Services grid                                                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="split-system-services-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Our Split System Services
              </p>
              <h2
                id="split-system-services-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Full-Scope Split System Service From Maintenance to Replacement
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICES.map((svc, i) => {
                const ServiceIcon = [Wrench, Zap, TrendingDown, Shield][i] ?? Wrench;
                return (
                <div
                  key={svc.title}
                  className="rounded-2xl bg-white border border-[#D8D4CC] p-7 lg:p-8 flex flex-col gap-4 hover:border-[#D42027]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D42027]/8 flex items-center justify-center flex-shrink-0">
                    <ServiceIcon size={18} className="text-[#D42027]" aria-hidden="true" />
                  </div>
                  <h3
                    className="font-bold text-[#111318] leading-tight tracking-[-0.01em]"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)",
                    }}
                  >
                    {svc.title}
                  </h3>
                  <p className="text-base text-[#6B7280] leading-relaxed flex-1">
                    {svc.body}
                  </p>
                  <Link
                    href={svc.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#D42027] hover:text-[#B01C22] transition-colors group mt-auto"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Learn more
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              );
              })}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Mid CTA band                                                          */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Schedule a split system assessment"
          className="relative overflow-hidden bg-[#F7F6F3] border-t border-b border-[#E5E7EB] py-16 lg:py-24"
          >
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl border-l-2 border-[#D42027] pl-6 lg:pl-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
                Prevent Failures Before They Happen
              </p>
              <h2
                className="font-bold text-[#111318] leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Schedule a Split System Assessment for Your Facility
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8">
                Gardner Air serves commercial facilities across Riverside County, San Bernardino County, and Orange County. If your split systems are on a maintenance program that does not deliver complete-scope service and written documentation after every visit, that is worth a conversation.
              </p>
              <Link
                href="#split-systems-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a Split System Service Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Common Issues                                                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="split-system-issues-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
                  Diagnostics
                </p>
                <h2
                  id="split-system-issues-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  Common Split System Issues We Diagnose
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Root-cause diagnosis before any intervention. Gardner Air&rsquo;s technicians are trained to identify what is actually wrong — not to replace parts sequentially until the problem resolves.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {COMMON_ISSUES.map((issue) => (
                <div
                  key={issue.title}
                  className="rounded-xl border border-[#D8D4CC] bg-[#F7F6F3] p-6 flex flex-col gap-3 hover:border-[#D42027]/25 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded bg-[#D42027]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <AlertTriangle size={14} className="text-[#D42027]" aria-hidden="true" />
                    </div>
                    <h3
                      className="font-bold text-[#111318] leading-snug pt-1"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "1rem",
                      }}
                    >
                      {issue.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {issue.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Outcomes                                                              */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="split-system-outcomes-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Long-Term Value
              </p>
              <h2
                id="split-system-outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                The Case for a Disciplined Split System Maintenance Program
              </h2>
              <div className="flex flex-col gap-5 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  Facilities that maintain their split systems on a disciplined preventative maintenance program see equipment lifespans extend to 15–18 years and avoid the large unplanned repair costs that interrupt capital budgets.
                </p>
                <p>
                  Facilities managers across Southern California retain Gardner Air not for emergencies, but to prevent them. That distinction defines the relationship from day one.
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
        {/* Why Choose                                                            */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="why-choose-split-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Gardner Air
                </p>
                <h2
                  id="why-choose-split-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Why Facilities Managers Choose Gardner Air for Split System Service
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Gardner Air&rsquo;s client relationships are structured around a maintenance program, not individual service calls. Your split system fleet&rsquo;s performance history is documented, trends are tracked, and Gardner Air knows your equipment before something goes wrong.
                </p>

                <div className="mt-8">
                  <Link
                    href="#split-systems-contact"
                    className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Request a Service Proposal
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                {WHY_CHOOSE.map((item) => (
                  <div key={item.title} className="py-7 flex flex-col gap-2">
                    <div className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#D42027]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check
                          size={11}
                          className="text-[#D42027]"
                          aria-hidden="true"
                          strokeWidth={3}
                        />
                      </div>
                      <h3
                        className="font-bold text-[#111318] leading-snug"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "1.0625rem",
                        }}
                      >
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-base text-[#6B7280] leading-relaxed pl-8">
                      {item.body}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ---- Cross-sell block ---- */}
        <section
          aria-labelledby="crosssell-split-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/equipment/split-systems-replacement.webp"
                    alt="Commercial split-system HVAC replacement by Gardner Air in Southern California"
                    fill
                    sizes="(max-width: 1024px) 100vw, 288px"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    When Maintenance Isn&rsquo;t Enough
                  </p>
                  <h2
                    id="crosssell-split-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Is Your Split System Beyond the Maintenance Stage?
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    Explore Gardner Air&rsquo;s replacement services to see how we manage the full decommission-to-startup process for aging or failed split system equipment.
                  </p>
                  <div>
                    <Link
                      href="/commercial-hvac-services/replacement/"
                      className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors duration-200 min-h-[44px]"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Explore Replacement Services
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* FAQ                                                                  */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="split-systems-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              FAQ
            </p>
            <h2
              id="split-systems-faq-heading"
              className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Frequently Asked Questions About Commercial Split System Service
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
                    Split system service is specific to the equipment, application, and facility requirements. If you have a question about scope, scheduling, or equipment coverage, our team responds within one business day.
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
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Contact form                                                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="split-systems-contact"
          aria-labelledby="split-systems-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Request a Split System Service Proposal"
                  subhead="Contact Gardner Air to discuss your equipment and what a maintenance program should include."
                  submitLabel="Request a Split System Service Proposal"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We review your facility and equipment details" },
                    { num: "02", body: "Our team schedules a site walkthrough" },
                    { num: "03", body: "You receive a written scope and maintenance proposal" },
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
                    Prefer to talk first?
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
                    alt="Gardner Air commercial HVAC dispatch and customer service team in Murrieta, California"
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
/* FAQ Accordion Item                                                   */
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
