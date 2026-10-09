"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IntentNavigator from "@/components/IntentNavigator";
import EcosystemGrid from "@/components/EcosystemGrid";
import ProjectGallery from "@/components/ProjectGallery";
import SpeakingSection from "@/components/SpeakingSection";
import WritingArchive from "@/components/WritingArchive";
import Footer from "@/components/Footer";
import ProjectLightbox from "@/components/ProjectLightbox";
import BrandDetailDrawer from "@/components/BrandDetailDrawer";
import InquiryDrawer from "@/components/InquiryDrawer";
import StrategyBriefModal from "@/components/StrategyBriefModal";
import { ArchitecturalProject, EcosystemBrand } from "@/lib/data";

export default function Home() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryIntent, setInquiryIntent] = useState("Studio COKA Architecture");

  const [isStrategyOpen, setIsStrategyOpen] = useState(false);
  const [strategyTab, setStrategyTab] = useState("submission");

  const [selectedProject, setSelectedProject] = useState<ArchitecturalProject | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<EcosystemBrand | null>(null);

  const handleOpenInquiry = (intent?: string) => {
    if (intent) setInquiryIntent(intent);
    setIsInquiryOpen(true);
  };

  const handleOpenStrategy = (tab?: string) => {
    if (tab) setStrategyTab(tab);
    setIsStrategyOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="min-h-screen bg-[#0E0D0C] text-[#F3EFEA] relative selection:bg-[#C2704E] selection:text-white">
      {/* Top Navbar */}
      <Navbar
        onOpenInquiry={handleOpenInquiry}
        onOpenStrategy={handleOpenStrategy}
      />

      {/* Hero Monograph */}
      <Hero
        onOpenInquiry={handleOpenInquiry}
        onScrollToSection={handleScrollToSection}
      />

      {/* Where Should I Go Next? Intent Navigator */}
      <IntentNavigator
        onOpenInquiry={handleOpenInquiry}
        onScrollToSection={handleScrollToSection}
      />

      {/* The 7 Ecosystem Pillars */}
      <EcosystemGrid
        onOpenInquiry={handleOpenInquiry}
        onSelectBrand={(brand) => setSelectedBrand(brand)}
      />

      {/* Selected Architectural Works & ELEvated Pieces */}
      <ProjectGallery
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Speaking & Keynotes */}
      <SpeakingSection onOpenInquiry={handleOpenInquiry} />

      {/* Research & Publications Archive */}
      <WritingArchive onOpenInquiry={handleOpenInquiry} />

      {/* Footer Colophon */}
      <Footer
        onOpenInquiry={handleOpenInquiry}
        onOpenStrategy={handleOpenStrategy}
      />

      {/* Lightbox for Project Inspection */}
      <ProjectLightbox
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Brand Deep-Dive Drawer */}
      <BrandDetailDrawer
        brand={selectedBrand}
        onClose={() => setSelectedBrand(null)}
        onOpenInquiry={handleOpenInquiry}
      />

      {/* Direct Inquiry & Booking Drawer */}
      <InquiryDrawer
        isOpen={isInquiryOpen}
        initialIntent={inquiryIntent}
        onClose={() => setIsInquiryOpen(false)}
      />

      {/* Strategic Documentation & Assessment Brief Modal */}
      <StrategyBriefModal
        isOpen={isStrategyOpen}
        initialTab={strategyTab}
        onClose={() => setIsStrategyOpen(false)}
      />
    </main>
  );
}
