import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Impact from "./pages/Impact";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";
import SuccessStories from "./pages/SuccessStories";
import JoinUs from "./pages/JoinUs";
import Register from "./pages/Register";
import RegisterFarmer from "./pages/RegisterFarmer";
import RegisterBuyer from "./pages/RegisterBuyer";
import AdminDashboard from "./pages/AdminDashboard";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/about" element={<About />} />
          {/*
            <Route path="/join-us" element={<JoinUs />} />
          */}
          <Route path="/register" element={<Register />} />
          <Route path="/register/farmer" element={<RegisterFarmer />} />
          <Route path="/register/buyer" element={<RegisterBuyer />} />
          <Route path="/support" element={<Support />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route
            path="/login"
            element={
              // Login page only shows the sign-in form, no register.
              <div className="min-h-screen flex flex-col">
                <Navbar />
                <main className="flex-1 flex justify-center items-center bg-[#f9fafb]">
                  <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-center mb-8">Sign In</h2>
                    {/* Only the AuthForm in signin mode, no registration link */}
                    <Register mode="signin" />
                  </div>
                </main>
                <Footer />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
