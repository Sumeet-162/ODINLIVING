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
    <section id="categories" className="py-16 bg-white">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            Shop by Category
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto font-light">
            Discover our carefully curated collections of handcrafted ceramics
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div 
              key={category.name} 
              className="group cursor-pointer"
            >
              <div className="aspect-square relative overflow-hidden bg-gray-100 mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
              </div>
              <div className="text-center space-y-1">
                <h3 className="text-sm font-medium text-gray-900">
                  {category.name}
                </h3>
                <p className="text-xs text-gray-600">
                  {category.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;