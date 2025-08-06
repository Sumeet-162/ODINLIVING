import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ODIN Living product data - celebrating the art of living
const productData = {
  1: {
    id: 1,
    name: "ODIN Home Dining Bowl Set",
    price: "₦25,000",
    priceUSD: "$62",
    description: "A celebration of the home through meaningful and affordable ceramic bowls. Each piece is inspired by deep appreciation of beauty, perfect for both home and restaurant use.",
    details: [
      "Set of 3 artisan bowls",
      "Perfect for home & restaurant",
      "Food safe glazes",
      "Meaningful design inspired by beauty",
      "Each piece tells a story"
    ],
    dimensions: "Diameter: 15-20cm, Height: 7-10cm",
    material: "Premium Nigerian stoneware clay",
    careInstructions: "Hand wash recommended. Dishwasher safe on gentle cycle.",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg"
    ]
  },
  2: {
    id: 2,
    name: "ODIN Restaurant Collection Plates",
    price: "₦38,500",
    priceUSD: "$95",
    description: "Elegant restaurant-grade plates that celebrate the art of living. Designed for both professional kitchens and sophisticated home dining experiences.",
    details: [
      "Set of 4 restaurant plates",
      "Professional grade ceramic",
      "Heat resistant design",
      "Perfect for fine dining",
      "Inspired by the art of living"
    ],
    dimensions: "Diameter: 25cm",
    material: "Premium Nigerian stoneware clay",
    careInstructions: "Dishwasher safe. Perfect for commercial use.",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg"
    ]
  },
  3: {
    id: 3,
    name: "ODIN Living Artisan Mugs",
    price: "₦18,000",
    priceUSD: "$44",
    description: "Beautiful handcrafted mugs that embody the ODIN philosophy - meaningful products inspired by deep appreciation of beauty. Perfect for your daily rituals.",
    details: [
      "Set of 2 artisan mugs",
      "Perfect for coffee & tea",
      "Comfortable ergonomic design",
      "Heat resistant",
      "Celebrates the art of living"
    ],
    dimensions: "Height: 10cm, Diameter: 9cm",
    material: "Premium Nigerian stoneware clay",
    careInstructions: "Hand wash recommended for longevity.",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg"
    ]
  },
  4: {
    id: 4,
    name: "ODIN Family Serving Collection",
    price: "₦42,000",
    priceUSD: "$104",
    description: "Large serving bowls ideal for family gatherings and celebrations. These pieces combine functionality with the ODIN aesthetic - meaningful design for the modern home.",
    details: [
      "Set of 2 large serving bowls",
      "Perfect for family meals",
      "Restaurant quality",
      "Elegant ODIN design",
      "Built for entertaining"
    ],
    dimensions: "Diameter: 30cm, Height: 10cm",
    material: "Premium Nigerian stoneware clay",
    careInstructions: "Dishwasher safe. Oven safe up to 180°C.",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png"
    ]
  },
  5: {
    id: 5,
    name: "ODIN Heritage Tea Service",
    price: "₦65,000",
    priceUSD: "$161",
    description: "Complete tea service celebrating traditional Nigerian hospitality with ODIN's modern aesthetic. A meaningful addition to any home that appreciates beauty and craftsmanship.",
    details: [
      "Complete tea service set",
      "Teapot and 4 cup collection",
      "Matching serving pieces",
      "Heritage-inspired design",
      "Perfect for entertaining guests"
    ],
    dimensions: "Teapot: 15cm height, Cups: 7cm diameter",
    material: "Fine Nigerian porcelain clay",
    careInstructions: "Hand wash recommended to preserve beauty.",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/ChatGPT%20Image%20Aug%205%2C%202025%2C%2010_52_00%20PM.png",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/il_570xN.4116517537_74rd.jpg"
    ]
  },
  6: {
    id: 6,
    name: "ODIN Contemporary Plate Collection",
    price: "₦32,000",
    priceUSD: "$79",
    description: "Contemporary plates that blend modern Nigerian aesthetics with ODIN's philosophy of meaningful, beautiful products. Perfect for both home and restaurant settings.",
    details: [
      "Set of 6 contemporary plates",
      "Modern Nigerian design",
      "Stackable for easy storage",
      "Restaurant & home use",
      "Affordable beauty"
    ],
    dimensions: "Diameter: 26cm",
    material: "Premium Nigerian stoneware clay",
    careInstructions: "Dishwasher and microwave safe.",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg"
    ]
  }
};

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = productData[Number(id) as keyof typeof productData];

  // Scroll to top when component mounts or product ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Reset image index and quantity when product changes
  useEffect(() => {
    setCurrentImageIndex(0);
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="container px-4 py-16 text-center">
          <h1 className="text-2xl font-light text-gray-900 mb-4">Product not found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-sm text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
          >
            Back to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container px-4 py-8 max-w-7xl mx-auto">
        {/* Back Button */}
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={16} />
          Back to Products
        </button>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-gray-100 overflow-hidden group">
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

              {/* Navigation Arrows */}
              {product.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={prevImage}
                    className="bg-white/90 text-gray-700 rounded-full p-2 shadow-sm hover:bg-white transition-colors duration-200"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-white/90 text-gray-700 rounded-full p-2 shadow-sm hover:bg-white transition-colors duration-200"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

              {/* Image Indicators */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <div className="flex space-x-1">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === currentImageIndex 
                            ? 'bg-gray-800' 
                            : 'bg-gray-400 hover:bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`aspect-square bg-gray-100 overflow-hidden border-2 transition-colors duration-200 ${
                      index === currentImageIndex ? 'border-gray-900' : 'border-transparent hover:border-gray-400'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div className="border-r border-gray-200 pr-8">
              <div className="text-right">
                <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4 tracking-wide">
                  PRODUCT<br />DETAILS
                </h1>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-medium text-gray-900 mb-2">
                  {product.name}
                </h2>
                <div className="space-y-1">
                  <p className="text-2xl font-light text-gray-900">
                    {product.price}
                  </p>
                  <p className="text-lg font-light text-gray-600">
                    {product.priceUSD} USD
                  </p>
                </div>
              </div>

              <p className="text-gray-600 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Quantity Selector */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-900">Quantity</label>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-gray-900">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 border border-gray-300 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gray-900 text-white py-4 text-sm font-medium tracking-wide hover:bg-gray-800 transition-colors duration-300">
                  ADD TO CART
                </button>
                <button 
                  onClick={() => {
                    const message = `Hi ODIN Living! I'm interested in ordering:\n\n${product.name}\nPrice: ${product.price} (${product.priceUSD} USD)\nQuantity: ${quantity}\n\nPlease let me know about availability and delivery to my location.`;
                    const whatsappUrl = `https://wa.me/2349035643110?text=${encodeURIComponent(message)}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="w-full border border-gray-900 text-gray-900 py-4 text-sm font-medium tracking-wide hover:bg-gray-900 hover:text-white transition-colors duration-300"
                >
                  ORDER VIA WHATSAPP
                </button>
              </div>

              {/* Product Information */}
              <div className="space-y-6 pt-8 border-t border-gray-200">
                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-3">Product Details</h3>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {product.details.map((detail, index) => (
                      <li key={index}>• {detail}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Dimensions</h3>
                  <p className="text-sm text-gray-600">{product.dimensions}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Material</h3>
                  <p className="text-sm text-gray-600">{product.material}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2">Care Instructions</h3>
                  <p className="text-sm text-gray-600">{product.careInstructions}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetails;
