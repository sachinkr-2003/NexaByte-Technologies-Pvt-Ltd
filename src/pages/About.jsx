export default function About() {
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
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">NexaByte</span>
          </h1>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming Ideas into Digital Excellence Since 2019
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">Building the Future of Technology</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                NexaByte Technologies was founded with a vision to bridge the gap between innovative technology and business success. We are a premier IT services company specializing in enterprise-grade software solutions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                From startups to established enterprises, we deliver custom software development, cutting-edge web and mobile applications, robust cloud solutions, and industry-leading training programs.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Headquartered in Lucknow, Uttar Pradesh, we proudly serve clients across India, combining technical excellence with unwavering commitment to quality and innovation.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="rounded-3xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Mission & Vision</h2>
            <p className="text-xl text-gray-600">Guiding principles that drive our success</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-5xl">🎯</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To empower businesses with transformative technology solutions that drive growth, efficiency, and innovation. We are committed to delivering scalable, secure, and cutting-edge software products that exceed expectations and create lasting value.
              </p>
            </div>
            <div className="bg-white p-12 rounded-3xl shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mb-8">
                <span className="text-5xl">🔭</span>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-gray-900">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be recognized as India's most trusted and innovative IT solutions provider, setting industry standards for excellence in software development while nurturing the next generation of technology leaders through world-class training programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">The fundamental beliefs that shape our culture and define who we are</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group text-center space-y-6 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-5xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Innovation</h3>
              <p className="text-gray-600">Constantly pushing boundaries with creative and forward-thinking solutions</p>
            </div>
            <div className="group text-center space-y-6 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-5xl">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Excellence</h3>
              <p className="text-gray-600">Delivering superior quality in every project, every time</p>
            </div>
            <div className="group text-center space-y-6 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-5xl">🤝</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Integrity</h3>
              <p className="text-gray-600">Building lasting relationships through honesty and transparency</p>
            </div>
            <div className="group text-center space-y-6 p-8 rounded-2xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 transition-all">
              <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center mx-auto transform group-hover:scale-110 transition-transform shadow-lg">
                <span className="text-5xl">🚀</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Growth</h3>
              <p className="text-gray-600">Embracing continuous learning and relentless improvement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Talented professionals committed to delivering exceptional results</p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl text-center hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-5xl">👨💼</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Leadership Team</h3>
              <p className="text-gray-300 text-lg">Visionary leaders with 15+ years of industry expertise</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl text-center hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-5xl">👨💻</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Development Team</h3>
              <p className="text-gray-300 text-lg">50+ skilled developers mastering cutting-edge technologies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-10 rounded-3xl text-center hover:bg-white/20 transition-all transform hover:-translate-y-2">
              <div className="w-28 h-28 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
                <span className="text-5xl">👨🏫</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">Training Team</h3>
              <p className="text-gray-300 text-lg">Industry-certified trainers shaping future tech leaders</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">Why Choose NexaByte?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">What sets us apart in the competitive IT landscape</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Rapid Delivery</h3>
              <p className="text-gray-600 leading-relaxed">Agile methodologies ensure quick turnaround without compromising on quality or security.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">Bank-grade security protocols protecting your data and applications at all times.</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl border-2 border-blue-200">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Training Excellence</h3>
              <p className="text-gray-600 leading-relaxed">Comprehensive programs with 100% placement assistance for eligible candidates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-bold mb-8">Let's Build Something Extraordinary</h2>
          <p className="text-2xl mb-10 text-blue-100">Partner with us to transform your vision into reality</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Start Your Project
            </a>
            <a href="/services" className="inline-block bg-white/20 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all border-2 border-white">
              Explore Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
