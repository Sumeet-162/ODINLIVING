import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-gray-500 text-sm uppercase tracking-widest font-light">
                About ODIN Living
              </span>
              <h2 className="text-2xl md:text-3xl font-light text-gray-900 leading-relaxed">
                The Art of Living,
                <span className="block">Celebrating Home</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-gray-600 font-light leading-relaxed">
              <p>
                ODIN Living celebrates the art of living through meaningful and affordable ceramic products. 
                Each piece is inspired by a deep appreciation of beauty, designed to bring elegance to both 
                home and restaurant settings.
              </p>
              <p>
                We believe your dining experience should be extraordinary. Our ceramic collections blend 
                traditional Nigerian craftsmanship with contemporary design, creating pieces that tell a story 
                and celebrate the beauty of everyday moments.
              </p>
              <p>
                From intimate family dinners to professional restaurant service, our ceramics are crafted 
                to enhance your connection with food, family, and the art of living well.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 py-8">
              <div className="text-center">
                <div className="text-xl font-light text-gray-900 mb-1">Home</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Celebration</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-light text-gray-900 mb-1">Restaurant</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Quality</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-light text-gray-900 mb-1">Nationwide</div>
                <div className="text-xs text-gray-500 uppercase tracking-wide">Shipping</div>
              </div>
            </div>

            <button 
              onClick={() => {
                const message = `Hi ODIN Living! I'd love to learn more about your brand story and philosophy. Could you share more details about your ceramic collections?`;
                const whatsappUrl = `https://wa.me/2349035643110?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="text-sm text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
            >
              Connect with Us on WhatsApp
            </button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Artisan at Work</span>
                </div>
              </div>
              <div className="aspect-square bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Studio Space</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Clay Preparation</span>
                </div>
              </div>
              <div className="aspect-[4/5] bg-gray-100">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-400 text-xs">Kiln Firing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;