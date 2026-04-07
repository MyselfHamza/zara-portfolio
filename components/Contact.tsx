"use client";

import { useState, FormEvent } from "react";
import Reveal from "@/components/RevealOnScroll";

const serviceOptions = [
  "Pitch Decks",
  "Corporate Presentations",
  "Brand Identity",
  "Infographics & Data Viz",
  "Social & Marketing",
  "Design Consultation",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section id="contact" className="bg-surface section-padding">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <Reveal>
            <div>
              {/* Badge */}
              <div className="section-badge">
                <span className="w-2 h-2 rounded-full bg-coral" />
                Contact
              </div>

              {/* Heading */}
              <h2 className="mt-6 responsive-heading">
                <span className="font-display font-light text-foreground/30">
                  Let&apos;s{" "}
                </span>
                <span className="font-display font-extrabold text-foreground">
                  Create
                </span>
              </h2>

              <p className="mt-6 font-sans text-muted leading-relaxed max-w-md">
                Have a project in mind? I&apos;d love to hear about it.
                Let&apos;s turn your ideas into presentations that make an
                impact.
              </p>

              {/* Contact items */}
              <div className="mt-6 sm:mt-8 flex flex-col gap-4">
                <p className="font-sans text-sm text-foreground">
                  <span className="text-coral mr-2">&rarr;</span>
                  Available worldwide, remote collaboration
                </p>
                <p className="font-sans text-sm text-foreground">
                  <span className="text-coral mr-2">&rarr;</span>
                  hello@zaradesigns.com
                </p>
                <a
                  href="https://www.fiverr.com/ppt_world"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-sm text-foreground hover:text-coral transition-colors"
                >
                  <span className="text-coral mr-2">&rarr;</span>
                  fiverr.com/ppt_world
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right column — Form */}
          <Reveal className="from-right">
            <div className="bg-white rounded-2xl p-6 sm:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                {/* Name + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block font-sans text-sm font-medium text-foreground mb-1"
                    >
                      Name
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="w-full min-h-[44px] font-sans border-b-2 border-border focus:border-coral bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block font-sans text-sm font-medium text-foreground mb-1"
                    >
                      Email
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      required
                      className="w-full min-h-[44px] font-sans border-b-2 border-border focus:border-coral bg-transparent py-3 outline-none transition-colors placeholder:text-muted/50"
                    />
                  </div>
                </div>

                {/* Service select */}
                <div>
                  <label
                    htmlFor="contact-service"
                    className="block font-sans text-sm font-medium text-foreground mb-1"
                  >
                    Service
                  </label>
                  <select
                    id="contact-service"
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[44px] font-sans border-b-2 border-border focus:border-coral bg-transparent py-3 outline-none transition-colors text-foreground appearance-none cursor-pointer"
                  >
                    <option value="" disabled>
                      Select a service...
                    </option>
                    {serviceOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block font-sans text-sm font-medium text-foreground mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={5}
                    required
                    className="w-full font-sans border-b-2 border-border focus:border-coral bg-transparent py-3 outline-none transition-colors resize-none placeholder:text-muted/50"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 bg-coral text-white rounded-xl font-display font-semibold uppercase tracking-wider transition-all duration-300 hover:bg-coral-dark hover:shadow-lg hover:shadow-coral/20 cursor-pointer"
                >
                  Send Message
                </button>

                <p className="text-center text-muted text-xs">
                  Typically responds within 1 hour
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
