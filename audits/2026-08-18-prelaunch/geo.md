# GEO Audit --- Gardner Air
**URL audited:** https://gardner-air.vercel.app/
**Date:** 2026-08-18
**Auditor:** Chief Otto (GEO specialist subagent)

---

## Executive Summary

Gardner Air pre-launch is structurally strong for AI search visibility. The ai-actions.json is a genuine differentiator -- few local service sites deploy this. The primary GEO gaps are: no per-crawler robots.txt directives (all crawlers fall through to wildcard), a missing llms.txt, low authorship and date signals, and homepage stat blocks that are citable but unsourced. The /equipment/chillers/ page is the site best GEO performer and should be the template for all remaining equipment sub-pages.

**Overall GEO Readiness Score: 61 / 100**

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 68 | 17.0 |
| Structural Readability | 20% | 72 | 14.4 |
| Multi-Modal Content | 15% | 40 | 6.0 |
| Authority and Brand Signals | 20% | 55 | 11.0 |
| Technical Accessibility | 20% | 63 | 12.6 |
| **Total** | | | **61.0** |

---

## Findings by Category

### 1. AI Crawler Access (robots.txt)

**Status: Partial -- no per-crawler rules**

The file uses a single User-agent: * block only. All named AI crawlers are allowed via fall-through:

- GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot: allowed (not explicitly permitted)
- CCBot, anthropic-ai, cohere-ai: allowed (not blocked -- may be intentional or oversight)
- Google-Extended, Applebot-Extended: allowed (fall-through)

The sitemap is hardcoded to https://gardnerair.com/sitemap.xml while the preview domain is gardner-air.vercel.app. Expected pre-launch, but must be corrected at go-live or the sitemap link in robots.txt will be dead during pre-launch crawls.

### 2. llms.txt

**Status: MISSING**

There is no /llms.txt at the standard path. The content already exists in ai-actions.json and site copy -- it just needs to be assembled and served at /llms.txt. RSL 1.0 licensing declaration is also absent.

### 3. ai-actions.json

**Status: Present -- Structure is excellent**

The file is well-formed and AI-agent-native. Strengths:

- notes_for_ai_assistants correctly steers LLMs away from residential referrals and misrouting
- service_area_boundary narrows geography precisely (3 counties named)
- emergency_routing sets correct expectations (PM firm, not 24/7 emergency dispatch)
- supports_agent_booking: false prevents hallucinated booking flows
- primary_services list is specific enough for accurate user intent matching

One gap: the schema field self-references the production domain (https://gardnerair.com/ai-actions.json). This causes a resolution failure on the preview URL; handle before go-live.

### 4. Citability Analysis (3-page sample)

**Homepage (/)**

Best asset: Seven named statistics (68% reduction in emergency calls, 40% longer lifespan, 22% energy efficiency, 81% downtime reduction, 80k year-two savings for a college client, 17-point maintenance scope, 5+ factory-trained brands). These are highly citable if sourced.

Critical gap: Zero source attribution on any statistic. AI systems hedge or drop unsourced claims. Internal attribution (e.g., based on Gardner Air client data, 2020-2025) suffices and costs nothing to add.

Passage length: Hero and section intros run 80-120 words, below the 134-167 word sweet spot for AI citation. The 17-point scope claim lives inside a sentence rather than a self-contained answer block. No FAQ section on homepage; missed opportunity for query-matched citability.

**About (/about/)**

Best asset: Founded 2006, owner named (Dirk Gardner, 30+ years experience), three named CA license classes (B, C20, C4), 9 certifications, NATE/EPA/NCI/York Diamond. Exactly the kind of authority signals AI systems weight heavily.

Gap: The 3 structured FAQs are present but answers average under 60 words. Expand to 100-150 words per answer for cite-quality responses. No publication date or last-updated signal on the page.

**Equipment: Chillers (/equipment/chillers/)**

Best page on the site for GEO. Six substantive FAQs covering centrifugal vs. screw comparison, 20-25 year lifespan claim, service frequency, and brand coverage list. Answers average ~80 words, approaching the optimal citation range.

Passage quality is strong: Commercial chillers maintained on a disciplined preventative maintenance program typically last 20 to 25 years is a clean, self-contained statement an AI can quote directly. Technical specificity (oil analysis, refrigerant verification, controls calibration; centrifugal above 200 tons) signals genuine domain expertise.

Gap: No source cited for the lifespan figure.

### 5. Authority and Brand Signals

- Named owner (Dirk Gardner, 30 years): present on About -- good
- License classes listed (B, C20, C4) but no CSLB number visible -- flagged in ACTIVE_WORK.md; also weakens GEO authority anchoring
- Wikipedia entity: none (expected for this business size)
- YouTube and Reddit: no confirmed presence -- these correlate most strongly with AI citation (YouTube ~0.737, Reddit high) per published GEO research
- No bylines or article dates anywhere on the site -- weakens freshness signals

### 6. Technical Accessibility

- Next.js with SSR: content available in raw HTML, not JS-dependent. Positive for all AI crawlers.
- Sitemap confirmed but URL hardcoded to production domain -- update at launch.
- JSON-LD schema issues flagged in local SEO audit (broken hours placeholder, missing geo coordinates) reduce structured-data legibility for AI crawlers until resolved.

---

## Prioritized Quick Wins

| # | Action | GEO Impact | Effort |
|---|---|---|---|
| 1 | Add /llms.txt -- one structured file summarizing company, services, service area, CTA URLs, and audience constraints. Model on existing ai-actions.json content. | High | 1 hr |
| 2 | Explicit per-crawler robots.txt directives -- Allow GPTBot, ClaudeBot, OAI-SearchBot, PerplexityBot, Google-Extended explicitly; optionally Disallow CCBot and anthropic-ai training crawlers. | Medium | 30 min |
| 3 | Source the homepage statistics -- add parenthetical attribution to each of the 7 stats (e.g., based on Gardner Air client data, 2020-2025). Unsourced stats are hedged or dropped by AI citation systems. | High | 1 hr |
| 4 | Expand About and equipment FAQ answers to 134-167 words each -- current answers are 50-80 words. Apply this pattern to all equipment sub-pages during the build sprint. | High | 2-3 hrs across all pages |
| 5 | Add dateModified and author attribution to all content pages. A footer note (Content reviewed by Dirk Gardner, C20 License, 2025) counts as an authority signal. Pair with Article JSON-LD author field on blog posts once Field Notes is live. | Medium | 1 hr template, scales to all pages |

---

## Platform-Specific Scores (Estimated)

| Platform | Score | Primary Gap |
|---|---|---|
| Google AI Overviews | 58 / 100 | Missing FAQ schema on homepage; unsourced stats |
| ChatGPT (web browsing) | 62 / 100 | Good ai-actions.json; no llms.txt; no backlink mass yet |
| Perplexity | 65 / 100 | SSR content accessible; chiller FAQs citable; needs author/date signals |
| Bing Copilot | 55 / 100 | No structured per-crawler directives; weaker brand entity footprint |

---

## Implementation Notes

- /equipment/chillers/ is the GEO benchmark for the site. All remaining equipment sub-pages should match its FAQ depth and technical specificity before launch.
- The ai-actions.json is a genuine competitive advantage in this vertical -- no residential HVAC site in SoCal is likely running one. Preserve it and expand primary_services descriptions as more pages are built.
- Once Field Notes blog is live with real posts, add Article schema with author, datePublished, and topic classification -- fastest path to Perplexity and ChatGPT Featured Snippets for commercial HVAC queries in Southern California.
