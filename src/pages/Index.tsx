import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCategories from "@/components/ProductCategories";
import FeaturedProducts from "@/components/FeaturedProducts";
import BrandStory from "@/components/BrandStory";
import CustomerReviews from "@/components/CustomerReviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductCategories />
      <FeaturedProducts />
      <BrandStory />
      <CustomerReviews />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;
