export default function Services() {
  const services = [
    {
      title: '3D Machine Control Models',
      description: 'GPS technology is only as good as the data guiding it. Our models are 99%+ accurate and clean as a whistle—keeping your crews moving in the right direction the first time.',
      details: 'Subgrade, finish grade, curb & gutter, and more',
    },
    {
      title: 'Earthwork & Material Takeoffs',
      description: 'Comprehensive takeoffs so you can bid more projects. We handle the busy work of digitizing plans so you can focus on strategy and production.',
      details: 'Cut/fill, stripping, aggregate, paving quantities',
    },
    {
      title: 'Training & Consulting',
      description: 'From self-guided courses to hands-on training, we meet you where you\'re at. Built from thousands of real projects—we know what works.',
      details: 'Online courses, on-site training, 1-on-1 coaching',
    },
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-[#ffdd00] uppercase tracking-wider mb-4">
            What we do
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            Quality data for every phase of your project.
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#ffdd00]/30 transition-colors"
            >
              <div className="w-12 h-12 bg-[#ffdd00]/10 rounded-xl flex items-center justify-center mb-6">
                <span className="text-[#ffdd00] text-xl font-bold">{i + 1}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                {service.description}
              </p>
              <p className="text-sm text-gray-500">
                ↳ {service.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
