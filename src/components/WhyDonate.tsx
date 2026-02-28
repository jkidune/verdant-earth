import { FaLeaf, FaGlobeAfrica, FaSeedling, FaHandsHelping } from 'react-icons/fa';

export default function WhyDonate() {
  const reasons = [
    {
      title: "Fight climate change",
      desc: "Every dollar helps us plant indigenous trees that sequester carbon and restore biodiversity.",
      icon: <FaGlobeAfrica size={24} className="text-[#166534]" />
    },
    {
      title: "Reduce CO2 footprint",
      desc: "We focus on long-term forest management to ensure your donation has a lasting impact on the atmosphere.",
      icon: <FaLeaf size={24} className="text-[#166534]" />
    },
    {
      title: "Reforest to preserve",
      desc: "We are reforesting to preserve the planet's lungs, not for commercial harvesting.",
      icon: <FaSeedling size={24} className="text-[#166534]" />
    },
    {
      title: "Sustainable ecosystems",
      desc: "We develop systems that empower local communities to manage their own natural resources.",
      icon: <FaHandsHelping size={24} className="text-[#166534]" />
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-[1210px] mx-auto">
        <div className="text-center mb-16 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-[#19474E] mb-6">Why donating to our cause?</h2>
          <p className="text-lg text-[#5A5A5A] max-w-2xl leading-relaxed">
            Verdant Earth is committed to total transparency. 100% of public donations go directly to field operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((reason, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl shadow-[0px_5px_14px_rgba(8,15,52,0.04)] flex flex-col gap-6 border border-slate-50 transition-all hover:-translate-y-1">
              <div className="w-[60px] h-[60px] rounded-full bg-[#DAF3E6] flex items-center justify-center">
                {reason.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#19474E]">{reason.title}</h3>
              <p className="text-lg text-[#5D6A6A] leading-relaxed">
                {reason.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}