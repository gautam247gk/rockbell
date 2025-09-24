import { ChartNoAxesCombined, Link, Megaphone } from "lucide-react";
import * as React from "react";

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="container w-full py-12 px-12 md:py-24 lg:py-24 "
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="flex flex-col text-secondary items-center text-center">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm  font-semibold">Tools for growth</p>
          <h2 className="text-2xl font-bold  sm:text-3xl md:text-4xl">
            Get seen by local families, with less effort.
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            Rockbell helps you reach more London parents without spending hours
            on marketing. List your events for free, boost your visibility, and
            bring in more local leads.
          </p>
        </div>

        <div className="my-12 grid w-full text-secondary gap-8 md:my-24 md:grid-cols-3">
          <div className="flex w-full flex-col items-center space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm bg-background">
            <div className="p-2">
              <Megaphone className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Get discovered locally</h3>
            <p className="text-center text-gray-500">
              Be found by parents searching for activities near them. Your
              listings show up in relevant searches across London.
            </p>
          </div>

          <div className="flex w-full flex-col items-center space-y-4 rounded-lg border border-gray-200 p-4 shadow-sm bg-background">
            <div className="p-2">
              <ChartNoAxesCombined className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Promote your events</h3>
            <p className="text-center text-gray-500">
              Appear in high-traffic spots on Rockbell, and get featured in our
              newsletters. Stand out to the right families at the right time.
            </p>
          </div>

          <div className="flex w-full flex-col items-center space-y-4 rounded-lg  border-gray-200 p-4 shadow-sm bg-background">
            <div className="p-2">
              <Link className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold">Add booking links</h3>
            <p className="text-center text-gray-500">
              Upgrade with Booking Links (optional) to add direct booking
              buttons and track how many parents are clicking through to your
              site.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
