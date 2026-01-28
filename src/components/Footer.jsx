export default function Footer() {
  return (
    <footer className="py-12 bg-[#0a0a0a] border-t border-white/10">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-xl font-bold text-white">
              DirtLab<span className="text-[#ffdd00]">.</span>
            </a>
            <p className="text-sm text-gray-500">
              Quality data for the built world.
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <a href="mailto:info@dirtlab.io" className="text-gray-400 hover:text-white transition-colors">
              info@dirtlab.io
            </a>
            <a href="tel:775-235-2507" className="text-gray-400 hover:text-white transition-colors">
              775-235-2507
            </a>
            <a
              href="https://www.linkedin.com/company/dirtlab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} DirtLab. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
