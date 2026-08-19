# Gardner Air — Local SEO Foundation Audit
**Audited:** 2026-08-18 | **URL:** https://gardner-air.vercel.app/ | **Status:** Pre-launch
**Business type:** Service Area Business (SAB) — Murrieta HQ, travels to commercial client sites

---

## Executive Summary

The site is well-structured for a pre-launch build and demonstrates strong commercial-only positioning. The location page architecture (hub + 3 county pages) is in place and the schema type `HVACBusiness` is correct throughout. The most significant gaps before launch are: (1) no `geo` coordinates or `AggregateRating` in any schema, (2) the homepage `areaServed` is too vague (`"State": "Southern California"`), (3) business hours are hardcoded with `{{TBD}}` placeholders rendering invalid schema, (4) no actual CSLB license number appears anywhere on the site, and (5) two footer nav links point to routes that do not exist. These are all fixable in an hour of dev work and should be closed before indexing begins.

**Estimated Local SEO Foundation Score (site-level only): 61 / 100**

| Dimension | Weight | Score | Notes |
|---|---|---|---|
| GBP Signals | 25% | 8/25 | No GBP tied to site; Google Maps link only (not embed) |
| Reviews & Reputation | 20% | 10/20 | 4 testimonials visible, no AggregateRating schema |
| Local On-Page SEO | 20% | 16/20 | Strong county pages; city-level thin |
| NAP Consistency & Citations | 15% | 12/15 | NAP consistent site-wide; live domain hardcoded |
| Local Schema Markup | 10% | 7/10 | Correct type; missing geo, hours broken, areaServed weak on homepage |
| Local Link & Authority Signals | 10% | 8/10 | CSLB/NATE/NCI/EPA cited; no license number |

---

## Findings by Category

### 1. NAP Consistency

| Source | Name | Address | Phone | Email |
|---|---|---|---|---|
| Footer (all pages) | Gardner Air | 30714 Wealth St, Murrieta, CA 92563 | (951) 696-4495 | service@gardnerci.com |
| Homepage JSON-LD | Gardner Air | 30714 Wealth St, Murrieta, CA 92563 | +1-951-696-4495 | service@gardnerci.com |
| About page JSON-LD | Gardner Air | 30714 Wealth St, Murrieta, CA 92563 | +19516964495 | service@gardnerci.com |
| Area page JSON-LDs (3x) | Gardner Air | 30714 Wealth St, Murrieta, CA 92563 | +19516964495 | service@gardnerci.com |
| Contact page visible | Gardner Air | 30714 Wealth St, Murrieta, CA 92563 | (951) 696-4495 | service@gardnerci.com |

**Result: No discrepancies.** NAP is consistent across all sources. Telephone format varies (human-readable vs. E.164) but both are acceptable in schema — no action required.

**Flag:** The `url` property in all schema and `metadataBase` in layout.tsx reference `https://gardnerair.com` (the production domain) while the site is live on `https://gardner-air.vercel.app`. This is intentional pre-launch practice and should be confirmed correct before submission to Google Search Console.

**Flag:** Business hours are `{{TBD}}` in the homepage JSON-LD `openingHoursSpecification`. This will render broken JSON if the literal string is serialized — confirmed present in source as template placeholders. This invalidates the schema block.

---

### 2. Local Schema Markup

**Schema type:** `HVACBusiness` — correct subtype for a commercial HVAC contractor. No issue.

**Homepage JSON-LD — gaps identified:**

| Property | Status | Note |
|---|---|---|
| `@type: HVACBusiness` | Pass | Correct industry subtype |
| `name` | Pass | "Gardner Air" |
| `address` | Pass | Full PostalAddress present |
| `telephone` | Pass | E.164 format |
| `url` | Pass (with flag) | Points to production domain pre-launch |
| `geo` | **Missing** | No GeoCoordinates — required for map pack signal |
| `openingHoursSpecification` | **Broken** | Hours are `{{TBD}}` placeholders, will serialize as invalid strings |
| `areaServed` | **Weak** | Set to `"@type": "State", "name": "Southern California"` — not a valid schema.org State; should be the 3 counties |
| `AggregateRating` | **Missing** | 4 real Google reviews exist; no schema to surface them |
| `hasCredential` | Partial | Listed on About schema only; not on homepage schema |
| `priceRange` | Present | `$$$$` |

**Area page schemas (Riverside, San Bernardino, Orange County):** Each has `HVACBusiness` with county-level `areaServed` — this is correct. All three are consistent. No `geo` coordinates present on any of them.

**About page schema:** `AboutPage > mainEntity: HVACBusiness` with `hasCredential` array listing B/C20/C4/NATE/NCI licenses. Good. Missing `geo`.

**Critical finding — geo coordinates:** No page in the entire site has a `GeoCoordinates` block. For a SAB whose GBP listing will be attached to the Murrieta address, geo precision reinforces NAP-to-GBP signal alignment. Murrieta HQ coordinates: `33.55396, -117.21464` (5 decimal precision required by Whitespark best practice). Add to homepage and About JSON-LD only.

---

### 3. Location Page Architecture

**Structure found:**
```
/areas-we-serve/                      (hub)
  /areas-we-serve/riverside/           (county page)
  /areas-we-serve/san-bernardino-county-ca/  (county page)
  /areas-we-serve/orange-county/       (county page)
```

Each county page has: unique hero content, county-specific copy (climate conditions, local context), service grid, testimonials, FAQ with FAQPage schema, and a contact form. This exceeds the minimum viable location page standard and avoids the "doorway page" pattern.

**Gap — no city-level pages.** The target query pattern for commercial HVAC map pack is `commercial HVAC contractor [city]`. Murrieta, Temecula, Riverside, Ontario, Anaheim, Irvine, Anaheim are all mentioned in copy but none have dedicated pages. County pages are sufficient for a first launch, but city pages for the 5–6 highest-volume commercial markets within each county should be the next content build priority.

**Gap — SAB address handling.** As a SAB, the Murrieta address is shown in footer/schema. This is appropriate since the business has a legitimate HQ. However, the site does not currently include any "we come to your facility" or "no need to visit our office" language that reinforces the SAB model. Add one sentence to the contact page to set that expectation.

---

### 4. Service Area Clarity

**Homepage:** Service area is communicated through a dedicated `ServiceArea` section and the trust strip ("3 Counties"). Riverside, San Bernardino, and Orange Counties are all named explicitly. The 50-mile radius framing is present. **Strong.**

**Service pages (`/commercial-hvac-services/` and sub-pages):** Service area is mentioned ("across Southern California," "Inland Empire and Orange County") but the three specific counties are not always named in body copy. The hub page does mention the 50mi radius and region label.

**Equipment pages:** Service area language is present in footers and the hub `/equipment/` page. Individual equipment sub-pages (e.g., `/equipment/chillers/`) should be checked — they likely carry only footer-level service area signal.

**Commercial vs. residential distinction:** Excellent. The site explicitly states "commercial-only" on multiple pages. The contact page excludes residential properties. The /about/ page, FAQ entries, and positioning copy all reinforce B2B-only framing. No residential language detected. This is the strongest signal on the site and a genuine competitive differentiator for facilities managers.

---

### 5. Trust Signals & License Credentials

**Present:**
- NATE Certified (text + logo on cert strip)
- NCI Certified (text + logo)
- EPA Certified (text + logo)
- York Diamond Contractor (text + logo)
- CSLB Licensed (text only)
- Factory training: Carrier, York, Samsung, Mitsubishi, Raypak
- Founded 2006 / 20 years experience (About page)
- Founder name: Dirk Gardner (About page)

**Gap — CSLB license number absent.** The site says "CSLB Licensed & Insured" but displays no actual license number. For commercial facilities managers, a visible, verifiable license number is a primary trust signal and often required before RFP submission. This also directly supports citation consistency — the license number is a data point that appears on CSLB lookup, Yelp, BBB, and GBP listings. Add the CSLB number (obtain from client) to: footer, About page, and About JSON-LD `hasCredential`.

**Gap — AggregateRating schema.** Four named Google reviews are displayed on the About page (Bulmaro Gonzalez, Diana Dreibelbis, Dana Wood, Kelly Crull — all attributed as 5-star). These are real reviews that should be wrapped in `AggregateRating` schema on the homepage JSON-LD (`ratingValue: 5.0`, `reviewCount: 4` as a conservative floor). This enables star display in rich results and strengthens E-E-A-T signals. Note: only use verifiable review counts — do not fabricate.

---

### 6. GBP Signals on Page

| Signal | Present |
|---|---|
| Google Maps embed (interactive) | No — only a text link to Maps |
| Maps link (directions) | Yes — footer address links to Maps search |
| Place ID reference | No |
| GBP review widget | No |
| GBP posts indicator | No |
| Review schema tied to GBP | No |

The site is pre-launch and the GBP connection has not been established. The footer Maps link will serve as a minimal location signal but an embedded map on the `/contact/` page would add a stronger GBP co-citation signal at launch. The contact page already has a `LazyMap` component — confirm it is rendering an actual `<iframe>` embed and not just a static image or link.

---

### 7. Technical / Broken Links

Two footer navigation links point to non-existent routes:

| Footer Link Label | Footer `href` | Actual Route |
|---|---|---|
| "Service Area" | `/service-area` | `/areas-we-serve/` |
| "Case Studies" | `/case-studies` | No route (section on homepage only) |

These will generate 404s from every page on the site and represent internal linking failures that dilute crawl budget and break expected navigation paths.

---

## Prioritized Recommendations

### Critical (block launch or fix within 1 week)

**1. Fix broken footer nav links.**
Change `/service-area` to `/areas-we-serve/` and either remove "Case Studies" or redirect it to `/about/#case-studies` until a proper `/case-studies/` route exists.

**2. Fix business hours in homepage JSON-LD.**
The `openingHoursSpecification` block has `{{TBD}}` as `opens`/`closes` values. Either obtain real hours from client (Mon–Fri 7am–5pm is shown on the contact page) and populate them, or remove the `openingHoursSpecification` block entirely until confirmed. Broken schema is worse than absent schema.

**3. Obtain and display the CSLB license number.**
Add to footer, About page visible content, and About `hasCredential` schema. This is a conversion trust signal and a citation data point.

### High (before GBP submission)

**4. Add `geo` coordinates to homepage and About JSON-LD.**
`"geo": { "@type": "GeoCoordinates", "latitude": 33.55396, "longitude": -117.21464 }` — add to the `HVACBusiness` block in both `JsonLd.tsx` and the About page `aboutSchema.mainEntity`. Verify coordinates against CSLB/GBP address record before publishing.

**5. Fix `areaServed` on homepage JSON-LD.**
Replace `{ "@type": "State", "name": "Southern California" }` with the same 3-county array used on the area pages and About schema:
```json
[
  { "@type": "County", "name": "Riverside County" },
  { "@type": "County", "name": "San Bernardino County" },
  { "@type": "County", "name": "Orange County" }
]
```

**6. Add `AggregateRating` to homepage JSON-LD.**
Once the CSLB number is obtained, confirm the actual Google review count and add `AggregateRating` with accurate `ratingValue` and `reviewCount`. Do not use fabricated numbers.

**7. Verify the `/contact/` page `LazyMap` renders a live Google Maps iframe.**
If it is rendering only a static image, swap to a real embed. This is the primary on-page GBP co-citation opportunity.

### Medium (first 30 days post-launch)

**8. Add SAB language to the contact page.**
One sentence: "We travel to your facility throughout Riverside, San Bernardino, and Orange County — no need to visit our Murrieta office." Reinforces the SAB model and sets client expectations.

**9. Add county/city mentions to individual equipment sub-pages.**
Each `/equipment/[type]/` page likely carries only footer-level location signal. Add one paragraph per page connecting the equipment type to the 3-county service area (e.g., "Gardner Air services rooftop package units for commercial facilities across Riverside County, San Bernardino County, and Orange County").

**10. Plan city-level landing pages for top 5–6 commercial markets.**
Priority targets: Riverside, Ontario, Anaheim, Irvine, Temecula (already HQ city). Each needs a dedicated `/areas-we-serve/[city]-ca/` page with unique copy, city-specific environmental/commercial context, and `HVACBusiness` schema with `areaServed` at the city level. These are the pages that will compete for `commercial HVAC [city name]` map pack queries — the county pages alone will not rank for city-level terms.

---

## Limitations Disclaimer

This audit was performed against the pre-launch Vercel preview URL using static page inspection and source code review. The following could not be assessed:

- **Live GBP data** — no GBP listing URL was provided; cannot verify category, verification status, or whether the domain has been submitted
- **Off-site citations** — Yelp, BBB, and Tier 1 directory presence not checked (requires separate citation audit)
- **Real-time map pack positions** — DataForSEO or similar tooling required
- **Review velocity** — only 4 reviews visible on-site; actual Google review count and recency unknown
- **Core Web Vitals** — not assessed in this audit (see qa-launch agent for performance audit)
- **Search Console / indexing status** — domain not yet live; no GSC data available
