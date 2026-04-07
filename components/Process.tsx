"use client";

import React from "react";
import { processSteps } from "@/data/content";

export default function Process() {
  return (
    <section
      id="process"
      className="section-padding bg-surface overflow-hidden"
    >
      <div className="container-narrow">
        {/* Header */}
        <div className="mb-16 lg:mb-20">
          {/* Badge */}
          <div
            className="flex items-center gap-2.5 mb-8"
          >
            <span className="block w-2.5 h-2.5 rounded-full bg-coral" />
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-muted">
              Process
            </span>
          </div>

          {/* Display heading */}
          <h2
            className="text-6xl lg:text-8xl leading-[0.95] tracking-tight"
          >
            <span className="font-display font-light text-muted block">
              How I
            </span>
            <span className="font-display font-extrabold text-foreground block">
              Work
            </span>
          </h2>

          {/* Gold line */}
          <div
            className="mt-6 w-24 h-[2px] bg-gradient-to-r from-gold to-gold/0"
          />
        </div>

        {/* Process cards with dashed connecting line */}
        <div className="relative">
          {/* Desktop dashed connecting line */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] border-t border-dashed border-border pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => (
              <div
                key={step.num}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Oversized background number */}
                <span className="absolute -top-4 -left-2 font-display font-extrabold text-[8rem] leading-none text-violet/[0.04] select-none pointer-events-none">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Step number */}
                <span className="relative z-10 font-sans text-sm font-medium text-coral">
                  {step.num}
                </span>

                {/* Title */}
                <h3 className="relative z-10 mt-3 font-display font-bold text-xl text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="relative z-10 mt-3 font-sans text-sm text-muted leading-relaxed">
                  {step.description}
                </p>

                {/* Bottom accent line */}
                <div className="relative z-10 mt-6 w-12 h-0.5 bg-coral transition-all duration-500 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
