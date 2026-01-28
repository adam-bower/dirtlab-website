export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-dirt-dark">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-dirt-yellow font-medium mb-4 block">About DirtLab</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bridging the gap between design and construction
            </h2>
            <div className="space-y-4 text-gray-400">
              <p>
                Our mission is to bridge the gap between design and construction with expert guidance,
                reliable data, and engaging training, ensuring every project is built with confidence.
              </p>
              <p>
                With standardized workflows built from thousands of projects, we know what works.
                We meet you where you're at - whether you're brand new to GPS technology or
                looking to optimize your existing processes.
              </p>
              <p>
                We believe the most effective way to ensure your designs are built right is to
                understand how they're used in the field. That's why we don't just provide data -
                we provide the knowledge to use it effectively.
              </p>
            </div>

            {/* Values */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {[
                { icon: '🎯', label: 'Accuracy First', desc: '99%+ model accuracy' },
                { icon: '🤝', label: 'Partnership', desc: 'We meet you where you are' },
                { icon: '📚', label: 'Education', desc: 'Learn to be self-sufficient' },
                { icon: '⚡', label: 'Efficiency', desc: 'Eliminate rework & downtime' },
              ].map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-2xl">{value.icon}</span>
                  <div>
                    <div className="font-medium text-white">{value.label}</div>
                    <div className="text-sm text-gray-500">{value.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-dirt-gray to-dirt-dark rounded-3xl border border-gray-800 p-8 flex items-center justify-center">
              {/* Abstract construction visual */}
              <div className="relative w-full h-full">
                {/* Grid lines */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,215,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,215,0,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

                {/* Center icons */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <img src="/images/dozer-icon.png" alt="" className="w-32 h-32 opacity-80" />
                    <img src="/images/blueprint-icon.png" alt="" className="w-24 h-24 absolute -bottom-4 -right-4 opacity-80" />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-8 right-8 w-4 h-4 bg-dirt-yellow rounded-full animate-pulse"></div>
                <div className="absolute bottom-12 left-8 w-3 h-3 bg-dirt-blue rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/3 left-12 w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-dirt-yellow/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-dirt-blue/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
