"use client";

import Reveal from "@/components/RevealOnScroll";
import { notableClients } from "@/data/content";

export default function LogoStrip() {
  return (
    <Reveal>
      <section className="bg-violet-dark/50 py-6 sm:py-8 border-y border-white/[0.05]">
        <div className="container-narrow px-4 sm:px-6">
          <div className="flex flex-wrap items-center justify-center gap-x-6 sm:gap-x-10 gap-y-3">
            <span className="font-sans text-[10px] tracking-[0.3em] text-white/20 uppercase w-full sm:w-auto text-center sm:text-left mb-1 sm:mb-0">
              Trusted by
            </span>

            {notableClients.map((client, i) => (
              <span key={client} className="flex items-center gap-4 sm:gap-6">
                {i > 0 && (
                  <span
                    className="hidden sm:inline text-white/10 text-xs select-none"
                    aria-hidden="true"
                  >
                    &middot;
                  </span>
                )}
                <span className="font-display text-white/25 text-xs sm:text-sm uppercase tracking-wider cursor-default transition-colors duration-300 hover:text-white/60">
                  {client}
                </span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </Reveal>
  );
}
