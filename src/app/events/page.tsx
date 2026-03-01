import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import Image from 'next/image';

export const revalidate = 0;

export default async function EventsPage() {
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .order('date', { ascending: true });

  return (
    <main className="min-h-screen bg-[#F7F7F7] pt-32 pb-32">
      <section className="max-w-[1380px] mx-auto px-6 mb-20">
        <h1 className="font-['Zodiak'] text-[60px] md:text-[100px] font-medium leading-none tracking-[-4px] text-[#19474E] uppercase">
          Upcoming <br /> Events
        </h1>
      </section>

      <section className="max-w-[1380px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events?.map((event) => (
          <Link href={`/events/${event.slug}`} key={event.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all">
            <div className="relative h-64 w-full bg-[#DAF3E6]">
              <Image src={event.image_url || '/education.jpg'} alt={event.title} fill className="object-cover" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-[#166534] font-bold text-xs uppercase tracking-widest">{event.date}</span>
                <span className="text-slate-400 text-xs font-medium">{event.time}</span>
              </div>
              <h3 className="font-['Zodiak'] text-2xl font-bold text-[#19474E] mb-4 group-hover:text-[#166534] transition-colors">{event.title}</h3>
              <p className="text-[#5D6A6A] line-clamp-2 text-sm leading-relaxed mb-6">{event.short_description}</p>
              <span className="text-[#19474E] font-bold text-sm border-b-2 border-[#19474E]">Register Now →</span>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}