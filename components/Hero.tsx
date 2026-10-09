"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  ArrowDown,
  ArrowUpRight,
  Compass,
  Sparkles,
  Building2,
  Layers,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
} from "lucide-react";

interface HeroProps {
  onOpenInquiry: (intent?: string) => void;
  onScrollToSection: (sectionId: string) => void;
}

const PORTRAIT_SLIDES = [
  {
    id: "studio-coka",
    badge: "Spatial Practice",
    role: "Lead Architect & Founder, Studio COKA",
    image: "/images/portraits/crystal-desk-brown.jpg",
    context: "At the material drafting desk, Lagos Studio",
    quote: "Architecture is not merely form; it is thermal intelligence and cultural dignity.",
    discipline: "Climate-Responsive Architecture",
  },
  {
    id: "elevated-design",
    badge: "Creative Direction",
    role: "Creative Director & Designer, ELEvated",
    image: "/images/portraits/crystal-desk-white.jpg",
    context: "Material exploration & architectural joinery, Lagos",
    quote: "Every object carries the DNA of its origin—celebrating indigenous materials and human craft.",
    discipline: "Contemporary African Furniture",
  },
  {
    id: "ecosystem-builder",
    badge: "Ecosystem Builder",
    role: "Founder, TEA & Ecosystem Architect",
    image: "/images/portraits/crystal-blazer.jpg",
    context: "Studio pinboard, ongoing urban masterplans",
    quote: "Building sustainable enterprises that give African design sovereignty and commercial agency.",
    discipline: "Education & Media Academy",
  },
  {
    id: "vernacular-urbanist",
    badge: "Vernacular Innovation",
    role: "Lead Architect & Masterplanner",
    image: "/images/portraits/crystal-travertine-standing.jpg",
    context: "Travertine drafting table, project blueprints & skyline",
    quote: "Passive climate design is our ancestral heritage—we are translating it for modern African cities.",
    discipline: "Bioclimatic Masterplanning",
  },
  {
    id: "discourse-author",
    badge: "Authorship & Discourse",
    role: "Researcher, Author & Global Speaker",
    image: "/images/portraits/crystal-seated-armchair.jpg",
    context: "African Architecture archives & literature study",
    quote: "Documenting vernacular wisdom before modernity erases our memory.",
    discipline: "Research Papers & Monograph",
  },
];

const SLIDE_DURATION = 5000; // 5 seconds per slide

export default function Hero({ onOpenInquiry, onScrollToSection }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const isHoveredRef = useRef(false);

  // Auto-slider interval & progress timer
  useEffect(() => {
    if (!isPlaying) return;

    const intervalStep = 50; // update progress every 50ms
    const totalSteps = SLIDE_DURATION / intervalStep;
    let stepCount = 0;

    const timer = setInterval(() => {
      if (isHoveredRef.current) return; // pause while user is hovering

      stepCount += 1;
      setProgress((stepCount / totalSteps) * 100);

      if (stepCount >= totalSteps) {
        stepCount = 0;
        setProgress(0);
        setCurrentSlide((prev) => (prev + 1) % PORTRAIT_SLIDES.length);
      }
    }, intervalStep);

    return () => clearInterval(timer);
  }, [isPlaying, currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % PORTRAIT_SLIDES.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + PORTRAIT_SLIDES.length) % PORTRAIT_SLIDES.length);
  };

  const activeSlide = PORTRAIT_SLIDES[currentSlide];

  return (
    <section className="relative min-h-[94vh] pt-28 pb-16 flex flex-col justify-between overflow-hidden bg-architectural-grid">
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C2704E]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-[#8F7759]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 w-full relative z-10 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Monograph Typography & Identity */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:pr-6">
            
            {/* Top Pill / Discipline Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1F1C19] border border-[#38332C] text-[#D98867] w-fit">
              <span className="w-2 h-2 rounded-full bg-[#C2704E] animate-pulse" />
              <span className="text-xs font-mono tracking-wider uppercase">
                The Crystal Kizor Ecosystem
              </span>
            </div>

            {/* Editorial Title */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-normal leading-[1.08] tracking-tight text-[#FAF8F5]">
                Shaping spaces, objects, and human potential.
              </h1>
              <p className="text-sm sm:text-base text-[#D0C7B8] max-w-2xl font-light leading-relaxed">
                Crystal Kizor is an architect, designer, entrepreneur, speaker, and researcher
                unifying sustainable built environments, contemporary African product design,
                professional mentorship, and generational empowerment under one visionary brand.
              </p>
            </div>

            {/* Core Questions Quick Answer Card */}
            <div className="p-4 sm:p-5 rounded-lg bg-[#181614]/80 border border-[#2D2824] backdrop-blur-sm grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8F7759] block mb-1">
                  01. Who She Is
                </span>
                <p className="text-xs text-[#E5DFC5] leading-normal font-medium">
                  Architect, Studio COKA founder, cultural researcher & writer.
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8F7759] block mb-1">
                  02. What She Builds
                </span>
                <p className="text-xs text-[#E5DFC5] leading-normal font-medium">
                  Climate-responsive homes, handcrafted furniture, TEA academy, & civic initiatives.
                </p>
              </div>
              <div>
                <span className="text-[10px] uppercase font-mono tracking-widest text-[#8F7759] block mb-1">
                  03. Next Action
                </span>
                <p className="text-xs text-[#E5DFC5] leading-normal font-medium">
                  Explore tailored pathways using the Intent Navigator below.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onScrollToSection("intent-navigator")}
                className="flex items-center gap-2.5 px-5 py-3 rounded-sm bg-[#C2704E] hover:bg-[#D98867] text-white font-mono text-xs uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-lg shadow-[#C2704E]/20"
              >
                <Compass className="w-4 h-4" />
                <span>Where Should I Go Next?</span>
              </button>

              <button
                onClick={() => onScrollToSection("ecosystem")}
                className="flex items-center gap-2 px-5 py-3 rounded-sm bg-[#1B1917] hover:bg-[#25221F] border border-[#3A332C] text-[#FAF8F5] font-mono text-xs uppercase tracking-wider transition-all cursor-pointer"
              >
                <Layers className="w-4 h-4 text-[#A89F91]" />
                <span>Explore 7 Pillars</span>
              </button>

              <button
                onClick={() => onOpenInquiry("general")}
                className="flex items-center gap-1.5 px-4 py-3 rounded-sm text-xs font-mono text-[#A89F91] hover:text-[#FAF8F5] transition-colors cursor-pointer"
              >
                <span>Direct Commission</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="pt-4 border-t border-[#25221F] grid grid-cols-3 gap-6">
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF8F5] block">
                  7
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759]">
                  Interlocking Entities
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF8F5] block">
                  10+
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759]">
                  Years Spatial Practice
                </span>
              </div>
              <div>
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-[#FAF8F5] block">
                  4,500+
                </span>
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759]">
                  Architects & Creators Reached
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Auto-Slider with Progress & Full Controls */}
          <div
            className="lg:col-span-5 flex flex-col items-center"
            onMouseEnter={() => {
              isHoveredRef.current = true;
            }}
            onMouseLeave={() => {
              isHoveredRef.current = false;
            }}
          >
            <div className="w-full max-w-md relative">
              
              {/* Technical Framing Corners */}
              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#C2704E] z-20" />
              <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#C2704E] z-20" />
              <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#C2704E] z-20" />
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#C2704E] z-20" />

              {/* Main Portrait Frame with Auto Slider */}
              <div className="relative aspect-[4/5] w-full rounded-sm overflow-hidden bg-[#181615] border border-[#2D2824] shadow-2xl group">
                
                {/* Images with smooth cross-fade */}
                {PORTRAIT_SLIDES.map((slide, index) => (
                  <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={`Crystal Kizor — ${slide.role}`}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 480px"
                      className="object-cover object-top transition-transform duration-1000 ease-out hover:scale-105"
                    />
                  </div>
                ))}

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0D0C] via-[#0E0D0C]/20 to-transparent z-15 pointer-events-none" />

                {/* Active Slide Text Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-left z-20 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase tracking-wider bg-[#C2704E] text-white">
                      {activeSlide.badge}
                    </span>
                    <span className="text-[10px] font-mono text-[#D98867] bg-black/60 px-2 py-0.5 rounded border border-white/10">
                      0{currentSlide + 1} / 0{PORTRAIT_SLIDES.length}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#FAF8F5] leading-snug">
                    {activeSlide.role}
                  </h3>

                  <p className="text-xs text-[#A89F91] font-mono mt-1">
                    {activeSlide.context}
                  </p>
                </div>

                {/* Manual Navigation Arrows (Appear on hover) */}
                <button
                  onClick={prevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-25 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-[#C2704E] transition-all cursor-pointer opacity-80 sm:opacity-0 group-hover:opacity-100"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-25 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-[#C2704E] transition-all cursor-pointer opacity-80 sm:opacity-0 group-hover:opacity-100"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slider Progress Bar & Controls */}
              <div className="mt-3.5 space-y-2">
                
                {/* Horizontal Progress Bars for each slide */}
                <div className="grid grid-cols-5 gap-1.5">
                  {PORTRAIT_SLIDES.map((slide, index) => {
                    const isActive = index === currentSlide;
                    return (
                      <button
                        key={slide.id}
                        onClick={() => goToSlide(index)}
                        className="group relative h-1.5 rounded-full overflow-hidden bg-[#24201D] hover:bg-[#38332C] transition-colors cursor-pointer"
                        title={slide.role}
                      >
                        <div
                          className={`absolute inset-0 bg-[#C2704E] transition-all ${
                            isActive
                              ? "opacity-100"
                              : "opacity-0 group-hover:opacity-40"
                          }`}
                          style={{
                            width: isActive ? `${progress}%` : index < currentSlide ? "100%" : "0%",
                          }}
                        />
                      </button>
                    );
                  })}
                </div>

                {/* Interactive Dimension Toggles */}
                <div className="flex items-center justify-between gap-1 p-1 rounded bg-[#161412] border border-[#27231F] text-[10px] font-mono">
                  <div className="flex items-center gap-1 overflow-x-auto py-0.5">
                    {PORTRAIT_SLIDES.map((slide, index) => (
                      <button
                        key={slide.id}
                        onClick={() => goToSlide(index)}
                        className={`px-2 py-1 rounded transition-colors whitespace-nowrap cursor-pointer ${
                          currentSlide === index
                            ? "bg-[#C2704E] text-white font-semibold"
                            : "text-[#8C8375] hover:text-[#FAF8F5]"
                        }`}
                      >
                        0{index + 1}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 pr-1">
                    <span className="text-[#8C8375] text-[10px] hidden sm:inline">
                      Auto-Slide
                    </span>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1 rounded text-[#A89F91] hover:text-white hover:bg-[#201D1A] transition-colors cursor-pointer"
                      title={isPlaying ? "Pause Slideshow" : "Resume Slideshow"}
                    >
                      {isPlaying ? (
                        <Pause className="w-3 h-3 text-[#C2704E]" />
                      ) : (
                        <Play className="w-3 h-3 text-emerald-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Slide Quote */}
                <p className="text-xs italic text-[#C7BFAF] text-center font-serif px-2 transition-opacity duration-300">
                  &ldquo;{activeSlide.quote}&rdquo;
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Kinetic Architectural Marquee Bar */}
      <div className="w-full mt-12 py-3 bg-[#151311] border-y border-[#25221F] overflow-hidden select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-[0.25em] text-[#8F7759]">
            <span>Climate-Responsive Architecture</span>
            <span className="text-[#C2704E]">•</span>
            <span>Studio COKA</span>
            <span className="text-[#C2704E]">•</span>
            <span>Contemporary African Craft</span>
            <span className="text-[#C2704E]">•</span>
            <span>ELEvated Products</span>
            <span className="text-[#C2704E]">•</span>
            <span>The Effective Architect (TEA)</span>
            <span className="text-[#C2704E]">•</span>
            <span>AKO Alliance</span>
            <span className="text-[#C2704E]">•</span>
            <span>Alive and Free</span>
            <span className="text-[#C2704E]">•</span>
            <span>Vernacular Material Research</span>
            <span className="text-[#C2704E]">•</span>
            <span>Global Keynote Speaking</span>
            <span className="text-[#C2704E]">•</span>
          </div>
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-[0.25em] text-[#8F7759] ml-8">
            <span>Climate-Responsive Architecture</span>
            <span className="text-[#C2704E]">•</span>
            <span>Studio COKA</span>
            <span className="text-[#C2704E]">•</span>
            <span>Contemporary African Craft</span>
            <span className="text-[#C2704E]">•</span>
            <span>ELEvated Products</span>
            <span className="text-[#C2704E]">•</span>
            <span>The Effective Architect (TEA)</span>
            <span className="text-[#C2704E]">•</span>
            <span>AKO Alliance</span>
            <span className="text-[#C2704E]">•</span>
            <span>Alive and Free</span>
            <span className="text-[#C2704E]">•</span>
            <span>Vernacular Material Research</span>
            <span className="text-[#C2704E]">•</span>
            <span>Global Keynote Speaking</span>
            <span className="text-[#C2704E]">•</span>
          </div>
        </div>
      </div>
    </section>
  );
}
