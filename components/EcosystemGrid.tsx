"use client";

import { useState } from "react";
import { ArrowUpRight, Layers, Sparkles, Check, Info } from "lucide-react";
import { ECOSYSTEM_BRANDS, EcosystemBrand } from "@/lib/data";

interface EcosystemGridProps {
  onOpenInquiry: (intent?: string) => void;
  onSelectBrand: (brand: EcosystemBrand) => void;
}

const CATEGORIES = [
  "All Ecosystem",
  "Spatial & Product Design",
  "Education & Media",
  "Impact & Movement",
  "Research & Speaking",
];

export default function EcosystemGrid({
  onOpenInquiry,
  onSelectBrand,
}: EcosystemGridProps) {
  const [activeCategory, setActiveCategory] = useState("All Ecosystem");

  const filteredBrands = ECOSYSTEM_BRANDS.filter((brand) => {
    if (activeCategory === "All Ecosystem") return true;
    if (activeCategory === "Spatial & Product Design") {
      return brand.id === "studio-coka" || brand.id === "elevated";
    }
    if (activeCategory === "Education & Media") {
      return brand.id === "tea";
    }
    if (activeCategory === "Impact & Movement") {
      return brand.id === "ako-alliance" || brand.id === "alive-and-free";
    }
    if (activeCategory === "Research & Speaking") {
      return brand.id === "speaking" || brand.id === "personal-research";
    }
    return true;
  });

  return (
    <section id="ecosystem" className="py-24 bg-[#0E0D0C] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider text-[#D98867] bg-[#C2704E]/10 border border-[#C2704E]/20 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Multi-Disciplinary Ecosystem</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] font-normal leading-tight">
              Seven interlocking entities. One unified vision.
            </h2>
            <p className="text-sm sm:text-base text-[#A89F91] mt-2 max-w-2xl">
              Rather than isolated ventures, Crystal Kizor organizes her work as a symbiotic
              cycle—where architectural field research fuels product design, which finances
              education, and translates into public discourse and community restoration.
            </p>
          </div>

          <div className="text-xs font-mono text-[#8C8375]">
            <span>Showing {filteredBrands.length} of {ECOSYSTEM_BRANDS.length} Initiatives</span>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-[#25221F]">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded text-xs font-mono tracking-wider transition-all cursor-pointer ${
                activeCategory === category
                  ? "bg-[#C2704E] text-white shadow-sm font-medium"
                  : "bg-[#181614] text-[#A89F91] hover:text-[#FAF8F5] hover:bg-[#221F1C] border border-[#2B2723]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 7 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBrands.map((brand, index) => (
            <div
              key={brand.id}
              className="group flex flex-col justify-between rounded-lg bg-[#161412] border border-[#292521] hover:border-[#3E3832] transition-all duration-300 p-6 sm:p-7 relative overflow-hidden hover:shadow-2xl hover:shadow-black"
            >
              {/* Subtle top indicator bar */}
              <div
                className="absolute top-0 left-0 right-0 h-1 transition-all duration-300 group-hover:h-1.5"
                style={{ backgroundColor: brand.colorAccent }}
              />

              <div>
                {/* Header: Role & Category */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#8F7759]">
                    0{index + 1} • {brand.category}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono uppercase bg-[#201D1A] text-[#D98867] border border-[#352F28]">
                    {brand.badge}
                  </span>
                </div>

                {/* Brand Name */}
                <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal group-hover:text-[#D98867] transition-colors mb-1">
                  {brand.name}
                </h3>

                <p className="text-xs font-mono text-[#A89F91] mb-4">
                  Role: {brand.role}
                </p>

                <p className="text-xs text-[#8F7759] font-medium italic mb-3">
                  &ldquo;{brand.tagline}&rdquo;
                </p>

                <p className="text-xs text-[#C7BFAF] leading-relaxed mb-6 font-light">
                  {brand.description}
                </p>

                {/* Focus Areas Bullets */}
                <div className="space-y-1.5 mb-6 pt-4 border-t border-[#23201D]">
                  <span className="text-[10px] uppercase font-mono text-[#8C8375] block mb-2">
                    Primary Competencies:
                  </span>
                  {brand.focusAreas.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#A89F91]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C2704E] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Pill Grid */}
                {brand.metrics && (
                  <div className="grid grid-cols-2 gap-2 mb-6">
                    {brand.metrics.slice(0, 2).map((metric, mIdx) => (
                      <div
                        key={mIdx}
                        className="p-2 rounded bg-[#1B1917] border border-[#282420] text-left"
                      >
                        <span className="text-[9px] uppercase font-mono text-[#8C8375] block">
                          {metric.label}
                        </span>
                        <span className="text-xs font-mono text-[#FAF8F5] font-medium">
                          {metric.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-[#23201D] flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectBrand(brand)}
                  className="flex items-center gap-1.5 text-xs font-mono text-[#D0C7B8] hover:text-[#FAF8F5] transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5 text-[#C2704E]" />
                  <span>Deep Dive Matrix</span>
                </button>

                <button
                  onClick={() => onOpenInquiry(brand.name)}
                  className="flex items-center gap-1 text-xs font-mono text-[#D98867] hover:text-[#FAF8F5] transition-colors cursor-pointer group-hover:translate-x-0.5"
                >
                  <span>Connect</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Ecosystem Synergy Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-lg bg-[#141210] border border-[#2D2824] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="font-serif text-lg text-[#FAF8F5] font-normal">
              Need a bespoke cross-entity collaboration?
            </h4>
            <p className="text-xs text-[#A89F91]">
              From institutional masterplanning to integrated interior fit-outs and educational fellowships,
              Crystal consults across multiple brands in parallel.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry("Multi-Brand Initiative")}
            className="shrink-0 px-5 py-2.5 rounded bg-[#FAF8F5] text-[#121110] font-mono text-xs uppercase tracking-wider hover:bg-[#D98867] hover:text-white transition-colors cursor-pointer font-medium"
          >
            Request Multi-Brand Consultation
          </button>
        </div>

      </div>
    </section>
  );
}
