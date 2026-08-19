import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  Award,
  Shield,
  Zap,
  ClipboardCheck,
  Wrench,
  RefreshCw,
  Layers,
  TrendingDown,
  Clock,
  BarChart3,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Commercial HVAC Services — Southern California",
  description:
    "Preventative maintenance, repair, replacement, and installation for commercial HVAC systems across the Inland Empire and Orange County. Single-partner scope, full-visit coverage, factory-trained technicians.",
  alternates: {
    canonical: "https://gardnerair.com/commercial-hvac-services/",
  },
  openGraph: {
    title: "Commercial HVAC Services — Southern California | Gardner Air",
    description:
      "Preventative maintenance, repair, replacement, and installation for commercial HVAC systems across the Inland Empire and Orange County.",
    url: "https://gardnerair.com/commercial-hvac-services/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const servicesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Commercial HVAC Services by Gardner Air",
  description:
    "Commercial HVAC services for facilities across Southern California, including preventative maintenance, repair, replacement, and installation.",
  url: "https://gardnerair.com/commercial-hvac-services/",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Commercial HVAC Preventative Maintenance",
        description:
          "Routine preventative maintenance for commercial HVAC systems — full-scope visits, documented service reports, scheduled around your facility's operations.",
        url: "https://gardnerair.com/commercial-hvac-services/preventative-maintenance/",
        provider: { "@type": "HVACBusiness", name: "Gardner Air" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Commercial HVAC Repair",
        description:
          "Certified HVAC repair for commercial facilities. Diagnosis and resolution of complex system failures.",
        url: "https://gardnerair.com/commercial-hvac-services/repair/",
        provider: { "@type": "HVACBusiness", name: "Gardner Air" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Commercial HVAC Replacement",
        description:
          "Strategic HVAC equipment replacement for commercial buildings — cost analysis, minimal disruption, long-term performance.",
        url: "https://gardnerair.com/commercial-hvac-services/replacement/",
        provider: { "@type": "HVACBusiness", name: "Gardner Air" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Commercial HVAC Installation",
        description:
          "Commercial HVAC installation tailored to building size, usage, and future needs. Factory-precision, code-compliant.",
        url: "https://gardnerair.com/commercial-hvac-services/installation/",
        provider: { "@type": "HVACBusiness", name: "Gardner Air" },
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Commercial HVAC Services",
      item: "https://gardnerair.com/commercial-hvac-services/",
    },
  ],
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

const SERVICES = [
  {
    num: "01",
    title: "Preventative Maintenance",
    Icon: ClipboardCheck,
    body: "Scheduled, full-scope visits that catch failures before they happen. Documented reports, predictable budgets, longer equipment life.",
    bullets: ["Full-scope every visit", "Same-day service reports", "Multi-site plans"],
    href: "/commercial-hvac-services/preventative-maintenance/",
    image: "/Gardner-Air-HVAC-equipment-Hi-Delta-1030x644.webp",
    imageAlt:
      "Gardner Air technician inspecting a commercial boiler during a preventative maintenance visit",
  },
  {
    num: "02",
    title: "Repair",
    Icon: Wrench,
    body: "Complex commercial repairs handled by factory-trained technicians. Accurate diagnosis, honest scope, faster return to full operation.",
    bullets: ["Rooftop package units", "Chillers & boilers", "Refrigeration & controls"],
    href: "/commercial-hvac-services/repair/",
    image: "/Gardner-Air-HVAC-equipment-electrical-panel-1030x644.webp",
    imageAlt:
      "Gardner Air technician diagnosing a commercial HVAC electrical panel during a repair call",
  },
  {
    num: "03",
    title: "Replacement",
    Icon: RefreshCw,
    body: "Strategic replacement when repair no longer pencils out. Load calcs, cost comparison, and a phased transition planned around your operations.",
    bullets: ["Repair vs. replace analysis", "Right-sized equipment", "Minimal downtime"],
    href: "/commercial-hvac-services/replacement/",
    image: "/Package-Unit-Replacement-25-Ton-1.webp",
    imageAlt:
      "25-ton commercial rooftop package unit replacement installed by Gardner Air",
  },
  {
    num: "04",
    title: "Installation",
    Icon: Layers,
    body: "New commercial HVAC installs specified for the building — not the invoice. Code-compliant, commissioned, and documented for the long haul.",
    bullets: ["Design & spec review", "Factory-precision install", "Full commissioning"],
    href: "/commercial-hvac-services/installation/",
    image: "/Ducting-Installation-1.webp",
    imageAlt:
      "Gardner Air commercial ducting installation for a Southern California facility",
  },
];

const EQUIPMENT = [
  {
    label: "Rooftop Package Units",
    src: "/Package-Units-1.webp",
    alt: "Commercial rooftop package units serviced by Gardner Air in Southern California",
  },
  {
    label: "Boiler Rooms",
    src: "/Gardner-Air-HVAC-equipment-boiler-room-1030x644.webp",
    alt: "Commercial boiler room HVAC equipment serviced by Gardner Air",
  },
  {
    label: "Precision Cooling / Liebert",
    src: "/Computer-Rooms-Liebert-Units-1.webp",
    alt: "Liebert precision cooling units in a computer room serviced by Gardner Air",
  },
  {
    label: "Chillers & Full Facility",
    src: "/Gardner-Air-HVAC-equipment-in-basement-1030x644.webp",
    alt: "Full facility commercial HVAC equipment maintained by Gardner Air",
  },
];

const OUTCOMES = [
  {
    eyebrow: "OUTCOME 01",
    body: "Fewer breakdowns · Fewer disruptions",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Lower energy bills · Higher system efficiency",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "Longer equipment lifespan · Stronger ROI",
    Icon: BarChart3,
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "Which commercial HVAC services does Gardner Air offer?",
    a: "Gardner Air covers four core services for commercial facilities: preventative maintenance, repair, equipment replacement, and new installation. We handle rooftop package units, split systems, chillers, boilers, cooling towers, refrigeration, precision cooling (Liebert), and specialty equipment across a single service relationship.",
  },
  {
    q: "What types of facilities do you work with?",
    a: "Owner-occupied commercial buildings, warehouses and distribution centers, manufacturing and industrial facilities, private educational campuses, and multi-tenant properties. Every scope is built around commercial equipment — Gardner Air does not service residential systems.",
  },
  {
    q: "What brands and equipment do you service?",
    a: "Our technicians are factory-trained on Carrier, York, Trane, Samsung, Mitsubishi, Raypak and other major commercial brands. We honor most factory warranties and can support existing equipment regardless of who installed it.",
  },
  {
    q: "What areas of Southern California do you serve?",
    a: "Riverside County, San Bernardino County, and Orange County — a roughly 50-mile radius from our Murrieta headquarters. We intentionally do not push into Los Angeles or San Diego so response times and quality stay tight.",
  },
  {
    q: "Can Gardner Air help reduce long-term HVAC costs?",
    a: "Yes. Our model is built around long-term partnership rather than transactional service calls. Full-scope preventative maintenance, honest repair-vs-replace analysis, and factory-precision installs compound into fewer emergencies, lower energy use, and longer equipment life.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function CommercialHvacServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
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
        {/* 1. Hero — image background, tech readout, trust badge bar           */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="services-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/commercial-services-hub-hero.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-40"
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

          <div
            className="absolute top-0 inset-x-0 h-[3px] bg-[#D42027] z-10"
            aria-hidden="true"
          />

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
                <li className="text-white/60">Commercial HVAC Services</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Commercial HVAC Services
            </p>

            <h1
              id="services-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8 max-w-4xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              One partner for every{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">commercial HVAC scope.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Preventative maintenance, repair, replacement, and installation for
              commercial facilities across the Inland Empire and Orange County —
              handled by one factory-trained team, on one schedule, with one line
              of communication.
            </p>

            <Link
              href="#services-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a Proposal
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
                        <Icon
                          size={14}
                          className="text-[#D42027]"
                          aria-hidden="true"
                        />
                      </div>
                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">
                        {text}
                      </span>
                      {i < TRUST_BADGES.length - 1 && (
                        <span
                          className="hidden lg:block text-white/20 ml-2"
                          aria-hidden="true"
                        >
                          ·
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 2. Cert logo strip                                                   */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Gardner Air certifications and credentials"
          className="bg-white border-t border-[#E5E7EB] py-8 lg:py-10"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-7 text-center">
              Credentialed · Certified · Factory-Trained
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
        {/* 3. The case for a single partner — asymmetric two-col + stat card    */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="single-partner-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  The Case for a Single Partner
                </p>
                <h2
                  id="single-partner-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Four services. One team. One line of communication.
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Facilities that juggle three or four HVAC vendors end up
                    paying for the gaps between them — the missed follow-ups,
                    the finger-pointing when something fails, the surprise
                    bills for scope no one owned. Gardner Air is built for the
                    opposite. Maintenance, repair, replacement, and
                    installation all live under one relationship, with the
                    same technicians who already know your equipment.
                  </p>
                  <p>
                    You get consistent standards on every visit, honest
                    repair-vs-replace guidance when equipment ages, and a
                    partner whose incentive is your building&rsquo;s long-term
                    performance — not the next emergency invoice.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-[3/2] rounded-2xl overflow-hidden">
                  <Image
                    src="/gardner-air-fleet.webp"
                    alt="Gardner Air fleet of service trucks ready for commercial HVAC calls across Southern California"
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
                    50mi
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Service radius
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      From our Murrieta headquarters
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 4. Services directory — 4 rich cards, each links to sub-page         */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="services-directory-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14 lg:mb-16">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Our Services
              </p>
              <h2
                id="services-directory-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Built to handle high-performance commercial systems.
              </h2>
              <p className="text-[#6B7280] text-base lg:text-lg leading-relaxed">
                Gardner Air services the full range of commercial and industrial
                HVAC equipment — chillers, boilers, cooling towers, refrigeration,
                rooftop package units, split systems, precision cooling, and more.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
              {SERVICES.map((svc) => (
                <Link
                  key={svc.num}
                  href={svc.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#D8D4CC] hover:border-[#D42027]/40 hover:shadow-[0_10px_40px_-12px_rgba(17,19,24,0.15)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={svc.image}
                      alt={svc.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#111318]/45 via-[#111318]/10 to-transparent"
                    />
                    <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur px-3 py-1.5">
                      <svc.Icon size={13} className="text-[#D42027]" aria-hidden="true" />
                      <span
                        className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#111318]"
                      >
                        Service {svc.num}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-5 p-7 lg:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="font-bold text-[#111318] leading-tight tracking-[-0.015em]"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(1.375rem, 2vw, 1.625rem)",
                        }}
                      >
                        {svc.title}
                      </h3>
                      <span
                        className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#D8D4CC] text-[#111318] group-hover:border-[#D42027] group-hover:bg-[#D42027] group-hover:text-white transition-colors"
                        aria-hidden="true"
                      >
                        <ArrowRight
                          size={15}
                          className="group-hover:translate-x-0.5 transition-transform"
                        />
                      </span>
                    </div>

                    <p className="text-[15px] text-[#6B7280] leading-relaxed">
                      {svc.body}
                    </p>

                    <ul
                      className="flex flex-wrap gap-2 mt-1"
                      role="list"
                    >
                      {svc.bullets.map((b) => (
                        <li
                          key={b}
                          className="font-mono text-[10px] font-medium uppercase tracking-[0.14em] text-[#6B7280] bg-[#F7F6F3] border border-[#E5E1D8] rounded-full px-3 py-1.5"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>

                    <div className="pt-2">
                      <span
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#111318] group-hover:text-[#D42027] transition-colors"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        Explore {svc.title}
                        <ArrowRight size={14} aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 5. Equipment we service — gallery band                               */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="equipment-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">
                  Equipment We Service
                </p>
                <h2
                  id="equipment-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  From rooftop package units to precision cooling.
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-base text-[#6B7280] leading-relaxed">
                  Our technicians are factory-trained on Carrier, York, Trane,
                  Samsung, Mitsubishi, and Raypak — and comfortable on the
                  specialty gear most contractors avoid. If it&rsquo;s
                  commercial, we service it.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {EQUIPMENT.map((item) => (
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

        {/* ------------------------------------------------------------------ */}
        {/* 6. Outcomes                                                          */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="outcomes-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                What a Partnership Produces
              </p>
              <h2
                id="outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Measurable outcomes on every service contract.
              </h2>
              <p className="text-base lg:text-lg text-[#6B7280] leading-relaxed">
                Facilities managers choose Gardner Air for fewer surprises,
                better timelines, and long-term value that shows up in the
                budget — not just the pitch.
              </p>
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
        {/* 7. Mid CTA band                                                      */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Request a proposal"
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
                Start the Conversation
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Consolidate your commercial HVAC scope under one partner.
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Send us a few details about your facility and equipment. We&rsquo;ll
                walk the site, document the scope, and put a written proposal in
                your hands — no pressure, no gotchas.
              </p>
              <Link
                href="#services-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request a Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 8. FAQ with contact-panel fallback                                   */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                FAQ
              </p>
              <h2
                id="faq-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Frequently Asked Questions
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
                      Every facility is different. If you have a specific
                      question about scope, equipment, or scheduling, our team
                      responds within one business day.
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
        {/* 9. Contact form + what-happens-next                                  */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="services-contact"
          aria-labelledby="services-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Tell Us About Your Facility"
                  subhead="Share a few details about your equipment and scope. We'll follow up within one business day to schedule a site walkthrough."
                  submitLabel="Request a Proposal"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We review your facility details" },
                    { num: "02", body: "Our team schedules a site walkthrough" },
                    { num: "03", body: "You receive a written scope proposal" },
                  ].map((step) => (
                    <div
                      key={step.num}
                      className="grid grid-cols-[56px_1fr] gap-4 py-7 items-start"
                    >
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
