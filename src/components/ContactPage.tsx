import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <div className="bg-black min-h-screen pt-20">
      {/* Header */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 to-transparent"></div>
        <div className="relative max-w-4xl mx-auto text-center px-4">
          <h1 className="text-5xl md:text-7xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
            CONTACT <span className="text-[#D4AF37]">US</span>
          </h1>
          <div className="w-24 h-1 bg-[#D4AF37] mx-auto mb-6"></div>
          <p className="text-xl text-gray-300" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            We'd love to hear from you! Reach out with questions, sponsorship inquiries, or collaboration ideas.
          </p>
        </div>
      </div>

      {/* Contact Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl md:text-4xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
              GET IN <span className="text-[#D4AF37]">TOUCH</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
              Whether you're interested in sponsoring our team, collaborating on a project, or just want to 
              learn more about what we do, we're here to help!
            </p>

            <div className="space-y-6">
              <div className="flex items-start group">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] flex items-center justify-center mr-4 flex-shrink-0 transition-all">
                  <Mail className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl mb-1 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    EMAIL
                  </h3>
                  <a href="mailto:team@tsaengineering.org" className="text-[#D4AF37] hover:text-[#FFD700] transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    team@tsaengineering.org
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] flex items-center justify-center mr-4 flex-shrink-0 transition-all">
                  <Phone className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl mb-1 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    PHONE
                  </h3>
                  <a href="tel:+15551234567" className="text-[#D4AF37] hover:text-[#FFD700] transition-colors" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="w-16 h-16 bg-[#0a0a0a] border border-[#D4AF37]/30 group-hover:border-[#D4AF37] flex items-center justify-center mr-4 flex-shrink-0 transition-all">
                  <MapPin className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-xl mb-1 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                    LOCATION
                  </h3>
                  <p className="text-gray-400" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    Engineering Lab, Room 205<br />
                    Applied Technology High School<br />
                    200 Hackensack Avenue<br />
                    Hackensack, NJ 07601
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-[#0a0a0a] border border-[#D4AF37]/30 p-8">
              <h3 className="text-2xl mb-4 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                OFFICE HOURS
              </h3>
              <div className="text-gray-300 space-y-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                <p>
                  <span className="text-[#D4AF37]">MON - THU:</span> 3:30 PM - 5:30 PM
                </p>
                <p>
                  <span className="text-[#D4AF37]">FRIDAY:</span> 3:30 PM - 6:00 PM
                </p>
                <p>
                  <span className="text-[#D4AF37]">WEEKENDS:</span> By Appointment
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-[#0a0a0a] border border-[#D4AF37]/30 p-8">
              <h2 className="text-3xl mb-6 text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                SEND A <span className="text-[#D4AF37]">MESSAGE</span>
              </h2>
              
              {submitted && (
                <div className="bg-[#D4AF37]/20 border border-[#D4AF37] text-[#D4AF37] px-4 py-3 mb-6">
                  Thank you for your message! We'll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    NAME *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-[#D4AF37]/30 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-[#D4AF37]/30 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="subject" className="block text-gray-300 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    SUBJECT *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black border border-[#D4AF37]/30 text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="sponsorship">Sponsorship Opportunity</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="membership">Membership Information</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-2" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
                    MESSAGE *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black border border-[#D4AF37]/30 text-white focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                    style={{ fontFamily: 'Rajdhani, sans-serif' }}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D4AF37] text-black py-4 hover:bg-[#FFD700] transition-all flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}