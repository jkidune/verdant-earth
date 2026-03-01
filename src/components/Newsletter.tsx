"use client";

import { useState } from 'react';
import Image from 'next/image';
import { supabase } from '@/lib/supabase';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([
          { 
            email: email, 
            name: 'Newsletter Subscriber', 
            message: 'User signed up via the Join Now section.' 
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center py-32 sm:py-36 px-6 sm:px-8 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/field-bg.jpg"
          alt="Lush green field"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Teal-tinted overlay — consistent with hero + events */}
      <div className="absolute inset-0 bg-teal-dark/75 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[1280px] flex flex-col items-center gap-8">
        
        {/* Eyebrow */}
        <p className="eyebrow text-white/55" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <span style={{ background: 'rgba(255,255,255,0.25)', height: '1px', display: 'inline-block', width: '2rem', marginRight: '0.75rem', verticalAlign: 'middle' }} />
          Stay Connected
        </p>

        {/* Headline */}
        <h2 className="font-display text-5xl md:text-7xl font-semibold text-white text-center leading-[0.95] tracking-tight max-w-3xl">
          Join the Movement
        </h2>

        {/* Form */}
        <div className="w-full flex flex-col items-center gap-4">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-lg justify-center"
          >
            {/* Email input — glassmorphism */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              placeholder="Your email address"
              className="w-full sm:w-[320px] h-[56px] px-6 rounded-pill bg-white/15 border border-white/20 text-white placeholder-white/50 outline-none focus:bg-white/20 focus:border-white/40 transition-all duration-200 disabled:opacity-50 text-sm"
            />
            
            {/* Submit button */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="btn btn-primary h-[56px] w-full sm:w-auto disabled:opacity-50 disabled:hover:translate-y-0 flex items-center justify-center gap-2"
            >
              {status === 'loading' ? (
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : status === 'success' ? (
                'Joined! ✓'
              ) : (
                'Join Now'
              )}
            </button>
          </form>

          {/* Status messages */}
          {status === 'success' && (
            <p className="text-white/80 text-xs tracking-wide font-light animate-fade-in">
              Thank you for joining us! We will be in touch.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-300 text-xs tracking-wide font-light">
              {errorMessage}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}