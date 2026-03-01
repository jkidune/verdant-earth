import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-teal-dark w-full flex flex-col items-center py-16 px-6 sm:px-8">
      <div className="w-full max-w-[1280px] flex flex-col gap-12">
        
        {/* Top: 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full">
          
          {/* Column 1: Brand */}
          <div className="flex flex-col gap-2">
            <h3 className="font-display text-xl font-semibold text-white leading-snug">
              Verdant Earth
            </h3>
            <p className="text-xs font-light text-white/50 leading-relaxed max-w-[240px]">
              123 Green Way, Evergreen, USA
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase font-medium text-white/40">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'About',        href: '/about' },
                { label: 'Initiatives',  href: '/initiatives' },
                { label: 'Blog',         href: '/blog' },
                { label: 'Get Involved', href: '/get-involved' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs font-light text-white/55 hover:text-white transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Platform */}
          <div className="flex flex-col gap-4">
            <h4 className="text-[0.65rem] tracking-[0.2em] uppercase font-medium text-white/40">
              Platform
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: 'Careers',         href: '/careers' },
                { label: 'Style Guide',     href: '/style-guide' },
                { label: 'Privacy Policy',  href: '/privacy' },
                { label: 'Terms of Service',href: '/terms' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="text-xs font-light text-white/55 hover:text-white transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Reach Out CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="font-display text-3xl font-semibold text-white/25 leading-tight max-w-[220px]">
              Reach Out with Verdant
            </h3>
            <Link 
              href="/contact"
              className="w-10 h-10 border border-white/20 rounded-pill flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition-all duration-200 group"
            >
              <svg className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Middle: Large typography wordmark */}
        <div className="w-full flex justify-center py-6 overflow-hidden border-t border-white/8">
          <h2 className="font-display font-semibold text-white/10 leading-none whitespace-nowrap select-none"
            style={{ fontSize: 'clamp(3.5rem, 10vw, 7rem)', letterSpacing: '-0.03em' }}
          >
            Verdant Earth
          </h2>
        </div>

        {/* Bottom: Copyright */}
        <div className="w-full flex justify-center pt-6 border-t border-white/10">
          <p className="text-[0.65rem] tracking-[0.1em] font-light text-white/30">
            © {currentYear} Verdant Earth Alliance. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}