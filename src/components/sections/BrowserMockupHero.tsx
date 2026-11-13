"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Lock,
  RotateCw,
  Plus,
  Compass,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { COLORS, EASING } from "@/lib/tokens";

interface HeroPiece {
  id: string;
  indexLabel: string;
  backdropWord: string;
  editionTag: string;
  title: string;
  subtitle: string;
  description: string;
  accentHex: string;
  imageUrl: string;
  imageFallback: string;
  metrics: { value: string; label: string }[];
  materialSwatches: { name: string; hex: string }[];
}

const HERO_PIECES: HeroPiece[] = [
  {
    id: "le-valois",
    indexLabel: "01/03",
    backdropWord: "ATELIER",
    editionTag: "AUTUMN / WINTER ARCHIVE — EDITION IV",
    title: "Le Valois Monolith",
    subtitle: "Sculpted crimson wool bouclé over kiln-dried French walnut.",
    description:
      "Hand-shaped rhythmic channels conceived for intimate architectural salons and private galleries.",
    accentHex: COLORS.bordeaux,
    imageUrl:
      "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1600&q=85",
    imageFallback:
      "https://placehold.co/1200x650/4A1A23/D8D0C2?text=Le+Valois+Crimson+Boucle+Sofa",
    metrics: [
      { value: "140 HRS", label: "Hand Upholstery" },
      { value: "100%", label: "Kiln-Dried Walnut" },
      { value: "NO. 04/25", label: "Numbered Edition" },
    ],
    materialSwatches: [
      { name: "Bordeaux Bouclé", hex: COLORS.bordeaux },
      { name: "Hunter Velvet", hex: COLORS.hunter },
      { name: "Cedar Timber", hex: COLORS.cedar },
    ],
  },
  {
    id: "l-aureole",
    indexLabel: "02/03",
    backdropWord: "FORM",
    editionTag: "BESPOKE COMMISSION — SERIES II",
    title: "L’Auréole Saddle",
    subtitle: "Full-grain cognac bridle leather framed in brushed solid brass.",
    description:
      "Precision recessed channel-tufting engineered with architectural tension and heirloom patina.",
    accentHex: COLORS.cedar,
    imageUrl:
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?auto=format&fit=crop&w=1600&q=85",
    imageFallback:
      "https://placehold.co/1200x650/8C603E/D8D0C2?text=L'Aureole+Cognac+%26+Brass+Sofa",
    metrics: [
      { value: "3.2 MM", label: "Full-Grain Hide" },
      { value: "SOLID", label: "Brushed Brass Inlay" },
      { value: "BESPOKE", label: "Custom Proportions" },
    ],
    materialSwatches: [
      { name: "Cedar Hide", hex: COLORS.cedar },
      { name: "Bone Linen", hex: COLORS.bone },
      { name: "Sage Patina", hex: COLORS.sage },
    ],
  },
  {
    id: "the-anatomy",
    indexLabel: "03/03",
    backdropWord: "CRAFT",
    editionTag: "STRUCTURAL STUDY — ATELIER LAB",
    title: "The Chesterfield Study",
    subtitle: "Geometric mortise-and-tenon joinery beneath hand-tied springs.",
    description:
      "Every curve begins as a calibrated spatial wireframe before meeting natural horsehair and linen.",
    accentHex: COLORS.sage,
    imageUrl:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=85",
    imageFallback:
      "https://placehold.co/1200x650/233126/D8D0C2?text=Chesterfield+Structural+Wireframe",
    metrics: [
      { value: "8-WAY", label: "Hand-Tied Coils" },
      { value: "0.5 MM", label: "Joinery Tolerance" },
      { value: "LIFETIME", label: "Structural Guarantee" },
    ],
    materialSwatches: [
      { name: "Sage Weave", hex: COLORS.sage },
      { name: "Hunter Frame", hex: COLORS.hunter },
      { name: "Bone Canvas", hex: COLORS.bone },
    ],
  },
];

// Sequential hero entrance animations and immersive browser presentation
export function BrowserMockupHero() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedSwatch, setSelectedSwatch] = useState(0);
  const [imgErrorMap, setImgErrorMap] = useState<Record<string, boolean>>({});

  const activePiece = HERO_PIECES[activeIndex];

  useEffect(() => {
    setSelectedSwatch(0);
  }, [activeIndex]);

  const handleNextPiece = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_PIECES.length);
  };

  const handlePrevPiece = () => {
    setActiveIndex(
      (prev) => (prev - 1 + HERO_PIECES.length) % HERO_PIECES.length
    );
  };

  return (
    <section
      aria-label="Atelier Form Immersive Showcase"
      className="relative min-h-screen w-full pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 flex flex-col justify-between overflow-hidden"
    >
      {/* Atmospheric ambient background and architectural hairline grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 transition-colors duration-1000"
          style={{
            background: `radial-gradient(circle at 50% 38%, ${activePiece.accentHex}55 0%, #233126 58%, #161F18 100%)`,
          }}
        />
        <div className="max-w-[1440px] mx-auto h-full border-x border-[#D8D0C2]/[0.07] relative">
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/3 w-[1px] bg-[#D8D0C2]/[0.04]" />
          <div className="hidden lg:block absolute top-0 bottom-0 right-1/3 w-[1px] bg-[#D8D0C2]/[0.04]" />
        </div>
      </motion.div>

      {/* Top editorial framing bar */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto mb-6 sm:mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
            ease: EASING.architectural,
          }}
        >
          <span className="inline-flex items-center gap-2 font-display text-[11px] tracking-[0.26em] uppercase text-[#8C603E]">
            <span className="w-6 h-[1px] bg-[#8C603E]" />
            Digital Exhibition — Paris & Milan
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.35,
            ease: EASING.architectural,
          }}
          className="font-serif italic text-lg sm:text-xl text-[#D8D0C2]/80 max-w-md sm:text-right leading-snug"
        >
          “Sculptural permanence crafted for contemporary architectural
          interiors.”
        </motion.p>
      </div>

      {/* Central immersive browser mockup frame */}
      <motion.div
        initial={
          prefersReducedMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 40, scale: 0.97 }
        }
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1.1,
          delay: 0.3,
          ease: EASING.architectural,
        }}
        className="relative z-10 max-w-[1440px] w-full mx-auto rounded-2xl sm:rounded-3xl border border-[#D8D0C2]/20 bg-[#1B261E]/90 shadow-[0_32px_90px_rgba(0,0,0,0.55)] overflow-hidden"
      >
        {/* Browser chrome header */}
        <div className="px-4 sm:px-6 py-3.5 sm:py-4 bg-[#233126]/95 border-b border-[#D8D0C2]/15 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2" aria-hidden="true">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4A1A23] border border-[#D8D0C2]/25" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#8C603E] border border-[#D8D0C2]/25" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#6A7657] border border-[#D8D0C2]/25" />
            </div>

            <div className="hidden sm:flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-[#D8D0C2]/[0.07] border border-[#D8D0C2]/10">
              <Compass className="w-3.5 h-3.5 text-[#8C603E]" />
              <span className="font-display text-[11px] tracking-[0.18em] uppercase text-[#D8D0C2]/90">
                Exhibition / {activePiece.title}
              </span>
            </div>
          </div>

          {/* Bespoke address bar */}
          <div className="flex-1 max-w-md mx-auto">
            <div className="flex items-center justify-between px-3.5 py-1.5 rounded-full bg-[#161F18]/80 border border-[#D8D0C2]/15 text-[#D8D0C2]/75">
              <div className="flex items-center gap-2 truncate">
                <Lock className="w-3 h-3 text-[#6A7657] shrink-0" />
                <span className="font-display text-[11px] tracking-[0.14em] truncate">
                  atelierform.com/archive/{activePiece.id}
                </span>
              </div>
              <button
                type="button"
                onClick={handleNextPiece}
                aria-label="Cycle featured piece"
                className="text-[#D8D0C2]/60 hover:text-[#D8D0C2] transition-colors ml-2 shrink-0"
              >
                <RotateCw className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Chrome slide navigation controls */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrevPiece}
              aria-label="Previous piece"
              className="p-1.5 rounded-full border border-[#D8D0C2]/15 text-[#D8D0C2]/80 hover:bg-[#D8D0C2]/10 hover:text-[#D8D0C2] transition-colors"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
            </button>
            <button
              type="button"
              onClick={handleNextPiece}
              aria-label="Next piece"
              className="p-1.5 rounded-full border border-[#D8D0C2]/15 text-[#D8D0C2]/80 hover:bg-[#D8D0C2]/10 hover:text-[#D8D0C2] transition-colors"
            >
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            <span className="hidden lg:inline-flex items-center justify-center w-7 h-7 rounded-full border border-[#D8D0C2]/15 text-[#D8D0C2]/60">
              <Plus className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>

        {/* Browser viewport canvas */}
        <div className="relative min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] p-6 sm:p-10 lg:p-14 flex flex-col justify-between overflow-hidden">
          {/* Background architectural imagery */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePiece.id}
              initial={
                prefersReducedMotion
                  ? { opacity: 1 }
                  : { opacity: 0, scale: 1.06 }
              }
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.1, ease: EASING.architectural }}
              className="absolute inset-0 z-0"
            >
              <img
                src={
                  imgErrorMap[activePiece.id]
                    ? activePiece.imageFallback
                    : activePiece.imageUrl
                }
                alt={activePiece.title}
                onError={() =>
                  setImgErrorMap((prev) => ({
                    ...prev,
                    [activePiece.id]: true,
                  }))
                }
                className="w-full h-full object-cover object-center brightness-[0.68] contrast-[1.08]"
              />

              <div
                className="absolute inset-0 transition-colors duration-700"
                style={{
                  background: `linear-gradient(180deg, rgba(35,49,38,0.65) 0%, rgba(25,34,27,0.35) 45%, rgba(22,31,24,0.92) 100%)`,
                }}
              />
              <div
                className="absolute inset-0 opacity-45 mix-blend-multiply"
                style={{ backgroundColor: activePiece.accentHex }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Colossal layered background typography */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-12 sm:top-10 lg:top-8 z-10 flex justify-center overflow-hidden select-none"
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={activePiece.backdropWord}
                initial={
                  prefersReducedMotion
                    ? { opacity: 0.22 }
                    : { opacity: 0, y: 36, letterSpacing: "0.14em" }
                }
                animate={{ opacity: 0.24, y: 0, letterSpacing: "0.08em" }}
                exit={{ opacity: 0, y: -24 }}
                transition={{
                  duration: 1.0,
                  delay: 0.45,
                  ease: EASING.editorialReveal,
                }}
                className="font-display font-semibold uppercase text-[#D8D0C2] text-[21vw] sm:text-[18vw] lg:text-[15.5rem] leading-none whitespace-nowrap"
              >
                {activePiece.backdropWord}
              </motion.span>
            </AnimatePresence>
          </div>

          {/* Upper editorial metadata and headline */}
          <div className="relative z-20 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.55,
                ease: EASING.architectural,
              }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#233126]/75 backdrop-blur-md border border-[#D8D0C2]/20 mb-5"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#8C603E]" />
              <span className="font-display text-[10px] sm:text-[11px] tracking-[0.22em] uppercase text-[#D8D0C2]">
                {activePiece.editionTag}
              </span>
            </motion.div>

            {/* Masked headline reveal */}
            <div className="overflow-hidden mb-3">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={activePiece.title}
                  initial={
                    prefersReducedMotion
                      ? { opacity: 1 }
                      : { y: "100%", opacity: 0 }
                  }
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.65,
                    ease: EASING.editorialReveal,
                  }}
                  className="font-display font-normal uppercase tracking-[0.06em] text-4xl sm:text-6xl lg:text-[64px] leading-[1.08] lg:leading-[70px] text-[#D8D0C2]"
                >
                  {activePiece.title}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Cormorant Garamond supporting statement */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activePiece.subtitle}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{
                  duration: 0.85,
                  delay: 0.78,
                  ease: EASING.architectural,
                }}
                className="font-serif italic text-2xl sm:text-3xl lg:text-[34px] leading-[1.3] lg:leading-[46px] text-[#D8D0C2]/95 max-w-2xl"
              >
                {activePiece.subtitle}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Bottom interactive bar */}
          <div className="relative z-20 mt-12 pt-8 border-t border-[#D8D0C2]/15 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="space-y-8 max-w-2xl">
              {/* Craftsmanship metrics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.88,
                  ease: EASING.architectural,
                }}
                className="grid grid-cols-3 gap-4 sm:gap-8"
              >
                {activePiece.metrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <div className="font-display text-lg sm:text-2xl lg:text-3xl font-medium tracking-[0.06em] text-[#D8D0C2]">
                      {metric.value}
                    </div>
                    <div className="font-serif italic text-sm sm:text-base text-[#D8D0C2]/70">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Primary CTA and description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.85,
                  delay: 0.98,
                  ease: EASING.architectural,
                }}
                className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6"
              >
                <a
                  href={`#piece-${activePiece.id}`}
                  className="group inline-flex items-center justify-between sm:justify-start gap-4 px-6 py-3.5 rounded-full bg-[#D8D0C2] text-[#233126] font-display text-xs tracking-[0.18em] uppercase font-medium transition-all duration-300 hover:bg-[#4A1A23] hover:text-[#D8D0C2] shadow-lg shrink-0"
                >
                  <span>Explore Monograph</span>
                  <span className="w-7 h-7 rounded-full bg-[#233126] text-[#D8D0C2] flex items-center justify-center transition-colors duration-300 group-hover:bg-[#D8D0C2] group-hover:text-[#4A1A23]">
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>

                <p className="font-serif text-base sm:text-lg text-[#D8D0C2]/80 leading-relaxed max-w-md">
                  {activePiece.description}
                </p>
              </motion.div>
            </div>

            {/* Floating finish study card */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 1.05,
                ease: EASING.architectural,
              }}
              className="w-full sm:w-80 rounded-2xl bg-[#233126]/85 backdrop-blur-md border border-[#D8D0C2]/20 p-4 shadow-2xl shrink-0"
            >
              <div className="relative h-28 rounded-xl overflow-hidden mb-3.5 border border-[#D8D0C2]/15">
                <img
                  src={
                    imgErrorMap[activePiece.id]
                      ? activePiece.imageFallback
                      : activePiece.imageUrl
                  }
                  alt={`${activePiece.title} material study`}
                  className="w-full h-full object-cover scale-110 transition-transform duration-700 hover:scale-125"
                />
                <div
                  className="absolute inset-0 opacity-40 transition-colors duration-500"
                  style={{
                    backgroundColor:
                      activePiece.materialSwatches[selectedSwatch]?.hex ||
                      activePiece.accentHex,
                  }}
                />
                <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-[#161F18]/80 backdrop-blur-sm border border-[#D8D0C2]/15">
                  <span className="font-display text-[10px] tracking-[0.18em] uppercase text-[#D8D0C2]">
                    Finish Study
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div>
                  <p className="font-display text-[10px] tracking-[0.2em] uppercase text-[#D8D0C2]/60">
                    Selected Finish
                  </p>
                  <p className="font-serif italic text-base text-[#D8D0C2]">
                    {activePiece.materialSwatches[selectedSwatch]?.name}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {activePiece.materialSwatches.map((swatch, idx) => (
                    <button
                      key={swatch.name}
                      type="button"
                      onClick={() => setSelectedSwatch(idx)}
                      aria-label={`Select ${swatch.name}`}
                      className={`w-6 h-6 rounded-full transition-transform duration-300 border ${
                        selectedSwatch === idx
                          ? "scale-115 border-[#D8D0C2] ring-2 ring-[#8C603E]/60"
                          : "border-[#D8D0C2]/30 opacity-75 hover:opacity-100"
                      }`}
                      style={{ backgroundColor: swatch.hex }}
                    />
                  ))}
                </div>
              </div>

              <div className="pt-2.5 border-t border-[#D8D0C2]/10 flex items-center justify-between gap-3">
                <span className="font-display text-xs tracking-[0.16em] text-[#D8D0C2]/90">
                  {activePiece.indexLabel}
                </span>

                <div className="flex items-center gap-1.5 flex-1 max-w-[140px]">
                  {HERO_PIECES.map((piece, idx) => (
                    <button
                      key={piece.id}
                      type="button"
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`View ${piece.title}`}
                      className="h-1 flex-1 rounded-full overflow-hidden bg-[#D8D0C2]/20 transition-all"
                    >
                      <span
                        className={`block h-full rounded-full transition-all duration-500 ${
                          idx === activeIndex
                            ? "w-full bg-[#D8D0C2]"
                            : "w-0 bg-transparent"
                        }`}
                      />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNextPiece}
                  className="font-display text-[10px] tracking-[0.18em] uppercase text-[#8C603E] hover:text-[#D8D0C2] transition-colors"
                >
                  Next
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.25, duration: 0.8 }}
        className="relative z-10 max-w-[1440px] w-full mx-auto mt-8 flex items-center justify-between text-[#D8D0C2]/60"
      >
        <span className="font-display text-[10px] tracking-[0.24em] uppercase">
          Scroll to Enter the Atelier
        </span>
        <div className="flex items-center gap-3">
          <span className="font-serif italic text-sm">
            Bordeaux · Hunter · Sage · Bone · Cedar
          </span>
          <span className="w-8 h-[1px] bg-[#D8D0C2]/30" />
        </div>
      </motion.div>
    </section>
  );
}
