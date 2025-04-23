
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
import Login from "./pages/Login"; // Import the new Login page

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
          <Route path="/login" element={<Login />} /> {/* Update login route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
