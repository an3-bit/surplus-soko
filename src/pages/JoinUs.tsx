
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sprout, Store } from "lucide-react";
import { Link } from "react-router-dom";

const JoinUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container px-4 py-16 mx-auto sm:px-6">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Join <span className="text-soko-green">Surplus</span>
              <span className="text-soko-orange">Soko</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Choose your role and become part of Kenya's agricultural revolution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-soko-green hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Sprout className="w-12 h-12 mx-auto text-soko-green mb-4" />
                <CardTitle className="text-2xl">Register as Farmer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Direct access to buyers</li>
                  <li>✓ Better prices for your produce</li>
                  <li>✓ Real-time market updates</li>
                  <li>✓ Simple SMS-based trading</li>
                </ul>
                <Link to="/register/farmer">
                  <Button variant="sokoGreen" className="w-full">Register as Farmer</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 border-soko-orange hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <Store className="w-12 h-12 mx-auto text-soko-orange mb-4" />
                <CardTitle className="text-2xl">Register as Buyer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-600 mb-6">
                  <li>✓ Direct sourcing from farmers</li>
                  <li>✓ Quality fresh produce</li>
                  <li>✓ Competitive pricing</li>
                  <li>✓ Reliable supply chain</li>
                </ul>
                <Link to="/register/buyer">
                  <Button variant="sokoOrange" className="w-full">Register as Buyer</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinUs;
