import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Check, Award, Shield, Zap, TrendingDown, BarChart3, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title:
    "HVAC Building Automation — Southern California | Gardner Air",
  description:
    "Gardner Air designs and integrates commercial HVAC building automation systems that cut energy waste, prevent downtime, and give Southern California businesses full control of their facilities.",
  alternates: {
    canonical: "https://gardnerair.com/building-automation/",
  },
  openGraph: {
    title:
      "HVAC Building Automation — Southern California | Gardner Air",
    description:
      "Gardner Air designs and integrates commercial HVAC building automation systems that cut energy waste, prevent downtime, and give Southern California businesses full control of their facilities.",
    url: "https://gardnerair.com/building-automation/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const baSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "HVAC Building Automation",
  description:
    "Gardner Air designs, integrates, and services commercial HVAC building automation systems across Southern California — remote access, automated alerts, demand-control ventilation, scheduling, and energy optimization.",
  url: "https://gardnerair.com/building-automation/",
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
  serviceType: "Building Automation System",
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

const DIFFERENTIATORS = [
  {
    num: "01",
    title: "System Automation With Real HVAC Expertise",
    body: "Automation is only as reliable as the technicians integrating it. Our team designs every deployment with a working understanding of your equipment — how it modulates, how it fails, and how it should be tuned once it's under a control system.",
  },
  {
    num: "02",
    title: "Automation Designed Around Energy Efficiency",
    body: "Energy waste is one of the largest recurring costs in commercial buildings. We configure systems to regulate use based on occupancy, outdoor conditions, and real-time demand — so your building performs harder without driving up bills.",
  },
  {
    num: "03",
    title: "Controls That Keep You in Command",
    body: "Whether you're onsite or remote, our automation platforms surface real-time data, alerts, and system control. You catch small issues before they become emergencies, and coordinate preventative maintenance without guesswork.",
  },
];

const CAPABILITY_CATEGORIES = [
  {
    label: "Control & Access",
    items: [
      "Remote system access — web and mobile",
      "Zone-level scheduling and setpoint control",
      "Role-based user permissions",
    ],
  },
  {
    label: "Energy & Ventilation",
    items: [
      "Demand-control ventilation (CO2 / occupancy)",
      "Outdoor-air economizer optimization",
      "Load shedding and peak-demand strategies",
    ],
  },
  {
    label: "Monitoring & Alerts",
    items: [
      "Real-time equipment status and trending",
      "Automated fault alerts by email and SMS",
      "Runtime and energy-usage reporting",
    ],
  },
  {
    label: "Integration",
    items: [
      "Package units, split systems, VAVs, RTUs",
      "Boilers, chillers, and refrigeration circuits",
      "Legacy platform migration and consolidation",
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
    body: "Lower monthly energy spend · Right-sized system runtime",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Fewer surprise failures · Faster response when issues surface",
    Icon: Shield,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "Complete visibility · Data-backed operational decisions",
    Icon: BarChart3,
  },
];

const FACILITIES = [
  { src: "/Gardner-Air-HVAC-equipment-panel-1030x644.webp", label: "Control Panels", alt: "Commercial HVAC automation control panel" },
  { src: "/Gardner-Air-HVAC-equipment-electrical-panel-1030x644.webp", label: "Electrical Systems", alt: "Commercial HVAC electrical system integration" },
  { src: "/Computer-Rooms-Liebert-Units-3.webp", label: "Precision Cooling", alt: "Computer room precision cooling automation" },
  { src: "/Gardner-Air-HVAC-equipment-pipes-1030x644.webp", label: "Full Facility Networks", alt: "Full facility HVAC network automation" },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "What is an HVAC building automation system?",
    a: "A building automation system (BAS) is a centralized control platform that monitors and manages your HVAC equipment — package units, split systems, chillers, boilers, and ventilation — from a single interface. Instead of manually adjusting thermostats or reacting to breakdowns, the system runs your building on schedules, occupancy signals, and outdoor conditions, while alerting your team when something needs attention.",
  },
  {
    q: "Can Gardner Air integrate automation with our existing HVAC equipment?",
    a: "In most cases, yes. We design each deployment around the equipment already installed — whether that's newer smart-ready RTUs or older units that need a controller retrofit. When a facility is running an outdated or overpriced platform, we can migrate to a more efficient, scalable system without a full equipment replacement.",
  },
  {
    q: "Will building automation actually reduce our energy costs?",
    a: "It typically does, because most commercial buildings run more equipment than they need to, for longer than they need to. Demand-control ventilation, occupancy-based scheduling, economizer optimization, and load-shedding strategies each remove a category of waste. The savings depend on your building's baseline, but reducing recurring energy and subscription costs is one of the primary reasons facilities invest in a BAS.",
  },
  {
    q: "Do we need to be onsite to control the system?",
    a: "No. Our automation platforms provide secure remote access from any browser or mobile device. Facility managers can adjust schedules, review alerts, and check equipment status from anywhere — and grant role-based access to onsite staff, corporate operations, or after-hours responders.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function BuildingAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(baSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
              { "@type": "ListItem", position: 2, name: "Building Automation", item: "https://gardnerair.com/building-automation/" },
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
          aria-labelledby="ba-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Gardner-Air-HVAC-equipment-electrical-panel.webp"
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
                <li className="text-white/60">Building Automation</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Building Automation
            </p>

            <h1
              id="ba-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              HVAC building automation,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">built for control.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Intelligent automation that reduces energy waste, prevents downtime,
              and gives Southern California businesses complete control over their
              commercial HVAC systems.
            </p>

            <Link
              href="#ba-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Schedule My Services
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
        {/* Efficiency, Savings, Control                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="efficiency-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  The Case for Automation
                </p>
                <h2
                  id="efficiency-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Efficiency, Savings, and Control With a Customized Building Automation System
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Our building automation services help commercial clients take
                    control of indoor climate, energy use, and system performance
                    without relying on costly legacy platforms. We design and integrate
                    solutions that combine remote access, automated alerts,
                    demand-control ventilation, and scheduling — engineered around
                    the equipment you already run.
                  </p>
                  <p>
                    Whether you&rsquo;re managing a warehouse, office park, or
                    multi-use facility, our automation upgrades help you avoid the
                    inefficiencies and unplanned downtime that drive up operating
                    cost year after year.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/building-automation.webp"
                    alt="Gardner Air technician configuring a commercial HVAC building automation control panel in Southern California"
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
                    24/7
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      System visibility
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Remote monitoring & alerts
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Differentiators + Capabilities panel                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="differentiators-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  What Makes Our Approach Different
                </p>
                <h2
                  id="differentiators-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Automation Built by HVAC People, Not Software Vendors
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed mb-10">
                  When you invest in building automation, you need a partner who
                  understands how your HVAC systems actually work together. We
                  approach automation as an extension of the equipment — not a
                  layer bolted on top of it.
                </p>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {DIFFERENTIATORS.map((d) => (
                    <div
                      key={d.num}
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
                        {d.num}
                      </p>
                      <div>
                        <h3
                          className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-2"
                          style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "1.125rem",
                          }}
                        >
                          {d.title}
                        </h3>
                        <p className="text-base text-[#6B7280] leading-relaxed">
                          {d.body}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                className="rounded-2xl p-7 lg:p-8 flex flex-col gap-0"
                style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
                aria-label="Automation platform capabilities"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  Platform Capabilities
                </p>

                <div className="flex flex-col divide-y divide-white/8">
                  {CAPABILITY_CATEGORIES.map((cat) => (
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
        {/* Outcomes                                                            */}
        {/* ------------------------------------------------------------------ */}
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
                A Smarter Building That Runs More Reliably
              </h2>
              <div className="flex flex-col gap-4 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  With each integration, we help you create a building that saves
                  money and runs more predictably. Every deployment is fit to your
                  infrastructure, HVAC layout, and operational goals — not the
                  other way around.
                </p>
                <p>
                  The result is a system that pays back its investment through
                  lower energy use, fewer emergencies, and cleaner data to guide
                  the next decision.
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

        {/* ------------------------------------------------------------------ */}
        {/* Facilities & Equipment We Automate                                  */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="facilities-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 lg:gap-12 items-end mb-10 lg:mb-12">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-4">
                  Systems We Automate
                </p>
                <h2
                  id="facilities-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  One platform, every asset — total visibility.
                </h2>
              </div>
              <p className="text-base text-[#6B7280] leading-relaxed lg:max-w-md">
                From control panels and electrical systems to precision cooling and full facility networks, Gardner Air brings every HVAC asset under a single, intelligent automation platform.
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

        {/* ---- Mid CTA band ---- */}
        <section
          aria-label="Schedule a building automation consultation"
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
                Take Control of Your Environment
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Ready to Cut Operating Costs and Gain Full System Visibility?
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                We design and implement automation systems that fit your
                infrastructure, your HVAC layout, and your operational goals. Talk
                to our team about building a smarter, more predictable facility.
              </p>
              <Link
                href="#ba-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Schedule My Automation Services
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Case Study — Native American Reservation, multi-building            */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="case-study-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              Case Study
            </p>

            <article
              aria-label="Case study: multi-building automation platform migration"
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20 border-t border-[#D8D4CC] pt-10 lg:pt-14"
            >
              <div className="flex flex-col">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
                  <Image
                    src="/CaseStudies.webp"
                    alt="Commercial HVAC building automation platform across a multi-building facility maintained by Gardner Air"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover"
                  />
                </div>

                <div className="flex items-end gap-4 border-t border-[#D8D4CC] pt-8">
                  <p
                    className="tabular-nums font-bold text-[#D42027] leading-none"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(3.5rem, 6vw, 5rem)",
                    }}
                  >
                    0
                  </p>
                  <div className="pb-2">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Ongoing platform
                      <br />
                      subscription cost
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col">
                <h2
                  id="case-study-heading"
                  className="font-bold text-[#111318] leading-[1.05] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  }}
                >
                  Replacing a High-Cost Platform Across{" "}
                  <span className="text-[#D42027]">a Multi-Building Facility</span>
                </h2>

                <p className="text-base lg:text-lg text-[#6B7280] leading-relaxed mb-10">
                  A tribal facility was locked into an expensive, multi-building
                  automation platform that was driving up monthly costs without
                  matching the way the buildings were actually operated. Gardner
                  Air replaced it with a scalable, right-sized solution tailored
                  to their HVAC layout and control needs — consolidating
                  visibility across every building, cutting recurring subscription
                  expense, and eliminating administrative overhead. The client now
                  works from a single interface with fewer disruptions and cleaner
                  data behind every operational decision.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 border-t border-[#D8D4CC] pt-6 mb-8">
                  {[
                    { label: "Sector", value: "Tribal · Multi-Building" },
                    { label: "Location", value: "Southern California" },
                    { label: "Scope", value: "Platform Migration · Integration" },
                    { label: "Equipment", value: "Full-facility HVAC" },
                  ].map((m) => (
                    <div key={m.label}>
                      <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] mb-1.5">
                        {m.label}
                      </p>
                      <p
                        className="font-bold text-[#111318] text-sm leading-snug"
                        style={{ fontFamily: "var(--font-dm-sans)" }}
                      >
                        {m.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-2 border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { value: "1", label: "Unified interface" },
                    { value: "0", label: "Legacy subscription cost" },
                  ].map((m, i) => (
                    <div
                      key={m.label}
                      className={[
                        "py-8 lg:py-10 flex flex-col gap-2",
                        i > 0 ? "border-l border-[#D8D4CC] pl-6" : "",
                      ].join(" ")}
                    >
                      <p
                        className="tabular-nums font-bold text-[#111318] leading-none"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
                        }}
                      >
                        {m.value}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
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
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr]">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/Gardner-Air-HVAC-equipment-panel-1030x644.webp"
                    alt="Gardner Air commercial HVAC preventative maintenance — equipment panel inspection"
                    fill
                    sizes="(max-width: 1024px) 100vw, 288px"
                    className="object-cover"
                  />
                </div>
                <div className="p-7 lg:p-10 flex flex-col justify-center gap-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                    Pairs With Preventative Maintenance
                  </p>
                  <h2
                    id="crosssell-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Automation Works Best on Well-Maintained Equipment
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    See how our full-scope maintenance program keeps the equipment
                    behind your automation platform running the way it&rsquo;s
                    meant to.
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
          aria-labelledby="ba-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                FAQ
              </p>
              <h2
                id="ba-faq-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Frequently Asked Questions About Our Building Automation Services
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
                      Every facility has a different equipment mix and different
                      operational priorities. If you have a specific question about
                      integration, scope, or platform migration, our team responds
                      within one business day.
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
          id="ba-contact"
          aria-labelledby="ba-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Tell Us About Your HVAC Building Automation Needs"
                  subhead="Contact us today to gain more control and cut operating costs."
                  submitLabel="Schedule My Automation Services"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We review your facility and equipment mix" },
                    { num: "02", body: "Our team scopes an integration plan" },
                    { num: "03", body: "You receive a written proposal with clear pricing" },
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
