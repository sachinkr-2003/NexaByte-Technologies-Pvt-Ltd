import { useState } from 'react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [];

  const categories = ['All'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-cyan-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-600 text-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-300 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold">
            <i className="fa-solid fa-sparkles mr-2"></i>Our Work Speaks For Itself
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-200">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Showcasing our successful projects and innovative solutions that drive business growth
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-rocket text-2xl md:text-3xl"></i>
              <span className="font-semibold">0 Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-face-smile text-2xl md:text-3xl"></i>
              <span className="font-semibold">100% Satisfaction</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-star text-2xl md:text-3xl"></i>
              <span className="font-semibold">5-Star Rated</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center py-20">
            <i className="fa-solid fa-folder-open text-6xl mb-4 text-gray-400"></i>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No Projects Yet</h3>
            <p className="text-gray-500">Projects will be added soon</p>
          </div>
        </div>
      </section>
    </div>
  );
}
