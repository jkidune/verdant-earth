import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

export const revalidate = 0; // Ensures fresh data from Supabase

export default async function InitiativesPage() {
  // Querying YOUR existing projects table
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .order('title', { ascending: true });

  if (error || !projects) {
    return <div className="min-h-screen bg-[#F7F7F7] pt-32 text-center text-[#19474E]">Error loading initiatives.</div>;
  }

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-32 pb-24">
      {/* Hero Header */}
      <section className="max-w-[1380px] mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-10 border-b border-slate-200 pb-12">
          <h1 className="font-['Zodiak'] text-[80px] md:text-[100px] font-bold leading-[0.9] tracking-tight text-[#19474E]">
            Our <br /> Initiatives
          </h1>
          <p className="w-full lg:w-[400px] text-lg text-[#5D6A6A] leading-relaxed">
            From policy advocacy to grassroots reforestation, discover how we are transforming communities across the continent.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="max-w-[1380px] mx-auto px-6 flex flex-col gap-[120px] lg:gap-[180px]">
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-[100px]`}
          >
            {/* Image Block */}
            <div className="w-full lg:w-[600px] h-[500px] lg:h-[690px] relative bg-[#DAF3E6] rounded-2xl overflow-hidden shadow-lg group">
              <Image 
                src={project.image || '/placeholder.jpg'} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>

            {/* Content Block */}
            <div className="w-full lg:w-[458px] flex flex-col justify-center h-auto py-10">
              <span className="text-[40px] font-bold text-[#A1B3B2] mb-6">
                0{index + 1}
              </span>
              
              <div className="flex flex-col gap-8">
                <h2 className="font-['Zodiak'] text-[50px] md:text-[64px] font-bold leading-[1.1] tracking-tight text-[#19474E]">
                  {project.title}
                </h2>
                <p className="text-lg text-[#5D6A6A] leading-[1.6]">
                  {project.description}
                </p>
                
                {/* CTA pointing to the slug */}
                <Link 
                  href={`/initiatives/${project.slug}`}
                  className="inline-flex items-center gap-2 text-[#166534] text-lg font-bold hover:text-[#114f29] transition-colors group"
                >
                  <span className="underline underline-offset-8">View Project Details</span>
                  <span className="transform transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}