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
  slug: "how-preventative-hvac-maintenance-tracking-prevents-repeat-equipment-failures",
  title:
    "How Preventative HVAC Maintenance Tracking Prevents Repeat Equipment Failures",
  dek: "When the same rooftop unit fails for the third time in two years, the real problem is almost never bad luck — it's the absence of a documented service history. Here's how proper maintenance tracking turns reactive repair calls into informed planning.",
  category: "Preventative Maintenance",
  readTime: "6 min read",
  date: "May 26, 2026",
  dateISO: "2026-05-26",
  image: "/preventative-maintenance-tracking-prevents-repeat-failures.webp",
  imageAlt:
    "Gardner Air technician documenting commercial HVAC preventative maintenance findings on a tablet for a customer portal service record",
  url: "https://gardnerair.com/blog/how-preventative-hvac-maintenance-tracking-prevents-repeat-equipment-failures/",
};

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: `${POST.title} | Gardner Air`,
  description:
    "Repeat HVAC failures usually trace back to missing service history. See how preventative HVAC maintenance tracking captures the data facility managers need to break the cycle.",
  alternates: {
    canonical: POST.url,
  },
  openGraph: {
    title: POST.title,
    description:
      "Repeat HVAC failures usually trace back to missing service history. See how preventative HVAC maintenance tracking captures the data facility managers need to break the cycle.",
    url: POST.url,
    type: "article",
    images: [
      {
        url: `https://gardnerair.com${POST.image}`,
        width: 2000,
        height: 1250,
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
    "How preventative HVAC maintenance tracking prevents repeat equipment failures — service history, failure patterns, cost data, and the customer portal that makes it all accessible.",
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
    "preventative HVAC maintenance",
    "HVAC maintenance tracking",
    "commercial HVAC service history",
    "HVAC equipment failure prevention",
    "facility management HVAC",
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
/* Related posts                                                        */
/* ------------------------------------------------------------------ */
const RELATED = [
  {
    slug: "/commercial-hvac-services/preventative-maintenance/",
    title: "Commercial HVAC Preventative Maintenance",
    dek: "Complete-scope visits, documented service reports, and multi-site plans built around your facility's operations.",
    label: "Service",
  },
  {
    slug: "/commercial-hvac-services/repair/",
    title: "Commercial HVAC Repair",
    dek: "Factory-trained diagnosis when equipment fails — with the history and honest scope to back the fix.",
    label: "Service",
  },
  {
    slug: "/building-automation/",
    title: "Building Automation Systems",
    dek: "Modern BAS platforms that surface the equipment data your maintenance program is already capturing.",
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
          className="bg-white border-t border-[#E5E7EB] py-10 lg:py-14"
          style={{ background: "#F7F6F3" }}
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-[#D8D4CC]">
              <Image
                src={POST.image}
                alt={POST.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1120px"
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
              <p className="mb-8">
                When the same rooftop unit goes down for the third time in two
                years, it&rsquo;s easy to chalk it up to bad luck or aging
                equipment. But more often than not, the real problem is the
                absence of a clear, documented record of what&rsquo;s been done
                to it, when, and why. Without that history, every service call
                starts from scratch, patterns go unnoticed, and the same
                failures keep repeating. Preventative HVAC maintenance helps
                build a system of knowledge around your equipment that makes
                every future decision smarter.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                Why the Same Equipment Keeps Failing
              </h2>
              <p className="mb-6">
                Repeat equipment failures are one of the most frustrating and
                expensive problems a property manager can face. You call for a
                repair, the technician fixes the issue, and a few months later
                you&rsquo;re making the same call about the same unit.
              </p>
              <p className="mb-6">
                When there&rsquo;s no consistent record of past service &mdash;
                like what was repaired, what was noted, and what was flagged as
                a potential concern &mdash; each visit operates in a vacuum.
                The technician on-site is working without context, and without
                context, it&rsquo;s nearly impossible to identify the underlying
                cause of a recurring issue.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                What Maintenance Tracking Actually Captures
              </h2>
              <p className="mb-8">
                Proper HVAC equipment maintenance tracking goes well beyond a
                simple log of service dates. When documentation is done
                consistently and thoroughly, it creates a living record of your
                system&rsquo;s health that gets more valuable over time.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Service and Inspection History
              </h3>
              <p className="mb-6">
                Every visit to a unit should generate a record of what was
                inspected, what was found, what was adjusted, and what was left
                as a watch item. Over time, this history shows you exactly how
                a piece of equipment has been cared for and where gaps in
                service may have occurred. When a technician can pull up two
                years of visit records on a unit before touching it, they
                arrive with a completely different level of insight than one
                starting from a blank slate.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Failure Patterns and Repeat Issues
              </h3>
              <p className="mb-6">
                When the same component shows up in the notes repeatedly,
                that&rsquo;s a pattern. Patterns are data, and data points to
                root causes. Without a documented record, that pattern stays
                invisible, and you keep repairing symptoms instead of solving
                problems. A well-maintained service history makes it possible
                to ask better questions and find out if a unit is failing
                because of a deeper electrical issue or if equipment is simply
                past the point where repair makes financial sense.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Parts, Costs, and Labor Over Time
              </h3>
              <p className="mb-6">
                Tracking also captures the financial story of each piece of
                equipment. When you can see what a single unit has cost in
                parts and labor over three or four years, you have the
                information you need to make a confident decision about whether
                continued repair is worth it, or whether replacement is the
                smarter move. That kind of clarity is impossible without
                records.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                How Tracking Data Changes the Way You Make Decisions
              </h2>
              <p className="mb-6">
                One of the biggest shifts that comes with consistent
                preventative HVAC maintenance tracking is the move from
                reactive decision-making to informed planning. Instead of
                responding to failures as they happen, you&rsquo;re working
                from a clear picture of where your systems stand. That changes
                everything about how you manage your facilities. Decisions
                about budgeting, scheduling, and vendor accountability all get
                easier when they&rsquo;re grounded in real data.
              </p>
              <p className="mb-6">
                Specific ways maintenance data improves decision-making
                include:
              </p>

              <ul className="mb-8 space-y-4">
                {[
                  {
                    b: "Smarter repair vs. replace calls",
                    t: "When you know a unit has required repairs three times in 18 months, the case for replacement becomes a lot clearer.",
                  },
                  {
                    b: "Better budget forecasting",
                    t: "Historical cost data makes it possible to anticipate HVAC expenses rather than absorb surprise costs mid-year.",
                  },
                  {
                    b: "Faster diagnosis on service calls",
                    t: "Technicians who arrive with full service history spend less time troubleshooting and more time solving.",
                  },
                  {
                    b: "Stronger vendor accountability",
                    t: "Documented records make it easy to verify that agreed-upon maintenance tasks were actually completed.",
                  },
                  {
                    b: "Early identification of at-risk equipment",
                    t: "Patterns in the data flag units that are trending toward failure before they actually go down.",
                  },
                  {
                    b: "More confident planning around equipment lifespan",
                    t: "Knowing a unit's full history helps determine realistic timelines for new installation and capital planning.",
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
                        {item.b}:
                      </strong>{" "}
                      {item.t}
                    </span>
                  </li>
                ))}
              </ul>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                The Cost of Not Tracking
              </h2>
              <p className="mb-6">
                The financial case for a proactive HVAC maintenance approach
                becomes especially clear when you look at what reactive
                management actually costs over time. Emergency HVAC repairs
                consistently run higher than planned service &mdash; both in
                parts and labor and in operational disruption. Tenants
                complain, productivity drops, and in some facility types, an
                HVAC failure can create compliance or safety concerns that go
                well beyond discomfort.
              </p>
              <p className="mb-6">
                When service history isn&rsquo;t being tracked, property
                managers often end up spending more money on the same problems
                year after year without ever realizing the full picture. A
                structured HVAC maintenance plan reduces the cost of every
                breakdown you do have, because the information needed to
                resolve it quickly is already on hand.
              </p>

              <div className="my-12 rounded-2xl border border-[#D8D4CC] bg-[#F7F6F3] p-8 lg:p-10">
                <p className="text-[#2A2D33] leading-relaxed mb-6">
                  Gardner Air&rsquo;s preventative HVAC maintenance programs
                  are built around a structured, documented approach &mdash;
                  giving commercial facility managers the visibility they need
                  to stay ahead of failures instead of chasing them.
                </p>
                <Link
                  href="/commercial-hvac-services/preventative-maintenance/"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-xl text-sm font-bold bg-[#111318] text-white hover:bg-[#D42027] transition-colors min-h-[44px]"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                >
                  Explore Our HVAC Maintenance Services
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
                What a Good Tracking System Looks Like in Practice
              </h2>
              <p className="mb-8">
                A functional preventative HVAC maintenance tracking system
                isn&rsquo;t complicated, but it does require consistency and
                the right tools in place to make the data accessible and
                actionable.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Centralized, Accessible Records
              </h3>
              <p className="mb-6">
                Service history should live in one place that&rsquo;s easy to
                access. Centralized records mean that anyone managing the
                facility &mdash; from the property manager to a new technician
                &mdash; can pull up a unit&rsquo;s full history immediately.
                That accessibility is what turns documentation from a passive
                record into an active management tool.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                Time-Stamped Reports After Every Visit
              </h3>
              <p className="mb-6">
                Detailed, time-stamped service reports after every visit are
                the foundation of any reliable tracking system. These reports
                should capture what was observed, including components that are
                functioning but showing early signs of wear. That kind of
                forward-looking documentation is what separates a record that
                just confirms work was completed from one that actually helps
                you avoid HVAC failure down the road.
              </p>

              <h3
                className="font-bold text-[#111318] leading-tight tracking-tight mt-10 mb-4"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.25rem",
                }}
              >
                A Customer Portal That Works for Property Managers
              </h3>
              <p className="mb-6">
                The most effective tracking systems give property managers
                direct access to their equipment&rsquo;s service history
                through a dedicated customer portal. Rather than requesting
                records or waiting on a phone call, you can log in and see
                every visit, every finding, and every recommendation organized
                by unit, by date, or by facility. That kind of organized,
                always-accessible history supports smarter conversations with
                your service provider, better internal reporting, and the kind
                of documentation that makes it possible to truly manage your
                commercial HVAC system rather than just react to it.
              </p>

              <h2
                className="font-bold text-[#111318] leading-tight tracking-tight mt-14 mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.5rem, 2.5vw, 1.875rem)",
                }}
              >
                Get a Maintenance Partner Who Keeps the Records That Protect
                Your Equipment
              </h2>
              <p className="mb-6">
                Repeat HVAC failures don&rsquo;t have to be part of doing
                business. When service history is documented, accessible, and
                actively used to guide decisions, the patterns that lead to
                recurring breakdowns become preventable.
              </p>
              <p className="mb-6">
                Gardner Air&rsquo;s dispatch software and customer portal give
                property managers across Southern California a clear, organized
                view of every unit&rsquo;s maintenance history, so nothing gets
                missed and no failure goes unexplained. If you&rsquo;re ready
                to move from reactive repairs to a proactive HVAC maintenance
                strategy backed by real data,{" "}
                <Link
                  href="/contact/"
                  className="text-[#D42027] font-semibold underline underline-offset-2 hover:text-[#B01C22] transition-colors"
                >
                  reach out today
                </Link>{" "}
                and let&rsquo;s build a plan around your facility&rsquo;s
                specific needs.
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
                  <span
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#111318] group-hover:text-[#D42027] transition-colors"
                  >
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
          aria-label="Schedule commercial HVAC service"
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
                  Ready to Stop the Repeat Failures?
                </p>
                <h2
                  className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  }}
                >
                  Let&rsquo;s build a maintenance plan around your facility.
                </h2>
                <p className="text-white/65 text-base leading-relaxed mb-8">
                  Our team will walk your equipment, review your service
                  history, and put together a documented preventative
                  maintenance program with visibility your team can actually
                  use.
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
