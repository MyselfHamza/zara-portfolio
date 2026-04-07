"use client";

import { motion } from "framer-motion";
import { stats } from "@/data/content";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: "#0d0a1a" }}
    >
      {/* ===== BACKGROUND ===== */}
      {/* Large gradient orbs - scaled down on mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px] rounded-full bg-violet/40 blur-[100px] sm:blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] lg:w-[500px] lg:h-[500px] rounded-full bg-coral/15 blur-[80px] sm:blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full bg-violet-light/20 blur-[90px] sm:blur-[130px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />

      {/* Noise */}
      <div className="noise-overlay" />

      {/* ===== NAVBAR SPACER ===== */}
      <div className="h-[64px] sm:h-[72px]" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="container-narrow relative z-10 flex flex-col justify-center min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-72px)] py-10 lg:py-16 px-4 sm:px-6">
        {/* Top row: badge */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 rounded-full border border-white/10 bg-white/[0.03] px-4 sm:px-5 py-2 sm:py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            <span className="font-sans text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white/50">
              Available for projects
            </span>
          </div>
        </motion.div>

        {/* Headline block */}
        <div className="max-w-5xl">
          <motion.h1
            className="font-serif text-[clamp(2.5rem,7vw,7rem)] leading-[0.95] tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
          >
            <span className="text-white">I design </span>
            <span className="italic text-coral">presentations</span>
            <br />
            <span className="text-white">that move </span>
            <span className="italic text-gold">people</span>
            <span className="text-white/30">.</span>
          </motion.h1>
        </div>

        {/* Description + CTA */}
        <motion.div
          className="mt-8 sm:mt-12 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7, ease }}
        >
          <div className="w-12 h-px bg-coral/60 mb-5 sm:mb-6" />
          <p className="font-sans text-sm sm:text-[15px] text-white/40 leading-relaxed">
            Pitch decks, corporate presentations, and brand identities for
            companies like Red Hat, Cisco, TikTok, Cloudflare, and
            McDonald&apos;s. 6+ years. 348+ projects. 4.9 rating.
          </p>
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-white bg-coral hover:bg-coral-dark px-6 py-3 rounded-full transition-all duration-300"
            >
              View my work
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://www.fiverr.com/ppt_world"
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
            >
              Order on Fiverr
            </a>
          </div>
        </motion.div>

        {/* Stats grid - always below description */}
        <motion.div
          className="mt-10 sm:mt-14 grid grid-cols-2 md:grid-cols-4 gap-x-8 sm:gap-x-12 gap-y-6 sm:gap-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="group">
              <div
                className="font-serif italic text-3xl sm:text-4xl lg:text-5xl text-gold leading-none"
                style={{ textShadow: "0 0 40px rgba(245,183,49,0.2)" }}
              >
                {stat.value}
              </div>
              <div className="mt-1.5 sm:mt-2 font-sans text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/30">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Bottom: Trusted by clients */}
        <motion.div
          className="mt-auto pt-14 sm:pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Subtle gradient line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-6 sm:mb-8" />

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20 shrink-0">
              Trusted by
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-x-8 lg:gap-x-12">
              <span className="text-[11px] sm:text-[13px] font-bold text-white/25 tracking-tight">
                Red Hat
              </span>
              <span className="text-[12px] sm:text-[15px] font-extrabold text-white/25 tracking-tighter lowercase">
                cisco
              </span>
              <span className="text-[11px] sm:text-[13px] font-black text-white/25 tracking-tight">
                TikTok
              </span>
              <span className="text-[10px] sm:text-[12px] font-bold text-white/25 tracking-wide uppercase">
                Cloudflare
              </span>
              <span className="font-serif italic text-[12px] sm:text-[14px] text-white/25">
                McDonald&apos;s
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
