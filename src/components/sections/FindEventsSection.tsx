import { Button } from "@/components/ui/button-custom";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import ContactForm from "@/components/contactForm";

type Props = {
  heading: string;
  subheading: string;
  buttonText: string;
  href?: string;
  buttonVariant?: "primary" | "secondary" | "ghost" | "link";
  buttonSize?: "default" | "sm" | "lg" | "icon" | "cta";
  aosDelay?: number;
  aosData?: string;
  className?: string;
};

export default function FindEventsSection({
  heading,
  subheading,
  buttonText,
  href = "/search",
  buttonVariant = "primary",
  buttonSize = "cta",
  aosDelay = 200,
  aosData = "fade-up",
  className,
}: Props) {
  return (
    <section
      className={`flex w-full py-12 md:py-24 px-6 lg:py-24 bg-transparent ${className}`}
      data-aos={aosData}
      data-aos-delay={aosDelay}
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-2">
        <div className="space-y-4 text-center">
          <h2 className="mb-4 text-3xl font-extrabold text-secondary">
            {heading}
          </h2>
          <p className="mb-8 text-md text-gray-500">{subheading}</p>
        </div>
        <div className="flex justify-center">
          {href === "/contact" ? (
            <Dialog>
              <Button asChild variant={buttonVariant} size={buttonSize}>
                <DialogTrigger className="text-primary-foreground cursor-pointer dark:text-secondary-foreground">
                  Contact Us
                </DialogTrigger>
              </Button>
              <ContactForm />
            </Dialog>
          ) : (
            <Button asChild variant={buttonVariant} size={buttonSize}>
              <a href={href}>{buttonText}</a>
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
