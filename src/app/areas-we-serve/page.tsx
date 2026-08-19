import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Shield,
  Zap,
  MapPin,
  Clock,
  Wrench,
  MessageSquare,
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
    "Commercial HVAC Service Areas — Southern California | Gardner Air",
  description:
    "Gardner Air serves commercial HVAC clients across Riverside, San Bernardino, and Orange County — certified technicians, proactive maintenance, and rapid repairs.",
  alternates: {
    canonical: "https://gardnerair.com/areas-we-serve/",
  },
  openGraph: {
    title:
      "Commercial HVAC Service Areas — Southern California | Gardner Air",
    description:
      "Gardner Air serves commercial HVAC clients across Riverside, San Bernardino, and Orange County — certified technicians, proactive maintenance, and rapid repairs.",
    url: "https://gardnerair.com/areas-we-serve/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const hubSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial HVAC Services — Southern California",
  description:
    "Gardner Air provides commercial HVAC preventative maintenance, repair, replacement, and installation across three Southern California counties.",
  url: "https://gardnerair.com/areas-we-serve/",
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
  },
  areaServed: [
    { "@type": "County", name: "Riverside County" },
    { "@type": "County", name: "San Bernardino County" },
    { "@type": "County", name: "Orange County" },
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
      name: "Areas We Serve",
      item: "https://gardnerair.com/areas-we-serve/",
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

const REGIONS = [
  {
    name: "Riverside County",
    slug: "riverside",
    href: "/areas-we-serve/riverside/",
    image: "/Areas/Riverside.webp",
    imageAlt: "Commercial HVAC service in Riverside County, California",
    blurb:
      "From Murrieta and Temecula to Moreno Valley and Palm Springs, Gardner Air maintains and repairs commercial HVAC systems across the full Inland Empire stretch of Riverside County.",
    hasDark: false,
  },
  {
    name: "San Bernardino County",
    slug: "san-bernardino-county-ca",
    href: "/areas-we-serve/san-bernardino-county-ca/",
    image: "/Areas/San-Bernardino.webp",
    imageAlt: "Commercial HVAC service in San Bernardino County, California",
    blurb:
      "San Bernardino County's commercial facilities face extreme heat swings and heavy industrial loads. Gardner Air's certified technicians deliver proactive maintenance and fast repair response across the High Desert and Inland Valley.",
    hasDark: false,
  },
  {
    name: "Orange County",
    slug: "orange-county",
    href: "/areas-we-serve/orange-county/",
    image: "/Areas/Orange-County.webp",
    imageAlt: "Commercial HVAC service in Orange County, California",
    blurb:
      "Orange County's coastal humidity and dense commercial real estate demand HVAC partners who plan ahead. Gardner Air serves office parks, industrial campuses, and owner-occupied facilities from Anaheim to Irvine.",
    hasDark: false,
  },
];

const FEATURES = [
  {
    Icon: MapPin,
    title: "Regional Coverage Without Gaps",
    body: "Three-county Southern California footprint — Riverside, San Bernardino, and Orange. One partner covers it all, with no handoff between vendors.",
  },
  {
    Icon: Award,
    title: "Factory-Trained, Multi-Certified Technicians",
    body: "NATE-certified, EPA-certified, and factory-trained on Carrier, York, Trane, and other major commercial brands. The technicians who visit your facility are specialists, not generalists.",
  },
  {
    Icon: MessageSquare,
    title: "Same-Day Service Reports",
    body: "Every visit is documented. Service reports arrive the same day — equipment readings, tasks completed, and any items requiring follow-up. No chasing down paperwork.",
  },
  {
    Icon: Wrench,
    title: "Full-Scope Every Visit",
    body: "Gardner Air sells complete maintenance scope per visit, not time-blocks. Your equipment gets the full inspection regardless of how long it takes.",
  },
  {
    Icon: Clock,
    title: "Rapid Repair Response",
    body: "Maintenance-agreement clients receive priority dispatch across all three counties. Arrival windows confirmed on every call so your facility team can plan.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function AreasWeServePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(hubSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main id="main-content">

        {/* ------------------------------------------------------------------ */}
        {/* Hero                                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="areas-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/areasweservebackground.webp"
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
                <li className="text-white/60">Areas We Serve</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Southern California Service Area
            </p>

            <h1
              id="areas-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8 max-w-4xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Commercial HVAC for{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">Southern California.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air&rsquo;s certified technicians keep your HVAC running smoothly
              with proactive maintenance, rapid repairs, and targeted upgrades.
            </p>

            <Link
              href="#hub-contact"
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
        {/* Intro                                                               */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Our Coverage
                </p>
                <h2
                  id="intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  From Desert Heat to Coastal Breeze, Our Southern California HVAC Coverage
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Southern California&rsquo;s commercial HVAC landscape is one of the most demanding in the country.
                    From the high-desert heat of San Bernardino County to the coastal humidity of Orange County, your
                    equipment faces conditions that expose every maintenance gap.
                  </p>
                  <p>
                    Gardner Air operates across Riverside County, San Bernardino County, and Orange
                    County&mdash;a single-partner relationship that covers the full scope of your facilities without
                    handoffs between regional vendors.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/commercial-roof-overview.webp"
                    alt="Aerial view of commercial rooftop HVAC units across a Southern California facility served by Gardner Air"
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
                    3
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Counties served
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      One team · One standard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Region Cards Grid                                                   */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="regions-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14 lg:mb-16">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Service Regions
              </p>
              <h2
                id="regions-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Three counties, one commercial HVAC partner.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
              {REGIONS.map((region) => (
                <Link
                  key={region.name}
                  href={region.href}
                  className="group relative flex flex-col overflow-hidden rounded-2xl bg-white border border-[#D8D4CC] hover:border-[#D42027]/40 hover:shadow-[0_10px_40px_-12px_rgba(17,19,24,0.15)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={region.image!}
                      alt={region.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-[#111318]/45 via-[#111318]/10 to-transparent"
                    />
                  </div>
                  <div className="flex flex-col gap-4 p-7 lg:p-8">
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className="font-bold text-[#111318] leading-tight tracking-[-0.015em]"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(1.375rem, 2vw, 1.625rem)",
                        }}
                      >
                        {region.name}
                      </h3>
                      <span
                        className="mt-1 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-[#D8D4CC] text-[#111318] group-hover:border-[#D42027] group-hover:bg-[#D42027] group-hover:text-white transition-colors"
                        aria-hidden="true"
                      >
                        <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </div>
                    <p className="text-[15px] text-[#6B7280] leading-relaxed">
                      {region.blurb}
                    </p>
                    <span
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#111318] group-hover:text-[#D42027] transition-colors mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Explore {region.name}
                      <ArrowRight size={14} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>


        {/* ------------------------------------------------------------------ */}
        {/* Mid CTA band                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Schedule a free HVAC assessment"
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
                Free Assessment
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Take Charge of Your HVAC Reliability
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Schedule a free site assessment with a Gardner Air technician. We&rsquo;ll evaluate your equipment,
                document the current condition, and recommend a maintenance scope built for your facility.
              </p>
              <Link
                href="#hub-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Schedule My Assessment
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Feature List                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="features-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Why Gardner Air
              </p>
              <h2
                id="features-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Gardner Air Delivers Rapid, Reliable HVAC Service
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {FEATURES.map((f) => (
                <div
                  key={f.title}
                  className="rounded-2xl bg-white border border-[#D8D4CC] p-7 lg:p-8 grid grid-cols-1 lg:grid-cols-[56px_1fr] gap-5 lg:gap-8 items-start hover:border-[#D42027]/30 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#D42027]/8 flex items-center justify-center flex-shrink-0">
                    <f.Icon size={18} className="text-[#D42027]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3
                      className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-2"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(1.0625rem, 1.5vw, 1.125rem)",
                      }}
                    >
                      {f.title}
                    </h3>
                    <p className="text-base text-[#6B7280] leading-relaxed">
                      {f.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Contact Form                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="hub-contact"
          aria-labelledby="hub-form-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Schedule Your HVAC Services"
                  subhead="Tell us about your facility and your county. Our team will follow up within one business day to schedule a site walkthrough."
                  submitLabel="Schedule My Services"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We confirm your facility location and equipment" },
                    { num: "02", body: "A technician schedules a site walkthrough" },
                    { num: "03", body: "You receive a written maintenance proposal" },
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
