import type { Metadata } from "next";
import { SiteHeader } from "@/components/home/SiteHeader";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { WhyGardner } from "@/components/home/WhyGardner";
import { CompleteScope } from "@/components/home/CompleteScope";
import { MaintenanceMatters } from "@/components/home/MaintenanceMatters";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { EquipmentGrid } from "@/components/home/EquipmentGrid";
import { CaseStudies } from "@/components/home/CaseStudies";
import { CertificationsStrip } from "@/components/home/CertificationsStrip";
import { ServiceArea } from "@/components/home/ServiceArea";
import { ClosingCTA } from "@/components/home/ClosingCTA";
import { SiteFooter } from "@/components/home/SiteFooter";
import { MobileCTABar } from "@/components/home/MobileCTABar";
import { JsonLd } from "@/components/home/JsonLd";

export const metadata: Metadata = {
  title: "Commercial HVAC Preventative Maintenance — Southern California",
  description:
    "Gardner Air delivers complete-scope commercial HVAC preventative maintenance across Southern California. Factory-trained technicians. Full maintenance scope every visit. Trusted by facilities managers.",
  alternates: {
    canonical: "https://gardnerair.com",
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd />
      {/* Header floats transparently over hero — no spacer needed */}
      <SiteHeader />
      <main id="main-content">
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust indicators strip */}
        <TrustStrip />

        {/* 3. Services — what we do (opens with environmental photo) */}
        <FeaturedServices />

        {/* 4. The Complete Scope — deep-dive on what a maintenance visit includes */}
        <CompleteScope />

        {/* 5. Why Gardner Air — 3 differentiators */}
        <WhyGardner />

        {/* 6. Why Preventative Maintenance Matters — reinforces WhyGardner with stats */}
        <MaintenanceMatters />

        {/* 7. Case Studies — featured proof */}
        <CaseStudies />

        {/* 8. Equipment We Service — technical depth */}
        <EquipmentGrid />

        {/* 9. Certifications & Training — technical trust */}
        <CertificationsStrip />

        {/* 10. Service Area — do you serve me? */}
        <ServiceArea />

        {/* 11. Closing CTA */}
        <ClosingCTA />
      </main>

      <SiteFooter />

      {/* Sticky mobile CTA bar — visible below lg only */}
      <MobileCTABar />
    </>
  );
}
