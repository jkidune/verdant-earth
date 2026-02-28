import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // Dynamic copyright year!

  return (
    <footer className="bg-slate-50 w-full flex flex-col items-center py-16 px-6 sm:px-8">
      <div className="w-full max-w-7xl flex flex-col gap-12">
        
        {/* Top Section: 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12 w-full">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-bold text-slate-900 leading-7">
              Verdant Earth
            </h3>
            <p className="text-base font-normal text-slate-500 leading-6 max-w-[268px]">
              123 Green Way, Evergreen, USA
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-slate-900 leading-6">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href="/about" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/initiatives" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  Initiatives
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  Get Involved
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-slate-900 leading-6">
              Connect
            </h4>
            <ul className="flex flex-col gap-2">
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="mailto:contact@verdant.earth" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  contact@verdant.earth
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Reach Out CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-slate-400 leading-9 max-w-[268px]">
              Reach Out with Verdant
            </h3>
            {/* Circle Arrow Button from Figma */}
            <Link 
              href="/contact"
              className="w-11 h-11 border border-slate-300 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors group"
              aria-label="Contact Us"
            >
              <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Middle Section: Massive Typography */}
        <div className="w-full flex justify-center py-8 overflow-hidden">
          {/* Note: I added a responsive text size so it doesn't break mobile screens, but stays massive on desktop! */}
          <h2 className="text-5xl sm:text-7xl md:text-[96px] font-bold text-green-800 leading-none tracking-[-4.8px] whitespace-nowrap">
            Verdant Earth
          </h2>
        </div>

        {/* Bottom Section: Copyright Border */}
        <div className="w-full flex flex-col sm:flex-row justify-between items-center sm:items-start pt-8 border-t border-slate-200 gap-4 sm:gap-0">
          <p className="text-sm font-normal text-slate-500">
            © {currentYear} Verdant Earth. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm font-normal text-slate-500 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}