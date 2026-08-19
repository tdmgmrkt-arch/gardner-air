# Gardner Air — Technical SEO Pre-Launch Audit
**Date:** 2026-08-18  
**Preview URL:** https://gardner-air.vercel.app/  
**Production target:** https://gardnerair.com/  
**Score: 74 / 100**

---

## Executive Summary

- Canonicals are correctly set to production (`gardnerair.com`) on all 7 checked pages — no risk of preview URLs being indexed.
- robots.txt is properly permissive for crawlers and correctly points the sitemap to production.
- HTTPS is enforced with a strong HSTS policy (2-year max-age with preload). No missing HTTPS enforcement risk.
- Trailing-slash URLs issue 308 permanent redirects to their canonical non-slash equivalents — consistent behavior, but the sitemap contains trailing-slash URLs while live URLs do not, creating a one-hop redirect chain for every sitelink Googlebot follows from the sitemap.
- Critical: the homepage LCP candidate image (`EnvironmentBand.webp`) is tagged `loading="lazy"` with no `fetchpriority="high"` — this will delay LCP on mobile and likely push it past the 2.5s threshold.
- Critical: structured data contains unfilled placeholder values (`"opens":"{{TBD}}"`, `"closes":"{{TBD}}"`) — schema will fail Google's Rich Results validation.
- Security headers are incomplete: no `Content-Security-Policy`, `X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, or `Permissions-Policy` headers are returned.
- `ai-actions.json` is listed in the sitemap at priority 0.5 — a non-HTML asset should not be submitted to search engines in a URL sitemap.

---

## Findings by Category

### 1. Crawlability — PASS

| Check | Result |
|---|---|
| robots.txt accessible | Yes — HTTP 200 |
| User-agent directive | `Allow: /` (all crawlers permitted) |
| Disallowed paths | `/api/` and `/_next/` (correct — internal Next.js paths) |
| Sitemap declaration | `https://gardnerair.com/sitemap.xml` (production — correct for launch) |

No crawl blocks on content pages. Pre-launch the Vercel preview has no `X-Robots-Tag: noindex` header, meaning Googlebot could theoretically crawl and index the preview domain — however canonicals to `gardnerair.com` on every page make accidental indexing very low risk.

### 2. Indexability — PASS (with caveats)

All 7 checked pages return `name="robots" content="index, follow"`. Canonicals on all interior pages point to production with trailing-slash (e.g., `https://gardnerair.com/about/`), which matches the sitemap format. The homepage canonical is `https://gardnerair.com` (no trailing slash), which also matches the sitemap entry.

No duplicate content risk detected across the checked URL set.

### 3. Sitemap Coverage — PARTIAL FAIL

Both the preview `/sitemap.xml` and the production `robots.txt`-declared sitemap resolve identically (both served from the Next.js app, pointing to `gardnerair.com`). 33 URLs total.

Issues found:

- **Trailing-slash mismatch:** Sitemap entries use trailing-slash URLs (e.g., `/contact/`) but live pages 308-redirect those to non-slash (`/contact`). Every sitemap URL will incur a redirect before Googlebot reaches the canonical page. Google can follow these but it burns crawl budget and slows discovery.
- **`ai-actions.json` in sitemap:** A machine-readable JSON file at priority 0.5 is not an indexable page and should be removed from the URL sitemap.
- **Homepage sitemap entry format:** Listed as `https://gardnerair.com` (no trailing slash). All other entries have trailing slashes. Inconsistent but not blocking.

### 4. Canonical Tags — PASS

| Page | Canonical |
|---|---|
| `/` | `https://gardnerair.com` |
| `/about` | `https://gardnerair.com/about/` |
| `/contact` | `https://gardnerair.com/contact/` |
| `/commercial-hvac-services` | `https://gardnerair.com/commercial-hvac-services/` |
| `/equipment` | `https://gardnerair.com/equipment/` |
| `/equipment/chillers` | `https://gardnerair.com/equipment/chillers/` |
| `/equipment/boilers` | `https://gardnerair.com/equipment/boilers/` |

All point to production. Consistent. No self-referencing preview domain. This is the most important pre-launch check — passes cleanly.

### 5. Security Headers — FAIL

| Header | Status |
|---|---|
| `Strict-Transport-Security` | Present — `max-age=63072000; includeSubDomains; preload` (strong) |
| `Content-Security-Policy` | Missing |
| `X-Frame-Options` | Missing |
| `X-Content-Type-Options` | Missing |
| `Referrer-Policy` | Missing |
| `Permissions-Policy` | Missing |

HSTS is solid. The remaining five headers are absent. For a B2B HVAC site with a contact form, missing CSP and X-Frame-Options are the highest-risk gaps (clickjacking, XSS vector for form data).

### 6. Redirect Behavior — PASS (with note)

- Trailing-slash → non-slash: 308 Permanent Redirect (single hop, no chain, no loop).
- 308 is appropriate for permanent redirects. Google treats it equivalently to 301.
- `doesnotexist` path: returns proper HTTP 404 — no redirect loop, correctly handled.
- No redirect chains deeper than one hop observed.

The trailing-slash behavior is consistent and predictable. The only issue is the sitemap-to-live-URL mismatch noted above.

### 7. Core Web Vitals Signals — FAIL (LCP risk)

**LCP:** The hero section contains `EnvironmentBand.webp` — a full-viewport above-fold image — tagged with `loading="lazy"` and no `fetchpriority` attribute. Lazy-loading the LCP candidate suppresses browser preloading and will almost certainly push LCP past 2.5s on mobile. This is the single highest-impact performance fix before launch.

**CLS:** No unsized layout containers observed in the image markup. Next.js `<Image>` fill mode is used with absolute positioning — no CLS risk from images. Font preloads are declared in `<head>` (4 font files preloaded), reducing FOIT/FOUT CLS.

**INP:** No heavy synchronous scripts observed in the HTML. Next.js app shell is async-loaded. No INP concerns identifiable from static analysis.

### 8. Structured Data — FAIL

`HVACBusiness` schema is present on the homepage. Issues:

- `"opens": "{{TBD}}"` and `"closes": "{{TBD}}"` — literal placeholder strings in `OpeningHoursSpecification`. Google's Rich Results Test will reject or ignore these. Fill with actual hours or remove the `openingHoursSpecification` block before launch.
- `"areaServed": {"@type": "State", "name": "Southern California"}` — "Southern California" is not a recognized schema.org geographic entity. Use `GeoCircle` or an array of `City`/`AdministrativeArea` entities (Riverside, San Bernardino County, Orange County).

### 9. Mobile / Viewport — PASS

`name="viewport" content="width=device-width, initial-scale=1"` is present on the homepage (confirmed; interior pages inherit from shared layout). No issues detected from source inspection.

### 10. JavaScript Rendering — PASS

Pages are server-side rendered via Next.js (`X-Nextjs-Prerender: 1` response header on homepage). Full HTML content is present in the initial response — not dependent on client-side JS for indexable content. Googlebot will not need to execute JS to read the page.

---

## Prioritized Issue Table

| Severity | Issue | Page(s) | Fix |
|---|---|---|---|
| Critical | LCP image lazy-loaded — will hurt Core Web Vitals | Homepage | Remove `loading="lazy"` from `EnvironmentBand.webp`; add `fetchpriority="high"` |
| Critical | Structured data has unfilled placeholders (`{{TBD}}`) | Homepage | Set real business hours or remove `openingHoursSpecification` block |
| High | Missing security headers: CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy | All pages | Add via `next.config.js` `headers()` export |
| High | Sitemap URLs use trailing slashes; live URLs 308-redirect away from them | All sitemap entries | Align sitemap URLs with canonical live URL format (no trailing slash), OR configure Next.js to serve trailing-slash URLs as 200 instead of redirecting |
| Medium | `ai-actions.json` included in XML sitemap | Sitemap | Remove non-HTML assets from URL sitemap |
| Medium | `areaServed` uses unrecognized geo entity in schema | Homepage | Replace with array of `City` entities: Riverside, San Bernardino County, Orange County |
| Low | Sitemap homepage entry missing trailing slash while all other entries have it | Sitemap | Normalize to consistent format |
| Low | `X-Content-Type-Options: nosniff` missing | All pages | Add to `next.config.js` headers |

---

## Launch Blockers Summary

Two items should block launch if not addressed:

1. **LCP image** — measurable ranking/UX signal from day one.
2. **Schema placeholders** — submitting invalid structured data will suppress rich results and may trigger a manual review flag.

The security headers are important but not launch-blocking for a brochure site; prioritize within the first two weeks post-launch.
