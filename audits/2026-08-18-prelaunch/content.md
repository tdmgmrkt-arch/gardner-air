# Content Quality Audit — Gardner Air Pre-Launch
**URL:** https://gardner-air.vercel.app/
**Audit date:** 2026-08-18
**Auditor:** Content Quality (Sept 2025 QRG)
**Overall content quality score: 74 / 100**

---

## Executive Summary

- The equipment pages (/chillers/, /boilers/, /computer-room-units/, /precision-controls/) are the strongest content on the site. Chillers in particular is a standout: 5 chiller type breakdowns, 6 diagnostic issue categories, 6 FAQs with authoritative multi-paragraph answers, brand list with factory-training rationale. Demonstrates genuine expertise and is AI-citation-ready.
- E-E-A-T foundation is solid but not yet complete. Credentials (CA B/C20/C4, NATE, NCI, EPA, Diamond Contractor) are structured in JSON-LD and visible on-page. Founded 2006, named founder (Dirk Gardner), real reviews cited from Google. What's missing: real case study specifics (the $80K Claremont figure is active on the homepage but flagged as unverified in ACTIVE_WORK), no individual technician bios, no project photo attribution, and business hours are still `{{TBD}}`.
- The homepage case study section has an unresolved credibility risk. The featured case study uses `$80,000` in year-two savings and "Claremont, CA" despite the ACTIVE_WORK log explicitly noting these figures were "wiped to {{TBD}} placeholders with TODO comments pending real client-supplied case content." The component file (CaseStudies.tsx) still shows the fabricated specifics. This is a pre-launch blocker.
- Contact page has a `{{TBD}}` placeholder for business hours in a publicly visible field. Must be resolved before launch.
- Voice is consistent across all pages audited. Tone is appropriately contractor-professional, non-chatty, non-residential. The "prevention-first, not emergency-repair" positioning is maintained with discipline. No voice deviations found.
- Content depth is appropriate for a commercial HVAC audience. Equipment pages go past surface-level into chiller compressor types, oil analysis rationale, condenser fouling mechanisms, BAS protocol specifics. This is content that earns a facilities manager's trust rather than summarizing what they already know.
- Structural duplication (same hero, cert strip, trust badges, "What Happens Next" form panel across every page) is acceptable design consistency, not problematic SEO duplication. Body content is differentiated per page. No thin-content flag across the audited set.
- Schema implementation is strong: Service, FAQPage, BreadcrumbList, and HVACBusiness JSON-LD are present on all major pages. The canonical domain is hardcoded to `https://gardnerair.com` — correct for intent, but must be verified to match the live domain before deployment.

---

## Findings by Category

### E-E-A-T

**Score: 68 / 100**

| Factor | Score | Notes |
|---|---|---|
| Experience | 14 / 20 | Fleet photos, boiler-room images, and portfolio grid establish physical presence. No technician-level bylines or field notes. Real Google reviews present (4) but two are very thin ("5-star rating." / "Really good service, they take care of you."). |
| Expertise | 20 / 25 | License numbers, NATE/NCI/EPA credentials, factory training on named brands (Trane, Carrier, York, Daikin, McQuay, etc.). Chiller and boiler content is technically accurate and specific. Precision-controls coverage of BACnet, Modbus, LonWorks is correct terminology. |
| Authoritativeness | 16 / 25 | External recognition is thin pre-launch: no press mentions, no third-party citations, no case study links to named client institutions. The Google reviews outbound link is the primary external authority signal. |
| Trustworthiness | 18 / 30 | NAP is consistent across pages and JSON-LD. Phone, address, and email are real. Business hours placeholder is a live trust gap. Case study with unverified $80K figure is a material trust risk if indexed as-is. Privacy policy is present and well-structured. |

### Content Depth

Equipment pages are substantive. The chillers page in particular covers centrifugal vs. screw vs. scroll vs. absorption vs. air-cooled/water-cooled distinctions with correct technical detail. The boilers and computer-room-units pages follow the same depth pattern. Precision controls correctly names BACnet, Modbus, and LonWorks and explains why calibration prevents ghost energy waste and short-cycling — not generic filler.

The homepage service section (FeaturedServices component not reviewed in full) and the CompleteScope section carry the preventative-maintenance positioning at appropriate depth for a homepage. The WhyGardner differentiators are specific: names competing scenarios ("Facilities call Gardner Air after multiple contractors have failed to diagnose a chronic HVAC issue") rather than vague claims.

The /commercial-hvac-services/ hub and its child pages (PM, repair, replacement, installation) are well-structured with process steps, scope panels, and FAQs. No thin-content concern.

### Duplicate Content

Shared blocks (hero trust-badge bar, cert logo strip, "What Happens Next" 3-step panel, same `customer-service-reps-v2.webp` contact sidebar image) appear verbatim across all equipment pages and service pages. This is design-system consistency, not duplicate content. The substantive body copy — chiller types, boiler types, CRU configurations, controls protocol specifics, per-page FAQ answers — is entirely unique per page. No risk flag.

The WHY_CHOOSE section on /equipment/chillers/ and /equipment/ hub is very close in language. Minor differentiation (chillers version says "chiller platforms they service" vs. hub's "equipment platforms they service") exists but these sections are small enough that they do not represent a material duplication risk.

### Readability

Paragraph length is appropriate for a facilities-manager audience: 3–5 sentences per paragraph, no walls of text. Subheading hierarchy (H1 > H2 > H3) is implemented correctly throughout. Monospace eyebrows provide scannability without adding to body text flow. Reading level is elevated (estimate: Grade 12–14) which is correct for a B2B commercial audience, not a concern.

FAQ answers on equipment pages are long enough to be genuinely useful (150–250 words each) without being padded. The "Does Gardner Air offer emergency chiller repair?" answer is the best example of voice-confident, content-specific writing on the site.

### AI Citation Readiness

**Score: 78 / 100**

Strong patterns: definitive factual statements ("Commercial chillers maintained on a disciplined preventative maintenance program typically last 20 to 25 years"), question-answer format FAQs with schema markup, named brands and license numbers, clear service-area scope. These are extractable passages.

Improvement opportunity: no "According to Gardner Air..." quotable summary statements at page level (an opening or closing paragraph that synthesizes the page's key claim in one quotable sentence). Adding one per major page would improve passage-level extractability for AI Overviews.

### Voice Consistency

Consistent across all audited pages. Tone is confident, technical, and commercial-professional throughout. The "prevention-first, not emergency-dispatch" theme is maintained in FAQs, hero copy, and mid-CTA bands. No residential language found. No chatty or informal phrasing found. No inconsistencies between the equipment section and the service pages.

### Content Freshness

"Last Updated: August 2026" appears on /equipment/ hub and /equipment/chillers/. Not present on /about/, service pages, or the homepage. Recommend propagating a last-updated signal to at least the About and service pages for freshness signaling.

---

## Page-Level Issues Table

| Page | Issue | Severity | Recommendation |
|---|---|---|---|
| / (Homepage) | `CaseStudies.tsx` still renders fabricated `$80,000` savings figure and "Claremont, CA" — ACTIVE_WORK log confirms this was supposed to be wiped to `{{TBD}}` | Critical | Replace with placeholder or real verified figure before launch. This is a live trust and legal risk if indexed. |
| /contact/ | Business hours field displays `{{TBD}}` — visible to public | High | Confirm hours with client and update before launch. Also update JSON-LD opening hours. |
| /about/ | Two of four Google reviews are extremely thin ("5-star rating." / "Really good service, they take care of you.") — weak trust signals at the review layer | Medium | Replace with two stronger reviews if available from the client's Google profile. |
| /about/ | Stat "9 Certifications held" on the founder section — no corresponding credential list explains what the 9 are | Medium | Either enumerate the 9 in a tooltip or supporting section, or reduce the number to what is verifiable and listed on-page. |
| /equipment/ hub | WHY_CHOOSE copy is nearly identical to the same section on /equipment/chillers/ | Low | Minor copy differentiation on the hub version to avoid near-duplicate passage at the section level. |
| All equipment pages | Contact sidebar uses same `customer-service-reps-v2.webp` image with identical alt text across all pages | Low | Vary alt text per page to reflect the equipment context (e.g., "Gardner Air team discussing chiller service scope with a facilities manager"). |
| All service + equipment pages | No "Last Updated" signal on service pages or /about/ | Low | Add "Last Updated: [Month Year]" in monospace eyebrow consistent with the equipment pages. |
| /equipment/chillers/ | No quotable single-sentence summary statement at page level for AI passage extraction | Low | Add a lede paragraph to the intro section that states the page's core claim in one authoritative sentence. |
| /blog/ | All post slugs resolve to `#` — no actual blog content exists | Informational | Blog index is correctly staged as placeholder. Do not index until real posts exist. Consider `noindex` on the blog index until first real post ships. |

---

## What Is Working Well

The equipment section (/chillers/, and by structural parity /boilers/, /computer-room-units/, /precision-controls/) represents genuinely strong content for this business category. The chiller page in particular would perform well in an E-E-A-T evaluation: it demonstrates subject-matter expertise through accurate technical distinctions, lists named manufacturers with a rationale for factory training, provides diagnostic-level detail in the Common Issues section, and answers the "emergency service" question in a way that both qualifies out the wrong prospect and reinforces the preventative positioning without sounding defensive.

The About page founder story is specific and credible: named founder, founding year, 30+ years experience, named licenses. That specificity is the right pattern.

Schema implementation across the site is thorough and consistent. Service, FAQPage, BreadcrumbList, HVACBusiness with hasCredential — this is above average for a commercial contractor site and positions the content well for AI Overview extraction.

The voice discipline is a genuine strength. Not a single residential slip, not a single "emergency HVAC" headline. For a positioning-sensitive B2B client, that consistency is harder to achieve than it looks.
