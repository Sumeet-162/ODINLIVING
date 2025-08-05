import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-ceramics.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-background to-secondary overflow-hidden">
      <div className="container px-4 grid md:grid-cols-2 gap-8 items-center">
        {/* Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground font-display leading-tight">
            Handcrafted
            <span className="block text-primary">Ceramics</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto md:mx-0">
            Elevate your dining experience with our unique, artisanal pieces, 
            designed to bring warmth and beauty to your table.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Learn Our Story
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-premium">
            <img 
              src={heroImage} 
              alt="Stack of handcrafted ceramic bowls" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;