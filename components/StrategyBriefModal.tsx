"use client";

import { useState, useEffect } from "react";
import { X, Copy, Check, Sparkles, Cpu, BarChart3, FileText, Code2 } from "lucide-react";
import { STRATEGY_DATA } from "@/lib/strategy-content";

interface StrategyBriefModalProps {
  isOpen: boolean;
  initialTab?: string;
  onClose: () => void;
}

export default function StrategyBriefModal({
  isOpen,
  initialTab = "submission",
  onClose,
}: StrategyBriefModalProps) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copySubmissionText = () => {
    let textToCopy = "";
    if (activeTab === "submission") {
      textToCopy = STRATEGY_DATA.submissionNote.text;
    } else if (activeTab === "ai") {
      textToCopy = STRATEGY_DATA.aiProduct.sections
        .map((s) => `${s.heading}\n${s.content}`)
        .join("\n\n");
    } else if (activeTab === "analytics") {
      textToCopy = STRATEGY_DATA.analytics.sections
        .map((s) => `${s.heading}\n${s.content}`)
        .join("\n\n");
    }
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-[#141210] border border-[#2F2A25] rounded-lg shadow-2xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#25221F] flex items-center justify-between bg-[#181614]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#C2704E]/20 border border-[#C2704E]/40 flex items-center justify-center text-[#D98867]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#FAF8F5] font-normal leading-tight">
                Stage 1 Assessment Documentation
              </h2>
              <p className="text-xs font-mono text-[#8C8375]">
                Candidate Assessment Submission • Parts 1, 2, and 3
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#201D1A] text-[#A89F91] hover:text-white hover:bg-[#C2704E] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#25221F] bg-[#11100E] px-4 overflow-x-auto text-xs font-mono">
          <button
            onClick={() => setActiveTab("submission")}
            className={`flex items-center gap-2 py-3.5 px-4 border-b-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "submission"
                ? "border-[#C2704E] text-[#FAF8F5] bg-[#181614]"
                : "border-transparent text-[#8C8375] hover:text-[#D0C7B8]"
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Submission Note ({STRATEGY_DATA.submissionNote.wordCount} words)</span>
          </button>

          <button
            onClick={() => setActiveTab("ai")}
            className={`flex items-center gap-2 py-3.5 px-4 border-b-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "ai"
                ? "border-[#C2704E] text-[#FAF8F5] bg-[#181614]"
                : "border-transparent text-[#8C8375] hover:text-[#D0C7B8]"
            }`}
          >
            <Cpu className="w-3.5 h-3.5" />
            <span>Part 2: AI Product ({STRATEGY_DATA.aiProduct.wordCount} words)</span>
          </button>

          <button
            onClick={() => setActiveTab("analytics")}
            className={`flex items-center gap-2 py-3.5 px-4 border-b-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "analytics"
                ? "border-[#C2704E] text-[#FAF8F5] bg-[#181614]"
                : "border-transparent text-[#8C8375] hover:text-[#D0C7B8]"
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Part 3: Analytics ({STRATEGY_DATA.analytics.wordCount} words)</span>
          </button>

          <button
            onClick={() => setActiveTab("tech")}
            className={`flex items-center gap-2 py-3.5 px-4 border-b-2 font-medium transition-colors whitespace-nowrap cursor-pointer ${
              activeTab === "tech"
                ? "border-[#C2704E] text-[#FAF8F5] bg-[#181614]"
                : "border-transparent text-[#8C8375] hover:text-[#D0C7B8]"
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Tech Architecture</span>
          </button>
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto max-h-[60vh] space-y-6 text-[#D0C7B8]">
          {activeTab === "submission" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#25221F]">
                <span className="text-xs font-mono uppercase text-[#D98867]">
                  Assessment Note to Hiring Team (Max 200 Words Constraint)
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  {STRATEGY_DATA.submissionNote.wordCount} words / 200 max ✓
                </span>
              </div>
              <div className="p-5 rounded bg-[#181614] border border-[#2B2723] font-sans text-sm sm:text-base leading-relaxed text-[#FAF8F5] whitespace-pre-line">
                {STRATEGY_DATA.submissionNote.text}
              </div>
            </div>
          )}

          {activeTab === "ai" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-[#25221F]">
                <div>
                  <h3 className="font-serif text-lg text-[#FAF8F5]">
                    {STRATEGY_DATA.aiProduct.toolName}
                  </h3>
                  <span className="text-xs font-mono text-[#D98867]">
                    Selected Entity: {STRATEGY_DATA.aiProduct.brandSelected}
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  {STRATEGY_DATA.aiProduct.wordCount} words / 300 max ✓
                </span>
              </div>

              <div className="space-y-4">
                {STRATEGY_DATA.aiProduct.sections.map((section, idx) => (
                  <div key={idx} className="p-4 rounded bg-[#181614] border border-[#27231F]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAF8F5] mb-1.5 font-semibold">
                      {section.heading}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#C7BFAF] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "analytics" && (
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-2 border-b border-[#25221F]">
                <div>
                  <h3 className="font-serif text-lg text-[#FAF8F5]">
                    Performance Measurement & Funnel Diagnostic
                  </h3>
                  <span className="text-xs font-mono text-[#D98867]">
                    Conversion Optimization & Behavioral Analysis
                  </span>
                </div>
                <span className="text-xs font-mono text-emerald-400">
                  {STRATEGY_DATA.analytics.wordCount} words / 250 max ✓
                </span>
              </div>

              <div className="space-y-4">
                {STRATEGY_DATA.analytics.sections.map((section, idx) => (
                  <div key={idx} className="p-4 rounded bg-[#181614] border border-[#27231F]">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-[#FAF8F5] mb-1.5 font-semibold">
                      {section.heading}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#C7BFAF] leading-relaxed">
                      {section.content}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "tech" && (
            <div className="space-y-4">
              <div className="pb-2 border-b border-[#25221F]">
                <h3 className="font-serif text-lg text-[#FAF8F5]">
                  Technical Implementation & Engineering Decisions
                </h3>
                <span className="text-xs font-mono text-[#8F7759]">
                  Architectural frontend stack built for speed, accessibility, and fidelity.
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-4 rounded bg-[#181614] border border-[#27231F]">
                  <span className="text-[#D98867] block font-semibold mb-1">
                    FRAMEWORK & RUNTIME
                  </span>
                  <p className="text-[#A89F91]">
                    Next.js 16 (App Router + Turbopack engine), React 19, TypeScript strict mode. Sub-second build times and zero client bloat.
                  </p>
                </div>
                <div className="p-4 rounded bg-[#181614] border border-[#27231F]">
                  <span className="text-[#D98867] block font-semibold mb-1">
                    STYLING & DESIGN SYSTEM
                  </span>
                  <p className="text-[#A89F91]">
                    Tailwind CSS v4 with bespoke architectural design tokens: basalt, warm terracotta clay, travertine, and high-contrast editorial typography.
                  </p>
                </div>
                <div className="p-4 rounded bg-[#181614] border border-[#27231F]">
                  <span className="text-[#D98867] block font-semibold mb-1">
                    MOTION & ACCESSIBILITY
                  </span>
                  <p className="text-[#A89F91]">
                    Motion v12 + canvas-confetti. Smooth non-blocking CSS transforms, prefers-reduced-motion compatibility, full keyboard accessibility.
                  </p>
                </div>
                <div className="p-4 rounded bg-[#181614] border border-[#27231F]">
                  <span className="text-[#D98867] block font-semibold mb-1">
                    METADATA & SEARCH ARCHITECTURE
                  </span>
                  <p className="text-[#A89F91]">
                    Open Graph tags, Twitter cards, semantic HTML5 sectioning, and JSON-LD Person/Organization schema for Google Rich Results.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-[#25221F] bg-[#181614] flex items-center justify-between">
          <span className="text-xs font-mono text-[#8C8375] hidden sm:block">
            Prepared for Studio COKA Careers Team
          </span>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
            <button
              onClick={copySubmissionText}
              className="flex items-center gap-2 px-4 py-2.5 rounded bg-[#221F1C] hover:bg-[#2B2723] text-xs font-mono text-[#FAF8F5] border border-[#38332C] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied to Clipboard</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-[#C2704E]" />
                  <span>Copy Current Tab Text</span>
                </>
              )}
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2.5 rounded bg-[#C2704E] hover:bg-[#D98867] text-xs font-mono uppercase tracking-wider text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
