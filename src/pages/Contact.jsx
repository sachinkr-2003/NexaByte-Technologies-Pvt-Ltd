export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Touch</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can help transform your business
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <p className="text-gray-600 mb-8 text-lg">Fill out the form below and we'll get back to you within 24 hours</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                    placeholder="John Doe"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                    placeholder="john@example.com"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" 
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Subject *</label>
                  <select className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors" required>
                    <option value="">Select a subject</option>
                    <option value="service">Service Inquiry</option>
                    <option value="training">Training Program</option>
                    <option value="placement">Placement Inquiry</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea 
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none transition-colors h-32 resize-none" 
                    placeholder="Tell us about your project or inquiry..."
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 text-lg mb-8">Reach out to us through any of these channels</p>
              </div>

              <div className="space-y-6">
                {/* Office Address */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Office Address</h3>
                      <p className="text-gray-600 leading-relaxed">
                        NexaByte Technologies Pvt. Ltd.<br />
                        Gomti Nagar, Lucknow<br />
                        Uttar Pradesh - 226010, India
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@nexabyte.com" className="hover:text-blue-600 transition-colors">info@nexabyte.com</a><br />
                        <a href="mailto:careers@nexabyte.com" className="hover:text-blue-600 transition-colors">careers@nexabyte.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919876543210" className="hover:text-blue-600 transition-colors">+91 98765 43210</a><br />
                        <a href="tel:+919876543211" className="hover:text-blue-600 transition-colors">+91 98765 43211</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-3xl">🕐</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Working Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Find Us Here</h2>
            <p className="text-xl text-gray-600">Visit our office in Lucknow</p>
          </div>
          <div className="bg-white p-4 rounded-3xl shadow-2xl">
            <div className="w-full h-96 bg-gray-200 rounded-2xl flex items-center justify-center">
              <p className="text-gray-500 text-lg">Google Maps Integration Here</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Connect With Us</h2>
            <p className="text-xl text-gray-600 mb-12">Follow us on social media for updates and insights</p>
          </div>
          <div className="flex justify-center gap-6">
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-xl transition-all transform hover:scale-110">
              f
            </a>
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-xl transition-all transform hover:scale-110">
              in
            </a>
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-xl transition-all transform hover:scale-110">
              tw
            </a>
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-xl transition-all transform hover:scale-110">
              ig
            </a>
            <a href="#" className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-white text-2xl hover:shadow-xl transition-all transform hover:scale-110">
              yt
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>
          <div className="space-y-6 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What services do you offer?</h3>
              <p className="text-gray-600">We offer custom software development, web and mobile applications, cloud solutions, and comprehensive training programs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">How long does a typical project take?</h3>
              <p className="text-gray-600">Project timelines vary based on complexity. Small projects take 2-4 weeks, while larger enterprise solutions may take 3-6 months.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Do you provide placement assistance?</h3>
              <p className="text-gray-600">Yes! We offer 100% placement assistance to eligible candidates who complete our training programs with required attendance and performance.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What are your payment terms?</h3>
              <p className="text-gray-600">We offer flexible payment plans. Typically, 30% advance, 40% on milestone completion, and 30% on final delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-2xl mb-10 text-blue-100">Let's turn your ideas into reality</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="tel:+919876543210" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Call Now
            </a>
            <a href="mailto:info@nexabyte.com" className="inline-block bg-white/20 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all border-2 border-white">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
