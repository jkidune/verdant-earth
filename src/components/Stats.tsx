export default function Stats() {
  const impactStats = [
    {
      id: 1,
      name: "Trees Planted",
      value: "2.5M+",
      description: "Restoring local ecosystems and fighting deforestation.",
    },
    {
      id: 2,
      name: "Farmers Trained",
      value: "15,000+",
      description: "Equipped with sustainable and organic farming practices.",
    },
    {
      id: 3,
      name: "Community Centers",
      value: "45+",
      description: "Hubs established for continuous adult learning and education.",
    },
    {
      id: 4,
      name: "Tons of Carbon Offset",
      value: "100k+",
      description: "Through fair carbon initiatives and conservation efforts.",
    }
  ];

  return (
    <section className="bg-surface py-16 sm:py-24 border-b border-border">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">

        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="eyebrow justify-center mb-3">Our Impact</p>
          <h2 className="section-heading mb-4">
            Our Measurable Impact
          </h2>
          <p className="lead text-base">
            Real change happens on the ground. Here is what we have achieved by working hand-in-hand with local communities.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-surface-alt rounded-lg p-8 text-center border border-border shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-card"
            >
              {/* Number — Cormorant Garamond, editorial */}
              <div className="font-display text-5xl font-semibold text-teal mb-1 leading-none">
                {stat.value}
              </div>
              <div className="text-[0.7rem] tracking-[0.18em] uppercase font-medium text-ink mt-3 mb-2">
                {stat.name}
              </div>
              <div className="text-xs text-muted leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}