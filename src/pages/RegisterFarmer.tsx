import { useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AuthForm } from "@/components/auth/AuthForm";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/components/ui/use-toast";
import { getCurrentUser, createFarmerProfile, updateUserProfile } from "@/lib/auth";

const farmerFormSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(2, "Location is required"),
  farmSize: z.string().min(1, "Farm size is required"),
  crops: z.string().min(2, "Please list your main crops"),
  experience: z.string().min(2, "Please provide your farming experience"),
});

const RegisterFarmer = () => {
  const [step, setStep] = useState<"auth" | "details">("auth");
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleAuthSuccess = () => {
    setStep("details");
  };

  const form = useForm<z.infer<typeof farmerFormSchema>>({
    resolver: zodResolver(farmerFormSchema),
    defaultValues: {
      phone: "",
      location: "",
      farmSize: "",
      crops: "",
      experience: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof farmerFormSchema>) => {
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

      // Create the farmer profile
      const { error } = await createFarmerProfile({
        id: user.id,
        location: values.location,
        farmSize: values.farmSize,
        crops: values.crops,
        experience: values.experience,
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
          description: "Your farmer account has been created successfully",
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
        <div className="bg-gradient-to-r from-soko-green/10 to-soko-orange/10 py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8">
                {mode === "signup" ? "Register as a Farmer" : "Welcome Back"}
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
                            className="p-0 h-auto font-semibold text-soko-green"
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
                            className="p-0 h-auto font-semibold text-soko-green"
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
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                              <Input placeholder="County, Sub-county" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="farmSize"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Farm Size (acres)</FormLabel>
                            <FormControl>
                              <Input type="number" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="crops"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Main Crops</FormLabel>
                            <FormControl>
                              <Input placeholder="e.g., Maize, Beans, Tomatoes" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="experience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Farming Experience</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Brief description of your farming experience..."
                                className="min-h-[100px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" variant="sokoGreen" className="w-full" disabled={isSubmitting}>
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

export default RegisterFarmer;
