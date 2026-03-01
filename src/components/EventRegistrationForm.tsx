"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function EventRegistrationForm({ eventId, eventTitle }: { eventId: string, eventTitle: string }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    
    const { error } = await supabase.from('event_registrations').insert({
      event_id: eventId,
      full_name: formData.get('full_name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    });

    setLoading(false);
    if (!error) setSuccess(true);
  }

  if (success) return (
    <div className="text-center py-10 bg-[#DAF3E6] rounded-2xl">
      <h3 className="text-[#166534] font-bold text-xl mb-2">Registration Complete!</h3>
      <p className="text-[#166534]/80">We've sent the details for {eventTitle} to your email.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h3 className="text-xl font-bold text-[#19474E] mb-2">Reserve Your Spot</h3>
      <input name="full_name" type="text" placeholder="Full Name" required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#166534]" />
      <input name="email" type="email" placeholder="Email Address" required className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#166534]" />
      <input name="phone" type="tel" placeholder="Phone Number (Optional)" className="w-full p-4 bg-slate-50 rounded-xl border border-slate-200 outline-none focus:border-[#166534]" />
      <button disabled={loading} className="w-full py-4 bg-[#166534] text-white font-bold rounded-xl hover:bg-[#114f29] transition-colors mt-2">
        {loading ? 'Processing...' : 'Register for Event'}
      </button>
    </form>
  );
}