
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { FarmerStorySection } from "@/components/sections/FarmerStorySection";
import { CTASection } from "@/components/sections/CTASection";

const Impact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-soko-earth py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Our Impact</h1>
              <p className="mt-4 text-xl text-gray-700">
                Real stories, real change in Kenya's agricultural landscape
              </p>
            </div>
          </div>
        </div>
        
        <ImpactSection />
        <FarmerStorySection />

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">Kenya's Agricultural Potential</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-soko-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </span>
                    <p className="ml-4 text-gray-700">
                      <strong>Economic powerhouse:</strong> Agriculture contributes 33% of Kenya's GDP and employs over 40% of the total population.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-soko-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </span>
                    <p className="ml-4 text-gray-700">
                      <strong>Export strength:</strong> Kenya is the world's leading exporter of black tea and a major producer of coffee, wheat, and corn.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-soko-green text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </span>
                    <p className="ml-4 text-gray-700">
                      <strong>Growth opportunity:</strong> With improved technology and market access, Kenya could double its agricultural production.
                    </p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
                <h3 className="text-lg font-bold text-gray-900">SurplusSoko's Contribution</h3>
                <ul className="mt-4 space-y-4">
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-soko-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      1
                    </span>
                    <p className="ml-4 text-gray-700">
                      <strong>Food security:</strong> Increased production and reduced waste strengthen Kenya's food security.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-soko-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      2
                    </span>
                    <p className="ml-4 text-gray-700">
                      <strong>Rural development:</strong> Higher farmer incomes drive economic development in rural communities.
                    </p>
                  </li>
                  <li className="flex">
                    <span className="w-8 h-8 rounded-full bg-soko-orange text-white flex items-center justify-center font-bold text-sm flex-shrink-0">
                      3
                    </span>
                    <p className="ml-4 text-gray-700">
                      <strong>Climate resilience:</strong> More efficient supply chains reduce carbon footprint and build climate resilience.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Impact;
