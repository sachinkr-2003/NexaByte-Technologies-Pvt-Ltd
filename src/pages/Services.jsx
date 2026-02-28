export default function Services() {
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Services</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">End-to-end technology solutions for modern businesses</p>
          </div>
          
          <div className="space-y-16">
            {/* Custom Software Development */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop" 
                  alt="Custom Software Development" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Enterprise-Grade Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">ERP & CRM Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Business Process Automation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">API Development & Integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Database Design & Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Legacy System Modernization</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Web Development */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Modern Web Solutions</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Responsive Website Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">E-commerce Platforms</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Progressive Web Apps (PWA)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Content Management Systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Web Portal Development</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" 
                  alt="Web Development" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop" 
                  alt="Mobile App Development" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
              <div className="order-1 md:order-2 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Mobile Excellence</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">iOS & Android Native Apps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">React Native & Flutter Apps</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">UI/UX Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">App Store Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Maintenance & Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Cloud & DevOps */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Cloud Infrastructure</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">AWS, Azure, Google Cloud</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Cloud Migration Services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">CI/CD Pipeline Setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Docker & Kubernetes</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600 text-xl">✓</span>
                    <span className="text-gray-600 text-lg">Infrastructure as Code</span>
                  </li>
                </ul>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" 
                  alt="Cloud & DevOps" 
                  className="rounded-3xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Cutting-edge tools and frameworks</p>
          </div>
          <div className="grid md:grid-cols-5 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-2">MERN Stack</h3>
              <p className="text-sm text-gray-300">MongoDB, Express, React, Node</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-2">Java</h3>
              <p className="text-sm text-gray-300">Spring Boot, Hibernate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-2">Python</h3>
              <p className="text-sm text-gray-300">Django, Flask, FastAPI</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-2">.NET</h3>
              <p className="text-sm text-gray-300">ASP.NET, C#</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all">
              <h3 className="text-xl font-bold mb-2">PHP</h3>
              <p className="text-sm text-gray-300">Laravel, CodeIgniter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Development Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">A proven methodology for successful project delivery</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">1</div>
              <h3 className="text-xl font-bold text-gray-900">Discovery</h3>
              <p className="text-gray-600">Understanding your requirements and goals</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">2</div>
              <h3 className="text-xl font-bold text-gray-900">Design</h3>
              <p className="text-gray-600">Creating intuitive and engaging interfaces</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">3</div>
              <h3 className="text-xl font-bold text-gray-900">Development</h3>
              <p className="text-gray-600">Building robust and scalable solutions</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold">4</div>
              <h3 className="text-xl font-bold text-gray-900">Deployment</h3>
              <p className="text-gray-600">Launching and maintaining your product</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Why Choose Our Services?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Benefits that set us apart</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-bolt"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Fast Turnaround</h3>
              <p className="text-gray-600 leading-relaxed">Agile development ensures quick delivery without compromising quality.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-dollar-sign"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Cost-Effective</h3>
              <p className="text-gray-600 leading-relaxed">Competitive pricing with transparent billing and no hidden costs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-lock"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Secure & Reliable</h3>
              <p className="text-gray-600 leading-relaxed">Enterprise-grade security and 99.9% uptime guarantee.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-bullseye"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Dedicated Support</h3>
              <p className="text-gray-600 leading-relaxed">24/7 technical support and maintenance services.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-chart-line"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">Built to grow with your business needs.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="text-4xl mb-4"><i className="fa-solid fa-trophy"></i></div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed">500+ successful projects delivered to satisfied clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 px-4">Ready to Start Your Project?</h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-10 text-blue-100 px-4">Let's discuss how we can help you achieve your goals</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="/contact" className="inline-block bg-white text-blue-600 px-12 py-5 rounded-xl font-bold text-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl">
              Get a Free Quote
            </a>
            <a href="/about" className="inline-block bg-white/20 backdrop-blur-sm text-white px-12 py-5 rounded-xl font-bold text-xl hover:bg-white/30 transition-all border-2 border-white">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
