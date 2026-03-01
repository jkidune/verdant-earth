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
      title: 'Mzenga CLCs',
      description: 'Documenting best practices and success stories at our Community Learning Centres.',
      image: '/education.jpg',
      location: 'Mzenga',
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
    <section className="bg-background w-full flex flex-col items-center py-24 px-6 sm:px-8">
      <div className="w-full max-w-[1280px] flex flex-col gap-12">
        
        {/* Header */}
        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div className="flex flex-col gap-3 max-w-xl">
            <p className="eyebrow">Our Initiatives</p>
            <h2 className="section-heading">
              Our Initiatives
            </h2>
            <p className="text-sm text-muted leading-relaxed">
              Explore the projects driving our mission forward. From grassroots education to international advocacy, see how we are making a difference.
            </p>
          </div>
          
          <Link 
            href="/initiatives" 
            className="btn btn-primary flex-shrink-0"
          >
            View All Projects
          </Link>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {displayData.map((project) => (
            <Link 
              href={`/initiatives/${project.slug}`} 
              key={project.id} 
              className="group relative w-full h-[384px] rounded-lg overflow-hidden block shadow-sm border border-border hover:shadow-lg transition-all duration-300"
            >
              {/* Background Image */}
              <div className="absolute inset-0 bg-teal z-0">
                <Image
                  src={project.image || '/reforestation.jpg'}
                  alt={project.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/90 via-teal-dark/30 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-1.5 z-20">
                {project.location && (
                  <span className="text-[0.65rem] font-medium tracking-[0.18em] text-white/60 uppercase mb-1">
                    {project.location}
                  </span>
                )}
                <h3 className="font-display text-2xl font-semibold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs font-light text-white/70 leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-pill bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 transform translate-y-2 group-hover:translate-y-0">
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