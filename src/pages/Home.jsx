export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1920&h=1080&fit=crop" 
            alt="Technology background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              <span className="whitespace-nowrap">Next‑Generation</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                Software Engineering
              </span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto px-2">
              We build scalable, secure, and high‑performance digital products that transform businesses
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 pt-6 sm:pt-8">
              <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all transform hover:scale-105 shadow-lg">
                Get Started
              </a>
              <a href="/services" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all border border-white/30">
                Our Services
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 text-center">
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">500+</h3>
              <p className="text-sm sm:text-base text-gray-600">Projects Delivered</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">200+</h3>
              <p className="text-sm sm:text-base text-gray-600">Happy Clients</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">50+</h3>
              <p className="text-sm sm:text-base text-gray-600">Expert Team</p>
            </div>
            <div className="space-y-1 sm:space-y-2">
              <h3 className="text-3xl sm:text-4xl font-bold text-blue-600">100%</h3>
              <p className="text-sm sm:text-base text-gray-600">Placement Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Expertise</h2>
            <p className="text-base sm:text-xl text-gray-600">Comprehensive IT solutions for modern businesses</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl"><i class="fa-solid fa-laptop"></i></span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Custom Software</h3>
              <p className="text-sm sm:text-base text-gray-600">Tailored solutions built with cutting-edge technologies</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl"><i class="fa-solid fa-mobile"></i></span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Web & Mobile Apps</h3>
              <p className="text-sm sm:text-base text-gray-600">Responsive and intuitive applications for all platforms</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl"><i class="fa-solid fa-cloud"></i></span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Cloud & DevOps</h3>
              <p className="text-sm sm:text-base text-gray-600">Scalable infrastructure and seamless deployment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose NexaByte?</h2>
            <p className="text-base sm:text-xl text-gray-600">We deliver excellence in every project</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl sm:text-4xl"><i class="fa-solid fa-truck-fast"></i></span>
              </div>
              <h3 className="text-base sm:text-xl font-bold">Fast Delivery</h3>
              <p className="text-xs sm:text-base text-gray-600">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <span className="text-3xl sm:text-4xl"><i class="fa-solid fa-lock"></i></span>
              </div>
              <h3 className="text-base sm:text-xl font-bold">Secure Solutions</h3>
              <p className="text-xs sm:text-base text-gray-600">Enterprise-grade security standards</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <i className="fa-solid fa-briefcase text-white text-3xl sm:text-4xl"></i>
              </div>
              <h3 className="text-base sm:text-xl font-bold">Expert Team</h3>
              <p className="text-xs sm:text-base text-gray-600">Skilled professionals with years of experience</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <i className="fa-solid fa-bullseye text-white text-3xl sm:text-4xl"></i>
              </div>
              <h3 className="text-base sm:text-xl font-bold">Result Driven</h3>
              <p className="text-xs sm:text-base text-gray-600">Focused on achieving your business goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16 sm:py-20 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Technologies We Master</h2>
            <p className="text-base sm:text-xl text-gray-400">Cutting-edge tools and frameworks</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <p className="font-semibold text-base sm:text-lg">MERN Stack</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">MongoDB, Express, React, Node</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <p className="font-semibold text-base sm:text-lg">Java</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Spring Boot, Hibernate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <p className="font-semibold text-base sm:text-lg">Python</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Django, Flask, FastAPI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <p className="font-semibold text-base sm:text-lg">.NET</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">ASP.NET, C#</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <p className="font-semibold text-base sm:text-lg">PHP</p>
              <p className="text-xs sm:text-sm text-gray-400 mt-2">Laravel, CodeIgniter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What Our Clients Say</h2>
            <p className="text-base sm:text-xl text-gray-600">Trusted by businesses across industries</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">"NexaByte delivered our project on time with exceptional quality. Highly recommended!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">RK</span>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Rajesh Kumar</p>
                  <p className="text-xs sm:text-sm text-gray-500">CEO, TechStart</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">"Professional team with great technical expertise. They understood our needs perfectly."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">PS</span>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Priya Sharma</p>
                  <p className="text-xs sm:text-sm text-gray-500">Founder, EduTech</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">"Best IT company in Lucknow! Their training programs are world-class."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">AV</span>
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base">Amit Verma</p>
                  <p className="text-xs sm:text-sm text-gray-500">Student, B.Tech</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Training & Internship Programs</h2>
            <p className="text-base sm:text-xl text-gray-600">Launch your tech career with industry experts</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl sm:text-2xl font-bold mb-4"><i className="fa-solid fa-sun"></i> Summer Training</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li>✓ 6-8 weeks intensive program</li>
                <li>✓ Live project experience</li>
                <li>✓ Industry certification</li>
                <li>✓ Placement assistance</li>
              </ul>
              <a href="/programs" className="inline-block mt-6 bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-all">
                Learn More
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200">
              <h3 className="text-xl sm:text-2xl font-bold mb-4"><i className="fa-solid fa-industry"></i> Industrial Training</h3>
              <ul className="space-y-2 sm:space-y-3 text-sm sm:text-base text-gray-700">
                <li>✓ 3-6 months comprehensive training</li>
                <li>✓ Real-world projects</li>
                <li>✓ Mentorship from experts</li>
                <li>✓ 100% placement assurance</li>
              </ul>
              <a href="/programs" className="inline-block mt-6 bg-blue-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:bg-blue-700 transition-all">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-xl mb-6 sm:mb-8 text-blue-100">Let's discuss how we can help you achieve your goals</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
