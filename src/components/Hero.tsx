import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center text-center">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        {/* Replace 'hero-bg.jpg' with your actual image name in the public folder */}
        <Image 
          src="/hero-bg.jpg" 
          alt="Community tree planting campaign"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark Overlay - This makes the white text pop! */}
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto flex flex-col items-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Protecting Our Earth, <br className="hidden sm:block" />
          <span className="text-emerald-400">Empowering Communities</span>
        </h1>
        
        <p className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
          Join our mission to promote sustainable agriculture, advocate for fair carbon practices, and foster climate resilience for future generations.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <Link 
            href="/get-involved" 
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Involved
          </Link>
          <Link 
            href="/our-work" 
            className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-emerald-900 text-white font-semibold rounded-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
}