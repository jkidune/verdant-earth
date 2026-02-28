import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

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
              <li><Link href="/about" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">About</Link></li>
              <li><Link href="/initiatives" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">Initiatives</Link></li>
              <li><Link href="/blog" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">Blog</Link></li>
              <li><Link href="/get-involved" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          {/* Column 3: Platform & Reference */}
          <div className="flex flex-col gap-4">
            <h4 className="text-base font-semibold text-slate-900 leading-6">
              Platform
            </h4>
            <ul className="flex flex-col gap-2">
              {/* Added the Style Guide Link here */}
              <li>
                <Link href="/style-guide" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">
                  Style Guide
                </Link>
              </li>
              <li><Link href="/privacy" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-base font-normal text-slate-500 hover:text-green-800 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Reach Out CTA */}
          <div className="flex flex-col gap-4">
            <h3 className="text-3xl font-bold text-slate-400 leading-9 max-w-[268px]">
              Reach Out with Verdant
            </h3>
            <Link 
              href="/contact"
              className="w-11 h-11 border border-slate-300 rounded-full flex items-center justify-center text-slate-500 hover:bg-slate-200 transition-colors group"
            >
              <svg className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

        </div>

        {/* Middle Section: Massive Typography */}
        <div className="w-full flex justify-center py-8 overflow-hidden">
          <h2 className="text-5xl sm:text-7xl md:text-[96px] font-bold text-green-800 leading-none tracking-[-4.8px] whitespace-nowrap">
            Verdant Earth
          </h2>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex justify-center pt-8 border-t border-slate-200">
          <p className="text-sm font-normal text-slate-500">
            © {currentYear} Verdant Earth Alliance. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}