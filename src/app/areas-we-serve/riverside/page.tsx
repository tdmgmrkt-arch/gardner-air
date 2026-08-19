import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Award,
  Shield,
  Zap,
  ChevronDown,
} from "lucide-react";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";
import { Testimonials, type TestimonialItem } from "@/components/home/Testimonials";
import { AreaServicesGrid } from "@/components/areas/ServicesGrid";
import { AreaWhyBlock } from "@/components/areas/WhyBlock";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title:
    "Commercial HVAC Riverside County — Southern California | Gardner Air",
  description:
    "Gardner Air delivers commercial HVAC preventative maintenance, repair, and installation across Riverside County, CA — factory-trained technicians, rapid response, documented service.",
  alternates: {
    canonical: "https://gardnerair.com/areas-we-serve/riverside/",
  },
  openGraph: {
    title:
      "Commercial HVAC Riverside County — Southern California | Gardner Air",
    description:
      "Gardner Air delivers commercial HVAC preventative maintenance, repair, and installation across Riverside County, CA — factory-trained technicians, rapid response, documented service.",
    url: "https://gardnerair.com/areas-we-serve/riverside/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Gardner Air",
  description:
    "Commercial HVAC preventative maintenance, repair, replacement, and installation in Riverside County, CA.",
  url: "https://gardnerair.com/areas-we-serve/riverside/",
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
  areaServed: {
    "@type": "County",
    name: "Riverside County",
    containedIn: { "@type": "State", name: "California" },
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
    { "@type": "ListItem", position: 2, name: "Areas We Serve", item: "https://gardnerair.com/areas-we-serve/" },
    { "@type": "ListItem", position: 3, name: "Riverside County", item: "https://gardnerair.com/areas-we-serve/riverside/" },
  ],
};

const FAQS: { q: string; a: string }[] = [
  {
    q: "What cities in Riverside County does Gardner Air serve?",
    a: "Gardner Air serves commercial facilities throughout Riverside County including Murrieta, Temecula, Hemet, Perris, Moreno Valley, Riverside, Corona, Palm Springs, Banning, and surrounding communities. Contact our team if you&rsquo;re unsure whether your location falls within our service area.",
  },
  {
    q: "How quickly can Gardner Air respond to an HVAC repair call in Riverside County?",
    a: "Gardner Air is headquartered in Murrieta, placing us at the heart of the Riverside County service area. Maintenance-agreement clients receive priority dispatch with confirmed arrival windows. We&rsquo;re typically on-site for urgent commercial calls within one business day.",
  },
  {
    q: "Does Gardner Air handle preventative maintenance for large commercial facilities in the Inland Empire?",
    a: "Yes. Gardner Air specializes in full-scope preventative maintenance for commercial and industrial facilities of all sizes — warehouses, distribution centers, manufacturing plants, office parks, schools, and owner-occupied commercial buildings. Our maintenance visits cover the complete scope of your HVAC system, documented in a same-day service report.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a.replace(/&rsquo;/g, "'") },
  })),
};

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified" },
  { Icon: Shield, text: "CSLB Licensed" },
  { Icon: Zap, text: "Factory-Trained" },
];

const AREA_TESTIMONIALS: TestimonialItem[] = [
  {
    quote:
      "Bulmaro and the Gardner Air crew were professional, on time, and thorough. They documented everything and walked me through what they found. Best HVAC experience I've had with a commercial contractor.",
    name: "Bulmaro Gonzalez",
    initials: "BG",
    role: "Facilities Manager",
    company: "Commercial Facility · Riverside County",
    industry: "Commercial",
  },
  {
    quote:
      "Gardner Air has been maintaining our building's systems for over a year. Their same-day reports and consistent technicians make it easy to manage our maintenance budget and equipment history.",
    name: "Diana Dreibelbis",
    initials: "DD",
    role: "Property Manager",
    company: "Commercial Real Estate · Inland Empire",
    industry: "Real Estate",
  },
  {
    quote:
      "We had a rooftop unit fail mid-summer. Gardner Air diagnosed the root cause on the first visit and had us back up and running fast. They didn't oversell — just fixed what needed fixing.",
    name: "Dana Wood",
    initials: "DW",
    role: "Operations Director",
    company: "Industrial Facility · Riverside County",
    industry: "Industrial",
  },
  {
    quote:
      "Switching to Gardner Air's preventative maintenance program was one of the best decisions we made for our building. Fewer surprises, better documentation, and a team that actually shows up when they say they will.",
    name: "Kelly Crull",
    initials: "KC",
    role: "VP of Facilities",
    company: "Office Portfolio · Southern California",
    industry: "Office",
  },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function RiversidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SiteHeader />

      <main id="main-content">

        {/* ------------------------------------------------------------------ */}
        {/* Hero                                                                */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="riverside-hero-heading"
          className="relative min-h-[58vh] lg:min-h-[54vh] flex flex-col overflow-hidden"
          style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="/Areas/Riverside.webp"
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
                  <Link href="/areas-we-serve/" className="hover:text-white/70 transition-colors">
                    Areas We Serve
                  </Link>
                </li>
                <li aria-hidden="true">/</li>
                <li className="text-white/60">Riverside County</li>
              </ol>
            </nav>

            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Riverside County, CA
            </p>

            <h1
              id="riverside-hero-heading"
              className="font-bold text-white leading-[0.92] tracking-[-0.035em] mb-8 max-w-4xl"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)",
              }}
            >
              Commercial HVAC service,{" "}
              <br className="hidden lg:block" />
              <span className="text-[#D42027]">Riverside County.</span>
            </h1>

            <p className="text-white/65 text-base lg:text-lg leading-relaxed max-w-xl mb-10">
              Gardner Air provides preventative maintenance, repair, and installation for
              commercial facilities across Riverside County&rsquo;s Inland Empire &mdash;
              factory-trained technicians, documented service, rapid response.
            </p>

            <Link
              href="#riverside-contact"
              className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_rgba(212,32,39,0.40)] hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)] transition-all duration-200 min-h-[44px] self-start"
              style={{ fontFamily: "var(--font-dm-sans)" }}
            >
              Schedule Service in Riverside County
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
        {/* Intro Section                                                       */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="riverside-intro-heading"
          className="py-16 lg:py-28 bg-white border-t border-[#E5E7EB]"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start">
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
                  Riverside County Commercial HVAC
                </p>
                <h2
                  id="riverside-intro-heading"
                  className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-8"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  Inland Empire&rsquo;s Premier Commercial HVAC Specialists
                </h2>
                <div className="flex flex-col gap-6 text-base lg:text-lg text-[#6B7280] leading-relaxed">
                  <p>
                    Riverside County sits at the heart of Southern California&rsquo;s most demanding commercial HVAC
                    environment. Summer temperatures regularly exceed 110&deg;F in the inland valleys, while
                    warehouses, distribution centers, and manufacturing facilities push cooling systems well
                    beyond residential-grade limits.
                  </p>
                  <p>
                    Gardner Air is headquartered in Murrieta and has maintained commercial HVAC systems across
                    the Inland Empire for years. Our technicians know the equipment, the climate, and the facilities
                    in this region &mdash; and our full-scope preventative maintenance programs are built to keep
                    your commercial building running reliably through the most demanding cooling seasons.
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-5">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/Areas/inaland-empire-hvac.webp"
                    alt="Aerial view of commercial rooftop HVAC across the Inland Empire"
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
                    HQ
                  </p>
                  <div className="border-l border-[#D8D4CC] pl-5">
                    <p className="font-mono text-[9px] uppercase tracking-[0.15em] text-[#6B7280] leading-snug">
                      Gardner Air headquarters
                    </p>
                    <p
                      className="font-bold text-[#111318] text-sm mt-1"
                      style={{ fontFamily: "var(--font-dm-sans)" }}
                    >
                      Murrieta, CA &mdash; Riverside County
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AreaServicesGrid
          headingId="riverside-services-heading"
          heading="Full commercial HVAC scope for Riverside County facilities."
        />

        {/* ------------------------------------------------------------------ */}
        {/* Body Content                                                        */}
        {/* ------------------------------------------------------------------ */}
        <AreaWhyBlock
          eyebrow="Why Choose Gardner Air in Riverside County"
          headingId="riverside-body-heading"
          heading="Your Facility Deserves a Partner, Not a Vendor"
          imageSrc="/gardner-air-partner1.webp"
          imageAlt="Gardner Air commercial HVAC technician partnering with a Riverside County facility"
        >
          <p>
            Most commercial HVAC contractors in Riverside County are organized around reactive service calls.
            Gardner Air is built for the opposite &mdash; we operate as a long-term partner for your facility,
            not a transactional vendor who shows up when something breaks.
          </p>
          <p>
            Our preventative maintenance programs document your equipment condition on every visit, flag
            developing issues before they become failures, and produce same-day service reports your
            facilities team can use for capital planning and warranty records.
          </p>
          <p>
            When a repair is needed, our factory-trained technicians diagnose at the root cause &mdash; not
            the symptom. That means fewer repeat calls, honest repair-versus-replace guidance, and fixes
            that hold.
          </p>
        </AreaWhyBlock>

        {/* ------------------------------------------------------------------ */}
        {/* Mid CTA band                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-label="Schedule HVAC service in Riverside County"
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
                Riverside County Service
              </p>
              <h2
                className="font-bold text-white leading-[1.05] tracking-tight mb-5"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                }}
              >
                Ready to Protect Your Riverside County Building&rsquo;s HVAC System?
              </h2>
              <p className="text-white/65 text-base leading-relaxed mb-8">
                Gardner Air&rsquo;s Murrieta-based team serves commercial facilities throughout Riverside County.
                Schedule a site walkthrough and we&rsquo;ll put a written maintenance proposal in your hands
                within one business day.
              </p>
              <Link
                href="#riverside-contact"
                className="inline-flex items-center gap-3 h-14 px-8 rounded-xl text-sm font-bold bg-[#D42027] text-white hover:bg-[#B01C22] shadow-[0_4px_20px_-4px_rgba(212,32,39,0.4)] transition-all duration-200 min-h-[44px]"
                style={{ fontFamily: "var(--font-dm-sans)" }}
              >
                Schedule a Site Walkthrough
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Testimonials                                                        */}
        {/* ------------------------------------------------------------------ */}
        <Testimonials
          items={AREA_TESTIMONIALS}
          heading="What Riverside County clients say."
          subhead="Real feedback from commercial facilities managers and operators across the Inland Empire."
        />

        {/* ------------------------------------------------------------------ */}
        {/* FAQ                                                                 */}
        {/* ------------------------------------------------------------------ */}
        <section
          aria-labelledby="riverside-faq-heading"
          className="border-t border-[#E5E7EB] py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-5">
              FAQ
            </p>
            <h2
              id="riverside-faq-heading"
              className="font-bold text-[#111318] leading-[0.95] tracking-tight mb-12 lg:mb-16"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
              }}
            >
              Frequently Asked Questions About HVAC Service in Riverside County
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
                    Our team responds to facility-specific questions within one business day.
                    If you&rsquo;re in Riverside County and need to discuss scope, equipment, or scheduling,
                    reach out directly.
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
        </section>

        {/* ------------------------------------------------------------------ */}
        {/* Contact Form                                                        */}
        {/* ------------------------------------------------------------------ */}
        <section
          id="riverside-contact"
          aria-labelledby="riverside-form-heading"
          style={{ background: "#F7F6F3" }}
          className="border-t border-[#E5E7EB] py-16 lg:py-28"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-12 lg:gap-20 items-start">

              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-[#D8D4CC]">
                <ContactForm
                  headline="Schedule HVAC Service in Riverside County"
                  subhead="Tell us about your facility and equipment. Our Murrieta-based team will follow up within one business day."
                  submitLabel="Schedule My Service"
                />
              </div>

              <div className="lg:pt-4">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-8">
                  What Happens Next
                </p>
                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-8">
                  {[
                    { num: "01", body: "We confirm your facility and equipment details" },
                    { num: "02", body: "A technician schedules a site walkthrough" },
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
                    Prefer to call?
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
