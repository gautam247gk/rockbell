import { Button } from "@/components/ui/button-custom";
import { Logo } from "@/components/ui/logo";

export default function HeroSection() {
  return (
    <section className="flex min-h-[500px] mt-[-64px] w-full items-center justify-center pt-24 md:min-h-[700px] md:py-32 bg-gradient-to-b from-secondary/5 to-transparent dark:bg-gradient-to-b dark:from-background dark:to-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center justify-center gap-6">
            <h1 className="max-w-3xl text-4xl font-bold tracking-tighter text-secondary dark:text-foreground sm:text-5xl md:max-w-xl md:text-6xl leading-normal md:leading-normal">
              List your events on{" "}
              <span className="inline-flex align-bottom">
                <Logo className="inline h-[1.5em] w-auto align-bottom" />
              </span>{" "}
              for free
            </h1>
            <p className="mx-auto w-full max-w-4xl text-secondary/90 dark:text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get discovered by thousands of people searching for local events.
              Add your events in minutes and start receiving enquiries.
            </p>
          </div>
          <div className="mt-10 flex justify-center">
            <Button size="cta">
              <a href="/events">Start listing for free</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
