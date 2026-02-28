import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F7F7F7] flex flex-col items-center justify-center relative overflow-hidden px-6">
      
      {/* Decorative Vectors (Matching your Figma "Group" logic) */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] opacity-10 pointer-events-none">
         <div className="absolute inset-0 border border-slate-400 rotate-45 transform translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute inset-0 border border-slate-400 -rotate-12 transform translate-x-2/3"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-10 pointer-events-none">
         <div className="absolute inset-0 border border-slate-400 rotate-12 transform -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-[535px]">
        
        {/* Large 404 Text */}
        <h1 className="text-[124px] font-extrabold text-[#19474E] leading-none mb-4 tracking-tighter">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-[38px] font-bold text-[#19474E] leading-[50px] mb-6">
          Oops, page not found!
        </h2>

        {/* Description */}
        <p className="text-lg text-[#5D6A6A] leading-[30px] mb-10">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. 
          Let's get you back to the green path.
        </p>

        {/* Primary CTA (Style Guide Green) */}
        <Link 
          href="/" 
          className="inline-flex items-center justify-center px-12 py-5 bg-[#166534] text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:bg-[#114f29]"
        >
          Back to Home
        </Link>
      </div>

      {/* Optional: Simple Tree Illustration (Vector 33/34 logic) */}
      <div className="absolute bottom-10 right-10 opacity-20 hidden lg:block">
        <svg width="100" height="150" viewBox="0 0 100 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 10L90 120H10L50 10Z" fill="#142A31" />
          <rect x="45" y="120" width="10" height="30" fill="#142A31" />
        </svg>
      </div>
    </main>
  );
}