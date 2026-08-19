import type { MetadataRoute } from "next";

/**
 * Explicit per-crawler directives signal intentionality to AI search platforms.
 * We allow all major AI crawlers because a service-area business benefits from
 * being cited in Google AI Overviews, ChatGPT, Perplexity, and Bing Copilot.
 */
export default function robots(): MetadataRoute.Robots {
  const common = { allow: "/", disallow: ["/api/", "/_next/"] };

  return {
    rules: [
      { userAgent: "*", ...common },
      // Google
      { userAgent: "Googlebot", ...common },
      { userAgent: "Google-Extended", ...common },
      // Bing / Microsoft
      { userAgent: "Bingbot", ...common },
      // OpenAI
      { userAgent: "GPTBot", ...common },
      { userAgent: "ChatGPT-User", ...common },
      { userAgent: "OAI-SearchBot", ...common },
      // Anthropic
      { userAgent: "ClaudeBot", ...common },
      { userAgent: "Claude-Web", ...common },
      // Perplexity
      { userAgent: "PerplexityBot", ...common },
      // Apple Intelligence
      { userAgent: "Applebot", ...common },
      { userAgent: "Applebot-Extended", ...common },
      // Common Crawl (used by many AI training pipelines)
      { userAgent: "CCBot", ...common },
    ],
    sitemap: "https://gardnerair.com/sitemap.xml",
  };
}
