export default function MissionVision() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 pt-[72px] lg:pt-[116px]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Mission & Vision</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Guiding principles that drive our success and shape our future
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl">🎯</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Our Mission</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                To empower businesses with transformative technology solutions that drive growth, efficiency, and innovation.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We are committed to delivering scalable, secure, and cutting-edge software products that exceed expectations and create lasting value for our clients.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 sm:p-10 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <span className="text-4xl sm:text-5xl">🔭</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 text-gray-900">Our Vision</h2>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                To be recognized as India's most trusted and innovative IT solutions provider, setting industry standards for excellence.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                We aim to nurture the next generation of technology leaders through world-class training programs while delivering exceptional software solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Core Values</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental beliefs that shape our culture and define who we are
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">💡</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600">Constantly pushing boundaries with creative solutions</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">✨</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Excellence</h3>
              <p className="text-sm sm:text-base text-gray-600">Delivering superior quality in every project</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">🤝</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Integrity</h3>
              <p className="text-sm sm:text-base text-gray-600">Building trust through honesty and transparency</p>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">🚀</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Growth</h3>
              <p className="text-sm sm:text-base text-gray-600">Embracing continuous learning and improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Strategic Goals</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">What we aim to achieve in the coming years</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Technology Leadership</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Become the go-to technology partner for businesses seeking digital transformation and innovative solutions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Talent Development</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Train and place 1000+ students annually in top IT companies through our comprehensive training programs.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Global Expansion</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Expand our services to international markets while maintaining our commitment to quality and excellence.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-l-4 border-blue-600">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-900">Innovation Hub</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Establish a research and development center focused on emerging technologies like AI, ML, and Blockchain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">Our Commitment</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-2xl mx-auto">
              What you can expect when you partner with us
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl text-center hover:bg-white/20 transition-all">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🎯</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Quality First</h3>
              <p className="text-sm sm:text-base text-gray-300">Never compromising on quality, security, or performance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl text-center hover:bg-white/20 transition-all">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">⏱️</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">On-Time Delivery</h3>
              <p className="text-sm sm:text-base text-gray-300">Meeting deadlines with efficient project management</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 sm:p-8 rounded-xl text-center hover:bg-white/20 transition-all">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">💬</div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Clear Communication</h3>
              <p className="text-sm sm:text-base text-gray-300">Transparent updates throughout the project lifecycle</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Let's Build the Future Together</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100">Partner with us to achieve your technology goals</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
}
