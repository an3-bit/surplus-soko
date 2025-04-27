// src/pages/Login.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthForm } from "@/components/auth/AuthForm";
import { Button } from "@/components/ui/button";

type LoginPageProps = {};

const LoginPage: React.FC<LoginPageProps> = () => {
  const navigate = useNavigate();

  // only show nav & footer if they've already registered
  const isRegistered =
    typeof window !== "undefined" &&
    localStorage.getItem("registered") === "true";

  // after successful login, mark as registered and redirect home
  const handleLoginSuccess = () => {
    localStorage.setItem("registered", "true");
    navigate("/");
  };

  // navigate to register for new users
  const handleBackToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen relative flex flex-col">
      {/* Background image of African farmers harvesting maize */}
      <img
        src="https://images.pexels.com/photos/30801781/pexels-photo-30801781/free-photo-of-scenic-rural-landscape-with-farmers-in-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="African farmers harvesting maize"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Main content */}
      <div className="relative z-10 flex flex-col flex-1">
        {isRegistered && <Navbar />}

        <main className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6">
          <div className="w-full max-w-md md:max-w-lg bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-8 space-y-4 border border-white/30">
            <h2 className="text-3xl font-bold text-center text-soko-green tracking-tight">
              Sign In
            </h2>
            {/* Auth form with success callback */}
            <AuthForm mode="signin" onSuccess={handleLoginSuccess} />

            {/* Back to register for new users */}
            {!isRegistered && (
              <div className="text-center pt-2">
                <Button variant="outline" onClick={handleBackToRegister}>
                  Don't have an account? Register
                </Button>
              </div>
            )}
          </div>
        </main>

        {isRegistered && <Footer />}
      </div>
    </div>
  );
};

export default LoginPage;
