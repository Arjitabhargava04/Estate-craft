import HeroSection from "../../components/sections/HeroSection";
import AboutProject from "../../components/sections/AboutProject";
import AmenitiesSection from "../../components/sections/AmenitiesSection";
import GallerySection from "../../components/sections/GallerySection";
import FloorPlanSection from "../../components/sections/FloorPlanSection";
import LocationSection from "../../components/sections/LocationSection";
import ContactSection from "../../components/sections/ContactSection";
// Importing the SEO component to give this page a unique Google title
import SEO from "../../components/common/SEO";
import { PROJECT_NAME } from "../../utils/constants";

const Home = () => {
  return (
    <>
      {/* 1. Setting the SEO for this page */}
      <SEO
        title="Luxury Apartments in Pune"
        description={`Discover ${PROJECT_NAME}—where modern architecture meets timeless luxury. Explore our premium 2 & 3 BHK homes with world-class amenities.`}
      />

      <HeroSection />

      <AboutProject />

      <AmenitiesSection />

      <FloorPlanSection />

      <GallerySection />

      <LocationSection />

      <ContactSection />
    </>
  );
};

export default Home;
