import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as React from "react";
const FAQ: { question: string; answer: string }[] = [
  {
    question: "How much does it cost to use Rockbell?",
    answer:
      "Rockbell has a free tier where you can list events and receive booking enquiries by email. You can also add tickets and only pay a 4.99% commission on any sales with no upfront costs. If you&apos;d prefer to take bookings on your own site, our £8/month Booking Links plan lets you add direct booking buttons to your listings and track clicks through to your website.",
  },
  {
    question: "How can Rockbell help me reach more parents?",
    answer:
      "Every day, thousands of parents use Rockbell to find classes, camps and activities for their children. Your listings appear in localised search results by age and location, so you're discovered by the families most likely to book.",
  },
  {
    question: "Can I manage bookings directly on my website?",
    answer:
      "Yes you can! With the Booking Links plan, you can add direct booking buttons to your listings and send parents to your own site to complete the booking. You&apos;ll also be able to track how many clicks you're getting.",
  },
  {
    question: "How does customer support work?",
    answer:
      "Our team is here to support you. All plans include organiser support, and we&apos;re happy to help by email or set up a call if needed. Whether you need help setting up your listing or choosing the right plan, we're here to make things easy.",
  },
  {
    question: "Is there a free trial or demo available?",
    answer:
      "Yes. You can get started with Rockbell's free tier straight away, no credit card needed. We also offer a free onboarding session to help you make the most of the platform, whether you're on the free or paid plan. If you choose a paid tier, you'll also be assigned a dedicated account manager to support you as you grow.",
  },
];

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="container w-full py-12 md:py-24 lg:py-24 "
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="container max-w-7xl px-4 md:px-6">
        <div className="flex flex-col text-secondary items-center text-center">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-2xl font-bold  sm:text-3xl md:text-4xl">
              FAQs{" "}
            </h2>
            <p className="mx-auto max-w-2xl text-gray-500">
              Common questions about using Rockbell to grow your children&apos;s
              activities business.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[900px] md:mt-16">
          <div className="mx-auto mt-8 max-w-[900px] md:mt-16">
            <Accordion type="single" collapsible className="w-full">
              {FAQ.map((faq, index) => (
                <AccordionItem
                  key={index}
                  className="border-gray-300"
                  value={`item-${index + 1}`}
                >
                  <AccordionTrigger className="font-semibold text-secondary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 font-normal">
                    <p>{faq.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
