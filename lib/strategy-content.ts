export const STRATEGY_DATA = {
  aiProduct: {
    title: "Part 2: AI Product Thinking",
    brandSelected: "Studio COKA & The Effective Architect (TEA)",
    toolName: "ClimaCraft Engine: AI Vernacular Specification Assistant",
    wordCount: 298,
    sections: [
      {
        heading: "What it does & Who it is for",
        content:
          "ClimaCraft Engine is an intelligent microclimate specification copilot for architects, structural engineers, and design-build studios across tropical Africa. It transforms local weather telemetry, solar orientation, and indigenous material data into actionable passive architectural specifications.",
      },
      {
        heading: "The Problem it Solves",
        content:
          "Traditional CAD/BIM energy simulation plugins are optimized for temperate Northern Hemisphere climates, defaulting to costly mechanical HVAC and imported glass envelopes. Built-environment professionals in Nigeria and Sub-Saharan Africa lack rapid, empirical data on how locally quarried laterite, stabilized earth blocks, bamboo, and passive louvers perform under equatorial humidity.",
      },
      {
        heading: "How Someone Uses It",
        content:
          "An architect inputs project coordinates (e.g. Enugu, 6.45°N), building typology, and budget tier. ClimaCraft synthesizes local microclimate weather files and produces an interactive 'Passive Brief': recommended overhang-to-window ratios, prevailing wind breezeway channels, certified regional material assemblies, and thermal mass U-value comparisons.",
      },
      {
        heading: "Technology Stack & Model",
        content:
          "Built on Next.js and Python FastAPI, utilizing Claude 3.5 Sonnet / Gemini 1.5 Pro via Vercel AI SDK for architectural reasoning. A Retrieval-Augmented Generation (RAG) pipeline (pgvector / Supabase) indexes tropical building research, West African meteorological datasets (Open-Meteo EPW files), and Studio COKA's empirical material case studies.",
      },
      {
        heading: "First Working Version (MVP) & Safeguards",
        content:
          "MVP: A 3-step web wizard querying climate APIs and outputting exportable PDF specifications with calculated thermal transfer metrics. Safeguards: Strict deterministic validation layers prevent LLM hallucination of structural load values; clear legal disclaimers mandate statutory engineer sign-off; all material recommendations cross-reference verified local supplier registries.",
      },
    ],
  },
  analytics: {
    title: "Part 3: Analytics & Improvement Strategy",
    wordCount: 246,
    sections: [
      {
        heading: "How to Measure Website Performance",
        content:
          "I evaluate digital performance across three dimensions: 1) Conversion Quality (Intent Router navigation depth, project lightbox view rates, inquiry form submission rates, time on ecosystem briefs); 2) User Experience & Technical Health (Core Web Vitals: LCP < 1.2s, INP < 100ms, zero layout shifts, mobile responsiveness); 3) Behavioral Heatmaps (PostHog session replays, Hotjar click maps to identify where visitors hesitate).",
      },
      {
        heading: "Scenario Diagnostic: 5,000 Visitors / 5 Inquiries (0.1% CVR)",
        content:
          "A 0.1% conversion rate indicates severe friction or traffic mismatch. Here is my diagnostic protocol: First, audit Traffic Intent: compare organic search/referrals vs unfocused social traffic to verify visitor qualification. Second, analyze Funnel Abandonment in PostHog: if 80% exit on the hero, the value proposition is ambiguous; if visitors reach the contact section but drop off, the form is either too long, broken on mobile devices, or demands excessive upfront commitment. Third, test Mobile Usability (70%+ of regional visitors use mobile phones) for viewport overflows or slow script blocking. Next Steps: 1) Streamline the inquiry form to three essential fields (Name, Project Type, Email); 2) Introduce a low-commitment micro-conversion (e.g., 'Download Studio COKA Architectural Portfolio' or 'Book 15-Min Discovery Call'); 3) Implement a 1-click WhatsApp studio connection; 4) A/B test hero positioning.",
      },
    ],
  },
  submissionNote: {
    title: "Candidate Submission Note (Under 200 words)",
    wordCount: 178,
    text: `To the Studio COKA Hiring Team,

I built this digital ecosystem for Crystal Kizor using Next.js 16 (Turbopack), React 19, Tailwind CSS, and Motion.

Rather than presenting seven disjointed businesses, I structured the experience around architectural monograph storytelling—balancing Crystal's personal authority with clear commercial pathways. Key decisions include:
1. Editorial Hierarchy: An immediate dual narrative establishing Crystal's positioning as an architect, educator, and builder, anchored by photography from her practice.
2. The Intent Router ('Where Should I Go Next?'): A dynamic filter allowing prospective clients, keynote curators, and built-environment peers to immediately locate their desired touchpoint without cognitive fatigue.
3. Interactive Project Lightbox & Ecosystem Modals: Deep dives into Studio COKA's bioclimatic designs and ELEvated's craftsmanship with high-resolution imagery and material taxonomies.
4. Embedded Strategic Portals: Direct inclusion of Part 2 (AI Vernacular SpecEngine) and Part 3 (0.1% conversion rate diagnostic) to demonstrate end-to-end product thinking.

The site is fully responsive, SEO-optimized with JSON-LD structured data, accessible, and engineered for sub-second load times. I look forward to discussing how I can bring this craft to Studio COKA.`,
  },
};
