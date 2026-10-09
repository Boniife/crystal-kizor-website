"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, MapPin, Calendar, Layers, Sparkles, ArrowRight } from "lucide-react";
import { ArchitecturalProject } from "@/lib/data";

interface ProjectLightboxProps {
  project: ArchitecturalProject | null;
  onClose: () => void;
  onOpenInquiry: (intent?: string) => void;
}

export default function ProjectLightbox({
  project,
  onClose,
  onOpenInquiry,
}: ProjectLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 md:p-10 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-[#141210] border border-[#2F2A25] rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-[#C2704E] transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left / Image Area */}
        <div className="relative lg:w-7/12 aspect-[4/3] lg:aspect-auto min-h-[300px] lg:min-h-[500px] bg-[#0E0D0C]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-sand-100 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded">
            <span>{project.entity}</span>
            <span>{project.location}</span>
          </div>
        </div>

        {/* Right / Details Area */}
        <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[60vh] lg:max-h-none">
          <div className="space-y-5">
            {/* Meta Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[#D98867] uppercase tracking-wider mb-2">
                <span>{project.category}</span>
                <span>•</span>
                <span>{project.year}</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal leading-tight">
                {project.title}
              </h2>
              <p className="text-xs text-[#8F7759] font-mono mt-1">
                {project.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-sm text-[#D0C7B8] leading-relaxed font-light">
              {project.description}
            </p>

            {/* Materials Palette */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C8375] block mb-2">
                Material Taxonomy
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.materials.map((mat, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded text-[11px] font-mono bg-[#201D1A] border border-[#332D27] text-[#C7BFAF]"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Passive / Spatial Highlights */}
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#8C8375] block mb-2">
                Architectural Highlights
              </span>
              <ul className="space-y-1.5">
                {project.highlights.map((h, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs text-[#A89F91]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C2704E]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action */}
          <div className="pt-6 mt-6 border-t border-[#25221F] flex items-center justify-between">
            <button
              onClick={() => {
                onClose();
                onOpenInquiry(`Commission regarding ${project.title}`);
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded bg-[#C2704E] hover:bg-[#D98867] text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
            >
              <span>Inquire on this typology</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
