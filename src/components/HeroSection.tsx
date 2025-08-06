import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/gemini/Gemini_Generated_Image_78hb1f78hb1f78hb.png",
    "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png",
    "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/gemini/Gemini_Generated_Image_a4c8fca4c8fca4c8.png",
    "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/gemini/Gemini_Generated_Image_qncp2pqncp2pqncp.png",
    "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/gemini/Gemini_Generated_Image_tdibrttdibrttdib.png",
    "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      {/* Image Slideshow */}
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image}
              alt={`Ceramic artwork ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Dark Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container px-4 max-w-6xl mx-auto">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-wide">
              The Art of
              <span className="block">Living</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto font-light leading-relaxed">
              A celebration of the home through meaningful and affordable ceramic products inspired by deep appreciation of beauty
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <button 
                onClick={() => window.location.href = '/collections'}
                className="bg-white text-gray-900 px-8 py-3 text-sm hover:bg-gray-100 transition-colors duration-300"
              >
                Shop Collection
              </button>
              <button 
                onClick={() => {
                  const aboutSection = document.getElementById('about');
                  if (aboutSection) {
                    aboutSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="border border-white text-white px-8 py-3 text-sm hover:bg-white hover:text-gray-900 transition-all duration-300"
              >
                Learn Our Story
              </button>
            </div>
            <div className="text-white/70 text-sm text-center pt-6">
              📦 Nationwide shipping | 📍 Based in Asaba
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-1.5">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;