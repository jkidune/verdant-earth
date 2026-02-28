"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function ValueProposition() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  // Scroll Animation Observer (same as the Blog section)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsHeaderVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  // Data for the three cards based on your layout
  const values = [
    {
      id: "01",
      title: "Community First",
      description: "We empower local populations with the knowledge and resources to manage their own ecosystems sustainably.",
      // The first card uses the green theme from your Figma code
      theme: "green" 
    },
    {
      id: "02",
      title: "Scientific Approach",
      description: "Our reforestation and carbon initiatives are backed by rigorous research and measurable environmental outcomes.",
      theme: "white"
    },
    {
      id: "03",
      title: "Policy Advocacy",
      description: "We fight for equitable climate policies, ensuring fair carbon practices benefit those who need it most.",
      theme: "white"
    }
  ];

  return (
    <section className="bg-slate-50 w-full flex flex-col items-center py-24 px-6 sm:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-16 items-center">
        
        {/* Animated Headline */}
        <div 
          ref={headerRef}
          className="w-full max-w-4xl mx-auto text-center flex flex-col gap-2"
        >
          <h2 className="text-4xl sm:text-5xl md:text-[48px] font-bold tracking-tight leading-tight">
            {/* The grey text that animates to dark slate when scrolled into view */}
            <span 
              className={`transition-colors duration-1000 ease-in-out ${
                isHeaderVisible ? "text-slate-900" : "text-slate-400"
              }`}
            >
              Driven by impact. 
            </span>
            <br className="hidden sm:block" />
            <span className="text-slate-400">
              {' '}Committed to sustainable change.
            </span>
          </h2>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {values.map((item) => (
            <div 
              key={item.id}
              className={`group relative flex flex-col justify-between p-8 rounded-lg h-[290px] transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl cursor-pointer ${
                item.theme === 'green' 
                  ? 'bg-green-800' 
                  : 'bg-white border border-slate-100 shadow-sm'
              }`}
            >
              {/* Top Row: Number & Icon */}
              <div className="flex justify-between items-start w-full">
                <span className={`text-2xl font-bold ${
                  item.theme === 'green' ? 'text-white' : 'text-slate-400'
                }`}>
                  {item.id}
                </span>
                
                {/* Circle Arrow Icon */}
                <div className={`w-9 h-9 rounded-full border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                  item.theme === 'green' 
                    ? 'border-white/50 text-white' 
                    : 'border-slate-300 text-slate-500'
                }`}>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
              </div>

              {/* Bottom Row: Title & Description */}
              <div className="flex flex-col gap-2">
                <h3 className={`text-2xl font-bold ${
                  item.theme === 'green' ? 'text-white' : 'text-slate-900'
                }`}>
                  {item.title}
                </h3>
                <p className={`text-base leading-relaxed ${
                  item.theme === 'green' ? 'text-green-200' : 'text-slate-600'
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