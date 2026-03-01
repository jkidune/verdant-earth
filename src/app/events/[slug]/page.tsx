import { supabase } from '@/lib/supabase';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import EventRegistrationForm from '@/components/EventRegistrationForm';

export const revalidate = 0;

// Note: In Next.js 15, params is a Promise that must be awaited
export default async function EventDetail({ params }: { params: Promise<{ slug: string }> }) {
  // 1. AWAIT THE PARAMS to get the actual slug from the URL
  const resolvedParams = await params;
  const slug = resolvedParams.slug;
  
  // 2. Query Supabase using the resolved slug
  const { data: event, error } = await supabase
    .from('events')
    .select('*')
    .eq('slug', slug)
    .single();

  // 3. Handle errors or missing events
  if (error || !event) {
    console.error("Supabase Error:", error?.message);
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-32 pb-32">
      <div className="max-w-[1380px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left: Content Column */}
          <div className="flex-1">
            <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-12 shadow-lg bg-slate-200">
              <Image 
                src={event.image_url || '/education.jpg'} 
                alt={event.title} 
                fill 
                className="object-cover" 
                priority
              />
            </div>
            <h1 className="font-['Zodiak'] text-[48px] md:text-[64px] font-bold text-[#19474E] leading-tight mb-8">
                {event.title}
            </h1>
            <div className="text-lg text-[#5D6A6A] leading-relaxed max-w-none space-y-6">
              {/* Splitting text into paragraphs if needed */}
              {(event.full_description || event.short_description)?.split('\n\n').map((para: string, i: number) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Right: Info & Registration Sidebar */}
          <aside className="w-full lg:w-[450px]">
            <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 sticky top-32">
              <div className="mb-8 pb-8 border-b border-slate-100">
                <h4 className="text-xs font-bold text-[#A1B3B2] uppercase tracking-widest mb-4">Event Details</h4>
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Date</span>
                    <span className="text-[#19474E] font-bold">{event.date}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Time</span>
                    <span className="text-[#19474E] font-bold">{event.time || 'TBD'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-500 font-medium">Location</span>
                    <span className="text-[#19474E] font-bold">{event.location}</span>
                  </div>
                  {event.capacity && (
                    <div className="flex justify-between items-center">
                      <span className="text-slate-500 font-medium">Capacity</span>
                      <span className="text-[#19474E] font-bold">{event.capacity} seats</span>
                    </div>
                  )}
                </div>
              </div>

              {/* The Interactive Registration Form */}
              <EventRegistrationForm eventId={event.id} eventTitle={event.title} />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}