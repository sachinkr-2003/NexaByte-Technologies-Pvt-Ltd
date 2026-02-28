export default function Programs() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight px-4">
            Training <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Programs</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Launch your tech career with industry-leading training and placement support
          </p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Our Programs</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">Comprehensive training designed to make you industry-ready</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* Summer Training */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-blue-200 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-sun text-white text-4xl sm:text-5xl"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Summer Training</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">6-8 weeks intensive program for students during summer break</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Hands-on practical training</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Live project experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Industry certification</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Expert mentorship</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Placement assistance</span>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">Duration:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-bold">6-8 Weeks</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">Mode:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-bold">Online/Offline</span>
                </div>
              </div>

              <a href="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all">
                Enroll Now
              </a>
            </div>

            {/* Industrial Training */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-blue-200 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-industry text-white text-4xl sm:text-5xl"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Industrial Training</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">3-6 months comprehensive training with real-world projects</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">In-depth technical training</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Real-world project exposure</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Industry-recognized certificate</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Dedicated mentor support</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">100% placement assurance*</span>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">Duration:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-bold">3-6 Months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">Mode:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-bold">Online/Offline</span>
                </div>
              </div>

              <a href="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all">
                Enroll Now
              </a>
            </div>

            {/* Project-Based Internship */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-blue-200 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-briefcase text-white text-4xl sm:text-5xl"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Project-Based Internship</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">2-4 months internship working on live client projects</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Work on live projects</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Stipend for eligible candidates</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Experience certificate</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Portfolio building</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Pre-placement offer (PPO)</span>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">Duration:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-bold">2-4 Months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">Mode:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-bold">Hybrid</span>
                </div>
              </div>

              <a href="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all">
                Apply Now
              </a>
            </div>

            {/* Apprenticeship Program */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 lg:p-10 rounded-3xl border-2 border-blue-200 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-6">
                <i className="fa-solid fa-graduation-cap text-white text-4xl sm:text-5xl"></i>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900">Apprenticeship Program</h3>
              <p className="text-gray-600 mb-4 sm:mb-6 text-base sm:text-lg">6-12 months earn-while-you-learn program</p>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Monthly stipend</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Full-time work experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Government-recognized certificate</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Job conversion opportunity</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-blue-600 text-xl flex-shrink-0">✓</span>
                  <span className="text-sm sm:text-base text-gray-700">Professional development</span>
                </div>
              </div>

              <div className="bg-white p-4 sm:p-6 rounded-2xl mb-4 sm:mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">Duration:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-bold">6-12 Months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm sm:text-base text-gray-600 font-semibold">Mode:</span>
                  <span className="text-sm sm:text-base text-gray-900 font-bold">Offline</span>
                </div>
              </div>

              <a href="/contact" className="block w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:shadow-lg transition-all">
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Covered */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Technologies We Teach</h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">Master in-demand skills with expert guidance</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-2">MERN Stack</h3>
              <p className="text-xs sm:text-sm text-gray-300">Full Stack Development</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Java</h3>
              <p className="text-xs sm:text-sm text-gray-300">Spring Boot & Microservices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-2">Python</h3>
              <p className="text-xs sm:text-sm text-gray-300">Django & Data Science</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-2">.NET</h3>
              <p className="text-xs sm:text-sm text-gray-300">ASP.NET Core</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-lg sm:text-xl font-bold mb-2">PHP</h3>
              <p className="text-xs sm:text-sm text-gray-300">Laravel Development</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Programs */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Why Choose Our Programs?</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">Benefits that make us the best choice</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4"><i className="fa-solid fa-chalkboard-user"></i></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Expert Trainers</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Learn from industry professionals with 10+ years of experience</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4"><i className="fa-solid fa-laptop-code"></i></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Hands-On Learning</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Work on real projects and build your portfolio</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4"><i className="fa-solid fa-bullseye"></i></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">100% Placement</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Guaranteed placement assistance for eligible candidates</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4"><i className="fa-solid fa-certificate"></i></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Certification</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Industry-recognized certificates to boost your resume</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4"><i className="fa-solid fa-handshake"></i></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Mentorship</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">One-on-one guidance throughout your learning journey</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 sm:p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4"><i className="fa-solid fa-briefcase"></i></div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900">Career Support</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">Resume building, interview prep, and job referrals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-4">Success Stories</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">Hear from our successful alumni</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">"Best training program! Got placed in a top MNC with 6 LPA package."</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">AK</span>
                </div>
                <div>
                  <p className="font-bold">Ankit Kumar</p>
                  <p className="text-sm text-gray-500">Software Engineer @ TCS</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">"Excellent mentorship and practical training. Highly recommended!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">PS</span>
                </div>
                <div>
                  <p className="font-bold">Priya Singh</p>
                  <p className="text-sm text-gray-500">Full Stack Developer @ Infosys</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
              <div className="flex mb-4">
                <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 mb-6">"Great learning experience with real projects. Got my dream job!"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">RV</span>
                </div>
                <div>
                  <p className="font-bold">Rahul Verma</p>
                  <p className="text-sm text-gray-500">Java Developer @ Wipro</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 px-4">Start Your Tech Journey Today!</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 text-blue-100 px-4">Join thousands of successful students who transformed their careers</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="/contact" className="inline-block bg-white text-blue-600 px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Enroll Now
            </a>
            <a href="/placement" className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 sm:px-12 py-4 sm:py-5 rounded-xl font-bold text-lg sm:text-xl hover:bg-white/30 transition-all border-2 border-white">
              View Placements
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
