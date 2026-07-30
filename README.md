# Gardner Air — Website

Commercial HVAC preventative maintenance specialist. Southern California.

## What was built

Homepage-only design pass. This build establishes the visual language, layout system,
typography, color use, and spacing that all subsequent pages will inherit.

**Tech stack:** Next.js 16.2 / App Router / TypeScript strict / Tailwind CSS v4 / pnpm

**Routes built:**
- `/` — Homepage (14 sections, fully responsive)
- `/robots.txt` — generated via `app/robots.ts`
- `/sitemap.xml` — generated via `app/sitemap.ts`
- `/_not-found` — 404 page stub

Inner pages (`/services/*`, `/about`, `/contact`, etc.) are not yet built.
Nav links point to future routes — they will 404 for now. That is expected.

---

## Design decisions

**Typography: Inter + DM Sans**
Inter handles all body, UI, and label text — exceptional corporate legibility. DM Sans at
700-800 weight gives headlines geometric authority that reads "precision engineering" rather
than a generic web font. Both are loaded via `next/font/google` for zero CLS.

**Color palette:**
- `#D42027` — red accent, sampled from logo (used only on: primary CTA buttons, eyebrow
  labels, thin rule accents, active number markers, hover states). Red is sparse by design.
- `#0A0A0A` — near-black primary text
- `#6B7280` — secondary text, hairlines, dividers
- `#F4F5F6` / `#FAFAFA` — alternating section backgrounds, card fills
- `#FFFFFF` — dominant background, cards, header

**Layout approach:** mobile-first. 375px base, `lg:` overrides for desktop. Two-column
layouts all use `grid-cols-1 lg:grid-cols-2` with text-first stack on mobile.

**Section design highlights:**
- WhyGardner: asymmetric two-column with sticky heading and large display numerals -- not
  an icon grid. Intentionally editorial.
- TrustStrip: horizontally scrollable on mobile (no horizontal scroll on page, only the
  strip internal). Grid-4 on desktop.
- EquipmentGrid: `gap-px bg-[#E5E7EB]` pattern creates a true grid-line matrix feel
  without borders that collapse oddly.
- CaseStudies: awards-preview card pattern with sector tags, outcome callouts, photo
  placeholders that brief the photography exactly.

**Sticky mobile CTA bar:** fixed bottom-0, two actions (Call + Request Proposal), respects
iOS safe-area inset. Space is reserved at initial render to prevent CLS.

---

## What is placeholder / needs client input before launch

All items marked `{{TBD}}` in component files:

- [ ] Phone number -- every `href="tel:+10000000000"` and displayed number
- [ ] Email address -- footer contact link
- [ ] Physical address -- footer, JSON-LD schema
- [ ] Years in business -- TrustStrip stat
- [ ] Number of commercial clients served -- TrustStrip stat
- [ ] Technician certifications total -- TrustStrip stat
- [ ] Outcome stats in MaintenanceMatters -- verify or source from ASHRAE/DOE data
- [ ] Service area cities per county -- ServiceArea component
- [ ] Case study content (sector, location, scope, outcome, excerpt) -- 3 cards
- [ ] Testimonials -- 2 pull quotes with real client attribution
- [ ] Certification logos -- NATE, EPA 608, OSHA, factory partner names + logo files
- [ ] Photography -- all PhotoPlaceholder components need real images. See filenames below.
- [ ] OG image -- `/public/og-image.webp` (1200 x 630)
- [ ] Logo on dark background -- footer currently uses CSS `brightness-0 invert`.
      Request white/reversed logo variant from client for the footer.
- [ ] Live domain -- currently hardcoded as `https://gardnerair.com` in metadata, sitemap, robots
- [ ] Business hours -- JSON-LD schema
- [ ] Geo coordinates -- JSON-LD schema

### Photography needed (all .webp, drop in /public/)

| Filename | Dimensions | Where used |
|---|---|---|
| `hero-rooftop-technician.webp` | 1920 x 1080 (16:9) | Hero section |
| `maintenance-chiller-mechanical-room.webp` | 1200 x 1500 (4:5) | Maintenance Matters section |
| `case-warehouse-complex-rooftop.webp` | 1920 x 1080 (16:9) | Case study card 1 |
| `case-office-building-chiller.webp` | 1920 x 1080 (16:9) | Case study card 2 |
| `case-manufacturing-crac-interior.webp` | 1920 x 1080 (16:9) | Case study card 3 |
| `og-image.webp` | 1200 x 630 | Social sharing / OG |

Each PhotoPlaceholder in the source code contains a full Nano Banana 2 prompt in the
`subject` prop -- ready to pass to image generation with the client's brand reference image.

---

## How to run

```bash
pnpm install
pnpm dev       # http://localhost:3000
pnpm build     # production build check
pnpm start     # serve production build locally
```

## What needs to happen before this is deployable to production

1. Fill all `{{TBD}}` tokens with real client data
2. Drop real photography into `/public/`
3. Get real cert logos and swap placeholder boxes in CertificationsStrip
4. Wire up contact form (GHL webhook -- separate task for ghl-engineer)
5. Set live domain in `layout.tsx`, `sitemap.ts`, `robots.ts`
6. Create GitHub repo, push, create Vercel project
7. QA pass with qa-launch agent before first deploy to main
