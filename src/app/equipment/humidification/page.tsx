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
  title: "Commercial Humidification System Service | Gardner Air | Southern California",
  description:
    "Gardner Air provides preventative maintenance and repair for commercial steam and evaporative humidification systems across Southern California. Call (951) 696-4495.",
  alternates: {
    canonical: "https://gardnerair.com/equipment/humidification/",
  },
  openGraph: {
    title: "Commercial Humidification System Service | Gardner Air | Southern California",
    description:
      "Gardner Air provides preventative maintenance and repair for commercial steam and evaporative humidification systems across Southern California. Call (951) 696-4495.",
    url: "https://gardnerair.com/equipment/humidification/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const humidificationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Humidification System Maintenance",
  description:
    "Gardner Air provides complete preventative maintenance, diagnostics, and installation support for isothermal steam, adiabatic evaporative, and ultrasonic humidification systems serving commercial, institutional, and precision-process facilities across Southern California.",
  url: "https://gardnerair.com/equipment/humidification/",
  serviceType: "Commercial Humidification System Maintenance",
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
      name: "Humidification",
      item: "https://gardnerair.com/equipment/humidification/",
    },
  ],
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How often should commercial humidification systems be serviced?",
    a: "Service frequency depends on equipment type, water quality, and application criticality. Electrode and resistive steam humidifiers in Southern California's hard-water environment typically require maintenance every 3 to 6 months due to accelerated mineral scaling. Evaporative systems in regulated environments — hospitals, pharmaceutical manufacturing, cleanrooms — require quarterly or more frequent biological risk inspections. Gas-fired steam systems typically align with annual or semi-annual service intervals coordinated with heating-season preparation. The correct interval is determined by output data and component condition, not calendar alone.",
  },
  {
    q: "What is the difference between isothermal and adiabatic humidification?",
    a: "Isothermal humidification generates steam using heat — either from natural gas combustion or electrical resistance — and introduces that steam into the airstream. Because the steam is already at saturation, it adds moisture without requiring evaporation energy from the air. Adiabatic humidification evaporates water directly into the airstream, which requires energy from the air itself — cooling the air slightly in the process. Isothermal systems are precise and predictable but have higher operating costs. Adiabatic systems consume less energy but add a cooling load and carry biological risk management requirements. The correct choice depends on the application, the facility's water source, and the RH tolerance band required.",
  },
  {
    q: "What is causing the white dust from my humidifier?",
    a: "White dust from a humidifier is airborne mineral particulate — calcium and magnesium compounds from hard water that are carried out of the humidifier with the moisture output. It is most common with ultrasonic humidifiers and some atomizing systems operating on untreated tap water. Southern California water is moderately to highly hard in most areas. Solutions include RO or DI water treatment upstream of the humidifier, replacing the humidifier type with an isothermal steam system, or in some cases adjusting the unit's output level and fan speed. Gardner Air evaluates the specific system and water conditions before recommending a corrective approach.",
  },
  {
    q: "How is Legionella risk managed in evaporative humidification systems?",
    a: "Legionella risk in evaporative humidification systems is managed through a combination of water temperature control, biocide treatment, flush cycle frequency, media inspection and replacement, and documented monitoring. ASHRAE Standard 188 provides the framework for building water management programs, and evaporative humidification systems fall within its scope. Gardner Air's evaporative system service protocols are designed to generate the documentation a facility water management program requires and to flag conditions — standing water, inadequate flush cycles, warm stagnant zones — that elevate biological risk.",
  },
  {
    q: "What are signs my humidification system needs service?",
    a: "Indicators that a commercial humidification system needs attention include: RH readings that do not match setpoints despite the system running at capacity, visible scale buildup on cylinders or distribution nozzles, white particulate on surfaces near distribution outlets, nuisance fault codes or unexpected shutdowns, drain valve operation failures, and any situation where a humidity-sensitive process is producing out-of-tolerance results. Gardner Air's maintenance clients receive documented RH performance data after every visit, making trend-based intervention possible before a failure event occurs.",
  },
  {
    q: "Can you service humidification systems integrated with our BAS?",
    a: "Gardner Air services humidification systems integrated with all major BAS platforms. Controls integration is a standard component of the service scope: sensor calibration is verified against the BAS reading, setpoint configuration is confirmed against the facility's RH requirements, and fault conditions logged by the BAS are investigated as part of the diagnostic process. If the integration between the humidifier and the BAS is generating incorrect data or the controls logic is causing erratic operation, Gardner Air identifies and corrects the source condition.",
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

const HUMIDIFICATION_TYPES = [
  {
    title: "Isothermal Steam Humidifiers (Gas-Fired)",
    body: "Gas-fired steam humidifiers generate steam by burning natural gas to heat water in a dedicated steam generator, then distribute that steam directly into the airstream or occupied space. They offer high output capacity and perform well in large commercial and industrial applications. Gardner Air's service scope covers burner and combustion train inspection, heat exchanger condition, steam distribution nozzle function, and controls integration with the building automation system.",
  },
  {
    title: "Isothermal Steam Humidifiers (Electric Electrode and Resistive)",
    body: "Electric humidifiers produce steam by passing electrical current through water — via electrodes in electrode-type units, or through resistance heating elements in resistive units. Both are common in hospital, cleanroom, pharmaceutical, and data center applications where precise RH control within tight tolerances is required. Mineral scaling is the primary maintenance challenge: Southern California's hard water accelerates cylinder and electrode degradation and affects output calibration.",
  },
  {
    title: "Adiabatic Evaporative Humidifiers (Wetted Media)",
    body: "Adiabatic evaporative humidifiers add moisture by evaporating water into the airstream without adding heat, using wetted media pads or atomizers. They are common in manufacturing, printing, indoor agriculture, and warehouse applications. Legionella risk management is the critical maintenance priority: water temperature, biocide treatment, drain cycle frequency, and media condition all require documented verification. Gardner Air follows established protocols for biological risk management on evaporative humidification equipment.",
  },
  {
    title: "Ultrasonic Humidifiers",
    body: "Ultrasonic humidifiers use high-frequency vibration to create a fine water mist that evaporates into the airstream. They operate at low temperatures, making them suitable for cold-room applications, wine storage, and controlled-environment facilities. Mineral carryover from hard water is a significant maintenance issue in Southern California. Gardner Air's service scope covers water treatment verification, transducer condition, output calibration, and drainage system function.",
  },
  {
    title: "Direct-Room vs. In-Duct Distribution",
    body: "Commercial humidification systems distribute moisture either directly into an occupied space or into the air handling system for distribution throughout the building. Each approach requires different nozzle placement, absorption distance management, and controls integration. In-duct systems must account for absorption distance to avoid condensation on duct walls or downstream coils. Gardner Air evaluates distribution system design as part of the service scope and flags conditions where configuration is compromising system performance.",
  },
];

const SERVICES = [
  {
    title: "Preventative Maintenance",
    href: "/commercial-hvac-services/preventative-maintenance/",
    body: "The foundation of Gardner Air's humidification program. Every visit covers the complete maintenance scope for that equipment type: steam output verification, mineral scaling assessment and cleaning, drain and flush cycle testing, sensor calibration, controls integration check, distribution nozzle inspection, and a written service report. No items deferred because the scheduled time ran out.",
  },
  {
    title: "Repair and Troubleshooting",
    href: "/commercial-hvac-services/repair/",
    body: "When a humidification system is underperforming, cycling erratically, or producing RH readings that don't align with setpoints, Gardner Air diagnoses the root cause. Covers electrode and cylinder replacement, scaling removal and system flush, sensor recalibration, drain valve and flush cycle repair, and controls fault analysis. Existing maintenance clients receive priority scheduling.",
  },
  {
    title: "Replacement",
    href: "/commercial-hvac-services/replacement/",
    body: "When a humidifier reaches end of service life, has scaled beyond the point of economical cleaning, or a facility's RH requirements have changed beyond what the existing equipment can deliver, Gardner Air manages the replacement process from specification through commissioning — including equipment selection matched to water quality conditions and controls compatibility.",
  },
  {
    title: "Installation and Startup",
    href: "/commercial-hvac-services/installation/",
    body: "New humidification system installation and startup requires careful attention to distribution placement, absorption distance, controls integration, and initial water chemistry baseline. Gardner Air commissions each system to verify that RH output matches setpoints across the facility's operating range and that drain and flush cycles are correctly configured.",
  },
];

const COMMON_ISSUES = [
  {
    title: "Mineral scaling (electric humidifiers)",
    body: "Southern California's water supply carries high dissolved mineral content. In electrode and resistive steam humidifiers, this translates into accelerated cylinder and electrode scaling that degrades output capacity, shortens component life, and corrupts RH calibration. Gardner Air tracks cylinder condition against output data and intervenes before scaling causes an unplanned shutdown.",
  },
  {
    title: "Lime dust and white particulate",
    body: "Ultrasonic and some atomizing humidifiers operating on untreated hard water produce airborne mineral particulate — visible as white dust on surfaces. In pharmaceutical manufacturing, semiconductor fabrication, or museum environments, this particulate is a contamination event. Gardner Air evaluates water treatment and equipment configuration to eliminate the source condition.",
  },
  {
    title: "Blower and distribution failures",
    body: "Fan-assisted and duct distribution systems rely on blowers, nozzles, and distribution manifolds to move humidified air to occupied zones. Blower bearing wear, nozzle clogging, and manifold corrosion reduce effective distribution and create zone-level RH non-uniformity. Gardner Air inspects and tests the complete distribution system on every service visit.",
  },
  {
    title: "Sensor calibration drift",
    body: "A humidity sensor that reads 3% to 5% RH off its calibration curve causes the control system to maintain the wrong setpoint. In a hospital or cleanroom, that deviation may be enough to fall outside the regulatory tolerance band. Gardner Air calibrates sensors against a reference instrument on every maintenance visit.",
  },
  {
    title: "Drain and flush cycle failures",
    body: "Drain valves that fail to open fully, flush cycles that run too infrequently, or timers that have drifted out of schedule allow water to stagnate in the humidifier pan or distribution system. In evaporative systems, stagnant warm water is a Legionella risk. Gardner Air tests drain and flush cycles operationally — not by inspection only — on every visit.",
  },
  {
    title: "Legionella risk on evaporative systems",
    body: "Adiabatic and wetted-media evaporative systems that are not maintained on a documented biological risk management protocol present a Legionella exposure risk. Gardner Air's evaporative system service includes water temperature verification, biocide treatment review, media condition assessment, and documentation structured to support facility water management program requirements.",
  },
];

const OUTCOMES = [
  {
    eyebrow: "OUTCOME 01",
    body: "Verified RH control · Fewer process disruptions",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Legionella risk managed · Biological safety documented",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "Extended component life · Lower operating costs",
    Icon: BarChart3,
  },
];

const WHY_CHOOSE = [
  {
    title: "Complete scope on every visit.",
    body: "Gardner Air does not operate on a fixed time block. Every maintenance item on the scope gets completed — or a documented reason is provided for any exception. Facilities managers receive a full written report after each visit, including sensor calibration data and component condition assessment.",
  },
  {
    title: "Precision-process experience.",
    body: "Gardner Air's humidification service experience spans hospitals, cleanrooms, pharmaceutical facilities, museums, and data centers — applications where RH control is a compliance parameter, not a comfort preference. That context shapes how technicians approach diagnostics and calibration.",
  },
  {
    title: "Biological risk competence.",
    body: "Evaporative humidification systems require documented biological risk management, not just mechanical maintenance. Gardner Air's service protocols address Legionella risk as a standard scope item on evaporative systems, not an afterthought.",
  },
  {
    title: "Long-term partnership model.",
    body: "Gardner Air's client relationships are structured around a maintenance program, not individual service calls. That means your humidification system's output history and cylinder replacement intervals are documented, trends are tracked, and Gardner Air knows your equipment before something goes wrong.",
  },
];

const BRANDS = [
  "DriSteem",
  "Nortec (Condair)",
  "Armstrong International",
  "Neptronic",
  "Carel",
  "Munters (evaporative systems)",
  "Trion",
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function HumidificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(humidificationServiceSchema) }}
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
          aria-labelledby="humidification-hero-heading"
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
                <li className="text-white/60">Humidification</li>
              </ol>
            </nav>
            <h1
              id="humidification-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Commercial humidification service,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">completed in full.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air provides complete preventative maintenance, diagnostics, and installation support for isothermal steam, adiabatic evaporative, and ultrasonic humidification systems serving commercial, institutional, and precision-process facilities across Southern California.
            </p>

            <Link
              href="#humidification-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a Humidification System Service Proposal
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
          aria-labelledby="humidification-intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Specialized Service Matters
                </p>
                <h2
                  id="humidification-intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Precision Humidity Control Requires Precision Maintenance
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Relative humidity control is not a comfort feature in precision commercial environments. In a hospital surgical suite, semiconductor fabrication facility, museum archive, or pharmaceutical manufacturing cleanroom, maintaining humidity within a defined RH band is a regulatory requirement, a product-quality parameter, and in some cases a patient-safety factor.
                  </p>
                  <p>
                    Gardner Air services commercial humidification systems across Riverside County, San Bernardino County, and Orange County — the full spectrum from in-duct steam distribution for large office buildings to electrode humidifiers in cleanrooms and evaporative systems in indoor agriculture and printing facilities. Each application has a different target RH range, a different tolerance for deviation, and a different consequence for control failure.
                  </p>
                  <p>
                    Commercial humidification systems fail in ways that are not always obvious: mineral scaling that degrades output capacity gradually, sensor drift that shifts setpoint accuracy over months, drain and flush cycle failures that create Legionella risk in evaporative systems. These failure modes are best caught during scheduled maintenance — not after a quality hold, a failed inspection, or an IAQ complaint.
                  </p>
                  <p>
                    Facilities managers across Southern California retain Gardner Air not for emergencies, but to prevent them.
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
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white/90">Humidifier · Mechanical Room</span>
                  </div>
                  <Image
                    src="/equipment/humidification-intro-detail.webp"
                    alt="Gardner Air technician inspecting a humidification system at a Southern California commercial facility."
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
                    ±2%
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      RH tolerance
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Required in precision applications
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* System Types + Brands                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="humidification-types-heading"
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
                  id="humidification-types-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Humidification System Types We Service
                </h2>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {HUMIDIFICATION_TYPES.map((type, i) => (
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
                aria-label="Humidification brands Gardner Air services"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Brands We Service
                </p>

                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Gardner Air&rsquo;s technicians are trained and experienced on the major commercial humidification platforms in service across Southern California. Different manufacturers use different electrode geometries, cylinder materials, and controls architectures — platform knowledge matters for accurate diagnosis and correct cylinder and component selection.
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
                    Operating a humidification system not listed above? Call with the make and model — Gardner Air services a wide range of commercial humidity control equipment.
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
        {/* Our Humidification Services                                          */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="humidification-services-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Our Humidification Services
              </p>
              <h2
                id="humidification-services-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Full-Scope Humidification Service From Maintenance to Replacement
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
          aria-label="Schedule a humidification assessment"
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
                Schedule a Humidification System Assessment for Your Facility
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8">
                Gardner Air serves commercial and industrial facilities across Riverside County, San Bernardino County, and Orange County. If your humidification system is not delivering verified RH control within your facility's required tolerance band, that is worth a conversation.
              </p>
              <Link
                href="#humidification-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a Humidification System Service Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Common Issues                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="humidification-issues-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
                  Diagnostics
                </p>
                <h2
                  id="humidification-issues-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  Common Humidification Issues We Diagnose
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
        {/* Outcome cards                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="humidification-outcomes-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Long-Term Value
              </p>
              <h2
                id="humidification-outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                The Case for a Disciplined Humidification Maintenance Program
              </h2>
              <div className="flex flex-col gap-5 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  Facilities that maintain their humidification systems on a disciplined preventative maintenance program maintain verified RH control, extend component life, and avoid the biological risk events and compliance failures that result from deferred maintenance.
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
          aria-labelledby="why-choose-humidification-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Gardner Air
                </p>
                <h2
                  id="why-choose-humidification-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Why Facilities Managers Choose Gardner Air for Humidification Service
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Gardner Air&rsquo;s client relationships are structured around a maintenance program, not individual service calls. Your humidification system&rsquo;s output history and cylinder replacement intervals are documented, trends are tracked, and Gardner Air knows your equipment before something goes wrong.
                </p>

                <div className="mt-8">
                  <Link
                    href="#humidification-contact"
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
          aria-labelledby="crosssell-humidification-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/equipment/humidification-replacement.webp"
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
                    id="crosssell-humidification-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Is Your Humidification System Beyond the Maintenance Stage?
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    Explore Gardner Air&rsquo;s replacement services to see how we manage the full specification-to-startup process for scaled-out or end-of-life humidification equipment.
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
          aria-labelledby="humidification-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              FAQ
            </p>
            <h2
              id="humidification-faq-heading"
              className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Frequently Asked Questions About Commercial Humidification Service
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
                    Humidification service is specific to the equipment type, water quality, and the facility&rsquo;s RH requirements. If you have a question about scope, scheduling, or equipment coverage, our team responds within one business day.
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
          id="humidification-contact"
          aria-labelledby="humidification-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Request a Humidification System Service Proposal"
                  subhead="Contact Gardner Air to discuss your equipment and what a maintenance program should include."
                  submitLabel="Request a Humidification System Service Proposal"
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
