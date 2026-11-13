"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { EASING } from "@/lib/tokens";

const NAV_LINKS = [
  { label: "Collections", href: "#collections" },
  { label: "Savoir-Faire", href: "#craftsmanship" },
  { label: "The Atelier", href: "#atelier" },
  { label: "Bespoke", href: "#bespoke" },
];

// Transparent navigation with scroll-state transitions
export function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 36);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASING.architectural, delay: 0.15 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-4 bg-[#233126]/80 backdrop-blur-md border-b border-[#D8D0C2]/15 shadow-lg"
            : "py-6 md:py-8 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 text-[#D8D0C2] focus:outline-none"
          >
            <span className="w-8 h-8 rounded-full border border-[#D8D0C2]/40 flex items-center justify-center transition-colors duration-300 group-hover:border-[#8C603E] group-hover:bg-[#4A1A23]/40">
              <span className="w-2 h-2 rotate-45 bg-[#D8D0C2] transition-transform duration-500 group-hover:rotate-90" />
            </span>
            <span className="font-display tracking-[0.26em] text-sm sm:text-base font-medium uppercase">
              Atelier Form
            </span>
          </a>

          {/* Center Glass Pill Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#D8D0C2]/[0.06] backdrop-blur-md border border-[#D8D0C2]/15"
          >
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative px-4 py-2 text-xs font-display tracking-[0.18em] uppercase text-[#D8D0C2]/80 hover:text-[#D8D0C2] transition-colors duration-300 group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-1.5 left-4 right-4 h-[1px] bg-[#8C603E] scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#archive"
              className="text-xs font-display tracking-[0.16em] uppercase text-[#D8D0C2]/75 hover:text-[#D8D0C2] transition-colors px-3 py-2"
            >
              Lookbook
            </a>
            <a
              href="#commission"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#D8D0C2] text-[#233126] font-display text-xs tracking-[0.16em] uppercase font-medium transition-all duration-300 hover:bg-[#4A1A23] hover:text-[#D8D0C2] border border-[#D8D0C2] hover:border-[#8C603E]"
            >
              <span>Private Viewing</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-3 rounded-full bg-[#D8D0C2]/10 backdrop-blur-md border border-[#D8D0C2]/20 text-[#D8D0C2]"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </motion.header>

      {/* Mobile Fullscreen Editorial Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: EASING.architectural }}
            className="fixed inset-0 z-40 bg-[#233126]/95 backdrop-blur-xl pt-28 px-6 pb-12 flex flex-col justify-between md:hidden"
          >
            <div className="space-y-6">
              <p className="font-display text-[11px] tracking-[0.25em] uppercase text-[#8C603E]">
                Navigation — Paris / Milan
              </p>
              <nav className="flex flex-col space-y-4">
                {NAV_LINKS.map((item, idx) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 * idx, duration: 0.4 }}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-serif italic text-4xl text-[#D8D0C2] hover:text-[#8C603E] transition-colors py-1 border-b border-[#D8D0C2]/10"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>
            </div>

            <div className="space-y-4">
              <p className="font-serif text-lg text-[#D8D0C2]/75">
                Bespoke architectural commissions & private showroom appointments.
              </p>
              <a
                href="#commission"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-[#D8D0C2] text-[#233126] font-display text-xs tracking-[0.2em] uppercase font-medium"
              >
                <span>Request Private Viewing</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
