"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Menu,
  X,
  Phone,
  MapPin,
  Clock,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Navigation configuration                                            */
/* ------------------------------------------------------------------ */
type MegaService = {
  num: string;
  title: string;
  body: string;
  href: string;
};

type MegaFeature = {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  ctaLabel: string;
  ctaHref: string;
};

type MegaContent = {
  eyebrow: string;
  headline: string;
  intro: string;
  services: MegaService[];
  feature: MegaFeature;
};

type NavChild = { label: string; href: string };
type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
  mega?: MegaContent;
};

const NAV: NavItem[] = [
  {
    label: "Commercial HVAC Services",
    href: "/commercial-hvac-services/",
    mega: {
      eyebrow: "What We Do",
      headline: "Four services. One standard.",
      intro:
        "Commercial-only HVAC — factory-trained technicians, full-scope service, documented on every visit.",
      services: [
        {
          num: "01",
          title: "Preventative Maintenance",
          body: "Programs built around your facility's schedule and equipment mix. Full-scope visits — not time-blocks.",
          href: "/commercial-hvac-services/preventative-maintenance/",
        },
        {
          num: "02",
          title: "Repair",
          body: "Certified technicians resolve HVAC issues fast — no guesswork, no upsells. Same-visit resolution on most calls.",
          href: "/commercial-hvac-services/repair/",
        },
        {
          num: "03",
          title: "Replacement",
          body: "We determine when replacement saves more than repair, then install with minimal disruption to operations.",
          href: "/commercial-hvac-services/replacement/",
        },
        {
          num: "04",
          title: "Installation",
          body: "Retrofits and full-system overhauls, engineered for your building. Commercial-grade equipment, certified installation.",
          href: "/commercial-hvac-services/installation/",
        },
      ],
      feature: {
        eyebrow: "Featured Program",
        title: "17-point maintenance scope",
        body: "Every visit delivers the full scope — regardless of how long it takes. Same-day service reports, no clock-outs.",
        image: "/CompleteScope.webp",
        ctaLabel: "See the full scope",
        ctaHref: "/commercial-hvac-services/preventative-maintenance/",
      },
    },
  },
  { label: "Building Automation", href: "/building-automation" },
  {
    label: "About",
    href: "/about",
    mega: {
      eyebrow: "The Company",
      headline: "Built for commercial. Proven since 1985.",
      intro:
        "Family-run, master-technician-led, and structured to serve Southern California's most demanding facilities.",
      services: [
        {
          num: "01",
          title: "Areas We Serve",
          body: "Three-county coverage across Southern California — Riverside, San Bernardino, and Orange.",
          href: "/areas-we-serve",
        },
        {
          num: "02",
          title: "Leadership Team",
          body: "Second-generation ownership. Master-technician-led operations. Long-tenured field crews.",
          href: "/about/leadership-team",
        },
        {
          num: "03",
          title: "Insights & Field Notes",
          body: "Technical field notes and long-form commercial HVAC guidance from the Gardner Air team.",
          href: "/blog",
        },
      ],
      feature: {
        eyebrow: "Portfolio",
        title: "Case studies from the field",
        body: "How we've reduced emergency service calls, extended equipment life, and cut energy costs for Southern California facilities.",
        image: "/CaseStudies.webp",
        ctaLabel: "View the portfolio",
        ctaHref: "/portfolio",
      },
    },
  },
  { label: "Portfolio", href: "/portfolio" },
];

/* ------------------------------------------------------------------ */
/* Component                                                           */
/* ------------------------------------------------------------------ */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openMega, setOpenMega] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMega(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Solid header while a mega menu is open, so panel + header read as one surface.
  const isTransparent = !scrolled && !menuOpen && !openMega;

  function openNow(label: string) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMega(label);
  }

  function scheduleClose() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMega(null), 140);
  }

  function toggleMobile(label: string) {
    setMobileExpanded((prev) => (prev === label ? null : label));
  }

  return (
    <>
      {/* Top utility bar */}
      <div
        className={`fixed top-0 inset-x-0 z-[60] transition-all duration-300 ease-out overflow-hidden ${
          scrolled ? "max-h-0 opacity-0" : "max-h-10 opacity-100"
        }`}
      >
        <div className="bg-[#0A0A0A] text-white/85 border-b border-white/10">
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="hidden lg:flex items-center justify-between h-10 text-[11px] font-medium uppercase tracking-[0.16em]">
              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2">
                  <MapPin size={12} className="text-ga-red" />
                  Serving Southern California &mdash; 5-County Coverage
                </span>
                <span className="flex items-center gap-2 text-white/60">
                  <Clock size={12} />
                  Mon&ndash;Fri 7a&ndash;5p &middot; Planned commercial service
                </span>
              </div>
              <a
                href="tel:+19516964495"
                className="flex items-center gap-2 text-white hover:text-ga-red transition-colors"
                aria-label="Call Gardner Air"
              >
                <Phone size={12} />
                <span>(951) 696-4495</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <header
        className={`fixed inset-x-0 z-50 transition-all duration-300 ease-out ${
          scrolled ? "top-0" : "top-10"
        } ${
          isTransparent
            ? "bg-transparent"
            : `bg-white ${scrolled ? "shadow-[0_1px_0_0_#E5E7EB]" : "border-b border-[#EDEEF0]"}`
        }`}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] lg:h-[84px]">

            <Link
              href="/"
              className="flex-shrink-0 flex items-center"
              aria-label="Gardner Air — home"
              onMouseEnter={scheduleClose}
            >
              <Image
                src="/gardnerairlogo.webp"
                alt="Gardner Air logo"
                width={260}
                height={56}
                priority
                className="h-8 lg:h-9 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-7">
              {NAV.map((item) =>
                item.mega ? (
                  /* 2a. Items with mega: container handles hover-open;
                     Link handles click-navigate; chevron is decorative. */
                  <div
                    key={item.label}
                    className="flex items-center gap-0.5"
                    onMouseEnter={() => openNow(item.label)}
                    onFocus={() => openNow(item.label)}
                    onMouseLeave={scheduleClose}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpenMega(null)}
                      className={`text-[12.5px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                        isTransparent
                          ? "text-white/85 hover:text-white"
                          : `text-[#0A0A0A]/80 hover:text-ga-red ${
                              openMega === item.label ? "text-ga-red" : ""
                            }`
                      }`}
                    >
                      {item.label}
                    </Link>
                    {/* Chevron — decorative indicator only */}
                    <span
                      aria-hidden="true"
                      className={`transition-transform duration-200 ${
                        openMega === item.label ? "rotate-180" : ""
                      } ${
                        isTransparent ? "text-white/70" : "text-[#0A0A0A]/50"
                      }`}
                    >
                      <ChevronDown size={13} />
                    </span>
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={scheduleClose}
                    className={`text-[12.5px] font-semibold uppercase tracking-[0.12em] transition-colors ${
                      isTransparent
                        ? "text-white/85 hover:text-white"
                        : "text-[#0A0A0A]/80 hover:text-ga-red"
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </nav>

            <div
              className="hidden lg:flex items-center"
              onMouseEnter={scheduleClose}
            >
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center h-11 px-6 rounded text-[13px] font-semibold uppercase tracking-[0.14em] bg-[#D42027] text-white hover:bg-[#B01C22] transition-colors"
              >
                Request Proposal
              </Link>
            </div>

            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden flex items-center justify-center w-11 h-11 rounded transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-[#0A0A0A] hover:bg-ga-gray-100"
              }`}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Full-width Mega Menu Panel — editorial cream surface, magazine-style */}
        <div
          className={`hidden lg:block absolute left-0 right-0 top-full ${
            openMega ? "pointer-events-auto" : "pointer-events-none"
          }`}
          onMouseEnter={() => openMega && openNow(openMega)}
          onMouseLeave={scheduleClose}
        >
          <div
            className={`origin-top transition-[opacity,transform] duration-200 ease-out ${
              openMega
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-1 invisible"
            }`}
            style={{ background: "#F7F6F3" }}
            aria-hidden={!openMega}
          >
            {/* Hairline red top accent */}
            <div className="h-px w-full bg-ga-red/70" aria-hidden="true" />

            <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 py-12 lg:py-14">
              {NAV.map(
                (item) =>
                  item.mega &&
                  openMega === item.label && (
                    <MegaPanel
                      key={item.label}
                      content={item.mega}
                      parentHref={item.href}
                      onNavigate={() => setOpenMega(null)}
                    />
                  )
              )}
            </div>

            {/* Bottom hairline — softens edge into next section */}
            <div className="h-px w-full bg-[#D8D4CC]" aria-hidden="true" />
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div
            id="mobile-nav"
            className="lg:hidden border-t border-[#E5E7EB] bg-white"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation"
          >
            <nav className="mx-auto max-w-[1280px] px-5 py-4 flex flex-col gap-1">
              {NAV.map((item) => {
                const megaChildren: NavChild[] | undefined = item.mega
                  ? [
                      /* 2c. "View all" as first child */
                      { label: `View all ${item.label}`, href: item.href },
                      ...item.mega.services.map((s) => ({
                        label: s.title,
                        href: s.href,
                      })),
                    ]
                  : item.children;

                return megaChildren ? (
                  <div key={item.label}>
                    {/* 2c. Split row: Link label + separate chevron button */}
                    <div className="flex items-center gap-0">
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex-1 flex items-center h-11 px-2 text-base font-medium text-[#0A0A0A] hover:text-ga-red hover:bg-ga-gray-100 rounded-l transition-colors"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleMobile(item.label)}
                        aria-expanded={mobileExpanded === item.label}
                        aria-label={`${mobileExpanded === item.label ? "Collapse" : "Expand"} ${item.label} submenu`}
                        className="flex items-center justify-center w-11 h-11 text-[#0A0A0A] hover:text-ga-red hover:bg-ga-gray-100 rounded-r transition-colors border-l border-[#E5E7EB]"
                      >
                        <ChevronDown
                          size={16}
                          className={`transition-transform duration-200 ${
                            mobileExpanded === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    </div>
                    {mobileExpanded === item.label && (
                      <div className="ml-4 flex flex-col gap-0.5 mt-0.5 mb-1">
                        {megaChildren.map((child, idx) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMenuOpen(false)}
                            className={`flex items-center h-10 px-2 text-sm font-medium hover:bg-ga-gray-100 rounded transition-colors ${
                              idx === 0
                                ? "text-ga-red font-semibold hover:text-ga-red"
                                : "text-[#0A0A0A]/70 hover:text-ga-red"
                            }`}
                          >
                            {idx === 0 && (
                              <ArrowRight size={13} className="mr-1.5 shrink-0" aria-hidden="true" />
                            )}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center h-11 px-2 text-base font-medium text-[#0A0A0A] hover:text-ga-red hover:bg-ga-gray-100 rounded transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="mt-3 pt-3 border-t border-[#E5E7EB] flex flex-col gap-2">
                <a
                  href="tel:+19516964495"
                  className="flex items-center justify-center gap-2 h-11 w-full rounded text-sm font-semibold border border-ga-red text-ga-red hover:bg-ga-red hover:text-white transition-colors"
                  aria-label="Call Gardner Air"
                >
                  <Phone size={16} />
                  Call Us &mdash; (951) 696-4495
                </a>
                <Link
                  href="/contact/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center h-11 w-full rounded text-sm font-semibold bg-[#D42027] text-white hover:bg-[#B01C22] transition-colors"
                >
                  Request Proposal
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Backdrop veil — dims page content behind an open mega menu */}
      <div
        className={`hidden lg:block fixed inset-0 z-40 bg-black/25 transition-opacity duration-200 ${
          openMega ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpenMega(null)}
        aria-hidden="true"
      />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Mega Menu Panel — editorial magazine layout                         */
/* ------------------------------------------------------------------ */
function MegaPanel({
  content,
  parentHref,
  onNavigate,
}: {
  content: MegaContent;
  parentHref: string;
  onNavigate: () => void;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-10 lg:gap-16">
      {/* Left: eyebrow + headline + numbered service rows */}
      <div>
        {/* Eyebrow + headline (left) with intro dek aligned to headline baseline (right) */}
        <div className="mb-8 lg:mb-10 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-6 md:gap-10 md:items-end">
          <div>
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.15em] text-ga-gray-600 mb-4">
              {content.eyebrow}
            </p>
            <h2
              className="font-bold text-ga-black leading-[1.05] tracking-tight"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "clamp(1.5rem, 2.25vw, 2rem)",
              }}
            >
              {content.headline}
            </h2>
          </div>
          <p className="text-sm lg:text-[15px] text-ga-gray-600 leading-relaxed max-w-md">
            {content.intro}
          </p>
        </div>

        <div className="flex flex-col divide-y divide-[#D8D4CC] border-t border-[#D8D4CC]">
          {content.services.map((svc) => (
            <Link
              key={svc.href}
              href={svc.href}
              onClick={onNavigate}
              className="group grid grid-cols-[52px_1fr_20px] gap-4 lg:gap-6 py-5 lg:py-6 items-start hover:bg-white/60 transition-colors -mx-3 px-3 rounded-sm"
            >
              <p
                className="tabular-nums font-bold text-[#D8D4CC] leading-none select-none group-hover:text-ga-red transition-colors pt-1"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontSize: "1.75rem",
                }}
                aria-hidden="true"
              >
                {svc.num}
              </p>
              <div>
                <h3
                  className="font-bold text-ga-black leading-tight tracking-[-0.01em] mb-1 group-hover:text-ga-red transition-colors"
                  style={{
                    fontFamily: "var(--font-dm-sans)",
                    fontSize: "1.0625rem",
                  }}
                >
                  {svc.title}
                </h3>
                <p className="text-[13.5px] text-ga-gray-600 leading-relaxed max-w-lg">
                  {svc.body}
                </p>
              </div>
              <ArrowRight
                size={18}
                className="text-ga-black/50 mt-1.5 group-hover:text-ga-red group-hover:translate-x-1 transition-all"
                aria-hidden="true"
              />
            </Link>
          ))}

          {/* 2b. "View all" as a final row — parallels the numbered rows */}
          <Link
            href={parentHref}
            onClick={onNavigate}
            className="group grid grid-cols-[52px_1fr_20px] gap-4 lg:gap-6 py-5 lg:py-6 items-center hover:bg-white/60 transition-colors -mx-3 px-3 rounded-sm"
          >
            <span aria-hidden="true" />
            <p
              className="font-bold text-ga-red leading-tight tracking-[-0.01em] group-hover:text-ga-red/80 transition-colors"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1.0625rem",
              }}
            >
              View all Commercial HVAC services
            </p>
            <ArrowRight
              size={18}
              className="text-ga-red/60 group-hover:text-ga-red group-hover:translate-x-1 transition-all"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>

      {/* Right: feature card — photo + editorial CTA block */}
      <aside className="flex flex-col gap-5">
        <div className="relative aspect-4/3 rounded overflow-hidden">
          <Image
            src={content.feature.image}
            alt=""
            fill
            sizes="(max-width: 1024px) 100vw, 420px"
            className="object-cover"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, rgba(30,33,38,0.05) 0%, rgba(30,33,38,0.55) 100%)",
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-x-0 bottom-0 p-5 lg:p-6">
            <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 mb-2">
              {content.feature.eyebrow}
            </p>
            <p
              className="font-bold text-white leading-tight tracking-[-0.01em]"
              style={{
                fontFamily: "var(--font-dm-sans)",
                fontSize: "1.25rem",
              }}
            >
              {content.feature.title}
            </p>
          </div>
        </div>

        <p className="text-[13.5px] text-ga-gray-600 leading-relaxed">
          {content.feature.body}
        </p>

        <Link
          href={content.feature.ctaHref}
          onClick={onNavigate}
          className="group inline-flex items-center justify-between gap-3 h-12 px-5 rounded-md bg-ga-charcoal text-white text-[13px] font-semibold hover:bg-[#3A3E45] transition-colors"
          style={{ fontFamily: "var(--font-dm-sans)" }}
        >
          <span className="inline-flex items-center gap-2">
            {content.feature.ctaLabel}
          </span>
          <ArrowUpRight
            size={16}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            aria-hidden="true"
          />
        </Link>
      </aside>
    </div>
  );
}
