"use client";
import { useState } from 'react';

const faqs = [
  { q: "How does your charity work?", a: "We work directly with Community Learning Centres to implement sustainable agricultural practices and reforestation projects." },
  { q: "Are you open for partnerships?", a: "Yes, we actively seek international and local partners to expand our impact across the continent." },
  { q: "How do you choose projects?", a: "Projects are selected based on environmental urgency and community readiness for sustainable growth." }
];

export default function ContactFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-[#EBF3EC] py-24 px-6">
      <div className="max-w-[1224px] mx-auto">
        <h2 className="text-4xl font-bold text-[#19474E] text-center mb-16">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-[#19474E]">{faq.q}</h3>
                <div className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${open === i ? 'bg-[#166534] text-white' : 'bg-slate-100 text-[#19474E]'}`}>
                  {open === i ? '-' : '+'}
                </div>
              </div>
              {open === i && <p className="mt-4 text-slate-600 leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}