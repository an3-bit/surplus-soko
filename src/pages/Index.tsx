import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { FarmerStorySection } from "@/components/sections/FarmerStorySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { DemoSection } from "@/components/sections/DemoSection";
import { CTASection } from "@/components/sections/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 overflow-x-hidden">
        <HeroSection />
        <HowItWorksSection />
        <ImpactSection />
        <TechnologySection />
        <TestimonialsSection />
        <FarmerStorySection />
        <DemoSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
