import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  {
    id: 1,
    name: "ODIN Home Dining Bowl Set",
    price: "₦25,000",
    priceUSD: "$62",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg"
    ]
  },
  {
    id: 2,
    name: "ODIN Restaurant Collection Plates",
    price: "₦38,500",
    priceUSD: "$95",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg"
    ]
  },
  {
    id: 3,
    name: "ODIN Living Artisan Mugs",
    price: "₦18,000",
    priceUSD: "$44",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg"
    ]
  },
  {
    id: 4,
    name: "ODIN Family Serving Collection",
    price: "₦42,000",
    priceUSD: "$104",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png"
    ]
  },
  {
    id: 5,
    name: "ODIN Heritage Tea Service",
    price: "₦65,000",
    priceUSD: "$161",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg"
    ]
  },
  {
    id: 6,
    name: "ODIN Contemporary Plate Collection",
    price: "₦32,000",
    priceUSD: "$79",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg"
    ]
  }
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleProductClick = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="group cursor-pointer" onClick={handleProductClick}>
      {/* Minimalist Image Section with Carousel */}
      <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
        <div className="relative w-full h-full">
          {product.images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`${product.name} - Image ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Minimal Navigation Arrows - Hidden by default, show on hover */}
        <div className="absolute inset-0 flex items-center justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="bg-white/90 text-gray-700 rounded-full p-1.5 shadow-sm hover:bg-white transition-colors duration-200"
          >
            <ChevronLeft size={14} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="bg-white/90 text-gray-700 rounded-full p-1.5 shadow-sm hover:bg-white transition-colors duration-200"
          >
            <ChevronRight size={14} />
          </button>
        </div>

        {/* Minimal Image Indicators */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {product.images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-1 h-1 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-gray-800' 
                    : 'bg-gray-400 hover:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Minimal Product Info */}
      <div className="space-y-1">
        <h3 className="text-sm font-medium text-gray-900 leading-tight">
          {product.name}
        </h3>
        <div className="space-y-0.5">
          <p className="text-sm text-gray-900 font-medium">
            {product.price}
          </p>
          <p className="text-xs text-gray-600">
            {product.priceUSD} USD
          </p>
        </div>
      </div>
    </div>
  );
};

const ProductListing = () => {
  const handleViewAllClick = () => {
    const categoriesSection = document.getElementById('categories');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-light text-gray-900 mb-4">
            ODIN Living Collection
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto font-light">
            Meaningful and affordable ceramic products inspired by deep appreciation of beauty
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={handleViewAllClick}
            className="text-sm text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
          >
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductListing;
