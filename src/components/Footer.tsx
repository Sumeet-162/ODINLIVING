import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-earth-deep text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold font-display">Ceramics</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Artisanal ceramics for the modern home. 
              Handcrafted with passion and care since 1999.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div className="space-y-4">
            <h4 className="font-semibold">Shop</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                New Arrivals
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                Best Sellers
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                All Products
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                Gift Cards
              </a>
            </nav>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="font-semibold">Help</h4>
            <nav className="space-y-2">
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                Contact Us
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                FAQs
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                Shipping & Returns
              </a>
              <a href="#" className="block text-white/80 hover:text-white transition-colors text-sm">
                Size Guide
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80">
                <Mail className="w-4 h-4" />
                <span>hello@ceramics.com</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-white/80">
                <MapPin className="w-4 h-4 mt-0.5" />
                <span>123 Pottery Lane<br />Craft District, NY 10001</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © 2024 Ceramics Co. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/60 hover:text-white transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;