import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaYoutube, FaTwitter, FaPaperPlane } from 'react-icons/fa';

const PageBanner = ({ title, subtitle, breadcrumb }) => (
  <div className="bg-gradient-to-r from-primary-900 to-primary-700 py-12 px-4">
    <div className="max-w-7xl mx-auto">
      <div className="text-primary-300 text-sm mb-2">{breadcrumb}</div>
      <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{title}</h1>
      {subtitle && <p className="text-primary-200">{subtitle}</p>}
    </div>
  </div>
);

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div>
      <PageBanner title="Contact Us" subtitle="Get in touch with our team" breadcrumb="Home › Contact Us" />

      <section className="py-14 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="font-display text-2xl font-bold text-primary-900 mb-6">Get In Touch</h2>

            <div className="space-y-5 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-sm mb-0.5">Office Address</div>
                  <div className="text-gray-600 text-sm">Jalthal, Sunsari District<br />Province No. 1, Nepal<br />Postal Code: 56700</div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-sm mb-0.5">Phone Numbers</div>
                  <div className="text-gray-600 text-sm">
                    <a href="tel:+977-025-500000" className="hover:text-primary-700 transition-colors block">+977-025-500000 (Main)</a>
                    <a href="tel:+977-9800000000" className="hover:text-primary-700 transition-colors block">+977-9800000000 (Mobile)</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-sm mb-0.5">Email Address</div>
                  <a href="mailto:info@sfacljalthal.com.np" className="text-gray-600 text-sm hover:text-primary-700 transition-colors">
                    info@sfacljalthal.com.np
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-11 h-11 bg-primary-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FaClock className="text-white" />
                </div>
                <div>
                  <div className="font-semibold text-primary-900 text-sm mb-0.5">Office Hours</div>
                  <div className="text-gray-600 text-sm">
                    Sunday – Friday: 9:00 AM – 5:00 PM<br />
                    Saturday: Closed<br />
                    Public Holidays: Closed
                  </div>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="mb-8">
              <div className="font-semibold text-primary-900 text-sm mb-3">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { Icon: FaFacebook, label: 'Facebook', color: 'hover:bg-blue-600', href: 'https://www.facebook.com' },
                  { Icon: FaYoutube, label: 'YouTube', color: 'hover:bg-red-600', href: 'https://www.youtube.com' },
                  { Icon: FaTwitter, label: 'Twitter', color: 'hover:bg-sky-500', href: 'https://www.twitter.com' },
                ].map(({ Icon, label, color, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer"
                    className={`w-10 h-10 bg-gray-100 ${color} text-gray-600 hover:text-white rounded-full flex items-center justify-center transition-colors`}>
                    <Icon />
                  </a>
                ))}
              </div>
            </div>

            {/* Google Map placeholder */}
            <div className="rounded-2xl overflow-hidden border border-gray-200 h-52 bg-primary-50 flex items-center justify-center">
              <iframe
                title="SFACL Jalthal Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113997.21!2d87.19!3d26.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQzJzQ4LjAiTiA4N8KwMTEnMjQuMCJF!5e0!3m2!1sen!2snp!4v1615000000000!5m2!1sen!2snp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                onError={e => { e.target.style.display = 'none'; }}
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h2 className="font-display text-2xl font-bold text-primary-900 mb-2">Send a Message</h2>
              <p className="text-gray-500 text-sm mb-6">We typically respond within 1–2 business days.</p>

              {submitted && (
                <div className="mb-5 p-3 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                  ✓ Your message has been sent. We'll get back to you soon!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-500 mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+977-XXXXXXXXXX"
                      className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-gray-500 mb-1 block">Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="How can we help you? Please describe your query or request..."
                    className="w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary-700 hover:bg-primary-800 text-white font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <FaPaperPlane className="text-sm" /> Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
