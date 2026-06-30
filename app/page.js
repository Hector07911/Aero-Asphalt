import HeroSection from "./Componente/HeroSection";
import MarcaBMW from "./Componente/MarcaBMW";
import CallToAction from "./Componente/CallToAction";
import FeaturedArticles from "./Componente/FeaturedArticles";
import FinalImage from "./Componente/FinalImage";
import AboutUs from "./Componente/AboutUs";
import Footer from "./Componente/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <MarcaBMW />
      <CallToAction />
      <FeaturedArticles />
      <FinalImage />
      <AboutUs />
      <Footer />
    </div>
  );
}
