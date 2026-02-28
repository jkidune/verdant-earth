"use client";

import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1800&q=85&auto=format&fit=crop",
    label: "Mountains",
  },
  {
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=85&auto=format&fit=crop",
    label: "Forests",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=1800&q=85&auto=format&fit=crop",
    label: "Oceans",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518399104049-4e6f68b73bf8?w=1800&q=85&auto=format&fit=crop",
    label: "Wildlife",
  },
];

const categories = ["Forests", "Oceans", "Climate", "Wildlife"];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [activeCategory, setActiveCategory] = useState("Forests");

  const goTo = useCallback(
    (index: number) => {
      setCurrent((index + slides.length) % slides.length);
    },
    []
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      style={{ height: "100vh", minHeight: "640px" }}
      className="relative overflow-hidden"
    >

      {/* Background slides using CSS background-image */}
      {slides.map((slide, i) => (
        <div
          key={i}
          style={{ backgroundImage: `url('${slide.image}')` }}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-black/65 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end px-8 md:px-16 pb-12 pt-28">

        {/* Headline */}
        <h1 className="font-display text-white text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.92] font-semibold tracking-tight mb-8">
          Protect What<br />Matters Most
        </h1>

        {/* CTA */}
        <a
          href="/join"
          className="inline-flex items-center gap-3 bg-white text-stone-900 text-[0.72rem] tracking-[0.2em] uppercase font-medium px-7 py-3.5 rounded-full w-fit hover:bg-stone-100 transition-colors duration-200 group mb-10"
        >
          Get Involved
          <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </a>

        {/* Bottom bar */}
        <div className="flex items-end justify-between pt-6 border-t border-white/20">

          {/* Slider controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="w-9 h-9 rounded-full border border-white/35 hover:border-white text-white flex items-center justify-center transition-colors duration-200 text-sm"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-400 ${
                    i === current
                      ? "w-6 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/35 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Next slide"
              className="w-9 h-9 rounded-full border border-white/35 hover:border-white text-white flex items-center justify-center transition-colors duration-200 text-sm"
            >
              →
            </button>
          </div>

          {/* Right: description + category pills */}
          <div className="hidden md:flex flex-col items-end gap-3 max-w-xs text-right">
            <p className="text-white/65 text-[0.8rem] leading-relaxed font-light">
              Join 50,000+ advocates working to preserve biodiversity, fight
              climate change, and build a sustainable future for all life on Earth.
            </p>
            <div className="flex gap-2 flex-wrap justify-end">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    activeCategory === cat
                      ? "border-white text-white"
                      : "border-white/30 text-white/65 hover:border-white/60 hover:text-white/90"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}