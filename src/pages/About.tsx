
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Building, Award } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const team = [
  {
    name: "Andrew Odhiambo",
    title: "Founder",
    color: "soko-green",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=256&q=80",
    bio:
      "Visionary entrepreneur and passionate about technology for good in Africa.",
  },
  {
    name: "Andrew Omwenga",
    title: "CTO",
    color: "soko-orange",
    img: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&w=256&q=80",
    bio:
      "Tech architect and systems lead, driving robust solutions for challenging environments.",
  },
  {
    name: "Gloria Nyaga",
    title: "COO",
    color: "soko-green",
    img: "https://images.pexels.com/photos/1181696/pexels-photo-1181696.jpeg?auto=compress&w=256&q=80",
    bio:
      "Operations expert with years of experience empowering rural communities.",
  },
  {
    name: "Joy Ndung'u",
    title: "CMO",
    color: "soko-orange",
    img: "https://images.pexels.com/photos/1707828/pexels-photo-1707828.jpeg?auto=compress&w=256&q=80",
    bio:
      "Agribusiness marketer dedicated to connecting farmers and buyers at scale.",
  },
  {
    name: "Dennis Ogweno",
    title: "CFO",
    color: "soko-green",
    img: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&w=256&q=80",
    bio:
      "Finance leader focused on sustainable agricultural impact.",
  },
];

const supporters = [
  {
    name: "M-Pesa",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/M-Pesa_Logo.png/800px-M-Pesa_Logo.png",
  },
  {
    name: "Osho Chemicals",
    logo: "https://osho.co.ke/wp-content/uploads/2021/03/OSHO_logo.png",
  },
  {
    name: "Twiga Foods",
    logo: "https://twiga.com/wp-content/uploads/2020/05/Twiga-Foods-Logo.png",
  },
  {
    name: "Equity Bank",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Equity_Bank_logo.png/1200px-Equity_Bank_logo.png",
  },
  {
    name: "Alliance for a Green Revolution in Africa",
    logo: "https://agra.org/wp-content/uploads/2022/11/AGRA-logo.png",
  },
];

const journeyBg =
  "https://images.pexels.com/photos/325807/pexels-photo-325807.jpeg?auto=compress&w=1200&q=80"; // African farmland background

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
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

        {/* OUR JOURNEY WITH BG */}
        <section
          className="py-16 bg-cover bg-center relative"
          style={{ backgroundImage: `url('${journeyBg}')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-soko-earth/80"></div>
          <div className="container px-4 mx-auto sm:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="sokoGreen" className="mb-4">Our Story</Badge>
              <h2 className="text-3xl font-bold text-gray-900">Our Journey</h2>
            </div>
            <div className="mt-8 prose prose-lg max-w-none text-gray-700 mx-auto text-center">
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
        </section>

        {/* OUR MISSION */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="sokoOrange" className="mb-4">Our Mission</Badge>
              <h2 className="text-3xl font-bold text-gray-900">What Drives Us</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-soko-green/10 text-soko-green rounded-full">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                <p className="mt-2 text-gray-600">
                  To empower Kenyan farmers with accessible technology that connects them directly to fair markets.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
                <div className="flex items-center justify-center w-12 h-12 mb-4 bg-soko-orange/10 text-soko-orange rounded-full">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                <p className="mt-2 text-gray-600">
                  A Kenya where no farmer is forced to waste their harvest or sell below fair market value.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 animate-fade-in">
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

        {/* OUR TEAM - 5 MEMBERS */}
        <section className="py-16 bg-white">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="sokoGreen" className="mb-4">Our Team</Badge>
              <h2 className="text-3xl font-bold text-gray-900">The People Behind SurplusSoko</h2>
            </div>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
              {team.map((member) => (
                <div className="text-center flex flex-col items-center" key={member.name}>
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden bg-gray-200 shadow hover-scale transition duration-200">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                    />
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className={`text-sm ${member.color === "soko-green" ? "text-soko-green" : "text-soko-orange"}`}>
                    {member.title}
                  </p>
                  <p className="mt-2 text-xs text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* OUR SUPPORTERS - LOGO CAROUSEL */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <Badge variant="sokoOrange" className="mb-4">Partners</Badge>
              <h2 className="text-3xl font-bold text-gray-900">Our Supporters</h2>
              <p className="mt-4 text-lg text-gray-600">
                We're proud to work with organizations committed to transforming Kenyan agriculture
              </p>
            </div>
            <div className="mt-12 max-w-4xl mx-auto">
              <Carousel className="relative w-full px-8" 
                        opts={{ loop: true, align: 'start', dragFree: true }}>
                <CarouselContent className="py-4">
                  {supporters.map((partner, idx) => (
                    <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4 flex justify-center items-center">
                      <div className="p-2 h-32 flex items-center justify-center">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} logo`}
                          className="max-h-24 max-w-full object-contain transition-all duration-200 hover:scale-105"
                          onError={(e) => {
                            console.error(`Failed to load image: ${partner.logo}`);
                            e.currentTarget.src = "https://placehold.co/200x100/EAEAEA/CCCCCC?text=Logo";
                          }}
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-0" />
                <CarouselNext className="right-0" />
              </Carousel>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
