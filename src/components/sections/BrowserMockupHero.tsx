"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COLORS, EASING } from "@/lib/tokens";

interface HeroSlide {
  id: string;
  indexLabel: string;
  backdropWord: string;
  title: string;
  description: string;
  imageSrc: string;
  fallbackSrc: string;
  ambientGlow: string;
  stats: { value: string; label: string }[];
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "le-valois",
    indexLabel: "01/03",
    backdropWord: "ATELIER",
    title: "Le Valois Bouclé",
    description:
      "Sculpted crimson wool bouclé over kiln-dried walnut—conceived for contemporary architectural salons.",
    imageSrc: "/images/sofa-bordeaux.png",
    fallbackSrc:
      "https://placehold.co/1200x520/transparent/D8D0C2?text=ATELIER+FORM+—+CRIMSON+BOUCLE+SOFA",
    ambientGlow: COLORS.bordeaux,
    stats: [
      { value: "140+", label: "Atelier Hours" },
      { value: "25", label: "Numbered Pieces" },
      { value: "100%", label: "French Walnut" },
    ],
  },
  {
    id: "l-aureole",
    indexLabel: "02/03",
    backdropWord: "FORM",
    title: "L’Auréole Brass",
    description:
      "Full-grain cognac bridle leather framed in brushed solid brass with recessed channel-tufting.",
    imageSrc: "/images/sofa-cognac.png",
    fallbackSrc:
      "https://placehold.co/1200x520/transparent/D8D0C2?text=ATELIER+FORM+—+COGNAC+%26+BRASS+SOFA",
    ambientGlow: COLORS.cedar,
    stats: [
      { value: "3.2mm", label: "Full-Grain Hide" },
      { value: "SOLID", label: "Brushed Brass" },
      { value: "12 WKS", label: "Bespoke Craft" },
    ],
  },
  {
    id: "chesterfield-study",
    indexLabel: "03/03",
    backdropWord: "CRAFT",
    title: "Chesterfield Study",
    description:
      "Calibrated spatial wireframe geometry and hand-tied coil suspension engineered for generational permanence.",
    imageSrc: "/images/chair-wireframe.png",
    fallbackSrc:
      "https://placehold.co/900x520/transparent/D8D0C2?text=ATELIER+FORM+—+WIREFRAME+STUDY",
    ambientGlow: COLORS.sage,
    stats: [
      { value: "8-WAY", label: "Hand-Tied Coils" },
      { value: "0.5mm", label: "Joinery Precision" },
      { value: "PARIS", label: "Design Studio" },
    ],
  },
];

// Full-bleed layered depth hero with high-contrast mobile typography
export function BrowserMockupHero() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const currentSlide = HERO_SLIDES[activeIndex];
  const nextIndex = (activeIndex + 1) % HERO_SLIDES.length;
  const nextSlide = HERO_SLIDES[nextIndex];

  const handleNext = () => {
    setActiveIndex(nextIndex);
  };

  return (
    <section
      aria-label="Atelier Form Hero Showcase"
      className="relative min-h-screen w-full flex flex-col justify-between pt-28 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-8 lg:px-14 overflow-hidden select-none"
    >
      {/* Atmospheric Hunter & Bordeaux Lighting */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div
          className="absolute inset-0 transition-all duration-1000"
          style={{
            background: `radial-gradient(circle at 50% 42%, ${currentSlide.ambientGlow}66 0%, #233126 55%, #121A14 100%)`,
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-[50%] opacity-95"
          style={{
            background:
              "linear-gradient(180deg, rgba(18,26,20,0) 0%, rgba(14,20,16,0.92) 45%, #0C120E 100%)",
          }}
        />
      </div>

      {/* Colossal Backdrop Word Behind Furniture */}
      <div
        aria-hidden="true"
        className="pointer-events-none relative z-10 w-full flex justify-center items-center mt-2 sm:mt-4"
      >
        <AnimatePresence mode="wait">
          <motion.h1
            key={currentSlide.backdropWord}
            initial={
              prefersReducedMotion
                ? { opacity: 0.45 }
                : { opacity: 0, y: 28, scale: 0.98 }
            }
            animate={{ opacity: 0.44, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.95, ease: EASING.editorialReveal }}
            className="font-display font-semibold uppercase text-[#D8D0C2] text-[20vw] sm:text-[18.5vw] lg:text-[17vw] leading-[0.85] tracking-[0.04em] text-center whitespace-nowrap"
          >
            {currentSlide.backdropWord}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Foreground Furniture Cutout Overlapping Giant Typography */}
      <div className="relative z-20 w-full max-w-[1160px] mx-auto -mt-[8vw] sm:-mt-[7.5vw] lg:-mt-[7vw] mb-4 sm:mb-6 flex flex-col items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 36, scale: 0.96 }
            }
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.95, ease: EASING.architectural }}
            className="relative w-full flex flex-col items-center"
          >
            <img
              src={
                imgErrors[currentSlide.id]
                  ? currentSlide.fallbackSrc
                  : currentSlide.imageSrc
              }
              alt={currentSlide.title}
              onError={() =>
                setImgErrors((prev) => ({ ...prev, [currentSlide.id]: true }))
              }
              className="w-full max-h-[280px] sm:max-h-[380px] lg:max-h-[430px] object-contain drop-shadow-[0_32px_42px_rgba(0,0,0,0.75)]"
            />
            <div
              aria-hidden="true"
              className="w-[72%] h-6 -mt-3 rounded-full bg-black/80 blur-xl"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Editorial Bar */}
      <div className="relative z-30 max-w-[1440px] w-full mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8 pt-2">
        <div className="space-y-6 max-w-2xl">
          {/* Metrics Row with Elevated Label Contrast */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.7, ease: EASING.architectural }}
              className="grid grid-cols-3 gap-5 sm:gap-10 max-w-lg"
            >
              {currentSlide.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[0.03em] text-[#D8D0C2]">
                    {stat.value}
                  </div>
                  <div className="font-display text-xs sm:text-sm font-normal tracking-[0.02em] text-[#D8D0C2]/90 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* CTA Pill + Circular Arrow + High-Readability Cormorant Description */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.85,
              delay: 0.25,
              ease: EASING.architectural,
            }}
            className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6"
          >
            <div className="inline-flex items-center shrink-0">
              <a
                href="#collections"
                className="px-6 py-3.5 rounded-full bg-[#D8D0C2] text-[#233126] font-display text-xs sm:text-sm font-medium tracking-[0.06em] transition-colors duration-300 hover:bg-[#4A1A23] hover:text-[#D8D0C2]"
              >
                Explore Piece
              </a>
              <a
                href="#collections"
                aria-label="Explore piece details"
                className="w-11 h-11 -ml-1 rounded-full bg-[#D8D0C2] text-[#233126] flex items-center justify-center transition-all duration-300 hover:bg-[#8C603E] hover:text-[#D8D0C2] group"
              >
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            <p className="font-serif font-medium text-lg sm:text-[19px] text-[#D8D0C2] leading-relaxed max-w-md">
              {currentSlide.description}
            </p>
          </motion.div>
        </div>

        {/* Bottom-Right Floating Preview Card */}
        <motion.button
          type="button"
          onClick={handleNext}
          aria-label={`Next piece: ${nextSlide.title}`}
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.35,
            ease: EASING.architectural,
          }}
          className="group w-full sm:w-64 rounded-2xl bg-[#18221A]/85 backdrop-blur-md border border-[#D8D0C2]/25 p-3 text-left transition-all duration-300 hover:bg-[#233126]/90 hover:border-[#8C603E] shrink-0"
        >
          <div className="relative h-24 w-full rounded-xl overflow-hidden bg-[#121A14] flex items-center justify-center p-2 mb-2.5">
            <img
              src={
                imgErrors[nextSlide.id]
                  ? nextSlide.fallbackSrc
                  : nextSlide.imageSrc
              }
              alt={nextSlide.title}
              className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute top-2 right-2 font-display text-[10px] font-medium tracking-[0.14em] uppercase px-2.5 py-0.5 rounded-full bg-[#233126] text-[#D8D0C2] border border-[#D8D0C2]/20">
              Next
            </span>
          </div>

          <div className="flex items-center justify-between gap-3 px-1">
            <span className="font-display text-xs font-medium tracking-[0.1em] text-[#D8D0C2]">
              {currentSlide.indexLabel}
            </span>

            <div className="flex items-center gap-1.5 flex-1 max-w-[130px]">
              {HERO_SLIDES.map((slide, idx) => (
                <span
                  key={slide.id}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? "w-7 bg-[#D8D0C2]"
                      : "w-3 bg-[#D8D0C2]/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.button>
      </div>
    </section>
  );
}
