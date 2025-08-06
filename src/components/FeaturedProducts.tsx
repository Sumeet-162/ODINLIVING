import { Star } from "lucide-react";
import { useNavigate } from "react-router-dom";
import bowlImage from "@/assets/ceramic-bowl.jpg";
import plateImage from "@/assets/ceramic-plate.jpg";
import mugImage from "@/assets/ceramic-mug.jpg";
import setImage from "@/assets/ceramic-set.jpg";

const featuredProducts = [
  {
    id: 1,
    name: "ODIN Home Dining Bowl Set",
    price: "₦25,000",
    priceUSD: "$62",
    originalPrice: null,
    originalPriceUSD: null,
    rating: 4.9,
    reviews: 87,
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg",
    description: "Perfect for home & restaurant",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "ODIN Restaurant Collection",
    price: "₦38,500",
    priceUSD: "$95",
    originalPrice: "₦45,000",
    originalPriceUSD: "$111",
    rating: 4.8,
    reviews: 63,
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg",
    description: "Professional grade ceramic",
    badge: "Sale"
  },
  {
    id: 3,
    name: "ODIN Living Artisan Mugs",
    price: "₦18,000",
    priceUSD: "$44",
    originalPrice: null,
    originalPriceUSD: null,
    rating: 4.7,
    reviews: 124,
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg",
    description: "Perfect for daily rituals",
    badge: null
  },
  {
    id: 4,
    name: "ODIN Heritage Tea Service",
    price: "₦65,000",
    priceUSD: "$161",
    originalPrice: "₦75,000",
    originalPriceUSD: "$186",
    rating: 4.9,
    reviews: 45,
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png",
    description: "Complete tea service set",
    badge: "Limited"
  }
];

const FeaturedProducts = () => {
  const navigate = useNavigate();

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            ODIN Collections
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto font-light">
            Meaningful and affordable products inspired by deep appreciation of beauty
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer"
              onClick={() => handleProductClick(product.id)}
            >
              <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
                />
                
                {/* Badge */}
                {product.badge && (
                  <div className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium ${
                    product.badge === 'Sale' ? 'bg-red-500 text-white' :
                    product.badge === 'Bestseller' ? 'bg-gray-900 text-white' :
                    'bg-gray-700 text-white'
                  }`}>
                    {product.badge}
                  </div>
                )}
              </div>

              <div className="space-y-1">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-1">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'fill-gray-800 text-gray-800' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                {/* Product Info */}
                <h3 className="text-sm font-medium text-gray-900">
                  {product.name}
                </h3>

                {/* Price */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600">
                      {product.priceUSD}
                    </span>
                    {product.originalPriceUSD && (
                      <span className="text-xs text-gray-400 line-through">
                        {product.originalPriceUSD}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const message = `Hi ODIN Living! I'm interested in viewing your complete collection of ceramic products. Could you share more details?`;
              const whatsappUrl = `https://wa.me/2349035643110?text=${encodeURIComponent(message)}`;
              window.open(whatsappUrl, '_blank');
            }}
            className="text-sm text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
          >
            Order via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;