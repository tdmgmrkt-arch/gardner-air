import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";

/* ------------------------------------------------------------------ */
/* Post meta                                                            */
/* ------------------------------------------------------------------ */
const POST = {
  slug: "commercial-hvac-repair-or-replacement-warning-signs-you-should-not-ignore",
  title:
    "Commercial HVAC Repair or Replacement: Warning Signs You Should Not Ignore",
  dek: "Ignoring the early warning signs of a failing HVAC system can turn a manageable commercial HVAC repair into a full-scale operational crisis. Learn what to watch for, what it means, and when it is time to act.",
  category: "Repair & Diagnostics",
  readTime: "7 min read",
  date: "March 31, 2026",
  dateISO: "2026-03-31",
  image: "/BLOG/commercial-hvac-repair-or-replacement-warning-signs.webp",
  imageAlt:
    "Commercial HVAC rooftop unit showing warning signs that a facility manager should evaluate for repair versus replacement",
  url: "https://gardnerair.com/blog/commercial-hvac-repair-or-replacement-warning-signs-you-should-not-ignore/",
};

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: `${POST.title} | Gardner Air`,
  description:
    "Uneven temperatures, rising energy costs, frequent breakdowns — the early warning signs your commercial HVAC system needs repair or replacement, and how to decide between them.",
  alternates: {
    canonical: POST.url,
  },
  openGraph: {
    title: POST.title,
    description:
      "Uneven temperatures, rising energy costs, frequent breakdowns — the early warning signs your commercial HVAC system needs repair or replacement, and how to decide between them.",
    url: POST.url,
    type: "article",
    images: [
      {
        url: `https://gardnerair.com${POST.image}`,
        width: 1536,
        height: 864,
        alt: POST.imageAlt,
      },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: POST.title,
  description:
    "Warning signs your commercial HVAC system needs repair or replacement — inconsistent temperatures, rising energy bills, unusual noises and odors, frequent breakdowns, aging equipment, and undersized systems.",
  image: [`https://gardnerair.com${POST.image}`],
  datePublished: POST.dateISO,
  dateModified: POST.dateISO,
  author: {
    "@type": "Organization",
    name: "Gardner Air",
    url: "https://gardnerair.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "Gardner Air",
    url: "https://gardnerair.com/",
    logo: {
      "@type": "ImageObject",
      url: "https://gardnerair.com/gardner-air-logo.webp",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": POST.url,
  },
  articleSection: POST.category,
  keywords: [
    "commercial HVAC repair",
    "commercial HVAC replacement",
    "HVAC warning signs",
    "HVAC repair vs replace",
    "commercial HVAC Orange County",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
    { "@type": "ListItem", position: 2, name: "Field Notes", item: "https://gardnerair.com/blog/" },
    { "@type": "ListItem", position: 3, name: POST.title, item: POST.url },
  ],
};

/* ------------------------------------------------------------------ */
/* Related                                                              */
/* ------------------------------------------------------------------ */
const RELATED = [
  {
    slug: "/commercial-hvac-services/repair/",
    title: "Commercial HVAC Repair",
    dek: "Factory-trained diagnosis, honest scope, and faster return to full operation when equipment fails.",
    label: "Service",
  },
  {
    slug: "/commercial-hvac-services/replacement/",
    title: "Commercial HVAC Replacement",
    dek: "Repair-vs-replace analysis, right-sized equipment, and a phased transition planned around your operations.",
    label: "Service",
  },
  {
    slug: "/commercial-hvac-services/preventative-maintenance/",
    title: "Commercial HVAC Preventative Maintenance",
    dek: "Catch wear early with full-scope visits and documented reporting built around your facility.",
    label: "Service",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function BlogPostPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main id="main-content">
        {/* ---- Hero ---- */}
        <section
          aria-labelledby="post-heading"
          className="relative isolate overflow-hidden bg-ga-charcoal-footer pt-[140px] lg:pt-[180px] pb-16 lg:pb-24"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex items-center gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
                <li>
                  <Link href="/" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">·</li>
                <li>
                  <Link href="/blog/" className="hover:text-white transition-colors">
                    Field Notes
                  </Link>
                </li>
                <li aria-hidden="true">·</li>
                <li className="text-white/80 truncate max-w-[300px]">
                  {POST.category}
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red">
                {POST.category}
              </span>
              <span className="text-white/20" aria-hidden="true">
                ·
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                {POST.readTime}
              </span>
            </div>

            <h1
              id="post-heading"
              className="font-bold text-white leading-[0.98] tracking-tight mb-8"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(1.9rem, 4.2vw, 3.25rem)",
              }}
            >
              {POST.title}
            </h1>

            <p className="text-white/70 text-base lg:text-lg leading-relaxed max-w-2xl mb-10">
              {POST.dek}
            </p>

            <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 border-t border-white/10 pt-8">
              {[
                { k: "Published", v: POST.date },
                { k: "Read Time", v: POST.readTime },
                { k: "Category", v: POST.category },
                { k: "Author", v: "Gardner Air Team" },
              ].map((row) => (
                <div key={row.k}>
                  <dt className="font-mono text-[9px] font-semibold uppercase tracking-[0.2em] text-white/50 mb-2">
                    {row.k}
                  </dt>
                  <dd
                    className="font-bold text-white text-sm"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    {row.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ---- Featured image ---- */}
        <section
          aria-hidden="true"
          className="border-t border-[#E5E7EB] py-10 lg:py-14"
          style={{ background: "#F7F6F3" }}
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#D8D4CC]">
              <Image
                src={POST.image}
                alt={POST.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1280px"
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* ---- Article body ---- */}
        <section aria-label="Article body" className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div
              className="text-[17px] lg:text-[18px] text-[#2A2D33] leading-[1.75]"
              style={{ fontFamily: "var(--font-inter, ui-sans-serif, system-ui)" }}
            >
              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                Warning Signs Your HVAC System Needs Attention
              </h2>
              <p className="mb-6">
                Not every HVAC issue announces itself with a dramatic
                breakdown. Many of the most costly problems start small and
                build over time. Knowing what to look for gives you the
                advantage of acting before the situation becomes urgent.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Inconsistent Temperatures Across Your Building
              </h3>
              <p className="mb-6">
                Uneven heating or cooling is one of the most common and
                telling early signs that something is wrong. When one area of
                your building runs too hot while another stays too cold, your
                system is struggling to distribute air properly.
              </p>
              <p className="mb-6">
                In commercial properties, this often points to issues with
                ductwork, failing zone controls, or a system that no longer
                has the capacity to serve your building&rsquo;s load. In an
                office building or retail center, inconsistent temperatures
                affect more than comfort. They affect productivity, customer
                experience, and tenant satisfaction. If complaints are coming
                in from multiple areas, your system is signaling that it needs
                attention.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Rising Energy Costs Without a Clear Cause
              </h3>
              <p className="mb-6">
                When energy bills increase and nothing else in your building
                has changed, your HVAC system is likely the source. As
                components wear down, the system works harder to maintain the
                same output and consumes more energy in the process.
              </p>
              <p className="mb-6">
                For facility managers and operations directors tracking
                operational costs, this pattern is a measurable warning sign.
                Commercial HVAC repair can address the specific components
                driving inefficiency. However, if the system is aging and
                efficiency losses are widespread, commercial HVAC replacement
                may deliver better long-term value than continuing to patch a
                declining system.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Unusual Noises and Persistent Odors
              </h3>
              <p className="mb-6">
                Strange sounds and odors coming from your HVAC equipment are
                not something to ignore. Each type of noise points to a
                specific problem:
              </p>

              <ul className="mb-8 space-y-4">
                {[
                  {
                    b: "Banging or rattling",
                    t: "often indicates loose or broken components inside the unit.",
                  },
                  {
                    b: "Grinding or squealing",
                    t: "typically points to failing bearings or a worn belt.",
                  },
                  {
                    b: "Debris inside the system",
                    t: "can produce irregular sounds that worsen over time.",
                  },
                ].map((item) => (
                  <li key={item.b} className="flex gap-4 items-start">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#D42027]/10 flex items-center justify-center"
                    >
                      <Check size={12} className="text-[#D42027]" strokeWidth={3} />
                    </span>
                    <span>
                      <strong className="text-[#111318] font-semibold">
                        {item.b}
                      </strong>{" "}
                      {item.t}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mb-6">
                Odors deserve the same level of urgency. A musty or moldy
                smell can indicate moisture buildup inside the unit or
                ductwork, which affects indoor air quality throughout the
                entire building. A burning smell may point to an electrical
                issue that poses a safety risk. In healthcare or institutional
                settings where air quality is non-negotiable, these issues
                require immediate attention.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Frequent Breakdowns Are Draining Your Budget
              </h3>
              <p className="mb-6">
                A system that requires service calls throughout the year is
                costing more than the repair invoices alone reflect. Emergency
                repairs are expensive. Downtime is disruptive. And every
                breakdown puts additional stress on a system that is already
                strained.
              </p>
              <p className="mb-6">
                A useful benchmark to keep in mind is that if commercial HVAC
                repair costs are approaching 30 to 40 percent of the cost of
                replacement, it is time to seriously evaluate whether
                continued repairs make financial sense. Older systems that
                require frequent attention often become a liability. Tracking
                repair frequency and total costs over time gives you the data
                you need to make a confident decision.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Your System Is More Than 15 Years Old
              </h3>
              <p className="mb-6">
                Most commercial HVAC systems are built to last 15 to 20 years
                with proper maintenance. Once a system operates beyond that
                range, efficiency and reliability decline regardless of how
                well it has been cared for.
              </p>
              <p className="mb-6">
                Aging systems also create a parts availability problem. Older
                equipment may rely on components that manufacturers no longer
                produce, which drives up repair costs and extends lead times.
                Age alone does not always mean it is time to replace, but it
                does mean the system deserves a professional evaluation.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                The System Can No Longer Meet Your Building&rsquo;s Demands
              </h3>
              <p className="mb-6">
                Buildings change over time. Tenant buildouts, new equipment,
                expanded square footage, and increased occupancy all place new
                demands on an existing HVAC system. If your system was sized
                for a building that looks very different than it does today,
                it will struggle to keep up no matter how well it is
                maintained.
              </p>
              <p className="mb-6">
                A system running at or beyond its capacity cycles constantly,
                wears out faster, and drives up energy costs. In these
                situations, commercial HVAC replacement is often the more
                practical and cost-effective solution. A properly sized,
                modern system handles your current load without strain and
                delivers measurable savings over time.
              </p>

              <div className="my-12 rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] p-8 lg:p-10">
                <p className="text-[#2A2D33] leading-relaxed mb-6">
                  Schedule a preventative maintenance visit with Gardner Air
                  to get a clear picture of your system&rsquo;s condition and
                  your options before the next breakdown forces the decision.
                </p>
                <Link
                  href="/commercial-hvac-services/preventative-maintenance/"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold bg-[#111318] text-white hover:bg-[#D42027] transition-colors min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Our Preventative Maintenance
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>
              </div>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                Neglected Maintenance Is Compounding the Problem
              </h2>
              <p className="mb-6">
                One of the most preventable causes of HVAC system decline is a
                lack of consistent upkeep. Systems that go without regular
                commercial HVAC preventative maintenance develop compounding
                problems over time. What starts as a clogged filter or a low
                refrigerant charge can progress into compressor failure, heat
                exchanger damage, or a complete system shutdown.
              </p>
              <p className="mb-6">
                Regular commercial HVAC cleaning is a critical part of the
                maintenance process. Removing buildup from coils, drains, and
                air handling units directly impacts system efficiency and
                lifespan. If your building has not had a professional
                maintenance visit in the last six to twelve months, a thorough
                inspection is the right first step.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                Repair vs. Replace: How to Think Through the Decision
              </h2>
              <p className="mb-6">
                Understanding the signs is only part of the equation. Knowing
                how to act on them is what protects your budget and your
                operations. The right decision depends on the system&rsquo;s
                age, condition, repair history, and how well it fits your
                building&rsquo;s current needs.
              </p>

              <p className="mb-4">
                <strong className="text-[#111318] font-semibold">
                  Repair typically makes sense when:
                </strong>
              </p>
              <ul className="mb-8 space-y-4">
                {[
                  "The system is under 12 to 15 years old and the issue is isolated to a specific component.",
                  "Repair costs represent a small fraction of the total replacement cost.",
                  "The system has been consistently maintained and is otherwise performing well.",
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#D42027]/10 flex items-center justify-center"
                    >
                      <Check size={12} className="text-[#D42027]" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-4">
                <strong className="text-[#111318] font-semibold">
                  Replacement is worth considering when:
                </strong>
              </p>
              <ul className="mb-8 space-y-4">
                {[
                  "Repair costs are approaching the value of a new system.",
                  "The system is aging and losing efficiency across multiple components.",
                  "Parts are difficult or expensive to source due to the system's age.",
                  "The system no longer matches your building's current load requirements.",
                ].map((item) => (
                  <li key={item} className="flex gap-4 items-start">
                    <span
                      aria-hidden="true"
                      className="mt-1.5 flex-shrink-0 w-5 h-5 rounded-full bg-[#D42027]/10 flex items-center justify-center"
                    >
                      <Check size={12} className="text-[#D42027]" strokeWidth={3} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="mb-6">
                For properties in Southern California, HVAC repair in Orange
                County and surrounding regions comes with the added challenge
                of managing heat load year-round. Systems in this climate work
                harder than average, which accelerates wear and makes regular
                evaluation even more important.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                Gardner Air Helps Southern California Businesses Stay Ahead of
                HVAC Failures
              </h2>
              <p className="mb-6">
                Gardner Air&rsquo;s certified technicians help commercial
                facilities across Southern California assess system
                performance, identify risks, and build a service plan that
                protects operations long term.{" "}
                <Link
                  href="/contact/"
                  className="text-[#D42027] font-semibold underline underline-offset-2 hover:text-[#B01C22] transition-colors"
                >
                  Contact Gardner Air today
                </Link>{" "}
                to schedule your commercial HVAC repair evaluation and get the
                answers your building needs.
              </p>
            </div>

            {/* ---- Share ---- */}
            <div className="mt-16 pt-8 border-t border-[#D8D4CC] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6B7280]">
                Share This Post
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(POST.url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-10 px-4 rounded-lg text-xs font-bold border border-[#D8D4CC] text-[#111318] hover:border-[#111318] hover:bg-[#111318] hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Facebook
                </a>
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(POST.url)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-10 px-4 rounded-lg text-xs font-bold border border-[#D8D4CC] text-[#111318] hover:border-[#111318] hover:bg-[#111318] hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  LinkedIn
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(POST.url)}&text=${encodeURIComponent(POST.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center h-10 px-4 rounded-lg text-xs font-bold border border-[#D8D4CC] text-[#111318] hover:border-[#111318] hover:bg-[#111318] hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  X / Twitter
                </a>
                <a
                  href={`mailto:?subject=${encodeURIComponent(POST.title)}&body=${encodeURIComponent(POST.url)}`}
                  className="inline-flex items-center h-10 px-4 rounded-lg text-xs font-bold border border-[#D8D4CC] text-[#111318] hover:border-[#111318] hover:bg-[#111318] hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Related ---- */}
        <section
          aria-labelledby="related-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-24"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="mb-10 lg:mb-14">
              <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                Keep Reading
              </p>
              <h2
                id="related-heading"
                className="font-bold text-[#111318] leading-[0.95] tracking-tight"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.2vw, 2.5rem)",
                }}
              >
                Related services and reading
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {RELATED.map((item) => (
                <Link
                  key={item.slug}
                  href={item.slug}
                  className="group flex flex-col rounded-2xl border border-[#D8D4CC] bg-white p-7 hover:border-[#D42027]/40 hover:shadow-[0_20px_50px_-24px_rgba(212,32,39,0.25)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-4">
                    {item.label}
                  </span>
                  <h3
                    className="font-bold text-[#111318] leading-tight tracking-[-0.01em] mb-3 group-hover:text-[#D42027] transition-colors"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      fontSize: "1.15rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[14.5px] text-[#6B7280] leading-relaxed flex-1 mb-5">
                    {item.dek}
                  </p>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#111318] group-hover:text-[#D42027] transition-colors">
                    Visit page
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---- CTA band ---- */}
        <section
          aria-label="Schedule commercial HVAC evaluation"
          className="relative overflow-hidden bg-[#1E2126] py-16 lg:py-24"
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-16 items-end">
              <div className="max-w-2xl">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
                  Don&rsquo;t Wait for the Next Breakdown
                </p>
                <h2
                  className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  Get a clear repair-vs-replace answer for your equipment.
                </h2>
                <p className="text-white/65 text-base leading-relaxed mb-8">
                  Our factory-trained technicians assess your equipment,
                  review your service history, and give you an honest
                  recommendation on whether to repair, replace, or plan a
                  phased transition.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Request an Evaluation
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
