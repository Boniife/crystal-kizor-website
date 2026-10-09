"use client";

import { useEffect } from "react";
import { X, ArrowRight, CheckCircle2, Sparkles, Building, Layers, Compass } from "lucide-react";
import { EcosystemBrand } from "@/lib/data";

interface BrandDetailDrawerProps {
  brand: EcosystemBrand | null;
  onClose: () => void;
  onOpenInquiry: (intent?: string) => void;
}

export default function BrandDetailDrawer({
  brand,
  onClose,
  onOpenInquiry,
}: BrandDetailDrawerProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (brand) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [brand, onClose]);

  if (!brand) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl h-full bg-[#13110F] border-l border-[#2B2723] flex flex-col justify-between overflow-y-auto p-6 sm:p-8 md:p-10 shadow-2xl relative">
        
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#25221F]">
            <div className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: brand.colorAccent }}
              />
              <span className="text-xs font-mono uppercase tracking-widest text-[#8F7759]">
                {brand.category}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#1D1B18] text-[#A89F91] hover:text-white hover:bg-[#C2704E] transition-colors cursor-pointer"
              aria-label="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Brand Identity */}
          <div className="py-6 space-y-3">
            <div className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[#201D1A] text-[#D98867] border border-[#352F28]">
              {brand.badge}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F5] font-normal leading-tight">
              {brand.name}
            </h2>

            <p className="text-xs font-mono text-[#A89F91]">
              Leadership: {brand.role}
            </p>

            <p className="text-sm font-serif italic text-[#C2704E]">
              &ldquo;{brand.tagline}&rdquo;
            </p>
          </div>

          {/* Narrative Long Description */}
          <div className="space-y-4 text-[#D0C7B8] text-xs sm:text-sm leading-relaxed font-light">
            <p>{brand.longDescription}</p>
          </div>

          {/* Metrics */}
          {brand.metrics && (
            <div className="grid grid-cols-3 gap-2.5 my-6 py-4 border-y border-[#23201D]">
              {brand.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 rounded bg-[#1A1815] border border-[#2B2723]">
                  <span className="text-[9px] uppercase font-mono text-[#8C8375] block mb-1">
                    {metric.label}
                  </span>
                  <span className="text-xs font-mono text-[#FAF8F5] font-semibold">
                    {metric.value}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Focus Areas */}
          <div className="space-y-3 my-6">
            <h3 className="text-xs uppercase font-mono tracking-wider text-[#FAF8F5]">
              Core Capabilities & Strategic Pillars
            </h3>
            <div className="space-y-2">
              {brand.focusAreas.map((area, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-2.5 rounded bg-[#181614] border border-[#26221E] text-xs text-[#C7BFAF]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C2704E] shrink-0 mt-0.5" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>

          {brand.featuredProject && (
            <div className="p-4 rounded bg-[#181614] border border-[#2E2822] mb-6">
              <span className="text-[10px] font-mono uppercase text-[#8F7759] block">
                Flagship Case Study / Initiative
              </span>
              <span className="text-xs font-mono text-[#FAF8F5] font-medium">
                {brand.featuredProject}
              </span>
            </div>
          )}
        </div>

        {/* Bottom Actions */}
        <div className="pt-6 border-t border-[#25221F] space-y-3">
          <button
            onClick={() => {
              onClose();
              onOpenInquiry(`Inquiry for ${brand.name}`);
            }}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded bg-[#C2704E] hover:bg-[#D98867] text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer font-medium shadow-md"
          >
            <span>{brand.primaryCta.label}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
}
