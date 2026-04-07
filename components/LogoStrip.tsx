"use client";

import { notableClients } from "@/data/content";

export default function LogoStrip() {
  return (
    <section className="bg-violet-dark/50 py-6 border-y border-white/[0.05]">
      <div className="container-narrow">
        <div className="flex items-center justify-center gap-6 flex-wrap">
          <span className="font-sans text-[10px] tracking-[0.3em] text-white/20 uppercase">
            Trusted by
          </span>

          {notableClients.map((client, i) => (
            <span key={client} className="flex items-center gap-6">
              {i > 0 && (
                <span className="text-white/10 text-xs select-none" aria-hidden="true">
                  &middot;
                </span>
              )}
              <span
                className="font-display text-white/25 text-sm uppercase tracking-wider cursor-default transition-colors duration-300 hover:text-white/60"
              >
                {client}
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
