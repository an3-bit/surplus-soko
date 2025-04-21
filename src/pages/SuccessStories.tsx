
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";

const SuccessStories = () => {
  const stories = [
    {
      name: "James Mwangi",
      location: "Nakuru County",
      image: "https://images.pexels.com/photos/13042951/pexels-photo-13042951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "Through SurplusSoko, I've increased my maize yield by 40% and found reliable buyers who pay fair prices. My children can now attend better schools.",
      crop: "Potatoes",
      impact: "40% yield increase"
    },
    {
      name: "Sarah Ochieng",
      location: "Siaya County",
      image: "https://images.pexels.com/photos/2063890/pexels-photo-2063890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "The SMS platform has revolutionized how I sell my produce. No more wastage, and I can plan my harvests better knowing I have guaranteed buyers.",
      crop: "Sweet Potatoes",
      impact: "70% less waste"
    },
    {
      name: "David Kimani",
      location: "Muranga County",
      image: "https://images.pexels.com/photos/27865780/pexels-photo-27865780/free-photo-of-a-man-is-sorting-through-a-pile-of-bags.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      story: "From struggling to find buyers to now having schools and restaurants as regular customers. SurplusSoko has transformed my farming business.",
      crop: "Vegetables",
      impact: "2.5x income increase"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="bg-soko-earth py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <Badge variant="sokoOrange" className="mb-4">Success Stories</Badge>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
                Farmers Thriving with SurplusSoko
              </h1>
              <p className="text-xl text-gray-700">
                Real stories of transformation from our farming community
              </p>
            </div>
          </div>
        </div>

        <div className="py-16">
          <div className="container px-4 mx-auto sm:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {stories.map((story, index) => (
                <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">{story.name}</h3>
                    <p className="text-sm text-soko-green font-medium mt-1">{story.location}</p>
                    <p className="text-gray-600 mt-4">{story.story}</p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-500">{story.crop}</span>
                      <Badge variant="sokoGreen">{story.impact}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStories;
