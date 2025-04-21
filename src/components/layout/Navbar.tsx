
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
        </nav>
        <div className="hidden md:flex md:items-center md:space-x-3">
          <Link to="/join-us">
            <Button variant="sokoOutlineGreen">Join Us</Button>
          </Link>
          <Link to="/support">
            <Button variant="sokoGreen">Support</Button>
          </Link>
        </div>

        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
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
              <div className="flex flex-col space-y-2 pt-3 border-t">
                <Link to="/join-us">
                  <Button variant="sokoOutlineGreen" className="w-full" onClick={() => setIsOpen(false)}>Join Us</Button>
                </Link>
                <Link to="/support">
                  <Button variant="sokoGreen" className="w-full" onClick={() => setIsOpen(false)}>Support</Button>
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
