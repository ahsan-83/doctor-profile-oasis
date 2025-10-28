import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SpecialtiesSection from "@/components/sections/SpecialtiesSection";
import CredentialsSection from "@/components/sections/CredentialsSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationsSection from "@/components/sections/LocationsSection";
import ContactSection from "@/components/sections/ContactSection";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,bn,hi", // include this for selected languages
        layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <div id="google_translate_element"></div>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <SpecialtiesSection />
          <CredentialsSection />
          <GallerySection />
          <LocationsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
