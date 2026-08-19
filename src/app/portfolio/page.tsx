import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, Award, Shield, Zap } from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";
import { PhotoPlaceholder } from "@/components/photo-placeholder";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: { absolute: "Portfolio — Commercial HVAC Projects | Gardner Air" },
  description:
    "Real commercial HVAC project wins across Southern California — package unit replacements, computer room Liebert units, ducting installations, and cooling towers.",
  alternates: {
    canonical: "https://gardnerair.com/portfolio/",
  },
  openGraph: {
    title: "Portfolio — Commercial HVAC Projects | Gardner Air",
    description:
      "Real commercial HVAC project wins across Southern California — package unit replacements, computer room Liebert units, ducting installations, and cooling towers.",
    url: "https://gardnerair.com/portfolio/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Gardner Air Commercial HVAC Portfolio",
  description:
    "A collection of commercial HVAC installation, replacement, and automation projects completed by Gardner Air across Southern California.",
  url: "https://gardnerair.com/portfolio/",
  isPartOf: {
    "@type": "WebSite",
    name: "Gardner Air",
    url: "https://gardnerair.com/",
  },
};

/* ------------------------------------------------------------------ */
/* Project data                                                         */
/* ------------------------------------------------------------------ */
type ProjectPhoto =
  | { kind: "image"; src: string; alt: string }
  | {
      kind: "placeholder";
      label: string;
      subject: string;
      filename: string;
    };

type Project = {
  num: string;
  title: string;
  category: string;
  summary: string;
  photos: ProjectPhoto[];
};

const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified" },
  { Icon: Shield, text: "CSLB Licensed" },
  { Icon: Zap, text: "Factory-Trained" },
];

const PROJECTS: Project[] = [
  {
    num: "01",
    title: "Package Unit Replacement — 25 Ton",
    category: "Equipment Replacement",
    summary:
      "Retrofit of a rooftop 25-ton package unit for a commercial facility. Crane pick, curb adaptation, refrigerant charge, and controls integration completed with minimal disruption to operations.",
    photos: [
      { kind: "image", src: "/Package-Unit-Replacement-25-Ton-1.webp", alt: "25-ton rooftop package unit replacement — stage 1" },
      { kind: "image", src: "/Package-Unit-Replacement-25-Ton-2.webp", alt: "25-ton rooftop package unit replacement — stage 2" },
      { kind: "image", src: "/Package-Unit-Replacement-25-Ton-3.webp", alt: "25-ton rooftop package unit replacement — stage 3" },
      { kind: "image", src: "/Package-Unit-Replacement-25-Ton-4.webp", alt: "25-ton rooftop package unit replacement — stage 4" },
    ],
  },
  {
    num: "02",
    title: "Computer Rooms — Liebert Units",
    category: "Mission-Critical Cooling",
    summary:
      "Installation and maintenance of Vertiv Liebert precision cooling units serving server rooms and data closets. Tight tolerances on temperature and humidity, and clean routing throughout.",
    photos: [
      { kind: "image", src: "/Computer-Rooms-Liebert-Units-1.webp", alt: "Computer room Liebert precision cooling unit — install 1" },
      { kind: "image", src: "/Computer-Rooms-Liebert-Units-2.webp", alt: "Computer room Liebert precision cooling unit — install 2" },
      { kind: "image", src: "/Computer-Rooms-Liebert-Units-3.webp", alt: "Computer room Liebert precision cooling unit — install 3" },
    ],
  },
  {
    num: "03",
    title: "Package Unit Replacement — 5 Ton",
    category: "Equipment Replacement",
    summary:
      "Rooftop 5-ton package unit replacement for a small commercial tenant. Curb rebuild, thermostat swap, and a full commissioning report handed to the property manager.",
    photos: [
      { kind: "image", src: "/Package-Unit-Replacement-5-Ton-1.webp", alt: "5-ton rooftop package unit replacement — stage 1" },
      { kind: "image", src: "/Package-Unit-Replacement-5-Ton-2.webp", alt: "5-ton rooftop package unit replacement — stage 2" },
    ],
  },
  {
    num: "04",
    title: "Ducting Installation",
    category: "Sheet Metal & Distribution",
    summary:
      "Commercial supply and return duct runs installed to SMACNA standards — sealed joints, correctly spaced hangers, and coordinated routing around existing building systems.",
    photos: [
      { kind: "image", src: "/Ducting-Installation-1.webp", alt: "Commercial ducting installation — main trunk line" },
      { kind: "image", src: "/Ducting-Installation-2.webp", alt: "Commercial ducting installation — branch runs" },
    ],
  },
  {
    num: "05",
    title: "Cooling Tower Installation",
    category: "Heat Rejection",
    summary:
      "New cooling tower set and piped for a commercial chiller plant. Crane placement, structural curb verification, and full water-treatment startup completed on schedule.",
    photos: [
      { kind: "image", src: "/Package-Units-1.webp", alt: "Cooling tower installation — set and piped" },
      { kind: "image", src: "/Package-Units-2.webp", alt: "Cooling tower installation — commissioned and running" },
    ],
  },
  {
    num: "06",
    title: "Miscellaneous Projects",
    category: "Repairs, Retrofits & Automation",
    summary:
      "A rotating set of smaller commercial HVAC wins — boiler rooms, control panels, piping, electrical panels, and the fleet that keeps every job on schedule across Southern California.",
    photos: [
      { kind: "image", src: "/Gardner-Air-line-of-trucks-1030x644.webp", alt: "Gardner Air service truck fleet lined up" },
      { kind: "image", src: "/Gardner-Air-HVAC-equipment-pipes-1030x644.webp", alt: "Commercial HVAC piping installation" },
      { kind: "image", src: "/Gardner-Air-HVAC-equipment-panel-1030x644.webp", alt: "Commercial HVAC equipment panel" },
      { kind: "image", src: "/Gardner-Air-HVAC-equipment-Hi-Delta-1030x644.webp", alt: "Hi-Delta commercial HVAC equipment" },
      { kind: "image", src: "/Gardner-Air-HVAC-equipment-electrical-panel-1030x644.webp", alt: "HVAC electrical panel installation" },
      { kind: "image", src: "/Gardner-Air-HVAC-equipment-boiler-room-1030x644.webp", alt: "Commercial boiler room" },
      { kind: "image", src: "/Gardner-Air-HVAC-equipment-in-basement-1030x644.webp", alt: "HVAC equipment in commercial basement" },
      { kind: "image", src: "/Gardner-Air-HVAC-equipment-close-up-1030x644.webp", alt: "HVAC equipment close-up detail" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function PortfolioPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
      />

      <SiteHeader />

      <main id="main-content">
        {/* ---- Hero ---- */}
        <section
          aria-labelledby="portfolio-hero-heading"
          className="relative isolate overflow-hidden bg-ga-charcoal-footer pt-[140px] lg:pt-[180px]"
        >
          <Image
            src="/commercial-services-hub-hero.webp"
            alt=""
            fill
            priority
            aria-hidden="true"
            sizes="100vw"
            className="object-cover object-[50%_40%] opacity-45 pointer-events-none select-none"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-ga-charcoal-footer via-ga-charcoal-footer/85 to-ga-charcoal-footer/55 pointer-events-none"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 mb-16 lg:mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 lg:gap-20 items-end">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-5">
                  Portfolio
                </p>
                <h1
                  id="portfolio-hero-heading"
                  className="font-bold text-white leading-[0.95] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)",
                  }}
                >
                  Explore real HVAC
                  <br />
                  project wins.
                </h1>
              </div>
              <p className="text-base lg:text-[17px] text-white/75 leading-relaxed max-w-xl">
                We&rsquo;ve supported a variety of commercial facilities with HVAC
                installations, automation upgrades, and large-scale retrofit
                projects. From single-building improvements to multi-site
                integrations, our work focuses on delivering efficient,
                long-term solutions that align with each client&rsquo;s
                operational goals. Every project reflects our commitment to
                performance, energy savings, and dependable support.
              </p>
            </div>
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

        {/* ---- Project index rail ---- */}
        <section
          aria-label="Project index"
          className="bg-[#F7F6F3] border-b border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-6 lg:py-8">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600 mb-4">
              Featured Projects
            </p>
            <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-3">
              {PROJECTS.map((p) => (
                <li key={p.num}>
                  <a
                    href={`#project-${p.num}`}
                    className="group inline-flex items-baseline gap-2 text-sm font-semibold text-ga-black hover:text-ga-red transition-colors"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    <span className="tabular-nums text-[11px] font-mono text-ga-gray-600 group-hover:text-ga-red transition-colors">
                      {p.num}
                    </span>
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---- Projects ---- */}
        <section aria-label="Commercial HVAC projects" className="bg-white">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-16 lg:py-24">
            <div className="flex flex-col gap-20 lg:gap-28">
              {PROJECTS.map((project, idx) => (
                <article
                  key={project.num}
                  id={`project-${project.num}`}
                  aria-labelledby={`project-${project.num}-heading`}
                  className={`grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 lg:gap-16 ${
                    idx > 0 ? "border-t border-[#D8D4CC] pt-16 lg:pt-24" : ""
                  }`}
                >
                  {/* Left rail — number + meta */}
                  <div className="flex flex-col">
                    <p
                      className="tabular-nums font-bold text-[#D8D4CC] leading-[0.85] mb-4"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(3.5rem, 6vw, 5.5rem)",
                      }}
                      aria-hidden="true"
                    >
                      {project.num}
                    </p>
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-3">
                      {project.category}
                    </p>
                    <p className="text-sm text-ga-gray-600 leading-relaxed lg:max-w-[240px]">
                      {project.summary}
                    </p>
                  </div>

                  {/* Right — headline + photo grid */}
                  <div>
                    <h2
                      id={`project-${project.num}-heading`}
                      className="font-bold text-ga-black leading-[1.05] tracking-tight mb-8 lg:mb-10"
                      style={{
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      }}
                    >
                      {project.title}
                    </h2>

                    <div
                      className={`grid gap-4 lg:gap-5 ${
                        project.photos.length >= 4
                          ? "grid-cols-2 lg:grid-cols-4"
                          : project.photos.length === 3
                            ? "grid-cols-2 lg:grid-cols-3"
                            : "grid-cols-2"
                      }`}
                    >
                      {project.photos.map((photo) =>
                        photo.kind === "image" ? (
                          <figure
                            key={photo.src}
                            className="relative aspect-4/3 overflow-hidden rounded-md bg-ga-gray-100 ring-1 ring-[#D8D4CC]"
                          >
                            <Image
                              src={photo.src}
                              alt={photo.alt}
                              fill
                              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 220px"
                              className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
                            />
                          </figure>
                        ) : (
                          <PhotoPlaceholder
                            key={photo.filename}
                            label={photo.label}
                            subject={photo.subject}
                            filename={photo.filename}
                            dimensions="1200 × 900 px (4:3)"
                            aspect="4 / 3"
                          />
                        )
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Results narrative band ---- */}
        <section
          aria-labelledby="results-heading"
          className="bg-[#F7F6F3] border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-20 items-start">
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-5">
                  Results
                </p>
                <h2
                  id="results-heading"
                  className="font-bold text-ga-black leading-[0.98] tracking-tight"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  }}
                >
                  Proven HVAC results
                  <br />
                  across Southern
                  <br />
                  California.
                </h2>
              </div>
              <div className="flex flex-col gap-6 text-base lg:text-[17px] text-ga-gray-600 leading-relaxed">
                <p>
                  We&rsquo;ve completed a wide range of successful HVAC
                  projects for commercial clients across Southern California.
                  From replacing aging systems with modern, high-efficiency
                  equipment to identifying critical faults during routine
                  maintenance, our team delivers measurable results that improve
                  operational performance. We&rsquo;ve helped businesses reduce
                  energy waste, lower ongoing service costs, and gain greater
                  control of their environments through strategic building
                  automation upgrades.
                </p>
                <p>
                  Whether it&rsquo;s a retail space, office building, or
                  industrial site, we provide scalable, practical solutions
                  tailored to the long-term performance, reliability, and
                  efficiency of your HVAC system &mdash; so you can focus on
                  what matters most: running your business with confidence and
                  comfort every day.
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact/"
                    className="btn-arrow-slide inline-flex items-center gap-3 h-13 px-7 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] hover:shadow-[0_8px_28px_-4px_rgba(212,32,39,0.5)] transition-all duration-200"
                    style={{ fontFamily: "var(--font-dm-sans)" }}
                  >
                    Schedule My Services
                    <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---- Form section ---- */}
        <section
          aria-labelledby="project-form-heading"
          className="bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 lg:gap-20 items-start">

              {/* Left — headline block + phone CTA */}
              <div className="lg:sticky lg:top-32">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-ga-red mb-5">
                  Start a Project
                </p>
                <h2
                  id="project-form-heading"
                  className="font-bold text-ga-black leading-[0.98] tracking-tight mb-6"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Tell us about your
                  <br />
                  HVAC project.
                </h2>
                <p className="text-base lg:text-[17px] text-ga-gray-600 leading-relaxed mb-8 max-w-md">
                  Contact us today to bring smarter HVAC solutions to your
                  facility. We&rsquo;ll review the scope and reach out within
                  one business day.
                </p>
                <a
                  href="tel:+19516964495"
                  className="inline-flex items-center gap-3 h-13 px-6 rounded-xl text-sm font-bold bg-white text-[#111318] border border-[#D4D0CA] hover:border-[#B0AAA0] hover:shadow-[0_2px_8px_-2px_rgba(17,19,24,0.10)] transition-all"
                  style={{ fontFamily: "var(--font-dm-sans)" }}
                  aria-label="Call Gardner Air"
                >
                  <Phone size={16} className="text-ga-red" aria-hidden="true" />
                  (951) 696-4495
                </a>

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

              {/* Right — form panel */}
              <div className="rounded-xl bg-[#F7F6F3] border border-[#D8D4CC] p-6 sm:p-10 lg:p-12">
                <p className="text-xs text-ga-gray-600 mb-6">
                  <span className="text-ga-red font-semibold" aria-hidden="true">*</span>{" "}
                  indicates required fields
                </p>
                <ContactForm submitLabel="Send Project Details" />
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
