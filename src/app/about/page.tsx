import Image from 'next/image';
import Link from 'next/link';
import AboutStats from "@/components/AboutStats";
import AboutValues from "@/components/AboutValues";
import AboutTeam from "@/components/AboutTeam";
import AboutPartners from "@/components/AboutPartners";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-[1380px] mx-auto px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12 lg:gap-20">
          
          {/* Left Content Container */}
          {/* Left Content Container */}
<div className="flex flex-col justify-between h-auto lg:h-[690px] max-w-[482px] py-10">
  
  {/* Massive Heading */}
  <div>
    <h1 className="text-[60px] md:text-[80px] lg:text-[100px] font-medium leading-none tracking-[-4px] uppercase text-[#141414]">
      About <br /> Us
    </h1>
  </div>

  {/* Bottom Text & CTA */}
  <div className="flex flex-col gap-8">
    <p className="text-base md:text-lg leading-[160%] tracking-[-0.5px] text-[#141414] opacity-70">
      We craft sustainable environmental experiences that blend innovation, community engagement, and restoration. From grassroots action to policy advocacy, we bring visions of a greener earth to life with precision and passion.
    </p>
    
    <div>
      <Link 
        href="/get-involved" 
        className="inline-flex items-center justify-center px-8 py-4 bg-[#166534] hover:bg-[#114f29] text-white text-lg font-semibold rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      >
        Join the Mission
        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  </div>
</div>

          {/* Right Image Container */}
          <div className="relative w-full lg:w-[600px] h-[500px] lg:h-[690px] bg-slate-100 rounded-sm overflow-hidden">
            <Image
              src="/about-hero.jpg" // Add this image to your public folder!
              alt="Environmental restoration project"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

        </div>
      </section>

      {/* Placeholder for the next sections we will build */}
      {/* Our Story Section */}
<section className="max-w-[1380px] mx-auto px-6 lg:px-8 py-24 mt-20">
  
  {/* Title & Text Layout */}
  <div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-[164px] mb-20">
    <h2 className="text-xl font-medium text-[#141414] uppercase tracking-wider whitespace-nowrap">
      Our Story
    </h2>

    <div className="flex flex-col gap-8 max-w-[600px]">
      <p className="text-lg leading-[140%] text-[#555555]">
        Rooted in a passion for the planet, Verdant Earth Alliance began as a small grassroots movement focused on community-led reforestation. What started with a single tree-planting campaign has grown into a multi-faceted organization working across borders.
      </p>
      <p className="text-lg leading-[140%] text-[#555555]">
        Every initiative starts with community enrichment and environmental diligence. Our cross-disciplinary teams unite big visions for climate justice with meticulous on-the-ground detail in our Community Learning Centres.
      </p>
      <p className="text-lg leading-[140%] text-[#555555]">
        Bold, responsible, and sustainable ideas are brought to life through our projects. Our greatest pride is enriching lives through lasting, uplifting ecosystems and empowering the next generation of environmental stewards.
      </p>
    </div>
  </div>

  {/* Staggered Images Grid */}
  <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
    
    {/* Left Image (Smaller, positioned higher) */}
    <div className="lg:col-span-4 relative aspect-[416/578] w-full bg-[#E6E6E6] rounded-sm overflow-hidden shadow-sm">
      <Image
        src="/story-left.jpg" // Add to public folder
        alt="Hands holding a young sapling"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>

    {/* Right Image (Larger, positioned lower/offset) */}
    <div className="lg:col-span-8 relative aspect-[810/578] w-full bg-[#E6E6E6] rounded-sm overflow-hidden shadow-md lg:mt-32">
      <Image
        src="/story-right.jpg" // Add to public folder
        alt="Aerial view of a restored forest"
        fill
        className="object-cover transition-transform duration-700 hover:scale-105"
      />
    </div>
  </div>
</section>
<AboutStats />
<AboutValues />
<AboutTeam/>
<AboutPartners />
    </main>
  );
}