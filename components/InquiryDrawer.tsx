"use client";

import { useState, useEffect } from "react";
import { X, Send, CheckCircle2, Sparkles, Building2, Mic, Armchair, BookOpen, HeartHandshake } from "lucide-react";
import confetti from "canvas-confetti";

interface InquiryDrawerProps {
  isOpen: boolean;
  initialIntent?: string;
  onClose: () => void;
}

const INQUIRY_INTENTS = [
  "Studio COKA Architecture",
  "Keynote / Speaking Engagement",
  "ELEvated Furniture",
  "The Effective Architect (TEA)",
  "Civic / Impact Partnership",
  "General Advisory & Press",
];

export default function InquiryDrawer({
  isOpen,
  initialIntent = "Studio COKA Architecture",
  onClose,
}: InquiryDrawerProps) {
  const [selectedIntent, setSelectedIntent] = useState(initialIntent);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    organization: "",
    location: "",
    timeline: "Immediate (1-3 months)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (initialIntent) setSelectedIntent(initialIntent);
  }, [initialIntent]);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate verified submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      try {
        confetti({
          particleCount: 70,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#C2704E", "#D98867", "#FAF8F5"],
        });
      } catch (err) {
        // graceful fallback if canvas unavailable
      }
    }, 900);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      organization: "",
      location: "",
      timeline: "Immediate (1-3 months)",
      message: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-xl h-full bg-[#13110F] border-l border-[#2B2723] flex flex-col justify-between overflow-y-auto p-6 sm:p-8 md:p-10 shadow-2xl relative">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-[#25221F]">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D98867] block">
                Direct Engagement Console
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] font-normal leading-tight mt-1">
                Initiate Collaboration
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[#1F1C19] text-[#A89F91] hover:text-white hover:bg-[#C2704E] transition-colors cursor-pointer"
              aria-label="Close inquiry drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {isSuccess ? (
            /* Success State */
            <div className="py-16 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl text-[#FAF8F5] font-normal">
                Inquiry Logged Successfully
              </h3>
              <p className="text-xs sm:text-sm text-[#A89F91] max-w-md mx-auto leading-relaxed">
                Thank you for reaching out to Crystal Kizor&apos;s studio. Your brief for{" "}
                <strong className="text-[#FAF8F5]">{selectedIntent}</strong> has been received.
                Our executive studio liaison typically responds within 24–48 business hours.
              </p>
              <div className="pt-6">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 rounded bg-[#FAF8F5] text-[#121110] font-mono text-xs uppercase tracking-wider hover:bg-[#D98867] hover:text-white transition-colors cursor-pointer font-semibold"
                >
                  Return to Ecosystem
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="py-6 space-y-6">
              
              {/* Intent Selector */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#A89F91] block mb-2">
                  Select Ecosystem Pathway:
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {INQUIRY_INTENTS.map((intent) => (
                    <button
                      type="button"
                      key={intent}
                      onClick={() => setSelectedIntent(intent)}
                      className={`px-3 py-1.5 rounded text-xs font-mono tracking-wider transition-colors cursor-pointer ${
                        selectedIntent.includes(intent) || intent.includes(selectedIntent)
                          ? "bg-[#C2704E] text-white font-medium"
                          : "bg-[#1C1A17] text-[#A89F91] hover:text-[#FAF8F5] border border-[#2B2723]"
                      }`}
                    >
                      {intent}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759] block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amara Okafor"
                    value={formData.fullName}
                    onChange={(e) =>
                      setFormData({ ...formData, fullName: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[#181614] border border-[#2B2723] focus:border-[#C2704E] focus:outline-none text-xs font-sans text-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759] block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="amara@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[#181614] border border-[#2B2723] focus:border-[#C2704E] focus:outline-none text-xs font-sans text-[#FAF8F5]"
                  />
                </div>
              </div>

              {/* Organization & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759] block mb-1.5">
                    Organization / Studio
                  </label>
                  <input
                    type="text"
                    placeholder="Entity name"
                    value={formData.organization}
                    onChange={(e) =>
                      setFormData({ ...formData, organization: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[#181614] border border-[#2B2723] focus:border-[#C2704E] focus:outline-none text-xs font-sans text-[#FAF8F5]"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759] block mb-1.5">
                    Project Location / City
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lagos, London, Nairobi"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded bg-[#181614] border border-[#2B2723] focus:border-[#C2704E] focus:outline-none text-xs font-sans text-[#FAF8F5]"
                  />
                </div>
              </div>

              {/* Timeline */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759] block mb-1.5">
                  Anticipated Timeline
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) =>
                    setFormData({ ...formData, timeline: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded bg-[#181614] border border-[#2B2723] focus:border-[#C2704E] focus:outline-none text-xs font-mono text-[#FAF8F5]"
                >
                  <option value="Immediate (1-3 months)">Immediate (1-3 months)</option>
                  <option value="Mid-term (3-6 months)">Mid-term (3-6 months)</option>
                  <option value="Planning for 2027">Planning for 2027</option>
                  <option value="Exploratory / Discovery">Exploratory / Discovery</option>
                </select>
              </div>

              {/* Project Brief */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider text-[#8F7759] block mb-1.5">
                  Brief Overview & Requirements *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details on your site, scope, architectural aspirations, speaking date, or collaboration idea..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-3.5 py-2.5 rounded bg-[#181614] border border-[#2B2723] focus:border-[#C2704E] focus:outline-none text-xs font-sans text-[#FAF8F5] resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded bg-[#C2704E] hover:bg-[#D98867] text-white font-mono text-xs uppercase tracking-wider transition-all cursor-pointer font-medium shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting Brief...</span>
                ) : (
                  <>
                    <span>Submit Inquiry for Review</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>

              <p className="text-[10px] font-mono text-[#8C8375] text-center">
                Discretion respected. Studio COKA & Crystal Kizor sign NDAs for confidential commissions.
              </p>
            </form>
          )}
        </div>

        {/* Footer Note */}
        <div className="pt-4 border-t border-[#25221F] text-xs font-mono text-[#8C8375] flex items-center justify-between">
          <span>Crystal Kizor Ecosystem</span>
          <span>Studio COKA • Lagos</span>
        </div>

      </div>
    </div>
  );
}
