import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Award, Shield, Zap, FileCheck, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title:
    "Commercial HVAC Installation — Southern California | Gardner Air",
  description:
    "Commercial HVAC installation across Southern California — load-calculated design, factory-precision workmanship, code-compliant ductwork, and documented commissioning for warehouses, offices, schools, and industrial buildings.",
  alternates: {
    canonical: "https://gardnerair.com/commercial-hvac-services/installation/",
  },
  openGraph: {
    title:
      "Commercial HVAC Installation — Southern California | Gardner Air",
    description:
      "Commercial HVAC installation across Southern California — load-calculated design, factory-precision workmanship, code-compliant ductwork, and documented commissioning for warehouses, offices, schools, and industrial buildings.",
    url: "https://gardnerair.com/commercial-hvac-services/installation/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const installationSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial HVAC Installation",
  description:
    "Gardner Air designs and installs commercial HVAC systems across Southern California — package units, split systems, ductwork, ductless, refrigeration, chillers, and boilers. Load-calculated, factory-precision, code-compliant.",
  url: "https://gardnerair.com/commercial-hvac-services/installation/",
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
  serviceType: "HVAC Installation",
  areaServed: "Southern California",
};

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified" },
  { Icon: Shield, text: "CSLB Licensed" },
  { Icon: Zap, text: "Factory-Trained" },
];

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Load Calc & System Design",
    body: "We size the system to your actual building load, usage pattern, and future plans — not a generic rule of thumb. Design is documented with equipment schedules, duct layout, and control strategy.",
  },
  {
    num: "02",
    title: "Factory-Precision Install",
    body: "Ductwork, refrigerant lines, electrical, and controls are installed to manufacturer spec and local code. Rigging, permits, and inspection coordination are handled by our team.",
  },
  {
    num: "03",
    title: "Commissioning & Handover",
    body: "We start up, test, and balance the system — airflow, refrigerant charge, electrical load, and controls — and deliver a documented commissioning packet at project close.",
  },
];

const SCOPE_PANEL_CATEGORIES = [
  {
    label: "Rooftop & Package Units",
    items: [
      "Package unit installs from 5 tons through large tonnage",
      "Curb design, fabrication, and rigging coordination",
      "Roof penetration, flashing, and weather-tight sealing",
    ],
  },
  {
    label: "Split & Ductless Systems",
    items: [
      "Condensers, air handlers, and ductless mini-splits",
      "Multi-zone systems for office and retail buildouts",
      "Refrigerant piping and lineset design",
    ],
  },
  {
    label: "Ductwork & Distribution",
    items: [
      "Sheet metal duct fabrication and install",
      "VAV boxes, diffusers, and grille layout",
      "Test-and-balance for delivered airflow",
    ],
  },
  {
    label: "Central Plant & Specialty",
    items: [
      "Boilers, chillers, and cooling tower installation",
      "Refrigeration, computer room, and precision cooling",
      "Controls integration and BAS tie-in",
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
    body: "Right-sized systems · Efficient from day one",
    Icon: Zap,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Code-compliant workmanship · Clean inspections",
    Icon: FileCheck,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "Documented commissioning · Full warranty coverage",
    Icon: Award,
  },
];

const FACILITIES = [
  { src: "/Ducting-Installation-1.webp", label: "Ducting Systems", alt: "Commercial ductwork installation by Gardner Air" },
  { src: "/Package-Units-1.webp", label: "New Package Units", alt: "New commercial package unit installation" },
  { src: "/Ducting-Installation-2.webp", label: "Ducting Retrofits", alt: "Commercial ducting retrofit project" },
  { src: "/Gardner-Air-HVAC-equipment-pipes-1030x644.webp", label: "Full Facility Integration", alt: "Full facility HVAC piping integration" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What kinds of buildings does Gardner Air install commercial HVAC systems for?",
    a: "We install for owner-occupied commercial buildings, warehouses, offices, schools, industrial facilities, and multi-tenant properties across Southern California — including package units, split systems, ductless multi-zone systems, chillers, boilers, and refrigeration equipment.",
  },
  {
    q: "Do you handle the design and load calculations, or do we need a separate engineer?",
    a: "For most commercial installations we handle the load calc, equipment selection, and duct design in-house. On larger central-plant or engineered projects we coordinate with your mechanical engineer or design-build partner and execute the installation to their specifications.",
  },
  {
    q: "What brands do you install?",
    a: "Gardner Air is a Diamond-level dealer for York and factory-trained on Carrier, Trane, Samsung, Mitsubishi, Raypak, and other major commercial brands. We spec across manufacturers based on what fits your building and application best, not a single-brand preference.",
  },
  {
    q: "Do you pull permits and coordinate inspections?",
    a: "Yes. We pull all required mechanical, electrical, and building permits for commercial HVAC work, coordinate with local AHJs for inspection, and register new equipment for full manufacturer warranty at project close.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function InstallationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(installationSchema) }}
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
              { "@type": "ListItem", position: 3, name: "Installation", item: "https://gardnerair.com/commercial-hvac-services/installation/" },
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

        {/* Hero */}
        <section
          aria-labelledby="installation-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Package-Units-1.webp"
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
                  <Link href="/commercial-hvac-services/" className="hover:text-white/70 transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Installation</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Commercial HVAC Installation
            </p>

            <h1
              id="installation-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Commercial HVAC installation,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">engineered to spec.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Load-calculated design, factory-precision workmanship, and
              documented commissioning for commercial and industrial
              facilities across Southern California.
            </p>

            <Link
              href="#installation-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request an Installation Proposal
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

        {/* Credentials strip */}
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

        {/* Case for design-first */}
        <section
          aria-labelledby="case-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  The Case for Design-First
                </p>
                <h2
                  id="case-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Installations Sized to the Building, Not to a Rule of Thumb
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Most of the operating cost, comfort issues, and
                    reliability problems a commercial HVAC system will ever
                    have are decided at installation. Undersized ductwork,
                    oversized units, and short-circuited returns bake in
                    problems that no maintenance program can fully undo.
                  </p>
                  <p>
                    Gardner Air installs commercial HVAC the way it should
                    be installed — with a real load calc, right-sized
                    equipment, and clean sheet-metal work — so the system
                    performs to spec on day one and stays inside its
                    warranty envelope for years after.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/installation.webp"
                    alt="Gardner Air commercial HVAC ductwork installation at a Southern California facility"
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
                    5+
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Factory brand training
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      York · Carrier · Trane · more
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Process + Scope Panel */}
        <section
          aria-labelledby="process-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Our Installation Process
                </p>
                <h2
                  id="process-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  A Three-Step Install That Ends in Verified Performance
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed mb-10">
                  Every installation runs through the same tight sequence:
                  load-calc-backed design, factory-precision execution, and
                  documented commissioning at handover.
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
                  You receive a full commissioning packet, warranty
                  registration, and as-built records at project close.
                </p>
              </div>

              <div
                className="rounded-2xl p-7 lg:p-8 flex flex-col gap-0"
                style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
                aria-label="Systems we install"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Systems We Install
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

        {/* Outcomes */}
        <section
          aria-labelledby="outcomes-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-16">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                What You Gain
              </p>
              <h2
                id="outcomes-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                A New System That Performs the Way It Was Sold
              </h2>
              <div className="flex flex-col gap-4 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  A properly designed and installed system runs at its
                  rated efficiency, holds delivered airflow to spec, and
                  stays inside factory warranty — three things a hurried
                  install almost never gets right.
                </p>
                <p>
                  You get equipment that earns its capital cost back
                  through years of predictable operation, not one that
                  starts generating service tickets the week after
                  startup.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {OUTCOMES.map((o) => {
                const Icon = o.Icon;
                return (
                  <div
                    key={o.eyebrow}
                    className="rounded-2xl bg-white border border-[#D8D4CC] p-7 lg:p-8 flex flex-col gap-4 hover:shadow-md hover:border-[#C4BFB6] transition-all duration-200"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#D42027]/8 flex items-center justify-center flex-shrink-0">
                      <Icon size={18} className="text-[#D42027]" aria-hidden="true" />
                    </div>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027]">
                      {o.eyebrow}
                    </p>
                    <p
                      className="font-bold text-[#111318] leading-tight tracking-[-0.01em]"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(1.0625rem, 1.5vw, 1.25rem)",
                      }}
                    >
                      {o.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Facilities & Equipment We Install */}
        <section
          aria-labelledby="facilities-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-12 items-end mb-10 lg:mb-12">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-4">
                  Systems We Install
                </p>
                <h2
                  id="facilities-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  From design to commissioning — installed to spec.
                </h2>
              </div>
              <p className="text-base text-[#6B7280] leading-relaxed lg:max-w-md">
                Every system Gardner Air installs is load-calculated, code-compliant, and handed over with full commissioning documentation — from ductwork and package units to full facility integrations.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {FACILITIES.map((item) => (
                <div
                  key={item.src}
                  className="group relative rounded-xl overflow-hidden bg-[#2A2D33] ring-1 ring-black/5 shadow-sm hover:shadow-xl hover:-translate-y-0.5 hover:ring-ga-red/30 transition-[transform,box-shadow,--tw-ring-color] duration-300 ease-out"
                >
                  <div className="relative aspect-square">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-center justify-between gap-2">
                    <p
                      className="font-bold text-white text-sm leading-tight"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {item.label}
                    </p>
                    <ArrowRight
                      size={14}
                      className="text-ga-red shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section
          aria-label="Request an installation proposal"
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
                Get It Right the First Time
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Planning a New Build, Tenant Improvement, or Facility Expansion?
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Bring us in early. A short design conversation now saves
                thousands of dollars — and years of maintenance headaches —
                over the life of the system.
              </p>
              <Link
                href="#installation-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Request an Installation Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-sell */}
        <section
          aria-labelledby="crosssell-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-12 lg:py-16"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr]">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/Gardner-Air-HVAC-equipment-electrical-panel-1030x644.webp"
                    alt="Gardner Air commercial HVAC preventative maintenance — electrical panel inspection"
                    fill
                    sizes="(max-width: 1024px) 100vw, 288px"
                    className="object-cover"
                  />
                </div>
                <div className="p-7 lg:p-10 flex flex-col justify-center gap-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    Protect the New Investment
                  </p>
                  <h2
                    id="crosssell-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Keep the New System Inside Its Warranty Window
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    A preventative maintenance program starting at
                    commissioning is the single best way to protect
                    performance and preserve full manufacturer warranty
                    coverage.
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

        {/* FAQ */}
        <section
          aria-labelledby="installation-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                FAQ
              </p>
              <h2
                id="installation-faq-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Frequently Asked Questions About Our Installation Services
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
                      Every installation project has different building
                      constraints, timelines, and equipment considerations.
                      Our team responds within one business day to specific
                      design, permitting, or phasing questions.
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

        {/* Contact form */}
        <section
          id="installation-contact"
          aria-labelledby="installation-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Tell Us About Your HVAC Installation Project"
                  subhead="Share the building type, project timeline, and any engineered plans you already have. We&rsquo;ll follow up to scope a walkthrough."
                  submitLabel="Request an Installation Proposal"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We review the building and project scope" },
                    { num: "02", body: "Our team completes load calc and design" },
                    { num: "03", body: "You receive a written installation proposal" },
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
