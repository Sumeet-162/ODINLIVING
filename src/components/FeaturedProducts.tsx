import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star } from "lucide-react";
import bowlImage from "@/assets/ceramic-bowl.jpg";
import plateImage from "@/assets/ceramic-plate.jpg";
import mugImage from "@/assets/ceramic-mug.jpg";
import setImage from "@/assets/ceramic-set.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "Handcrafted Bowl",
    price: 45,
    originalPrice: null,
    rating: 4.8,
    reviews: 124,
    image: bowlImage,
    description: "Perfect for soups and salads",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Artisan Plate",
    price: 55,
    originalPrice: 68,
    rating: 4.9,
    reviews: 89,
    image: plateImage,
    description: "Ideal for main courses",
    badge: "Sale"
  },
  {
    id: 3,
    name: "Modern Mug",
    price: 35,
    originalPrice: null,
    rating: 4.7,
    reviews: 156,
    image: mugImage,
    description: "Great for coffee and tea",
    badge: null
  },
  {
    id: 4,
    name: "Complete Set",
    price: 180,
    originalPrice: 220,
    rating: 4.9,
    reviews: 67,
    image: setImage,
    description: "Service for 4 people",
    badge: "Limited"
  }
];

const FeaturedProducts = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground font-display mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our most loved pieces, crafted with passion and attention to detail. 
            Each item is a testament to traditional pottery artistry.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Card 
              key={product.id} 
              className="group cursor-pointer border-0 bg-card hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-3 left-3 px-2 py-1 rounded-full text-xs font-medium ${
                      product.badge === 'Sale' ? 'bg-destructive text-destructive-foreground' :
                      product.badge === 'Bestseller' ? 'bg-primary text-primary-foreground' :
                      'bg-accent text-accent-foreground'
                    }`}>
                      {product.badge}
                    </div>
                  )}
                  
                  {/* Wishlist */}
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  {/* Product Info */}
                  <h3 className="font-semibold text-foreground mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {product.description}
                  </p>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-lg text-foreground">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart */}
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg" className="px-8">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;