# Schema.org Audit — Gardner Air
**Audited URL:** https://gardner-air.vercel.app/  
**Production domain (canonical target):** https://gardnerair.com  
**Date:** 2026-08-18  
**Auditor:** Schema.org specialist agent

---

## Summary of Coverage

The site has meaningful JSON-LD coverage on most audited pages. All detected schema is JSON-LD format (correct), uses `https://schema.org` context (correct), and references `gardnerair.com` URLs throughout — not the Vercel preview subdomain (correct pre-launch behavior, confirmed). No Microdata or RDFa structural markup was found; OG meta tags use `property=` attributes but those are not schema.org structured data.

**Schema types found:** HVACBusiness, AboutPage, ContactPage, CollectionPage, Blog, Service, ItemList, BreadcrumbList, FAQPage  
**Pages with zero JSON-LD:** /privacy/ (404 — page not yet live)  
**Missing entirely from all pages:** WebSite, Organization with sameAs, AggregateRating / Review

---

## Critical Flag: URL Domain

All JSON-LD blocks correctly reference `https://gardnerair.com` (production domain), not the Vercel preview subdomain. This is the right approach. No changes needed here before launch, but confirm the domain remains hardcoded after any environment variable refactoring.

---

## Page-by-Page Results

### Homepage `/`

**Blocks found:** 1 (HVACBusiness)

**Validation:**

| Check | Status | Note |
|---|---|---|
| @context is https://schema.org | Pass | |
| @type valid | Pass | HVACBusiness is a LocalBusiness subtype — correct for HVAC contractor |
| name, telephone, email | Pass | Matches NAP baseline |
| address (PostalAddress) | Pass | 30714 Wealth St, Murrieta CA 92563 |
| areaServed | Warn | `{"@type":"State","name":"Southern California"}` — "Southern California" is not a State; use `AdministrativeArea` or array of `County` objects (as done on other pages) |
| openingHoursSpecification | **Fail** | `opens` and `closes` contain literal placeholder `{{TBD}}` — invalid values; Google will reject this block |
| url | Pass | Points to gardnerair.com |
| logo / image | Pass | Absolute URLs, correct properties |
| hasOfferCatalog | Pass | Properly structured, though Service items lack urls |

**Gaps on homepage:**
- No BreadcrumbList (acceptable for homepage root)
- No WebSite block with SearchAction
- No Organization block with sameAs (GBP, social profiles)

---

### About `/about/`

**Blocks found:** 3 (AboutPage, BreadcrumbList, FAQPage)

**Validation:**

| Check | Status | Note |
|---|---|---|
| AboutPage with mainEntity HVACBusiness | Pass | Correct nesting pattern |
| founder as Person | Pass | Dirk Gardner |
| foundingDate "2006" | Pass | ISO format acceptable for year-only |
| telephone format | Warn | `+19516964495` (no dashes) vs homepage `+1-951-696-4495` — inconsistent; use E.164: `+19516964495` consistently |
| areaServed (3 County objects) | Pass | Riverside, San Bernardino, Orange — correct and specific |
| hasCredential | Pass | Valid use of EducationalOccupationalCredential |
| BreadcrumbList positions | Pass | Home → About, correct |
| FAQPage structure | Pass | 4 Q&A pairs, all well-formed |
| FAQPage on commercial site | Info | Google rich results for FAQPage are restricted to government/healthcare. FAQPage remains valuable for AI/LLM citation regardless. No action needed. |

---

### Contact `/contact/`

**Blocks found:** 1 (ContactPage)

**Validation:**

| Check | Status | Note |
|---|---|---|
| ContactPage with mainEntity HVACBusiness | Pass | Correct pattern |
| telephone, email, address | Pass | Consistent with CLIENT.md NAP |
| areaServed (3 County objects) | Pass | |
| Missing BreadcrumbList | **Fail** | No breadcrumb block on contact page — should be Home → Contact |

---

### Privacy `/privacy/`

**Status:** 404 — page not live on preview. No schema to audit.

---

### Services Hub `/commercial-hvac-services/`

**Blocks found:** 3 (ItemList, BreadcrumbList, FAQPage)

**Validation:**

| Check | Status | Note |
|---|---|---|
| ItemList of Services | Pass | 4 services, each with name, description, url, provider |
| Service urls in ItemList | Pass | All point to gardnerair.com child pages |
| BreadcrumbList | Pass | Home → Commercial HVAC Services |
| FAQPage | Pass | 5 Q&A pairs, well-formed |
| Missing top-level Service block | Warn | Hub page itself has no Service @type describing the overall service offering — ItemList alone is sufficient for Google but a top-level Service would improve AI discoverability |

---

### Preventative Maintenance `/commercial-hvac-services/preventative-maintenance/`

**Blocks found:** 3 (Service, BreadcrumbList, FAQPage)

**Validation:**

| Check | Status | Note |
|---|---|---|
| Service block | Pass | name, description, url, serviceType, provider |
| provider HVACBusiness with NAP | Pass | |
| areaServed on Service | Warn | Top-level `areaServed: "Southern California"` string duplicates the County-level areaServed on provider — the string is valid but less specific; consider removing duplication |
| BreadcrumbList (3 levels) | Pass | Home → Services → Preventative Maintenance |
| FAQPage | Pass | 4 Q&A pairs |

---

### Repair `/commercial-hvac-services/repair/`

**Blocks found:** 3 (Service, BreadcrumbList, FAQPage)

**Validation:** Identical structure to PM page. All checks pass. Same minor areaServed duplication note applies.

---

### Replacement `/commercial-hvac-services/replacement/`

**Blocks found:** 3 (Service, BreadcrumbList, FAQPage)

**Validation:** Pass. Same structure. Note: one FAQ answer contains `&rsquo;` HTML entity in raw JSON — this should be a literal apostrophe `'` or Unicode `\u2019` in JSON-LD; HTML entities are invalid inside JSON.

---

### Installation `/commercial-hvac-services/installation/`

**Blocks found:** 3 (Service, BreadcrumbList, FAQPage)

**Validation:** Pass. All checks clean.

---

### Building Automation `/building-automation/`

**Blocks found:** 3 (Service, BreadcrumbList, FAQPage)

**Validation:**

| Check | Status | Note |
|---|---|---|
| Service block | Pass | |
| BreadcrumbList | Pass | Home → Building Automation (2 levels) |
| Page URL vs services hub | Info | This page lives at `/building-automation/` not `/commercial-hvac-services/building-automation/` — BreadcrumbList correctly reflects actual URL, but the hub's ItemList at `/commercial-hvac-services/` omits Building Automation. Consider whether BA should be listed there. |

---

### Equipment Hub `/equipment/`

**Blocks found:** 2 (BreadcrumbList, CollectionPage with nested ItemList)

**Validation:**

| Check | Status | Note |
|---|---|---|
| CollectionPage | Pass | Valid type for a directory page |
| mainEntity ItemList (12 items) | Pass | All equipment types listed with names and urls |
| Equipment item urls | Pass | All point to gardnerair.com |
| Missing Service blocks on child pages | N/A | Checked below |

---

### Equipment Sub-pages (Package Units, Chillers, Boilers — sampled)

**Blocks found per page:** 3 (Service, BreadcrumbList, FAQPage)

**Validation:**

| Check | Status | Note |
|---|---|---|
| Service block with serviceType | Pass | Specific per equipment type |
| provider HVACBusiness with full NAP | Pass | Consistent across all 3 |
| BreadcrumbList (3 levels) | Pass | Home → Equipment → [Type] |
| FAQPage (5–6 questions) | Pass | Detailed, well-formed |

---

### Blog `/blog/`

**Blocks found:** 2 (Blog, BreadcrumbList)

**Validation:**

| Check | Status | Note |
|---|---|---|
| Blog type | Pass | Valid schema type |
| publisher as Organization | Pass | Correct |
| BreadcrumbList | Pass | |
| Missing BlogPosting blocks | Info | No individual posts live yet — acceptable at this stage |

---

## NAP Consistency Check

| Property | Homepage | About | Contact | Service Pages |
|---|---|---|---|---|
| name | Gardner Air | Gardner Air | Gardner Air | Gardner Air |
| telephone | +1-951-696-4495 | +19516964495 | +19516964495 | +19516964495 |
| email | service@gardnerci.com | service@gardnerci.com | service@gardnerci.com | service@gardnerci.com |
| streetAddress | 30714 Wealth St | 30714 Wealth St | 30714 Wealth St | 30714 Wealth St |
| city/state/zip | Murrieta CA 92563 | Murrieta CA 92563 | Murrieta CA 92563 | Murrieta CA 92563 |

**Telephone format inconsistency:** Homepage uses `+1-951-696-4495` (dashes); all other pages use `+19516964495` (E.164, no dashes). Standardize to E.164 format `+19516964495` sitewide — it is the format Google's parser expects.

---

## Missing Schema Opportunities

| Priority | Type | Page(s) | Why |
|---|---|---|---|
| Critical | Fix `openingHoursSpecification` | Homepage | `opens`/`closes` contain `{{TBD}}` placeholder — invalid; Google rejects the block. Either populate real hours or remove the property entirely until hours are known. |
| Critical | Fix HTML entity in JSON | /replacement/ | `&rsquo;` in FAQPage answer is an HTML entity inside JSON — invalid. Replace with `'` or `\u2019`. |
| High | `WebSite` with `SearchAction` | Homepage | Missing entirely. Enables sitelinks searchbox in Google results. Anchor for site identity in Knowledge Graph. |
| High | `Organization` with `sameAs` | Homepage | No Organization block declaring social profiles or GBP listing URL. Critical for Knowledge Graph entity disambiguation — especially important before domain goes live. |
| High | `BreadcrumbList` | /contact/ | Contact page has no breadcrumb block. All other interior pages have one. |
| Medium | Standardize `areaServed` | Homepage | Top-level HVACBusiness uses `{"@type":"State","name":"Southern California"}` — not a real US state. Replace with array of 3 `County` objects (as used on all other pages). |
| Medium | Standardize telephone format | Homepage | `+1-951-696-4495` vs E.164 `+19516964495` on all other pages. Normalize to `+19516964495`. |
| Medium | `AggregateRating` | Homepage and/or About | 4 Google review cards are rendered on /about/ but no AggregateRating schema exists anywhere. Once real review count/average is confirmed, add to HVACBusiness block. |
| Low | `Person` (founder) | Homepage | Dirk Gardner is on /about/ only. Consider adding to homepage HVACBusiness as `founder` for entity-building. |
| Low | Add Building Automation to hub ItemList | /commercial-hvac-services/ | The services hub ItemList lists 4 services but omits Building Automation, which has its own page. |

---

## Recommended JSON-LD — Priority Fixes

### 1. WebSite block (add to homepage, alongside existing HVACBusiness block)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Gardner Air",
  "url": "https://gardnerair.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://gardnerair.com/?s={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### 2. Organization with sameAs (add to homepage, update URLs before launch)

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Gardner Air",
  "url": "https://gardnerair.com",
  "logo": "https://gardnerair.com/gardnerairlogo.webp",
  "telephone": "+19516964495",
  "email": "service@gardnerci.com",
  "sameAs": [
    "https://www.facebook.com/gardnerair",
    "https://www.linkedin.com/company/gardner-air",
    "https://www.google.com/maps?cid=XXXXXXXXXXXXXXXXX"
  ]
}
```

Replace placeholder sameAs URLs with real profile/GBP URLs before launch.

### 3. Fixed HVACBusiness for homepage (key corrections only)

```json
{
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Gardner Air",
  "url": "https://gardnerair.com",
  "telephone": "+19516964495",
  "areaServed": [
    { "@type": "County", "name": "Riverside County" },
    { "@type": "County", "name": "San Bernardino County" },
    { "@type": "County", "name": "Orange County" }
  ]
}
```

Remove `openingHoursSpecification` entirely until real hours are confirmed, or populate with verified values.

---

## Pre-Launch Action Items (Schema)

1. **Must fix before launch:** Remove or populate `openingHoursSpecification` on homepage (placeholder values will cause Google to reject the HVACBusiness block).
2. **Must fix before launch:** Fix HTML entity `&rsquo;` in /replacement/ FAQPage answer.
3. **Must fix before launch:** Add BreadcrumbList to /contact/ page.
4. **Recommended before launch:** Add WebSite block to homepage.
5. **Recommended before launch:** Add Organization with sameAs (populate with real social/GBP URLs).
6. **Recommended before launch:** Standardize telephone to E.164 `+19516964495` on homepage.
7. **Recommended before launch:** Fix `areaServed` on homepage HVACBusiness to use County array.
8. **Post-launch (when hours confirmed):** Re-add `openingHoursSpecification` with real values.
9. **Post-launch (when reviews accumulated):** Add `AggregateRating` to HVACBusiness on homepage.
