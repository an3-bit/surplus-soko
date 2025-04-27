// src/pages/Register.tsx
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate, useLocation } from "react-router-dom";
import { Sprout, Store } from "lucide-react";

type RegisterProps = {
  mode?: "signup" | "signin";
};

const Register = ({ mode = "signup" }: RegisterProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = (location.state as any)?.from?.pathname || "/";

  const handleFarmerClick = () => {
    localStorage.setItem("registered", "true");
    localStorage.setItem("role", "farmer");
    navigate("/register/farmer", { state: { from } });
  };

  const handleBuyerClick = () => {
    localStorage.setItem("registered", "true");
    localStorage.setItem("role", "buyer");
    navigate("/register/buyer", { state: { from } });
  };

  const handleLoginClick = () => {
    navigate("/login", { state: { from } });
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background image of African farmers harvesting crops */}
      <img
        src="https://images.pexels.com/photos/29559907/pexels-photo-29559907.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="African farmers harvesting crops"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay to darken the image for text readability */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center px-4 sm:px-6 py-16">
        <div className="w-full max-w-4xl text-center mb-12">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Join SurplusSoko
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Register as a farmer or buyer to start trading on our platform
          </p>
        </div>

        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card
            className="border-2 border-soko-green hover:shadow-lg transition-shadow cursor-pointer bg-white/90"
            onClick={handleFarmerClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleFarmerClick();
            }}
          >
            <CardHeader className="text-center">
              <Sprout className="w-12 h-12 mx-auto text-soko-green mb-4" />
              <CardTitle className="text-2xl">Register as Farmer</CardTitle>
              <CardDescription>
                I want to sell my agricultural products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-600">
              <p>✓ Direct access to buyers</p>
              <p>✓ Better prices for your produce</p>
              <p>✓ Real-time market updates</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="sokoGreen"
                className="w-full md:pointer-events-none"
                tabIndex={-1}
              >
                Register as Farmer
              </Button>
            </CardFooter>
          </Card>

          <Card
            className="border-2 border-soko-orange hover:shadow-lg transition-shadow cursor-pointer bg-white/90"
            onClick={handleBuyerClick}
            role="button"
            tabIndex={0}
            onKeyPress={(e) => {
              if (e.key === "Enter") handleBuyerClick();
            }}
          >
            <CardHeader className="text-center">
              <Store className="w-12 h-12 mx-auto text-soko-orange mb-4" />
              <CardTitle className="text-2xl">Register as Buyer</CardTitle>
              <CardDescription>
                I want to purchase agricultural products
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-600">
              <p>✓ Direct sourcing from farmers</p>
              <p>✓ Quality fresh produce</p>
              <p>✓ Competitive pricing</p>
            </CardContent>
            <CardFooter>
              <Button
                variant="sokoOrange"
                className="w-full md:pointer-events-none"
                tabIndex={-1}
              >
                Register as Buyer
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="text-center">
          <Button variant="outline" onClick={handleLoginClick}>
            Already have an account? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
