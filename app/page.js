import HeroSection from "./Componente/HeroSection";
import CallToAction from "./Componente/CallToAction";
import FeaturedArticles from "./Componente/FeaturedArticles";
import AboutUs from "./Componente/AboutUs";
import Footer from "./Componente/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <CallToAction />
      <FeaturedArticles />
      <AboutUs />
      <Footer />
    </div>
  );
}
