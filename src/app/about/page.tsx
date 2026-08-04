import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronDown, Star, Award, Shield, Zap } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "About Gardner Air — Commercial HVAC Since 2006 | Southern California",
  description:
    "Founded in 2006 by Dirk Gardner, Gardner Air is a Southern California commercial HVAC service company grounded in experience, built on relationships, and focused on long-term performance.",
  alternates: {
    canonical: "https://gardnerair.com/about/",
  },
  openGraph: {
    title: "About Gardner Air — Commercial HVAC Since 2006 | Southern California",
    description:
      "Founded in 2006 by Dirk Gardner, Gardner Air is a Southern California commercial HVAC service company grounded in experience, built on relationships, and focused on long-term performance.",
    url: "https://gardnerair.com/about/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  url: "https://gardnerair.com/about/",
  mainEntity: {
    "@type": "HVACBusiness",
    name: "Gardner Air",
    founder: { "@type": "Person", name: "Dirk Gardner" },
    foundingDate: "2006",
    description:
      "Southern California commercial HVAC service company specializing in preventative maintenance, repair, replacement, installation, and building automation for commercial facilities.",
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
    hasCredential: [
      { "@type": "EducationalOccupationalCredential", name: "California Contractors License B" },
      { "@type": "EducationalOccupationalCredential", name: "California Contractors License C20" },
      { "@type": "EducationalOccupationalCredential", name: "California Contractors License C4" },
      { "@type": "EducationalOccupationalCredential", name: "NATE Certified Technicians" },
      { "@type": "EducationalOccupationalCredential", name: "NCI Certified" },
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

const CERT_LOGOS = [
  { src: "/diamond-contractor.webp", alt: "Diamond Contractor — Elite Factory-Authorized Dealer", widthClass: "w-28 lg:w-36" },
  { src: "/epa-logo.webp", alt: "EPA Certified — Environmental Protection Agency", widthClass: "w-14 lg:w-16" },
  { src: "/nate-logo.webp", alt: "NATE Certified — North American Technician Excellence", widthClass: "w-14 lg:w-16" },
  { src: "/nci-logo.webp", alt: "NCI Certified — National Comfort Institute", widthClass: "w-24 lg:w-28" },
  { src: "/york-logo.webp", alt: "York Authorized — Factory-Authorized Dealer", widthClass: "w-20 lg:w-24" },
];

const TEAM_PRINCIPLES = [
  {
    num: "01",
    eyebrow: "Certification & Training",
    title: "Certified Technicians, Continuously Trained",
    body: "Every technician is NATE-certified and trained through the National Comfort Institute. Our supervisors and office team meet bi-weekly to review active accounts, calibrate on new equipment, and stay sharp on evolving commercial standards.",
  },
  {
    num: "02",
    eyebrow: "Prevention-First",
    title: "Prevention Over Reaction",
    body: "Rather than just fixing problems, we prevent them. Our maintenance programs are engineered to reduce breakdowns, improve system performance, and cut operating costs over the life of the equipment.",
  },
  {
    num: "03",
    eyebrow: "Full-Scope Standard",
    title: "Full-Scope Service on Every Visit",
    body: "We sell the complete maintenance scope per visit — not a fixed block of technician time. Whether we're on a chiller, a ductless system, or custom built-up equipment, the job gets done right the first time.",
  },
  {
    num: "04",
    eyebrow: "Long-Term Partnership",
    title: "Long-Term Partnership, Not Transactions",
    body: "The facilities we serve stay with us for years because we treat their equipment like our own. Fast response, clear communication, and reliable coordination — that's the standard.",
  },
];

const REVIEWS = [
  {
    name: "Bulmaro Gonzalez",
    body: "Really good service, they take care of you. Customer service great 10+.",
  },
  {
    name: "Diana Dreibelbis",
    body: "We have used Gardner Air for several years. Shout out to Dirk and our tech Brandon who keep our older air conditioner running great with reasonable prices.",
  },
  {
    name: "Dana Wood",
    body: "Best HVAC experts. Owner is one of the smartest, most honest people I've met.",
  },
  {
    name: "Kelly Crull",
    body: "5-star rating.",
  },
];

const PORTFOLIO_IMAGES = [
  {
    src: "/Gardner-Air-HVAC-equipment-close-up-1030x644.webp",
    alt: "Close-up of commercial HVAC equipment serviced by Gardner Air in Southern California",
  },
  {
    src: "/Gardner-Air-HVAC-equipment-in-basement-1030x644.webp",
    alt: "Commercial HVAC equipment installed in a basement mechanical room by Gardner Air",
  },
  {
    src: "/Gardner-Air-HVAC-equipment-boiler-room-1030x644.webp",
    alt: "Commercial boiler room HVAC equipment maintained by Gardner Air in Southern California",
  },
  {
    src: "/Gardner-Air-HVAC-equipment-electrical-panel-1030x644.webp",
    alt: "Electrical panel serving commercial HVAC equipment installed by Gardner Air",
  },
  {
    src: "/Gardner-Air-HVAC-equipment-Hi-Delta-1030x644.webp",
    alt: "Hi-Delta commercial boiler system serviced by Gardner Air",
  },
  {
    src: "/Gardner-Air-HVAC-equipment-panel-1030x644.webp",
    alt: "Commercial HVAC control panel installed by Gardner Air",
  },
  {
    src: "/Gardner-Air-HVAC-equipment-pipes-1030x644.webp",
    alt: "Commercial HVAC piping system installed and maintained by Gardner Air",
  },
  {
    src: "/Gardner-Air-line-of-trucks-1030x644.webp",
    alt: "Line of Gardner Air commercial HVAC service trucks",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "When was Gardner Air founded, and what's the company's background?",
    a: "Gardner Air was founded in 2006 by Dirk Gardner, who brought more than 30 years of hands-on HVAC experience to the business. From day one, the company was built around a service-first philosophy — do the job right, every time — and that principle still drives how we hire, train, and operate today.",
  },
  {
    q: "Does Gardner Air service residential HVAC systems?",
    a: "No. We are a commercial-only HVAC contractor. Our team specializes in the equipment and systems that keep facilities running — package units, split systems, ductless, chillers, cooling towers, boilers, computer-room units, refrigeration, humidification, and dehumidification. This focus lets us go deeper on commercial equipment instead of splitting attention with residential work.",
  },
  {
    q: "What licenses and certifications does Gardner Air hold?",
    a: "Gardner Air holds California contractor licenses B (General Building), C20 (HVAC), and C4 (Boiler, Hot-Water Heating and Steam Fitting). Every field technician is NATE-certified and trained through the National Comfort Institute (NCI), and our supervisors and office staff meet bi-weekly to stay current on equipment, code, and best practices.",
  },
  {
    q: "What areas of Southern California do you serve?",
    a: "We serve commercial facilities across Southern California, with primary coverage of Riverside County, San Bernardino County, and Orange County from our Murrieta headquarters. If you're managing a commercial property in the region and aren't sure whether you fall inside our service area, call us at (951) 696-4495 and we'll tell you straight.",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://gardnerair.com/about/" },
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

        {/* ---- Hero ---- */}
        <section
          aria-labelledby="about-hero-heading"
          className="relative isolate overflow-hidden bg-ga-charcoal-footer pt-[140px] lg:pt-[180px]"
        >
          <Image
            src="/gardner-air-fleet.webp"
            alt=""
            fill
            priority
            aria-hidden="true"
            sizes="100vw"
            className="object-cover object-[50%_62%] opacity-45 pointer-events-none select-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-ga-charcoal-footer via-ga-charcoal-footer/85 to-ga-charcoal-footer/55 pointer-events-none"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 mb-16 lg:mb-24">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-5">
              About Gardner Air
            </p>
            <h1
              id="about-hero-heading"
              className="font-bold text-white leading-[0.95] tracking-tight mb-6 max-w-4xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              Grounded in experience. Built on relationships.
            </h1>
            <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-2xl">
              Gardner Air is a Southern California commercial HVAC service
              company &mdash; founded in 2006, family-run out of Murrieta,
              and focused on long-term performance for the facilities we
              serve. Full-scope maintenance, certified technicians, and the
              kind of partnership facilities managers rely on year after
              year.
            </p>
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
        {/* Founder story — asymmetric two-column                               */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="story-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">

              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Our Story
                </p>
                <h2
                  id="story-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  HVAC Solutions Built on a Commitment to Doing Things Right
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Gardner Air was started in 2006 by Dirk Gardner, a
                    service-first HVAC expert with over 30 years in the field.
                    He built the company around one simple belief: do the job
                    right, every time.
                  </p>
                  <p>
                    Today, Gardner Air supports commercial facilities across
                    Southern California with certified technicians, responsive
                    office staff, and experienced supervisors who train
                    bi-weekly to stay sharp. We hold California contractor
                    licenses B, C20, and C4, and specialize in systems that
                    need reliable solutions built for long-term performance.
                  </p>
                </div>

                {/* Stats — inline pair */}
                <div className="mt-10 grid grid-cols-2 border-t border-b border-[#D8D4CC]">
                  <div className="py-6 pr-6 flex flex-col gap-1">
                    <p
                      className="tabular-nums font-bold text-[#D42027] leading-none"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                      }}
                    >
                      20
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Years of experience
                    </p>
                  </div>
                  <div className="py-6 pl-6 border-l border-[#D8D4CC] flex flex-col gap-1">
                    <p
                      className="tabular-nums font-bold text-[#D42027] leading-none"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                      }}
                    >
                      9
                    </p>
                    <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Certifications held
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/TEAM/gardner-team-photo.webp"
                    alt="Gardner Air team of commercial HVAC technicians and office staff serving Southern California"
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
                    2006
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Founded in Murrieta
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Family-run · Southern California
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Team & Principles — numbered editorial list                         */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="team-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">

              <div className="lg:sticky lg:top-32">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Our Team
                </p>
                <h2
                  id="team-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  A Team That Knows the Work &mdash; and Stands Behind It
                </h2>
                <p className="text-base text-[#6B7280] leading-relaxed mb-8 max-w-md">
                  Certified technicians. Prevention-first discipline. Full
                  maintenance scope on every visit. And relationships that
                  outlast a single service call &mdash; the standards that
                  define how Gardner Air operates.
                </p>

                <a
                  href="https://www.google.com/search?q=Gardner+Air+Murrieta+CA+reviews"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors duration-200 min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Read Our Reviews
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>

              <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC]">
                {TEAM_PRINCIPLES.map((p) => (
                  <div
                    key={p.num}
                    className="grid grid-cols-[80px_1fr] lg:grid-cols-[120px_1fr] gap-6 lg:gap-10 py-10 lg:py-12 items-start"
                  >
                    <p
                      className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                      }}
                      aria-hidden="true"
                    >
                      {p.num}
                    </p>
                    <div>
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-3">
                        {p.eyebrow}
                      </p>
                      <h3
                        className="font-bold text-ga-black leading-tight tracking-[-0.02em] mb-3"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontSize: "clamp(1.375rem, 2vw, 1.75rem)",
                        }}
                      >
                        {p.title}
                      </h3>
                      <p className="text-base text-ga-gray-600 leading-relaxed">
                        {p.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Reviews                                                             */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="reviews-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12 lg:mb-16">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Client Reviews
                </p>
                <h2
                  id="reviews-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  What Our Clients Say
                </h2>
              </div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                Sourced from Google
              </p>
            </div>

            {/* Mobile: horizontal scroll-snap carousel. md+: 2-col grid. lg+: 4-col grid. */}
            <div className="flex overflow-x-auto snap-x snap-mandatory gap-5 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-4">
              {REVIEWS.map((r) => (
                <article
                  key={r.name}
                  className="snap-start shrink-0 w-[85%] sm:w-[70%] md:w-auto rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] p-6 lg:p-7 flex flex-col gap-4 h-full"
                >
                  <div className="flex items-center gap-1" aria-label="5-star rating">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-[#D42027] fill-[#D42027]"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="text-[15px] text-[#111318] leading-relaxed flex-1">
                    &ldquo;{r.body}&rdquo;
                  </p>
                  <div className="pt-4 border-t border-[#D8D4CC] flex items-center justify-between">
                    <p
                      className="font-bold text-[#111318] text-sm"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      {r.name}
                    </p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280]">
                      Google
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Portfolio grid                                                      */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="portfolio-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-end mb-12 lg:mb-16">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Our Portfolio
                </p>
                <h2
                  id="portfolio-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Facilities We&rsquo;ve Kept Running
                </h2>
              </div>
              <div className="flex flex-col gap-6">
                <p className="text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  Gardner Air has worked with clients across Southern California
                  in industries ranging from education to warehousing. Our team
                  has delivered HVAC solutions for private colleges,
                  distribution centers, and multi-tenant commercial properties.
                  Every job reflects our commitment to system efficiency,
                  building comfort, and professional integrity.
                </p>
                <Link
                  href="/portfolio/"
                  className="inline-flex items-center gap-2 self-start text-sm font-bold text-[#D42027] hover:text-[#B01C22] transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Explore the Portfolio
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-5">
              {PORTFOLIO_IMAGES.map((img) => (
                <div
                  key={img.src}
                  className="relative aspect-square rounded-xl overflow-hidden group"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Mid CTA band ---- */}
        <section
          aria-label="Schedule commercial HVAC service"
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
                Partner With Gardner Air
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Ready to Get Long-Term Performance Out of Your HVAC Systems?
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Talk to our team about a maintenance program built around your
                facility, your equipment, and the way your building actually
                operates.
              </p>
              <Link
                href="#about-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Schedule My Service
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* FAQ                                                                 */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="about-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div>
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                FAQ
              </p>
              <h2
                id="about-faq-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                }}
              >
                Frequently Asked Questions About Our Approach to HVAC Services
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
                      Every facility has a different equipment mix and a
                      different set of operational priorities. If you want a
                      straight answer about scope, response times, or how we
                      structure a maintenance agreement, our team responds
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
          id="about-contact"
          aria-labelledby="about-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Tell Us About Your Commercial HVAC Needs"
                  subhead="Contact us to help your systems last longer, run smoother, and cost less to maintain."
                  submitLabel="Schedule My Service"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We review your facility and equipment mix" },
                    { num: "02", body: "Our team scopes a maintenance or service plan" },
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
