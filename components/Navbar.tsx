"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Sparkles, Compass } from "lucide-react";

interface NavbarProps {
  onOpenInquiry: (intent?: string) => void;
  onOpenStrategy: (tab?: string) => void;
}

export default function Navbar({ onOpenInquiry, onOpenStrategy }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // Live Lagos / West Africa Time (GMT+1)
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Africa/Lagos",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat("en-GB", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, []);

  const navLinks = [
    { label: "Ecosystem", href: "#ecosystem" },
    { label: "Selected Works", href: "#portfolio" },
    { label: "Speaking", href: "#speaking" },
    { label: "Research & Writing", href: "#writing" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0E0D0C]/85 backdrop-blur-md border-b border-[#25221F] py-3.5 shadow-2xl"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            href="#"
            className="group flex items-center gap-3 transition-transform duration-200"
          >
            <div className="w-9 h-9 rounded-sm bg-[#1E1B18] border border-[#3A332C] group-hover:border-[#C2704E] flex items-center justify-center transition-colors">
              <span className="font-serif text-lg font-bold text-[#F3EFEA] tracking-wider">
                CK
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-semibold tracking-wide text-[#FAF8F5] group-hover:text-[#D98867] transition-colors leading-tight">
                CRYSTAL KIZOR
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#A89F91] font-mono">
                Architectural Studio & Ecosystem
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm tracking-wide text-[#C7BFAF]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#FAF8F5] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-[1px] after:bg-[#C2704E] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}

            {/* Assessment Strategic Portal Trigger */}
            <button
              onClick={() => onOpenStrategy("submission")}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono text-[#D98867] bg-[#C2704E]/10 border border-[#C2704E]/30 hover:bg-[#C2704E]/20 transition-colors cursor-pointer"
              title="Review Part 1, 2, and 3 Assessment Brief"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Assessment Brief</span>
            </button>
          </nav>

          {/* Right Action & Clock */}
          <div className="hidden sm:flex items-center gap-4">
            {currentTime && (
              <div className="hidden xl:flex items-center gap-2 text-xs font-mono text-[#8C8375] border-r border-[#25221F] pr-4">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>WAT (Lagos) {currentTime}</span>
              </div>
            )}

            <button
              onClick={() => onOpenInquiry("general")}
              className="flex items-center gap-2 px-4 py-2 rounded-sm text-xs uppercase tracking-widest font-mono bg-[#F3EFEA] text-[#121110] hover:bg-[#D98867] hover:text-white transition-all duration-200 cursor-pointer shadow-md"
            >
              <span>Initiate Inquiry</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenStrategy("submission")}
              className="px-2.5 py-1.5 rounded text-[11px] font-mono text-[#D98867] bg-[#C2704E]/10 border border-[#C2704E]/30"
            >
              Brief
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#F3EFEA] hover:text-[#C2704E] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden bg-[#0E0D0C]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-10 animate-in fade-in duration-200">
          <div className="flex flex-col gap-6">
            <span className="text-xs uppercase font-mono tracking-widest text-[#8C8375]">
              Navigation
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-[#FAF8F5] hover:text-[#C2704E] transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-[#25221F] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStrategy("submission");
                }}
                className="flex items-center justify-between w-full p-3 rounded bg-[#1B1917] border border-[#3A332C] text-[#D98867] text-sm"
              >
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4" />
                  Stage 1 Assessment Document (Parts 1, 2 & 3)
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenInquiry("general");
                }}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#F3EFEA] text-[#121110] font-mono text-xs uppercase tracking-widest rounded"
              >
                <span>Initiate Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="text-xs font-mono text-[#8C8375] flex items-center justify-between border-t border-[#25221F] pt-4">
            <span>Crystal Kizor Ecosystem</span>
            <span>Lagos • West Africa</span>
          </div>
        </div>
      )}
    </>
  );
}
