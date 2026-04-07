"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { testimonials } from "@/data/content";

function GoldStar() {
  return (
    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  const current = testimonials[active];

  return (
    <section className="relative bg-violet-dark section-padding overflow-hidden">
      {/* Noise overlay */}
      <div className="noise-overlay" />

      <div className="container-narrow relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="section-badge inline-flex">
            <span className="w-2 h-2 rounded-full bg-coral" />
            Reviews
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-5xl lg:text-7xl leading-[1.05]">
            <span className="font-display font-light text-white/40">Client </span>
            <span className="font-display font-extrabold text-white">Voices</span>
          </h2>

          {/* Testimonial area */}
          <div className="mt-16 relative min-h-[320px] md:min-h-[280px]">
            {/* Large quotation mark */}
            <span
              className="absolute -top-16 left-1/2 -translate-x-1/2 font-serif text-[10rem] text-gold/10 leading-none select-none pointer-events-none"
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="pt-8"
              >
                {/* Quote */}
                <blockquote className="font-serif italic text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                  {current.quote}
                </blockquote>

                {/* Gold divider */}
                <div className="w-16 h-px bg-gold mx-auto my-8" />

                {/* Stars */}
                <div className="flex items-center justify-center gap-1">
                  {[...Array(current.rating)].map((_, i) => (
                    <GoldStar key={i} />
                  ))}
                </div>

                {/* Client info */}
                <div className="mt-4">
                  <div className="font-display font-semibold text-white">
                    {current.name}
                  </div>
                  <div className="font-sans text-white/40 text-sm mt-0.5">
                    {current.title}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="mt-8 flex items-center justify-center gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === active
                    ? "bg-coral w-6 h-2.5"
                    : "bg-white/20 w-2.5 h-2.5 hover:bg-white/40"
                }`}
              />
            ))}
          </div>

          {/* Trust bar */}
          <div className="mt-14 pt-8 border-t border-white/[0.08]">
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              <span className="text-white/20 text-xs tracking-wider">
                329 Five-Star Reviews
              </span>
              <span className="text-gold/40 text-xs select-none" aria-hidden="true">&middot;</span>
              <span className="text-white/20 text-xs tracking-wider">
                21+ Industries
              </span>
              <span className="text-gold/40 text-xs select-none" aria-hidden="true">&middot;</span>
              <span className="text-white/20 text-xs tracking-wider">
                1-Hour Response
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
