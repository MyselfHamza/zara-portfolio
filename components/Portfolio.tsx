"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { projects } from "@/data/content";

const INITIAL_COUNT = 6;
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

/* ------------------------------------------------
   PROJECT LIGHTBOX MODAL
   Full-resolution project image in a scrollable
   overlay with navigation between projects.
   ------------------------------------------------ */
function ProjectModal({
  project,
  index,
  onClose,
  onNav,
}: {
  project: (typeof projects)[number];
  index: number;
  onClose: () => void;
  onNav: (dir: -1 | 1) => void;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Close on Escape, navigate with arrows
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onNav(-1);
      if (e.key === "ArrowRight") onNav(1);
    }
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onNav]);

  // Reset scroll when project changes
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [index]);

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-start justify-center"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.97 }}
        transition={{ duration: 0.4, ease }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-4xl mx-4 my-8 lg:my-12 flex flex-col max-h-[calc(100vh-4rem)] lg:max-h-[calc(100vh-6rem)]"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#0d0a1a]/95 backdrop-blur-md rounded-t-2xl border border-white/[0.08] border-b-0">
          <div className="flex items-center gap-4">
            <span className="font-serif italic text-2xl text-gold/50">{num}</span>
            <div>
              <h3 className="font-serif text-white text-lg leading-tight">{project.title}</h3>
              <div className="flex items-center gap-3 mt-0.5">
                <span className="font-sans text-xs text-white/40">{project.client}</span>
                <span className="w-1 h-1 rounded-full bg-white/20" />
                <span className="font-sans text-[10px] uppercase tracking-[0.15em] text-coral/70">{project.category}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Prev / Next */}
            <button
              onClick={() => onNav(-1)}
              className="p-2 rounded-lg hover:bg-white/[0.06] transition-colors text-white/40 hover:text-white"
              aria-label="Previous project"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5l-5 5 5 5" />
              </svg>
            </button>
            <span className="font-sans text-xs text-white/30 tabular-nums min-w-[3rem] text-center">
              {index + 1} / {projects.length}
            </span>
            <button
              onClick={() => onNav(1)}
              className="p-2 rounded-lg hover:bg-white/[0.06] transition-colors text-white/40 hover:text-white"
              aria-label="Next project"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 5l5 5-5 5" />
              </svg>
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="ml-2 p-2 rounded-lg hover:bg-white/[0.06] transition-colors text-white/40 hover:text-white"
              aria-label="Close"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable image area */}
        <div
          ref={scrollRef}
          className="overflow-y-auto overscroll-contain rounded-b-2xl border border-white/[0.08] border-t-0 bg-[#080612]"
        >
          <div className="relative w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.fullImage}
              alt={project.title}
              className="w-full h-auto block"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------
   TILT CARD — 3D perspective tilt + spotlight
   ------------------------------------------------ */
function ProjectCard({
  project,
  index,
  isFeatured,
  onOpen,
}: {
  project: (typeof projects)[number];
  index: number;
  isFeatured: boolean;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 250, damping: 30 });
  const springY = useSpring(y, { stiffness: 250, damping: 30 });

  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);
  const spotX = useTransform(springX, [0, 1], [0, 100]);
  const spotY = useTransform(springY, [0, 1], [0, 100]);

  function handleMouse(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handleLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.div
      ref={ref}
      onClick={onOpen}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 6) * 0.08, ease }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        transformStyle: "preserve-3d",
      }}
      className={`group relative cursor-pointer
        ${isFeatured ? "md:col-span-2 md:row-span-2" : ""}`}
    >
      <div
        className={`relative w-full overflow-hidden rounded-[20px]
          ${isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"}`}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes={isFeatured ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, 33vw"}
          className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.08]"
        />

        {/* Dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

        {/* Cursor spotlight */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: useTransform(
              [spotX, spotY],
              ([px, py]) =>
                `radial-gradient(600px circle at ${px}% ${py}%, rgba(255,107,107,0.12), transparent 60%)`
            ),
          }}
        />

        {/* Index number */}
        <div className="absolute top-5 left-6 z-20">
          <span className="font-serif italic text-[2.5rem] leading-none text-white/[0.08] group-hover:text-gold/30 transition-colors duration-700 select-none">
            {num}
          </span>
        </div>

        {/* Bottom content */}
        <div className="absolute inset-x-0 bottom-0 p-6 lg:p-7 z-20 flex flex-col">
          <span
            className="self-start mb-3 px-3 py-1 rounded-full font-sans text-[10px] font-semibold uppercase tracking-[0.18em]
              bg-white/[0.07] backdrop-blur-md text-coral border border-white/[0.08]
              group-hover:bg-coral/20 group-hover:border-coral/30 transition-all duration-500"
          >
            {project.category}
          </span>

          <h3
            className={`font-serif text-white leading-[1.2] tracking-tight
              transition-transform duration-500 group-hover:-translate-y-0.5
              ${isFeatured ? "text-2xl lg:text-[2rem]" : "text-lg lg:text-xl"}`}
          >
            {project.title}
          </h3>

          <div className="mt-2 flex items-center justify-between">
            <span className="font-sans text-xs text-white/40 tracking-wide">
              {project.client}
            </span>
            <div className="flex items-center gap-2 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 delay-75">
              <span className="font-sans text-[11px] font-medium text-coral tracking-wider uppercase">
                View
              </span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-coral">
                <path d="M5 9h8m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        </div>

        {/* Border */}
        <div className="absolute inset-0 rounded-[20px] pointer-events-none ring-1 ring-inset ring-white/[0.06] group-hover:ring-white/[0.15] transition-all duration-700" />
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------
   PORTFOLIO SECTION
   ------------------------------------------------ */
export default function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const visible = showAll ? projects : projects.slice(0, INITIAL_COUNT);

  const handleNav = useCallback((dir: -1 | 1) => {
    setActiveIndex((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return projects.length - 1;
      if (next >= projects.length) return 0;
      return next;
    });
  }, []);

  const handleClose = useCallback(() => setActiveIndex(null), []);

  return (
    <>
      {/* Lightbox modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <ProjectModal
            project={projects[activeIndex]}
            index={activeIndex}
            onClose={handleClose}
            onNav={handleNav}
          />
        )}
      </AnimatePresence>

      <section
        id="portfolio"
        className="relative overflow-hidden"
        style={{ background: "#0d0a1a" }}
      >
        {/* Atmospheric background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] right-[-8%] w-[600px] h-[600px] rounded-full bg-violet/30 blur-[160px]" />
          <div className="absolute bottom-[5%] left-[-5%] w-[500px] h-[500px] rounded-full bg-coral/10 blur-[140px]" />
        </div>
        <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />
        <div className="noise-overlay" />

        <div className="container-narrow relative z-10 py-24 lg:py-32">
          {/* ===== HEADER ===== */}
          <div className="mb-20 lg:mb-28">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-2.5 mb-8"
            >
              <span className="block w-2.5 h-2.5 rounded-full bg-coral animate-pulse-glow" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-white/50">
                Selected Work
              </span>
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                className="text-6xl sm:text-7xl lg:text-[6.5rem] leading-[0.92] tracking-tight"
              >
                <span className="font-display font-light text-white/25 block">Port</span>
                <span className="font-display font-extrabold text-white block">folio</span>
              </motion.h2>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: 0.3, ease }}
                className="flex items-center gap-4 pb-2"
              >
                <div className="w-12 h-px bg-gradient-to-r from-gold/60 to-transparent" />
                <span className="font-serif italic text-gold/70 text-sm tracking-wide">
                  {projects.length} projects
                </span>
              </motion.div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 1.2, delay: 0.2, ease }}
              className="mt-8 w-28 h-[2px] bg-gradient-to-r from-gold to-gold/0 origin-left"
            />
          </div>

          {/* ===== PROJECT GRID ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {visible.map((p, i) => (
              <ProjectCard
                key={p.title}
                project={p}
                index={i}
                isFeatured={i === 0}
                onOpen={() => setActiveIndex(i)}
              />
            ))}
          </div>

          {/* ===== CONTROLS ===== */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4, ease }}
            className="mt-16 flex flex-col items-center gap-8"
          >
            {!showAll && projects.length > INITIAL_COUNT && (
              <button
                onClick={() => setShowAll(true)}
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full overflow-hidden border border-white/10 hover:border-coral/40 transition-all duration-500"
              >
                <span className="absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-500" />
                <span className="relative font-sans text-sm font-medium text-white/60 group-hover:text-coral transition-colors duration-300">
                  Show all {projects.length} projects
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative text-white/30 group-hover:text-coral transition-all duration-300 group-hover:translate-y-0.5">
                  <path d="M4 6l4 4 4-4" />
                </svg>
              </button>
            )}

            {showAll && (
              <button
                onClick={() => {
                  setShowAll(false);
                  document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group relative inline-flex items-center gap-3 px-10 py-4 rounded-full overflow-hidden border border-white/10 hover:border-coral/40 transition-all duration-500"
              >
                <span className="absolute inset-0 bg-coral/0 group-hover:bg-coral/10 transition-colors duration-500" />
                <span className="relative font-sans text-sm font-medium text-white/60 group-hover:text-coral transition-colors duration-300">
                  Show less
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="relative text-white/30 group-hover:text-coral transition-all duration-300 group-hover:-translate-y-0.5">
                  <path d="M4 10l4-4 4 4" />
                </svg>
              </button>
            )}

            <a
              href="https://www.fiverr.com/users/ppt_world/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 font-sans text-sm text-white/30 hover:text-coral transition-colors duration-300"
            >
              <span className="w-5 h-px bg-current transition-all duration-300 group-hover:w-8" />
              View on Fiverr
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3.33 8h9.34" />
                <path d="M8.67 3.33L13.33 8l-4.66 4.67" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
