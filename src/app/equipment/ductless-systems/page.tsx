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
  title: "Commercial VRF & Ductless System Service | Gardner Air | SoCal",
  description:
    "Gardner Air provides preventative maintenance, repair, and installation for commercial VRF and ductless systems across Southern California. Factory-trained technicians. Call (951) 696-4495.",
  alternates: {
    canonical: "https://gardnerair.com/equipment/ductless-systems/",
  },
  openGraph: {
    title: "Commercial VRF & Ductless System Service | Gardner Air | SoCal",
    description:
      "Gardner Air provides preventative maintenance, repair, and installation for commercial VRF and ductless systems across Southern California. Factory-trained technicians. Call (951) 696-4495.",
    url: "https://gardnerair.com/equipment/ductless-systems/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const vrfServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial VRF and Ductless System Maintenance",
  description:
    "Gardner Air provides complete preventative maintenance, diagnostics, and installation support for commercial VRF, heat recovery, and multi-zone ductless systems serving multi-tenant offices, healthcare facilities, hotels, schools, and commercial retrofit projects across Southern California.",
  url: "https://gardnerair.com/equipment/ductless-systems/",
  serviceType: "Commercial VRF System Maintenance",
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
      name: "Ductless Systems",
      item: "https://gardnerair.com/equipment/ductless-systems/",
    },
  ],
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How often should a commercial VRF system be serviced?",
    a: "Commercial VRF systems serving multi-tenant buildings or high-occupancy facilities should receive comprehensive preventative maintenance at minimum twice per year, with quarterly visits recommended for systems with high indoor unit counts, significant occupant density, or BAS integration that requires regular verification. Each indoor unit has its own filter, drain system, and coil that require individual attention — a service visit that covers the outdoor unit but skips indoor units is not a complete VRF maintenance visit. A maintenance program scoped to your specific installation is more reliable than a generic calendar default.",
  },
  {
    q: "What is the difference between heat recovery and heat pump VRF?",
    a: "Heat pump VRF operates in one mode at a time — the entire system is either in heating mode or cooling mode. Heat recovery VRF uses a three-pipe refrigerant circuit and branch selector boxes to simultaneously heat some zones while cooling others, capturing heat rejected from cooling zones and redirecting it where heat is needed. Heat recovery VRF is significantly more efficient in buildings with mixed solar exposures, interior core zones that require cooling while perimeter offices require heat, or mixed occupancy schedules. The branch selector boxes add mechanical complexity and require specific training to service correctly.",
  },
  {
    q: "How long do commercial VRF systems typically last?",
    a: "Commercial VRF systems maintained on a disciplined preventative maintenance program typically last 15 to 20 years. The inverter-driven compressor is the primary cost driver in aging equipment, and compressor life depends on refrigerant charge accuracy, coil cleanliness across all indoor units, and filter service that maintains adequate airflow through each head. Systems where indoor unit maintenance is deferred accumulate degraded coil performance across multiple zones simultaneously — increasing compressor load and shortening compressor life.",
  },
  {
    q: "What are warning signs a VRF zone needs attention?",
    a: "Warning signs that a commercial VRF zone requires attention include: a zone that does not reach setpoint consistently, unusual noise from an indoor unit (typically a fan or refrigerant flow sound), water staining below a ceiling cassette, visible ice on refrigerant lines at the indoor unit, and error codes displayed on the zone controller. A single underperforming zone on a VRF system is often a localized issue — a clogged filter, a drain problem, or a refrigerant expansion valve fault — that should be addressed before it affects adjacent zones or the shared outdoor unit.",
  },
  {
    q: "Does Gardner Air handle urgent VRF issues for maintenance clients?",
    a: "Gardner Air is a preventative maintenance firm. The facilities Gardner Air serves experience far fewer unplanned VRF failures because maintenance is completed to full scope on every visit and developing problems are identified before they escalate. When an existing maintenance client reports an urgent condition, Gardner Air prioritizes their scheduling. Facilities looking for reactive-only dispatch are not the right fit. Facilities looking to protect a significant VRF investment through disciplined maintenance are.",
  },
  {
    q: "Can Gardner Air service my brand of VRF system?",
    a: "Gardner Air holds factory training on all major commercial VRF platforms, including Mitsubishi Electric City Multi, Daikin VRV, LG Multi V, Samsung DVM, and Fujitsu Airstage. Each platform uses proprietary communications and refrigerant circuit architecture — brand-specific training is not optional on VRF systems. For manufacturers not listed, call (951) 696-4495 with the make and model. Gardner Air services a wide range of commercial equipment and will give a direct answer on whether the specific system falls within their program.",
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

const VRF_TYPES = [
  {
    title: "Commercial VRF (Variable Refrigerant Flow) Systems",
    body: "Commercial VRF systems use inverter-driven compressors and electronically controlled expansion valves to deliver precise refrigerant flow to each indoor unit independently. They are the appropriate technology for mid-size commercial buildings, multi-tenant office suites, and facilities with high zone diversity. Gardner Air services the full VRF system — outdoor units, indoor units, branch controllers, refrigerant headers, and communications network — as an integrated system on every maintenance visit.",
  },
  {
    title: "Multi-Zone Commercial Ductless Systems",
    body: "Multi-zone commercial ductless systems connect a single outdoor unit to multiple indoor cassettes or wall-mounted units, each controlled independently. They are used in commercial renovations, historic buildings where duct installation is structurally difficult, and small commercial facilities where a full VRF investment is not warranted. Gardner Air services refrigerant charge across the full line set, each indoor unit's coil and drain system, the outdoor unit, and the zone controls.",
  },
  {
    title: "Heat Recovery VRF",
    body: "Heat recovery VRF systems use a three-pipe refrigerant configuration and branch selector boxes to simultaneously provide heating to some zones and cooling to others — capturing rejected heat from cooling zones and redirecting it to zones requiring heat. This makes heat recovery VRF particularly efficient in buildings with mixed solar exposures or mixed occupancy schedules. The branch selector boxes and refrigerant circuit controls require specific technical training to service correctly.",
  },
  {
    title: "Heat Pump VRF",
    body: "Heat pump VRF systems operate in either full heating or full cooling mode simultaneously across all zones — a simpler refrigerant circuit than heat recovery, but with the same inverter-driven compressor technology and zone-level control. They are well-suited for facilities with relatively uniform zone loads and California's mild heating climate. Gardner Air services heat pump VRF with the same complete-scope discipline applied to heat recovery systems.",
  },
  {
    title: "BAS and Controls Integration",
    body: "Commercial VRF systems in managed facilities typically integrate with the building automation system (BAS) through BACnet, LonWorks, or proprietary gateway interfaces. Gardner Air's technicians verify communications integrity between VRF controllers and BAS gateways as part of the maintenance scope — not as a separate engagement. A VRF system that is not communicating with the BAS is not being managed; it is only being ignored at a higher efficiency level.",
  },
];

const SERVICES = [
  {
    title: "Preventative Maintenance",
    href: "/commercial-hvac-services/preventative-maintenance/",
    body: "The foundation of Gardner Air's VRF program. Every visit covers the complete maintenance scope: refrigerant charge verification across the full system, indoor unit coil and drain inspection for each zone, filter service for all indoor units, branch controller inspection, outdoor unit service, electrical connection checks, communications network verification, and a written service report.",
  },
  {
    title: "Repair and Troubleshooting",
    href: "/commercial-hvac-services/repair/",
    body: "When a VRF system or individual zone is underperforming or offline, Gardner Air's technicians diagnose the root cause through the system's communications network and direct measurement — not by replacing branch controllers or indoor units sequentially. Covers refrigerant leak detection, branch controller fault analysis, communications network fault isolation, and condensate system evaluation.",
  },
  {
    title: "Replacement",
    href: "/commercial-hvac-services/replacement/",
    body: "When a VRF system or outdoor unit reaches the end of its service life, Gardner Air manages the replacement process from equipment specification through startup. VRF replacement involves refrigerant circuit sizing, branch controller compatibility, indoor unit matching, and BAS re-integration — Gardner Air coordinates with the facility's team throughout.",
  },
  {
    title: "Installation and Startup",
    href: "/commercial-hvac-services/installation/",
    body: "New VRF installation requires correct refrigerant line sizing for the full circuit length and elevation change, proper branch controller placement, verified refrigerant charge using the manufacturer's calculation method for actual line set length, and complete controls commissioning across all zones.",
  },
];

const COMMON_ISSUES = [
  {
    title: "Refrigerant leaks in long line runs",
    body: "Commercial VRF line sets can extend 150 feet or more from the outdoor unit to the farthest indoor unit, with multiple branch points. Leak sources include brazed joints, flared connections at indoor units, and vibration-induced fatigue at outdoor unit connections. Gardner Air performs a complete refrigerant circuit leak survey rather than adding refrigerant to compensate for an unlocated leak.",
  },
  {
    title: "Communication and controller faults",
    body: "VRF systems rely on a digital communications network between the outdoor unit, branch controllers, and each indoor unit. Wiring faults, failed controllers, and software configuration errors can take individual zones offline or disrupt system-wide capacity management. Gardner Air's technicians isolate communication faults through the system's diagnostic interface and direct network testing.",
  },
  {
    title: "Condensate management failures",
    body: "Each indoor unit produces condensate that must drain correctly through its own drain system. In commercial installations with ceiling cassettes across multiple zones, a clogged drain or a failed condensate pump in one unit can cause water damage to ceiling systems and trigger safety shutdowns. Gardner Air inspects and flushes each indoor unit's drain system on every maintenance visit.",
  },
  {
    title: "Branch controller failures",
    body: "Heat recovery VRF branch selector boxes manage refrigerant flow direction for each zone — they are the core of the heat recovery function and a point of failure specific to three-pipe systems. Gardner Air evaluates branch controller operation and refrigerant valve function as part of every heat recovery VRF maintenance visit.",
  },
  {
    title: "Zone imbalance",
    body: "A VRF system where some zones are overcooled or underserved while others are satisfied typically indicates a refrigerant charge issue, a branch controller calibration problem, or indoor unit performance degradation from dirty coils. Zone imbalance complaints from building occupants are a diagnostic signal, not a thermostat problem.",
  },
  {
    title: "Dirty filters affecting multiple heads",
    body: "Because commercial VRF systems serve many zones from shared outdoor equipment, filter degradation in individual indoor units reduces airflow across those units, forces the system to overserve other zones to compensate, and degrades overall system efficiency. Gardner Air services filters at all indoor units on every maintenance visit — not selectively.",
  },
];

const OUTCOMES = [
  {
    eyebrow: "OUTCOME 01",
    body: "Fewer VRF failures · Fewer zone outages",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Lower energy costs · Peak inverter efficiency",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "15–20 year system lifespan · Protected investment",
    Icon: BarChart3,
  },
];

const WHY_CHOOSE = [
  {
    title: "Complete scope on every visit.",
    body: "Gardner Air does not operate on a fixed time block. Every maintenance item on the scope gets completed — including every indoor unit, every drain system, and the communications network — or a documented reason is provided for any exception.",
  },
  {
    title: "Factory-trained technicians.",
    body: "Commercial VRF systems are not standard split systems at scale. The refrigerant circuit architecture, controls network, and heat recovery function require manufacturer-specific training to evaluate and service correctly. Gardner Air's technicians carry that training.",
  },
  {
    title: "Accurate diagnostics.",
    body: "VRF systems generate extensive fault data through their communications network. Gardner Air's technicians are trained to read and interpret that data accurately — distinguishing a zone controller fault from a refrigerant charge issue from a communications wiring problem.",
  },
  {
    title: "Long-term partnership model.",
    body: "Gardner Air's client relationships are built around a maintenance program. VRF system performance trends — zone imbalance patterns, refrigerant charge drift, filter loading rates — are tracked across visits, giving Gardner Air the diagnostic context to catch developing problems before they become failures.",
  },
];

const BRANDS = [
  "Mitsubishi Electric (City Multi)",
  "Daikin (VRV)",
  "LG Multi V",
  "Samsung DVM",
  "Fujitsu Airstage",
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function DuctlessSystemsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vrfServiceSchema) }}
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
          aria-labelledby="ductless-systems-hero-heading"
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
                <li className="text-white/60">Ductless Systems</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Equipment &middot; Air Systems
            </p>

            <h1
              id="ductless-systems-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Commercial VRF and ductless service,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">completed in full.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air provides complete preventative maintenance, diagnostics, and installation support for commercial VRF, heat recovery, and multi-zone ductless systems serving multi-tenant offices, healthcare facilities, hotels, schools, and commercial retrofit projects across Southern California.
            </p>

            <Link
              href="#ductless-systems-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a VRF System Service Proposal
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
          aria-labelledby="ductless-systems-intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Specialized Service Matters
                </p>
                <h2
                  id="ductless-systems-intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  The Most Sophisticated Refrigerant-Based Conditioning Technology Requires the Most Qualified Service
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Commercial Variable Refrigerant Flow systems represent the most sophisticated refrigerant-based conditioning technology deployed at scale in commercial buildings today. A properly designed and maintained VRF system can simultaneously heat perimeter offices while cooling interior conference rooms from a single outdoor unit, integrate with building automation at the zone level, and operate at rated efficiency across a Southern California climate that demands cooling for nine or more months per year.
                  </p>
                  <p>
                    Gardner Air specializes in commercial VRF and multi-zone ductless systems serving multi-tenant office campuses, hotel properties, healthcare facilities, schools, and commercial renovation projects where duct distribution is impractical or structurally constrained. The firm serves facilities throughout Riverside County, San Bernardino County, and Orange County. VRF systems are not complex because of marketing — they are complex because of refrigerant circuit sophistication, branch controller logic, and the number of independent zones operating simultaneously.
                  </p>
                  <p>
                    Gardner Air completes every item on the maintenance scope during every visit and delivers a written report afterward. Facilities managers retain Gardner Air to maintain VRF systems at peak performance, not to troubleshoot failures that competent maintenance would have prevented.
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
                  <Image
                    src="/equipment/ductless-systems-intro-detail.webp"
                    alt="Gardner Air technician inspecting a ductless mini-split system at a Southern California commercial facility."
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
        {/* VRF Types                                                             */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="vrf-types-heading"
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
                  id="vrf-types-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Commercial VRF and Ductless System Types We Service
                </h2>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {VRF_TYPES.map((type, i) => (
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
                aria-label="VRF brands Gardner Air services"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Brands We Service
                </p>

                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Gardner Air&rsquo;s technicians hold factory training on the major commercial VRF and multi-zone ductless platforms in service across Southern California. Each manufacturer&rsquo;s VRF platform uses proprietary communications protocols and refrigerant circuit architectures that require model-specific training to service correctly. Gardner Air holds that training.
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
                    Operating a VRF or multi-zone system not listed above? Call with the make and model — Gardner Air services a wide range of commercial equipment.
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
          aria-labelledby="vrf-services-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Our VRF and Ductless System Services
              </p>
              <h2
                id="vrf-services-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Full-Scope VRF Service From Maintenance to Replacement
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SERVICES.map((svc) => (
                <div
                  key={svc.title}
                  className="rounded-2xl bg-white border border-[#D8D4CC] p-7 lg:p-8 flex flex-col gap-4 hover:border-[#D42027]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D42027]/8 flex items-center justify-center flex-shrink-0">
                    <Wrench size={18} className="text-[#D42027]" aria-hidden="true" />
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
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Mid CTA band                                                          */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Schedule a VRF system assessment"
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
                Prevent Failures Before They Happen
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Schedule a VRF System Assessment for Your Facility
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Gardner Air serves commercial facilities across Riverside County, San Bernardino County, and Orange County. If your VRF or multi-zone ductless system is on a maintenance program that does not cover every indoor unit, every drain system, and the full communications network on every visit, that is worth a conversation.
              </p>
              <Link
                href="#ductless-systems-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a VRF System Service Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Common Issues                                                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="vrf-issues-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
                  Diagnostics
                </p>
                <h2
                  id="vrf-issues-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  Common VRF and Ductless System Issues We Diagnose
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Root-cause diagnosis before any intervention. Gardner Air&rsquo;s technicians are trained to identify what is actually wrong — not to replace branch controllers or indoor units sequentially until the problem resolves.
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
          aria-labelledby="vrf-outcomes-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Long-Term Value
              </p>
              <h2
                id="vrf-outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                The Case for a Disciplined VRF Maintenance Program
              </h2>
              <div className="flex flex-col gap-5 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  Facilities that maintain their VRF systems on a disciplined preventative maintenance program see equipment lifespans extend to 15–20 years and avoid the large unplanned repair costs that interrupt capital budgets.
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
          aria-labelledby="why-choose-vrf-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Gardner Air
                </p>
                <h2
                  id="why-choose-vrf-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Why Facilities Managers Choose Gardner Air for VRF and Ductless System Service
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Gardner Air&rsquo;s client relationships are structured around a maintenance program, not individual service calls. VRF system performance trends are tracked across visits, giving Gardner Air the diagnostic context to catch developing problems before they become failures.
                </p>

                <div className="mt-8">
                  <Link
                    href="#ductless-systems-contact"
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
          aria-labelledby="crosssell-vrf-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/Package-Unit-Replacement-25-Ton-1.webp"
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
                    id="crosssell-vrf-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Is Your VRF System Beyond the Maintenance Stage?
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    Explore Gardner Air&rsquo;s replacement services to see how we manage the full decommission-to-startup process for aging or failed VRF equipment.
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
          aria-labelledby="ductless-systems-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              FAQ
            </p>
            <h2
              id="ductless-systems-faq-heading"
              className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Frequently Asked Questions About Commercial VRF and Ductless System Service
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
                    VRF service is specific to the system architecture, manufacturer platform, and facility requirements. If you have a question about scope, scheduling, or equipment coverage, our team responds within one business day.
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
          id="ductless-systems-contact"
          aria-labelledby="ductless-systems-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Request a VRF System Service Proposal"
                  subhead="Contact Gardner Air to discuss your system and what a complete VRF maintenance program should include."
                  submitLabel="Request a VRF System Service Proposal"
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
