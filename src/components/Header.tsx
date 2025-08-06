import { Search, Menu, ShoppingBag, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogoClick = () => {
    navigate('/');
  };

  const handleCartClick = () => {
    navigate('/cart');
  };

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleShopClick = () => {
    navigate('/shop');
  };

  const handleCollectionsClick = () => {
    navigate('/collections');
  };

  const handleAboutClick = () => {
    // Navigate to about section on home page
    if (location.pathname === '/') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#about');
    }
  };

  const handleContactClick = () => {
    // Navigate to contact section on home page
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/#contact');
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="container max-w-6xl mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <button 
            onClick={handleLogoClick}
            className="text-lg font-light text-gray-900 tracking-wide hover:text-gray-600 transition-colors"
          >
            ODIN LIVING
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={handleShopClick}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Shop
          </button>
          <button 
            onClick={handleCollectionsClick}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Collections
          </button>
          <button 
            onClick={handleAboutClick}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            About
          </button>
          <button 
            onClick={handleContactClick}
            className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
          >
            Contact
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          <button className="text-gray-700 hover:text-gray-900 transition-colors">
            <Search className="h-4 w-4" />
          </button>
          <button 
            onClick={handleProfileClick}
            className="text-gray-700 hover:text-gray-900 transition-colors hidden md:block"
          >
            <User className="h-4 w-4" />
          </button>
          <button 
            onClick={handleCartClick}
            className="text-gray-700 hover:text-gray-900 transition-colors relative"
          >
            <ShoppingBag className="h-4 w-4" />
            {/* Cart item count badge */}
            <span className="absolute -top-1 -right-1 bg-gray-900 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-gray-900 transition-colors md:hidden"
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <nav className="container px-4 py-4 space-y-2">
            <button 
              onClick={() => {
                handleShopClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-sm text-gray-700 hover:text-gray-900 py-2"
            >
              Shop
            </button>
            <button 
              onClick={() => {
                handleCollectionsClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-sm text-gray-700 hover:text-gray-900 py-2"
            >
              Collections
            </button>
            <button 
              onClick={() => {
                handleAboutClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-sm text-gray-700 hover:text-gray-900 py-2"
            >
              About
            </button>
            <button 
              onClick={() => {
                handleContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-sm text-gray-700 hover:text-gray-900 py-2"
            >
              Contact
            </button>
            <button 
              onClick={() => {
                handleProfileClick();
                setIsMobileMenuOpen(false);
              }}
              className="block w-full text-left text-sm text-gray-700 hover:text-gray-900 py-2"
            >
              Profile
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;