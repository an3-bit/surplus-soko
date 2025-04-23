
import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuthForm } from "@/components/auth/AuthForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-1 flex flex-col justify-center items-center">
        <div className="w-full max-w-md md:max-w-lg bg-white rounded-xl shadow-xl p-8 my-10 mx-2 space-y-2 border border-gray-100">
          <h2 className="text-3xl font-bold text-center mb-6 text-soko-green tracking-tight">Sign In</h2>
          <AuthForm mode="signin" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LoginPage;
