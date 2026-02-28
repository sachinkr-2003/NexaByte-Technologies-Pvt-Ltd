export default function Team() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 pt-[72px] lg:pt-[116px]">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Expert Team</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Talented professionals committed to delivering exceptional results
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Team Structure</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
              A diverse group of experts working together to deliver excellence
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fa-solid fa-user-tie text-white text-3xl sm:text-4xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Leadership Team</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Visionary leaders with 15+ years of industry expertise</p>
              <div className="text-xs sm:text-sm text-gray-500">
                <p>• Strategic Planning</p>
                <p>• Business Development</p>
                <p>• Client Relations</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fa-solid fa-laptop-code text-white text-3xl sm:text-4xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Development Team</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">50+ skilled developers mastering cutting-edge technologies</p>
              <div className="text-xs sm:text-sm text-gray-500">
                <p>• Full Stack Development</p>
                <p>• Mobile App Development</p>
                <p>• Cloud Architecture</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl text-center hover:shadow-xl transition-all">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fa-solid fa-chalkboard-user text-white text-3xl sm:text-4xl"></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900">Training Team</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Industry-certified trainers shaping future tech leaders</p>
              <div className="text-xs sm:text-sm text-gray-500">
                <p>• Technical Training</p>
                <p>• Career Guidance</p>
                <p>• Placement Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Key Team Members</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">Meet the people behind our success</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-blue-600">RK</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Rajesh Kumar</h3>
              <p className="text-xs sm:text-sm text-blue-600 mb-2 sm:mb-3">CEO & Founder</p>
              <p className="text-xs sm:text-sm text-gray-600">15+ years in IT industry</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-blue-600">PS</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Priya Sharma</h3>
              <p className="text-xs sm:text-sm text-blue-600 mb-2 sm:mb-3">CTO</p>
              <p className="text-xs sm:text-sm text-gray-600">Tech architecture expert</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-blue-600">AV</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Amit Verma</h3>
              <p className="text-xs sm:text-sm text-blue-600 mb-2 sm:mb-3">Lead Developer</p>
              <p className="text-xs sm:text-sm text-gray-600">Full stack specialist</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl sm:text-4xl font-bold text-blue-600">SK</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Sneha Kapoor</h3>
              <p className="text-xs sm:text-sm text-blue-600 mb-2 sm:mb-3">Training Head</p>
              <p className="text-xs sm:text-sm text-gray-600">Certified trainer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Team Culture</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600">What makes us unique</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"><i className="fa-solid fa-handshake"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Collaboration</h3>
              <p className="text-sm sm:text-base text-gray-600">We work together as one team to achieve common goals</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"><i className="fa-solid fa-lightbulb"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Innovation</h3>
              <p className="text-sm sm:text-base text-gray-600">Encouraging creative thinking and new ideas every day</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200">
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4"><i className="fa-solid fa-book"></i></div>
              <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-gray-900">Learning</h3>
              <p className="text-sm sm:text-base text-gray-600">Continuous skill development and knowledge sharing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Join Our Team</h2>
          <p className="text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 text-blue-100">Be part of something extraordinary</p>
          <a href="/contact" className="inline-block bg-white text-blue-600 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
