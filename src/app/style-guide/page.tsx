"use client";

import { useState } from 'react';

export default function StyleGuide() {
  const [activeTab, setActiveTab] = useState('Typography');

  const tabs = ['Typography', 'Colors', 'Buttons', 'Inputs', 'Components'];

  return (
    <main className="min-h-screen bg-background pt-28 pb-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div className="mb-16 pb-12 border-b border-border">
          <p className="eyebrow mb-4">Global Environmental Alliance</p>
          <h1 className="font-display font-semibold text-teal leading-none tracking-tightest mb-5"
            style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)' }}
          >
            Design System
          </h1>
          <p className="lead max-w-2xl">
            Our visual language. A complete reference to ensure consistency, clarity,
            and harmony across every design element of Verdant Earth.
          </p>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="flex gap-0 border-b border-border mb-12 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-5 text-[0.7rem] tracking-[0.18em] uppercase font-medium transition-all whitespace-nowrap border-b-2 -mb-px ${
                activeTab === tab
                  ? "text-teal border-teal"
                  : "text-muted border-transparent hover:text-ink"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ── Tab Content ── */}
        <div className="py-8">

          {/* ─── TYPOGRAPHY ─── */}
          {activeTab === 'Typography' && (
            <div className="space-y-16">

              {/* Fonts */}
              <section>
                <p className="eyebrow mb-8">Typefaces</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-surface border border-border rounded-lg p-8">
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-4">Display — Cormorant Garamond</p>
                    <p className="font-display text-5xl font-semibold text-teal leading-none mb-3">Aa Bb Cc</p>
                    <p className="font-display text-lg text-muted font-normal">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789</p>
                    <p className="text-[0.65rem] tracking-wider text-faint mt-4 uppercase">Headings · Hero · Wordmark · Quotes · Card Titles</p>
                  </div>
                  <div className="bg-surface border border-border rounded-lg p-8">
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-4">Body — DM Sans</p>
                    <p className="font-sans text-5xl font-light text-teal leading-none mb-3">Aa Bb Cc</p>
                    <p className="font-sans text-lg text-muted font-light">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br />abcdefghijklmnopqrstuvwxyz<br />0123456789</p>
                    <p className="text-[0.65rem] tracking-wider text-faint mt-4 uppercase">Body · Labels · Navigation · Buttons · Captions</p>
                  </div>
                </div>
              </section>

              {/* Type Scale */}
              <section>
                <p className="eyebrow mb-8">Type Scale</p>
                <div className="space-y-0">

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end border-b border-border py-8 gap-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-3">Hero — Cormorant Garamond 600</p>
                      <h1 className="font-display font-semibold text-teal leading-none tracking-tightest"
                        style={{ fontSize: 'clamp(3rem, 7vw, 6rem)' }}>
                        Protect What Matters
                      </h1>
                    </div>
                    <p className="text-xs text-muted font-mono whitespace-nowrap">clamp(3rem,8vw,7.5rem) · lh 0.92 · tracking -0.03em</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end border-b border-border py-8 gap-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-3">H2 Section Heading — Cormorant 600</p>
                      <h2 className="section-heading">Our Measurable Impact</h2>
                    </div>
                    <p className="text-xs text-muted font-mono whitespace-nowrap">clamp(2rem,4vw,3rem) · lh 1.05 · tracking -0.015em</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end border-b border-border py-8 gap-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-3">H3 Card Title — Cormorant 600</p>
                      <h3 className="font-display text-2xl font-semibold text-teal">Fair Carbon 4 Us</h3>
                    </div>
                    <p className="text-xs text-muted font-mono whitespace-nowrap">1.5rem · lh 1.1</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end border-b border-border py-8 gap-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-3">Eyebrow Label — DM Sans 500</p>
                      <p className="eyebrow">Our Initiatives</p>
                    </div>
                    <p className="text-xs text-muted font-mono whitespace-nowrap">0.6875rem · tracking 0.2em · UPPERCASE · Sage</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end border-b border-border py-8 gap-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-3">Lead / Intro — DM Sans 300</p>
                      <p className="lead max-w-xl">A global alliance dedicated to preserving biodiversity, combating climate change, and ensuring a sustainable future for all life on Earth.</p>
                    </div>
                    <p className="text-xs text-muted font-mono whitespace-nowrap">1.125rem · lh 1.7 · weight 300</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end border-b border-border py-8 gap-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-3">Body — DM Sans 400</p>
                      <p className="text-sm text-ink leading-relaxed max-w-xl">We fight to restore ecosystems, protect wildlife, and ensure a livable planet for generations to come. Every action we take today shapes the world our children will inherit.</p>
                    </div>
                    <p className="text-xs text-muted font-mono whitespace-nowrap">0.9375rem · lh 1.65 · Ink</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-end py-8 gap-4">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-3">Caption / Meta — DM Sans 400</p>
                      <p className="text-xs text-muted">Morogoro, Tanzania · Updated March 2026</p>
                    </div>
                    <p className="text-xs text-muted font-mono whitespace-nowrap">0.8125rem · Muted</p>
                  </div>

                </div>
              </section>
            </div>
          )}

          {/* ─── COLORS ─── */}
          {activeTab === 'Colors' && (
            <div className="space-y-12">

              <section>
                <p className="eyebrow mb-8">Brand Colours</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ColorCard name="Teal" hex="#19474E" cssVar="--color-teal" role="Primary · Headings · Dark BG" />
                  <ColorCard name="Teal Dark" hex="#0f2d32" cssVar="--color-teal-dark" role="Hover · Footer" />
                  <ColorCard name="Teal Mid" hex="#235a63" cssVar="--color-teal-mid" role="Borders · Rings" />
                  <ColorCard name="Green" hex="#166534" cssVar="--color-green" role="Accent · CTAs" />
                  <ColorCard name="Green Light" hex="#22863a" cssVar="--color-green-light" role="Green Hover" />
                  <ColorCard name="Sage" hex="#4a7c59" cssVar="--color-sage" role="Eyebrows · Labels · Tags" />
                </div>
              </section>

              <section>
                <p className="eyebrow mb-8">Neutrals</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <ColorCard name="Background" hex="#F7F7F5" cssVar="--color-background" role="Page BG" light />
                  <ColorCard name="Surface" hex="#FFFFFF" cssVar="--color-surface" role="Cards · Panels" light />
                  <ColorCard name="Surface Alt" hex="#EFF5F0" cssVar="--color-surface-alt" role="Tinted Panels" light />
                  <ColorCard name="Border" hex="#DDE5DE" cssVar="--color-border" role="Dividers · Outlines" light />
                  <ColorCard name="Ink" hex="#1a2e1e" cssVar="--color-ink" role="Body Text" />
                  <ColorCard name="Muted" hex="#5D6A62" cssVar="--color-muted" role="Secondary Text" />
                  <ColorCard name="Faint" hex="#8E9E91" cssVar="--color-faint" role="Placeholders" />
                </div>
              </section>
            </div>
          )}

          {/* ─── BUTTONS ─── */}
          {activeTab === 'Buttons' && (
            <div className="space-y-12">

              <section>
                <p className="eyebrow mb-8">Button Variants</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  <div className="bg-surface border border-border rounded-lg p-8 flex flex-col gap-6">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-1">Primary</p>
                      <p className="text-xs text-faint mb-5">Teal fill · Main CTAs · Light backgrounds</p>
                    </div>
                    <button className="btn btn-primary">Join the Mission ↗</button>
                    <div className="text-[0.65rem] font-mono text-faint space-y-1">
                      <p>bg: #19474E → #0f2d32</p>
                      <p>text: #fff · radius: 9999px</p>
                      <p>size: 0.6875rem · tracking: 0.18em</p>
                    </div>
                  </div>

                  <div className="bg-surface border border-border rounded-lg p-8 flex flex-col gap-6">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted mb-1">Secondary</p>
                      <p className="text-xs text-faint mb-5">Teal outline · Supporting actions · Light backgrounds</p>
                    </div>
                    <button className="btn btn-secondary">View All Projects</button>
                    <div className="text-[0.65rem] font-mono text-faint space-y-1">
                      <p>border: #19474E → fill on hover</p>
                      <p>text: #19474E → #fff on hover</p>
                      <p>radius: 9999px</p>
                    </div>
                  </div>

                  <div className="bg-teal-dark rounded-lg p-8 flex flex-col gap-6">
                    <div>
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40 mb-1">Ghost</p>
                      <p className="text-xs text-white/30 mb-5">White outline · Hero · Events · Newsletter · Dark backgrounds only</p>
                    </div>
                    <button className="btn btn-ghost">Explore Our Work</button>
                    <div className="text-[0.65rem] font-mono text-white/30 space-y-1">
                      <p>border: rgba(255,255,255,0.45)</p>
                      <p>text: #fff · radius: 9999px</p>
                      <p>hover: bg rgba(255,255,255,0.1)</p>
                    </div>
                  </div>

                </div>
              </section>

              <section>
                <p className="eyebrow mb-8">Rules</p>
                <div className="bg-surface border border-border rounded-lg p-8 space-y-3">
                  {[
                    "All buttons use border-radius: 9999px (pill). No square corners, ever.",
                    "Font: DM Sans 500 · Size: 0.6875rem (11px) · Letter-spacing: 0.18em · ALL CAPS",
                    "Padding: 0.875rem 1.75rem (standard) · 0.6rem 1.25rem (small .btn-sm)",
                    "Hover state always lifts the button: translateY(-1px)",
                    "btn-ghost is ONLY used on dark/image backgrounds (hero, events, newsletter)",
                    "Never use rounded-md, rounded-lg, or custom padding on buttons — use .btn classes",
                  ].map((rule, i) => (
                    <div key={i} className="flex gap-3 items-start text-sm text-ink">
                      <span className="text-sage mt-0.5 flex-shrink-0">→</span>
                      <span className="font-light">{rule}</span>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )}

          {/* ─── INPUTS ─── */}
          {activeTab === 'Inputs' && (
            <div className="space-y-12 max-w-xl">

              <section>
                <p className="eyebrow mb-8">Form Inputs</p>
                <div className="space-y-8">

                  <div className="bg-surface border border-border rounded-lg p-8 flex flex-col gap-3">
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted">Standard Input</p>
                    <p className="text-xs text-faint mb-2">Used in contact forms, search, data entry</p>
                    <input
                      type="text"
                      placeholder="Placeholder text"
                      className="w-full h-[52px] px-5 rounded-lg border border-border bg-background text-ink placeholder-faint text-sm outline-none focus:border-teal transition-colors duration-200"
                    />
                    <p className="text-[0.65rem] font-mono text-faint mt-1">height: 52px · rounded-lg (8px) · border: --color-border · focus: --color-teal</p>
                  </div>

                  <div className="bg-surface border border-border rounded-lg p-8 flex flex-col gap-3">
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted">Standard Textarea</p>
                    <textarea
                      placeholder="Your message..."
                      rows={4}
                      className="w-full px-5 py-4 rounded-lg border border-border bg-background text-ink placeholder-faint text-sm outline-none focus:border-teal transition-colors duration-200 resize-none"
                    />
                    <p className="text-[0.65rem] font-mono text-faint mt-1">Same treatment as input · rounded-lg · resize: none</p>
                  </div>

                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-teal-dark p-8 flex flex-col gap-3">
                      <p className="text-[0.65rem] tracking-[0.2em] uppercase text-white/40">Glass Input</p>
                      <p className="text-xs text-white/30 mb-2">Hero forms, Newsletter — dark/image backgrounds only</p>
                      <input
                        type="email"
                        placeholder="Your email address"
                        className="w-full h-[52px] px-6 rounded-pill bg-white/15 border border-white/20 text-white placeholder-white/45 text-sm outline-none focus:bg-white/20 focus:border-white/40 transition-all duration-200"
                      />
                      <p className="text-[0.65rem] font-mono text-white/25 mt-1">rounded-pill · bg white/15 · border white/20 · focus bg white/20</p>
                    </div>
                  </div>

                  <div className="bg-surface border border-border rounded-lg p-8 flex flex-col gap-3">
                    <p className="text-[0.65rem] tracking-[0.2em] uppercase text-muted">Label Style</p>
                    <div className="space-y-2">
                      <label className="block text-[0.65rem] tracking-[0.18em] uppercase font-medium text-ink">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Your full name"
                        className="w-full h-[52px] px-5 rounded-lg border border-border bg-background text-ink placeholder-faint text-sm outline-none focus:border-teal transition-colors duration-200"
                      />
                    </div>
                    <p className="text-[0.65rem] font-mono text-faint mt-1">Label: 0.65rem · tracking 0.18em · uppercase · font-medium · --color-ink</p>
                  </div>

                </div>
              </section>
            </div>
          )}

          {/* ─── COMPONENTS ─── */}
          {activeTab === 'Components' && (
            <div className="space-y-16">

              {/* Cards */}
              <section>
                <p className="eyebrow mb-8">Cards</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                  <div className="card p-6 flex flex-col gap-3">
                    <span className="text-[0.65rem] tracking-[0.18em] uppercase text-sage font-medium">Morogoro</span>
                    <h3 className="font-display text-xl font-semibold text-teal">Fair Carbon 4 Us</h3>
                    <p className="text-xs text-muted font-light leading-relaxed">Managing massive tree-planting campaigns and promoting fair carbon practices in Morogoro.</p>
                    <a href="#" className="text-[0.7rem] tracking-[0.15em] uppercase font-medium text-green mt-2 inline-flex items-center gap-1.5 hover:gap-2.5 transition-all">
                      Read More →
                    </a>
                  </div>

                  <div className="bg-teal rounded-lg p-6 flex flex-col justify-between h-[220px]">
                    <div className="flex justify-between items-start">
                      <span className="font-display text-3xl font-semibold text-white/20">01</span>
                      <div className="w-8 h-8 rounded-pill border border-white/25 flex items-center justify-center text-white">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white mb-1">Community First</h3>
                      <p className="text-xs text-white/60 font-light leading-relaxed">We empower local populations with the knowledge to manage ecosystems sustainably.</p>
                    </div>
                  </div>

                  <div className="card p-6 flex flex-col justify-between h-[220px]">
                    <div className="flex justify-between items-start">
                      <span className="font-display text-3xl font-semibold text-border-dark">02</span>
                      <div className="w-8 h-8 rounded-pill border border-border flex items-center justify-center text-muted">
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-teal mb-1">Scientific Approach</h3>
                      <p className="text-xs text-muted font-light leading-relaxed">Initiatives backed by rigorous research and measurable environmental outcomes.</p>
                    </div>
                  </div>

                </div>
              </section>

              {/* Spacing */}
              <section>
                <p className="eyebrow mb-8">Spacing & Layout</p>
                <div className="bg-surface border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left text-[0.65rem] tracking-[0.15em] uppercase text-muted px-6 py-4 font-medium">Context</th>
                        <th className="text-left text-[0.65rem] tracking-[0.15em] uppercase text-muted px-6 py-4 font-medium">Value</th>
                        <th className="text-left text-[0.65rem] tracking-[0.15em] uppercase text-muted px-6 py-4 font-medium">Tailwind</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {[
                        ['Section padding (standard)',   '6rem / 96px',  'py-24'],
                        ['Section padding (small)',      '4rem / 64px',  'py-16'],
                        ['Container max-width',         '1280px',       'max-w-[1280px] mx-auto px-6 lg:px-8'],
                        ['Card inner padding',          '1.5rem / 24px','p-6'],
                        ['Eyebrow → heading gap',       '0.75rem',      'mb-3'],
                        ['Heading → body gap',          '1rem',         'mb-4'],
                        ['Card border radius',          '8px',          'rounded-lg'],
                        ['Button border radius',        '9999px',       'rounded-pill'],
                        ['Tag border radius',           '4px',          'rounded-sm'],
                      ].map(([ctx, val, tw]) => (
                        <tr key={ctx} className="hover:bg-surface-alt transition-colors">
                          <td className="px-6 py-3.5 text-ink font-light text-xs">{ctx}</td>
                          <td className="px-6 py-3.5 text-muted text-xs font-mono">{val}</td>
                          <td className="px-6 py-3.5 text-green text-xs font-mono">{tw}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Border radius visual */}
              <section>
                <p className="eyebrow mb-8">Border Radius Scale</p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { label: 'sm · 4px',   r: '4px',    use: 'Tags · Badges' },
                    { label: 'md · 8px',   r: '8px',    use: 'Cards · Inputs' },
                    { label: 'lg · 12px',  r: '12px',   use: 'Large Cards' },
                    { label: 'xl · 16px',  r: '16px',   use: 'Modals' },
                    { label: 'pill',       r: '9999px', use: 'Buttons · Badges' },
                  ].map(({ label, r, use }) => (
                    <div key={label} className="flex flex-col items-center gap-3">
                      <div
                        className="w-16 h-16 bg-teal"
                        style={{ borderRadius: r }}
                      />
                      <div className="text-center">
                        <p className="text-[0.65rem] font-mono text-ink">{label}</p>
                        <p className="text-[0.6rem] text-muted">{use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

            </div>
          )}

        </div>
      </div>
    </main>
  );
}

function ColorCard({
  name, hex, cssVar, role, light = false
}: {
  name: string;
  hex: string;
  cssVar: string;
  role: string;
  light?: boolean;
}) {
  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-sm">
      <div className="h-24 w-full" style={{ backgroundColor: hex }} />
      <div className="p-4">
        <h4 className="font-medium text-ink text-sm mb-0.5">{name}</h4>
        <p className="text-[0.65rem] font-mono text-muted mb-0.5">{hex}</p>
        <p className="text-[0.6rem] font-mono text-faint mb-1">{cssVar}</p>
        <p className="text-[0.6rem] text-faint">{role}</p>
      </div>
    </div>
  );
}