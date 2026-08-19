import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Shield,
  Zap,
  Check,
  Wrench,
  TrendingDown,
  Package,
  Wind,
  Snowflake,
  Server,
  Waves,
  Cloud,
  Thermometer,
  Droplets,
  Flame,
  Droplet,
  Sun,
  Gauge,
} from "lucide-react";

const EQUIPMENT_ICONS: Record<string, typeof Package> = {
  "/equipment/package-units/": Package,
  "/equipment/split-systems/": Wind,
  "/equipment/ductless-systems/": Snowflake,
  "/equipment/computer-room-units/": Server,
  "/equipment/chillers/": Waves,
  "/equipment/cooling-towers/": Cloud,
  "/equipment/refrigeration/": Thermometer,
  "/equipment/dehumidification/": Droplets,
  "/equipment/boilers/": Flame,
  "/equipment/humidification/": Droplet,
  "/equipment/rooftop-heating/": Sun,
  "/equipment/precision-controls/": Gauge,
};
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Commercial HVAC Equipment We Service | Gardner Air",
  description:
    "Gardner Air services the complete commercial HVAC equipment spectrum across Southern California — chillers, boilers, cooling towers, rooftop units, VRF, refrigeration, and precision controls.",
  alternates: {
    canonical: "https://gardnerair.com/equipment/",
  },
  openGraph: {
    title: "Commercial HVAC Equipment We Service | Gardner Air",
    description:
      "Gardner Air services the complete commercial HVAC equipment spectrum across Southern California — chillers, boilers, cooling towers, rooftop units, VRF, refrigeration, and precision controls.",
    url: "https://gardnerair.com/equipment/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
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
  ],
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Commercial HVAC Equipment We Service",
  description:
    "Gardner Air services the complete commercial HVAC equipment spectrum across Southern California.",
  url: "https://gardnerair.com/equipment/",
  mainEntity: {
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Package Units (Rooftop)",
        url: "https://gardnerair.com/equipment/package-units/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Split Systems (Multi-Zone)",
        url: "https://gardnerair.com/equipment/split-systems/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Ductless Systems (VRF / Mini-Split)",
        url: "https://gardnerair.com/equipment/ductless-systems/",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Computer Room Units (CRAC / CRAH)",
        url: "https://gardnerair.com/equipment/computer-room-units/",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Chillers (Centrifugal / Screw)",
        url: "https://gardnerair.com/equipment/chillers/",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Cooling Towers (Induced Draft)",
        url: "https://gardnerair.com/equipment/cooling-towers/",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Refrigeration (Commercial-Grade)",
        url: "https://gardnerair.com/equipment/refrigeration/",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Dehumidification (Desiccant / Refrigerant)",
        url: "https://gardnerair.com/equipment/dehumidification/",
      },
      {
        "@type": "ListItem",
        position: 9,
        name: "Boilers (Hot Water / Steam)",
        url: "https://gardnerair.com/equipment/boilers/",
      },
      {
        "@type": "ListItem",
        position: 10,
        name: "Humidification (Steam / Evaporative)",
        url: "https://gardnerair.com/equipment/humidification/",
      },
      {
        "@type": "ListItem",
        position: 11,
        name: "Rooftop Heating (Gas-Fired)",
        url: "https://gardnerair.com/equipment/rooftop-heating/",
      },
      {
        "@type": "ListItem",
        position: 12,
        name: "Precision Controls (BAS Integration)",
        url: "https://gardnerair.com/equipment/precision-controls/",
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified" },
  { Icon: Shield, text: "CSLB Licensed" },
  { Icon: Zap, text: "Factory-Trained" },
];

type Category = {
  label: string;
  items: EquipmentItem[];
};

type EquipmentItem = {
  name: string;
  spec: string;
  href: string;
  description: string;
};

const CATEGORIES: Category[] = [
  {
    label: "Air Systems",
    items: [
      {
        name: "Package Units",
        spec: "Rooftop",
        href: "/equipment/package-units/",
        description:
          "Rooftop workhorses for retail, warehouses, and offices. Full-scope maintenance keeps burners, economizers, and compressors in spec year-round.",
      },
      {
        name: "Split Systems",
        spec: "Multi-Zone",
        href: "/equipment/split-systems/",
        description:
          "Multi-zone systems serving offices, medical suites, and light commercial builds. Refrigerant charge, coil condition, and controls verified on every visit.",
      },
      {
        name: "Ductless Systems",
        spec: "VRF / Mini-Split",
        href: "/equipment/ductless-systems/",
        description:
          "VRF and mini-split platforms require refrigerant circuit expertise that most contractors lack. Gardner Air services major VRF platforms at the controls level.",
      },
      {
        name: "Computer Room Units",
        spec: "CRAC / CRAH",
        href: "/equipment/computer-room-units/",
        description:
          "Precision cooling for server rooms and data halls. Downtime tolerance is near zero — maintenance programs are scoped accordingly.",
      },
    ],
  },
  {
    label: "Cooling & Refrigeration",
    items: [
      {
        name: "Chillers",
        spec: "Centrifugal / Screw",
        href: "/equipment/chillers/",
        description:
          "Centrifugal, screw, scroll, and absorption chillers for mission-critical facilities. Documented service that protects your largest mechanical asset.",
      },
      {
        name: "Cooling Towers",
        spec: "Induced Draft",
        href: "/equipment/cooling-towers/",
        description:
          "Tower performance drives condenser pressure across the entire chiller plant. Water treatment, basin condition, and fan efficiency verified every cycle.",
      },
      {
        name: "Refrigeration",
        spec: "Commercial-Grade",
        href: "/equipment/refrigeration/",
        description:
          "Commercial refrigeration for food service, cold storage, and industrial process applications. Leak-free operation and tight temperature control are the standard.",
      },
      {
        name: "Dehumidification",
        spec: "Desiccant / Refrigerant",
        href: "/equipment/dehumidification/",
        description:
          "Desiccant and refrigerant-based dehumidification for manufacturing, storage, and specialty environments where moisture control is a process requirement.",
      },
    ],
  },
  {
    label: "Heating & Precision",
    items: [
      {
        name: "Boilers",
        spec: "Hot Water / Steam",
        href: "/equipment/boilers/",
        description:
          "Hot water and steam boilers for commercial and industrial heating loads. Combustion analysis, heat exchanger inspection, and safety controls tested every visit.",
      },
      {
        name: "Humidification",
        spec: "Steam / Evaporative",
        href: "/equipment/humidification/",
        description:
          "Steam and evaporative humidification for healthcare, data centers, and precision manufacturing environments with strict relative-humidity requirements.",
      },
      {
        name: "Rooftop Heating",
        spec: "Gas-Fired",
        href: "/equipment/rooftop-heating/",
        description:
          "Gas-fired rooftop heating units for commercial buildings. Heat exchanger integrity, ignition systems, and venting verified to prevent carbon monoxide risk.",
      },
      {
        name: "Precision Controls",
        spec: "BAS Integration",
        href: "/equipment/precision-controls/",
        description:
          "BAS-integrated controls, sensors, and actuators that govern system efficiency. Calibration and sequence verification prevent ghost energy waste and equipment short-cycling.",
      },
    ],
  },
];

const SERVICES = [
  {
    title: "Preventative Maintenance",
    href: "/commercial-hvac-services/preventative-maintenance/",
    body: "Complete-scope maintenance visits for every equipment type on this page. Every item completed — or documented with a reason. Full written report after each visit.",
  },
  {
    title: "Repair and Troubleshooting",
    href: "/commercial-hvac-services/repair/",
    body: "Root-cause diagnostics before any parts are ordered. Gardner Air identifies what is actually wrong — across chillers, boilers, VRF systems, controls, and everything in between.",
  },
  {
    title: "Replacement",
    href: "/commercial-hvac-services/replacement/",
    body: "End-of-life equipment removed and replaced with full documentation — refrigerant recovery, rigging coordination, startup, and controls integration included.",
  },
  {
    title: "Installation and Startup",
    href: "/commercial-hvac-services/installation/",
    body: "New equipment commissioned to factory specification. Performance baseline documented before Gardner Air considers the installation accepted.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Complete scope on every visit.",
    body: "Gardner Air does not operate on a fixed time block. Every maintenance item on the scope gets completed — or a documented reason is provided for any exception. Facilities managers receive a full written report after each visit.",
  },
  {
    title: "Factory-trained technicians.",
    body: "Gardner Air's technicians receive manufacturer-specific training on the equipment platforms they service. Commercial HVAC maintenance across this spectrum is not a generalist skill, and Gardner Air does not staff it as one.",
  },
  {
    title: "Elite problem-solving.",
    body: "When other contractors reach the limit of their diagnostic capability, they call Gardner Air. That reputation exists because Gardner Air's technicians are trained to identify root causes, not symptoms — across all 12 equipment types.",
  },
  {
    title: "Long-term partnership model.",
    body: "Gardner Air's client relationships are structured around a maintenance program, not individual service calls. Your equipment's performance history is documented, trends are tracked, and Gardner Air knows your systems before something goes wrong.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function EquipmentHubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      <SiteHeader />

      <main id="main-content">

        {/* ------------------------------------------------------------------ */}
        {/* Hero                                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="equipment-hero-heading"
          className="relative min-h-[60vh] lg:min-h-[58vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          {/* Background image */}
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

          {/* Gradient overlay */}
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
                <li className="text-white/60">Equipment</li>
              </ol>
            </nav>
            <h1
              id="equipment-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8 max-w-4xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Every commercial HVAC system.{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">Fully serviced.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air is factory-trained across the full commercial HVAC equipment spectrum — from rooftop package units to centrifugal chillers. Every equipment type gets the same complete-scope maintenance approach: documented, verified, and reported after every visit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact/"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a
                href="tel:+19516964495"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold border-2 border-white/25 text-white hover:border-white/50 hover:bg-white/8 transition-all duration-200 min-h-[44px] self-start"
                style={{ fontFamily: "var(--font-dm-sans)" }}
                aria-label="Call Gardner Air"
              >
                Call (951) 696-4495
              </a>
            </div>
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
        {/* Equipment Directory — 3 category columns                           */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="equipment-directory-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="max-w-3xl mb-14 lg:mb-16">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Equipment Directory
              </p>
              <h2
                id="equipment-directory-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                12 equipment types. One maintenance standard.
              </h2>
            </div>

            {/* Last Updated */}
            <p className="mb-10 font-mono text-[10px] uppercase tracking-[0.14em] text-[#9CA3AF]">
              Last Updated: August 2026
            </p>

            {/* Category grid — 1 col mobile, 2 cols tablet, 3 cols desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-8 lg:gap-10">
              {CATEGORIES.map((cat) => (
                <div key={cat.label} className="flex flex-col">
                  {/* Category eyebrow */}
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5 pb-4 border-b border-[#D8D4CC]">
                    {cat.label}
                  </p>

                  {/* Equipment card list */}
                  <ul className="flex flex-col divide-y divide-[#D8D4CC]" role="list">
                    {cat.items.map((item) => {
                      const ItemIcon = EQUIPMENT_ICONS[item.href] ?? Package;
                      return (
                      <li key={item.name}>
                        <Link
                          href={item.href}
                          className="group flex items-start gap-4 py-6 hover:bg-white/70 -mx-3 px-3 rounded-lg transition-colors duration-150"
                        >
                          {/* Icon column */}
                          <span
                            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D42027]/10 flex-shrink-0 mt-0.5 group-hover:bg-[#D42027] transition-colors duration-200"
                            aria-hidden="true"
                          >
                            <ItemIcon
                              size={18}
                              className="text-[#D42027] group-hover:text-white transition-colors duration-200"
                              strokeWidth={2}
                            />
                          </span>

                          {/* Content column */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between gap-3 mb-1.5">
                              <h3
                                className="font-bold text-[#111318] leading-tight tracking-[-0.01em]"
                                style={{
                                  fontFamily: "var(--font-dm-sans)",
                                  fontSize: "1.0625rem",
                                }}
                              >
                                {item.name}
                              </h3>
                              <ArrowRight
                                size={16}
                                className="text-[#9CA3AF] group-hover:text-[#D42027] group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                                aria-hidden="true"
                              />
                            </div>
                            <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#9CA3AF] mb-2.5">
                              {item.spec}
                            </p>
                            <p className="text-[14px] text-[#6B7280] leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Cross-sell — Service Pillars                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="equipment-services-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Services
              </p>
              <h2
                id="equipment-services-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                For every equipment type on this page.
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
        {/* Mid CTA band                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Request an equipment service proposal"
          className="relative overflow-hidden bg-[#1E2126] py-16 lg:py-24"
        >
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl border-l-2 border-[#D42027] pl-6 lg:pl-8">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
                Full Spectrum · Complete Scope
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                One contractor for your entire equipment inventory.
              </h2>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Gardner Air maintains commercial HVAC equipment across Riverside County, San Bernardino County, and Orange County. If your current maintenance program is not delivering complete-scope visits and documented reports for every piece of equipment, that is worth a conversation.
              </p>
              <Link
                href="#equipment-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request an Equipment Service Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Why Gardner Air                                                     */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="why-gardner-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Why Gardner Air
                </p>
                <h2
                  id="why-gardner-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Why facilities managers choose Gardner Air for equipment service.
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed mb-8">
                  Gardner Air&rsquo;s client relationships are structured around a maintenance program, not individual service calls. Your equipment&rsquo;s performance history is documented, trends are tracked, and Gardner Air knows your systems before something goes wrong.
                </p>
                <Link
                  href="#equipment-contact"
                  className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Request a Service Proposal
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
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

        {/* ------------------------------------------------------------------ */}
        {/* Contact Form                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="equipment-contact"
          aria-labelledby="equipment-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Request an Equipment Service Proposal"
                  subhead="Tell us about your equipment inventory and service needs. We'll schedule a site walkthrough within one business day."
                  submitLabel="Request a Proposal"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We review your equipment inventory and facility details" },
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
