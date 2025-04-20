
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "John Kimani",
    role: "Maize Farmer",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    text: "SurplusSoko has transformed my farming business. I now get better prices for my produce and faster payments.",
  },
  {
    name: "Mary Wanjiku",
    role: "Tomato Farmer",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    text: "The platform is so easy to use! I just dial *384*45# and within hours I have buyers for my tomatoes.",
  },
  {
    name: "Peter Ochieng",
    role: "Bean Farmer",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    text: "Since joining SurplusSoko, my income has doubled and I've expanded my farm size significantly.",
  },
  {
    name: "Sarah Adhiambo",
    role: "Potato Farmer",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    text: "The quality verification system gives buyers confidence in my produce. It's a win-win for everyone.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 sm:py-16 bg-soko-cream">
      <div className="container px-4 mx-auto sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="sokoGreen" className="mb-4">Testimonials</Badge>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What Our Farmers Say</h2>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto" opts={{ loop: true, align: "start", dragFree: true }}>
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-none shadow-lg">
                  <CardContent className="p-4 sm:p-6">
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <Avatar className="h-10 w-10 sm:h-12 sm:w-12">
                        <img src={testimonial.image} alt={testimonial.name} className="object-cover" />
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{testimonial.name}</h4>
                        <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} className="w-4 h-4 fill-soko-orange text-soko-orange" />
                      ))}
                    </div>
                    <p className="text-gray-700">{testimonial.text}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
