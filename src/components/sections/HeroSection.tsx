
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import placeholderImage from "/placeholder.svg"; // Using the existing placeholder image

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-soko-earth">
      <div className="container px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:py-32">
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="text-soko-green">Surplus</span>
              <span className="text-soko-orange">Soko</span>
            </h1>
            <p className="mt-4 text-xl font-medium text-gray-900">
              Empowering Kenyan Farmers Through Accessible, Tech-Driven Market Linkages
            </p>
            <p className="mt-4 text-lg text-gray-700">
              We connect farmers directly to buyers using simple SMS technology, eliminating middlemen and reducing food waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="sokoGreen" size="lg" className="group">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="sokoOutlineOrange" size="lg">
                Learn More
              </Button>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-soko-green">30-40%</p>
                <p className="text-xs text-gray-600">Food waste reduction</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-soko-green">2x</p>
                <p className="text-xs text-gray-600">Farmer income increase</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg shadow-sm">
                <p className="text-2xl font-bold text-soko-green">85%</p>
                <p className="text-xs text-gray-600">Kenyan farmers reached</p>
              </div>
            </div>
          </div>
          <div className="relative lg:pl-8">
            <div className="relative">
              <img
                src={placeholderImage}
                alt="Kenyan farmer with produce"
                className="w-full h-auto rounded-lg shadow-xl object-cover"
              />
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg">
                <p className="text-sm font-medium text-gray-900">*384*45#</p>
                <p className="text-xs text-gray-600">Our USSD code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
