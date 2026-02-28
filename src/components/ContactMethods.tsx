import { FaEnvelope, FaPhoneAlt, FaSms } from 'react-icons/fa';

export default function ContactMethods() {
  const methods = [
    {
      title: "Send us an email",
      description: "Our communication team is ready to assist with your inquiries.",
      contact: "contact@verdantearth.org",
      icon: <FaEnvelope className="text-[#166534] text-3xl" />,
      link: "mailto:contact@verdantearth.org"
    },
    {
      title: "Give us a call",
      description: "Available during office hours for immediate project support.",
      contact: "+255 789 872 000",
      icon: <FaPhoneAlt className="text-[#166534] text-3xl" />,
      link: "tel:+255789872000"
    },
    {
      title: "Send us an SMS",
      description: "Quick updates and field reports via direct messaging.",
      contact: "+255 789 872 111",
      icon: <FaSms className="text-[#166534] text-3xl" />,
      link: "sms:+255789872111"
    }
  ];

  return (
    <section className="bg-[#F7F7F7] py-24 px-6 sm:px-8">
      <div className="max-w-[1380px] mx-auto flex flex-col gap-16 items-center">
        
        {/* Section Heading */}
        <h2 className="text-[38px] font-bold text-[#19474E] text-center tracking-tight leading-tight">
          You can also contact us via:
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-2xl shadow-[0px_5px_14px_rgba(8,15,52,0.04)] border border-[#F7F7F7] flex flex-col items-center text-center gap-6 group cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Icon Circle (98px as per Figma) */}
              <div className="w-[98px] h-[98px] rounded-full bg-[#DAF3E6] flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                {method.icon}
              </div>

              {/* Text Content */}
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl font-bold text-[#19474E] tracking-tight">
                  {method.title}
                </h3>
                <p className="text-base text-[#5D6A6A] leading-relaxed max-w-[300px]">
                  {method.description}
                </p>
              </div>

              {/* Contact Link */}
              <a 
                href={method.link}
                className="text-xl font-medium text-[#166534] hover:text-[#114f29] transition-colors mt-2"
              >
                {method.contact}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}