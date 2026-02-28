"use client";
import { useState } from 'react';
import Image from 'next/image';

export default function DonateHero() {
  // 1. Setup the state for the selected amount
  // Replace the VARIANT_IDs below with your actual IDs from Lemon Squeezy
  const donationOptions = [
    { amount: 25, id: '1353806' },
    { amount: 50, id: '1353813' },
    { amount: 100, id: '1353814' },
  ];

  const [selectedOption, setSelectedOption] = useState(donationOptions[2]); // Default to $100

  // 2. Generate the dynamic checkout link
  const checkoutUrl = `https://baronsdigital.lemonsqueezy.com/checkout/buy/058f124c-6673-4af2-b1fa-db2cc6ff3c9b${selectedOption.id}?embed=1`;

  return (
    <section className="relative min-h-[800px] w-full flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[#19474E]">
        <Image 
          src="/forest-donation.jpg" 
          alt="Reforestation"
          fill
          className="object-cover opacity-40"
        />
      </div>

      <div className="max-w-[1380px] mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          <div className="w-full lg:w-[577px] text-white">
            <h1 className="text-5xl md:text-[56px] font-bold leading-[1.2] mb-6 tracking-tight">
              Support our environmental mission
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
              Your contribution directly funds tree planting in Morogoro and supports our Community Learning Centres in East Africa.
            </p>
          </div>

          {/* Donation Card */}
          <div className="w-full max-w-[575px] bg-white rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-2xl font-bold text-[#19474E]">Choose an amount</h3>
              <p className="text-[#5D6A6A]">100% of your donation goes to field operations.</p>
            </div>

            {/* Amount Selection Grid */}
            <div className="grid grid-cols-3 gap-4">
              {donationOptions.map((option) => (
                <button
                  key={option.amount}
                  onClick={() => setSelectedOption(option)}
                  className={`h-16 rounded-xl border-2 font-bold text-lg transition-all ${
                    selectedOption.amount === option.amount
                      ? "border-[#166534] bg-[#F1F5F9] text-[#166534]"
                      : "border-slate-100 text-slate-500 hover:border-slate-300"
                  }`}
                >
                  ${option.amount}
                </button>
              ))}
            </div>

            {/* The Dynamic Button */}
            <div className="flex flex-col gap-4">
              <a 
                href={checkoutUrl}
                target="_blank"
                className="w-full h-[70px] bg-[#166534] text-white flex items-center justify-center font-bold text-xl rounded-full shadow-lg hover:bg-[#114f29] transition-all hover:-translate-y-1"
              >
                Donate ${selectedOption.amount} Now
              </a>
              <p className="text-center text-sm text-slate-400">
                Secure checkout powered by Lemon Squeezy
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}