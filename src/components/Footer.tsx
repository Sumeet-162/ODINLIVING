import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer id="contact" className="bg-gray-100 text-gray-900">
      <div className="container max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="text-lg font-light tracking-wide">ODIN LIVING</h3>
            <p className="text-gray-600 text-sm leading-relaxed font-light">
              The art of living. A celebration of the home through meaningful 
              and affordable ceramic products inspired by deep appreciation of beauty.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://wa.me/2349035643110" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-wide">COLLECTIONS</h4>
            <nav className="space-y-3">
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Home Collection
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Restaurant Series
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Artisan Pieces
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Tea Service
              </a>
            </nav>
          </div>

          {/* Help */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-wide">SUPPORT</h4>
            <nav className="space-y-3">
              <button 
                onClick={() => {
                  const message = `Hi ODIN Living! I need assistance with my order. Could you please help me?`;
                  const whatsappUrl = `https://wa.me/2349035643110?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="block text-gray-600 hover:text-gray-900 transition-colors text-sm text-left"
              >
                Contact Us
              </button>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                About Our Ceramics
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Shipping & Delivery
              </a>
              <a href="#" className="block text-gray-600 hover:text-gray-900 transition-colors text-sm">
                Care Instructions
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-sm font-medium tracking-wide">CONTACT</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4" />
                <a 
                  href="https://wa.me/2349035643110" 
                  className="hover:text-gray-900 transition-colors"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  +234 903 564 3110
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4" />
                <span>WhatsApp Orders Only</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>Based in Asaba<br />📦 Nationwide shipping available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 ODIN Living. The art of living.
          </p>
          <div className="flex space-x-8 text-sm">
            <a 
              href="https://wa.me/2349035643110" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900 transition-colors"
            >
              Order via WhatsApp
            </a>
            <span className="text-gray-500">
              Asaba, Nigeria
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;