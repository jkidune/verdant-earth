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
      // We send default strings for 'name' and 'message' to satisfy your Supabase 
      // table requirements, while keeping the UI clean with just an email input.
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
      setEmail(''); // Clear the input on success
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error: any) {
      console.error('Submission error:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center py-32 sm:py-36 px-6 sm:px-8 overflow-hidden">
      
      {/* Background Image: A lush green field under a blue sky */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/field-bg.jpg" // Make sure to add this image to your public folder!
          alt="Lush green field"
          fill
          className="object-cover object-center"
        />
      </div>

      {/* Dark Overlay (rgba(0,0,0,0.5)) */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col items-center gap-8">
        
        {/* Massive 72px Headline */}
        <h2 className="text-5xl md:text-7xl font-bold text-white text-center leading-tight tracking-tight max-w-4xl">
          Join the Movement
        </h2>

        {/* Form Area */}
        <div className="w-full flex flex-col items-center gap-4">
          <form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center gap-2 w-full max-w-lg justify-center"
          >
            {/* Glassmorphism Email Input */}
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              placeholder="Your email address"
              className="w-full sm:w-[324px] h-[60px] px-6 rounded-full bg-white/20 border border-transparent text-white placeholder-white/70 outline-none focus:bg-white/30 focus:border-white/50 focus:ring-2 focus:ring-green-500/50 transition-all duration-300 disabled:opacity-50"
            />
            
            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="w-full sm:w-[153px] h-[60px] bg-green-800 hover:bg-green-700 text-white font-semibold text-lg rounded-full transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {status === 'loading' ? (
                // Simple loading spinner
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : status === 'success' ? (
                'Joined!'
              ) : (
                'Join Now'
              )}
            </button>
          </form>

          {/* Status Messages */}
          {status === 'success' && (
            <p className="text-green-300 text-sm font-medium animate-pulse">
              Thank you for joining us! We will be in touch.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-400 text-sm font-medium">
              {errorMessage}
            </p>
          )}
        </div>

      </div>
    </section>
  );
}