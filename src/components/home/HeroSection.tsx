/**
 * HeroSection — Pass 7. Elevated editorial hero.
 *
 * Architecture unchanged (image + headline + CTAs) per owner approval.
 * Elevated from Pass 6:
 *
 * - Hero image: commercial rooftop. Ken-burns slow zoom. Overlay unchanged.
 * - Headline: same powerful "Preventative maintenance, completed in full."
 * - Added: floating trust badge row — 3 credential chips overlaid at bottom of hero
 *   in a blurred semi-transparent bar, similar to Gardner Plumbing's trust chips.
 * - Added: a stat ticker row just above the headline (NATE · EPA 608 · SoCal · 5 Counties).
 * - CTA buttons: Primary gets stronger shadow + red fill. Secondary gets more presence.
 * - The technical readout block (right rail) kept — adds the distinctive engineering editorial quality.
 * - Hero bottom bar: redesigned as a solid charcoal band (not just a hairline) — reads as
 *   intentional, not minimal.
 * - Removed: giant outline "01" numeral — reads as a wireframe artifact.
 */
"use client";

import Link from "next/link";
import { ArrowRight, Award, Shield, Zap } from "lucide-react";

const HERO_VIDEO_URL = "/roof_video_1.mp4";
const HERO_POSTER_URL = "/herooption2.webp";

const TECH_READOUT = [
  { label: "FOCUS", value: "COMMERCIAL ONLY" },
  { label: "REGION", value: "IE · ORANGE COUNTY" },
  { label: "CLIENTS", value: "OWNER-OCCUPIED" },
  { label: "SCOPE", value: "100% EVERY VISIT" },
];

const TRUST_BADGES = [
  { Icon: Award, text: "NATE Certified Technicians" },
  { Icon: Shield, text: "CSLB Licensed & Insured" },
  { Icon: Zap, text: "Factory-Trained — All Major Brands" },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      aria-label="Gardner Air — commercial HVAC maintenance specialists"
      className="relative min-h-[88vh] lg:min-h-[90vh] flex flex-col overflow-hidden"
      style={{ background: "linear-gradient(145deg, #2A2D33 0%, #3A3E45 100%)" }}
    >
      {/* Background video — silent, looping ambient rooftop footage */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          src={HERO_VIDEO_URL}
          poster={HERO_POSTER_URL}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-50"
          style={{ objectPosition: "50% 35%" }}
        />
      </div>

      {/* Multi-layer gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(42,45,51,0.55) 0%, rgba(42,45,51,0.40) 35%, rgba(42,45,51,0.75) 70%, rgba(42,45,51,0.96) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Red accent bar at very top */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-[#D42027] z-10" aria-hidden="true" />

      {/* Technical readout block — right rail */}
      <div
        className="absolute top-[92px] lg:top-[112px] right-5 sm:right-6 lg:right-8 xl:right-10 hidden sm:block z-10"
        aria-hidden="true"
      >
        <div className="flex flex-col gap-[5px] items-end">
          {TECH_READOUT.map((row, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="font-mono text-[9px] font-medium uppercase tracking-[0.18em] text-white/40">
                {row.label}
              </span>
              <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.15em] text-white/65">
                {row.value}
              </span>
            </div>
          ))}
          <div className="mt-2 w-full h-px bg-[#D42027]/40" />
        </div>
      </div>

      {/* Main content */}
      <div
        className="relative flex-1 flex flex-col justify-center w-full mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8 z-10"
        style={{ paddingTop: "calc(100px + 5vh)", paddingBottom: "5vh" }}
      >
        {/* Eyebrow pill */}
        <div className="flex items-center gap-3 mb-6 lg:mb-8 animate-fade-rise">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur-sm">
            <div className="w-1.5 h-1.5 rounded-full bg-[#D42027]" aria-hidden="true" />
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75">
              Commercial HVAC Specialists
            </span>
            <span className="font-mono text-[10px] text-white/30">·</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/55">
              Southern California
            </span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-rise-delay-1" style={{ fontFamily: "var(--font-dm-sans)" }}>
          <span
            className="block font-bold text-white leading-[0.9] tracking-[-0.035em]"
            style={{ fontSize: "clamp(3.5rem, 8vw, 7.5rem)" }}
          >
            Preventative maintenance,
            <br />
            <span className="text-[#D42027]">completed in full.</span>
          </span>
        </h1>

        {/* Sub-copy + CTAs */}
        <div className="mt-8 lg:mt-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-end gap-6 lg:gap-16 animate-fade-rise-delay-2">
          <p className="text-base lg:text-lg text-white/60 leading-relaxed max-w-xl">
            Gardner Air delivers the complete HVAC maintenance scope on every visit — not a time
            block, not a partial check. Every line. Every system. Trusted by facilities managers
            across Southern California.
          </p>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 flex-shrink-0">
            <Link
              href="#contact"
              className="btn-arrow-slide inline-flex items-center justify-center gap-2 h-13 px-7 rounded-lg
                         text-sm font-bold bg-[#D42027] text-white
                         hover:bg-[#B01C22]
                         shadow-[0_4px_20px_rgba(212,32,39,0.40)]
                         hover:shadow-[0_6px_24px_rgba(212,32,39,0.55)]
                         transition-all duration-200 min-w-[220px] whitespace-nowrap min-h-[44px]"
            >
              Request a Maintenance Proposal
              <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center h-13 px-7 rounded-lg
                         text-sm font-semibold border-2 border-white/30 text-white
                         hover:border-white/60 hover:bg-white/[0.06]
                         transition-all duration-200 whitespace-nowrap min-h-[44px]"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      {/* Trust badge bar — bottom of hero */}
      <div
        className="relative z-10 animate-fade-rise-delay-3"
        aria-label="Gardner Air credentials"
      >
        <div
          className="border-t border-white/10"
          style={{ background: "rgba(42,45,51,0.85)", backdropFilter: "blur(12px)" }}
        >
          <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-8">
            <div className="py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6">
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
  );
}
