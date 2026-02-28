export default function AboutValues() {
  const values = [
    {
      title: "Authenticity",
      description: "Community-driven initiatives that resonate with local needs. A collaborative journey to bring real environmental change to life.",
    },
    {
      title: "Artisanship",
      description: "Blending innovative ecological research with time-honored local knowledge. Conservation as an expression of natural beauty.",
    },
    {
      title: "Sustainability",
      description: "Eco-conscious practices that tread lightly on the planet. Prioritizing ethical sourcing and responsible climate advocacy.",
    }
  ];

  return (
    <section className="bg-[#F1F5F9] py-24 px-6 sm:px-8 w-full flex justify-center">
      <div className="max-w-[1380px] w-full flex flex-col gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0">
          <h2 className="text-xl font-medium text-[#141414] uppercase tracking-wider">
            Our Values
          </h2>
          <p className="max-w-[344px] text-base leading-[160%] text-[#141414] opacity-70 tracking-[-0.5px]">
            Nurturing visionary ecosystems with precision and passion. Elevate our planet with cutting-edge conservation and community innovation.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="bg-white p-10 h-[460px] flex flex-col justify-between rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 relative group"
            >
              {/* Decorative Geometric Icon (Matches your Figma Rectangle logic) */}
              <div className="relative w-20 h-20 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute w-[10.67px] h-full left-[34.67px] bg-[#010111]"></div>
                <div className="absolute w-[10.67px] h-full left-[34.67px] bg-[#010111] rotate-90"></div>
                <div className="absolute w-[10.67px] h-full left-[34.67px] bg-[#010111] rotate-45"></div>
                <div className="absolute w-[10.67px] h-full left-[34.67px] bg-[#010111] rotate-[135deg]"></div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-6">
                <h3 className="text-4xl font-medium text-[#141414] tracking-[-2px] leading-none">
                  {value.title}
                </h3>
                <p className="text-base leading-[160%] text-[#141414] opacity-80 tracking-[-0.5px]">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}