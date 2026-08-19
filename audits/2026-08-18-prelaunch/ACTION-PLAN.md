# Gardner Air — Prioritized Action Plan

**Audit date:** 2026-08-18
**Overall score:** 72/100
**Companion:** FULL-AUDIT-REPORT.md

Priorities:
- **CRITICAL** — must clear before switching DNS to production
- **HIGH** — fix within week 1 post-launch
- **MEDIUM** — fix within month 1
- **LOW** — backlog

---

## CRITICAL — Launch Blockers

| # | Fix | File / Location | Effort |
|---|---|---|---|
| C1 | Populate real `opens`/`closes` in HVACBusiness `openingHoursSpecification` (or remove the block until real hours confirmed) | `src/components/home/JsonLd.tsx` | 5 min once hours confirmed |
| C2 | Wipe fabricated `$80,000` savings and "Claremont, CA" from CaseStudies block — replace with real case or `{{TBD}}` gated behind a feature flag | `src/components/home/CaseStudies.tsx` | 15 min |
| C3 | Replace `{{TBD}}` business hours on `/contact/` with real hours | `src/app/contact/page.tsx` | 5 min |
| C4 | Fix broken footer nav: `/service-area` → `/areas-we-serve/`; `/case-studies` → either remove or point to a real page | `src/components/home/SiteFooter.tsx` | 10 min |
| C5 | Remove `loading="lazy"` from hero LCP images and confirm `priority` prop is respected. Preload homepage hero video poster (`herooption2.webp`) via `<link rel="preload">` in `<head>` | Homepage + hero components | 30-45 min |
| C6 | Replace `&rsquo;` HTML entity in `/replacement/` FAQ JSON with `'` or `\u2019` | `src/app/commercial-hvac-services/replacement/page.tsx` | 5 min |
| C7 | Add CSLB license number to footer + About page + `hasCredential` schema | Footer, `/about/`, JsonLd | 15 min once number provided |
| C8 | Fix `areaServed` schema: replace `{"@type":"State","name":"Southern California"}` with the 3-county `AdministrativeArea` array already used on county pages | `src/components/home/JsonLd.tsx` | 15 min |

**Estimated total to clear blockers:** 2-3 hours once CSLB number + business hours are confirmed by client.

---

## HIGH — Week 1 Post-Launch

| # | Fix | Effort |
|---|---|---|
| H1 | Add security headers via `next.config.js` `headers()` — CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy | 45 min |
| H2 | Serve `/llms.txt` — assemble from existing `ai-actions.json` content, focused on service scope, coverage, credentials, contact routing | 45 min |
| H3 | Add per-crawler robots.txt directives (GPTBot, ChatGPT-User, Claude-Web, PerplexityBot, Google-Extended, CCBot, Applebot-Extended) — explicit Allow signals intentionality | 15 min |
| H4 | Normalize telephone to E.164 (`+19516964495`) on homepage schema | 5 min |
| H5 | Add `WebSite` + `SearchAction` schema on homepage (enables sitelinks searchbox) | 20 min |
| H6 | Add `Organization` schema with `sameAs` (GBP profile, Facebook, LinkedIn, YouTube if any) | 20 min |
| H7 | Add `BreadcrumbList` schema to `/contact/` (only interior page missing one) | 10 min |
| H8 | Add `GeoCoordinates` to homepage + About schema (verify against CSLB address record before publishing) | 10 min |
| H9 | Add `AggregateRating` schema once real Google review count is confirmed — do not fabricate | 15 min |
| H10 | Resolve trailing-slash mismatch: sitemap uses `/foo/`, live app 308-redirects to `/foo`. Pick one canonical form (recommend keeping trailing slash and configuring `trailingSlash: true` in next.config.js) | 30 min |
| H11 | Give credential badge images fixed `width`/`height` props instead of `fill` (currently pulling `w=3840`) | 20 min |
| H12 | Add explicit `sizes` prop to body content `<Image>` components | 30 min |
| H13 | Remove `/ai-actions.json` from XML sitemap | 5 min |
| H14 | Replace weak Google review pull-quotes on `/about/` ("5-star rating.") with substantive testimonials | 20 min |

**Estimated total for High:** ~5-6 hours

---

## MEDIUM — Month 1

| # | Fix | Effort |
|---|---|---|
| M1 | Add source attribution to homepage statistics (7 stats currently unattributed → AI systems hedge on them) | 1 hr |
| M2 | Expand FAQ answers on `/about/` from ~50 words to 134-167 word range for AI citation | 1-2 hrs |
| M3 | Verify `/contact/` LazyMap renders a live Google Maps iframe (not a text link). Swap if needed. | 15 min |
| M4 | Add SAB-clarifying sentence to `/contact/` ("we travel to your facility") | 5 min |
| M5 | Add county service area mention to individual `/equipment/[type]/` sub-pages (currently only in footer) | 30 min |
| M6 | Enumerate the "9 Certifications held" stat or reduce to a verifiable count that matches what's shown on-page | 20 min |
| M7 | Add `rel="preconnect"` hints for critical origins in `<head>` | 15 min |
| M8 | Ensure first-row `/equipment/` hub tiles above-fold on desktop are not lazy-loading | 20 min |
| M9 | Add author bylines and dated timestamps to content pages (increases AI attribution) | 1 hr |
| M10 | `noindex` on `/blog/` until real posts exist (avoid thin content signal) | 5 min |
| M11 | Propagate "Last Updated" signal from equipment pages to service pages and `/about/` | 30 min |

**Estimated total for Medium:** ~6-8 hours

---

## LOW — Backlog

| # | Fix | Notes |
|---|---|---|
| L1 | Build city-level pages: Riverside, Ontario, Anaheim, Irvine, Temecula | County pages alone won't rank for `commercial HVAC [city]` map pack queries. This is a growth initiative, not a launch blocker. |
| L2 | Add a single quotable lede sentence to top of major equipment pages | Improves AI passage-level extractability |
| L3 | Establish YouTube channel and Reddit presence | Highest-correlation off-site signals for AI citation. Long-term brand play. |
| L4 | Consider `HowTo` schema on maintenance/service pages where genuine step content exists | Only if content depth supports it |

---

## Deferred Items (data required)

- **CSLB license number** — client input needed before C7
- **Business hours** — client confirmation before C1 and C3
- **Real Google review count** — before H9
- **Real case study data** — before or after C2 (either wipe or fill)

---

## Recommended Sequencing

**Session 1 (2-3 hours):** Clear C1-C8 blockers. Requires CSLB number + hours from client. Ship as one commit: `fix(prelaunch): clear launch blockers`.

**Session 2 (5-6 hours):** Work through H1-H14. Batch into 2-3 commits by theme (schema, security headers, image props).

**Session 3+ (ongoing):** Medium and Low as bandwidth allows.

Launch gate check after Session 1 — run this audit again on gardnerair.com to confirm blockers cleared and score bumped above 80.
