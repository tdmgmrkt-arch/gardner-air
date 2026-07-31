/**
 * SiteFooter — elevation pass. Statement footer.
 *
 * Classic Awwwards move: massive typographic wordmark spanning the full width
 * at the bottom. GARDNER AIR in display type — outline stroke on dark background.
 * Contact block + nav columns above it.
 *
 */
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FOOTER_NAV = [
  {
    heading: "Services",
    links: [
      { label: "Preventative Maintenance", href: "/commercial-hvac-services/preventative-maintenance/" },
      { label: "Commercial HVAC Repair", href: "/commercial-hvac-services/repair/" },
      { label: "Equipment Replacement", href: "/commercial-hvac-services/replacement/" },
      { label: "Installation", href: "/commercial-hvac-services/installation/" },
    ],
  },
  {
    heading: "Equipment",
    links: [
      { label: "Package Units", href: "/equipment/package-units" },
      { label: "Chillers", href: "/equipment/chillers" },
      { label: "Cooling Towers", href: "/equipment/cooling-towers" },
      { label: "Boilers", href: "/equipment/boilers" },
      { label: "All Equipment", href: "/equipment" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Certifications", href: "/about#certifications" },
      { label: "Service Area", href: "/service-area" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "(951) 696-4495", href: "tel:+19516964495" },
      { label: "service@gardnerci.com", href: "mailto:service@gardnerci.com" },
      { label: "30714 Wealth St, Murrieta, CA 92563", href: "https://www.google.com/maps/search/?api=1&query=30714+Wealth+St+Murrieta+CA+92563" },
      { label: "Request a Proposal", href: "/contact/" },
    ],
  },
];

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2126] text-white overflow-hidden" role="contentinfo">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">

        {/* Top: logo + tagline + CTA + nav columns */}
        <div className="pt-16 lg:pt-20 pb-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 lg:gap-20">

          {/* Left: logo + tagline + CTA */}
          <div>
            <Link href="/" aria-label="Gardner Air — home">
              <Image
                src="/gardnerairlogo.webp"
                alt="Gardner Air logo"
                width={205}
                height={44}
                className="h-7 w-auto object-contain mb-5"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed mb-6 max-w-[220px]">
              Commercial HVAC preventative maintenance specialists.
              Southern California.
            </p>
            {/* Subtle CTA */}
            <Link
              href="/contact/"
              className="btn-arrow-slide inline-flex items-center gap-2 text-sm font-semibold text-[#D42027] hover:text-white transition-colors"
            >
              Request a Proposal
              <ArrowRight size={14} className="arrow-icon" aria-hidden="true" />
            </Link>
            {/* NAP */}
            <address className="not-italic text-xs text-white/35 mt-8 leading-relaxed">
              30714 Wealth St, Murrieta, CA 92563
              <br />
              <a href="tel:+19516964495" className="hover:text-white transition-colors">
                (951) 696-4495
              </a>
              <br />
              <a href="mailto:service@gardnerci.com" className="hover:text-white transition-colors">
                service@gardnerci.com
              </a>
            </address>
          </div>

          {/* Right: nav columns */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {FOOTER_NAV.map((col) => (
              <div key={col.heading}>
                <p className="text-[10px] font-mono font-semibold uppercase tracking-widest text-white/50 mb-5">
                  {col.heading}
                </p>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hairline divider */}
      <div className="border-t border-white/[0.07]" />

      {/* Legal bar */}
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
        <div className="py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-white/50 uppercase tracking-widest">
            &copy; {currentYear} Gardner Air · All rights reserved
          </p>
          <div className="flex items-center gap-5">
            <Link href="/privacy-policy/" className="font-mono text-[10px] text-white/50 hover:text-white/80 uppercase tracking-widest transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="font-mono text-[10px] text-white/50 hover:text-white/80 uppercase tracking-widest transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
}
