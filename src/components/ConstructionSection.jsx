export default function ConstructionSection() {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      title: 'GPS Model Building',
      description: 'Our model building services are over 99% accurate and as clean as a whistle - keeping your crews moving in the right direction the first time, eliminating costly rework and downtime.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Earthwork Takeoffs',
      description: "Our comprehensive earthwork and material takeoffs help you bid more projects by taking the busy work of digitizing plans off your plate so you can focus on schemes and production.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Training & Support',
      description: 'Online self-guided courses, engaging in-person training, and valuable peer communities. Our training can be custom-tailored to your exact needs, even 1-on-1 coaching.',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: 'Quick Start Support',
      description: "Whether you're brand new to GPS or just want a clean start to make your own model, our standardized workflows are built from thousands of projects so we know what works.",
    },
  ];

  return (
    <section id="construction" className="relative py-24 bg-gradient-to-b from-dirt-dark to-dirt-gray">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-dirt-yellow to-transparent"></div>

      <div className="section-container">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 mb-16">
          <div className="flex-shrink-0">
            <img src="/images/dozer-icon.png" alt="Construction" className="w-24 h-24 md:w-32 md:h-32" />
          </div>
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Solutions for <span className="gradient-text">construction.</span>
            </h2>
            <p className="text-lg text-gray-400 max-w-2xl">
              GPS technology is a great tool, but it's only as good as the data guiding it.
              You can build to an inaccurate model very accurately, but who wants to do that?
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-dirt-dark/50 rounded-2xl border border-gray-800 hover:border-dirt-yellow/50 transition-all duration-300 hover:shadow-xl hover:shadow-dirt-yellow/5"
            >
              <div className="w-14 h-14 bg-dirt-yellow/10 rounded-xl flex items-center justify-center text-dirt-yellow mb-6 group-hover:bg-dirt-yellow/20 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-dirt-yellow transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://forms.monday.com/forms/42e62c1b7dbe2d848554f779027894f9?r=use1"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2"
          >
            Let's Talk Dirt
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
