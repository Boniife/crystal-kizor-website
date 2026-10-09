"use client";

import { Mic, Calendar, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { SPEAKING_THEMES } from "@/lib/data";

interface SpeakingSectionProps {
  onOpenInquiry: (intent?: string) => void;
}

export default function SpeakingSection({ onOpenInquiry }: SpeakingSectionProps) {
  return (
    <section id="speaking" className="py-24 bg-[#0E0D0C] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider text-[#D98867] bg-[#C2704E]/10 border border-[#C2704E]/20 mb-3">
              <Mic className="w-3.5 h-3.5" />
              <span>Public Discourse & Lectures</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] font-normal leading-tight">
              Keynotes, panels & global conversations.
            </h2>
            <p className="text-sm sm:text-base text-[#A89F91] mt-2 max-w-2xl">
              Crystal speaks across international summits, university auditoriums, and executive
              forums, challenging obsolete architectural conventions and championing sustainable
              African urban agency.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry("Keynote / Speaking Engagement")}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded bg-[#C2704E] hover:bg-[#D98867] text-white font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
          >
            <span>Book for Speaking</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Speaking Themes Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SPEAKING_THEMES.map((theme, index) => (
            <div
              key={theme.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-lg bg-[#151311] border border-[#26221E] hover:border-[#3A332C] transition-all hover:bg-[#1A1815]"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8F7759] mb-4">
                  <span>0{index + 1} • THEME</span>
                  <span>{theme.year}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-normal leading-snug mb-3">
                  {theme.topic}
                </h3>

                <p className="text-xs text-[#C7BFAF] leading-relaxed mb-6 font-light">
                  {theme.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-[#23201D] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-[#8C8375]">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C2704E]" />
                    {theme.forum}
                  </span>
                  <span>{theme.location}</span>
                </div>
                <div className="text-[11px] font-mono text-[#8F7759]">
                  Audience: {theme.audience}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Speaking Formats Strip */}
        <div className="mt-8 p-5 rounded bg-[#171513] border border-[#27231F] flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#A89F91]">
          <span className="text-[#FAF8F5]">Available Delivery Formats:</span>
          <span>• 45-Min Conference Keynotes</span>
          <span>• University Design Masterclasses</span>
          <span>• Panel Moderation & Fireside Dialogues</span>
          <span>• Executive Built-Environment Roundtables</span>
        </div>

      </div>
    </section>
  );
}
