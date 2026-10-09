"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Maximize2, Sparkles, Building, Layers } from "lucide-react";
import { PROJECTS_GALLERY, ArchitecturalProject } from "@/lib/data";

interface ProjectGalleryProps {
  onSelectProject: (project: ArchitecturalProject) => void;
  onOpenInquiry: (intent?: string) => void;
}

const CATEGORIES = ["All Works", "Architecture", "Furniture & Product", "Civic & Community"];

export default function ProjectGallery({
  onSelectProject,
  onOpenInquiry,
}: ProjectGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredProjects = PROJECTS_GALLERY.filter((project) => {
    if (activeCategory === "All Works") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="portfolio" className="py-24 bg-[#12110F] border-y border-[#25221F] relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded text-xs font-mono uppercase tracking-wider text-[#D98867] bg-[#C2704E]/10 border border-[#C2704E]/20 mb-3">
              <Building className="w-3.5 h-3.5" />
              <span>Selected Portfolio • Studio COKA & ELEvated</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl text-[#FAF8F5] font-normal leading-tight">
              Spaces, forms & contextual materiality.
            </h2>
            <p className="text-sm sm:text-base text-[#A89F91] mt-2 max-w-2xl">
              A curated index of built residential pavilions, custom space articulation systems,
              and civic gathering structures engineered for tropical climates.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded text-xs font-mono tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-[#FAF8F5] text-[#121110] font-semibold"
                    : "bg-[#1C1A17] text-[#A89F91] hover:text-[#FAF8F5] hover:bg-[#25221F] border border-[#2D2824]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col rounded-lg bg-[#181614] border border-[#292521] overflow-hidden hover:border-[#C2704E]/60 transition-all duration-300 hover:shadow-2xl hover:shadow-black"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0E0D0C]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Badge Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded text-[10px] font-mono uppercase bg-black/60 backdrop-blur-md text-[#FAF8F5] border border-white/10">
                    {project.entity}
                  </span>
                  <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white/80 group-hover:text-white group-hover:bg-[#C2704E] transition-colors">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[10px] font-mono uppercase text-[#D98867] tracking-wider block">
                    {project.category} • {project.year}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-xl text-[#FAF8F5] font-normal group-hover:text-[#D98867] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#8F7759] font-mono mt-0.5">
                    {project.subtitle} — {project.location}
                  </p>
                  <p className="text-xs text-[#C7BFAF] line-clamp-2 mt-2.5 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-[#25221F] flex items-center justify-between text-xs font-mono text-[#8C8375]">
                  <span className="truncate max-w-[180px]">
                    {project.materials.slice(0, 2).join(" • ")}
                  </span>
                  <span className="flex items-center gap-1 text-[#D98867] group-hover:text-[#FAF8F5] transition-colors">
                    <span>Inspect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio CTA Bar */}
        <div className="mt-14 text-center">
          <p className="text-xs font-mono text-[#8C8375] mb-3">
            HAVE A SITE OR RESIDENTIAL BRIEF IN MIND?
          </p>
          <button
            onClick={() => onOpenInquiry("Studio COKA Architecture")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#FAF8F5] text-[#121110] font-mono text-xs uppercase tracking-wider hover:bg-[#D98867] hover:text-white transition-colors cursor-pointer font-semibold shadow-lg"
          >
            <span>Commission Studio COKA for 2026/2027</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
