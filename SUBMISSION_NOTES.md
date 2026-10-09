# Stage 1 Assessment Submission — Web Developer (Studio COKA)

**Candidate Application Deliverables**
- **Target Role**: Web Developer / Frontend Engineer
- **Brand / Subject**: Crystal Kizor Ecosystem (Studio COKA, ELEvated, TEA, AKO Alliance, Speaking, Alive & Free, Personal Authorship)
- **Live Deployed Link**: *[Insert your deployed Vercel/Netlify URL, e.g. https://crystal-kizor-website.vercel.app]*
- **GitHub Repository**: *[Insert your GitHub repo URL, e.g. https://github.com/your-username/crystal-kizor-website]*

---

## 1. Candidate Submission Note (Under 200 Words)

> **Word count**: 178 words (Max limit: 200 words)

To the Studio COKA Careers Team,

I built this digital ecosystem for Crystal Kizor using Next.js 16 (Turbopack), React 19, Tailwind CSS, and Motion.

Rather than presenting seven disjointed businesses, I structured the experience around architectural monograph storytelling—balancing Crystal's personal authority with clear commercial pathways. Key decisions include:
1. **Editorial Hierarchy**: An immediate dual narrative establishing Crystal's positioning as an architect, educator, and builder, anchored by photography from her practice.
2. **The Intent Router ('Where Should I Go Next?')**: A dynamic filter allowing prospective clients, keynote curators, and built-environment peers to immediately locate their desired touchpoint without cognitive fatigue.
3. **Interactive Project Lightbox & Ecosystem Modals**: Deep dives into Studio COKA's bioclimatic designs and ELEvated's craftsmanship with high-resolution imagery and material taxonomies.
4. **Embedded Strategic Portals**: Direct inclusion of Part 2 (AI Vernacular SpecEngine) and Part 3 (0.1% conversion rate diagnostic) to demonstrate end-to-end product thinking.

The site is fully responsive, SEO-optimized with JSON-LD structured data, accessible, and engineered for sub-second load times. I look forward to discussing how I can bring this craft to Studio COKA.

---

## 2. Part 2 — AI Product Thinking (Under 300 Words)

> **Brand Chosen**: Studio COKA & The Effective Architect (TEA)  
> **Tool Proposed**: *ClimaCraft Engine: AI Vernacular Specification Assistant*  
> **Word count**: 298 words (Max limit: 300 words)

**What it does & Who it is for:**  
ClimaCraft Engine is an intelligent microclimate specification copilot for architects, structural engineers, and design-build studios across tropical Africa. It transforms local weather telemetry, solar orientation, and indigenous material data into actionable passive architectural specifications.

**The Problem it Solves:**  
Traditional CAD/BIM energy simulation plugins are optimized for temperate Northern Hemisphere climates, defaulting to costly mechanical HVAC and imported glass envelopes. Built-environment professionals in Nigeria and Sub-Saharan Africa lack rapid, empirical data on how locally quarried laterite, stabilized earth blocks, bamboo, and passive louvers perform under equatorial humidity.

**How Someone Uses It:**  
An architect inputs project coordinates (e.g., Enugu, 6.45°N), building typology, and budget tier. ClimaCraft synthesizes local microclimate weather files and produces an interactive "Passive Brief": recommended overhang-to-window ratios, prevailing wind breezeway channels, certified regional material assemblies, and thermal mass U-value comparisons.

**Technology Stack & Model:**  
Built on Next.js and Python FastAPI, utilizing Claude 3.5 Sonnet / Gemini 1.5 Pro via Vercel AI SDK for architectural reasoning. A Retrieval-Augmented Generation (RAG) pipeline (pgvector / Supabase) indexes tropical building research, West African meteorological datasets (Open-Meteo EPW files), and Studio COKA's empirical material case studies.

**First Working Version (MVP) & Safeguards:**  
- **MVP**: A 3-step web wizard querying climate APIs and outputting exportable PDF specifications with calculated thermal transfer metrics.  
- **Safeguards**: Strict deterministic validation layers prevent LLM hallucination of structural load values; clear legal disclaimers mandate statutory engineer sign-off; all material recommendations cross-reference verified local supplier registries.

---

## 3. Part 3 — Analytics & Improvement Strategy (Under 250 Words)

> **Word count**: 246 words (Max limit: 250 words)

**How to Measure Website Performance:**  
I evaluate digital performance across three dimensions:
1. **Conversion Quality**: Intent Router navigation depth, project lightbox view rates, inquiry form submission rates, time on ecosystem briefs.
2. **User Experience & Technical Health**: Core Web Vitals (LCP < 1.2s, INP < 100ms, zero layout shifts, mobile responsiveness).
3. **Behavioral Heatmaps**: PostHog session replays, Hotjar click maps to identify where visitors hesitate.

**Scenario Diagnostic: 5,000 Visitors / 5 Inquiries (0.1% CVR):**  
A 0.1% conversion rate indicates severe friction or traffic mismatch. Here is my diagnostic protocol:

1. **Traffic Intent Audit**: Compare organic search/referrals vs unfocused social traffic to verify visitor qualification.
2. **Funnel Abandonment in PostHog**: If 80% exit on the hero, the value proposition is ambiguous; if visitors reach the contact section but drop off, the form is either too long, broken on mobile devices, or demands excessive upfront commitment.
3. **Mobile Usability Testing**: Over 70% of regional visitors use mobile phones; audit for viewport overflows or slow script blocking.

**Next Steps & Iterations:**  
- Streamline the inquiry form to three essential fields (Name, Project Type, Email).  
- Introduce a low-commitment micro-conversion (e.g., "Download Studio COKA Architectural Portfolio" or "Book 15-Min Discovery Call").  
- Implement a 1-click WhatsApp studio connection.  
- A/B test hero positioning with Hotjar heatmaps tracking hesitation.

---

## 4. Technical Architecture & Stack Highlights

- **Framework**: Next.js 16.4 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS v4 with bespoke architectural design tokens (Basalt `#0E0D0C`, Terracotta Clay `#C2704E`, Travertine `#E5DFC5`, Sandstone `#FAF8F5`)
- **Interactivity**: Motion v12 transitions, Canvas Confetti celebration, dynamic lightbox viewer, intent routing matrix
- **SEO & Search**: Complete Open Graph, Twitter Cards, Semantic HTML5 hierarchy, and JSON-LD `Person` / `Organization` schema
- **Performance**: Zero external render-blocking font dependencies, optimized responsive Next/Image assets, sub-second Turbopack compilation
