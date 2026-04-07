import { services } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-[#1a0d2e]">
      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-coral via-gold to-violet" />

      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Brand */}
        <div className="flex flex-col items-center sm:items-start sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <span className="font-display font-extrabold text-2xl tracking-[0.3em] text-white">
              ZARA
            </span>
            <span className="block font-sans text-[10px] tracking-[0.3em] text-white/20 uppercase mt-1">
              Design Studio
            </span>
          </div>
        </div>

        {/* 3-column grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Services */}
          <div>
            <h3 className="font-sans text-[10px] tracking-[0.3em] text-white/40 uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="font-sans text-white/30 text-xs hover:text-white/60 transition-colors"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-[10px] tracking-[0.3em] text-white/40 uppercase mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="mailto:hello@zaradesigns.com"
                  className="font-sans text-white/30 text-xs hover:text-white/60 transition-colors"
                >
                  hello@zaradesigns.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.fiverr.com/ppt_world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-white/30 text-xs hover:text-white/60 transition-colors"
                >
                  fiverr.com/ppt_world
                </a>
              </li>
              <li>
                <span className="font-sans text-white/30 text-xs">
                  Available worldwide
                </span>
              </li>
            </ul>
          </div>

          {/* Social / Links */}
          <div>
            <h3 className="font-sans text-[10px] tracking-[0.3em] text-white/40 uppercase mb-4">
              Connect
            </h3>
            <ul className="space-y-2.5">
              <li>
                <a
                  href="https://www.fiverr.com/ppt_world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-white/30 text-xs hover:text-white/60 transition-colors"
                >
                  Fiverr
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="font-sans text-white/30 text-xs hover:text-white/60 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="font-sans text-white/30 text-xs hover:text-white/60 transition-colors"
                >
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-white/15 text-xs">
            &copy; 2026 Zara Visual Lab
          </p>
          <p className="font-sans text-white/15 text-xs italic">
            Crafted with passion
          </p>
        </div>
      </div>
    </footer>
  );
}
