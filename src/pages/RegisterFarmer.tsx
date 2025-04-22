
import { useState } from "react";
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
import { getCurrentUser, createFarmerProfile, updateUserProfile } from "@/lib/auth";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const farmerFormSchema = z.object({
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  location: z.string().min(2, "Location is required"),
  farmSize: z.string().min(1, "Farm size is required"),
  crops: z.string().min(2, "Please list your main crops"),
  experience: z.string().min(2, "Please provide your farming experience"),
});

const RegisterFarmer = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [step, setStep] = useState<"auth" | "details">("auth");
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleAuthSuccess = () => {
    setStep("details");
    toast({
      title: "Account created!",
      description: "Now let's set up your farmer profile",
    });
  };

  const onSubmit = async (values: z.infer<typeof farmerFormSchema>) => {
    setIsSubmitting(true);
    try {
      const user = await getCurrentUser();
      
      if (!user) {
        toast({
          title: "Authentication Error",
          description: "You must be signed in to complete registration",
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

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-gradient-to-r from-soko-green/10 to-soko-orange/10 py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-xl mx-auto">
              <h1 className="text-3xl font-bold text-center mb-8">Register as a Farmer</h1>
              
              {step === "auth" ? (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-center">Create Your Account</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <AuthForm mode="signup" onSuccess={handleAuthSuccess} includeFullName={true} />
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
