"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  // This state tracks whether the mobile menu is open (true) or closed (false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center py-5">
          
          {/* Logo Section */}
          <Link href="/" className="text-2xl font-extrabold text-white tracking-wider flex items-center gap-2 transition-transform hover:scale-105">
            <span className="text-emerald-400">Verdant</span> Earth
          </Link>

          {/* Desktop Navigation Items (Hidden on small screens) */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-gray-200 hover:text-white font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-200 hover:text-white font-medium transition-colors">
              About
            </Link>
            <Link href="/our-work" className="text-gray-200 hover:text-white font-medium transition-colors">
              Our Work
            </Link>
            <Link href="/contact" className="text-gray-200 hover:text-white font-medium transition-colors">
              Contact
            </Link>
            
            <Link 
              href="/get-involved" 
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button (Hidden on md and larger screens) */}
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-200 hover:text-white focus:outline-none transition-transform active:scale-95" 
              aria-label="Toggle menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                /* Close Icon (X) */
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                /* Hamburger Icon */
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      <div 
        className={`md:hidden absolute w-full bg-black/90 backdrop-blur-lg border-b border-white/10 transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 space-y-2">
          {/* We add onClick={() => setIsMobileMenuOpen(false)} to close the menu when a link is clicked */}
          <Link 
            href="/" 
            className="text-gray-200 hover:text-white hover:bg-white/10 px-3 py-3 rounded-md font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-200 hover:text-white hover:bg-white/10 px-3 py-3 rounded-md font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            href="/our-work" 
            className="text-gray-200 hover:text-white hover:bg-white/10 px-3 py-3 rounded-md font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Work
          </Link>
          <Link 
            href="/contact" 
            className="text-gray-200 hover:text-white hover:bg-white/10 px-3 py-3 rounded-md font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="pt-4 pb-2">
            <Link 
              href="/get-involved" 
              className="block w-full text-center px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Donate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}