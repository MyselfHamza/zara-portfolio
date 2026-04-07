import Reveal from "@/components/RevealOnScroll";
import Image from "next/image";
import { profileImage } from "@/data/content";

function GoldStar() {
  return (
    <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="bg-white section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-3">
            <Reveal>
              {/* Badge */}
              <div className="section-badge">
                <span className="w-2 h-2 rounded-full bg-coral" />
                About
              </div>

              {/* Heading */}
              <h2 className="mt-6 responsive-heading">
                <span className="font-display font-light text-foreground/30">
                  Meet{" "}
                </span>
                <span className="font-display font-extrabold text-foreground">
                  Zara
                </span>
              </h2>

              {/* Gold line accent */}
              <div className="mt-6 w-16 h-0.5 bg-gold" />

              {/* Bio paragraphs */}
              <p className="mt-6 sm:mt-8 font-sans text-muted leading-relaxed">
                I&apos;m a graphic designer with over 6 years of experience
                transforming ideas into visual stories. From startup pitch decks
                to Fortune 500 corporate presentations, I&apos;ve helped clients
                across 21+ industries communicate with clarity and impact.
              </p>
              <p className="mt-4 font-sans text-muted leading-relaxed">
                My work has reached boardrooms at Red Hat, Cisco, TikTok,
                Cloudflare, and McDonald&apos;s. I believe every great
                presentation starts with understanding your audience &mdash; and
                ends with slides they&apos;ll remember.
              </p>

              {/* Mini stats */}
              <div className="mt-8 sm:mt-10 flex items-center gap-6 sm:gap-10">
                {[
                  { value: "6+", label: "Years" },
                  { value: "348+", label: "Projects" },
                  { value: "4.9", label: "Rating" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="font-serif italic text-2xl sm:text-3xl text-gold leading-none">
                      {item.value}
                    </div>
                    <div className="mt-1.5 font-sans text-[10px] sm:text-xs uppercase tracking-widest text-muted">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Profile Image */}
            <Reveal delay={0} className="from-right">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src={profileImage}
                  alt="Zara — Presentation Designer"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  priority
                />
              </div>
            </Reveal>

            {/* Credential Card 1: Fiverr */}
            <Reveal delay={120} className="from-right">
              <div className="bg-surface rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-semibold text-foreground text-base sm:text-lg">
                  Fiverr Level 2 Seller
                </h3>
                <div className="mt-3 flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <GoldStar key={i} />
                  ))}
                </div>
                <p className="mt-2 font-sans text-muted text-sm">
                  4.9 rating from 329 five-star reviews
                </p>
              </div>
            </Reveal>

            {/* Credential Card 2: Global Reach */}
            <Reveal delay={240} className="from-right">
              <div className="bg-surface rounded-2xl p-6 sm:p-8">
                <h3 className="font-display font-semibold text-foreground text-base sm:text-lg">
                  Global Reach
                </h3>
                <p className="mt-2 font-sans text-muted text-sm">
                  English &middot; German &middot; French
                </p>
                <p className="mt-1 font-sans text-muted/70 text-sm">
                  Clients across 21+ industries
                </p>
              </div>
            </Reveal>

            {/* Value pills */}
            <Reveal delay={360} className="from-right">
              <div className="grid grid-cols-3 gap-3">
                {/* Creativity */}
                <div className="bg-surface rounded-xl p-3 sm:p-4 text-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-coral mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                    />
                  </svg>
                  <div className="mt-2 font-sans text-[10px] sm:text-xs font-semibold text-foreground">
                    Creativity
                  </div>
                </div>

                {/* Precision */}
                <div className="bg-surface rounded-xl p-3 sm:p-4 text-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-coral mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <div className="mt-2 font-sans text-[10px] sm:text-xs font-semibold text-foreground">
                    Precision
                  </div>
                </div>

                {/* Communication */}
                <div className="bg-surface rounded-xl p-3 sm:p-4 text-center">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-coral mx-auto"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                    />
                  </svg>
                  <div className="mt-2 font-sans text-[10px] sm:text-xs font-semibold text-foreground">
                    Communication
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
