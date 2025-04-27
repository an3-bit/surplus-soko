import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProtectedRoute from "@/components/auth/ProtectedRoute";

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
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* public routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/register/farmer" element={<RegisterFarmer />} />
          <Route path="/register/buyer" element={<RegisterBuyer />} />
          <Route path="/login" element={<Login />} />

          {/* all other routes are protected */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Index />
              </ProtectedRoute>
            }
          />
          <Route
            path="/how-it-works"
            element={
              <ProtectedRoute>
                <HowItWorks />
              </ProtectedRoute>
            }
          />
          <Route
            path="/impact"
            element={
              <ProtectedRoute>
                <Impact />
              </ProtectedRoute>
            }
          />
          <Route
            path="/about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="/support"
            element={
              <ProtectedRoute>
                <Support />
              </ProtectedRoute>
            }
          />
          <Route
            path="/success-stories"
            element={
              <ProtectedRoute>
                <SuccessStories />
              </ProtectedRoute>
            }
          />
          <Route
            path="/join-us"
            element={
              <ProtectedRoute>
                <JoinUs />
              </ProtectedRoute>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />

          {/* catch all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
