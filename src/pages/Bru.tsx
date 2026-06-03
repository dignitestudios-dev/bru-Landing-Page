import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ContactSection } from "./sections/ContactSection";
import { FeatureHighlightSection } from "./sections/FeatureHighlightSection";
import Navbar from "./sections/Navbar";
import { HowItWorksSection } from "./sections/HowItWorksSection";
import { RealLifeConnectionsSection } from "./sections/RealLifeConnectionsSection";
import HeroSection from "./sections/HeroSection";
import { ApplicationSection } from "./sections/ApplicationSection";
import { Footer } from "./sections/Footer";

export const Bru = (): JSX.Element => {
  return (
    <main className="relative w-full overflow-hidden bg-white">
      <section id="home" className="relative overflow-hidden">
     <img src="/figmaAssets/full-bg-image.png" className="absolute right-0   h-[800px] object-cover z-0" />
          <Navbar />
          <div className="relative  z-20 ">
          
           <HeroSection />
            <img src="/figmaAssets/filter-blur-color.png" className="absolute top-20 w-[100px] h-[500px] left-0 object-cover z-0" />
            
        
        </div>
      </section>
      <div id="why-bru">
        <HowItWorksSection />
      </div>
      <div id="how-it-works">
        <FeatureHighlightSection />
      </div>
      <div id="real-life">
        <RealLifeConnectionsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <ApplicationSection />
      <Footer />
      
    </main>
  );
};
