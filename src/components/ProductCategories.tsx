import { Card, CardContent } from "@/components/ui/card";
import bowlImage from "@/assets/ceramic-bowl.jpg";
import plateImage from "@/assets/ceramic-plate.jpg";
import mugImage from "@/assets/ceramic-mug.jpg";
import setImage from "@/assets/ceramic-set.jpg";

const categories = [
  {
    name: "Bowls",
    description: "Perfect for soups and salads",
    image: bowlImage,
    count: "24 items"
  },
  {
    name: "Plates",
    description: "Elegant dining essentials",
    image: plateImage,
    count: "18 items"
  },
  {
    name: "Mugs",
    description: "For your daily rituals",
    image: mugImage,
    count: "15 items"
  },
  {
    name: "Sets",
    description: "Complete collections",
    image: setImage,
    count: "8 sets"
  }
];

const ProductCategories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated collections of handcrafted ceramics, 
            each piece telling its own story of artisanal excellence.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category) => (
            <Card 
              key={category.name} 
              className="group cursor-pointer border-0 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {category.description}
                  </p>
                  <p className="text-xs text-primary font-medium">
                    {category.count}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;