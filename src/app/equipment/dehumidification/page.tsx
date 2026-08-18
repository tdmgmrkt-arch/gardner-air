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
  title: "Commercial Dehumidification Service | Gardner Air | Southern California",
  description:
    "Gardner Air provides preventative maintenance and repair for commercial desiccant and refrigerant dehumidification systems across Southern California. Call (951) 696-4495.",
  alternates: {
    canonical: "https://gardnerair.com/equipment/dehumidification/",
  },
  openGraph: {
    title: "Commercial Dehumidification Service | Gardner Air | Southern California",
    description:
      "Gardner Air provides preventative maintenance and repair for commercial desiccant and refrigerant dehumidification systems across Southern California. Call (951) 696-4495.",
    url: "https://gardnerair.com/equipment/dehumidification/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const dehumidificationServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Dehumidification Maintenance",
  description:
    "Gardner Air provides complete preventative maintenance, diagnostics, and installation support for desiccant wheel, refrigerant-based, hybrid, and pool dehumidification systems serving commercial and industrial facilities across Southern California.",
  url: "https://gardnerair.com/equipment/dehumidification/",
  serviceType: "Commercial Dehumidification Maintenance",
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
      name: "Dehumidification",
      item: "https://gardnerair.com/equipment/dehumidification/",
    },
  ],
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "How often should a commercial dehumidification system be serviced?",
    a: "Commercial dehumidification systems serving humidity-critical environments — pharmaceutical manufacturing, archival storage, indoor pools, cleanrooms, and food processing — should receive maintenance at minimum twice per year, with quarterly visits appropriate for applications where humidity deviation has regulatory or product-safety consequences. Desiccant wheel systems require more frequent attention than refrigerant-based units because wheel condition, reactivation heater function, and airflow balance all degrade without visible indication. The correct interval depends on system type, operating hours, application criticality, and ambient air quality at the intake.",
  },
  {
    q: "What is the difference between a desiccant dehumidifier and a refrigerant-based dehumidifier?",
    a: "A refrigerant-based (DX) dehumidifier removes moisture by cooling air below its dew point over a cold evaporator coil. It performs well in moderate humidity control applications — typically maintaining 40–60% RH in commercial environments. A desiccant dehumidifier uses a rotating hygroscopic wheel to adsorb moisture directly from the air, then drives it off with a heated reactivation air stream. Desiccant systems are not limited by evaporator coil temperature and can achieve dew-point conditions well below 32°F — making them the correct technology for low-dew-point applications where DX equipment cannot reach the required setpoints. The trade-off is higher energy consumption at the reactivation heater and a more complex maintenance scope.",
  },
  {
    q: "How do I know if my dehumidification system is actually meeting setpoint?",
    a: "The most reliable method is independent humidity measurement with a calibrated reference instrument — not the controller display, which reflects what the system's sensor reports rather than actual conditions. Gardner Air calibrates dehumidification system humidity sensors against a reference instrument at every maintenance visit. Facilities where a sensor has drifted several percent RH may be operating outside of specification without any alarm indication. For pharmaceutical, archival, and food safety applications, sensor calibration documentation is often a regulatory requirement.",
  },
  {
    q: "What causes a desiccant wheel to lose capacity?",
    a: "Desiccant wheel capacity degrades through several mechanisms: particulate loading that blocks the microscopic pores in the hygroscopic media, oil mist contamination from upstream equipment, chemical attack from process-side contaminants, or simple age-related degradation. A desiccant wheel operating with reduced capacity runs continuously without achieving setpoint — the system appears to be running normally but is not controlling humidity effectively. Gardner Air documents wheel condition trends across maintenance visits and identifies capacity degradation before it produces a setpoint deviation.",
  },
  {
    q: "Are there humidity control requirements for specific industries?",
    a: "Yes. USP standards for pharmaceutical manufacturing specify humidity limits for tablet coating, blister packaging, and certain API processes. FDA guidance and GMP requirements address cleanroom humidity in drug manufacturing environments. ASHRAE Standard 62.1 and local building codes address humidity limits for occupied spaces. Museums and archival facilities follow guidelines from the American Institute for Conservation. Ice rink operators target specific dew-point conditions to maintain ice surface quality. Gardner Air is familiar with the humidity control requirements across these industries and can document system performance against applicable standards.",
  },
  {
    q: "Can you service pool dehumidification equipment specifically?",
    a: "Yes. Indoor pool dehumidification is a specific competency within Gardner Air's dehumidification program. Pool natatorium environments are mechanically demanding — corrosive chloramine-laden air, high continuous latent loads, and the structural condensation risk from any control system failure make this one of the more technically complex dehumidification applications. Gardner Air services dedicated pool dehumidification equipment from Dectron, PoolPak, Desert Aire, and similar manufacturers, and understands the outdoor air integration, building pressure management, and heat recovery system considerations specific to natatorium facilities.",
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

const DEHUMIDIFICATION_TYPES = [
  {
    title: "Refrigerant-Based (DX) Dehumidifiers",
    body: "Refrigerant-based dehumidifiers operate on the standard vapor-compression cycle: warm moist air passes over a cold evaporator coil, moisture condenses and drains away, and the drier air is reheated before return. DX dehumidifiers are well-suited for applications requiring moderate humidity control in the 40–60% RH range. Gardner Air's maintenance scope covers refrigerant charge verification, evaporator and condenser coil condition, compressor diagnostics, reheating coil function, condensate drain integrity, and humidity sensor calibration.",
  },
  {
    title: "Desiccant Wheel Dehumidifiers",
    body: "Desiccant wheel systems use a slowly rotating hygroscopic media wheel to adsorb moisture from the process air stream. A separate reactivation air stream — heated to temperatures typically between 200°F and 300°F — drives the captured moisture out of the wheel on the discharge side. Desiccant units are the correct technology for low-dew-point applications where humidity control below 40% RH is required. Gardner Air's maintenance scope covers wheel condition, reactivation heater operation, drive motor and seal condition, process and reactivation airflow measurement, and humidity sensor calibration.",
  },
  {
    title: "Hybrid Systems",
    body: "Hybrid dehumidification systems combine refrigerant-based pre-cooling with a desiccant wheel stage to achieve deep moisture removal more efficiently than either technology alone. Pre-cooling the process air before the desiccant wheel reduces the reactivation energy required and allows the system to maintain low dew-point conditions across a wider range of inlet conditions. Gardner Air services both stages of hybrid configurations — the refrigerant circuit and the desiccant section — within a single maintenance visit scope.",
  },
  {
    title: "Pool Dehumidification Systems",
    body: "Indoor aquatic facilities present one of the most demanding dehumidification environments in commercial construction. High latent loads from pool and bather evaporation, combined with the corrosive chloramine-laden air, create conditions that degrade standard equipment rapidly. Gardner Air services pool dehumidification equipment at aquatic centers, hotel pools, and therapy pool facilities, including heat recovery system operation, outdoor air integration, and building pressure management.",
  },
  {
    title: "Low-Dew-Point Applications",
    body: "Certain commercial and industrial processes require humidity control expressed in dew-point terms rather than relative humidity — typically below 35°F dew point, which corresponds to roughly 10–20% RH at room temperature. Pharmaceutical blister packaging lines, lithium battery manufacturing, museum storage vaults, and military-spec storage facilities fall into this category. At these moisture levels, only desiccant technology is effective. Gardner Air's technicians understand the desiccant performance curves, reactivation temperature requirements, and wheel rotation rates that govern low-dew-point system performance.",
  },
];

const SERVICES = [
  {
    title: "Preventative Maintenance",
    href: "/commercial-hvac-services/preventative-maintenance/",
    body: "The foundation of Gardner Air's dehumidification program. Every visit covers the complete scope: humidity sensor calibration against a reference instrument, refrigerant charge verification (DX systems), compressor diagnostics, desiccant wheel condition inspection, reactivation heater element check, drive motor and seal inspection, process and reactivation airflow measurement, condensate drain verification, and a written service report with logged operating data. No items deferred.",
  },
  {
    title: "Repair and Troubleshooting",
    href: "/commercial-hvac-services/repair/",
    body: "When a dehumidification system is failing to maintain setpoints or generating alarms, Gardner Air diagnoses the root cause before recommending corrective action. Covers refrigerant leak detection and recovery (DX systems), compressor replacement, reactivation heater element replacement (desiccant units), desiccant wheel replacement, drive motor replacement, humidity controller fault analysis, and condensate system repair. Existing maintenance clients receive priority scheduling.",
  },
  {
    title: "Replacement",
    href: "/commercial-hvac-services/replacement/",
    body: "When a desiccant wheel reaches end of life, a major mechanical component failure makes repair uneconomical, or facility humidity control requirements change, Gardner Air manages the replacement process from equipment specification through commissioning — including system sizing for current latent load conditions, manufacturer coordination on correct wheel media and reactivation temperature specification, installation, and startup documentation.",
  },
  {
    title: "Installation and Startup",
    href: "/commercial-hvac-services/installation/",
    body: "New dehumidification system installation and startup requires humidity sensor calibration, reactivation temperature verification, airflow commissioning, and performance documentation at design operating conditions before Gardner Air considers a system accepted. The startup data becomes the baseline the maintenance program tracks from that point forward.",
  },
];

const COMMON_ISSUES = [
  {
    title: "Desiccant wheel contamination or degradation",
    body: "The hygroscopic media in a desiccant wheel degrades over time through contamination with oil mist, dust loading, or chemical exposure. Degraded wheel media reduces moisture adsorption capacity — meaning the system runs continuously but fails to reach setpoint. Gardner Air inspects wheel condition and documents capacity trends across maintenance visits.",
  },
  {
    title: "Reactivation heater failure",
    body: "Desiccant systems depend on a reactivation heater to drive moisture out of the wheel on the discharge side. A failed heater element or contactor leaves the wheel operating without regeneration — it saturates and stops removing moisture from the process air stream entirely. Reactivation heater verification is a standard maintenance task on every Gardner Air desiccant system visit.",
  },
  {
    title: "Refrigerant leaks (DX systems)",
    body: "A refrigerant undercharge in a DX dehumidifier raises suction saturation temperature, reduces the evaporator coil's ability to condense moisture, and allows humidity to rise. Gardner Air uses electronic leak detection and documents leak points rather than adding refrigerant without identifying the source.",
  },
  {
    title: "Humidity sensor drift",
    body: "A humidity sensor operating on an uncalibrated or degraded element delivers inaccurate control signals — the system operates on false data and may be running outside of setpoint without any alarm indication. For pharmaceutical, archival, and cleanroom applications, sensor accuracy is a compliance matter. Gardner Air calibrates humidity sensors against a reference instrument at every maintenance visit.",
  },
  {
    title: "Condensate management issues",
    body: "Dehumidification systems remove significant volumes of water from the air stream. Clogged drain lines, failed condensate pumps, or improper drain trap configuration cause water backup into the drain pan and eventual overflow. Gardner Air inspects condensate drain systems and verifies proper function at each scheduled visit.",
  },
  {
    title: "Airflow imbalance",
    body: "Desiccant systems require correct airflow balance between the process air stream and the reactivation air stream to achieve rated performance. An imbalance — caused by a dirty filter, failed damper, or belt-driven fan with a worn drive — reduces moisture removal capacity. Gardner Air measures process and reactivation airflow at each maintenance visit.",
  },
];

const OUTCOMES = [
  {
    eyebrow: "OUTCOME 01",
    body: "Consistent humidity setpoints · No undetected drift",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Extended wheel life · Fewer reactivation heater failures",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "Documented sensor calibration · Regulatory defensibility",
    Icon: BarChart3,
  },
];

const WHY_CHOOSE = [
  {
    title: "Complete scope on every visit.",
    body: "Gardner Air does not operate on a fixed time block. Every maintenance item on the scope gets completed — or a documented reason is provided for any exception. Facilities managers receive a full written report with logged humidity and operating data after each visit.",
  },
  {
    title: "Factory-trained technicians.",
    body: "Gardner Air's technicians receive manufacturer-specific training on the dehumidification platforms they service. Desiccant wheel maintenance and low-dew-point system diagnostics require specialized knowledge that general HVAC contractors do not carry.",
  },
  {
    title: "Accurate diagnostics.",
    body: "When a dehumidification system fails to hold setpoint, the cause is rarely obvious from a visual inspection alone. Gardner Air's technicians measure desiccant wheel capacity degradation, verify reactivation temperatures against specification, and calibrate sensors against a reference — providing a precise diagnosis rather than a component replacement sequence.",
  },
  {
    title: "Long-term partnership model.",
    body: "Gardner Air's client relationships are structured around a maintenance program. Your system's humidity performance data is documented across visits, developing trends are identified before they become setpoint deviations, and Gardner Air knows your equipment and your facility's requirements before a problem develops.",
  },
];

const BRANDS = [
  "Munters",
  "Dectron (Nortek Global HVAC)",
  "PoolPak",
  "Desert Aire",
  "Bry-Air",
  "DehuTech",
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function DehumidificationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dehumidificationServiceSchema) }}
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
          aria-labelledby="dehumidification-hero-heading"
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
                <li className="text-white/60">Dehumidification</li>
              </ol>
            </nav>
            <h1
              id="dehumidification-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
Humidity control isn&rsquo;t a comfort feature.
              <br className="hidden lg:block" />{" "}
              <span className="text-[#D42027]">It&rsquo;s a process requirement.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air provides complete preventative maintenance, diagnostics, and installation support for desiccant wheel, refrigerant-based, hybrid, and pool dehumidification systems serving commercial and industrial facilities across Southern California.
            </p>

            <Link
              href="#dehumidification-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a Dehumidification Service Proposal
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
          aria-labelledby="dehumidification-intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Specialized Service Matters
                </p>
                <h2
                  id="dehumidification-intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Precision Humidity Control Is a Process Requirement, Not a Comfort Feature
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    When a desiccant wheel degrades in a pharmaceutical cleanroom, when a pool hall dehumidifier runs with a failed reactivation heater, or when a museum&rsquo;s refrigerant-based system drifts off setpoint, the consequences are measurable: product failures, structural condensation, ice surface degradation, or irreversible damage to temperature-sensitive collections.
                  </p>
                  <p>
                    Gardner Air services the commercial dehumidification systems that protect indoor pools, ice rinks, museums and archives, hospitals, cleanrooms, food processing facilities, pharmaceutical manufacturing operations, and commercial warehouses throughout Riverside County, San Bernardino County, and Orange County. These applications share a common requirement: sustained, documented humidity control within tight tolerances, maintained by technicians who understand how the equipment works rather than simply responding when it fails.
                  </p>
                  <p>
                    Commercial dehumidification encompasses refrigerant-based (DX) systems, desiccant wheel technology, hybrid configurations, and dedicated pool systems — each with distinct maintenance requirements and failure modes. Gardner Air&rsquo;s technicians carry the mechanical, refrigerant, and desiccant expertise to service all of them on a single maintenance program.
                  </p>
                  <p>
                    Facilities managers across Southern California retain Gardner Air to maintain the humidity tolerances their operations depend on — and to document that they are being maintained.
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
                    <span className="font-mono text-[9px] font-semibold uppercase tracking-[0.15em] text-white/90">Dehumidifier · Mechanical Room</span>
                  </div>
                  <Image
                    src="/equipment/dehumidification-intro-detail.webp"
                    alt="Gardner Air technician inspecting a dehumidification system at a Southern California commercial facility."
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
                    4
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      System types serviced
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      DX, desiccant, hybrid, pool
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Dehumidification Types — dark panel + type list                       */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="dehumidification-types-heading"
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
                  id="dehumidification-types-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Dehumidification Systems We Service
                </h2>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {DEHUMIDIFICATION_TYPES.map((type, i) => (
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
                aria-label="Dehumidification brands Gardner Air services"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Brands We Service
                </p>

                <p className="text-white/70 text-sm leading-relaxed mb-8">
                  Gardner Air&rsquo;s technicians hold factory training on the major commercial dehumidification platforms in service across Southern California. This includes both desiccant wheel configurations and refrigerant-based pool and commercial dehumidification equipment. Factory training means correct desiccant wheel media specifications and appropriate reactivation temperature setpoints for each platform.
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
                    Operating dehumidification equipment not listed above? Call with the system type, application, and current maintenance situation — Gardner Air services a wide range of commercial humidity control equipment.
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
        {/* Our Dehumidification Services — 4-card grid                          */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="dehumidification-services-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Our Dehumidification Services
              </p>
              <h2
                id="dehumidification-services-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Full-Scope Dehumidification Service From Maintenance to Replacement
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
          aria-label="Schedule a dehumidification assessment"
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
                Schedule a Dehumidification Assessment for Your Facility
              </h2>
              <p className="text-[#6B7280] text-base leading-relaxed mb-8">
                Gardner Air serves commercial and industrial facilities across Riverside County, San Bernardino County, and Orange County. If your dehumidification maintenance program is not delivering complete-scope service with calibrated sensor verification and documented humidity performance data after every visit, that is worth a conversation.
              </p>
              <Link
                href="#dehumidification-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a Dehumidification Service Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Common Dehumidification Issues                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="dehumidification-issues-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
                  Diagnostics
                </p>
                <h2
                  id="dehumidification-issues-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  Common Dehumidification Issues We Diagnose
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
          aria-labelledby="dehumidification-outcomes-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Long-Term Value
              </p>
              <h2
                id="dehumidification-outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                The Case for a Disciplined Dehumidification Maintenance Program
              </h2>
              <div className="flex flex-col gap-5 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  Facilities that maintain their dehumidification systems on a disciplined preventative maintenance program hold humidity setpoints consistently, avoid the sensor drift and wheel degradation that allow humidity to rise undetected, and build the calibration documentation that regulatory and compliance programs require.
                </p>
                <p>
                  Facilities managers across Southern California retain Gardner Air to maintain the humidity tolerances their operations depend on — and to document that they are being maintained. That distinction defines the relationship from day one.
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
                  Why Facilities Managers Choose Gardner Air for Dehumidification Service
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Gardner Air&rsquo;s client relationships are structured around a maintenance program, not individual service calls. Your system&rsquo;s humidity performance data is documented across visits, developing trends are identified before they become setpoint deviations, and Gardner Air knows your equipment and your facility&rsquo;s requirements before a problem develops.
                </p>

                <div className="mt-8">
                  <Link
                    href="#dehumidification-contact"
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
          aria-labelledby="crosssell-dehumidification-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/equipment/dehumidification-replacement.webp"
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
                    id="crosssell-dehumidification-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Is Your Dehumidification System Beyond the Maintenance Stage?
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    Explore Gardner Air&rsquo;s replacement services to see how we manage the full decommission-to-startup process for aging or failed commercial dehumidification equipment.
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
          aria-labelledby="dehumidification-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              FAQ
            </p>
            <h2
              id="dehumidification-faq-heading"
              className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Frequently Asked Questions About Commercial Dehumidification Service
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
                    Dehumidification service is specific to the system type, the application, and the facility&rsquo;s humidity tolerance requirements. If you have a question about scope, scheduling, desiccant wheel media, or equipment coverage, our team responds within one business day.
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
          id="dehumidification-contact"
          aria-labelledby="dehumidification-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Request a Dehumidification Service Proposal"
                  subhead="Contact Gardner Air to discuss your equipment and what a maintenance program should include."
                  submitLabel="Request a Dehumidification Service Proposal"
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
