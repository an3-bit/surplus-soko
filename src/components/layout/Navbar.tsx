import { Button } from "@/components/ui/button";
import { Menu, X, LayoutDashboard, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { FarmerRegistrationCard } from "../registration/FarmerRegistrationCard";
import { BuyerRegistrationCard } from "../registration/BuyerRegistrationCard";

// Dummy admin check. Replace with real auth check if you have admin logic!
const isAdmin = () => {
  // In real app, check user roles here
  return window.location.search.includes("admin=1");
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto sm:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/lovable-uploads/logo.png"
            alt="SurplusSoko logo"
            className="h-10"
            draggable={false}
            loading="eager"
          />
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-soko-green">
            Home
          </Link>
          <Link to="/how-it-works" className="text-sm font-medium transition-colors hover:text-soko-green">
            How It Works
          </Link>
          <Link to="/impact" className="text-sm font-medium transition-colors hover:text-soko-green">
            Impact
          </Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-soko-green">
            About
          </Link>
          <Link to="/login" className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-soko-green">
            <LogIn className="w-4 h-4" /> Login
          </Link>
          {isAdmin() && (
            <Link to="/dashboard" className="text-sm font-medium flex items-center gap-1 transition-colors hover:text-soko-green">
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
          )}
        </nav>
        <div className="hidden md:flex md:items-center md:space-x-3">
          {/* REMOVED: NavigationMenu for register buttons */}
          <Link to="/support">
            <Button variant="sokoGreen">Support</Button>
          </Link>
          {isAdmin() && (
            <Link to="/dashboard" className="flex items-center" title="Dashboard">
              <Button variant="ghost" size="icon">
                <LayoutDashboard className="h-6 w-6 text-soko-green" />
              </Button>
            </Link>
          )}
        </div>
        <div className="md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t">
          <div className="container px-4 py-3 mx-auto sm:px-6">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/how-it-works" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                How It Works
              </Link>
              <Link to="/impact" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                Impact
              </Link>
              <Link to="/about" className="text-sm font-medium" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/login" className="text-sm font-medium flex items-center gap-1" onClick={() => setIsOpen(false)}>
                <LogIn className="w-4 h-4" /> Login
              </Link>
              {isAdmin() && (
                <Link to="/dashboard" className="text-sm font-medium flex items-center gap-1" onClick={() => setIsOpen(false)}>
                  <LayoutDashboard className="w-4 h-4" /> Dashboard
                </Link>
              )}
              <div className="flex flex-col space-y-2 pt-3 border-t">
                {/* REMOVED: mobile Register as Farmer/Buyer buttons */}
                <Link to="/support">
                  <Button variant="sokoGreen" className="w-full" onClick={() => setIsOpen(false)}>
                    Support
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
