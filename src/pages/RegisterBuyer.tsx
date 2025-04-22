import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { AuthForm } from "@/components/auth/AuthForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCurrentUser, createBuyerProfile, updateUserProfile } from "@/lib/auth";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const buyerFormSchema = z.object({
  businessName: z.string().min(2, "Business name is required"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(2, "Location is required"),
  buyingInterests: z.string().min(2, "Please list products you're interested in"),
  purchaseVolume: z.string().min(2, "Expected purchase volume is required"),
});

const RegisterBuyer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState<"auth" | "details">("auth");
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  
  // Check if user is already authenticated
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          setStep("details");
        }
      } catch (error) {
        console.error("Error checking auth status:", error);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Set up auth state listener
  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log("Auth state changed:", event);
        if (session) {
          setStep("details");
        }
      }
    );

    return () => subscription.unsubscribe();
  }, []);
  
  const form = useForm<z.infer<typeof buyerFormSchema>>({
    resolver: zodResolver(buyerFormSchema),
    defaultValues: {
      businessName: "",
      phone: "",
      location: "",
      buyingInterests: "",
      purchaseVolume: "",
    },
  });

  const handleAuthSuccess = () => {
    setStep("details");
  };

  const onSubmit = async (values: z.infer<typeof buyerFormSchema>) => {
    setIsSubmitting(true);
    try {
      const user = await getCurrentUser();
      
      if (!user) {
        toast({
          title: "Authentication Error",
          description: "Session expired. Please sign in again.",
          variant: "destructive",
        });
        setStep("auth");
        return;
      }

      // Update the user's phone number in the profiles table
      await updateUserProfile(user.id, { phone: values.phone });

      // Create the buyer profile
      const { error } = await createBuyerProfile({
        id: user.id,
        businessName: values.businessName,
        location: values.location,
        buyingInterests: values.buyingInterests,
        purchaseVolume: values.purchaseVolume,
      });

      if (error) {
        toast({
          title: "Error",
          description: error.message || "There was a problem creating your profile",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Registration Complete!",
          description: "Your buyer account has been created successfully",
        });
        navigate("/");
      }
    } catch (error) {
      console.error("Registration error:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex items-center justify-center">
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-soko-orange/10 to-soko-green/10 py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8">
                {mode === "signup" ? "Register as a Buyer" : "Welcome Back"}
              </h1>

              {step === "auth" ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">
                      {mode === "signup" ? "Create Your Account" : "Sign In to Your Account"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AuthForm 
                      mode={mode} 
                      onSuccess={handleAuthSuccess} 
                      includeFullName={mode === "signup"} 
                    />
                    <div className="mt-4 text-center">
                      {mode === "signup" ? (
                        <p className="text-sm text-gray-600">
                          Already have an account?{" "}
                          <Button 
                            variant="link" 
                            className="p-0 h-auto font-semibold text-soko-orange"
                            onClick={() => setMode("signin")}
                          >
                            Sign in
                          </Button>
                        </p>
                      ) : (
                        <p className="text-sm text-gray-600">
                          Don't have an account?{" "}
                          <Button 
                            variant="link" 
                            className="p-0 h-auto font-semibold text-soko-orange"
                            onClick={() => setMode("signup")}
                          >
                            Create one
                          </Button>
                        </p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ) : (
                <div className="bg-white rounded-lg shadow-md p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="businessName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your Company Ltd" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input placeholder="+254..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Business Location</FormLabel>
                            <FormControl>
                              <Input placeholder="City, County" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="buyingInterests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Products of Interest</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="List the agricultural products you're interested in buying..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="purchaseVolume"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Expected Purchase Volume</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., 500kg per week" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" variant="sokoOrange" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? "Submitting..." : "Complete Registration"}
                      </Button>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterBuyer;
