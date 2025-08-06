import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight, Filter, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// All products data with collection information - ODIN Living ceramics
const allProducts = [
  {
    id: 1,
    name: "ODIN Home Dining Bowl Set",
    price: "₦25,000",
    priceUSD: "$62",
    category: "Bowls",
    collection: "home-collection",
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
    category: "Plates",
    collection: "restaurant-collection",
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
    category: "Mugs",
    collection: "artisan-collection",
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
    category: "Bowls",
    collection: "family-collection",
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
    category: "Sets",
    collection: "heritage-collection",
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
    category: "Plates",
    collection: "contemporary-collection",
    images: [
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/images%20(1).jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/videoblocks-b25_0027_bkgzsxbeyl_thumbnail-180_10.jpg",
      "https://raw.githubusercontent.com/Sumeet-162/ceramicimages/refs/heads/main/istockphoto-1331026574-612x612.jpg"
    ]
  }
];

const ProductCard = ({ product }: { product: typeof allProducts[0] }) => {
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

        {product.images.length > 1 && (
          <>
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
          </>
        )}
      </div>

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

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCollection, setSelectedCollection] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const categories = ["All", "Bowls", "Plates", "Mugs", "Sets"];
  const collections = ["All", "Home Collection", "Restaurant Collection", "Artisan Collection", "Family Collection", "Heritage Collection", "Contemporary Collection"];

  // Handle URL parameters for collection filtering
  useEffect(() => {
    const collectionParam = searchParams.get('collection');
    if (collectionParam) {
      const collectionName = collectionParam
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
        .replace('&', '&');
      
      if (collections.includes(collectionName)) {
        setSelectedCollection(collectionName);
      }
    }
  }, [searchParams]);

  // Collection name mapping for filtering
  const getCollectionSlug = (collectionName: string) => {
    return collectionName.toLowerCase().replace(/\s+/g, '-').replace('&', '&');
  };

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const categoryMatch = selectedCategory === "All" || product.category === selectedCategory;
      const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const collectionMatch = selectedCollection === "All" || 
        getCollectionSlug(selectedCollection) === product.collection;
      
      return categoryMatch && searchMatch && collectionMatch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return parseFloat(a.price.replace('₦', '').replace(',', '')) - parseFloat(b.price.replace('₦', '').replace(',', ''));
        case "price-high":
          return parseFloat(b.price.replace('₦', '').replace(',', '')) - parseFloat(a.price.replace('₦', '').replace(',', ''));
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="container px-4 py-8 max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            {selectedCollection !== "All" ? selectedCollection : "All Products"}
          </h1>
          <p className="text-base text-gray-600 max-w-xl mx-auto font-light">
            {selectedCollection !== "All" 
              ? `Explore our ${selectedCollection.toLowerCase()} collection`
              : "Discover our complete collection of handcrafted ceramics"
            }
          </p>
        </div>

        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 focus:outline-none focus:border-gray-500 transition-colors text-sm"
            />
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter size={16} className="text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500 transition-colors bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Collection Filter */}
            <div className="flex items-center gap-2">
              <select
                value={selectedCollection}
                onChange={(e) => setSelectedCollection(e.target.value)}
                className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500 transition-colors bg-white"
              >
                {collections.map(collection => (
                  <option key={collection} value={collection}>
                    {collection}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-gray-500 transition-colors bg-white"
            >
              <option value="name">Sort by Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            {selectedCollection !== "All" && ` in ${selectedCollection}`}
            {selectedCategory !== "All" && ` - ${selectedCategory}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-light text-gray-900 mb-2">No products found</h2>
            <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedCollection("All");
              }}
              className="text-sm text-gray-900 border-b border-gray-900 pb-1 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
