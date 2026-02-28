"use client";
import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: `Subject: ${formData.get('subject')} | Phone: ${formData.get('phone')} | Message: ${formData.get('message')}`,
    };

    const { error } = await supabase.from('contact_submissions').insert([data]);

    setLoading(false);
    if (!error) {
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }
  };

  return (
    <div className="max-w-[842px] mx-auto bg-white rounded-2xl shadow-xl p-8 md:p-16">
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Name */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-[#19474E] uppercase">What's your name?</label>
          <input name="name" required placeholder="Full name" className="h-[70px] px-8 rounded-full border border-[#DAE5E4] outline-none focus:border-[#166534] transition-all" />
        </div>
        
        {/* Email */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-[#19474E] uppercase">Your email address?</label>
          <input name="email" type="email" required placeholder="Email address" className="h-[70px] px-8 rounded-full border border-[#DAE5E4] outline-none focus:border-[#166534] transition-all" />
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-[#19474E] uppercase">Phone number?</label>
          <input name="phone" placeholder="Phone number" className="h-[70px] px-8 rounded-full border border-[#DAE5E4] outline-none focus:border-[#166534] transition-all" />
        </div>

        {/* Subject */}
        <div className="flex flex-col gap-3">
          <label className="text-sm font-bold text-[#19474E] uppercase">Email subject</label>
          <input name="subject" placeholder="Subject" className="h-[70px] px-8 rounded-full border border-[#DAE5E4] outline-none focus:border-[#166534] transition-all" />
        </div>

        {/* Message */}
        <div className="md:col-span-2 flex flex-col gap-3">
          <label className="text-sm font-bold text-[#19474E] uppercase">What's your message?</label>
          <textarea name="message" required rows={5} placeholder="Enter your message..." className="p-8 rounded-2xl border border-[#DAE5E4] outline-none focus:border-[#166534] transition-all resize-none" />
        </div>

        <button type="submit" disabled={loading} className="w-full md:w-[209px] h-[70px] bg-[#166534] text-white font-bold rounded-full hover:bg-[#114f29] transition-all disabled:opacity-50">
          {loading ? 'Sending...' : success ? 'Sent!' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}