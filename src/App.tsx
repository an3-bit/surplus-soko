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
          {/* <Route path="/join-us" element={<JoinUs />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/register/farmer" element={<RegisterFarmer />} />
          <Route path="/register/buyer" element={<RegisterBuyer />} />
          <Route path="/support" element={<Support />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route
            path="/login"
            element={
              <div className="min-h-screen flex flex-col bg-gray-50">
                <Navbar />
                <main className="flex-1 flex flex-col justify-center items-center">
                  <div className="w-full max-w-md md:max-w-lg bg-white rounded-xl shadow-xl p-8 my-10 mx-2 space-y-2 border border-gray-100">
                    <h2 className="text-3xl font-bold text-center mb-6 text-soko-green tracking-tight">Sign In</h2>
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
