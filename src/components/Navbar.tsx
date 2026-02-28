import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sufficient padding (py-5) added here to give the items breathing room */}
        <div className="flex justify-between items-center py-5">
          
          {/* Logo Section */}
          <Link href="/" className="text-2xl font-extrabold text-white tracking-wider flex items-center gap-2 transition-transform hover:scale-105">
            <span className="text-emerald-400">Verdant</span> Earth
          </Link>

          {/* Desktop Navigation Items */}
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
            
            {/* Call to Action Button inside Navbar */}
            <Link 
              href="/get-involved" 
              className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-md transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Donate
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-gray-200 hover:text-white focus:outline-none" aria-label="Open menu">
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}