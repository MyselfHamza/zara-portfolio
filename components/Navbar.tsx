"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navItems } from "@/data/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl bg-violet-dark/80 shadow-[0_1px_0_rgba(255,255,255,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-narrow">
          <div className="flex items-center justify-between h-[72px]">

            {/* Logo */}
            <a href="#" className="flex items-center gap-3 group">
              <span className="font-display text-sm font-[800] tracking-[0.2em] uppercase text-white">
                ZARA
              </span>
              <span className="hidden sm:block w-px h-4 bg-white/20" />
              <span className="hidden sm:block font-sans text-[10px] tracking-[0.3em] uppercase text-white/40">
                Design Studio
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs font-sans font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}

              {/* CTA with coral underline expand */}
              <a
                href="#contact"
                className="relative text-xs font-sans font-medium uppercase tracking-widest text-coral group"
              >
                Start a Project
                <span className="absolute left-0 -bottom-1 h-px bg-coral w-0 group-hover:w-full transition-all duration-500 ease-[var(--ease-out-expo)]" />
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center z-[60]"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span
                  className={`block h-px w-6 bg-white transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-[2px]" : "-translate-y-1.5"
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-white transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-x-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block h-px w-6 bg-white transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-[2px]" : "translate-y-1.5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu: Full-Screen Overlay */}
      <div
        className={`fixed inset-0 z-[55] bg-violet-dark transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Noise overlay on mobile menu */}
        <div className="noise-overlay" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full gap-6 px-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="mobile-link font-display text-3xl sm:text-4xl font-semibold text-white/90 hover:text-coral transition-colors"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-6 w-12 h-px bg-white/10" />
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mobile-link text-coral font-display text-2xl font-semibold"
          >
            Start a Project
          </a>
        </div>
      </div>
    </>
  );
}
