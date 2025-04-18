
import { Badge } from "@/components/ui/badge";

export function ImpactSection() {
  return (
    <section className="py-16 bg-gray-50" id="impact">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="sokoOrange" className="mb-4">Real Change</Badge>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Impact on Kenya</h2>
          <p className="mt-4 text-lg text-gray-600">
            Addressing Kenya's $1.6 billion annual loss in agricultural value
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-soko-green">30-40%</div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Post-Harvest Loss Reduction</h3>
              <p className="mt-2 text-sm text-gray-600">
                Fresh produce previously lost due to poor storage and market access now reaches consumers.
              </p>
              <div className="w-full h-2 mt-4 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-soko-green" style={{ width: '35%' }}></div>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-soko-orange">2x</div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Farmer Income Increase</h3>
              <p className="mt-2 text-sm text-gray-600">
                Smallholder farmers now earn fair prices by bypassing exploitative middlemen.
              </p>
              <div className="w-full h-2 mt-4 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-soko-orange" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
              <div className="text-3xl font-bold text-soko-green">15%</div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">Food Cost Reduction</h3>
              <p className="mt-2 text-sm text-gray-600">
                Schools, hospitals, and processors source quality produce more efficiently.
              </p>
              <div className="w-full h-2 mt-4 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-soko-green" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
          <h3 className="text-xl font-bold text-gray-900 mb-4">The Problem We're Solving</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-soko-orange/20 flex items-center justify-center text-soko-orange text-sm font-medium">
                  1
                </span>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Food waste:</span> 30–40% of fresh produce is lost post-harvest due to poor storage and market access.
                </p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-soko-orange/20 flex items-center justify-center text-soko-orange text-sm font-medium">
                  2
                </span>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Unfair pricing:</span> Smallholder farmers (80% of Kenya's agricultural workforce) earn less than 50% of fair market prices.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-soko-orange/20 flex items-center justify-center text-soko-orange text-sm font-medium">
                  3
                </span>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Supply chain inefficiency:</span> Buyers struggle to source quality produce efficiently, driving up costs.
                </p>
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-soko-orange/20 flex items-center justify-center text-soko-orange text-sm font-medium">
                  4
                </span>
                <p className="ml-3 text-gray-700">
                  <span className="font-medium">Economic loss:</span> This cycle costs Kenya $1.6 billion annually in lost agricultural value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
