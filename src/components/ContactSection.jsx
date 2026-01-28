import { useState } from 'react';

export default function ContactSection() {
  const [formType, setFormType] = useState('construction');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Build email body
    const subject = encodeURIComponent(`DirtLab ${formType === 'construction' ? 'Construction' : 'Design'} Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Company: ${formData.company}
Project Type: ${formData.projectType}
Inquiry Type: ${formType === 'construction' ? 'Construction (Let\'s Talk Dirt)' : 'Design (Let\'s Talk Design)'}

Message:
${formData.message}
    `);

    // Open mailto link (in production, this would POST to an API/webhook)
    window.location.href = `mailto:info@dirtlab.io?subject=${subject}&body=${body}`;

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const projectTypes = formType === 'construction'
    ? ['3D Model Building', 'Earthwork Takeoff', 'Material Takeoff', 'Training', 'Consulting', 'Other']
    : ['Constructability Review', 'Plan Gap Analysis', 'Field-Ready Models', 'Design Training', 'Other'];

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-dirt-dark to-dirt-gray">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">talk dirt.</span>
            </h2>
            <p className="text-lg text-gray-400">
              Send us your plans and experience what quality data feels like.
            </p>
          </div>

          {/* Form Type Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              type="button"
              onClick={() => setFormType('construction')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                formType === 'construction'
                  ? 'bg-dirt-yellow text-black'
                  : 'bg-dirt-gray text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <span>🚜</span> For Contractors
            </button>
            <button
              type="button"
              onClick={() => setFormType('design')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                formType === 'design'
                  ? 'bg-dirt-blue text-white'
                  : 'bg-dirt-gray text-gray-400 hover:text-white border border-gray-700'
              }`}
            >
              <span>📐</span> For Engineers
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-dirt-gray/50 rounded-2xl border border-gray-800 p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dirt-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-dirt-yellow transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dirt-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-dirt-yellow transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dirt-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-dirt-yellow transition-colors"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dirt-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-dirt-yellow transition-colors"
                  placeholder="Your company"
                />
              </div>
            </div>

            {/* Project Type */}
            <div className="mb-6">
              <label htmlFor="projectType" className="block text-sm font-medium text-gray-300 mb-2">
                What do you need help with? *
              </label>
              <select
                id="projectType"
                name="projectType"
                required
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dirt-dark border border-gray-700 rounded-lg text-white focus:outline-none focus:border-dirt-yellow transition-colors"
              >
                <option value="">Select an option...</option>
                {projectTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Tell us about your project
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-dirt-dark border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-dirt-yellow transition-colors resize-none"
                placeholder="Project details, timeline, any specific requirements..."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
                formType === 'construction'
                  ? 'bg-dirt-yellow text-black hover:bg-[#ffdd00]'
                  : 'bg-dirt-blue text-white hover:bg-blue-500'
              }`}
            >
              {submitted ? (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Message Sent!
                </>
              ) : (
                <>
                  {formType === 'construction' ? "Let's Talk Dirt" : "Let's Talk Design"}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </>
              )}
            </button>
          </form>

          {/* Contact info */}
          <div className="text-center mt-12">
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
