export default function TeamSection() {
  return (
    <section id="team" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium text-[#ffdd00] uppercase tracking-wider mb-4">
              About
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Built from the trenches
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                I've spent over a decade working in the trenches of heavy civil construction,
                building models, running takeoffs, managing cost controls, and supporting field
                crews across projects with millions of cubic yards of dirt.
              </p>
              <p>
                Along the way, I've seen the same pain points show up over and over again—and
                I got tired of watching good contractors suffer from bad data, rushed design
                plans, and training that just didn't work.
              </p>
              <p>
                That frustration became fuel. So I started DirtLab.
              </p>
            </div>

            {/* What we believe */}
            <div className="mt-8 space-y-3">
              {[
                'Quality data is the foundation of every successful project',
                'Learning should be hands-on, engaging, and tailored to real-world use',
                'Great people do great work when they\'re empowered and supported',
              ].map((belief, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#ffdd00] mt-1">✓</span>
                  <span className="text-gray-300">{belief}</span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-gray-400">
                "If you're trying to build something better—let's connect."
              </p>
              <p className="text-white font-semibold mt-2">— Tylor Foster, Founder</p>
            </div>
          </div>

          {/* Tylor's photo */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <img
                src="/images/tylor-foster.jpeg"
                alt="Tylor Foster, DirtLab Founder"
                className="w-full"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
