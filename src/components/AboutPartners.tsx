import Link from 'next/link';

export default function AboutPartners() {
  // 9 slots to match the Figma grid
  const partnerSlots = Array(9).fill(null);

  return (
    <section className="max-w-[1380px] mx-auto px-6 lg:px-8 py-24 border-t border-slate-100">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        {/* Left Column: Matches Team Section Layout exactly */}
        <div className="w-full lg:w-[443px] flex flex-col gap-6">
          <span className="text-xl font-medium text-[#141414] uppercase tracking-wider">
            Our Partners
          </span>
          {/* H2 Style: 40px, Medium, -2px tracking */}
          <h2 className="text-[40px] font-bold leading-tight tracking-[-2px] text-[#141414]">
            Trusted and endorsed by world-class organizations.
          </h2>
          {/* Body Medium: 16px, Slate-600, 160% line height */}
          <p className="text-base leading-[160%] text-slate-600 opacity-80 tracking-[-0.5px]">
            We collaborate with global leaders and local communities to drive sustainable impact and community-led conservation across East Africa.
          </p>
          
          <div className="mt-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 bg-[#166534] text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Become a Partner
            </Link>
          </div>
        </div>

        {/* Right Column: Logo Grid with consistent spacing */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-3 gap-6">
          {partnerSlots.map((_, index) => (
            <div 
              key={index} 
              className="h-[82px] bg-white rounded-xl shadow-[0px_5.29px_14.8px_rgba(8,15,52,0.04)] border border-slate-100 flex items-center justify-center p-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
            >
              {/* Neutral Placeholder Logo */}
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                <div className="w-12 h-3 rounded-full bg-slate-300"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}