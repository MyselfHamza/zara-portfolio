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
      {/* Large gradient orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-violet/40 blur-[150px]" />
        <div className="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-coral/15 blur-[120px]" />
        <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-violet-light/20 blur-[130px]" />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />

      {/* Noise */}
      <div className="noise-overlay" />

      {/* ===== NAVBAR SPACER ===== */}
      <div className="h-[72px]" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="container-narrow relative z-10 flex flex-col justify-center min-h-[calc(100vh-72px)] py-16">

        {/* Top row: badge */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            <span className="font-sans text-[11px] font-semibold tracking-[0.2em] uppercase text-white/50">
              Available for projects
            </span>
          </div>
        </motion.div>

        {/* Headline block */}
        <div className="max-w-5xl">
          <motion.h1
            className="font-serif text-[clamp(3rem,8vw,7.5rem)] leading-[0.95] tracking-tight"
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

        {/* Description + CTA row */}
        <div className="mt-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

          {/* Left: description */}
          <motion.div
            className="max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease }}
          >
            <div className="w-12 h-px bg-coral/60 mb-6" />
            <p className="font-sans text-[15px] text-white/40 leading-relaxed">
              Pitch decks, corporate presentations, and brand identities for
              companies like Red Hat, Cisco, TikTok, Cloudflare, and McDonald&apos;s.
              6+ years. 348+ projects. 4.9 rating.
            </p>
            <div className="mt-8 flex items-center gap-6">
              <a
                href="#portfolio"
                className="group inline-flex items-center gap-2 font-sans text-sm font-semibold text-white bg-coral hover:bg-coral-dark px-6 py-3 rounded-full transition-all duration-300"
              >
                View my work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="#contact"
                className="font-sans text-sm font-medium text-white/40 hover:text-white/70 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </motion.div>

          {/* Right: stats grid */}
          <motion.div
            className="grid grid-cols-2 gap-x-12 gap-y-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="group">
                <div className="font-serif italic text-4xl lg:text-5xl text-gold leading-none" style={{ textShadow: "0 0 40px rgba(245,183,49,0.2)" }}>
                  {stat.value}
                </div>
                <div className="mt-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom: Trusted by clients */}
        <motion.div
          className="mt-auto pt-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          {/* Subtle gradient line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/[0.08] to-transparent mb-8" />

          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-white/20 shrink-0">
              Trusted by
            </span>
            <div className="flex items-center gap-8 lg:gap-12">
              <span className="text-[15px] font-bold text-white/25 tracking-tight">Red Hat</span>
              <span className="text-[17px] font-extrabold text-white/25 tracking-tighter lowercase">cisco</span>
              <span className="text-[15px] font-black text-white/25 tracking-tight">TikTok</span>
              <span className="text-[14px] font-bold text-white/25 tracking-wide uppercase">Cloudflare</span>
              <span className="font-serif italic text-[16px] text-white/25">McDonald&apos;s</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
