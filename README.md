# Crystal Kizor — Ecosystem Landing Page & Brand Monograph

> A unified digital ecosystem and architectural monograph for **Crystal Kizor**—Architect, Designer, Entrepreneur, Speaker, and Researcher building across **Studio COKA**, **ELEvated**, **The Effective Architect (TEA)**, **AKO Alliance**, **Alive & Free**, and personal research.

Built as part of the **Stage 1 Assessment for Web Developer** at **Studio COKA**.

---

## 🏛️ Live Experience & Deliverables

- **Live Deployed Site**: [Deploy on Vercel / Netlify]
- **Assessment Documentation**: See [SUBMISSION_NOTES.md](./SUBMISSION_NOTES.md) or click **"Assessment Brief"** in the live site navigation to view Parts 1, 2, and 3 directly inside the interactive strategic portal.

---

## 📐 Project Overview & Core Answers

The assessment challenged candidates to answer four fundamental questions for a first-time visitor:

| Core Question | How the Site Solves It |
|---|---|
| **Who is Crystal Kizor?** | High-impact monograph hero pairing editorial studio portraits with an immediate positioning breakdown: Architect, Founder, Educator, and Ecosystem Builder. |
| **What does she do?** | Clear taxonomy bridging climate-responsive spatial practice, contemporary African product design, professional mentorship, and youth empowerment. |
| **What is she building?** | The **Interactive Ecosystem Matrix** showcasing all 7 entities with distinct roles, core competencies, case studies, and primary CTAs. |
| **Where should I go next?** | The **Intent Navigator** ("Where Should I Go Next?")—an interactive persona router that matches clients, event curators, architects, and patrons directly to their ideal touchpoint. |

---

## 🎨 Design System & Architectural Aesthetic

- **Color Palette**:
  - `Basalt Stone` (`#0E0D0C`) — Grounding deep architectural slate
  - `Terracotta Clay` (`#C2704E` / `#D98867`) — Earthy warmth referencing tropical brickwork and laterite
  - `Travertine & Sandstone` (`#E5DFC5` / `#FAF8F5`) — Warm stone text and surfaces
  - `Brushed Bronze` (`#8F7759`) — Refined technical accents
- **Typography**:
  - Headings: Editorial high-contrast serif (`Cormorant Garamond`, `Didot`, `Georgia`)
  - Body & UI: Crisp geometric sans-serif (`Plus Jakarta Sans`, system-ui)
- **Architectural Details**:
  - Technical drafting grid backdrop (`bg-architectural-grid`)
  - Interactive portrait dimension toggle (Spatial Practice, Ecosystem Builder, Discourse)
  - Full-screen lightbox with material taxonomies (Laterite, Teak, Travertine, Brass)
  - Real-time Lagos time indicator (`WAT GMT+1`)

---

## 🛠️ Tech Stack & Engineering Decisions

- **Framework**: [Next.js 16.4](https://nextjs.org/) (App Router, Turbopack)
- **UI Library**: React 19 + TypeScript (Strict Mode)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens
- **Motion & Micro-interactions**: [Motion](https://motion.dev/) + Canvas Confetti
- **Icons**: [Lucide React](https://lucide.dev/)
- **SEO & Social**: Dynamic Open Graph images, Twitter cards, semantic HTML5 structure, and JSON-LD `Person` & `Organization` schema

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18.18+ or 20+
- npm, pnpm, or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/your-username/crystal-kizor-website.git
cd crystal-kizor-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to explore the experience.

### Production Build
```bash
# Compile optimized static output
npm run build

# Start production server
npm start
```

---

## 📂 Project Architecture

```
crystal-kizor-website/
├── app/
│   ├── favicon.ico
│   ├── icon.svg              # Custom architectural monogram icon
│   ├── globals.css           # Architectural design tokens, grid & marquee
│   ├── layout.tsx            # SEO, Open Graph & JSON-LD Structured Data
│   └── page.tsx              # Cohesive ecosystem page assembly
├── components/
│   ├── Navbar.tsx            # Masthead with live Lagos time & strategic brief trigger
│   ├── Hero.tsx              # Editorial monograph hero with 3 portrait modes
│   ├── IntentNavigator.tsx   # "Where Should I Go Next?" interactive intent router
│   ├── EcosystemGrid.tsx     # The 7 Ecosystem pillars with category filters
│   ├── ProjectGallery.tsx    # Curated works (Studio COKA & ELEvated)
│   ├── ProjectLightbox.tsx   # Fullscreen architectural inspector with material taxonomy
│   ├── BrandDetailDrawer.tsx # Deep-dive matrix drawer for each entity
│   ├── SpeakingSection.tsx   # Keynotes, lectures & conference themes
│   ├── WritingArchive.tsx    # Research papers, essays & forthcoming monograph
│   ├── InquiryDrawer.tsx     # Direct consultation console with confetti feedback
│   ├── StrategyBriefModal.tsx# Embedded Parts 1, 2, and 3 assessment documentation
│   └── Footer.tsx            # Editorial colophon, ecosystem index & back-to-top
├── lib/
│   ├── data.ts               # Structured brand data, projects & speaking topics
│   └── strategy-content.ts   # AI product thinking (Part 2) & Analytics strategy (Part 3)
├── public/
│   ├── images/
│   │   ├── portraits/        # High-res portraits of Crystal Kizor
│   │   ├── architecture/     # Authentic project renders & details
│   │   └── branding/         # Ecosystem identity assets
├── SUBMISSION_NOTES.md       # Candidate note (<200w), Part 2 (<300w), Part 3 (<250w)
└── README.md
```

---

## 📄 License & Attribution

Designed and developed by the candidate for the **Crystal Kizor / Studio COKA Stage 1 Web Developer Assessment**.  
All photography and architectural renders are copyright © Studio COKA and Crystal Kizor.
