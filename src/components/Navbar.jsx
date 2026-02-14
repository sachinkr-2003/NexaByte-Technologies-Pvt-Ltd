import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.png";

export default function Navbar() {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* ================= TOP INFO BAR ================= */}
      <div className="bg-[#1a1f2e] text-gray-300 text-sm hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 h-[44px] flex items-center justify-between">

          {/* Left Info */}
          <div className="flex items-center gap-6">
            <span><i className="fa-solid fa-phone"></i> +91 91353 21898</span>
            <span><i className="fa-solid fa-phone"></i> +91 81125 80707</span>
            <span><i className="fa-solid fa-inbox"></i> info@nexabyte.in</span>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4">
            <a href="https://nexabyte.in" target="_blank" rel="noopener noreferrer" className="border border-gray-600 px-4 py-1 rounded text-sm hover:bg-gray-700 hover:text-white transition">
              Development Website
            </a>
            <Link to="/placement" className="bg-blue-600 px-4 py-1 rounded hover:bg-blue-700 transition">
              Our Placements
            </Link>
            <a href="/brochure.pdf" download className="bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-1 rounded hover:from-blue-600 hover:to-cyan-600 transition">
              Download Brochure
            </a>
          </div>

        </div>
      </div>

      {/* ================= MAIN NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-gradient-to-r from-[#0f1729] via-[#1e3a8a] to-[#0f1729] shadow-xl">
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center h-full">
            <img
              src={logo}
              alt="NexaByte Technologies Pvt Ltd"
              className="h-[150px] w-[250px] object-contain "
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-white">
            <li className="text-cyan-400 border-b-2 border-cyan-400 pb-1">
              <Link to="/">Home</Link>
            </li>
            <li 
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
            >
              <Link to="/about" className="hover:text-cyan-400 transition flex items-center gap-1">
                About Us
                <span className="text-xs">▼</span>
              </Link>
              {aboutOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setAboutOpen(false)}></div>
                  <div className="absolute top-full left-0 mt-4 bg-white rounded-xl shadow-2xl py-3 w-56 border border-gray-100 z-50">
                    <Link to="/about" onClick={() => setAboutOpen(false)} className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group">
                      <span className="text-2xl">🏛️</span>
                      <div>
                        <p className="text-gray-900 font-semibold group-hover:text-blue-600">Company</p>
                        <p className="text-xs text-gray-500">About NexaByte</p>
                      </div>
                    </Link>
                    <Link to="/about#team" onClick={() => setAboutOpen(false)} className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group">
                      <span className="text-2xl">👥</span>
                      <div>
                        <p className="text-gray-900 font-semibold group-hover:text-blue-600">Our Team</p>
                        <p className="text-xs text-gray-500">Meet the experts</p>
                      </div>
                    </Link>
                    <Link to="/about#mission" onClick={() => setAboutOpen(false)} className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group">
                      <span className="text-2xl">🎯</span>
                      <div>
                        <p className="text-gray-900 font-semibold group-hover:text-blue-600">Mission & Vision</p>
                        <p className="text-xs text-gray-500">Our goals</p>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </li>
            <li 
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
            >
              <Link to="/services" className="hover:text-cyan-400 transition flex items-center gap-1">
                Services
                <span className="text-xs">▼</span>
              </Link>
              {servicesOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setServicesOpen(false)}></div>
                  <div className="absolute top-full left-0 mt-4 bg-white rounded-xl shadow-2xl py-3 w-64 border border-gray-100 z-50">
                    <Link to="/services" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group border-b border-gray-100">
                      <span className="text-2xl">💼</span>
                      <div>
                        <p className="text-gray-900 font-bold group-hover:text-blue-600">All Services</p>
                        <p className="text-xs text-gray-500">View complete list</p>
                      </div>
                    </Link>
                    <Link to="/services#software" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group">
                      <span className="text-2xl">💻</span>
                      <div>
                        <p className="text-gray-900 font-semibold group-hover:text-blue-600">Custom Software</p>
                        <p className="text-xs text-gray-500">Tailored solutions</p>
                      </div>
                    </Link>
                    <Link to="/services#web" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group">
                      <span className="text-2xl">🌐</span>
                      <div>
                        <p className="text-gray-900 font-semibold group-hover:text-blue-600">Web Development</p>
                        <p className="text-xs text-gray-500">Modern websites</p>
                      </div>
                    </Link>
                    <Link to="/services#mobile" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group">
                      <span className="text-2xl">📱</span>
                      <div>
                        <p className="text-gray-900 font-semibold group-hover:text-blue-600">Mobile Apps</p>
                        <p className="text-xs text-gray-500">iOS & Android</p>
                      </div>
                    </Link>
                    <Link to="/services#cloud" onClick={() => setServicesOpen(false)} className="flex items-center gap-3 px-5 py-3 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all group">
                      <span className="text-2xl">☁️</span>
                      <div>
                        <p className="text-gray-900 font-semibold group-hover:text-blue-600">Cloud & DevOps</p>
                        <p className="text-xs text-gray-500">Scalable infrastructure</p>
                      </div>
                    </Link>
                  </div>
                </>
              )}
            </li>
            <li><Link to="/programs" className="hover:text-cyan-400 transition">Programs</Link></li>
            <li><Link to="/placement" className="hover:text-cyan-400 transition">Placement</Link></li>
            <li><Link to="/contact" className="hover:text-cyan-400 transition">Contact</Link></li>
          </ul>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/verify"
              className="bg-white text-blue-900 px-5 py-2 rounded-lg font-semibold hover:bg-gray-200 transition shadow-lg"
            >
              Verify Certificate
            </Link>
            <Link
              to="/contact"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-5 py-2 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition shadow-lg"
            >
              Register Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white text-2xl"
          >
            <i className={`fa-solid ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0f1729] border-t border-gray-700">
            <ul className="flex flex-col text-white">
              <li><Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 hover:bg-blue-900 transition">Home</Link></li>
              <li><Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 hover:bg-blue-900 transition">About Us</Link></li>
              <li><Link to="/services" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 hover:bg-blue-900 transition">Services</Link></li>
              <li><Link to="/programs" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 hover:bg-blue-900 transition">Programs</Link></li>
              <li><Link to="/placement" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 hover:bg-blue-900 transition">Placement</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 hover:bg-blue-900 transition">Contact</Link></li>
              <li><Link to="/verify" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 bg-blue-600 hover:bg-blue-700 transition">Verify Certificate</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-6 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 transition">Register Now</Link></li>
            </ul>
          </div>
        )}

      </nav>
    </>
  );
}
