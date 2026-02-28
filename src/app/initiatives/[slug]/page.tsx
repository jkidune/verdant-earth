import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';

export const revalidate = 0;

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slug = resolvedParams.slug;

  // 1. Fetch the main project
  const { data: project, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single();

  if (error || !project) {
    return (
      <main className="min-h-screen bg-[#F7F7F7] pt-40 px-6 text-[#19474E]">
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-lg border-2 border-red-500">
          <h1 className="text-2xl font-bold mb-4 text-red-600">Database Debugger</h1>
          <p className="mb-2"><strong>The URL slug we are looking for:</strong> "{slug}"</p>
          <p className="mb-2"><strong>Error from Supabase:</strong> {error?.message || "No error message"}</p>
        </div>
      </main>
    );
  }

  // 2. Fetch up to 3 OTHER projects for the bottom navigation
  const { data: otherProjects } = await supabase
    .from('projects')
    .select('*')
    .neq('slug', slug) // Exclude current project
    .limit(3);

  // Safely parse JSON features
  const featuresList = project.features 
    ? (typeof project.features === 'string' ? JSON.parse(project.features) : project.features)
    : [];

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-32 pb-24">
      <div className="max-w-[1380px] mx-auto px-6">
        
        {/* Top Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h1 className="font-['Zodiak'] text-[50px] md:text-[80px] font-bold tracking-tight leading-none text-[#19474E] max-w-4xl">
            {project.title}
          </h1>
          <span className="text-[#166534] font-bold text-xl uppercase px-6 py-2 bg-[#DAF3E6] rounded-full">
            {project.status || 'Active'}
          </span>
        </div>

        {/* Main Image */}
        <div className="w-full h-[500px] md:h-[700px] relative mb-24 rounded-2xl overflow-hidden shadow-xl bg-slate-200">
          <Image src={project.image || '/placeholder.jpg'} alt={project.title} fill className="object-cover" />
        </div>

        {/* Content Wrapper */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 mb-32">
          
          {/* Metadata Sidebar */}
          <aside className="w-full lg:w-[250px] flex flex-col gap-10 bg-white p-8 rounded-2xl shadow-[0px_5px_14px_rgba(8,15,52,0.04)] border border-slate-100 h-fit">
            <div>
              <h4 className="text-sm font-bold text-[#A1B3B2] uppercase mb-1">Donor / Partner</h4>
              <p className="text-lg font-medium text-[#19474E]">{project.donor || 'Verdant Earth'}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#A1B3B2] uppercase mb-1">Duration</h4>
              <p className="text-lg font-medium text-[#19474E]">{project.duration || 'Ongoing'}</p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#A1B3B2] uppercase mb-1">Location</h4>
              <p className="text-lg font-medium text-[#19474E]">{project.location}</p>
            </div>
          </aside>

          {/* Details Section */}
          <div className="flex-1 max-w-[700px]">
            <h3 className="text-[32px] md:text-[40px] font-bold leading-[1.2] text-[#19474E] mb-12">
              Driving impactful change in {project.location}.
            </h3>
            
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-4">
                <h5 className="text-2xl font-bold text-[#19474E]">Project Overview</h5>
                <p className="text-lg leading-[1.8] text-[#5D6A6A]">
                  {project.full_description || project.description}
                </p>
              </div>

              {featuresList.length > 0 && (
                <div className="flex flex-col gap-4">
                  <h5 className="text-2xl font-bold text-[#19474E]">Key Components</h5>
                  <ul className="text-lg leading-[1.8] text-[#5D6A6A] space-y-3">
                    {featuresList.map((feature: string, i: number) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-[#166534] mt-1">✔</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Explore Other Initiatives Section */}
        {otherProjects && otherProjects.length > 0 && (
          <div className="pt-20 border-t border-[#DAE5E4]">
            <div className="flex justify-between items-end mb-10">
              <h3 className="font-['Zodiak'] text-[40px] font-bold text-[#19474E]">
                Explore Other Initiatives
              </h3>
              <Link href="/initiatives" className="text-[#166534] font-bold hover:underline mb-2 hidden md:block">
                View All →
              </Link>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProjects.map((otherProject) => (
                <Link 
                  href={`/initiatives/${otherProject.slug}`} 
                  key={otherProject.id} 
                  className="group relative w-full h-[320px] rounded-2xl overflow-hidden block shadow-lg border border-slate-100"
                >
                  <div className="absolute inset-0 bg-[#19474E] z-0">
                    <Image
                      src={otherProject.image || '/reforestation.jpg'}
                      alt={otherProject.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>
                  
                  <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2 z-20">
                    {otherProject.location && (
                      <span className="text-xs font-bold tracking-wider text-[#DAF3E6] uppercase mb-1">
                        {otherProject.location}
                      </span>
                    )}
                    <h4 className="text-xl font-bold text-white leading-tight">
                      {otherProject.title}
                    </h4>
                  </div>

                  {/* Top Right Hover Icon (Glass Effect) */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 transform translate-y-2 group-hover:translate-y-0">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/initiatives" className="text-[#166534] font-bold hover:underline mt-8 block md:hidden text-center">
              View All Initiatives →
            </Link>
          </div>
        )}

      </div>
    </main>
  );
}