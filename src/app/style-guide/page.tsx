"use client";

import { useState } from 'react';

export default function StyleGuide() {
  const [activeTab, setActiveTab] = useState('Typography');

  const tabs = ['Typography', 'Color', 'Button', 'Input'];

  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-[1380px] mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-[80px] font-medium leading-none tracking-[-4px] uppercase text-[#141414] mb-6">
            Style Guide
          </h1>
          <p className="text-xl text-slate-500 max-w-2xl">
            Our visual language. A complete reference to ensure consistency, clarity, and harmony across every design element of Verdant Earth.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-8 border-b border-slate-200 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-lg font-medium transition-all ${
                activeTab === tab 
                ? "text-[#166534] border-b-2 border-[#166534]" 
                : "text-slate-400 hover:text-slate-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="py-10">
          
          {/* Typography Tab */}
          {activeTab === 'Typography' && (
            <div className="space-y-16">
              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">Headings</h3>
                <div className="space-y-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 items-end border-b border-slate-100 pb-8">
                    <h1 className="text-[100px] font-medium leading-none tracking-[-4px] uppercase text-[#141414]">H1 Hero</h1>
                    <p className="text-slate-400 text-sm">Size: 100px | Weight: 500 | Tracking: -4px</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-end border-b border-slate-100 pb-8">
                    <h2 className="text-[60px] font-bold leading-none tracking-[-1.5px] text-[#141414]">H2 Section Title</h2>
                    <p className="text-slate-400 text-sm">Size: 60px | Weight: 700 | Tracking: -1.5px</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 items-end border-b border-slate-100 pb-8">
                    <h3 className="text-[40px] font-medium leading-none tracking-[-2px] text-[#141414]">H3 Sub-headline</h3>
                    <p className="text-slate-400 text-sm">Size: 40px | Weight: 500 | Tracking: -2px</p>
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-10">Body Text</h3>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <p className="text-lg leading-[160%] text-[#555555]">Body Large: High-readability paragraph style for story and about sections. Used for long-form content.</p>
                    </div>
                    <p className="text-slate-400 text-sm self-center">Size: 18px | Line-Height: 160% | Color: #555555</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div>
                      <p className="text-base leading-[140%] text-slate-600">Body Medium: Standard paragraph text used for descriptions and general interface items.</p>
                    </div>
                    <p className="text-slate-400 text-sm self-center">Size: 16px | Line-Height: 140% | Color: #475569</p>
                  </div>
                </div>
              </section>
            </div>
          )}

          {/* Color Tab */}
          {activeTab === 'Color' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ColorCard name="Deep Verdant" hex="#166534" description="Primary Brand Color" />
              <ColorCard name="Slate Dark" hex="#141414" description="Primary Heading Color" />
              <ColorCard name="Faded Green" hex="#F1F5F9" description="Section Backgrounds" />
              <ColorCard name="Soft Text" hex="#555555" description="Main Body Text" />
              <ColorCard name="Border Gray" hex="#E2E8F0" description="Dividers & Borders" />
              <ColorCard name="Accent Orange" hex="#FB7950" description="Secondary Action Color" />
            </div>
          )}

          {/* Button Tab */}
          {activeTab === 'Button' && (
            <div className="space-y-12">
              <div className="flex flex-wrap items-center gap-10">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-400 uppercase">Primary Button</p>
                  <button className="px-8 py-4 bg-[#166534] text-white text-lg font-semibold rounded-full hover:bg-[#114f29] transition-all shadow-lg hover:-translate-y-1">
                    Join the Mission
                  </button>
                </div>
                <div className="space-y-4">
                  <p className="text-sm font-bold text-slate-400 uppercase">Secondary Pill</p>
                  <button className="px-6 py-3 bg-white border border-slate-200 text-slate-900 font-semibold text-sm rounded-full hover:bg-slate-50 transition-all">
                    View All
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Input Tab */}
          {activeTab === 'Input' && (
            <div className="max-w-md space-y-8">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 uppercase">Standard Input</label>
                <input 
                  type="text" 
                  placeholder="Placeholder text"
                  className="w-full h-[60px] px-6 rounded-lg border border-slate-200 focus:border-[#166534] outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 uppercase">Glass Input (Hero/Newsletter)</label>
                <div className="bg-slate-900 p-10 rounded-xl">
                  <input 
                    type="text" 
                    placeholder="Your email address"
                    className="w-full h-[60px] px-6 rounded-full bg-white/20 border border-transparent text-white placeholder-white/70 outline-none focus:bg-white/30 transition-all"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

function ColorCard({ name, hex, description }: { name: string, hex: string, description: string }) {
  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden shadow-sm">
      <div className="h-32 w-full" style={{ backgroundColor: hex }}></div>
      <div className="p-5">
        <h4 className="font-bold text-[#141414]">{name}</h4>
        <p className="text-sm text-slate-500 mb-2 font-mono">{hex}</p>
        <p className="text-xs text-slate-400">{description}</p>
      </div>
    </div>
  );
}