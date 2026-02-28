"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define our consistent Nav Items
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-8">
        
        <div className="flex justify-between items-center py-5">
          
          {/* Logo Section - Matching Style Guide Slate-900 */}
          <Link href="/" className="text-2xl font-bold text-[#141414] tracking-tight flex items-center gap-2 transition-transform hover:scale-105">
            <span className="text-[#166534]">Verdant</span> Earth
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-slate-600 hover:text-[#166534] font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            
            {/* Primary Style Guide Button */}
            <Link 
              href="/get-involved" 
              className="px-6 py-2.5 bg-[#166534] hover:bg-[#114f29] text-white font-semibold rounded-full shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Join the Mission
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-slate-600 hover:text-[#166534] focus:outline-none transition-transform active:scale-95" 
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-slate-600 hover:text-[#166534] text-lg font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="pt-4">
            <Link 
              href="/get-involved" 
              className="block w-full text-center px-6 py-4 bg-[#166534] hover:bg-[#114f29] text-white font-semibold rounded-full shadow-md transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Mission
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}