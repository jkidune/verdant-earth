import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Event {
  id: string;
  title: string;
  date: string;
  link: string | null;
}

export default async function Events() {
  // Fetch live data from Supabase, ordered by date or creation
  const { data: events, error } = await supabase
    .from('events')
    .select('*')
    .limit(4);

  if (error) {
    console.error('Error fetching events:', error.message);
  }

  const fallbackEvents: Event[] = [
    { id: '1', title: 'Community Reforestation Drive', date: 'Oct 14', link: '#' },
    { id: '2', title: 'Sustainable Agriculture Seminar', date: 'Nov 02', link: '#' },
    { id: '3', title: 'Climate Policy Roundtable', date: 'Nov 18', link: '#' },
    { id: '4', title: 'Annual Earth Guardians Summit', date: 'Dec 05', link: '#' },
  ];

  const displayEvents = events && events.length > 0 ? events : fallbackEvents;

  return (
    <section className="relative w-full flex flex-col items-center py-24 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Make sure to add 'forest-bg.jpg' to your public folder! */}
        <Image 
          src="/forest-bg.jpg" 
          alt="Dense forest canopy"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Dark Green Overlay matching your Figma specs: rgba(22, 101, 52, 0.8) */}
      <div className="absolute inset-0 bg-green-800/80 z-10"></div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl px-6 sm:px-8 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Heading & Button */}
        <div className="flex flex-col gap-6 flex-1 w-full text-white">
          <span className="text-base font-semibold tracking-wide">
            // Events
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
            Earth Guardians Summit: Innovations for a Sustainable Future
          </h2>
          <div>
            <Link 
              href="/events" 
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-slate-900 font-semibold text-sm rounded-full transition-transform duration-300 hover:scale-105 shadow-lg"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Event List */}
        <div className="flex flex-col flex-1 w-full">
          {displayEvents.map((event) => (
            <Link 
              href={event.link || '#'} 
              key={event.id}
              className="group flex flex-row justify-between items-center py-5 border-b border-white/30 transition-all duration-300 hover:bg-white/5 hover:pl-4 rounded-sm"
            >
              <div className="flex items-center gap-4">
                {/* Lively Hover Arrow */}
                <svg 
                  className="w-5 h-5 text-emerald-400 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span className="text-lg font-normal text-white">
                  {event.title}
                </span>
              </div>
              <span className="text-base font-semibold text-white whitespace-nowrap ml-4">
                {event.date}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}