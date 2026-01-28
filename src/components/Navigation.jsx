import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-dirt-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold text-white hover:text-dirt-yellow transition-colors">
            DirtLab<span className="text-dirt-yellow">.</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#construction" className="text-gray-300 hover:text-white transition-colors">
              Construction
            </a>
            <a href="#design" className="text-gray-300 hover:text-white transition-colors">
              Design
            </a>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </a>
            <a href="#contact" className="btn-primary">
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col gap-4 pt-4">
              <a href="#construction" className="text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Construction
              </a>
              <a href="#design" className="text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                Design
              </a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                About
              </a>
              <a href="#contact" className="btn-primary text-center" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
