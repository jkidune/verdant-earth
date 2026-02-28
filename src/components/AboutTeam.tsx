import Image from 'next/image';
import { FaLinkedinIn } from 'react-icons/fa';
import { supabase } from '@/lib/supabase';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  image_url: string;
  linkedin_url: string;
}

export default async function AboutTeam() {
  // Fetch from Supabase, ordered by our custom index
  const { data: team, error } = await supabase
    .from('team_members')
    .select('*')
    .order('order_index', { ascending: true });

  if (error) {
    console.error('Error fetching team:', error.message);
  }

  return (
    <section className="max-w-[1380px] mx-auto px-6 lg:px-8 py-24 mt-10">
      <div className="flex flex-col lg:flex-row gap-20 items-start">
        
        {/* Left Column: Sticky Header */}
        <div className="lg:sticky lg:top-32 w-full lg:w-[443px] flex flex-col gap-6">
          <span className="text-xl font-medium text-[#141414] uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-[40px] font-bold leading-tight tracking-[-2px] text-[#141414]">
            Meet the Talent Behind the Green Vision
          </h2>
          <p className="text-lg leading-[160%] text-[#555555] opacity-80 tracking-[-0.5px]">
            Our environmental visionaries and communication experts work across borders to ensure a sustainable future for communities in East Africa and beyond.
          </p>
        </div>

        {/* Right Column: Dynamic Team Grid */}
        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {team?.map((member) => (
            <div key={member.id} className="flex flex-col gap-5 w-full max-w-[356px] group cursor-pointer">
              
              {/* Image Container */}
              <div className="relative w-full h-[351px] bg-[#F1F5F9] rounded-sm overflow-hidden">
                <Image
                  src={member.image_url || '/team-placeholder.jpg'}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Info Row */}
              <div className="flex justify-between items-start w-full pr-2">
                <div className="flex flex-col gap-1">
                  <h4 className="text-2xl font-bold text-[#141414] tracking-[-1px] leading-none group-hover:text-[#166534] transition-colors">
                    {member.name}
                  </h4>
                  <p className="text-base font-normal text-slate-500 leading-[160%]">
                    {member.role}
                  </p>
                </div>
                
                <a 
                  href={member.linkedin_url} 
                  target="_blank"
                  className="w-[30px] h-[30px] rounded-sm bg-[#166534] flex items-center justify-center text-white hover:bg-[#114f29] transition-all"
                >
                  <FaLinkedinIn size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}