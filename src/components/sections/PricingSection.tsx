import { ChartNoAxesCombined, Leaf, CreditCard, Check } from "lucide-react";
import * as React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardAction,
} from "../ui/card";
import { Button } from "../ui/button-custom";

export default function PricingSection() {
  return (
    <section
      id="pricing"
      className="container w-full  py-12 md:py-24 lg:py-24 "
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="flex flex-col border-b-2 px-12 border-gray-200 text-secondary items-center text-center">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm  font-semibold">Pricing</p>
          <h2 className="text-2xl font-bold  sm:text-3xl md:text-4xl">
            Made for event organisers like you
          </h2>
          <p className="mx-auto max-w-2xl text-gray-500">
            We&apos;ve worked with hundreds of organisers to create pricing
            that&apos;s simple, flexible and designed to support your business
            at every stage.
          </p>
        </div>

        <div className="my-12 mx-24 w-full md:my-24 ">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm flex flex-col">
              <CardHeader className="px-6">
                <div className="flex gap-4 items-center">
                  <Leaf className="h-8 w-8" />
                  <CardTitle>Free</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="px-6 flex-1 space-y-6 pt-0">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-0">
                    <span className="text-5xl font-bold">£0</span>
                    <span className="text-base font-medium" />
                  </div>
                  <CardDescription>
                    List your events and get parent enquiries—100% free.
                  </CardDescription>
                </div>

                <div>
                  <div className="border-t pt-4 pb-2">
                    <p className="text-sm font-medium">Includes:</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">List events for free</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">Get enquiries by email</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">Organiser support</div>
                    </li>
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex items-center px-6 ">
                <CardAction className="w-full">
                  <Button className="w-full">List for free</Button>
                </CardAction>
              </CardFooter>
            </Card>

            <Card className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm flex flex-col">
              <CardHeader className="px-6 ">
                <div className="flex gap-4 items-center">
                  <CreditCard className="h-8 w-8" />
                  <CardTitle>Pay-As-You-Go</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="px-6 flex-1 space-y-6 pt-0">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-0">
                    <span className="text-5xl font-bold">4.99%</span>
                    <span className="text-base font-medium"> per booking</span>
                  </div>
                  <CardDescription>
                    Start selling tickets with no upfront fees—just 4.99% per
                    booking.
                  </CardDescription>
                </div>

                <div>
                  <div className="border-t pt-4 pb-2">
                    <p className="text-sm font-medium">Includes:</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">
                        Add events and tickets for free
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">Pay 4.99% on tickets sold</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">Booking confirmation emails</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">
                        Customer details with each booking
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">Organiser support</div>
                    </li>
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex items-center px-6 ">
                <CardAction className="w-full">
                  <Button className="w-full">Sell tickets</Button>
                </CardAction>
              </CardFooter>
            </Card>

            <Card className="rounded-lg border border-gray-200 bg-card text-card-foreground shadow-sm flex flex-col">
              <CardHeader className="px-6 ">
                <div className="flex gap-4 items-center">
                  <ChartNoAxesCombined className="h-8 w-8" />
                  <CardTitle>Booking Links</CardTitle>
                </div>
              </CardHeader>

              <CardContent className="px-6 flex-1 space-y-6 pt-0">
                <div className="space-y-2">
                  <div className="flex items-baseline gap-0">
                    <span className="text-5xl font-bold">£8</span>
                    <span className="text-base font-medium"> per month</span>
                  </div>
                  <CardDescription>
                    Turn Rockbell views into bookings on your own site.
                  </CardDescription>
                </div>

                <div>
                  <div className="border-t pt-4 pb-2">
                    <p className="text-sm font-medium">Includes:</p>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">
                        Add booking links to event listings
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">
                        Track clicks from your listings
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">
                        Take bookings on your website
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">
                        Get featured in marketing campaigns
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">Organiser support</div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-0.5 text-secondary">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="text-sm">No hidden fees</div>
                    </li>
                  </ul>
                </div>
              </CardContent>

              <CardFooter className="flex items-center px-6 ">
                <CardAction className="w-full">
                  <Button className="w-full">Get Booking Links</Button>
                </CardAction>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
