export interface EcosystemBrand {
  id: string;
  name: string;
  tagline: string;
  category: string;
  role: string;
  description: string;
  longDescription: string;
  focusAreas: string[];
  metrics?: { label: string; value: string }[];
  featuredProject?: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  badge: string;
  colorAccent: string;
}

export interface ArchitecturalProject {
  id: string;
  title: string;
  subtitle: string;
  category: "Architecture" | "Furniture & Product" | "Civic & Community";
  entity: "Studio COKA" | "ELEvated";
  year: string;
  location: string;
  image: string;
  aspectRatio: string;
  description: string;
  materials: string[];
  highlights: string[];
}

export interface SpeakingEngagement {
  id: string;
  topic: string;
  forum: string;
  location: string;
  year: string;
  summary: string;
  audience: string;
}

export interface Publication {
  id: string;
  title: string;
  publicationType: "Monograph" | "Essay" | "Research Paper" | "Article";
  year: string;
  description: string;
  readTime: string;
}

export const ECOSYSTEM_BRANDS: EcosystemBrand[] = [
  {
    id: "studio-coka",
    name: "Studio COKA",
    tagline: "Climate-Responsive Architecture & Built Spaces",
    category: "Architecture & Construction",
    role: "Founder & Lead Architect",
    badge: "Flagship Practice",
    colorAccent: "#C2704E",
    description:
      "A forward-thinking architecture, interior design, and construction practice committed to passive climate strategies, regional materiality, and enduring spatial experiences.",
    longDescription:
      "Studio COKA approaches the built environment through the dual lens of climatic pragmatism and visceral beauty. Operating across residential, civic, and commercial scales, the studio interrogates how deep cantilevers, natural ventilation channels, earthen thermal mass, and locally quarried stones can eliminate reliance on artificial conditioning while crafting deeply sensory dwellings.",
    focusAreas: [
      "Passive Solar & Climate-Responsive Architecture",
      "Interior Architecture & Custom Joinery",
      "Vernacular Material Research & Construction",
      "Masterplanning & Adaptive Reuse",
    ],
    metrics: [
      { label: "Design Typology", value: "Bio-climatic" },
      { label: "Core Methodology", value: "Passive-First" },
      { label: "Regional Context", value: "Sub-Saharan Africa" },
    ],
    featuredProject: "Nature Home & Cantilever Pavilion",
    primaryCta: { label: "Commission Architecture", href: "#inquire" },
    secondaryCta: { label: "Explore Projects", href: "#portfolio" },
  },
  {
    id: "elevated",
    name: "ELEvated",
    tagline: "Contemporary Furniture Rooted in African Craft",
    category: "Industrial & Product Design",
    role: "Creative Director",
    badge: "Design Label",
    colorAccent: "#D98867",
    description:
      "A contemporary furniture and collectible product studio engineering functional objects from local timber, forged metals, and ancestral Nigerian joinery techniques.",
    longDescription:
      "ELEvated translates architectural sensibilities into the human tactile scale. Rejecting generic imported mass-production, every object questions how West African hardwood species, hand-turned brass accents, and woven textiles can create collectible modern heirlooms that speak fluently to global contemporary interiors.",
    focusAreas: [
      "Bespoke Architectural Furniture",
      "Indigenous Material Innovation",
      "Artisanal Guild Collaborations",
      "Tactile Living Objects & Lighting",
    ],
    metrics: [
      { label: "Material Sourcing", value: "100% Regional" },
      { label: "Craft Guilds", value: "Direct Artisan Link" },
      { label: "Philosophy", value: "Contextual Modernism" },
    ],
    featuredProject: "Solid Teak & Brass Cantilever Seating Series",
    primaryCta: { label: "Request Catalogue", href: "#inquire" },
    secondaryCta: { label: "View Pieces", href: "#portfolio" },
  },
  {
    id: "tea",
    name: "The Effective Architect (TEA)",
    tagline: "Education, Practice Mentorship & Media Platform",
    category: "Professional Education & Media",
    role: "Founder & Executive Producer",
    badge: "Industry Academy",
    colorAccent: "#8F7759",
    description:
      "An educational and media ecosystem arming architects and built-environment specialists with business acumen, contractual clarity, and technical mastery.",
    longDescription:
      "Bridging the historic divide between academic design theory and commercial viability, TEA curates masterclasses, technical guides, podcasts, and digital toolkits. We empower early-career practitioners to run sustainable, profitable firms that retain design agency and command professional respect across the African continent.",
    focusAreas: [
      "Practice Management & Financial Rigor",
      "Contract Administration & Client Systems",
      "Media, Documentaries & Thought Leadership",
      "Fellowships & Peer Masterminds",
    ],
    metrics: [
      { label: "Community", value: "4,500+ Architects" },
      { label: "Format", value: "Masterclasses & Media" },
      { label: "Mission", value: "Empower Practice" },
    ],
    primaryCta: { label: "Join TEA Mastermind", href: "#inquire" },
    secondaryCta: { label: "Explore Resources", href: "#inquire" },
  },
  {
    id: "ako-alliance",
    name: "AKO Alliance",
    tagline: "Expanding Educational Access & Youth Potential",
    category: "Civic Impact & Education",
    role: "Co-Founder & Trustee",
    badge: "Civic Initiative",
    colorAccent: "#7C785B",
    description:
      "A civic intervention transforming learning environments and funding scholarship pathways for underserved children and young creators.",
    longDescription:
      "AKO Alliance views education as structural architecture. Beyond grants, the initiative builds dignified modular learning sanctuaries, delivers foundational literacy materials, and mentors young people into creative and STEM disciplines, building generational self-reliance.",
    focusAreas: [
      "Learning Infrastructure & School Refurbishment",
      "Early-Childhood STEM & Design Literacy",
      "Merit Scholarships & Mentorship Guilds",
      "Community Library Hubs",
    ],
    metrics: [
      { label: "Focus", value: "Children & Youth" },
      { label: "Model", value: "Direct Intervention" },
      { label: "Impact", value: "Infrastructure + Aid" },
    ],
    primaryCta: { label: "Partner on Programs", href: "#inquire" },
    secondaryCta: { label: "View Impact", href: "#inquire" },
  },
  {
    id: "speaking",
    name: "Speaking Engagements",
    tagline: "Keynotes on Built Environments, Cities & Design",
    category: "Keynotes & Thought Leadership",
    role: "Keynote Speaker & Panelist",
    badge: "Global Discourse",
    colorAccent: "#A65735",
    description:
      "Compelling talks exploring climate resilience, urbanization in the Global South, vernacular craft, and female leadership in architecture.",
    longDescription:
      "Crystal commands stages across architectural summits, global design biennales, university convocations, and executive summits. Her addresses combine empirical architectural case studies with poetic clarity on the urgent destiny of African cities.",
    focusAreas: [
      "Climate-Responsive Design in Tropical Latitudes",
      "The Economic Blueprint of Creative Entrepreneurship",
      "Decolonizing Materiality in African Urban Centers",
      "Building Interdisciplinary Ecosystems",
    ],
    metrics: [
      { label: "Audience Reach", value: "Global & Regional" },
      { label: "Keynote Themes", value: "Climate, Cities, Agency" },
      { label: "Format", value: "Keynotes & Firesides" },
    ],
    primaryCta: { label: "Book for Keynote", href: "#inquire" },
  },
  {
    id: "alive-and-free",
    name: "Alive and Free",
    tagline: "Youth Movement for Purpose, Identity & Restoration",
    category: "Faith & Spiritual Formation",
    role: "Movement Catalyst",
    badge: "Faith Movement",
    colorAccent: "#9E8C6C",
    description:
      "A community guiding emerging generations toward biblical identity, emotional wholeness, freedom, and bold kingdom purpose.",
    longDescription:
      "Alive and Free creates spaces of unfiltered authenticity where young people encounter spiritual revival, mental clarity, and purposeful grounding in Christ. Through gatherings, retreats, and devotional content, members discover life unburdened by performance pressure.",
    focusAreas: [
      "Youth Spiritual Formation & Mentorship",
      "Identity, Mental Well-Being & Inner Healing",
      "Community Gatherings & Sacred Conversations",
      "Purpose-Driven Leadership Development",
    ],
    metrics: [
      { label: "Focus", value: "Gen Z & Young Adults" },
      { label: "Pillar", value: "Faith & Wholeness" },
      { label: "Format", value: "Gatherings & Mentorship" },
    ],
    primaryCta: { label: "Connect with the Movement", href: "#inquire" },
  },
  {
    id: "personal-research",
    name: "Crystal Kizor (Direct)",
    tagline: "Architectural Authorship, Essays & Material Research",
    category: "Authorship & Research",
    role: "Architect, Researcher & Writer",
    badge: "Personal Brand",
    colorAccent: "#B37A57",
    description:
      "Rigorous cultural critique, peer-reviewed architectural papers, ongoing book manuscripts, and long-form dispatches from the frontlines of African design.",
    longDescription:
      "Under her personal banner, Crystal documents ongoing field experiments in compressed earth brick performance, bioclimatic shading envelopes, and the cultural philosophy of African interiority. Her writing bridges rigorous empirical inquiry with literary grace.",
    focusAreas: [
      "Vernacular Thermal Mass Performance Studies",
      "Cultural Anthropology of Domestic African Spaces",
      "Forthcoming Architectural Monograph & Book",
      "Advisory to Private Foundations & Cultural Trusts",
    ],
    metrics: [
      { label: "Outputs", value: "Essays, Books, Research" },
      { label: "Domain", value: "Tropical Architecture" },
      { label: "Advisory", value: "Private Clients & Boards" },
    ],
    primaryCta: { label: "Read Essays & Contact", href: "#inquire" },
  },
];

export const PROJECTS_GALLERY: ArchitecturalProject[] = [
  {
    id: "nature-home",
    title: "The Nature Home Residence",
    subtitle: "Bioclimatic Residential Retreat",
    category: "Architecture",
    entity: "Studio COKA",
    year: "2025",
    location: "Enugu, Nigeria",
    image: "/images/architecture/nature-home-facade.jpg",
    aspectRatio: "aspect-[4/3]",
    description:
      "A contemporary private sanctuary nestled into native tree canopies. Designed to minimize solar heat gain through dynamic overhangs, cross-ventilation breezeways, and limestone accents.",
    materials: ["Local Laterite Stone", "Perforated Screens", "Recycled Teak", "Travertine"],
    highlights: ["80% passive cooling", "Zero mature tree felling", "Integrated rainwater harvest"],
  },
  {
    id: "cantilever-pavilion",
    title: "Shade with Cantilevers",
    subtitle: "Thermal Shading & Exterior Gallery",
    category: "Architecture",
    entity: "Studio COKA",
    year: "2024",
    location: "Abuja, Nigeria",
    image: "/images/architecture/shade-cantilevers.jpg",
    aspectRatio: "aspect-[16/10]",
    description:
      "An exploration of deep architectural eaves designed to shield living quarters from intense solar radiation while framing expansive garden views.",
    materials: ["Engineered Timber", "Off-site Steel", "Textured Plaster"],
    highlights: ["Engineered shadow paths", "Seamless indoor-outdoor threshold"],
  },
  {
    id: "civic-community-centre",
    title: "Oma Community Centre",
    subtitle: "Civic Gathering & Vocational Hub",
    category: "Civic & Community",
    entity: "Studio COKA",
    year: "2024",
    location: "Anambra, Nigeria",
    image: "/images/architecture/community-centre-1.png",
    aspectRatio: "aspect-[4/3]",
    description:
      "A community-anchored public building engineered with breathable porous walls, multipurpose workshop halls, and vernacular courtyards for communal assembly.",
    materials: ["Compressed Earth Blocks", "Woven Bamboo Ceilings", "Polished Terrazzo"],
    highlights: ["Community co-construction", "Modular expansion ready", "Passive acoustic design"],
  },
  {
    id: "nature-home-interior",
    title: "Nature Home: Family Living Pavilion",
    subtitle: "Bespoke Interior & Material Hierarchy",
    category: "Architecture",
    entity: "Studio COKA",
    year: "2025",
    location: "Enugu, Nigeria",
    image: "/images/architecture/family-room.jpg",
    aspectRatio: "aspect-[16/10]",
    description:
      "A serene interior narrative harmonizing warm earth tones, tailored joinery, and soft diffused skylight to promote family intimacy and restful contemplation.",
    materials: ["Iroko Hardwood", "Natural Linen", "Micro-cement", "Brushed Brass"],
    highlights: ["Custom architectural joinery", "Low-VOC organic finishes"],
  },
  {
    id: "elevated-dividers",
    title: "The Lattice Divider Screen Series",
    subtitle: "Modular Space Articulator",
    category: "Furniture & Product",
    entity: "ELEvated",
    year: "2025",
    location: "Lagos Studio",
    image: "/images/architecture/dividers-design.jpg",
    aspectRatio: "aspect-[4/3]",
    description:
      "Handcrafted spatial partitions marrying geometric Yoruba pattern vernacular with contemporary steel frame precision. Creates soft light filtering without solid obstruction.",
    materials: ["Kiln-dried Mahogany", "Powder-coated Iron", "Raffia Inlays"],
    highlights: ["Modular interlocking panels", "Artisan hand-finished joinery"],
  },
  {
    id: "bedroom-sanctuary",
    title: "Nature Home: Master Suite",
    subtitle: "Restful Architecture of Silence",
    category: "Architecture",
    entity: "Studio COKA",
    year: "2025",
    location: "Enugu, Nigeria",
    image: "/images/architecture/bedroom-interior.jpg",
    aspectRatio: "aspect-[4/3]",
    description:
      "A restful bedroom envelope focused on acoustic dampening, cross-ventilation breezes, and calming earthy materials that lower heart rate and restore wellness.",
    materials: ["Acoustic Timber Slats", "Travertine Vanity", "Textured Lime Wash"],
    highlights: ["Natural cross-breeze alignment", "Concealed ambient night illumination"],
  },
];

export const VISITOR_INTENTS = [
  {
    id: "client",
    title: "I need Architecture or Interior Services",
    subtitle: "Private residences, commercial projects, or renovations",
    targetBrand: "studio-coka",
    recommendedAction: "Commission Studio COKA",
    href: "#portfolio",
  },
  {
    id: "speaker",
    title: "I want to Book Crystal as a Speaker",
    subtitle: "Keynotes, panel discussions, podcasts, or university lectures",
    targetBrand: "speaking",
    recommendedAction: "View Speaking Themes & Book",
    href: "#speaking",
  },
  {
    id: "practitioner",
    title: "I am an Architect seeking Growth",
    subtitle: "Practice masterclasses, media, business frameworks, and mentoring",
    targetBrand: "tea",
    recommendedAction: "Access The Effective Architect",
    href: "#ecosystem",
  },
  {
    id: "furniture",
    title: "I am interested in Furniture & Objects",
    subtitle: "ELEvated contemporary pieces, custom commissions, and catalogue",
    targetBrand: "elevated",
    recommendedAction: "Explore ELEvated Collection",
    href: "#portfolio",
  },
  {
    id: "impact",
    title: "I want to Partner on Social & Faith Impact",
    subtitle: "AKO Alliance education projects or Alive and Free gatherings",
    targetBrand: "ako-alliance",
    recommendedAction: "Collaborate on Community Initiatives",
    href: "#ecosystem",
  },
];

export const SPEAKING_THEMES: SpeakingEngagement[] = [
  {
    id: "sp-1",
    topic: "Building in the Heat: Passive Strategies for African Megacities",
    forum: "West Africa Architecture Summit",
    location: "Lagos, Nigeria",
    year: "2025",
    summary:
      "Why imported glass curtain walls fail tropical climates and how vernacular geometry, shading cantilevers, and thermodynamic mass rewrite the future of sustainable African development.",
    audience: "Practicing Architects, Real Estate Developers & Policy Makers",
  },
  {
    id: "sp-2",
    topic: "The Business of Beauty: Scaling a Multi-Disciplinary Design Studio",
    forum: "Design Leadership Forum",
    location: "Nairobi, Kenya",
    year: "2025",
    summary:
      "A transparent breakdown of cash flow, client contract hygiene, and ecosystem thinking for creative entrepreneurs navigating volatile frontier markets.",
    audience: "Design Directors, Founders, Creative Entrepreneurs",
  },
  {
    id: "sp-3",
    topic: "Sacred Spaces & Mental Wholeness: Re-centering Identity",
    forum: "Global Youth & Purpose Gathering",
    location: "Virtual & In-person",
    year: "2024",
    summary:
      "Exploring the symbiotic relationship between external physical environments, internal emotional stillness, and unwavering spiritual grounding.",
    audience: "Next-Generation Leaders, Creatives & Students",
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: "pub-1",
    title: "The Breathing Wall: Vernacular Massing & Solar Defense in West Africa",
    publicationType: "Research Paper",
    year: "2025",
    description:
      "Field analysis comparing internal thermal variance between compressed earth blocks and standard sandcrete blocks in equatorial tropical zones.",
    readTime: "12 min read",
  },
  {
    id: "pub-2",
    title: "Why Most Architecture Practices Never Cross the Ten-Year Mark",
    publicationType: "Essay",
    year: "2025",
    description:
      "An unvarnished critique of commercial fragility in creative services, published on The Effective Architect editorial journal.",
    readTime: "8 min read",
  },
  {
    id: "pub-3",
    title: "Contextual Modernism: When African Craft Dictates the Detail",
    publicationType: "Monograph",
    year: "Forthcoming",
    description:
      "A curated monograph documenting eleven ongoing spatial studies and product prototypes emerging from the Studio COKA & ELEvated workshops.",
    readTime: "Book Preview",
  },
];
