
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";

const Support = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div 
          className="bg-cover bg-center py-16" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.pexels.com/photos/1684187/pexels-photo-1684187.jpeg")',
          }}
        >
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-white sm:text-5xl">Need Help?</h1>
              <p className="mt-4 text-xl text-gray-200">
                Our support team is here to assist you 24/7
              </p>
            </div>
          </div>
        </div>

        <section className="py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-soko-green/10 text-soko-green rounded-full">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Phone Support</h3>
                <p className="mt-2 text-gray-600">+254 700 123 456</p>
                <p className="text-sm text-gray-500">Available 24/7</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-soko-orange/10 text-soko-orange rounded-full">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Email Support</h3>
                <p className="mt-2 text-gray-600">help@surplussoko.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 bg-soko-green/10 text-soko-green rounded-full">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">USSD Help</h3>
                <p className="mt-2 text-gray-600">Dial *384*45*1#</p>
                <p className="text-sm text-gray-500">For USSD menu help</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
