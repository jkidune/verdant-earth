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
    <section className="bg-white py-16 sm:py-24 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Measurable Impact
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Real change happens on the ground. Here is what we have achieved by working hand-in-hand with local communities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {impactStats.map((stat) => (
            <div 
              key={stat.id} 
              className="bg-emerald-50 rounded-2xl p-8 text-center border border-emerald-100 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="text-4xl font-extrabold text-emerald-600 mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-bold text-gray-900 mb-2">
                {stat.name}
              </div>
              <div className="text-sm text-gray-600 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}