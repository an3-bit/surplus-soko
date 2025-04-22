
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { signIn, signUp, AuthError } from "@/lib/auth";
import { useToast } from "@/components/ui/use-toast";

interface AuthFormProps {
  mode: "signup" | "signin";
  onSuccess?: (data: any) => void;
  includeFullName?: boolean;
}

const signInSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const signUpSchema = signInSchema.extend({
  fullName: z.string().min(2, "Name must be at least 2 characters").optional(),
});

export function AuthForm({ mode, onSuccess, includeFullName = false }: AuthFormProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = mode === "signup" ? signUpSchema : signInSchema;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(includeFullName ? { fullName: "" } : {}),
    },
  });

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      let error: AuthError | null = null;
      let data = null;

      if (mode === "signup") {
        const result = await signUp(
          values.email, 
          values.password, 
          includeFullName ? { full_name: values.fullName } : undefined
        );
        error = result.error;
        data = result.data;
      } else {
        const result = await signIn(values.email, values.password);
        error = result.error;
        data = result.data;
      }

      if (error) {
        toast({
          title: "Authentication Error",
          description: error.message,
          variant: "destructive",
        });
      } else {
        toast({
          title: mode === "signup" ? "Account created" : "Welcome back!",
          description: mode === "signup" 
            ? "Your account has been created successfully." 
            : "You have been signed in successfully.",
        });
        
        if (onSuccess) {
          onSuccess(data);
        }
      }
    } catch (err) {
      console.error("Auth error:", err);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {includeFullName && mode === "signup" && (
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Processing..." : mode === "signup" ? "Create Account" : "Sign In"}
        </Button>
      </form>
    </Form>
  );
}
