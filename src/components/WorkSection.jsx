export default function WorkSection() {
  const projects = [
    {
      image: '/images/track-model-dark.png',
      title: 'High School Track',
      description: 'A good model is more than just math and science—it\'s a work of art.',
    },
    {
      image: '/images/earthwork-barrington.jpeg',
      title: 'Barrington Storage',
      description: 'Comprehensive earthwork summary with cut/fill analysis and volume calculations.',
      dim: true,
    },
    {
      image: '/images/animal-outreach.jpeg',
      title: 'Animal Outreach Facility',
      description: 'Detailed takeoff for animal shelter exercise pens in Washington.',
    },
  ];

  return (
    <section id="work" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium text-[#ffdd00] uppercase tracking-wider mb-4">
            Our work
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Not all surfaces are created equal.
          </h2>
        </div>

        {/* Project grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-white/10 hover:border-[#ffdd00]/30 transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${project.dim ? 'brightness-50' : ''}`}
                />
              </div>
              <div className="p-6 bg-[#111]">
                <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">
            Send your plans to experience what a quality data set feels like out on the grade.
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Send Us Your Plans
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
