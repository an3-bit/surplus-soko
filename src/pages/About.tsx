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
    img: "https://images.pexels.com/photos/25437427/pexels-photo-25437427/free-photo-of-computer-monitor-displaying-lines-of-code.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio:
      "Visionary entrepreneur and passionate about technology for good in Africa.",
  },
  {
    name: "Andrew Omwenga",
    title: "CTO",
    color: "soko-orange",
    img: "https://images.pexels.com/photos/19805876/pexels-photo-19805876/free-photo-of-man-working-on-computer-in-an-office.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio:
      "Tech architect and systems lead, driving robust solutions for challenging environments.",
  },
  {
    name: "Gloria Nyaga",
    title: "COO",
    color: "soko-green",
    img: "https://images.pexels.com/photos/12902899/pexels-photo-12902899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio:
      "Operations expert with years of experience empowering rural communities.",
  },
  {
    name: "Joy Ndung'u",
    title: "CMO",
    color: "soko-orange",
    img: "https://images.pexels.com/photos/1181279/pexels-photo-1181279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio:
      "Agribusiness marketer dedicated to connecting farmers and buyers at scale.",
  },
  {
    name: "Dennis Ogweno",
    title: "CFO",
    color: "soko-green",
    img: "https://images.pexels.com/photos/16018144/pexels-photo-16018144/free-photo-of-code-on-monitor.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    bio:
      "Finance leader focused on sustainable agricultural impact.",
  },
];

const supporters = [
  {
    name: "M-Pesa",
    logo: "https://www.softwareske.com/wp-content/uploads/2019/03/Safaricom-Mpesa.png",
  },
  {
    name: "Osho Chemicals",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Twiga Foods",
    logo: "data:image/png;base64,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",
  },
  {
    name: "Equity Bank",
    logo: "https://www.businesslist.co.ke/img/ke/r/1666799808-65-equity-bank-limited.jpg",
  },
  {
    name: "Alliance for a Green Revolution in Africa",
    logo: "data:image/png;base64,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",
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
              <Carousel 
                className="relative w-full px-8" 
                opts={{ 
                  loop: true, 
                  align: 'start', 
                  dragFree: true,
                  containScroll: 'trimSnaps'
                }}>
                <CarouselContent className="py-4">
                  {supporters.map((partner, idx) => (
                    <CarouselItem key={idx} className="md:basis-1/3 lg:basis-1/4 flex justify-center items-center">
                      <div className="p-4 h-36 flex items-center justify-center bg-white rounded-lg shadow-sm border border-gray-100">
                        <img
                          src={partner.logo}
                          alt={`${partner.name} partner`}
                          className="max-h-28 max-w-full object-cover rounded transition-all duration-200 hover:scale-105"
                          onError={(e) => {
                            console.error(`Failed to load image: ${partner.logo}`);
                            e.currentTarget.src = "https://placehold.co/300x200/f8f9fa/6c757d?text=" + partner.name;
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
