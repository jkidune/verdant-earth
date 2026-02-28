import Counter from "./Counter";

export default function AboutStats() {
  const stats = [
    { label: "Satisfied Communities", value: 300, suffix: "+" },
    { label: "Impact Reviews", value: 4.8, suffix: "%", decimals: 1 },
    { label: "Expert Volunteers", value: 100, suffix: "+" },
    { label: "Completed Projects", value: 620, suffix: "+" },
  ];

  return (
    <section className="relative w-full bg-[#F1F5F9] py-20">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Heading Title */}
        <div className="w-full lg:w-[300px] mb-10 lg:mb-0">
          <h3 className="text-[28px] leading-[120%] text-[#141414] font-semibold tracking-tight">
            Our measurable impact in 2026
          </h3>
          <div className="h-1 w-12 bg-[#166534] mt-4 rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="flex-grow grid grid-cols-2 md:grid-cols-4 gap-8 lg:pl-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-3">
              <div className="text-[44px] font-bold leading-none tracking-[-2px] text-[#166534]">
                <Counter 
                  end={stat.value} 
                  decimals={stat.decimals || 0} 
                  suffix={stat.suffix} 
                />
              </div>
              <div className="text-[16px] leading-[140%] text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}