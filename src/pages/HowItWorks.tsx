
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-soko-earth py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">How SurplusSoko Works</h1>
              <p className="mt-4 text-xl text-gray-700">
                Connecting farmers to markets through simple, accessible technology
              </p>
            </div>
          </div>
        </div>
        
        <HowItWorksSection />
        <TechnologySection />

        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto sm:px-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900">Ready to experience SurplusSoko?</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform is designed to be as simple as possible while delivering powerful results for farmers and buyers.
            </p>
            <div className="mt-8">
              <Link to="/">
                <Button variant="sokoGreen" size="lg" className="group">
                  Try Our Demo
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
