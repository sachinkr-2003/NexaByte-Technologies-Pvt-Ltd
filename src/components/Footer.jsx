import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="NexaByte" className="h-14 w-auto" />
              <h3 className="text-lg font-bold">NexaByte</h3>
            </div>
            <p className="text-gray-400 text-sm">Building next-generation software solutions for modern businesses.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="/programs" className="hover:text-blue-400 transition-colors">Programs</a></li>
              <li><a href="/placement" className="hover:text-blue-400 transition-colors">Placement</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Custom Software</li>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><i className="fa-solid fa-location-dot"></i> Lucknow, Uttar Pradesh</li>
              <li><i className="fa-solid fa-envelope"></i> info@nexabyte.in</li>
              <li><i className="fa-solid fa-phone"></i> +91 91353 21898</li>
              <li><i className="fa-solid fa-phone"></i> +91 81125 80707</li>
            </ul>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fa-brands fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all"><i className="fa-brands fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>© 2024 NexaByte Technologies Pvt. Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
