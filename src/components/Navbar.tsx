"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Initiatives', href: '/initiatives' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        <div className="flex justify-between items-center py-4">
          
          {/* Logo */}
          <Link href="/" className="font-display text-2xl font-semibold tracking-tight flex items-center transition-opacity hover:opacity-80">
            <span className="text-green">Verdant</span>
            <span className="text-teal">&nbsp;Earth</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                href={link.href} 
                className="text-muted hover:text-teal text-[0.7rem] tracking-[0.18em] uppercase font-normal transition-colors duration-150"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/get-involved" 
              className="btn btn-primary"
            >
              Join the Mission
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-muted hover:text-teal focus:outline-none transition-colors" 
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`md:hidden absolute w-full bg-white border-b border-border transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-screen opacity-100 py-6" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 space-y-5">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className="text-muted hover:text-teal text-[0.7rem] tracking-[0.18em] uppercase font-normal transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2 pb-2">
            <Link 
              href="/get-involved" 
              className="btn btn-primary w-full justify-center"
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