export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dirt-dark to-dirt-gray">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Ready to <span className="gradient-text">get started?</span>
            </h2>
            <p className="text-lg text-gray-400">
              Let's talk about how we can help your next project succeed.
            </p>
          </div>

          {/* Two-column CTA */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Construction CTA */}
            <div className="bg-gradient-to-br from-dirt-yellow/10 to-transparent p-8 rounded-2xl border border-dirt-yellow/20 text-center">
              <img src="/images/dozer-icon.png" alt="Construction" className="w-20 h-20 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">For Contractors</h3>
              <p className="text-gray-400 mb-6">
                GPS models, takeoffs, and training to keep your crews moving in the right direction.
              </p>
              <a
                href="https://forms.monday.com/forms/42e62c1b7dbe2d848554f779027894f9?r=use1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full inline-flex items-center justify-center gap-2"
              >
                Let's Talk Dirt
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Design CTA */}
            <div className="bg-gradient-to-br from-dirt-blue/10 to-transparent p-8 rounded-2xl border border-dirt-blue/20 text-center">
              <img src="/images/blueprint-icon.png" alt="Design" className="w-20 h-20 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-3">For Engineers</h3>
              <p className="text-gray-400 mb-6">
                Constructability reviews and field-ready models to ensure your designs get built right.
              </p>
              <a
                href="https://forms.monday.com/forms/9b8754db530b55db647faee7899ede81?r=use1"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full inline-flex items-center justify-center gap-2"
              >
                Let's Talk Design
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="text-center">
            <p className="text-gray-500 mb-4">Or reach out directly</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a href="tel:775-235-2507" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                775-235-2507
              </a>
              <a href="mailto:info@dirtlab.io" className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@dirtlab.io
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
