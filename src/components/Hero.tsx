"use client"; // This tells Next.js this component uses interactive React features

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Here we define the content for each slide
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
    image: "/agri-bg.jpg", // You'll need to add this image
    title: "Promoting Sustainable",
    titleHighlight: "Agriculture",
    description: "Empowering local farmers with organic practices that protect the soil, conserve water, and boost community livelihoods.",
  },
  {
    id: 3,
    image: "/carbon-bg.jpg", // You'll need to add this image
    title: "Advocating for",
    titleHighlight: "Fair Carbon",
    description: "Fighting for equitable climate policies and fair carbon practices that put local populations and the environment first.",
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // This effect automatically changes the slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000);
    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center overflow-hidden">
      
      {/* Background Images Slider */}
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
            priority={index === 0} // Only prioritize loading the first image
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </div>
      ))}

      {/* Main Content Slider */}
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              {slide.title} <br className="hidden sm:block" />
              <span className="text-emerald-400">{slide.titleHighlight}</span>
            </h1>
            
            <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
              {slide.description}
            </p>
          </div>
        ))}
        
        {/* Call to Action Buttons (These stay fixed while text changes) */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-8">
          <Link 
            href="/get-involved" 
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Involved
          </Link>
          <Link 
            href="/our-work" 
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Our Work
          </Link>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-10 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? "bg-emerald-500 w-8" : "bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}