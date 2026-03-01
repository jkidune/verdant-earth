"use client";

import { useState, useEffect, useRef } from 'react';

export default function ValueProposition() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsHeaderVisible(true);
      },
      { threshold: 0.5 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    {
      id: "01",
      title: "Community First",
      description: "We empower local populations with the knowledge and resources to manage their own ecosystems sustainably.",
      theme: "dark"  // teal dark — primary accent card
    },
    {
      id: "02",
      title: "Scientific Approach",
      description: "Our reforestation and carbon initiatives are backed by rigorous research and measurable environmental outcomes.",
      theme: "light"
    },
    {
      id: "03",
      title: "Policy Advocacy",
      description: "We fight for equitable climate policies, ensuring fair carbon practices benefit those who need it most.",
      theme: "light"
    }
  ];

  return (
    <section className="bg-background w-full flex flex-col items-center py-24 px-6 sm:px-8">
      <div className="w-full max-w-[1280px] flex flex-col gap-16 items-center">
        
        {/* Animated headline */}
        <div 
          ref={headerRef}
          className="w-full max-w-3xl mx-auto text-center flex flex-col gap-3"
        >
          <p className="eyebrow justify-center">Why Choose Us</p>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight leading-tight">
            <span 
              className={`transition-colors duration-1000 ease-in-out ${
                isHeaderVisible ? "text-teal" : "text-border-dark"
              }`}
            >
              Driven by impact.{' '}
            </span>
            <br className="hidden sm:block" />
            <span className="text-teal">
              Committed to sustainable change.
            </span>
          </h2>
        </div>

        {/* 3-column cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {values.map((item) => (
            <div 
              key={item.id}
              className={`group relative flex flex-col justify-between p-8 rounded-lg h-[280px] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                item.theme === 'dark' 
                  ? 'bg-teal' 
                  : 'bg-surface border border-border shadow-sm'
              }`}
            >
              {/* Top — number & arrow icon */}
              <div className="flex justify-between items-start w-full">
                <span className={`font-display text-3xl font-semibold ${
                  item.theme === 'dark' ? 'text-white/25' : 'text-border-dark'
                }`}>
                  {item.id}
                </span>
                
                <div className={`w-8 h-8 rounded-pill border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  item.theme === 'dark' 
                    ? 'border-white/30 text-white' 
                    : 'border-border text-muted'
                }`}>
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Bottom — title & description */}
              <div className="flex flex-col gap-2">
                <h3 className={`font-display text-2xl font-semibold ${
                  item.theme === 'dark' ? 'text-white' : 'text-teal'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-sm leading-relaxed font-light ${
                  item.theme === 'dark' ? 'text-white/65' : 'text-muted'
                }`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}