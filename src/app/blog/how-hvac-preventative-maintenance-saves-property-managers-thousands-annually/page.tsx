import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { AuthorBio } from "@/components/blog/AuthorBio";
import { AUTHORS } from "@/data/authors";

const AUTHOR = AUTHORS["dirk-gardner"];

/* ------------------------------------------------------------------ */
/* Post meta                                                            */
/* ------------------------------------------------------------------ */
const POST = {
  slug: "how-hvac-preventative-maintenance-saves-property-managers-thousands-annually",
  title:
    "How HVAC Preventative Maintenance Saves Property Managers Thousands Annually",
  dek: "Property managers who invest in HVAC preventative maintenance consistently spend less, plan better, and avoid the costly surprises that come with reactive service. Here is where the savings come from.",
  category: "Preventative Maintenance",
  readTime: "7 min read",
  date: "April 27, 2026",
  dateISO: "2026-04-27",
  image: "/BLOG/hvac-preventative-maintenance-saves-property-managers-thousands.webp",
  imageAlt:
    "Commercial HVAC preventative maintenance program helping property managers control repair costs and extend equipment life",
  url: "https://gardnerair.com/blog/how-hvac-preventative-maintenance-saves-property-managers-thousands-annually/",
};

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: `${POST.title} | Gardner Air`,
  description:
    "Commercial HVAC preventative maintenance cuts emergency repairs, reduces energy use, and extends equipment life. See where the savings come from and what a strong program covers.",
  alternates: {
    canonical: POST.url,
  },
  openGraph: {
    title: POST.title,
    description:
      "Commercial HVAC preventative maintenance cuts emergency repairs, reduces energy use, and extends equipment life. See where the savings come from and what a strong program covers.",
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
    "How HVAC preventative maintenance saves commercial property managers thousands annually — repair cost predictability, energy efficiency, equipment longevity, and portfolio-level planning.",
  image: [`https://gardnerair.com${POST.image}`],
  datePublished: POST.dateISO,
  dateModified: POST.dateISO,
  author: {
    "@type": "Person",
    "@id": AUTHOR.id,
    name: AUTHOR.name,
    jobTitle: AUTHOR.role,
    url: AUTHOR.url,
    sameAs: AUTHOR.sameAs,
    worksFor: { "@type": "Organization", name: "Gardner Air" },
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
    "HVAC preventative maintenance",
    "commercial HVAC cost savings",
    "property manager HVAC",
    "HVAC maintenance plan",
    "commercial HVAC energy efficiency",
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
    slug: "/commercial-hvac-services/preventative-maintenance/",
    title: "Commercial HVAC Preventative Maintenance",
    dek: "Customized service plans, full-scope visits, and documented reporting built around your building's equipment and operations.",
    label: "Service",
  },
  {
    slug: "/building-automation/",
    title: "Building Automation Systems",
    dek: "Real-time visibility into equipment performance so issues get caught before they become failures.",
    label: "Service",
  },
  {
    slug: "/blog/how-preventative-hvac-maintenance-tracking-prevents-repeat-equipment-failures/",
    title:
      "How Maintenance Tracking Prevents Repeat Equipment Failures",
    dek: "Why documented service history is the difference between reactive repair calls and informed planning.",
    label: "Field Note",
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
                { k: "Author", v: AUTHOR.name },
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
        <section
          aria-label="Article body"
          className="bg-white py-16 lg:py-24"
        >
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
                Why Your HVAC System Demands a Proactive Approach
              </h2>
              <p className="mb-6">
                Managing a commercial property means managing risk. Your HVAC
                system is one of the largest mechanical investments in your
                building, and it operates under significant daily demand. When
                that system fails, costs stack up fast. Emergency repairs,
                tenant complaints, lost productivity, and premature equipment
                replacement all hit harder when a system has been running
                without consistent care. Most of those costs are avoidable, and
                a structured preventative maintenance program is how you avoid
                them.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                The Financial Risk of Skipping Commercial HVAC Maintenance
              </h2>
              <p className="mb-6">
                Delaying maintenance to control short-term costs is one of the
                most common and expensive decisions property managers make.
                What looks like a budget save today almost always results in
                higher spending down the road.
              </p>
              <p className="mb-6">
                Without a regular service schedule, small problems grow into
                larger ones. A clogged filter strains the blower motor. A low
                refrigerant charge forces the compressor to work harder. A
                missed coil cleaning reduces heat transfer efficiency and
                drives up energy consumption. Each of these issues cost very
                little to fix during a routine visit. Left unattended, they
                combine into failures that demand emergency spending.
              </p>
              <p className="mb-6">
                The financial impact is consistent across the industry:
              </p>

              <ul className="mb-8 space-y-4">
                {[
                  "Emergency HVAC repairs typically cost two to five times more than the same work done on a scheduled basis.",
                  "Well-maintained systems use 15 to 20 percent less energy than systems running without regular upkeep.",
                  "Facilities without structured maintenance programs experience significantly more unplanned downtime than those with preventative care in place.",
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
                Skipping HVAC preventative maintenance shows up directly in
                repair invoices, utility bills, and tenant retention rates.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                HVAC Maintenance Cost Savings Start With a Predictable Schedule
              </h2>
              <p className="mb-6">
                One of the strongest financial benefits of a preventative
                program is cost predictability. Scheduled maintenance has a
                known price. Emergency repairs do not. When a system fails
                without warning, the cost extends beyond the repair itself to
                include overtime labor, expedited parts, and the operational
                disruption that follows.
              </p>
              <p className="mb-6">
                A structured program typically covers filter replacements, coil
                cleaning, electrical inspections, refrigerant testing, and
                performance verification. These visits catch wear early,
                before it becomes failure. They also build a documented
                service record that supports capital planning, insurance
                requirements, and property valuation.
              </p>
              <p className="mb-6">
                For property managers overseeing multiple buildings, that
                documentation becomes even more valuable. Knowing the
                condition and service history of every system across a
                portfolio allows for smarter budget decisions and fewer costly
                surprises at the worst possible times.
              </p>

              <div className="my-12 rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] p-8 lg:p-10">
                <p className="text-[#2A2D33] leading-relaxed mb-6">
                  Explore Gardner Air&rsquo;s preventative maintenance
                  programs to find a customized service plan built around your
                  building&rsquo;s needs.
                </p>
                <Link
                  href="/commercial-hvac-services/preventative-maintenance/"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold bg-[#111318] text-white hover:bg-[#D42027] transition-colors min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Our Maintenance Programs
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
                HVAC Maintenance Plan Benefits Extend Across Your Entire
                Operation
              </h2>
              <p className="mb-6">
                A well-designed maintenance plan delivers value far beyond the
                mechanical systems it covers. Comfortable buildings attract
                and retain tenants. Reliable systems reduce complaints.
                Documented service histories support lease negotiations, due
                diligence reviews, and insurance audits. These outcomes carry
                real financial weight even when they do not appear directly on
                a repair invoice.
              </p>
              <p className="mb-6">
                Downtime is another area where preventative care pays off in
                ways that are easy to underestimate. HVAC failure in a
                commercial building is never just an equipment problem. It is
                a tenant problem. Uncomfortable offices, disrupted retail
                operations, and temperature-sensitive industrial environments
                all generate consequences that reach well past the cost of the
                repair itself.
              </p>
              <p className="mb-6">
                For Southern California properties, this matters year-round.
                The region places sustained cooling demands on commercial
                systems, and equipment that is not properly maintained will
                struggle when temperatures climb. Pairing HVAC preventative
                maintenance with a{" "}
                <Link
                  href="/building-automation/"
                  className="text-[#D42027] font-semibold underline underline-offset-2 hover:text-[#B01C22] transition-colors"
                >
                  building automation system
                </Link>{" "}
                gives property managers real-time visibility into system
                performance and helps catch issues before they become
                failures.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                Protecting Equipment Life Is a Long-Term Asset Management
                Strategy
              </h2>
              <p className="mb-6">
                Commercial HVAC equipment represents a significant capital
                investment. Replacing a rooftop unit, chiller, or boiler ahead
                of schedule is one of the most expensive outcomes a property
                manager can face. A consistent maintenance program directly
                delays that outcome by slowing the rate of system
                degradation.
              </p>
              <p className="mb-6">
                Research shows that facilities running structured programs
                extend average equipment life by eight to ten years compared
                to those relying on reactive service. Routine visits identify
                early signs of component wear &mdash; such as loose electrical
                connections, worn belts, and degraded capacitors &mdash; and
                address them before they cause larger failures. Each corrected
                issue reduces strain on surrounding components and slows the
                overall decline of the system.
              </p>
              <p className="mb-6">
                Longer equipment life means more time between replacements,
                more value from the original investment, and better control
                over when major capital spending actually happens. That kind
                of long-term planning is one of the strongest arguments for
                building a formal HVAC preventative maintenance program.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                What a Strong Preventative Maintenance HVAC System Program
                Covers
              </h2>
              <p className="mb-6">
                Not all maintenance programs deliver the same results. A plan
                built around your specific equipment and building usage
                performs far better than a generic visit schedule. Knowing
                what a strong program includes helps property managers
                evaluate providers and set clear expectations with
                stakeholders.
              </p>
              <p className="mb-6">A comprehensive program should cover:</p>

              <ul className="mb-8 space-y-4">
                {[
                  {
                    b: "Air filter inspection and replacement",
                    t: "on a schedule matched to building traffic and system usage.",
                  },
                  {
                    b: "Coil cleaning",
                    t: "to restore heat transfer efficiency and reduce energy draw across the system.",
                  },
                  {
                    b: "Refrigerant level testing and leak checks",
                    t: "to protect compressor health and prevent efficiency loss.",
                  },
                  {
                    b: "Electrical component inspection",
                    t: "to identify wiring issues before they become safety hazards.",
                  },
                  {
                    b: "Thermostat and controls calibration",
                    t: "to maintain consistent performance and energy efficiency.",
                  },
                  {
                    b: "Condensate drain inspection and cleaning",
                    t: "to prevent water damage and mold growth.",
                  },
                  {
                    b: "Blower motor and belt inspection",
                    t: "to catch mechanical wear before it causes a failure.",
                  },
                  {
                    b: "Detailed service reporting after every visit",
                    t: "so you have clear documentation of system condition and completed work.",
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
                When evaluating providers, look for a team that starts with a
                thorough assessment of your equipment before recommending a
                plan. A provider that designs a program around your
                building&rsquo;s specific demands will deliver far better
                results than one offering a one-size-fits-all package.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                Gardner Air Builds Maintenance Programs That Protect Your
                Bottom Line
              </h2>
              <p className="mb-6">
                Property managers across Southern California trust Gardner Air
                to protect their HVAC investments with programs built for
                long-term performance. Our process starts with a detailed
                system assessment, a clear scope of work, and a service
                schedule designed around your building&rsquo;s needs. One
                Claremont college saved $80,000 in HVAC service expenses
                during their second year with us after switching from a
                provider who had been missing critical issues.{" "}
                <Link
                  href="/contact/"
                  className="text-[#D42027] font-semibold underline underline-offset-2 hover:text-[#B01C22] transition-colors"
                >
                  Contact Gardner Air today
                </Link>{" "}
                to schedule your HVAC preventative maintenance consultation
                and start building a program that pays for itself.
              </p>
            </div>

            <AuthorBio author={AUTHOR} />

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
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#111318] group-hover:text-[#D42027] transition-colors"
                  >
                    {item.label === "Field Note" ? "Read note" : "Visit page"}
                    <ArrowUpRight size={12} aria-hidden="true" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ---- CTA band ---- */}
        <section
          aria-label="Schedule commercial HVAC maintenance"
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
                  Build a Program That Pays for Itself
                </p>
                <h2
                  className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  Ready to stop paying emergency-repair prices?
                </h2>
                <p className="text-white/65 text-base leading-relaxed mb-8">
                  We&rsquo;ll assess your equipment, review your service
                  history, and put together a documented preventative
                  maintenance program built around your building&rsquo;s
                  actual demands &mdash; not a generic visit schedule.
                </p>
              </div>
              <div className="flex flex-col gap-3 lg:items-end">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Schedule a Consultation
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
