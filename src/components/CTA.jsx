import { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Project Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:info@dirtlab.io?subject=${subject}&body=${body}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a] border-t border-white/10">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Copy */}
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Ready to build with <span className="text-[#ffdd00]">better data?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Send us your plans and we'll show you what quality data feels like out on the grade.
            </p>

            {/* Contact details */}
            <div className="space-y-4 text-gray-400">
              <p>
                <span className="text-white font-medium">Email:</span>{' '}
                <a href="mailto:info@dirtlab.io" className="hover:text-[#ffdd00] transition-colors">
                  info@dirtlab.io
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Phone:</span>{' '}
                <a href="tel:775-235-2507" className="hover:text-[#ffdd00] transition-colors">
                  775-235-2507
                </a>
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
              />
            </div>
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
            />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-4 bg-[#ffdd00] text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
