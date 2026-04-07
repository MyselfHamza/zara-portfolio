"use client";

import React from "react";
import { services } from "@/data/content";
import Reveal from "@/components/RevealOnScroll";

const accentColors = [
  "border-l-coral",
  "border-l-gold",
  "border-l-violet-light",
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative section-padding bg-violet-dark overflow-hidden"
    >
      {/* Grid background overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Noise texture */}
      <div className="noise-overlay" />

      <div className="container-narrow relative z-10">
        {/* Header */}
        <div className="mb-12 sm:mb-16 lg:mb-20">
          {/* Section badge */}
          <Reveal>
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span className="block w-2.5 h-2.5 rounded-full bg-coral" />
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-white/60">
                Services
              </span>
            </div>
          </Reveal>

          {/* Display heading */}
          <Reveal>
            <h2 className="responsive-heading leading-[0.95] tracking-tight">
              <span className="font-display font-light text-white/40 block">
                What I
              </span>
              <span className="font-display font-extrabold text-white block">
                Create
              </span>
            </h2>
          </Reveal>

          {/* Gold accent line */}
          <Reveal className="line-draw">
            <div className="mt-6 w-24 h-[2px] bg-gradient-to-r from-gold to-gold/0" />
          </Reveal>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 100}>
              <div
                className={`group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-xl p-5 sm:p-8
                  border-l-4 ${accentColors[i % 3]}
                  hover:border-white/20 hover:bg-white/[0.08] transition-all duration-500`}
              >
                {/* Oversized index number */}
                <span className="absolute top-3 right-4 sm:top-4 sm:right-6 font-display font-extrabold text-5xl sm:text-6xl text-white/[0.06] leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Service title */}
                <h3 className="font-serif italic text-xl sm:text-2xl text-white leading-snug pr-12 sm:pr-16">
                  {service.title}
                </h3>

                {/* Tagline */}
                <p className="mt-1.5 font-sans text-sm text-coral">
                  {service.tagline}
                </p>

                {/* Description */}
                <p className="mt-3 sm:mt-4 font-sans text-sm text-white/50 leading-relaxed">
                  {service.description}
                </p>

                {/* Feature pills */}
                <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="bg-white/[0.06] rounded-full px-3 py-1 text-white/40 text-xs font-sans"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
