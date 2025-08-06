import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Collections data - ODIN Living themed product groupings
const collections = [
  {
    id: 1,
    name: "Home Collection",
    slug: "home-collection",
    description: "A celebration of the home through meaningful ceramic pieces",
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg",
    productCount: 3,
    priceRange: "₦18,000 - ₦42,000",
    products: [
      {
        id: 1,
        name: "ODIN Home Dining Bowl Set",
        price: "₦25,000",
        priceUSD: "$62",
        image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg"
      },
      {
        id: 3,
        name: "ODIN Living Artisan Mugs",
        price: "₦18,000",
        priceUSD: "$44",
        image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg"
      },
      {
        id: 4,
        name: "ODIN Family Serving Collection",
        price: "₦42,000",
        priceUSD: "$104",
        image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg"
      }
    ]
  },
  {
    id: 2,
    name: "Restaurant Collection",
    slug: "restaurant-collection",
    description: "Professional grade ceramics for fine dining experiences",
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg",
    productCount: 2,
    priceRange: "₦32,000 - ₦38,500",
    products: [
      {
        id: 2,
        name: "ODIN Restaurant Collection Plates",
        price: "₦38,500",
        priceUSD: "$95",
        image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg"
      },
      {
        id: 6,
        name: "ODIN Contemporary Plate Collection",
        price: "₦32,000",
        priceUSD: "$79",
        image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg"
      }
    ]
  },
  {
    id: 3,
    name: "Heritage Collection",
    slug: "heritage-collection",
    description: "Traditional Nigerian hospitality meets modern aesthetics",
    image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png",
    productCount: 1,
    priceRange: "₦65,000",
    products: [
      {
        id: 5,
        name: "ODIN Heritage Tea Service",
        price: "₦65,000",
        priceUSD: "$161",
        image: "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png"
      }
    ]
  }
];

const CollectionCard = ({ collection }: { collection: typeof collections[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    if (collection.products.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % collection.products.length);
    }
  };

  const prevImage = () => {
    if (collection.products.length > 1) {
      setCurrentImageIndex((prev) => (prev - 1 + collection.products.length) % collection.products.length);
    }
  };

  const handleCollectionClick = () => {
    // Navigate to shop page with collection filter using slug
    navigate(`/shop?collection=${collection.slug}`);
  };

  const handleProductClick = (productId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    navigate(`/product/${productId}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleCollectionClick}>
      {/* Main Collection Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 mb-6">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover group-hover:opacity-90 transition-opacity duration-300"
        />
        
        {/* Collection Info Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-sm font-medium">Explore Collection</p>
            <p className="text-xs mt-1">{collection.productCount} items</p>
          </div>
        </div>
      </div>

      {/* Collection Details */}
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            {collection.name}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {collection.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>{collection.productCount} items</span>
          <span>{collection.priceRange}</span>
        </div>

        {/* Sample Products */}
        <div className="grid grid-cols-3 gap-2">
          {collection.products.slice(0, 3).map((product, index) => (
            <div 
              key={product.id}
              className="aspect-square bg-gray-100 relative group/product"
              onClick={(e) => handleProductClick(product.id, e)}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover/product:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/product:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                <span className="text-white text-xs font-medium">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Collections = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container px-4 py-8 max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            ODIN Living Collections
          </h1>
          <p className="text-base text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our thoughtfully curated collections that celebrate the art of living. 
            Each collection brings meaningful and affordable beauty to your home and restaurant.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="space-y-4">
            <h2 className="text-xl font-light text-gray-900">
              Can't find what you're looking for?
            </h2>
            <p className="text-sm text-gray-600">
              Browse our complete catalog or get in touch for custom pieces
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => navigate('/shop')}
                className="bg-gray-900 text-white px-8 py-3 text-sm hover:bg-gray-800 transition-colors duration-300"
              >
                Browse All Products
              </button>
              <button 
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    navigate('/#contact');
                  }
                }}
                className="text-sm text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Collections;
