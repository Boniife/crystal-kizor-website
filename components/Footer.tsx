"use client";

import { ArrowUp, ArrowUpRight, Sparkles, Building, Layers, Heart } from "lucide-react";
import { ECOSYSTEM_BRANDS } from "@/lib/data";

interface FooterProps {
  onOpenInquiry: (intent?: string) => void;
  onOpenStrategy: (tab?: string) => void;
}

export default function Footer({ onOpenInquiry, onOpenStrategy }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0908] border-t border-[#221F1C] pt-20 pb-12 relative overflow-hidden">
      {/* Top Banner Callout */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-16 pb-16 border-b border-[#1E1B18]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#D98867]">
              Continuous Spatial Discourse
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] font-normal leading-tight">
              Ready to create enduring architecture or collaborate?
            </h3>
            <p className="text-xs sm:text-sm text-[#A89F91] max-w-xl font-light">
              Whether commissioning a private residence with Studio COKA, booking a keynote address,
              or partnering on education through AKO Alliance, we welcome thoughtful inquiries.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
            <button
              onClick={() => onOpenInquiry("General Consultation")}
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#FAF8F5] text-[#121110] font-mono text-xs uppercase tracking-wider hover:bg-[#D98867] hover:text-white transition-all cursor-pointer font-semibold shadow-md"
            >
              <span>Initiate Studio Conversation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenStrategy("submission")}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded bg-[#181614] hover:bg-[#221F1C] border border-[#302B25] text-[#D98867] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Review Assessment Documentation</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-sm bg-[#1A1815] border border-[#3A332C] flex items-center justify-center text-[#F3EFEA] font-serif font-bold text-lg">
                CK
              </div>
              <span className="font-serif text-xl font-medium tracking-wide text-[#FAF8F5]">
                CRYSTAL KIZOR
              </span>
            </div>

            <p className="text-xs text-[#A89F91] leading-relaxed max-w-sm font-light">
              An architectural and multi-disciplinary ecosystem exploring passive climate
              strategies, vernacular material integrity, contemporary African product design, and
              generational empowerment.
            </p>

            <div className="text-xs font-mono text-[#8C8375] space-y-1">
              <p>Practice Base: Lagos, Nigeria</p>
              <p>Regional Footprint: Sub-Saharan Africa & Global</p>
              <p>Contact: office@studiocoka.com</p>
            </div>
          </div>

          {/* Ecosystem Directory */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8F7759] block mb-2">
              The Seven Initiatives
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
              {ECOSYSTEM_BRANDS.map((brand) => (
                <button
                  key={brand.id}
                  onClick={() => onOpenInquiry(`Inquiry regarding ${brand.name}`)}
                  className="text-left text-[#A89F91] hover:text-[#FAF8F5] transition-colors py-1 cursor-pointer truncate"
                >
                  → {brand.name}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Monograph Subscription */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#8F7759] block">
              Architectural Monograph & Dispatches
            </span>
            <p className="text-xs text-[#A89F91] font-light">
              Receive quarterly long-form essays on tropical building physics, material research,
              and forthcoming book release chapters.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you. You have been added to the quarterly monograph dispatch.");
              }}
              className="flex gap-2"
            >
              <input
                type="email"
                required
                placeholder="colleague@domain.com"
                className="flex-1 px-3.5 py-2.5 rounded bg-[#161412] border border-[#2B2723] focus:border-[#C2704E] focus:outline-none text-xs font-sans text-[#FAF8F5]"
              />
              <button
                type="submit"
                className="px-4 py-2.5 rounded bg-[#C2704E] hover:bg-[#D98867] text-white text-xs font-mono uppercase tracking-wider cursor-pointer font-medium"
              >
                Join
              </button>
            </form>
          </div>

        </div>

        {/* Colophon & Legal */}
        <div className="pt-8 border-t border-[#1C1A17] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8C8375]">
          <div className="flex items-center gap-2">
            <span>© 2026 Crystal Kizor & Studio COKA. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onOpenStrategy("submission")}
              className="hover:text-[#D98867] transition-colors cursor-pointer"
            >
              Stage 1 Assessment Package
            </button>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-[#FAF8F5] transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
