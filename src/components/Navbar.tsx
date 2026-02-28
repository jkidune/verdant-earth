"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-stone-950/90 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">

        {/* Left nav links */}
        <div className="hidden md:flex items-center gap-8">
          {["Impact", "Projects", "Blog"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white/75 hover:text-white text-[0.7rem] tracking-[0.2em] uppercase font-light transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Center brand */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-white font-display text-lg tracking-[0.3em] uppercase font-semibold"
        >
          GEA
        </Link>

        {/* Right nav links */}
        <div className="hidden md:flex items-center gap-8 ml-auto">
          <Link
            href="/contact"
            className="text-white/75 hover:text-white text-[0.7rem] tracking-[0.2em] uppercase font-light transition-colors duration-200"
          >
            Contact Us
          </Link>
          <Link
            href="/join"
            className="border border-white/40 hover:border-white hover:bg-white hover:text-stone-900 text-white text-[0.7rem] tracking-[0.2em] uppercase font-light px-5 py-2 rounded-full transition-all duration-300"
          >
            Join the Movement
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden ml-auto text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1.5">
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-stone-950/95 backdrop-blur-md px-8 py-6 flex flex-col gap-5 border-t border-white/10">
          {["Impact", "Projects", "Blog", "Contact Us"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase().replace(" ", "-")}`}
              className="text-white/75 hover:text-white text-[0.7rem] tracking-[0.2em] uppercase font-light transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/join"
            className="border border-white/40 text-white text-[0.7rem] tracking-[0.2em] uppercase font-light px-5 py-3 rounded-full text-center mt-1 hover:bg-white hover:text-stone-900 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            Join the Movement
          </Link>
        </div>
      </div>
    </nav>
  );
}