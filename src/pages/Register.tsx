
import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Sprout, Store } from "lucide-react";

type RegisterProps = {
  mode?: "signup" | "signin";
};

const Register = ({ mode = "signup" }: RegisterProps) => {
  const navigate = useNavigate();
  
  const handleFarmerClick = () => {
    navigate("/register/farmer");
  };

  const handleBuyerClick = () => {
    navigate("/register/buyer");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div 
          className="bg-cover bg-center py-16" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/2519484/pexels-photo-2519484.jpeg")',
          }}
        >
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">Join SurplusSoko</h1>
              <p className="mt-4 text-xl text-gray-200">
                Register as a farmer or buyer to start trading on our platform
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-center mb-8">Choose your registration type</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-soko-green hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Sprout className="w-12 h-12 mx-auto text-soko-green mb-4" />
                    <CardTitle className="text-2xl">Register as Farmer</CardTitle>
                    <CardDescription>I want to sell my agricultural products</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-gray-600">
                    <p>✓ Direct access to buyers</p>
                    <p>✓ Better prices for your produce</p>
                    <p>✓ Real-time market updates</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="sokoGreen" className="w-full" onClick={handleFarmerClick}>
                      Register as Farmer
                    </Button>
                  </CardFooter>
                </Card>

                <Card className="border-2 border-soko-orange hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center">
                    <Store className="w-12 h-12 mx-auto text-soko-orange mb-4" />
                    <CardTitle className="text-2xl">Register as Buyer</CardTitle>
                    <CardDescription>I want to purchase agricultural products</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-gray-600">
                    <p>✓ Direct sourcing from farmers</p>
                    <p>✓ Quality fresh produce</p>
                    <p>✓ Competitive pricing</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="sokoOrange" className="w-full" onClick={handleBuyerClick}>
                      Register as Buyer
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
