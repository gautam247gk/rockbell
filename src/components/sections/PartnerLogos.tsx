"use client";
import { useEffect, useMemo, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
export default function PartnerLogos() {
  const basePath = "/partner-logos";
  const logos = useMemo(
    () => [
      "1.webp",
      "2.webp",
      "3.webp",
      "4.webp",
      "5.webp",
      "6.webp",
      "7.webp",
      "8.webp",
      "9.webp",
      "10.webp",
      "11.webp",
      "12.webp",
      "13.webp",
      "14.webp",
      "15.webp",
      "16.webp",
    ],
    []
  );
  const plugin = useRef(
    AutoScroll({
      speed: 2,
      active: true,
      stopOnInteraction: false,
      stopOnFocusIn: false,
      stopOnMouseEnter: false,
    })
  );
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    return () => {};
  }, []);

  return (
    <section
      className="flex w-auto flex-col aos animate"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <Carousel
        opts={{
          loop: true,
          align: "start",
          skipSnaps: true,
          inViewThreshold: 0,
        }}
        plugins={[plugin.current]}
        className="relative mx-auto w-full py-5 touch-none pointer-events-none"
      >
        <CarouselContent>
          {[...logos].map((file, i) => (
            <CarouselItem
              className="flex-[0_0_40%] pl-4 sm:flex-[0_0_33.33%] md:flex-[0_0_25%] lg:flex-[0_0_15%]"
              key={`${file}-${i}`}
            >
              <img
                src={`${basePath}/${file}`}
                alt="partner logo"
                className="h-100 object-contain aspect-auto"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
