
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Building, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-soko-earth py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">About SurplusSoko</h1>
              <p className="mt-4 text-xl text-gray-700">
                Our mission, team, and vision for Kenyan agriculture
              </p>
            </div>
          </div>
        </div>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center">
                <Badge variant="sokoGreen" className="mb-4">Our Story</Badge>
                <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
              </div>
              
              <div className="mt-8 prose prose-lg max-w-none text-gray-700">
                <p>
                  SurplusSoko was born from a simple observation: while Kenyan farmers struggled to sell their produce at fair prices, buyers just a few kilometers away were paying premium rates for the same goods.
                </p>
                
                <p>
                  Founded in 2022 by a team of agricultural experts and tech innovators, we set out to solve this disconnect using the most accessible technology available—the basic mobile phones that nearly every Kenyan farmer already owns.
                </p>
                
                <p>
                  Our solution didn't require smartphone apps or internet connections. Instead, we leveraged Kenya's widespread mobile network and the familiar USSD technology that even the most remote farmers were comfortable using.
                </p>
                
                <p>
                  Starting with a pilot in Kisumu County that connected 200 maize farmers to local schools and processors, we've now expanded to eight counties and over 15,000 farmers across Kenya.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="sokoOrange" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-gray-900">What Drives Us</h2>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-soko-green/10 text-soko-green rounded-full">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-600">
                  To empower Kenyan farmers with accessible technology that connects them directly to fair markets.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-soko-orange/10 text-soko-orange rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-gray-600">
                  A Kenya where no farmer is forced to waste their harvest or sell below fair market value.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-soko-green/10 text-soko-green rounded-full">
                  <Award className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Our Values</h3>
                <p className="mt-2 text-gray-600">
                  Accessibility, transparency, community-driven verification, and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="sokoGreen" className="mb-4">Our Team</Badge>
              <h2 className="text-3xl font-bold text-gray-900">The People Behind SurplusSoko</h2>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                  <img src="/placeholder.svg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Sarah Mwangi</h3>
                <p className="text-sm text-soko-green">CEO & Co-founder</p>
                <p className="mt-2 text-sm text-gray-600">
                  Former agricultural extension officer with 15 years of experience working with Kenyan farmers.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                  <img src="/placeholder.svg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Daniel Ochieng</h3>
                <p className="text-sm text-soko-orange">CTO & Co-founder</p>
                <p className="mt-2 text-sm text-gray-600">
                  Tech innovator with previous experience at Safaricom and M-Pesa innovation teams.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-200">
                  <img src="/placeholder.svg" alt="Team member" className="w-full h-full object-cover" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">Amina Hassan</h3>
                <p className="text-sm text-soko-green">Head of Operations</p>
                <p className="mt-2 text-sm text-gray-600">
                  Supply chain expert who previously worked with Twiga Foods and Kenya's National Cereals Board.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="sokoOrange" className="mb-4">Partners</Badge>
              <h2 className="text-3xl font-bold text-gray-900">Our Supporters</h2>
              <p className="mt-4 text-lg text-gray-600">
                We're proud to work with organizations committed to transforming Kenyan agriculture
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Building className="w-12 h-12 text-gray-400" />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Building className="w-12 h-12 text-gray-400" />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Building className="w-12 h-12 text-gray-400" />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm">
                <Building className="w-12 h-12 text-gray-400" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
