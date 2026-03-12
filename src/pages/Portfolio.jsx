import { useState } from 'react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: 'E-Commerce Platform', category: 'Web Development', description: 'Full-stack e-commerce solution with payment integration, cart management, and order tracking', technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'], icon: 'fa-shopping-cart', image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop' },
    { id: 2, title: 'Hospital Management System', category: 'Healthcare', description: 'Complete hospital management with patient records, appointments, and billing system', technologies: ['React', 'Express', 'MySQL'], icon: 'fa-hospital', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop' },
    { id: 3, title: 'Real Estate Portal', category: 'Web Development', description: 'Property listing and management platform with virtual tours and agent dashboard', technologies: ['Next.js', 'PostgreSQL'], icon: 'fa-building', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop' },
    { id: 4, title: 'School Management App', category: 'Education', description: 'Student, teacher, and admin management system with attendance and grade tracking', technologies: ['React', 'Firebase'], icon: 'fa-graduation-cap', image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop' },
    { id: 5, title: 'Inventory System', category: 'Business', description: 'Stock management and tracking solution with real-time analytics and reporting', technologies: ['Vue.js', 'Laravel'], icon: 'fa-box', image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop' },
    { id: 6, title: 'Food Delivery App', category: 'Mobile App', description: 'Restaurant and food delivery platform with real-time tracking and payment integration', technologies: ['React Native', 'Node.js'], icon: 'fa-burger', image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=800&h=600&fit=crop' },
    { id: 7, title: 'Banking Application', category: 'Finance', description: 'Secure online banking system with transaction management and account services', technologies: ['Angular', 'Spring Boot'], icon: 'fa-building-columns', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop' },
    { id: 8, title: 'CRM Software', category: 'Business', description: 'Customer relationship management with sales pipeline and analytics dashboard', technologies: ['React', 'Django'], icon: 'fa-users', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop' },
    { id: 9, title: 'Fitness Tracker App', category: 'Mobile App', description: 'Health and fitness tracking with workout plans and nutrition monitoring', technologies: ['Flutter', 'Firebase'], icon: 'fa-dumbbell', image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop' },
    { id: 10, title: 'Travel Booking Portal', category: 'Web Development', description: 'Complete travel booking system with flights, hotels, and package deals', technologies: ['Vue.js', 'Express'], icon: 'fa-plane', image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop' }
  ];

  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
            <i className="fa-solid fa-briefcase"></i>
            <span className="font-semibold">Our Work Portfolio</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transforming Ideas Into
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Digital Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
            Explore our collection of successful projects that showcase innovation, quality, and excellence
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-lg">
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-cyan-400">{projects.length}+</div>
              <div className="text-blue-200">Projects</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-purple-400">100%</div>
              <div className="text-blue-200">Satisfaction</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl font-bold text-pink-400">5★</div>
              <div className="text-blue-200">Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white/70 backdrop-blur-lg shadow-sm sticky top-0 z-20 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}</div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-3"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <div className="text-center transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <i className={`fa-solid ${project.icon} text-6xl mb-4 text-white drop-shadow-lg`}></i>
                      <div className="bg-white px-8 py-3 rounded-full shadow-xl">
                        <span className="text-gray-900 font-bold">View Project</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold text-blue-600 shadow-lg">
                    {project.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map(tech => (
                      <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 text-sm rounded-full font-medium border border-blue-100">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-96">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-full w-14 h-14 flex items-center justify-center hover:bg-white transition shadow-xl"
              >
                <i className="fa-solid fa-times text-gray-700 text-2xl"></i>
              </button>
              <div className="absolute bottom-8 left-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <i className={`fa-solid ${selectedProject.icon} text-4xl text-white`}></i>
                  </div>
                  <span className="bg-white/90 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-bold text-blue-600">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-10">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">{selectedProject.title}</h2>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">{selectedProject.description}</p>
              
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <i className="fa-solid fa-code text-3xl text-blue-600"></i>
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-3">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="px-6 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full font-semibold text-lg border border-blue-200 hover:shadow-lg transition">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                <button className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition shadow-xl hover:shadow-2xl">
                  <i className="fa-solid fa-phone mr-3"></i>
                  Contact for Demo
                </button>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-2xl font-bold text-lg hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
