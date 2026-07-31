import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Award, Shield, Zap } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title:
    "Field Notes & Insights — Commercial HVAC Guidance from Gardner Air",
  description:
    "Technical field notes and long-form commercial HVAC guidance from the Gardner Air team — maintenance strategy, equipment longevity, energy performance, and facility-manager know-how across Southern California.",
  alternates: {
    canonical: "https://gardnerair.com/blog/",
  },
  openGraph: {
    title:
      "Field Notes & Insights — Commercial HVAC Guidance from Gardner Air",
    description:
      "Technical field notes and long-form commercial HVAC guidance from the Gardner Air team.",
    url: "https://gardnerair.com/blog/",
  },
};

/* ------------------------------------------------------------------ */
/* Data — placeholder post index. Replace with real MDX/CMS entries    */
/* once content is written. Cards route to `#` until posts exist.      */
/* ------------------------------------------------------------------ */
const CATEGORIES = [
  "All",
  "Preventative Maintenance",
  "Repair & Diagnostics",
  "Building Automation",
  "Energy & Efficiency",
  "Facility Manager Playbook",
];

type Post = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  imageAlt: string;
};

const FEATURED: Post = {
  slug: "/blog/how-preventative-hvac-maintenance-tracking-prevents-repeat-equipment-failures/",
  title:
    "How Preventative HVAC Maintenance Tracking Prevents Repeat Equipment Failures",
  dek: "When the same rooftop unit fails for the third time in two years, the real problem is almost never bad luck — it's the absence of a documented service history. Here's how proper maintenance tracking turns reactive repair calls into informed planning.",
  category: "Preventative Maintenance",
  readTime: "6 min read",
  date: "May 26, 2026",
  image: "/preventative-maintenance-tracking-prevents-repeat-failures.webp",
  imageAlt:
    "Gardner Air technician documenting commercial HVAC preventative maintenance findings on a tablet for a customer portal service record",
};

const POSTS: Post[] = [
  {
    slug: "/blog/how-hvac-preventative-maintenance-saves-property-managers-thousands-annually/",
    title:
      "How HVAC Preventative Maintenance Saves Property Managers Thousands Annually",
    dek: "Where the savings come from — cost predictability, energy efficiency, extended equipment life, and portfolio-level planning that a strong preventative program delivers.",
    category: "Preventative Maintenance",
    readTime: "7 min read",
    date: "April 27, 2026",
    image: "/BLOG/hvac-preventative-maintenance-saves-property-managers-thousands.webp",
    imageAlt:
      "Commercial HVAC preventative maintenance program helping property managers control repair costs and extend equipment life",
  },
  {
    slug: "/blog/commercial-hvac-repair-or-replacement-warning-signs-you-should-not-ignore/",
    title:
      "Commercial HVAC Repair or Replacement: Warning Signs You Should Not Ignore",
    dek: "The early warning signs that separate a manageable repair from a full-scale operational crisis — uneven temps, rising bills, aging equipment, and the repair-vs-replace math.",
    category: "Repair & Diagnostics",
    readTime: "7 min read",
    date: "March 31, 2026",
    image: "/BLOG/commercial-hvac-repair-or-replacement-warning-signs.webp",
    imageAlt:
      "Commercial HVAC rooftop unit showing warning signs that a facility manager should evaluate for repair versus replacement",
  },
  {
    slug: "#",
    title: "Building Automation Migrations: Moving Off Legacy Front-Ends Without Losing Control",
    dek: "How we phase multi-building BAS migrations so facilities keep running, occupants don't notice, and the new platform actually gets used by the people who need it.",
    category: "Building Automation",
    readTime: "8 min read",
    date: "Coming soon",
    image: "/Gardner-Air-HVAC-equipment-panel-1030x644.webp",
    imageAlt:
      "Building automation control panel migrated by Gardner Air to a modern platform",
  },
  {
    slug: "#",
    title: "Refrigerant Transitions Are Here: What Owners Should Do This Year, Next Year, and Before 2030",
    dek: "The phase-down is real, the pricing is already moving, and the equipment cycle matters. A pragmatic plan for owners with mixed R-410A, R-454B, and R-32 fleets.",
    category: "Energy & Efficiency",
    readTime: "10 min read",
    date: "Coming soon",
    image: "/Gardner-Air-HVAC-equipment-pipes-1030x644.webp",
    imageAlt:
      "Refrigerant piping serviced by Gardner Air as part of a fleet-wide refrigerant transition plan",
  },
  {
    slug: "#",
    title: "The First 90 Days on a New Maintenance Account: Our Onboarding Playbook",
    dek: "Nameplate audit, base-lining, deferred-maintenance triage, and how we set the reporting cadence so leadership sees value inside the first quarter.",
    category: "Facility Manager Playbook",
    readTime: "7 min read",
    date: "Coming soon",
    image: "/Gardner-Air-HVAC-equipment-electrical-panel-1030x644.webp",
    imageAlt:
      "Gardner Air onboarding process for new commercial HVAC maintenance accounts across Southern California",
  },
  {
    slug: "#",
    title: "Why Your Warehouse VAV Boxes Are Fighting the Rooftops — And What to Do About It",
    dek: "Field-diagnostic notes from a large-footprint distribution facility where the terminal units and the RTUs had drifted into open combat. The fix wasn't a control-loop retune.",
    category: "Repair & Diagnostics",
    readTime: "6 min read",
    date: "Coming soon",
    image: "/Gardner-Air-HVAC-equipment-boiler-room-1030x644.webp",
    imageAlt:
      "Warehouse HVAC diagnostics performed by Gardner Air on rooftop units and VAV terminal boxes",
  },
];

const TRUST_BADGES = [
  { Icon: Award, text: "Written by NATE-Certified Techs" },
  { Icon: Shield, text: "Field-Tested, Not Rewritten AI" },
  { Icon: Zap, text: "New Notes Monthly" },
];

const CERT_LOGOS = [
  { src: "/diamond-contractor.webp", alt: "Diamond Contractor — Elite Factory-Authorized Dealer", widthClass: "w-28 lg:w-36" },
  { src: "/epa-logo.webp", alt: "EPA Certified — Environmental Protection Agency", widthClass: "w-14 lg:w-16" },
  { src: "/nate-logo.webp", alt: "NATE Certified — North American Technician Excellence", widthClass: "w-14 lg:w-16" },
  { src: "/nci-logo.webp", alt: "NCI Certified — National Comfort Institute", widthClass: "w-24 lg:w-28" },
  { src: "/york-logo.webp", alt: "York Authorized — Factory-Authorized Dealer", widthClass: "w-20 lg:w-24" },
];

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  url: "https://gardnerair.com/blog/",
  name: "Field Notes & Insights — Gardner Air",
  description:
    "Technical field notes and long-form commercial HVAC guidance from the Gardner Air team.",
  publisher: {
    "@type": "Organization",
    name: "Gardner Air",
    url: "https://gardnerair.com/",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
    { "@type": "ListItem", position: 2, name: "Field Notes & Insights", item: "https://gardnerair.com/blog/" },
  ],
};

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function BlogIndexPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main id="main-content">

        {/* ---- Hero ---- */}
        <section
          aria-labelledby="blog-hero-heading"
          className="relative isolate overflow-hidden bg-ga-charcoal-footer pt-[140px] lg:pt-[180px]"
        >
          <Image
            src="/Gardner-Air-HVAC-equipment-boiler-room-1030x644.webp"
            alt=""
            fill
            priority
            aria-hidden="true"
            sizes="100vw"
            className="object-cover object-[50%_40%] opacity-40 pointer-events-none select-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-ga-charcoal-footer via-ga-charcoal-footer/85 to-ga-charcoal-footer/55 pointer-events-none"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 mb-16 lg:mb-24">
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">Home</Link>
                </li>
                <li aria-hidden="true">·</li>
                <li className="text-white/80">Field Notes</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-5">
              Insights &amp; Field Notes
            </p>
            <h1
              id="blog-hero-heading"
              className="font-bold text-white leading-[0.95] tracking-tight mb-6 max-w-4xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 5vw, 4rem)",
              }}
            >
              Technical field notes for people who own the equipment.
            </h1>
            <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-2xl">
              Long-form commercial HVAC guidance from the Gardner Air team &mdash;
              maintenance strategy, equipment longevity, energy performance, and
              the kind of facility-manager know-how we usually only share
              on-site. Written by the technicians and supervisors doing the
              work, not repackaged from someone else&rsquo;s manual.
            </p>

            {/* TECH_READOUT */}
            <dl className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 max-w-3xl border-t border-white/10 pt-8">
              {[
                { k: "Section", v: "Field Notes" },
                { k: "Cadence", v: "Monthly" },
                { k: "Authors", v: "Gardner Air Techs" },
                { k: "Focus", v: "Commercial HVAC" },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-2">
                    {row.k}
                  </dt>
                  <dd
                    className="font-bold text-white text-sm lg:text-base"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative z-10" aria-label="Editorial standards">
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

        {/* ---- Credentials strip ---- */}
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

        {/* ---- Featured post ---- */}
        <section
          aria-labelledby="featured-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Featured
                </p>
                <h2
                  id="featured-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  This month&rsquo;s field note
                </h2>
              </div>
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280]">
                Long read · {FEATURED.readTime}
              </p>
            </div>

            <article className="group grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 items-start">
              <Link
                href={FEATURED.slug}
                className="relative aspect-[16/10] lg:aspect-[4/3] rounded-2xl overflow-hidden block"
                aria-label={FEATURED.title}
              >
                <Image
                  src={FEATURED.image}
                  alt={FEATURED.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(30,33,38,0) 55%, rgba(30,33,38,0.55) 100%)",
                  }}
                  aria-hidden="true"
                />
                <span className="absolute top-4 left-4 inline-flex items-center h-7 px-3 rounded bg-white/95 text-[10px] font-mono font-semibold uppercase tracking-[0.15em] text-[#D42027]">
                  Featured
                </span>
              </Link>

              <div className="lg:pt-4">
                <div className="flex items-center gap-3 mb-5">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027]">
                    {FEATURED.category}
                  </span>
                  <span className="text-[#D8D4CC]" aria-hidden="true">·</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B7280]">
                    {FEATURED.date}
                  </span>
                </div>
                <h3
                  className="font-bold text-[#111318] leading-[1.05] tracking-tight mb-5"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  }}
                >
                  <Link href={FEATURED.slug} className="hover:text-[#D42027] transition-colors">
                    {FEATURED.title}
                  </Link>
                </h3>
                <p className="text-base lg:text-lg text-[#6B7280] leading-relaxed mb-8 max-w-xl">
                  {FEATURED.dek}
                </p>
                <Link
                  href={FEATURED.slug}
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold border-2 border-[#111318] text-[#111318] hover:bg-[#111318] hover:text-white transition-colors min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Read the field note
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* ---- Category filter + post grid ---- */}
        <section
          aria-labelledby="notes-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16 items-end mb-10 lg:mb-14">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  All Field Notes
                </p>
                <h2
                  id="notes-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Notes from the field &mdash; and from the mechanical room
                </h2>
              </div>
              <p className="text-base lg:text-lg text-[#6B7280] leading-relaxed">
                Every post is written or reviewed by a Gardner Air technician
                or supervisor. No AI slop, no ghostwritten filler &mdash; just
                the guidance we&rsquo;d give a facility manager over coffee
                after walking their roof.
              </p>
            </div>

            {/* Category chips (visual only until real filtering exists) */}
            <div
              className="flex flex-wrap gap-2 mb-10 lg:mb-14"
              role="list"
              aria-label="Field note categories"
            >
              {CATEGORIES.map((cat, i) => (
                <span
                  key={cat}
                  role="listitem"
                  className={`inline-flex items-center h-9 px-4 rounded-full font-mono text-[10px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                    i === 0
                      ? "bg-[#111318] text-white"
                      : "bg-white text-[#6B7280] border border-[#D8D4CC] hover:border-[#111318] hover:text-[#111318] cursor-default"
                  }`}
                >
                  {cat}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {POSTS.map((post) => (
                <article
                  key={post.title}
                  className="group flex flex-col rounded-2xl border border-[#D8D4CC] bg-white overflow-hidden hover:border-[#D42027]/40 hover:shadow-[0_20px_50px_-24px_rgba(212,32,39,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Link href={post.slug} className="relative aspect-[16/10] overflow-hidden block">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </Link>
                  <div className="flex flex-col gap-4 p-6 lg:p-7 flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027]">
                        {post.category}
                      </span>
                      <span className="text-[#D8D4CC]" aria-hidden="true">·</span>
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#6B7280]">
                        {post.readTime}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-[#111318] leading-tight tracking-[-0.01em]"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "1.25rem",
                      }}
                    >
                      <Link href={post.slug} className="group-hover:text-[#D42027] transition-colors">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-[14.5px] text-[#6B7280] leading-relaxed flex-1">
                      {post.dek}
                    </p>
                    <div className="pt-4 border-t border-[#D8D4CC] flex items-center justify-between">
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280]">
                        {post.date}
                      </span>
                      <Link
                        href={post.slug}
                        className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#111318] group-hover:text-[#D42027] transition-colors"
                        aria-label={`Read: ${post.title}`}
                      >
                        Read note
                        <ArrowUpRight size={12} aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </article>
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
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
                  Beyond the Article
                </p>
                <h2
                  className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  Reading is fine. A walk-through is better.
                </h2>
                <p className="text-white/65 text-base leading-relaxed mb-8">
                  If any of these notes describe a problem you&rsquo;re
                  actually seeing on your equipment, skip the blog and talk to
                  a supervisor. We do complimentary site walks for commercial
                  facilities in Riverside, San Bernardino, and Orange counties.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Request a Site Walk
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a
                  href="tel:+19516964495"
                  className="inline-flex items-center gap-2 h-12 px-6 text-sm font-bold text-white/80 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Or call (951) 696-4495
                </a>
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
