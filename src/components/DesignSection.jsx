export default function DesignSection() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Constructability Reviews',
      description: 'Our detailed reviews give you confidence that your plans have everything needed to get built right the first time. Nothing derails trust faster than redesigns and change orders.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Plan Gap Analysis',
      description: 'We catch missing details, verify quantities, and fill gaps before your plans hit the bid room or the field, preventing costly questions and mistakes.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
        </svg>
      ),
      title: 'Field-Ready Models',
      description: 'We turn your plans into clean, field-ready models you can add to your deliverables package - ensuring what you designed is exactly what gets built.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Design Training',
      description: 'Learn how your designs are used in the field. With insights from thousands of real-world projects, we bridge the gap between design intent and field execution.',
    },
  ];

  return (
    <section id="design" className="relative py-24 bg-gradient-to-b from-dirt-gray to-dirt-dark">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dirt-blue to-transparent"></div>

      <div className="section-container">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-16">
          <div className="flex-shrink-0">
            <img src="/images/blueprint-icon.png" alt="Design" className="w-24 h-24 md:w-32 md:h-32" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Solutions for <span className="gradient-text-blue">design.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              Are you dealing with an influx of RFI's and design changes that drain your main resource - time?
              We help you avoid those headaches before they happen.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-dirt-dark/50 rounded-2xl border border-gray-800 hover:border-dirt-blue/50 transition-all duration-300 hover:shadow-xl hover:shadow-dirt-blue/5"
            >
              <div className="w-14 h-14 bg-dirt-blue/10 rounded-xl flex items-center justify-center text-dirt-blue mb-6 group-hover:bg-dirt-blue/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-dirt-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Feature callout */}
        <div className="bg-gradient-to-r from-dirt-blue/10 to-transparent p-8 rounded-2xl border border-dirt-blue/20 mb-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-dirt-blue/20 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-dirt-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Stand Out in a Sea of Sameness</h3>
              <p className="text-gray-400">
                Elevate your service offering by delivering field-ready models with your designs.
                It's a powerful way to differentiate and build trust with your clients.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://forms.monday.com/forms/9b8754db530b55db647faee7899ede81?r=use1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Let's Talk Design
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
