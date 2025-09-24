"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const testimonials = [
  {
    stars: 5,
    quote: `Rockbell has been an invaluable tool for our camps. The platform has not only helped us build a strong parent community but also significantly boosted our visibility, making it easier to connect with families and enhance the overall camp experience. The team is also great to work with—always supportive and professional. I highly recommend it to anyone looking to expand their reach.`,
    name: "Sofia Kamal",
    title: "Founder of Happy Campers Club",
  },
  {
    stars: 5,
    quote: `Rockbell has been an excellent provider to my company from the start, willing to go the extra mile and help in any way possible. I would highly recommend Rockbell to any company who are looking to boost traffic and uplift their business.`,
    name: "Jake Hattam",
    title: "Managing Director at ABC Sports Stars",
  },
  {
    stars: 5,
    quote: `Rockbell has been a great resource for spreading the word for our events in Southwest London. The team are very friendly, quick to respond and always happy to help. The listing service is easy to use and very flexible as to how/if you want to sell your tickets.`,
    name: "Erica Guy",
    title: "Director at MiniJam",
  },
  {
    stars: 5,
    quote:
      "Rockbell has been a brilliant platform to work with - the team are incredibly friendly, supportive, and always happy to help. The pricing is very reasonable, and we really appreciate the value it offers. We're excited to grow awareness of our London Witches & History Bankside Walking Tour by being featured on such a family focused and easy to use platform.",
    name: "Lizzie Carter",
    title: "Enthral Experiencess",
  },
];

export default function Testimonials() {
  return (
    <section
      className="container py-12 md:py-24 lg:py-24"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="mb-12 mx-5 text-center md:mb-20">
        <h2 className="mb-3 text-3xl font-bold text-secondary md:text-4xl">
          Trusted by organisers across London
        </h2>
        <p className="text-center text-gray-600 mb-8">
          See how Rockbell is helping local providers boost bookings, save time,
          and connect with the right audience.
        </p>

        <Carousel
          opts={{ loop: true, align: "center" }}
          className="relative mx-auto w-[80%] lg:w-[90%] max-w-screen  py-5 "
        >
          <CarouselContent className="m-2">
            {testimonials.map((t, i) => (
              <CarouselItem
                key={i}
                role="group"
                aria-roledescription="slide"
                className="pl-4 items-stretch md:basis-1/2 lg:basis-1/3"
              >
                <Card className="justify-between border-gray-200">
                  <CardContent className="p-6 h-[450px] md:h-[350px] flex flex-grow flex-col pb-0 pt-6">
                    <div className="flex gap-1 pb-6">
                      {Array.from({ length: t.stars }).map((_, j) => (
                        <Star
                          key={j}
                          className="size-4 fill-primary text-primary"
                        />
                      ))}
                    </div>

                    <blockquote className="text-md">“{t.quote}”</blockquote>
                  </CardContent>

                  <CardFooter className="flex items-center gap-4 p-6">
                    <div className="flex flex-col items-start">
                      <div className="tracking-tight text-md font-semibold">
                        {t.name}
                      </div>
                      <div className="text-muted-foreground text-sm">
                        {t.title}
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" md:flex" />
          <CarouselNext className=" md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
