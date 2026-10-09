"use client";

import { BookOpen, ArrowUpRight, FileText, Bookmark } from "lucide-react";
import { PUBLICATIONS } from "@/lib/data";

interface WritingArchiveProps {
  onOpenInquiry: (intent?: string) => void;
}

export default function WritingArchive({ onOpenInquiry }: WritingArchiveProps) {
  return (
    <section id="writing" className="py-24 bg-[#12110F] border-t border-[#25221F] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider text-[#D98867] bg-[#C2704E]/10 border border-[#C2704E]/20 mb-3">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Authorship & Research Archive</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] font-normal leading-tight">
              Empirical inquiry, essays & forthcoming texts.
            </h2>
            <p className="text-sm sm:text-base text-[#A89F91] mt-2 max-w-2xl">
              Field experiments in tropical thermal dynamics, long-form critiques of practice
              economics, and an upcoming architectural monograph examining African domestic interiority.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry("Research & Monograph Advisory")}
            className="self-start md:self-auto flex items-center gap-2 px-5 py-3 rounded bg-[#1C1A17] hover:bg-[#25221F] border border-[#3A332C] text-[#FAF8F5] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
          >
            <span>Request Research Manuscripts</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#C2704E]" />
          </button>
        </div>

        {/* Publications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PUBLICATIONS.map((pub, index) => (
            <div
              key={pub.id}
              className="flex flex-col justify-between p-6 sm:p-7 rounded-lg bg-[#181614] border border-[#2B2723] hover:border-[#3E3832] transition-all hover:bg-[#1C1A17]"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-[#8F7759] mb-4">
                  <span className="px-2 py-0.5 rounded bg-[#201D1A] text-[#D98867] border border-[#302B25]">
                    {pub.publicationType}
                  </span>
                  <span>{pub.year}</span>
                </div>

                <h3 className="font-serif text-xl text-[#FAF8F5] font-normal leading-snug mb-3">
                  {pub.title}
                </h3>

                <p className="text-xs text-[#C7BFAF] leading-relaxed mb-6 font-light">
                  {pub.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#25221F] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8C8375]">{pub.readTime}</span>
                <button
                  onClick={() => onOpenInquiry(`Access paper: ${pub.title}`)}
                  className="text-[#D98867] hover:text-[#FAF8F5] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Request Draft</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
