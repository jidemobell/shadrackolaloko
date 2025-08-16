export default function Contact() {
  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 text-indigo-600 font-medium text-sm tracking-wide uppercase mb-4">
            <div className="w-8 h-0.5 bg-indigo-600"></div>
            <span>Contact</span>
            <div className="w-8 h-0.5 bg-indigo-600"></div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            Let&apos;s <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring inspiring worship music to your event? Get in touch to discuss bookings and collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h3>
              <p className="text-gray-600 leading-relaxed">
                Whether you&apos;re interested in booking a performance, collaborating on music, 
                or just want to say hello, I&apos;d love to hear from you.
              </p>
            </div>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                  placeholder="+353 89 951 4113"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Subject
                </label>
                <select className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none">
                  <option>Performance Booking</option>
                  <option>Collaboration</option>
                  <option>General Inquiry</option>
                  <option>Media Interview</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  rows={6}
                  className="w-full px-4 py-4 bg-white border border-gray-200 rounded-2xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none resize-none"
                  placeholder="Tell me about your event or inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-8 rounded-2xl font-semibold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📧</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Email</p>
                    <p className="text-gray-900 font-semibold">shadrack@example.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📱</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Phone</p>
                    <p className="text-gray-900 font-semibold">+353 89 951 4113</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg">📍</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Location</p>
                    <p className="text-gray-900 font-semibold">Dublin, Ireland</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-gradient-to-r from-indigo-50 via-white to-purple-50 rounded-3xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow My Journey</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Stay connected and updated with my latest music, performances, and ministry work.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Facebook', icon: '📘', color: 'from-blue-500 to-blue-600', href: '#' },
                  { name: 'Instagram', icon: '📸', color: 'from-pink-500 to-purple-600', href: '#' },
                  { name: 'YouTube', icon: '▶️', color: 'from-red-500 to-red-600', href: '#' },
                  { name: 'WhatsApp', icon: '💬', color: 'from-green-500 to-emerald-600', href: 'https://wa.me/353899514113' },
                ].map((social, index) => (
                  <a key={index} href={social.href} className="group" target="_blank" rel="noopener noreferrer">
                    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <span className="text-white text-lg">{social.icon}</span>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                            {social.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Response */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white shadow-2xl">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold mb-2">Quick Response Promise</h3>
                <p className="text-indigo-100 leading-relaxed">
                  I typically respond to all inquiries within 24 hours. 
                  For urgent booking requests, feel free to call directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <div className="text-5xl mb-6">🎵</div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Book a Performance?</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
              Let&apos;s create an unforgettable worship experience for your community. 
              I&apos;m available for church services, special events, and celebrations across Dublin and Ireland.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                Book Now
              </button>
              <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300">
                Download Media Kit
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
