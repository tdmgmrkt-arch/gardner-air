# Gardner Air — Pre-Launch SEO Audit

**Audited URL:** https://gardner-air.vercel.app/ (Vercel preview)
**Production URL:** gardnerair.com (post-launch)
**Date:** 2026-08-18
**Business type:** Commercial HVAC contractor, Service Area Business (Southern California)

---

## Overall SEO Health Score: **72 / 100**

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 74 | 16.3 |
| Content Quality | 23% | 74 | 17.0 |
| On-Page SEO | 20% | 72 | 14.4 |
| Schema / Structured Data | 10% | 78 | 7.8 |
| Performance (CWV) | 10% | 65 | 6.5 |
| AI Search Readiness | 10% | 61 | 6.1 |
| Images | 5% | 70 | 3.5 |
| **Total** | 100% | | **71.6 → 72** |

**Verdict:** Above-average foundation for a pre-launch build. Not ready to ship as-is — 8 blockers below must clear before the domain switches to production. Once those are addressed, this becomes a strong launch.

---

## Top 5 Critical Issues (block launch)

1. **Homepage `HVACBusiness` schema has `{{TBD}}` placeholder hours.** `opens` and `closes` are literal strings — Google will reject the entire block. → `src/components/home/JsonLd.tsx`
2. **`CaseStudies.tsx` still renders fabricated `$80,000` savings figure + "Claremont, CA".** ACTIVE_WORK log says this was supposed to be wiped to `{{TBD}}`. Live on the preview.
3. **`/contact/` publicly displays `{{TBD}}` business hours.** Placeholder is visible on the page body.
4. **Two broken footer nav links sitewide:** `/service-area` (404) and `/case-studies` (404). Actual routes are `/areas-we-serve/` and a homepage section. → `src/components/home/SiteFooter.tsx`
5. **Hero LCP images have `loading="lazy"`.** Homepage `<video>` poster (`herooption2.webp`) not preloaded; equipment/services page heroes render with `loading="lazy"` despite preload hints — `priority` prop is being stripped somewhere.

---

## Top 5 Quick Wins

1. **Add `/llms.txt`.** Content already exists in `ai-actions.json`; just assemble and serve. Biggest single AI-search structural gap.
2. **Add per-crawler robots.txt directives.** Explicit rules for GPTBot, PerplexityBot, CCBot, Google-Extended, Applebot-Extended. 30-minute change.
3. **Add security headers via `next.config.js` `headers()` export.** CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy. No page changes required.
4. **Normalize telephone to E.164 sitewide.** Homepage uses `+1-951-696-4495`; all other pages use `+19516964495`. Standardize on the E.164 form.
5. **Fix `areaServed` schema.** Currently `@type: State, name: "Southern California"` (not valid). Replace with the 3-county array already used correctly on the county pages.

---

## Findings by Category

### 1. Technical SEO — 74/100

- ✅ Canonicals all point to production `gardnerair.com` (no preview-domain indexing risk)
- ✅ HSTS is present; HTTPS enforcement clean
- ✅ 404 handling correct; branded error page
- ✅ Fully SSR'd — no JS-rendering dependency
- ✅ `index, follow` meta robots across all pages
- ⚠ Sitemap references production domain (expected pre-launch), but every entry uses trailing slashes while the live app 308-redirects trailing-slash URLs to non-slash. Pick one canonical form.
- ⚠ `ai-actions.json` is listed in the XML sitemap — remove it
- ❌ Security headers mostly missing (only HSTS present)
- ❌ `areaServed: State "Southern California"` — invalid geographic entity

### 2. Content Quality — 74/100

- ✅ Voice consistency across 10+ pages audited is excellent — prevention-first, commercial-only, no residential slip
- ✅ Equipment pages (`/chillers/`, `/boilers/`, `/computer-room-units/`, `/precision-controls/`) demonstrate real expertise: named diagnostic categories, factory-trained brand rationale, 6-question FAQs with 150-250 word answers
- ✅ Schema density above-average for the vertical
- ❌ Fabricated case study figures on homepage (see Blocker #2)
- ❌ `{{TBD}}` hours on `/contact/` (see Blocker #3)
- ⚠ Two of four Google reviews on `/about/` are weak ("5-star rating." is a label, not a testimonial)
- ⚠ "9 Certifications held" stat is unenumerated — either list them or reduce to verifiable count
- ⚠ FAQ answers on `/about/` are ~50 words (target: 134-167 words for AI citation)
- 💡 Consider `noindex` on `/blog/` until real posts exist

### 3. Schema / Structured Data — 78/100

- ✅ JSON-LD sitewide, correct format
- ✅ URLs inside JSON-LD reference `gardnerair.com` (production), not preview
- ✅ NAP consistent across all schema blocks
- ✅ `HVACBusiness` is the correct subtype
- ✅ Coverage: HVACBusiness, Service, FAQPage, BreadcrumbList, ItemList, CollectionPage, Blog, AboutPage, ContactPage
- ❌ `{{TBD}}` hours invalidates HVACBusiness block (Blocker #1)
- ❌ `&rsquo;` HTML entity inside JSON on `/replacement/` FAQ — invalid JSON
- ❌ Missing: WebSite + SearchAction schema on homepage
- ❌ Missing: Organization with `sameAs` for entity disambiguation
- ❌ Missing: BreadcrumbList on `/contact/` (only interior page missing one)
- ❌ Missing: AggregateRating (4 named reviews exist on `/about/` but zero review schema)
- ❌ Missing: `geo` coordinates on homepage + About schema
- ⚠ Telephone format inconsistency (see Quick Win #4)

### 4. Performance (CWV) — 65/100

- ✅ CLS risk low across all pages
- ✅ `/equipment/` hub is the best-configured page — hero preloaded correctly, lightest HTML weight
- ✅ `/contact/` is clean
- ❌ Homepage hero video `poster="/herooption2.webp"` not preloaded → LCP element unpreloaded
- ❌ Equipment/services page heroes render with `loading="lazy"` despite preload hints — `priority` prop stripped by wrapper somewhere
- ❌ Credential badge images (diamond-contractor, EPA, NATE, NCI, York) pull `w=3840` — should use fixed `width`/`height` props instead of `fill`
- ⚠ Body content images lack explicit `sizes` — defaulting to `100vw`, pulling oversized variants
- ⚠ No `rel="preconnect"` hints anywhere
- ⚠ First-row equipment hub tiles likely lazy-load even when above the fold on desktop

### 5. AI Search Readiness (GEO) — 61/100

| Dimension | Score |
|---|---|
| Citability | 68 |
| Structural Readability | 72 |
| Multi-Modal Content | 40 |
| Authority & Brand Signals | 55 |
| Technical Accessibility | 63 |

- ✅ `ai-actions.json` is genuinely well-executed — `notes_for_ai_assistants`, `service_area_boundary`, `emergency_routing`, `supports_agent_booking: false` all correct
- ✅ SSR = content is in raw HTML, fully AI-crawlable
- ✅ Chiller page is the standout: substantive FAQs, quotable passages, technical specificity
- ❌ Missing `/llms.txt`
- ❌ Homepage has 7 strong statistics with zero source attribution → AI systems hedge or drop them
- ❌ No CSLB license number visible (also flagged by Local)
- ❌ `ai-actions.json` `$schema` self-reference uses production domain — fails on preview
- ⚠ No per-crawler robots.txt directives
- ⚠ No author bylines or dates on content pages
- ⚠ No YouTube / Reddit presence — the two highest-correlation off-site signals for AI citation

### 6. Local SEO Foundation — 61/100

- ✅ `HVACBusiness` schema subtype used consistently
- ✅ Perfect NAP consistency across footer, contact, JSON-LD
- ✅ County-level location architecture (hub + 3 dedicated county pages, unique copy, FAQPage schema, localized testimonials) exceeds MVP standard
- ✅ Commercial-only positioning exceptionally clear — critical for reaching facilities managers
- ❌ Two broken footer links (Blocker #4)
- ❌ Homepage schema `{{TBD}}` hours (Blocker #1)
- ❌ No CSLB license number sitewide
- ❌ No `geo` coordinates in any schema
- ❌ `areaServed: State "Southern California"` (Quick Win #5)
- ❌ No AggregateRating schema despite 4 named reviews existing
- ⚠ `/contact/` LazyMap needs verification — must render a live iframe, not just a text link
- 💡 Add city-level pages: Riverside, Ontario, Anaheim, Irvine, Temecula (county pages alone won't rank for `commercial HVAC [city]` map pack queries)

---

## What's Working Well (recognize the wins)

The equipment section iteration paid off — content depth and schema on those pages is the best content on the site. Voice discipline across 10+ pages is genuinely rare for a pre-launch build. The AI-first thinking with `ai-actions.json` and the county-level page architecture both punch above the weight class for a not-yet-launched contractor site. Canonicals + schema URLs correctly point to production, so there's no preview-domain leak risk.

The gap between the current state and "launch-ready" is a specific, finite list of fixes — not a foundational rebuild. See ACTION-PLAN.md.
