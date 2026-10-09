"use client";

import { useState } from "react";
import { ArrowRight, Compass, CheckCircle2, Sparkles, Building, Armchair, BookOpen, Mic, HeartHandshake } from "lucide-react";
import { ECOSYSTEM_BRANDS } from "@/lib/data";

interface IntentNavigatorProps {
  onOpenInquiry: (intent?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

const INTENT_PRESETS = [
  {
    id: "architecture-client",
    icon: Building,
    label: "Architecture & Interior Client",
    description: "Private residences, commercial projects, passive climate design",
    targetBrandId: "studio-coka",
    recommendedSection: "portfolio",
    inquiryIntent: "Studio COKA Architecture",
    headline: "Studio COKA is your direct design & build partner.",
    rationale:
      "For homeowners, developers, and institutions seeking bioclimatic elegance, low operational energy, and authentic African materiality.",
    actionText: "View Architectural Portfolio",
  },
  {
    id: "event-curator",
    icon: Mic,
    label: "Keynote / Event Curator",
    description: "Conferences, panels, design biennales, and university lectures",
    targetBrandId: "speaking",
    recommendedSection: "speaking",
    inquiryIntent: "Keynote & Speaking",
    headline: "Book Crystal for keynotes on tropical design, African cities, and enterprise.",
    rationale:
      "Crystal brings authoritative research, compelling stage presence, and actionable architectural frameworks to global and regional summits.",
    actionText: "Explore Keynote Topics",
  },
  {
    id: "architect-practitioner",
    icon: BookOpen,
    label: "Architect / Built-Environment Peer",
    description: "Practice frameworks, contract management, masterclasses & media",
    targetBrandId: "tea",
    recommendedSection: "ecosystem",
    inquiryIntent: "The Effective Architect (TEA)",
    headline: "Join 4,500+ peers inside The Effective Architect (TEA).",
    rationale:
      "Access professional practice toolkits, business masterclasses, podcasts, and community roundtables built to make your architectural practice commercially formidable.",
    actionText: "Discover TEA Academy",
  },
  {
    id: "furniture-buyer",
    icon: Armchair,
    label: "Collector & Interior Designer",
    description: "Bespoke furniture, sculptural dividers, and collectible objects",
    targetBrandId: "elevated",
    recommendedSection: "portfolio",
    inquiryIntent: "ELEvated Furniture",
    headline: "Discover contemporary furniture rooted in Nigerian materials.",
    rationale:
      "ELEvated creates modern heirloom furniture from indigenous hardwoods, brass fittings, and ancestral joinery engineered for discerning collectors.",
    actionText: "View Furniture Pieces",
  },
  {
    id: "impact-partner",
    icon: HeartHandshake,
    label: "Impact & Community Partner",
    description: "AKO Alliance education hubs or Alive and Free youth gatherings",
    targetBrandId: "ako-alliance",
    recommendedSection: "ecosystem",
    inquiryIntent: "Civic / Impact Partnership",
    headline: "Partner on educational equity and youth purpose.",
    rationale:
      "Collaborate with AKO Alliance to construct dignified learning sanctuaries or engage the Alive and Free movement for young adult spiritual formation.",
    actionText: "Explore Civic Initiatives",
  },
];

export default function IntentNavigator({
  onOpenInquiry,
  onScrollToSection,
}: IntentNavigatorProps) {
  const [selectedIntentId, setSelectedIntentId] = useState(INTENT_PRESETS[0].id);

  const currentPreset =
    INTENT_PRESETS.find((p) => p.id === selectedIntentId) || INTENT_PRESETS[0];

  const matchedBrand = ECOSYSTEM_BRANDS.find(
    (b) => b.id === currentPreset.targetBrandId
  );

  return (
    <section
      id="intent-navigator"
      className="py-20 bg-[#12110F] border-b border-[#25221F] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider text-[#C2704E] bg-[#C2704E]/10 border border-[#C2704E]/20 mb-3">
              <Compass className="w-3.5 h-3.5" />
              <span>Visitor Guidance Console</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] font-normal leading-tight">
              Where should you go next?
            </h2>
            <p className="text-sm sm:text-base text-[#A89F91] mt-2 max-w-xl">
              Choose your profile or objective to instantly receive the most relevant
              entry point into Crystal Kizor&apos;s ecosystem.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8C8375] hidden md:block text-right">
            <span>[ 05 Tailored Pathways Available ]</span>
          </div>
        </div>

        {/* Interactive Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-8">
          {INTENT_PRESETS.map((preset) => {
            const Icon = preset.icon;
            const isSelected = preset.id === selectedIntentId;
            return (
              <button
                key={preset.id}
                onClick={() => setSelectedIntentId(preset.id)}
                className={`flex flex-col text-left p-4 rounded transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-[#1E1B18] border-[#C2704E] shadow-lg shadow-[#C2704E]/10 scale-[1.02]"
                    : "bg-[#161412] border-[#292521] hover:border-[#3E3832] hover:bg-[#1A1815]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-8 h-8 rounded flex items-center justify-center ${
                      isSelected
                        ? "bg-[#C2704E] text-white"
                        : "bg-[#25221F] text-[#A89F91]"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  {isSelected && (
                    <CheckCircle2 className="w-4 h-4 text-[#C2704E]" />
                  )}
                </div>
                <h3
                  className={`text-xs font-semibold uppercase tracking-wider mb-1 ${
                    isSelected ? "text-[#FAF8F5]" : "text-[#D0C7B8]"
                  }`}
                >
                  {preset.label}
                </h3>
                <p className="text-[11px] text-[#8C8375] leading-snug line-clamp-2">
                  {preset.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Dynamic Matched Recommendation Deck */}
        <div className="rounded-lg bg-[#181614] border border-[#2D2824] p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C2704E]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#D98867]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Recommended Touchpoint: {matchedBrand?.name || "Studio COKA"}</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] leading-tight font-normal">
                {currentPreset.headline}
              </h3>

              <p className="text-sm text-[#C7BFAF] leading-relaxed max-w-2xl">
                {currentPreset.rationale}
              </p>

              {matchedBrand && (
                <div className="pt-2 flex flex-wrap gap-2">
                  {matchedBrand.focusAreas.slice(0, 3).map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#221F1C] border border-[#38332C] text-[#A89F91]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <button
                onClick={() => onScrollToSection(currentPreset.recommendedSection)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#FAF8F5] text-[#121110] font-mono text-xs uppercase tracking-wider hover:bg-[#D98867] hover:text-white transition-all cursor-pointer font-semibold shadow-md"
              >
                <span>{currentPreset.actionText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onOpenInquiry(currentPreset.inquiryIntent)}
                className="flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#221F1C] hover:bg-[#2B2723] border border-[#38332C] text-[#FAF8F5] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <span>Start Direct Inquiry</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
