import { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    role: '',
    needs: '',
  });
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // Monday Forms submission
    const mondayFormId = '42e62c1b7dbe2d848554f779027894f9';
    const formPayload = {
      name: formData.name,
      email_mkpmg01v: formData.email,
      phone_mkpm5hs0: formData.phone,
      text_mkpmfcc1: formData.business,
      text_mkqk31xj: formData.role,
      long_text_mkqkyf41: formData.needs,
    };

    try {
      const response = await fetch(`https://forms.monday.com/forms/${mondayFormId}/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formPayload),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', business: '', role: '', needs: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
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
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
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
          {status === 'success' ? (
            <div className="flex items-center justify-center h-full min-h-[400px]">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#ffdd00] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thanks for reaching out!</h3>
                <p className="text-gray-400">We'll be in touch soon.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                />
                <input
                  type="text"
                  name="business"
                  placeholder="Business Name"
                  value={formData.business}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                />
              </div>
              <input
                type="text"
                name="role"
                placeholder="Your Role"
                value={formData.role}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
              />
              <textarea
                name="needs"
                placeholder="Tell us about your project needs..."
                rows={4}
                value={formData.needs}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full py-4 bg-[#ffdd00] text-black font-semibold rounded-lg hover:bg-yellow-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message →'}
              </button>
              {status === 'error' && (
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again or email us directly.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
