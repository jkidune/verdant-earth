import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Event {
  id: string;
  title: string;
  date: string;
  slug: string;
}

export default async function Events() {
  const { data: events, error } = await supabase
    .from('events')
    .select('id, title, date, slug')
    .limit(4);

  if (error) {
    console.error('Error fetching events:', error.message);
  }

  const fallbackEvents: Event[] = [
    { id: '1', title: 'Community Reforestation Drive', date: 'Oct 14', slug: 'reforestation-drive' },
    { id: '2', title: 'Sustainable Agriculture Seminar', date: 'Nov 02', slug: 'agriculture-seminar' },
    { id: '3', title: 'Climate Policy Roundtable', date: 'Nov 18', slug: 'policy-roundtable' },
    { id: '4', title: 'Annual Earth Guardians Summit', date: 'Dec 05', slug: 'earth-guardians-summit' },
  ];

  const displayEvents = events && events.length > 0 ? events : fallbackEvents;

  return (
    <section className="relative w-full flex flex-col items-center py-24 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/forest-bg.jpg" 
          alt="Dense forest canopy"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Teal dark overlay — consistent with hero */}
      <div className="absolute inset-0 bg-teal-dark/85 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1280px] px-6 sm:px-8 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left — Heading & CTA */}
        <div className="flex flex-col gap-5 flex-1 w-full text-white">
          <p className="eyebrow text-white/60" style={{ color: 'rgba(255,255,255,0.55)' }}>
            <span style={{ background: 'rgba(255,255,255,0.25)', height: '1px', display: 'inline-block', width: '2rem', marginRight: '0.75rem', verticalAlign: 'middle' }} />
            Upcoming Events
          </p>
          <h2 className="font-display text-4xl lg:text-6xl font-semibold leading-[1] tracking-tight text-white">
            Earth Guardians Summit: Innovations for a Sustainable Future
          </h2>
          <div>
            <Link 
              href="/events" 
              className="btn btn-ghost"
            >
              View All Events
            </Link>
          </div>
        </div>

        {/* Right — Event list */}
        <div className="flex flex-col flex-1 w-full bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-8 border border-white/10">
          {displayEvents.map((event) => (
            <Link 
              href={`/events/${event.slug}`} 
              key={event.id}
              className="group flex flex-row justify-between items-center py-5 border-b border-white/15 last:border-0 transition-all duration-300 hover:pl-3"
            >
              <div className="flex items-center gap-3">
                <svg 
                  className="w-4 h-4 text-sage opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span className="text-base font-normal text-white/85 group-hover:text-white transition-colors font-light">
                  {event.title}
                </span>
              </div>
              {/* Date pill */}
              <span className="font-display text-base font-semibold text-white bg-white/10 border border-white/15 px-4 py-1 rounded-pill whitespace-nowrap ml-4">
                {event.date}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}