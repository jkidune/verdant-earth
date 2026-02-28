import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Project {
  id: string;
  slug: string;
  title: string;
  description: string | null;
  location: string | null;
  image: string | null;
  status: string | null;
  created_at?: string;
}

export default async function Initiatives() {
  const { data: projects, error } = await supabase
    .from('projects')
    .select('*')
    .limit(4);

  if (error) {
    console.error('Error fetching projects:', error.message);
  }

  const fallbackProjects: Project[] = [
    {
      id: '1',
      slug: 'fair-carbon-4-us',
      title: 'Fair Carbon 4 Us',
      description: 'Managing massive tree-planting campaigns and promoting fair carbon practices in Morogoro.',
      image: '/reforestation.jpg',
      location: 'Morogoro',
      status: 'active'
    },
    {
      id: '2',
      slug: 'mzenga-kibaha-clcs',
      title: 'Mzenga & Kibaha CLCs',
      description: 'Documenting best practices and success stories at our Community Learning Centres.',
      image: '/education.jpg',
      location: 'Mzenga & Kibaha',
      status: 'active'
    },
    {
      id: '3',
      slug: 'wildlife-protection',
      title: 'Wildlife Protection',
      description: 'Applying wildlife management principles to protect habitats and promote conservation.',
      image: '/wildlife.jpg',
      location: 'Tanzania',
      status: 'active'
    },
    {
      id: '4',
      slug: 'african-continental-project',
      title: 'African Continental Project',
      description: 'Collaborating internationally to advance adult learning and education across the continent.',
      image: '/acp.jpg',
      location: 'Pan-African',
      status: 'active'
    }
  ];

  const displayData = projects && projects.length > 0 ? projects : fallbackProjects;

  return (
    <section className="bg-[#F7F7F7] w-full flex flex-col items-center py-24 px-6 sm:px-8">
      <div className="w-full max-w-[1380px] flex flex-col gap-12">
        
        {/* Header Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <h2 className="font-['Zodiak'] text-[40px] md:text-5xl font-bold text-[#19474E] tracking-[-1.2px] leading-tight">
              Our Initiatives
            </h2>
            <p className="text-base font-normal text-[#5D6A6A] leading-normal">
              Explore the projects driving our mission forward. From grassroots education to international advocacy, see how we are making a difference.
            </p>
          </div>
          
          <Link 
            href="/initiatives" 
            className="inline-flex items-center justify-center px-8 py-3 bg-[#166534] hover:bg-[#114f29] text-white font-bold rounded-full transition-colors duration-300 whitespace-nowrap shadow-md"
          >
            View All Projects
          </Link>
        </div>

        {/* 4-Column Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {displayData.map((project) => (
            <Link 
              href={`/initiatives/${project.slug}`} 
              key={project.id} 
              className="group relative w-full h-[384px] rounded-2xl overflow-hidden block shadow-lg border border-slate-100"
            >
              
              {/* Background Image */}
              <div className="absolute inset-0 bg-[#19474E] z-0">
                <Image
                  src={project.image || '/reforestation.jpg'}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#141414]/90 via-[#141414]/40 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2 z-20">
                {project.location && (
                  <span className="text-xs font-bold tracking-wider text-[#DAF3E6] uppercase mb-1">
                    {project.location}
                  </span>
                )}
                
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-sm font-normal text-white/80 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Top Right Hover Icon (Restored Glass Effect) */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>

            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}