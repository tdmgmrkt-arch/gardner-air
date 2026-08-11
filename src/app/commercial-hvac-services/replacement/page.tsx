import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Award,
  Shield,
  Zap,
  ChevronDown,
  TrendingDown,
  Clock,
  FileCheck,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title:
    "Commercial HVAC Replacement — Southern California | Gardner Air",
  description:
    "Strategic commercial HVAC equipment replacement across Southern California. Gardner Air right-sizes rooftop units, split systems, chillers, and boilers — with a clear cost analysis and minimal disruption to your operations.",
  alternates: {
    canonical: "https://gardnerair.com/commercial-hvac-services/replacement/",
  },
  openGraph: {
    title:
      "Commercial HVAC Replacement — Southern California | Gardner Air",
    description:
      "Strategic commercial HVAC equipment replacement across Southern California. Gardner Air right-sizes rooftop units, split systems, chillers, and boilers — with a clear cost analysis and minimal disruption to your operations.",
    url: "https://gardnerair.com/commercial-hvac-services/replacement/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const replacementSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial HVAC Replacement",
  description:
    "Gardner Air's commercial HVAC replacement services across Southern California — repair-versus-replace analysis, right-sized equipment selection, coordinated changeout with minimal operational downtime, and documented commissioning.",
  url: "https://gardnerair.com/commercial-hvac-services/replacement/",
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
  serviceType: "HVAC Equipment Replacement",
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
    title: "Repair vs. Replace Analysis",
    body: "We benchmark your existing equipment against remaining life, refrigerant type, efficiency losses, and repair history — so the replace decision is a math decision, not a sales pitch.",
  },
  {
    num: "02",
    title: "Right-Size the New Equipment",
    body: "We spec the replacement to your actual building load, tenant use, and future plans — not what happened to be installed the last time around.",
  },
  {
    num: "03",
    title: "Coordinate the Changeout",
    body: "We schedule around your operations, stage rigging and crane work, and commission the new system with documented performance verification.",
  },
];

const SCOPE_PANEL_CATEGORIES = [
  {
    label: "Rooftop & Package Units",
    items: [
      "5-ton through 25-ton+ package unit changeouts",
      "Curb adapter fabrication and rigging",
      "Crane coordination and lift planning",
    ],
  },
  {
    label: "Split Systems & Ductless",
    items: [
      "Condenser and air handler replacement",
      "Ductless mini-split and multi-zone systems",
      "Refrigerant line and lineset reconfiguration",
    ],
  },
  {
    label: "Central Plant & Refrigeration",
    items: [
      "Chiller, boiler, and cooling tower replacement",
      "Refrigeration rack and condensing units",
      "Computer room precision cooling changeouts",
    ],
  },
  {
    label: "Commissioning & Handover",
    items: [
      "Startup, testing, and performance verification",
      "Controls integration and BAS re-tie-in",
      "Warranty registration and service records",
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
    body: "Right-sized equipment · Lower operating cost from day one",
    Icon: TrendingDown,
  },
  {
    eyebrow: "OUTCOME 02",
    body: "Minimal downtime · Changeouts staged around operations",
    Icon: Clock,
  },
  {
    eyebrow: "OUTCOME 03",
    body: "Documented commissioning · Clean warranty and service history",
    Icon: FileCheck,
  },
];

const FACILITIES = [
  {
    label: "25-Ton Package Units",
    src: "/Package-Unit-Replacement-25-Ton-1.webp",
    alt: "Gardner Air replacing a 25-ton commercial rooftop package unit in Southern California",
  },
  {
    label: "5-Ton Package Units",
    src: "/Package-Unit-Replacement-5-Ton-1.webp",
    alt: "Gardner Air replacing a 5-ton commercial package unit",
  },
  {
    label: "Rooftop Retrofits",
    src: "/Package-Unit-Replacement-25-Ton-3.webp",
    alt: "Commercial rooftop HVAC retrofit and replacement by Gardner Air",
  },
  {
    label: "Precision Cooling",
    src: "/Computer-Rooms-Liebert-Units-2.webp",
    alt: "Liebert precision cooling unit replacement in a commercial computer room by Gardner Air",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "How do I know when it's time to replace commercial HVAC equipment instead of repairing it?",
    a: "The decision usually comes down to equipment age, refrigerant type, repair frequency, and efficiency losses versus modern equipment. Gardner Air provides a written repair-versus-replace analysis with the numbers behind each option — so the choice is defensible to leadership and finance.",
  },
  {
    q: "Will you replace equipment with the same brand, or something different?",
    a: "Whichever fits your building best. We are a Diamond-level dealer for York and factory-trained on Carrier, Trane, and other major brands, so we can spec across manufacturers. The goal is a right-sized system for your actual load and use pattern — not what happened to be up there last time.",
  },
  {
    q: "How disruptive is a commercial HVAC changeout?",
    a: "Less than most owners expect, when it&rsquo;s planned. We stage rigging, crane work, and controls tie-in around your operating hours, and often complete rooftop package-unit changeouts in a single day per unit. For larger central-plant projects, we phase work so critical zones stay conditioned throughout.",
  },
  {
    q: "Do you handle permitting, warranty registration, and rebates?",
    a: "Yes. Gardner Air pulls the required mechanical permits, registers the new equipment for full manufacturer warranty coverage, and coordinates any applicable utility or efficiency rebates. You receive a documented handover packet at project close.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function ReplacementPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(replacementSchema) }}
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
              { "@type": "ListItem", position: 3, name: "Replacement", item: "https://gardnerair.com/commercial-hvac-services/replacement/" },
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
          aria-labelledby="replacement-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Package-Unit-Replacement-25-Ton-1.webp"
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
                  <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li>
                  <Link href="/commercial-hvac-services/" className="hover:text-white/70 transition-colors">Services</Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Replacement</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Commercial HVAC Replacement
            </p>

            <h1
              id="replacement-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8"
              style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)" }}
            >
              HVAC equipment replacement,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">planned, not panicked.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Strategic commercial HVAC changeouts across Southern California
              — right-sized equipment, honest cost analysis, and minimal
              disruption to your operations.
            </p>

            <Link
              href="#replacement-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Request a Replacement Proposal
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="relative z-10" aria-label="Gardner Air credentials">
            <div className="border-t border-white/10" style={{ background: "rgba(42,45,51,0.85)", backdropFilter: "blur(12px)" }}>
              <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
                <div className="py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                  {TRUST_BADGES.map(({ Icon, text }, i) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded flex items-center justify-center bg-[#D42027]/15 flex-shrink-0">
                        <Icon size={14} className="text-[#D42027]" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/60">{text}</span>
                      {i < TRUST_BADGES.length - 1 && <span className="hidden lg:block text-white/20 ml-2" aria-hidden="true">·</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Credentials strip */}
        <section aria-label="Gardner Air certifications and credentials" className="bg-white border-t border-[#E5E7EB] py-8 lg:py-10">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280] mb-7 text-center">
              Credentialed · Certified · Continuously Trained
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
              {CERT_LOGOS.map((cert) => (
                <div key={cert.src} className={`relative h-12 lg:h-14 ${cert.widthClass}`}>
                  <Image src={cert.src} alt={cert.alt} fill sizes="(max-width: 640px) 25vw, 150px" className="object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case for Replacement */}
        <section aria-labelledby="case-heading" className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">The Case for Replacement</p>
                <h2 id="case-heading" className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Know When Replacement Is the Smarter Long-Term Move
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Aging commercial HVAC systems fail in expensive ways —
                    ballooning repair bills, rising energy use, and the
                    kind of downtime that costs a lot more than the repair
                    invoice. At some point, continuing to patch older
                    equipment stops making financial sense.
                  </p>
                  <p>
                    Gardner Air runs the numbers with you: remaining life,
                    refrigerant obsolescence, efficiency losses, repair
                    history, and the cost of the next likely failure — versus
                    a right-sized, warranty-fresh replacement. You get a
                    defensible answer, not a sales pitch.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/replacement.webp"
                    alt="Rooftop opening prepared for a commercial HVAC package unit replacement in Southern California"
                    fill
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-cover"
                  />
                </div>
                <div className="rounded-xl border border-[#D8D4CC] bg-[#F7F6F3] px-6 py-5 flex items-center gap-5">
                  <p className="tabular-nums font-bold text-[#D42027] leading-none flex-shrink-0" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(2rem, 3vw, 2.5rem)" }}>25T</p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">Package unit range</p>
                    <p className="font-bold text-[#111318] text-sm mt-1" style={{ fontFamily: "var(--font-dm-sans)" }}>5-ton through 25-ton+</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process + Scope Panel */}
        <section aria-labelledby="process-heading" style={{ background: "#F7F6F3" }} className="border-t border-[#E5E7EB] py-16 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">Our Replacement Process</p>
                <h2 id="process-heading" className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                  Replacements Planned Around Operations, Not the Other Way Around
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed mb-10">
                  A commercial changeout is a project, not a truck roll. We
                  plan the entire scope — analysis, equipment selection,
                  rigging, permits, changeout, commissioning — before we
                  touch a single unit.
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                  {PROCESS_STEPS.map((step) => (
                    <div key={step.num} className="grid grid-cols-[72px_1fr] gap-6 py-8 items-start">
                      <p className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(2rem, 3vw, 2.75rem)" }} aria-hidden="true">{step.num}</p>
                      <div>
                        <h3 className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-2" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1.125rem" }}>{step.title}</h3>
                        <p className="text-base text-[#6B7280] leading-relaxed">{step.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-base text-[#6B7280] leading-relaxed">
                  Every project closes with commissioning data, warranty
                  registration, and an as-built service record ready for
                  your facility file.
                </p>
              </div>

              <div className="rounded-2xl p-7 lg:p-8 flex flex-col gap-0" style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }} aria-label="Equipment we replace">
                <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-7">Equipment We Replace</p>
                <div className="flex flex-col divide-y divide-white/8">
                  {SCOPE_PANEL_CATEGORIES.map((cat) => (
                    <div key={cat.label} className="py-6 first:pt-0">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="block h-3 w-0.5 bg-[#D42027]" aria-hidden="true" />
                        <p className="font-bold text-white uppercase tracking-[0.15em] text-xs" style={{ fontFamily: "var(--font-dm-sans)" }}>{cat.label}</p>
                      </div>
                      <ul className="flex flex-col gap-2.5" role="list">
                        {cat.items.map((item) => (
                          <li key={item} className="flex items-start gap-3">
                            <Check size={13} className="shrink-0 mt-0.5 text-[#D42027]" aria-hidden="true" strokeWidth={2.5} />
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
        {/* Outcomes — icon card grid                                            */}
        {/* ------------------------------------------------------------------ */}
        <section aria-labelledby="outcomes-heading" className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">What You Gain</p>
              <h2 id="outcomes-heading" className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                A System Built for the Next Decade, Not the Last One
              </h2>
              <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                <p>
                  Replacing at the right time — with the right equipment
                  — protects your operations, your energy budget, and
                  your capital plan. New equipment installed to spec
                  delivers savings from day one and predictable service
                  behavior for years after.
                </p>
                <p>
                  Paired with a preventative maintenance program, a fresh
                  system stays inside its warranty window and stays out
                  of the emergency-repair cycle.
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
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027]">{o.eyebrow}</p>
                  <p className="font-bold text-[#111318] leading-tight tracking-[-0.01em]" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.125rem, 1.5vw, 1.25rem)" }}>
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
        <section aria-labelledby="facilities-heading" style={{ background: "#F7F6F3" }} className="border-t border-[#E5E7EB] py-16 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-4">Equipment We Replace</p>
                <h2 id="facilities-heading" className="font-bold text-[#111318] leading-[0.95] tracking-tight" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)" }}>
                  Every changeout, engineered to last.
                </h2>
              </div>
              <div className="flex items-center">
                <p className="text-base text-[#6B7280] leading-relaxed">
                  From 5-ton rooftop units to large-tonnage package replacements and
                  precision cooling changeouts, Gardner Air handles commercial equipment
                  at every scale — with documented commissioning on every project.
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
                    <span className="text-white text-xs font-semibold leading-snug" style={{ fontFamily: "var(--font-dm-sans)" }}>{item.label}</span>
                    <ArrowRight size={12} className="text-ga-red opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 shrink-0" aria-hidden="true" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mid CTA */}
        <section aria-label="Request a replacement proposal" className="relative overflow-hidden bg-[#1E2126] py-16 lg:py-24">
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
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">Plan the Changeout</p>
              <h2 className="font-bold text-white leading-[1.05] tracking-tight mb-5" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                Ready to Move From Reactive Repairs to a Planned Replacement?
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Gardner Air will walk your rooftop, run the repair-versus-
                replace math, and provide a written proposal that stands up
                to leadership review.
              </p>
              <Link href="#replacement-contact" className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                Request a Replacement Proposal
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* Cross-sell */}
        <section aria-labelledby="crosssell-heading" style={{ background: "#F7F6F3" }} className="border-t border-[#E5E7EB] py-12 lg:py-16">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-[288px_1fr] gap-0">
                <div className="relative aspect-[4/3] lg:aspect-auto">
                  <Image
                    src="/EnvironmentBand.webp"
                    alt="Gardner Air commercial HVAC installation and facility work in Southern California"
                    fill
                    sizes="(max-width: 1024px) 100vw, 288px"
                    className="object-cover"
                  />
                </div>
                <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">Starting From Scratch?</p>
                  <h2 id="crosssell-heading" className="font-bold text-[#111318] leading-snug" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.25rem, 2.25vw, 1.625rem)" }}>
                    New Building or First-Time Install?
                  </h2>
                  <p className="text-sm text-[#6B7280] leading-relaxed max-w-lg">
                    When you&rsquo;re installing new equipment where none
                    existed before, our installation team handles design,
                    load calc, and full commissioning.
                  </p>
                  <div>
                    <Link href="/commercial-hvac-services/installation/" className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors duration-200 min-h-[44px]" style={{ fontFamily: "var(--font-dm-sans)" }}>
                      Explore Installation Services
                      <ArrowRight size={15} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section aria-labelledby="replacement-faq-heading" className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">FAQ</p>
              <h2 id="replacement-faq-heading" className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Frequently Asked Questions About Our Replacement Services
              </h2>
              <div className="flex flex-col gap-3 mb-12 lg:mb-16">
                {FAQS.map((faq, i) => <FaqItem key={i} question={faq.q} answer={faq.a} />)}
              </div>
              <div className="rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] divide-y lg:divide-y-0 lg:divide-x divide-[#D8D4CC]">
                  <div className="p-8 lg:p-10">
                    <p className="font-bold text-[#111318] mb-3 leading-tight" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.125rem, 1.75vw, 1.375rem)" }}>Don&rsquo;t see your question?</p>
                    <p className="text-base text-[#6B7280] leading-relaxed">
                      Every replacement project has its own equipment,
                      access, and timing constraints. If you have specific
                      questions about scope, phasing, or utility rebates,
                      our team responds within one business day.
                    </p>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center gap-4">
                    <a href="tel:+19516964495" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] transition-colors min-h-[44px] justify-center" style={{ fontFamily: "var(--font-dm-sans)" }} aria-label="Call Gardner Air">Call (951) 696-4495</a>
                    <a href="mailto:service@gardnerci.com" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors min-h-[44px] justify-center" style={{ fontFamily: "var(--font-dm-sans)" }}>Email Our Team</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section id="replacement-contact" aria-labelledby="replacement-form-heading" style={{ background: "#F7F6F3" }} className="border-t border-[#E5E7EB] py-16 lg:py-28">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Tell Us About Your HVAC Replacement Project"
                  subhead="Share the equipment you&rsquo;re looking at replacing, your building type, and your target timing. We&rsquo;ll follow up to schedule a walkthrough."
                  submitLabel="Request a Replacement Proposal"
                />
              </div>
              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">What Happens Next</p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We walk the equipment and review history" },
                    { num: "02", body: "You receive a repair-vs-replace analysis" },
                    { num: "03", body: "We build a written changeout proposal" },
                  ].map((step) => (
                    <div key={step.num} className="grid grid-cols-[56px_1fr] gap-4 py-7 items-start">
                      <p className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "clamp(1.75rem, 2.5vw, 2.25rem)" }} aria-hidden="true">{step.num}</p>
                      <p className="font-bold text-[#111318] leading-tight pt-1" style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1.0625rem" }}>{step.body}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-3">Prefer to talk first?</p>
                  <a href="tel:+19516964495" className="text-base font-bold text-[#D42027] underline underline-offset-2 hover:text-[#B01C22] transition-colors" style={{ fontFamily: "var(--font-dm-sans)" }} aria-label="Call Gardner Air">(951) 696-4495</a>
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-[#E5E1D8] bg-white open:bg-[#FAF8F4] open:border-ga-red/30 hover:border-ga-red/25 open:shadow-[0_1px_3px_rgba(17,19,24,0.04)] transition-colors duration-200">
      <summary className="flex items-center justify-between gap-4 px-5 py-5 lg:px-6 lg:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <h3 className="font-semibold text-ga-black text-base lg:text-lg leading-snug" style={{ fontFamily: "var(--font-dm-sans)" }}>{question}</h3>
        <span className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-[#F7F6F3] text-ga-gray-600 group-open:bg-ga-red group-open:text-white transition-colors duration-200">
          <ChevronDown size={18} className="transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
        </span>
      </summary>
      <p className="px-5 pb-5 lg:px-6 lg:pb-6 text-base text-ga-gray-600 leading-relaxed max-w-2xl">{answer}</p>
    </details>
  );
}
