"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const slides = [
  {
    id: 1,
    image: "/hero-bg.jpg",
    title: "Reforesting Our Communities",
    titleHighlight: "One Tree at a Time",
    description: "Join our massive tree-planting campaigns to restore local ecosystems, combat climate change, and build a greener future.",
  },
  {
    id: 2,
    image: "/agri-bg.jpg",
    title: "Promoting Sustainable",
    titleHighlight: "Agriculture",
    description: "Empowering local farmers with organic practices that protect the soil, conserve water, and boost community livelihoods.",
  },
  {
    id: 3,
    image: "/carbon-bg.jpg",
    title: "Advocating for",
    titleHighlight: "Fair Carbon",
    description: "Fighting for equitable climate policies and fair carbon practices that put local populations and the environment first.",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image 
            src={slide.image} 
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
          {/* Teal-tinted dark overlay — replaces plain black */}
          <div className="absolute inset-0 bg-teal-dark/70 z-10" />
        </div>
      ))}

      {/* Main Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`transition-all duration-1000 ease-in-out absolute w-full left-1/2 -translate-x-1/2 ${
              index === currentSlide 
                ? "opacity-100 translate-y-0 relative" 
                : "opacity-0 translate-y-8 absolute pointer-events-none"
            }`}
          >
            {/* Headline — Cormorant Garamond, editorial weight */}
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white mb-6 leading-[0.95]">
              {slide.title} <br className="hidden sm:block" />
              <span className="text-white/70 italic">{slide.titleHighlight}</span>
            </h1>
            
            <p className="mt-4 text-base sm:text-lg text-white/65 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              {slide.description}
            </p>
          </div>
        ))}
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center mt-8">
          <Link href="/get-involved" className="btn btn-primary">
            Get Involved ↗
          </Link>
          <Link href="/our-work" className="btn btn-ghost">
            Explore Our Work
          </Link>
        </div>
      </div>

      {/* Slide Dots */}
      <div className="absolute bottom-10 z-30 flex space-x-2.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-1.5 rounded-pill transition-all duration-300 ${
              index === currentSlide 
                ? "bg-white w-6" 
                : "bg-white/35 hover:bg-white/60 w-1.5"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}