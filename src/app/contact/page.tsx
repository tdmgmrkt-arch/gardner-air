import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ArrowRight, Award, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { SiteHeader } from "@/components/home/SiteHeader";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { ContactForm } from "@/components/forms/ContactForm";
import { LazyMap } from "@/components/contact/LazyMap";

/* ------------------------------------------------------------------ */
/* Metadata                                                             */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: "Contact Gardner Air — Commercial HVAC Southern California",
  description:
    "Schedule a commercial HVAC maintenance proposal with Gardner Air. Serving Riverside, San Bernardino, and Orange County facilities.",
  alternates: {
    canonical: "https://gardnerair.com/contact/",
  },
  openGraph: {
    title: "Contact Gardner Air — Commercial HVAC Southern California",
    description:
      "Schedule a commercial HVAC maintenance proposal with Gardner Air. Serving Riverside, San Bernardino, and Orange County facilities.",
    url: "https://gardnerair.com/contact/",
  },
};

/* ------------------------------------------------------------------ */
/* JSON-LD                                                              */
/* ------------------------------------------------------------------ */
const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Gardner Air",
  description:
    "Contact the Gardner Air commercial HVAC maintenance team to schedule a preventative maintenance proposal for your Southern California facility.",
  url: "https://gardnerair.com/contact/",
  mainEntity: {
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
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://gardnerair.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://gardnerair.com/contact/" },
  ],
};

/* ------------------------------------------------------------------ */
/* Contact info items                                                   */
/* ------------------------------------------------------------------ */
const INFO_ITEMS = [
  {
    Icon: MapPin,
    label: "Address",
    content: "30714 Wealth St, Murrieta, CA 92563",
    href: "https://www.google.com/maps/search/?api=1&query=30714+Wealth+St+Murrieta+CA+92563",
  },
  {
    Icon: Phone,
    label: "Phone",
    content: "(951) 696-4495",
    href: "tel:+19516964495",
  },
  {
    Icon: Mail,
    label: "Email",
    content: "service@gardnerci.com",
    href: "mailto:service@gardnerci.com",
  },
  {
    Icon: Clock,
    label: "Business Hours",
    content: "Mon–Fri · 7:30 AM – 4:00 PM",
    href: null,
  },
];

const NOT_SERVED = ["Residential", "Restaurants Only", "Government Bid Work"];

const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified" },
  { Icon: Shield, text: "CSLB Licensed" },
  { Icon: Zap, text: "Factory-Trained" },
];

/* ------------------------------------------------------------------ */
/* Page                                                                 */
/* ------------------------------------------------------------------ */
export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <SiteHeader />

      <main id="main-content">
        {/* ---- Hero ---- */}
        <section
          aria-labelledby="contact-hero-heading"
          className="relative isolate overflow-hidden bg-[#1E2126] pt-[140px] lg:pt-[160px]"
        >
          <Image
            src="/contact.hero.webp"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="object-cover object-[50%_25%] opacity-30 pointer-events-none select-none"
            sizes="100vw"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-r from-ga-charcoal-footer via-ga-charcoal-footer/92 to-ga-charcoal-footer/72 pointer-events-none"
          />
          <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 mb-16 lg:mb-24">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-[#D42027] mb-5">
              Contact
            </p>
            <h1
              id="contact-hero-heading"
              className="font-bold text-white leading-[0.95] tracking-tight mb-6"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
              }}
            >
              Talk to our commercial
              <br />
              maintenance team.
            </h1>
            <p className="text-white/75 text-base lg:text-lg leading-relaxed max-w-xl">
              Tell us about your facility. We&rsquo;ll build a preventative program
              around your equipment, schedule, and operating standards.
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

        {/* ---- Main section: form + contact info ---- */}
        <section
          aria-label="Contact form and information"
          className="py-16 lg:py-28 bg-white"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-14 lg:gap-20 items-start">

              {/* LEFT — Contact form */}
              <div>
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-6">
                  Send a Message
                </p>
                <ContactForm submitLabel="Send Message" />
              </div>

              {/* RIGHT — Contact info panel */}
              <aside aria-label="Contact information">
                <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-6">
                  Our Information
                </p>

                <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-b border-[#D8D4CC] mb-10">
                  {INFO_ITEMS.map(({ Icon, label, content, href }) => (
                    <div key={label} className="flex gap-4 py-5 items-start">
                      <div className="flex-shrink-0 flex items-center justify-center w-9 h-9 rounded bg-[#F7F6F3]">
                        <Icon size={16} className="text-[#D42027]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-1">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm font-medium text-[#111318] hover:text-[#D42027] transition-colors leading-snug"
                            {...(href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {content}
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-[#111318] leading-snug">
                            {content}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Service area mini-block */}
                <div className="rounded-lg bg-[#F7F6F3] p-6 mb-8">
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-3">
                    Service Area
                  </p>
                  <p
                    className="font-bold text-[#111318] leading-snug mb-2"
                    style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1.0625rem" }}
                  >
                    Riverside · San Bernardino · Orange County
                  </p>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    We travel to your facility &mdash; 50-mile radius from
                    Murrieta, CA. Commercial and industrial facilities only.
                  </p>
                </div>

                {/* "We do NOT service" qualifier */}
                <div>
                  <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-3">
                    We Do Not Service
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {NOT_SERVED.map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center h-8 px-3 rounded-full text-xs font-semibold bg-[#F4F5F6] text-[#6B7280] border border-[#D8D4CC]"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        {/* ---- Qualifier band ---- */}
        <section
          aria-label="Service qualifier"
          className="border-t border-[#E5E7EB] bg-[#F7F6F3] py-10 lg:py-12"
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.15em] text-[#6B7280] mb-2">
                Commercial clients only
              </p>
              <p className="text-sm text-[#4B5563] leading-relaxed max-w-xl">
                Gardner Air exclusively serves owner-occupied commercial buildings,
                industrial facilities, and institutional campuses. We do not accept
                residential, restaurant-only, or government low-bid contracts.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 flex-shrink-0">
              {NOT_SERVED.map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center h-8 px-3 rounded-full text-xs font-semibold bg-white text-[#6B7280] border border-[#D8D4CC]"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ---- Map ---- */}
        <section aria-label="Gardner Air office location on map" className="border-t border-[#E5E7EB]">
          <LazyMap />
        </section>
      </main>

      <SiteFooter />
      <MobileCTABar />
    </>
  );
}
