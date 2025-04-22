import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export type AuthError = {
  message: string;
};

export async function signUp(email: string, password: string, metadata?: { full_name?: string }) {
  console.log("Attempting to sign up with metadata:", metadata);
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata,
      },
    });

    console.log("Sign up response:", data, error);
    return { data, error };
  } catch (e) {
    console.error("Sign up error:", e);
    return { data: null, error: { message: "Failed to sign up. Please try again." } };
  }
}

export async function signIn(email: string, password: string) {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    console.log("Sign in response:", data, error);
    return { data, error };
  } catch (e) {
    console.error("Sign in error:", e);
    return { data: null, error: { message: "Failed to sign in. Please try again." } };
  }
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export function useAuth() {
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleAuthError = (error: AuthError | null) => {
    if (error) {
      toast({
        title: "Authentication Error",
        description: error.message,
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  return { handleAuthError };
}

export async function getCurrentUser() {
  try {
    const { data, error } = await supabase.auth.getUser();
    
    if (error) {
      console.error("Error getting user:", error);
      return null;
    }
    
    console.log("Current user:", data?.user);
    return data?.user;
  } catch (e) {
    console.error("Get current user error:", e);
    return null;
  }
}

export async function createFarmerProfile(farmerData: {
  id: string;
  location: string;
  farmSize: string;
  crops: string;
  experience: string;
}) {
  const { error } = await supabase
    .from("farmer_profiles")
    .insert([
      {
        id: farmerData.id,
        location: farmerData.location,
        farm_size: farmerData.farmSize,
        crops: farmerData.crops,
        experience: farmerData.experience,
      },
    ]);

  return { error };
}

export async function createBuyerProfile(buyerData: {
  id: string;
  businessName: string;
  location: string;
  buyingInterests: string;
  purchaseVolume: string;
}) {
  const { error } = await supabase
    .from("buyer_profiles")
    .insert([
      {
        id: buyerData.id,
        business_name: buyerData.businessName,
        location: buyerData.location,
        buying_interests: buyerData.buyingInterests,
        purchase_volume: buyerData.purchaseVolume,
      },
    ]);

  return { error };
}

export async function updateUserProfile(id: string, data: { phone?: string; full_name?: string }) {
  const { error } = await supabase
    .from("profiles")
    .update(data)
    .eq("id", id);

  return { error };
}
