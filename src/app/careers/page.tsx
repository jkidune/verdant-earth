import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export const revalidate = 0; // Ensures the page always fetches fresh data

export default async function CareersPage() {
  // Fetch active opportunities from Supabase
  const { data: opportunities, error } = await supabase
    .from('opportunities')
    .select('*')
    .eq('status', 'open')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching opportunities:", error.message);
  }

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-32 pb-32">
      
      {/* Header Section */}
      <section className="max-w-[1380px] mx-auto px-6 mb-20">
        <div className="flex flex-col gap-6 border-b border-[#DAE5E4] pb-12">
          <Link href="/get-involved" className="text-[#166534] font-bold text-sm tracking-widest uppercase hover:text-[#114f29] transition-colors flex items-center gap-2 w-fit">
            <span>←</span> Back to Get Involved
          </Link>
          <h1 className="font-['Zodiak'] text-[50px] md:text-[80px] font-bold leading-none tracking-tight text-[#19474E] uppercase">
            Open <br /> Opportunities
          </h1>
          <p className="text-lg text-[#5D6A6A] max-w-2xl leading-relaxed mt-4">
            Join our team of dedicated professionals and volunteers working to protect the environment and empower communities across East Africa and beyond.
          </p>
        </div>
      </section>

      {/* Opportunities List */}
      <section className="max-w-[1380px] mx-auto px-6">
        
        {(!opportunities || opportunities.length === 0) ? (
          <div className="py-20 px-8 bg-white rounded-2xl border border-slate-200 text-center shadow-sm">
            <h3 className="font-['Zodiak'] text-[32px] font-bold text-[#19474E] mb-4">No open roles right now.</h3>
            <p className="text-lg text-[#5D6A6A]">Check back soon! We regularly post new volunteer and career opportunities.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-6 max-w-5xl">
            {opportunities.map((role) => (
              <div 
                key={role.id} 
                className="group flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-10 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#DAF3E6] transition-all duration-300"
              >
                
                {/* Role Details */}
                <div className="flex flex-col gap-4 max-w-2xl">
                  {/* Badges */}
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-wider uppercase">
                    <span className={`px-4 py-2 rounded-full ${
                      role.type === 'Volunteer' 
                        ? 'bg-[#DAF3E6] text-[#166534]' 
                        : 'bg-[#19474E] text-white'
                    }`}>
                      {role.type}
                    </span>
                    <span className="text-[#5D6A6A] bg-slate-100 px-4 py-2 rounded-full">
                      {role.location}
                    </span>
                  </div>
                  
                  {/* Title & Description */}
                  <h3 className="font-['Zodiak'] text-[28px] md:text-[36px] font-bold leading-[1.1] text-[#19474E] mt-2 group-hover:text-[#166534] transition-colors">
                    {role.title}
                  </h3>
                  
                  <p className="text-base text-[#5D6A6A] leading-[1.6]">
                    {role.description}
                  </p>
                </div>

                {/* Apply Button */}
                <div className="mt-8 md:mt-0 md:ml-8 flex-shrink-0">
                  <a 
                    href={`mailto:hello@verdantearth.org?subject=Application for ${role.title}`}
                    className="inline-flex px-8 py-4 bg-transparent border-2 border-[#19474E] text-[#19474E] font-bold rounded-full group-hover:bg-[#19474E] group-hover:text-white transition-colors whitespace-nowrap"
                  >
                    Apply Now
                  </a>
                </div>

              </div>
            ))}
          </div>
        )}

      </section>
    </main>
  );
}