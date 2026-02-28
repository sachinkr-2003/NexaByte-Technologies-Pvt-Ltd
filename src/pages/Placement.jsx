export default function Placement() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-24 px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight px-4">
            100% <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Placement Assurance</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Your success is our commitment - Join thousands of placed candidates
          </p>
        </div>
      </section>

      {/* Placement Stats */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Placement Statistics</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Our track record speaks for itself</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-10 rounded-3xl text-center text-white shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">100%</h3>
              <p className="text-xl font-semibold">Placement Rate</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-10 rounded-3xl text-center text-white shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">1000+</h3>
              <p className="text-xl font-semibold">Students Placed</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-10 rounded-3xl text-center text-white shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">150+</h3>
              <p className="text-xl font-semibold">Hiring Partners</p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-10 rounded-3xl text-center text-white shadow-2xl transform hover:scale-105 transition-all">
              <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">12 LPA</h3>
              <p className="text-xl font-semibold">Highest Package</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Partners */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Hiring Partners</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Top companies trust our talent</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
              <span className="text-2xl font-bold text-gray-700">TCS</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
              <span className="text-2xl font-bold text-gray-700">Infosys</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
              <span className="text-2xl font-bold text-gray-700">Wipro</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
              <span className="text-2xl font-bold text-gray-700">Tech Mahindra</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
              <span className="text-2xl font-bold text-gray-700">HCL</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
              <span className="text-2xl font-bold text-gray-700">Cognizant</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
              <span className="text-2xl font-bold text-gray-700">Accenture</span>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg flex items-center justify-center hover:shadow-xl transition-all">
              <span className="text-2xl font-bold text-gray-700">Capgemini</span>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Placement Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Step-by-step journey to your dream job</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-xl">1</div>
              <h3 className="text-2xl font-bold text-gray-900">Training</h3>
              <p className="text-gray-600 leading-relaxed">Complete your chosen program with hands-on projects</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-xl">2</div>
              <h3 className="text-2xl font-bold text-gray-900">Preparation</h3>
              <p className="text-gray-600 leading-relaxed">Resume building, mock interviews, and aptitude training</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-xl">3</div>
              <h3 className="text-2xl font-bold text-gray-900">Interviews</h3>
              <p className="text-gray-600 leading-relaxed">Direct interviews with our hiring partners</p>
            </div>
            <div className="text-center space-y-6">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-white text-3xl font-bold shadow-xl">4</div>
              <h3 className="text-2xl font-bold text-gray-900">Placement</h3>
              <p className="text-gray-600 leading-relaxed">Get placed in top companies with attractive packages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Real stories from our placed students</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-user-tie text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Amit Sharma</h3>
              <p className="text-center text-blue-200 mb-4">Software Engineer @ TCS</p>
              <p className="text-center text-3xl font-bold mb-4">₹6.5 LPA</p>
              <p className="text-gray-300 text-center">"NexaByte's training and placement support helped me land my dream job!"</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-user-tie text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Priya Gupta</h3>
              <p className="text-center text-blue-200 mb-4">Full Stack Developer @ Infosys</p>
              <p className="text-center text-3xl font-bold mb-4">₹7 LPA</p>
              <p className="text-gray-300 text-center">"Best decision to join NexaByte. Got placed within 2 months!"</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl hover:bg-white/20 transition-all">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="fa-solid fa-user-tie text-white text-3xl"></i>
              </div>
              <h3 className="text-2xl font-bold mb-2 text-center">Rahul Singh</h3>
              <p className="text-center text-blue-200 mb-4">Java Developer @ Wipro</p>
              <p className="text-center text-3xl font-bold mb-4">₹5.5 LPA</p>
              <p className="text-gray-300 text-center">"Excellent mentorship and placement assistance. Highly recommended!"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Assurance Details */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Placement Assurance Terms</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">What you need to know</p>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-12 rounded-3xl border-2 border-blue-200">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Eligibility Criteria</h3>
                  <p className="text-gray-600">Minimum 75% attendance and successful completion of all assignments and projects</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Standards</h3>
                  <p className="text-gray-600">Pass all technical assessments and maintain good academic performance throughout the program</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interview Participation</h3>
                  <p className="text-gray-600">Actively participate in all scheduled interviews and placement drives</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Placement Support</h3>
                  <p className="text-gray-600">Unlimited interview opportunities until placement with our partner companies</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Salary Range</h3>
                  <p className="text-gray-600">Minimum CTC of ₹3.5 LPA to ₹12 LPA based on skills and performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placement Support Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Placement Support Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive support for your career success</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-file-lines"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Resume Building</h3>
              <p className="text-gray-600 leading-relaxed">Professional resume creation and optimization to stand out</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-microphone"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Mock Interviews</h3>
              <p className="text-gray-600 leading-relaxed">Practice sessions with industry experts and feedback</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-lightbulb"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Aptitude Training</h3>
              <p className="text-gray-600 leading-relaxed">Quantitative, logical, and verbal reasoning preparation</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-comments"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Soft Skills</h3>
              <p className="text-gray-600 leading-relaxed">Communication, presentation, and personality development</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-brands fa-linkedin"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">LinkedIn Profile</h3>
              <p className="text-gray-600 leading-relaxed">Professional profile optimization and networking guidance</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-bullseye"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Career Counseling</h3>
              <p className="text-gray-600 leading-relaxed">One-on-one guidance for career path selection</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 px-4">Ready to Launch Your Career?</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 px-4">Join our placement program and get your dream job</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Apply Now
            </a>
            <a href="/programs" className="inline-block bg-white/20 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all border-2 border-white">
              View Programs
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
