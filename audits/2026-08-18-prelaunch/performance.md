# Gardner Air — Pre-Launch Performance Audit
**Date:** 2026-08-18  
**URL:** https://gardner-air.vercel.app/  
**Method:** HTML source analysis (lab estimate — no CrUX field data on preview deployments)

---

## Summary Table

| Page | HTML Size | Images (img tags) | Scripts | Notable |
|------|-----------|-------------------|---------|---------|
| `/` (homepage) | 213 KB | 12 | 47 | Hero video + poster; logo is only preloaded image — hero video poster NOT preloaded |
| `/equipment/` | 151 KB | 4 (static HTML) | 42 | 12 tiles rendered via RSC payload; hero-bg preloaded correctly |
| `/equipment/chillers/` | 207 KB | 11 | 50 | 9 of 11 images at w=3840 with loading="lazy" — no hero fetchpriority |
| `/commercial-hvac-services/` | 181 KB | 19 | 44 | 17 of 19 images lazy + w=3840; hero preloaded but still loading="lazy" in img tag |
| `/contact/` | 70 KB | ~0 | ~42 | Lightest page; no image concerns |

---

## Per-Page Findings

### `/` — Homepage (213 KB HTML)

**LCP candidate:** Video poster image (`/herooption2.webp`). The `<video>` element has `preload="auto"` and a `poster` attribute — Chrome will paint the poster as the LCP element, not the video itself.

**Critical issue — poster not preloaded.** The only image preloaded in `<head>` is the logo (`gardnerairlogo.webp`). The hero video poster (`/herooption2.webp`) has no `<link rel="preload">` and no `fetchpriority="high"` on the `<img>` equivalent. Browser must discover it late → LCP penalty.

**Font preloads:** 5 woff2 files preloaded (DM Sans variants). This is correct but competes for early bandwidth with the missing hero preload.

**5 font preloads + 0 hero image preload** = bandwidth prioritized for fonts while the LCP element loads last. High LCP risk.

**Scripts:** 47 script tags (Next.js chunks — all async/deferred by Next.js conventions, low render-blocking risk). No third-party analytics or tag manager detected in HTML.

**No `rel="preconnect"`** hints present on any page. Minor opportunity.

---

### `/equipment/` — Hub Page (151 KB HTML)

**LCP candidate:** `equipment-hero-bg.webp` — correctly preloaded in `<head>` with full responsive `imageSrcSet` and `sizes="100vw"`. This is the best-configured page of the five.

**Issue — 12 equipment tiles not in static HTML.** Tile images are embedded in the React Server Component JSON payload (RSC flight data), not as `<img>` tags. The browser cannot discover or preload them until the RSC payload is parsed. For tiles below the fold this is fine; if any tile is above the fold on desktop (e.g., first row of 3), it will lazy-load late.

**Lazy load count:** Only 1 explicit `loading="lazy"` in static HTML, but tiles will follow JS lazy-load defaults from next/image. Acceptable since tiles are below the fold.

**lightest page of content-heavy set** — 151 KB is reasonable.

---

### `/equipment/chillers/` — Rich Equipment Page (207 KB HTML)

**LCP candidate:** `equipment/equipment-hero-bg.webp` (full-width background, 100vw). This is the same shared hero used across equipment pages.

**Critical issue — hero has `loading="lazy"`** on the `<img>` tag despite being above the fold. The preload hint exists in `<head>` (good), but the `<img>` itself carries `loading="lazy"`, which the browser may use to defer the actual paint. Next.js `priority={true}` should suppress lazy but the rendered HTML shows `loading="lazy"` on all 9 non-logo images. Confirm `priority` prop is set on the hero `Image` component.

**w=3840 on body images:** `chillers-intro-detail.webp`, `chillers-replacement.webp`, `diamond-contractor.webp`, credential logos — all served at `w=3840`. These are mid-page images (correct to lazy-load) but the 3840-width variant is the fallback `src`. Next.js image optimization will serve the responsive variant via `srcset` on a real browser, but verify `sizes` props are not missing (missing `sizes` defaults to 100vw → browser may pull 3840 on desktop).

**11 images total** — richest content page; expected. LCP is the only concern if `priority` is misconfigured.

---

### `/commercial-hvac-services/` — Services Hub (181 KB HTML)

**LCP candidate:** `commercial-services-hub-hero.webp` — correctly preloaded with full `imageSrcSet` and `sizes="100vw"`. Preload is present and correct.

**Same lazy-loading issue:** The preloaded hero still shows `loading="lazy"` in all image loading attributes (17 of 19 images carry `loading="lazy"`). If the hero `<img>` carries this, the preload hint and the actual img element are in conflict — browser behavior is inconsistent across versions.

**19 images** — the most of any page. Several portfolio/gallery images (`Package-Unit-Replacement`, `Ducting-Installation`, `Computer-Rooms-Liebert-Units`, etc.) are content-area images correctly lazy-loaded. Not a concern.

**Credential logos (`diamond-contractor`, `epa-logo`, `nate-logo`, `nci-logo`, `york-logo`) at w=3840** — these are small badge images. They should use fixed `width`/`height` props on `<Image>` instead of `fill`, which would constrain them to a small intrinsic size and avoid pulling a 3840-wide variant. Current setup wastes bytes.

---

### `/contact/` — Contact Page (70 KB HTML)

Cleanest page. ~42 scripts (shared Next.js bundle), no hero image. No performance concerns. LCP will be text-based (fast). CLS risk is low assuming the contact form doesn't inject content below a fixed-height container.

---

## Prioritized Fix List

### P1 — Fix Before Launch

**1. Preload the homepage hero video poster**  
Add `<link rel="preload" as="image" href="/herooption2.webp">` in `<head>`, or add `fetchpriority="high"` to the first visible image if converting to an `<Image>` component. This is the single highest-impact LCP fix — affects every homepage visit.

**2. Confirm `priority={true}` propagates to `loading="eager"` on hero images**  
The rendered HTML shows `loading="lazy"` on all images including heroes that have preload hints. In Next.js 15 with App Router, `priority` on `<Image>` should produce `loading="eager"` and `fetchpriority="high"` in the DOM. The fact that the rendered `<img>` still shows `loading="lazy"` suggests the `priority` prop may not be passed on equipment and services pages, or there is a component abstraction stripping it. Audit every hero `<Image>` component and confirm `priority` is set explicitly.

**3. Fix credential/badge logos — use fixed dimensions, not `fill`**  
`diamond-contractor.webp`, `epa-logo.webp`, `nate-logo.webp`, `nci-logo.webp`, `york-logo.webp` all serve `w=3840`. These should use `<Image width={X} height={Y}>` with their actual display dimensions. Reduces bytes fetched and removes ambiguity for the image optimizer.

### P2 — High Value, Not Blocking

**4. Add `sizes` props to all body/content images**  
Mid-page images without explicit `sizes` default to `100vw`, causing browsers to pull the largest variant. For 2-column or 3-column layout images, set `sizes="(max-width: 768px) 100vw, 50vw"` (or appropriate). Reduces payload on most real-world visits.

**5. Add `rel="preconnect"` to Vercel image origin**  
No `<link rel="preconnect">` is present on any page. Adding `preconnect` to `/_next/image` origin or the Vercel CDN domain shaves a DNS+TCP+TLS handshake off the first image request. Minor but free.

**6. Equipment hub tile images — validate first-row tiles are not lazy**  
The 12 tiles render via RSC payload. If the first row of tiles is visible above the fold on desktop (likely at 1280px wide), those images may lazy-load late. Add `priority` to the first 3 tile `<Image>` components.

### P3 — Monitor Post-Launch

**7. 47 script chunks on homepage**  
Next.js code-splitting is working (all async), but 47 chunks is on the high side. After launch, use Chrome DevTools Coverage tab to identify unused JS. Consider route-level bundle analysis with `@next/bundle-analyzer`.

**8. 5 font preloads competing with LCP**  
Font preloads are correct (self-hosted woff2 = good). Once P1 is fixed, the hero preload will join the queue. Consider whether all 5 font weights are needed above the fold — deferring unused weights reduces initial parse time.

---

## CWV Estimates (Lab, No Field Data)

| Metric | Homepage | /equipment/ | /equipment/chillers/ | /commercial-hvac-services/ | /contact/ |
|--------|----------|-------------|----------------------|---------------------------|-----------|
| LCP | At risk (poster not preloaded) | Good (hero preloaded) | At risk (priority prop suspect) | Moderate (preload present, lazy conflict) | Good |
| INP | Not measurable from HTML | — | — | — | — |
| CLS | Low risk | Low risk | Low risk | Low risk | Low risk |

> These are estimates from static HTML analysis. Validate with a Lighthouse run against the Vercel preview URL and against field data (CrUX via PageSpeed Insights) after sufficient traffic accumulates post-launch.
