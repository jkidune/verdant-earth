import Image from 'next/image';

export default function ContactHero() {
  return (
    <section className="relative h-[600px] w-full flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/forest-bg.jpg" 
          alt="Contact background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#19474E]/80 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl flex flex-col gap-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
          Contact us
        </h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed">
          Have questions about our reforestation projects or want to partner with us? 
          Reach out and our team in East Africa will get back to you shortly.
        </p>
      </div>
    </section>
  );
}