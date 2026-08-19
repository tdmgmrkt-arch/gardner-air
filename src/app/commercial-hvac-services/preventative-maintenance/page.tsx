import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Award,
  Shield,
  Zap,
  TrendingDown,
  Clock,
  BarChart3,
  ChevronDown,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Commercial HVAC Preventative Maintenance | Gardner Air",
  description:
    "Extend the life of your commercial HVAC system and reduce costly breakdowns with Gardner Air's preventative maintenance programs for Southern California facilities.",
  alternates: {
    canonical:
      "https://gardnerair.com/commercial-hvac-services/preventative-maintenance/",
  },
  openGraph: {
    title: "Commercial HVAC Preventative Maintenance | Gardner Air",
    description:
      "Extend the life of your commercial HVAC system and reduce costly breakdowns with Gardner Air's preventative maintenance programs for Southern California facilities.",
    url: "https://gardnerair.com/commercial-hvac-services/preventative-maintenance/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const pmSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial HVAC Preventative Maintenance",
  description:
    "Gardner Air's commercial HVAC preventative maintenance programs for warehouses, schools, and industrial buildings across Southern California. Customized plans, three-step inspection process, documented service reports.",
  url: "https://gardnerair.com/commercial-hvac-services/preventative-maintenance/",
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
  serviceType: "HVAC Preventative Maintenance",
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
    title: "Survey & Inspect",
    body: "We assess system condition and layout across your facility.",
  },
  {
    num: "02",
    title: "Verify Specs & Performance",
    body: "We check the unit and ensure it meets performance standards.",
  },
  {
    num: "03",
    title: "Propose & Plan",
    body: "You receive a clear, customized scope of work and service schedule.",
  },
];

const SCOPE_PANEL_CATEGORIES = [
  {
    label: "Air Handling",
    items: [
      "Filter inspection and replacement",
      "Evaporator coil cleaning and inspection",
      "Blower wheel cleaning and bearing lubrication",
    ],
  },
  {
    label: "Refrigeration",
    items: [
      "Condenser coil cleaning — chemical treatment",
      "Refrigerant charge verification and adjustment",
      "Refrigerant leak inspection — all fittings",
    ],
  },
  {
    label: "Electrical",
    items: [
      "Electrical connection torque and inspection",
      "Capacitor and contactor condition test",
      "Compressor amperage and oil level check",
    ],
  },
  {
    label: "Reporting",
    items: [
      "Drain pan clearing and condensate line flush",
      "Service report completed and delivered same day",
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

const FACILITIES = [
  {
    label: "Rooftop Package Units",
    src: "/Package-Units-1.webp",
    alt: "Commercial rooftop package units maintained by Gardner Air in Southern California",
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
    label: "Full Facility HVAC",
    src: "/Gardner-Air-HVAC-equipment-in-basement-1030x644.webp",
    alt: "Full facility commercial HVAC equipment in basement maintained by Gardner Air",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I know if my HVAC system is overdue for maintenance?",
    a: "If you\u2019re noticing rising energy bills, inconsistent temperatures, or more frequent service calls, it may be time for a maintenance review. Gardner Air will assess your system\u2019s condition and recommend the HVAC services you need.",
  },
  {
    q: "What happens if my system needs repairs or a replacement during maintenance?",
    a: "If Gardner Air\u2019s technicians uncover a serious issue during maintenance, we\u2019ll provide a detailed report and discuss repair or replacement options based on the system\u2019s condition and cost efficiency.",
  },
  {
    q: "Can Gardner Air help me budget for HVAC maintenance across multiple properties?",
    a: "Yes. We work with multi-site property owners and managers to create scalable, phased maintenance plans with transparent pricing and reporting.",
  },
  {
    q: "What regions do you serve?",
    a: "Gardner Air provides commercial HVAC preventative maintenance across Southern California\u2019s Inland Empire and Orange County \u2014 including Riverside, San Bernardino, and Orange Counties. Our service radius extends roughly 50 miles from our Murrieta headquarters.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function PreventativeMaintenancePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pmSchema) }}
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
              { "@type": "ListItem", position: 3, name: "Preventative Maintenance", item: "https://gardnerair.com/commercial-hvac-services/preventative-maintenance/" },
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
        {/* 1a. Hero — image background, tech readout, trust badge bar           */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="pm-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/preventive-maintenance.hero.webp"
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
                <li className="text-white/60">Preventative Maintenance</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Preventative Maintenance
            </p>

            <h1
              id="pm-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              HVAC preventative maintenance,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">completed in full.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Extend the life of your commercial HVAC system and reduce costly
              breakdowns with Gardner Air.
            </p>

            <Link
              href="#pm-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Schedule My Free Consultation
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
        {/* Credentials / cert logo strip                                        */}
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
        {/* "Cut Costs" — asymmetric two-col with env photo + mini stat card     */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="cut-costs-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  The Case for Preventative
                </p>
                <h2
                  id="cut-costs-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Cut Costs and Downtime With Commercial HVAC Preventative Maintenance
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    When HVAC systems fail, it results in lost productivity, tenant
                    complaints, and unnecessary stress. At Gardner Air, we understand
                    the stakes. Our HVAC preventative maintenance services are designed
                    to eliminate problems before they happen, helping you avoid
                    emergency calls and keep your operations running smoothly.
                  </p>
                  <p>
                    Whether you&rsquo;re managing a high-traffic distribution center or a
                    private academic environment, we build tailored maintenance plans
                    that fit your facility&rsquo;s needs and budget. From flexible agreements
                    to one-time inspections, Gardner Air gives you the tools to stay
                    proactive, not reactive, and protect one of your building&rsquo;s most
                    valuable assets.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/preventive-maintenance.webp"
                    alt="Gardner Air technician performing a preventative maintenance inspection on a commercial rooftop HVAC unit in Southern California"
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
                    $80K
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Documented client savings
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Year-two service program
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* 3-Step Process — spec panel                                          */}
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
                  Our Process
                </p>
                <h2
                  id="process-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Save Money and Stress With Proactive HVAC Preventative Maintenance Solutions
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed mb-10">
                  Reactive repairs are expensive. That&rsquo;s why Gardner Air uses a
                  three-step, proactive process to eliminate surprises:
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
                  Our approach ensures your HVAC system operates at peak performance
                  without adding unnecessary services or costs.
                </p>
              </div>

              <div
                className="rounded-2xl p-7 lg:p-8 flex flex-col gap-0"
                style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
                aria-label="What each visit includes"
              >
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">
                  What Each Visit Includes
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

                <div className="mt-6 pt-6 border-t border-white/10">
                  <Link
                    href="/#complete-scope"
                    className="group inline-flex items-center gap-3 h-12 pl-5 pr-4 rounded-full text-sm font-bold bg-ga-red text-white hover:bg-ga-red-dark shadow-[0_4px_20px_-4px_rgba(212,32,39,0.5)] transition-all duration-200 min-h-11"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    See the full 17-point scope
                    <span className="flex items-center justify-center h-7 w-7 rounded-full bg-white/15 group-hover:bg-white/25 group-hover:translate-x-0.5 transition-all">
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Longevity + Outcome cards                                            */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="longevity-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            {/* Copy header */}
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Long-Term Value
              </p>
              <h2
                id="longevity-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Our Goal: Longevity and Cost Efficiency
              </h2>
              <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  Proactive maintenance means fewer breakdowns and lower energy
                  bills. Our certified technicians fine-tune every system for maximum
                  efficiency, preventing the gradual wear that leads to major
                  failures.
                </p>
                <p>
                  With Gardner Air, you&rsquo;re not just avoiding emergencies, you&rsquo;re
                  getting more value out of every HVAC investment. It&rsquo;s not a cost.
                  It&rsquo;s a strategy.
                </p>
              </div>
            </div>

            {/* Outcome cards — 3-col grid */}
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
                  Equipment We Cover
                </p>
                <h2
                  id="facilities-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                  }}
                >
                  Every visit, every asset — full-scope coverage.
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-base text-[#6B7280] leading-relaxed">
                  From rooftop package units to precision cooling rooms and full
                  facility HVAC, Gardner Air maintains the complete range of
                  commercial equipment — never partial scopes, never skipped assets.
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
          aria-label="Schedule a maintenance visit"
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
                Stop Costly Failures
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Schedule a Maintenance Visit to Stop Costly Failures in Their Tracks
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                With Gardner Air&rsquo;s expert HVAC preventative maintenance services,
                you&rsquo;re investing in performance, savings, and peace of mind. Let our
                certified team discuss a maintenance plan to help you extend system
                life and avoid surprise breakdowns.
              </p>
              <Link
                href="#pm-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Schedule My Free Consultation
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Case Study                                                           */}
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
              aria-label="Case study: $80K in savings at a private college in Claremont"
              className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20 border-t border-[#D8D4CC] pt-10 lg:pt-14"
            >
              <div className="flex flex-col">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-8">
                  <Image
                    src="/CaseStudies.webp"
                    alt="Commercial HVAC rooftop units at a private college campus in Claremont, California — maintained by Gardner Air"
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
                    $80K
                  </p>
                  <div className="pb-2">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Year-two service
                      <br />
                      savings
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
                  HVAC Preventative Maintenance Case Study:
                  <br />
                  <span className="text-[#D42027]">$80K in Savings</span>
                </h2>

                <p className="text-base lg:text-lg text-[#6B7280] leading-relaxed mb-10">
                  A private college in Claremont needed a reliable partner to keep its
                  HVAC systems performing. Gardner Air stepped in with a customized
                  HVAC preventative maintenance plan. By performing thorough
                  inspections, correcting deficiencies the college&rsquo;s last provider
                  missed, and taking over full-time service, we saved them $80,000 in
                  overall service expenses during their second year with us. All
                  without compromising performance or comfort.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-5 border-t border-[#D8D4CC] pt-6 mb-8">
                  {[
                    { label: "Sector", value: "Education · Private College" },
                    { label: "Location", value: "Claremont, CA" },
                    { label: "Scope", value: "Full-Service · Year 2" },
                    { label: "Equipment", value: "Full facility HVAC" },
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
                    { value: "$80K", label: "Year-two savings" },
                    { value: "100%", label: "Scope completion" },
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
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/Package-Unit-Replacement-25-Ton-1.webp"
                    alt="Gardner Air 25-ton commercial rooftop package unit replacement"
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
                    id="crosssell-heading"
                    className="font-bold text-[#111318] leading-snug"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)",
                    }}
                  >
                    Is Your Rooftop Unit Beyond the Maintenance Stage?
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    Explore Gardner Air&rsquo;s replacement services to see how we can
                    install a new unit that meets all your needs.
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
          aria-labelledby="pm-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                FAQ
              </p>
              <h2
                id="pm-faq-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Frequently Asked Questions About Our Preventative Maintenance Services
              </h2>

              {FAQS.length > 0 && (
                <div className="flex flex-col gap-3 mb-12 lg:mb-16">
                  {FAQS.map((faq, i) => (
                    <FaqItem key={i} question={faq.q} answer={faq.a} />
                  ))}
                </div>
              )}

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
                      We build maintenance plans around each facility&rsquo;s unique equipment
                      mix. If you have a specific question about scope, scheduling, or
                      equipment coverage, our team responds within one business day.
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
        {/* Contact form                                                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="pm-contact"
          aria-labelledby="pm-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Tell Us About Your HVAC Preventative Maintenance Needs"
                  subhead="Contact us to cut long-term costs and improve system performance."
                  submitLabel="Schedule My Free Consultation"
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
