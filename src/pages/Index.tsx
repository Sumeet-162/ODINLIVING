import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import ProductListing from "@/components/ProductListing";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductCategories />
      <ProductListing />
      <FeaturedProducts />
      <BrandStory />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
