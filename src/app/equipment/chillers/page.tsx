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
  title: "Commercial Chiller Service | Gardner Air | Southern California",
  description:
    "Gardner Air provides preventative maintenance, repair, and installation for commercial chillers across Southern California. Factory-trained technicians. Call (951) 696-4495.",
  alternates: {
    canonical: "https://gardnerair.com/equipment/chillers/",
  },
  openGraph: {
    title: "Commercial Chiller Service | Gardner Air | Southern California",
    description:
      "Gardner Air provides preventative maintenance, repair, and installation for commercial chillers across Southern California. Factory-trained technicians. Call (951) 696-4495.",
    url: "https://gardnerair.com/equipment/chillers/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const chillerServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Chiller Maintenance",
  description:
    "Gardner Air provides complete preventative maintenance, diagnostics, and installation support for centrifugal, screw, scroll, and absorption chillers serving commercial and industrial facilities across Southern California.",
  url: "https://gardnerair.com/equipment/chillers/",
  serviceType: "Commercial Chiller Maintenance",
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
      name: "Chillers",
      item: "https://gardnerair.com/equipment/chillers/",
    },
  ],
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How often should a commercial chiller be serviced?",
    a: "Commercial chillers should receive a comprehensive preventative maintenance inspection at minimum once per year, with most facilities in Southern California scheduling quarterly visits given year-round cooling demand. Higher-criticality applications — data centers, hospitals, and 24/7 manufacturing operations — often warrant more frequent inspections. The correct interval depends on the chiller's age, refrigerant type, operating hours, and how much unplanned downtime the facility can tolerate. A maintenance program scoped to the equipment is more reliable than a calendar default.",
  },
  {
    q: "What is the difference between centrifugal and screw chillers?",
    a: "Centrifugal chillers use a high-speed rotating impeller to compress refrigerant vapor and perform most efficiently at or near full load. They are the standard choice for large-tonnage applications above roughly 200 tons. Screw chillers use meshing helical rotors and maintain strong efficiency across a wider range of partial loads, making them well-suited for facilities with variable cooling demand. Both types require regular oil analysis, refrigerant charge verification, and controls calibration, but the specific service procedures and wear points differ between the two designs.",
  },
  {
    q: "How long do commercial chillers typically last?",
    a: "Commercial chillers maintained on a disciplined preventative maintenance program typically last 20 to 25 years. Chillers that receive irregular or incomplete maintenance often require major component replacement or full replacement well before that range. The compressor, heat exchangers, and controls are the primary cost drivers in older equipment. A documented maintenance history also informs the replacement-vs.-repair decision when a major component fails late in the unit's life.",
  },
  {
    q: "What are signs my chiller needs immediate service?",
    a: "Indicators that a chiller requires prompt attention include: high discharge pressure alarms, low evaporator pressure faults, unusual compressor noise or vibration, unexplained loss of cooling capacity, refrigerant leak alarms, and oil pressure faults. Any of these conditions left unaddressed can escalate from a serviceable issue to a compressor failure or system shutdown. Facilities with Gardner Air maintenance agreements receive priority scheduling when these conditions are reported.",
  },
  {
    q: "Does Gardner Air offer emergency chiller repair?",
    a: "Gardner Air is a preventative maintenance firm, not a 24/7 emergency dispatch service. That distinction matters: the facilities Gardner Air serves experience far fewer unplanned chiller failures because maintenance is completed to full scope on every visit, and developing problems are identified before they become failures. When an existing maintenance client reports an urgent issue, Gardner Air prioritizes their scheduling. Facilities looking for a reactive-only service provider are not the right fit. Facilities looking to reduce the frequency and cost of unplanned chiller events are.",
  },
  {
    q: "Can you service my brand of chiller?",
    a: "Gardner Air holds factory training on all major commercial chiller platforms, including Trane, Carrier, York, Daikin, McQuay/Daikin Applied, Multistack, and Smardt. For manufacturers not listed, call (951) 696-4495 with the make and model. Gardner Air services a wide range of commercial equipment and will give a direct answer on whether the specific unit falls within their program.",
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

const CHILLER_TYPES = [
  {
    title: "Centrifugal Chillers",
    body: "Centrifugal chillers use high-speed impellers to compress refrigerant and are the workhorses of large-tonnage commercial cooling. Common in hospitals, data centers, and campus facilities above 200 tons, they offer high efficiency at full load and require rigorous attention to refrigerant charge, bearing condition, and approach temperatures to maintain rated performance.",
  },
  {
    title: "Screw Chillers",
    body: "Screw chillers use counter-rotating helical rotors and perform exceptionally well across a wide range of partial loads — making them well-suited for manufacturing, industrial processes, and large commercial buildings with variable occupancy. Gardner Air services both oil-flooded and oil-free screw configurations and performs oil analysis as a standard component of preventative maintenance visits.",
  },
  {
    title: "Scroll Chillers",
    body: "Scroll chillers operate in smaller commercial tonnages and are common in mid-size office buildings, retail centers, and light industrial facilities. Their simpler mechanical design does not eliminate the need for disciplined maintenance: refrigerant charge verification, condenser coil condition, and controls calibration all require periodic attention to hold efficiency.",
  },
  {
    title: "Absorption Chillers",
    body: "Absorption chillers use a heat source — typically steam, hot water, or direct-fired natural gas — rather than a compressor to drive the refrigeration cycle. They are found in facilities with waste heat recovery systems, cogeneration plants, and district energy applications. Gardner Air's service approach covers solution concentration, crystallization prevention, purge system operation, and heat exchanger condition.",
  },
  {
    title: "Air-Cooled vs. Water-Cooled",
    body: "Air-cooled chillers reject heat through ambient-air condensers and are common where cooling tower infrastructure is not feasible. Water-cooled chillers pair with a cooling tower and achieve higher efficiency over the full operating season. Each configuration carries distinct maintenance requirements: condenser coil fouling for air-cooled units; tower water treatment, tube fouling, and approach temperature monitoring for water-cooled systems. Gardner Air services both.",
  },
];

const SERVICES = [
  {
    title: "Preventative Maintenance",
    href: "/commercial-hvac-services/preventative-maintenance/",
    body: "The core of Gardner Air's chiller program. Every visit covers the complete maintenance scope — refrigerant charge verification, oil sampling and analysis, condenser and evaporator inspection, compressor vibration check, controls calibration, and a written service report. No items deferred because the scheduled time ran out.",
  },
  {
    title: "Repair and Troubleshooting",
    href: "/commercial-hvac-services/repair/",
    body: "When a chiller is underperforming or offline, Gardner Air's technicians diagnose the root cause rather than replacing parts sequentially. Encompasses refrigerant leak detection and recovery, compressor evaluation, controls fault analysis, and oil system diagnostics. Existing maintenance clients receive priority scheduling.",
  },
  {
    title: "Replacement",
    href: "/commercial-hvac-services/replacement/",
    body: "When a chiller reaches the end of its service life or a major component failure makes replacement the right financial decision, Gardner Air manages the full process — refrigerant recovery, rigging coordination, new-unit startup, and controls integration — documented in full.",
  },
  {
    title: "Installation and Startup",
    href: "/commercial-hvac-services/installation/",
    body: "New chiller installation requires more than mechanical connection. Refrigerant charging, controls commissioning, flow verification, and performance baseline documentation all happen before Gardner Air considers a system accepted. Factory startup procedures are followed for each manufacturer's equipment.",
  },
];

const COMMON_ISSUES = [
  {
    title: "Refrigerant leaks",
    body: "Even a small refrigerant loss shifts the evaporator pressure and reduces capacity. Gardner Air uses electronic leak detection and performs a full system leak survey rather than topping off the charge without identifying the source.",
  },
  {
    title: "Low evaporator pressure",
    body: "Below-design evaporator pressure typically signals a refrigerant undercharge, a partially closed isolation valve, or fouled evaporator tubes. Each cause requires a different corrective action, which is why accurate diagnosis before any intervention matters.",
  },
  {
    title: "Compressor issues",
    body: "Centrifugal compressor surge, elevated vibration, or abnormal bearing temperatures on screw compressors are early indicators of mechanical wear. Catching these in a maintenance visit avoids the much larger cost of a compressor failure mid-season.",
  },
  {
    title: "Condenser fouling",
    body: "Scaled or biofilm-fouled condenser tubes raise condensing pressure, reduce efficiency, and accelerate wear throughout the refrigerant circuit. Water-cooled chillers require tube cleaning at defined intervals; air-cooled condenser coils require fin cleaning and inspection.",
  },
  {
    title: "Oil and lubrication issues",
    body: "Contaminated oil, low oil pressure, or oil that has degraded beyond specification damages compressor bearings and can travel into the refrigerant circuit. Oil sampling and analysis on every preventative maintenance visit gives Gardner Air a trend line — not just a snapshot.",
  },
  {
    title: "Control and sensor faults",
    body: "A chiller running on inaccurate sensor data or mis-calibrated controls operates inefficiently and may short-cycle or trip on safety limits. Gardner Air's technicians verify sensor accuracy and controls programming as part of every scheduled visit.",
  },
];

const OUTCOMES = [
  {
    eyebrow: "OUTCOME 01",
    body: "Fewer chiller failures · Fewer facility disruptions",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Lower energy costs · Higher system efficiency",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "20–25 year equipment lifespan · Stronger ROI",
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
    body: "Gardner Air's technicians receive manufacturer-specific training on the chiller platforms they service. Commercial chiller maintenance is not a generalist skill, and Gardner Air does not staff it as one.",
  },
  {
    title: "Accurate diagnostics.",
    body: "When other contractors reach the limit of their diagnostic capability, they call Gardner Air. That reputation exists because Gardner Air's technicians are trained to identify root causes, not symptoms.",
  },
  {
    title: "Long-term partnership model.",
    body: "Gardner Air's client relationships are structured around a maintenance program, not individual service calls. That means your chiller's performance history is documented, trends are tracked, and Gardner Air knows your equipment before something goes wrong.",
  },
];

const BRANDS = [
  "Trane",
  "Carrier",
  "York",
  "Daikin",
  "McQuay / Daikin Applied",
  "Multistack",
  "Smardt",
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function ChillersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(chillerServiceSchema) }}
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
        {/* Hero — image background + trust badge bar                           */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="chillers-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          {/* Hero background image */}
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

          {/* Gradient overlay — ensures legibility regardless of image load state */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(42,45,51,0.50) 0%, rgba(42,45,51,0.35) 35%, rgba(42,45,51,0.75) 70%, rgba(42,45,51,0.95) 100%)",
            }}
            aria-hidden="true"
          />

          {/* Red accent bar */}
          <div className="absolute top-0 inset-x-0 h-[3px] bg-[#D42027] z-10" aria-hidden="true" />

          {/* Hero content */}
          <div
            className="relative flex-1 flex flex-col justify-center w-full mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 z-10"
            style={{ paddingTop: "calc(100px + 5vh)", paddingBottom: "5vh" }}
          >
            {/* Breadcrumb */}
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
                <li className="text-white/60">Chillers</li>
              </ol>
            </nav>
            <h1
              id="chillers-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Commercial chiller service,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">completed in full.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air provides complete preventative maintenance, diagnostics, and installation support for centrifugal, screw, scroll, and absorption chillers serving commercial and industrial facilities across Southern California.
            </p>

            <Link
              href="#chillers-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a Chiller Service Proposal
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* Trust badge bar */}
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
        {/* Intro — two-col text + photo                                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="chillers-intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Specialized Service Matters
                </p>
                <h2
                  id="chillers-intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Your Most Capital-Intensive System Deserves the Right Contractor
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Commercial chillers are among the most capital-intensive mechanical systems a facility operates. A 200-ton centrifugal chiller cooling a data center or hospital wing is not a component that tolerates deferred maintenance or unqualified technicians.
                  </p>
                  <p>
                    Gardner Air specializes in the commercial chiller systems that run data centers, manufacturing plants, hospitals, hotels, and large office campuses throughout Riverside County, San Bernardino County, and Orange County. When a chiller loses capacity or goes down entirely, the downstream consequences move fast: product spoilage, server thermal shutdowns, patient care disruptions, or a building evacuation in July.
                  </p>
                  <p>
                    Chiller systems demand refrigerant expertise, oil analysis, vibration diagnostics, and controls knowledge that most commercial HVAC contractors simply do not carry. Gardner Air&rsquo;s technicians are factory-trained on the major commercial chiller platforms, and every service visit is completed to full scope — not cut short by a time block.
                  </p>
                  <p>
                    Facilities managers across Southern California retain Gardner Air not for emergencies, but to prevent them.
                  </p>
                </div>

                {/* Last Updated */}
                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF]">
                  Last Updated: August 2026
                </p>
              </div>

              {/* Intro photo */}
              <div className="flex flex-col gap-5">
                <div
                  className="relative rounded-2xl overflow-hidden border border-[#D8D4CC] bg-[#F7F6F3]"
                  style={{ aspectRatio: "4 / 5" }}
                >
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 rounded px-2.5 py-1.5 bg-black/55 backdrop-blur-sm border border-white/10">
                    <span className="block h-1.5 w-1.5 rounded-full bg-[#D42027]" aria-hidden="true" />
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white/90">Chiller · Mechanical Room</span>
                  </div>
                  <Image
                    src="/equipment/chillers-intro-detail.webp"
                    alt="Gardner Air technician inspecting a commercial chiller in a Southern California mechanical room."
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
                    20+
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
        {/* Chiller Types — dark panel + type list                               */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="chiller-types-heading"
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
                  id="chiller-types-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Chiller Types We Service
                </h2>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {CHILLER_TYPES.map((type, i) => (
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

              {/* Dark panel — brands */}
              <div
                className="rounded-2xl p-7 lg:p-8 flex flex-col gap-0"
                style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
                aria-label="Chiller brands Gardner Air services"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Brands We Service
                </p>

                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Gardner Air&rsquo;s technicians hold factory training on the major commercial chiller platforms in service across Southern California. Factory training means Gardner Air follows the manufacturer&rsquo;s prescribed service procedures, uses the correct refrigerants and lubricants, and can interpret model-specific diagnostics accurately rather than applying generic practices to specialized equipment.
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
                    Operating a chiller not listed above? Call with the make and model — Gardner Air services a wide range of commercial equipment.
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
        {/* Our Chiller Services — 4-card grid                                   */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="chiller-services-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Our Chiller Services
              </p>
              <h2
                id="chiller-services-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Full-Scope Chiller Service From Maintenance to Replacement
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
          aria-label="Schedule a chiller assessment"
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
                Schedule a Chiller Assessment for Your Facility
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8">
                Gardner Air serves commercial and industrial facilities across Riverside County, San Bernardino County, and Orange County. If your chiller is on a maintenance program that is not delivering complete-scope service and documented reports after every visit, that is worth a conversation.
              </p>
              <Link
                href="#chillers-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a Chiller Service Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Common Chiller Issues                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="chiller-issues-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
                  Diagnostics
                </p>
                <h2
                  id="chiller-issues-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  Common Chiller Issues We Diagnose
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
        {/* Long-term value / outcome cards                                       */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="chiller-outcomes-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Long-Term Value
              </p>
              <h2
                id="chiller-outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                The Case for a Disciplined Chiller Maintenance Program
              </h2>
              <div className="flex flex-col gap-5 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  Facilities that maintain their chillers on a disciplined preventative maintenance program see equipment lifespans extend well past 20 years and avoid the large unplanned repair costs that interrupt capital budgets.
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
        {/* Why Choose Gardner Air                                               */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="why-choose-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Gardner Air
                </p>
                <h2
                  id="why-choose-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Why Facilities Managers Choose Gardner Air for Chiller Service
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Gardner Air&rsquo;s client relationships are structured around a maintenance program, not individual service calls. Your chiller&rsquo;s performance history is documented, trends are tracked, and Gardner Air knows your equipment before something goes wrong.
                </p>

                <div className="mt-8">
                  <Link
                    href="#chillers-contact"
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
          aria-labelledby="crosssell-chillers-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/equipment/chillers-replacement.webp"
                    alt="Gardner Air commercial HVAC equipment replacement"
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
                    id="crosssell-chillers-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Is Your Chiller Beyond the Maintenance Stage?
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    Explore Gardner Air&rsquo;s replacement services to see how we manage the full decommission-to-startup process for aging or failed chiller equipment.
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
          aria-labelledby="chillers-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              FAQ
            </p>
            <h2
              id="chillers-faq-heading"
              className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Frequently Asked Questions About Commercial Chiller Service
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
                    Chiller service is specific to the equipment, the application, and the facility&rsquo;s criticality requirements. If you have a question about scope, scheduling, or equipment coverage, our team responds within one business day.
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
          id="chillers-contact"
          aria-labelledby="chillers-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Request a Chiller Service Proposal"
                  subhead="Contact Gardner Air to discuss your equipment and what a maintenance program should include."
                  submitLabel="Request a Chiller Service Proposal"
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
