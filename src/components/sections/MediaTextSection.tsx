import Image from "next/image";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button-custom";

type Props = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
  href?: string;
  buttonText?: string;
  imagePosition?: "left" | "right";
  aosDelay?: number;
};

export default function MediaTextSection({
  title,
  description,
  imageSrc,
  imageAlt = "",
  href = "#",
  buttonText = "List for free",
  imagePosition = "right",
  aosDelay = 200,
}: Props) {
  const isRight = imagePosition === "right";

  return (
    <section
      className="w-full max-w-7xl py-12 md:py-10 lg:py-10"
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    >
      <div
        className={cn(
          "flex flex-col items-end px-6 md:px-0 justify-between gap-4 md:gap-12 sm:flex-row",
          isRight ? "sm:flex-row-reverse lg:items-stretch" : "lg:items-stretch"
        )}
      >
        <div className="flex w-full items-center justify-center">
          <div className="relative aspect-[4/3] w-full md:aspect-square">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className={cn(
                "object-cover object-center",
                isRight ? "rounded-r-md" : "rounded-l-md"
              )}
              priority={false}
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-center space-y-6 p-4 md:p-6">
          <h2 className="max-w-lg text-3xl font-bold tracking-tight text-secondary lg:text-5xl">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{description}</p>
          <div className="w-auto">
            <Button
              asChild
              variant="secondary"
              size="cta"
              className="bg-transparent"
            >
              <a href={href} className="block w-full">
                {buttonText}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
