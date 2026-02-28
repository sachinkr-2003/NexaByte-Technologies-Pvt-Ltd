export default function Company() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 pt-[72px] lg:pt-[116px]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">NexaByte</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Leading IT Solutions Provider Since 2019
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-semibold">
                Our Story
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">Building the Future of Technology</h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                NexaByte Technologies was founded with a vision to bridge the gap between innovative technology and business success. We are a premier IT services company specializing in enterprise-grade software solutions.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
                From startups to established enterprises, we deliver custom software development, cutting-edge web and mobile applications, robust cloud solutions, and industry-leading training programs.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
                alt="Team collaboration" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 sm:py-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">500+</h3>
              <p className="text-sm sm:text-base text-blue-100">Projects Delivered</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">200+</h3>
              <p className="text-sm sm:text-base text-blue-100">Happy Clients</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">50+</h3>
              <p className="text-sm sm:text-base text-blue-100">Expert Team</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">100%</h3>
              <p className="text-sm sm:text-base text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">What We Do</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Comprehensive IT solutions for modern businesses</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-3xl sm:text-4xl mb-4"><i className="fa-solid fa-laptop-code"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Custom Software Development</h3>
              <p className="text-sm sm:text-base text-gray-600">Tailored solutions built with cutting-edge technologies to meet your unique business needs.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-3xl sm:text-4xl mb-4"><i className="fa-solid fa-globe"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Web & Mobile Apps</h3>
              <p className="text-sm sm:text-base text-gray-600">Responsive and intuitive applications for all platforms with seamless user experience.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-3xl sm:text-4xl mb-4"><i className="fa-solid fa-cloud"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Cloud & DevOps</h3>
              <p className="text-sm sm:text-base text-gray-600">Scalable infrastructure and seamless deployment for modern cloud-native applications.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-3xl sm:text-4xl mb-4"><i className="fa-solid fa-graduation-cap"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Training Programs</h3>
              <p className="text-sm sm:text-base text-gray-600">Industry-certified training with 100% placement assistance for eligible candidates.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-3xl sm:text-4xl mb-4"><i className="fa-solid fa-lock"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Security Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600">Enterprise-grade security protocols protecting your data and applications.</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="text-3xl sm:text-4xl mb-4"><i className="fa-solid fa-chart-bar"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-900">Consulting Services</h3>
              <p className="text-sm sm:text-base text-gray-600">Expert guidance to help you make informed technology decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Why Choose NexaByte?</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">What sets us apart in the competitive IT landscape</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <i className="fa-solid fa-bolt text-white text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Fast Delivery</h3>
              <p className="text-sm sm:text-base text-gray-600">Quick turnaround without compromising quality</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <i className="fa-solid fa-shield-halved text-white text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Secure Solutions</h3>
              <p className="text-sm sm:text-base text-gray-600">Enterprise-grade security standards</p>
            </div>
            <div className="text-center space-y-3 sm:space-y-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto">
                <i className="fa-solid fa-briefcase text-white text-2xl sm:text-3xl"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900">Expert Team</h3>
              <p className="text-sm sm:text-base text-gray-600">Skilled professionals with years of experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100">Let's discuss how we can help you achieve your goals</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
}
