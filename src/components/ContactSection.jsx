import { useState } from 'react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    needs: '',
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessRole: '',
    discovery: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const discoveryOptions = [
    'Google Search',
    'LinkedIn',
    'Referral',
    'Trade Show / Event',
    'Social Media',
    'Other',
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    try {
      // Submit to our API endpoint (which forwards to Monday)
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          needs: '',
          name: '',
          email: '',
          phone: '',
          businessName: '',
          businessRole: '',
          discovery: '',
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      // Fallback to mailto if Monday fails
      const subject = encodeURIComponent(`DirtLab Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Business: ${formData.businessName}
Role: ${formData.businessRole}
How they found us: ${formData.discovery}

Message:
${formData.needs}
      `);
      window.location.href = `mailto:info@dirtlab.io?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 bg-[#0a0a0a]">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-[#111] rounded-2xl border border-white/10 p-12">
              <div className="w-16 h-16 bg-[#ffdd00]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-[#ffdd00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Thank you!</h2>
              <p className="text-gray-400 mb-8">We'll be in touch soon.</p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-[#ffdd00] hover:underline"
              >
                Send another message
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 bg-[#0a0a0a]">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Info */}
          <div>
            <p className="text-sm font-medium text-[#ffdd00] uppercase tracking-wider mb-4">
              Contact
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to build with better data?
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              Send us your plans and we'll show you what quality data feels like out on the grade.
            </p>

            <div className="space-y-4">
              <a href="tel:775-235-2507" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">775-235-2507</p>
                </div>
              </a>

              <a href="mailto:info@dirtlab.io" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">info@dirtlab.io</p>
                </div>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#111] rounded-2xl border border-white/10 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Needs/Message - First like Monday form */}
              <div>
                <label htmlFor="needs" className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about what brought you here today *
                </label>
                <textarea
                  id="needs"
                  name="needs"
                  required
                  rows={4}
                  maxLength={2000}
                  value={formData.needs}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors resize-none"
                  placeholder="What can we help you with?"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    What's your name? *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    maxLength={255}
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                    placeholder="Your name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Best email to reach you? *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                    placeholder="you@company.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Mobile number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                {/* Business Name */}
                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-gray-300 mb-2">
                    Business name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                    placeholder="Your company"
                  />
                </div>
              </div>

              {/* Business Role */}
              <div>
                <label htmlFor="businessRole" className="block text-sm font-medium text-gray-300 mb-2">
                  Your role within the business *
                </label>
                <input
                  type="text"
                  id="businessRole"
                  name="businessRole"
                  required
                  value={formData.businessRole}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#ffdd00] transition-colors"
                  placeholder="e.g. Project Manager, Operator, Owner"
                />
              </div>

              {/* Discovery */}
              <div>
                <label htmlFor="discovery" className="block text-sm font-medium text-gray-300 mb-2">
                  How did you first discover DirtLab? *
                </label>
                <select
                  id="discovery"
                  name="discovery"
                  required
                  value={formData.discovery}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0a0a0a] border border-white/10 rounded-xl text-white focus:outline-none focus:border-[#ffdd00] transition-colors"
                >
                  <option value="">Select an option...</option>
                  {discoveryOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-4 bg-[#ffdd00] text-black font-semibold rounded-xl hover:bg-[#ffe433] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
