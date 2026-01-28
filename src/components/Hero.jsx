export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-7xl ml-[12%] px-6">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white">
            Data, of the{' '}
            <span className="text-[#ffdd00]">finest grade.</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            We turn your plans into GPS-ready 3D models and takeoffs so your crews
            move dirt with confidence—not guesswork.
          </p>

          {/* Services list */}
          <div className="flex flex-wrap gap-4 mb-10 text-gray-400">
            {['3D Models', 'Takeoffs', 'Training', 'Consulting'].map((service) => (
              <span key={service} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#ffdd00] rounded-full"></span>
                {service}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <a href="#contact" className="btn-primary text-lg px-8 py-4">
              Send Us Your Plans →
            </a>
            <a href="tel:775-235-2507" className="btn-outline px-8 py-4">
              775-235-2507
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
