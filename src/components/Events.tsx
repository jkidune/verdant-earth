import Image from 'next/image';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

// 1. Updated Interface to include the slug
interface Event {
  id: string;
  title: string;
  date: string;
  slug: string; // Changed from link to slug
}

export default async function Events() {
  // Fetch live data from Supabase, ensuring we get the slug
  const { data: events, error } = await supabase
    .from('events')
    .select('id, title, date, slug')
    .limit(4);

  if (error) {
    console.error('Error fetching events:', error.message);
  }

  // 2. Updated Fallback data with valid slugs
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

      {/* Dark Green Overlay */}
      <div className="absolute inset-0 bg-green-800/80 z-10"></div>

      {/* Main Content Container */}
      <div className="relative z-20 w-full max-w-7xl px-6 sm:px-8 flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Column: Heading & Button */}
        <div className="flex flex-col gap-6 flex-1 w-full text-white">
          <span className="text-base font-semibold tracking-wide uppercase opacity-80">
            // Upcoming Events
          </span>
          <h2 className="font-['Zodiak'] text-4xl lg:text-6xl font-bold leading-tight tracking-tight">
            Earth Guardians Summit: Innovations for a Sustainable Future
          </h2>
          <div>
            <Link 
              href="/events" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-900 font-bold text-sm rounded-full transition-all duration-300 hover:scale-105 hover:bg-emerald-50 shadow-xl"
            >
              View All Events
            </Link>
          </div>
        </div>

        {/* Right Column: Interactive Event List */}
        <div className="flex flex-col flex-1 w-full bg-white/5 backdrop-blur-sm rounded-2xl p-4 md:p-8 border border-white/10">
          {displayEvents.map((event) => (
            <Link 
              // 3. UPDATED LINK: Points to the dynamic individual event page
              href={`/events/${event.slug}`} 
              key={event.id}
              className="group flex flex-row justify-between items-center py-6 border-b border-white/20 last:border-0 transition-all duration-300 hover:pl-4"
            >
              <div className="flex items-center gap-4">
                {/* Lively Hover Arrow */}
                <svg 
                  className="w-5 h-5 text-emerald-400 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-400 ease-out" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
                <span className="text-xl font-medium text-white group-hover:text-emerald-300 transition-colors">
                  {event.title}
                </span>
              </div>
              <span className="text-base font-bold text-emerald-400 bg-white/10 px-4 py-1 rounded-full whitespace-nowrap ml-4">
                {event.date}
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}