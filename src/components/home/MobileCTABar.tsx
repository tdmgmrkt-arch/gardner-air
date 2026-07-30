"use client";
/**
 * MobileCTABar — sticky bottom bar, mobile only (hidden lg+).
 * Two primary actions: Call + Request Proposal.
 * Respects iOS safe area inset. Single sticky element rule observed.
 * Space is reserved at initial render to prevent CLS.
 */
import Link from "next/link";
import { Phone, FileText } from "lucide-react";

export function MobileCTABar() {
  return (
    <>
      {/* Reserve space so content isn't hidden under the bar */}
      <div
        className="lg:hidden h-[70px]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        aria-hidden="true"
      />

      <div
        className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white border-t border-[#E5E7EB] shadow-[0_-2px_12px_0_rgba(0,0,0,0.08)]"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        role="region"
        aria-label="Quick contact actions"
      >
        <div className="flex gap-2 px-4 py-3">
          {/* Call — secondary style */}
          <a
            href="tel:+19516964495"
            className="flex flex-1 items-center justify-center gap-2 h-11 rounded border border-[#D1D5DB] text-sm font-semibold text-[#0A0A0A] hover:border-[#D42027] hover:text-[#D42027] transition-colors min-h-[44px]"
            aria-label="Call Gardner Air"
          >
            <Phone size={16} aria-hidden="true" />
            Call Us
          </a>

          {/* Request Proposal — primary red */}
          <Link
            href="/contact/"
            className="flex flex-1 items-center justify-center gap-2 h-11 rounded bg-[#D42027] text-sm font-semibold text-white hover:bg-[#B01C22] transition-colors min-h-[44px]"
            aria-label="Request a maintenance proposal"
          >
            <FileText size={16} aria-hidden="true" />
            Request Proposal
          </Link>
        </div>
      </div>
    </>
  );
}
