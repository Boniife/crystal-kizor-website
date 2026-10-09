# Stage 1 Assessment Submission — Web Developer

**Studio COKA | Crystal Kizor Website**

## Candidate Details

* **Role:** Web Developer / Frontend Engineer
* **Live Website:** https://crystal-kizor-website-theta.vercel.app
* **GitHub Repository:** https://github.com/Boniife/crystal-kizor-website

---

## 1. Submission Note

To the Studio COKA Careers Team,

I built the Crystal Kizor website using Next.js 16, React 19, Tailwind CSS, and Motion.

My main goal was to bring the different parts of Crystal’s work together without making the website feel like a collection of unrelated businesses. I wanted visitors to understand what she does and find the part of her work that interests them.

A few decisions shaped the experience:

1. **Page structure:** I used an editorial layout with strong typography and photography to introduce Crystal’s work across architecture, education, and design.
2. **Visitor navigation:** The “Where Should I Go Next?” feature helps visitors find relevant information based on what they are looking for.
3. **Interactive projects:** The lightbox and ecosystem modals let visitors explore projects and initiatives without constantly navigating between pages.
4. **Product thinking:** I also explored an AI-powered assistant idea and ways to measure and improve website enquiries.

I built the site to work across screen sizes, with SEO metadata, structured data, and accessibility in mind. I look forward to discussing the project and the decisions behind it.

---

## 2. Part 2 — AI Product Thinking

**Brand:** Studio COKA and The Effective Architect (TEA)

**Proposed tool:** ClimaCraft Engine — AI Assistant for Climate-Responsive Design

### What it does and who it is for

ClimaCraft would help architects and design teams make better early design decisions based on local climate conditions and available building materials. It would be particularly useful for professionals working in tropical African climates.

### The problem it solves

Choosing materials and planning for heat, sunlight, and ventilation can be challenging without reliable local information. ClimaCraft would bring relevant climate data and research together, helping architects explore passive design options before committing to a particular approach.

### How someone would use it

An architect would enter the project location, building type, and approximate budget. The tool would then suggest options for shading, natural ventilation, and suitable local materials. It could present these recommendations in a simple report that the architect can review and share with the project team.

### Technology and implementation

I would build the interface with Next.js and connect it to an LLM through a server-side API route. A service such as OpenAI's API or Gemini could interpret the project requirements and explain the available options. A small, curated knowledge base of verified climate research, material information, and relevant case studies would help ground the responses in reliable sources.

For the first version, I would focus on collecting project details, generating recommendations, and exporting a report. I would add more advanced climate calculations as the data sources and validation process mature.

### Limitations and safeguards

AI recommendations should not be treated as engineering approval. The tool must distinguish verified data from estimates, avoid inventing material properties or structural figures, and require qualified professionals to review safety-critical decisions. Recommendations should also be checked against local building requirements and reliable supplier information.

---

## 3. Part 3 — Analytics and Improvement Strategy

### How I would measure website performance

I would look at three main things: whether the site attracts the right visitors, how easily they use it, and whether they take the next step.

I would track traffic sources, visits to key project pages, clicks on calls to action, and enquiry-form submissions. I would also monitor Core Web Vitals, mobile usability, and errors that could affect the experience.

For this, I would use Google Analytics 4 to track visitor behaviour, Google Search Console to understand search performance, and PostHog or Microsoft Clarity to investigate where visitors struggle. PageSpeed Insights would help identify performance issues.

### Scenario: 5,000 visitors and 5 enquiries

Five enquiries from 5,000 visitors gives a conversion rate of 0.1%. I would investigate the cause before assuming that the website itself is the problem.

First, I would check where the visitors come from and whether they are likely to need the services being offered. Next, I would review the journey from the landing page to the contact section. If visitors leave early, the message or call to action may not be clear enough. If they reach the form but do not submit it, I would check for usability issues, unnecessary fields, and mobile errors.

### What I would do next

I would fix any technical problems first, then test a shorter enquiry form with only the essential fields. I would also consider alternatives such as a direct WhatsApp enquiry or a short discovery call.

I would measure the results of each change and compare them with the original conversion rate before deciding what to improve next.

---

## 4. Technical Architecture and Stack

* **Framework:** Next.js 16.4 with App Router, React 19, and TypeScript.
* **Styling:** Tailwind CSS v4 with a custom palette inspired by architectural materials:

  * Basalt: `#0E0D0C`
  * Terracotta Clay: `#C2704E`
  * Travertine: `#E5DFC5`
  * Sandstone: `#FAF8F5`
* **Interactions:** Motion v12, project lightbox, ecosystem modals, and visitor intent routing.
* **SEO:** Open Graph metadata, Twitter Cards, semantic HTML, and JSON-LD structured data for people and organisations.
* **Performance:** Responsive image optimisation with Next.js Image and attention to unnecessary external font requests.
* **Development:** Turbopack for the development workflow.
