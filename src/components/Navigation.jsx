import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-md' : 'bg-transparent'
    }`}>
      <div className="section-container py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl md:text-3xl font-bold tracking-tight text-white">
            DirtLab<span className="text-[#ffdd00]">.</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-300 hover:text-white transition-colors">Services</a>
            <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors">Team</a>
            <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
          </div>

          <a href="#contact" className="btn-primary text-sm">
            Get a Quote
          </a>
        </div>
      </div>
    </nav>
  );
}
