import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display">
                Crafted with Passion, 
                <span className="block text-primary">Made to Last</span>
              </h2>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                For over two decades, we've been dedicated to the ancient art of ceramic craftsmanship. 
                Each piece in our collection is hand-thrown on the potter's wheel, shaped with intention, 
                and fired with care.
              </p>
              <p>
                We believe that the objects we use daily should bring joy and beauty to our lives. 
                Our ceramics are more than functional pieces—they're a celebration of the human touch 
                in an increasingly digital world.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">1000+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Handmade</div>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-foreground">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Sustainable materials and eco-friendly practices
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Supporting local artisans and traditional techniques
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Creating heirloom pieces that last generations
                </li>
              </ul>
            </div>

            <Button size="lg" variant="outline" className="px-8">
              Learn More About Us
            </Button>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted rounded-lg overflow-hidden">
                <div className="w-full h-full bg-earth-warm/20 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Artisan at Work</span>
                </div>
              </div>
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-natural-beige/30 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Studio Space</span>
                </div>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-square bg-gradient-to-br from-accent/10 to-secondary rounded-lg overflow-hidden">
                <div className="w-full h-full bg-earth-deep/10 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Clay Preparation</span>
                </div>
              </div>
              <div className="aspect-[4/5] bg-gradient-to-br from-muted to-secondary/50 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-ceramic-white/50 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Kiln Firing</span>
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