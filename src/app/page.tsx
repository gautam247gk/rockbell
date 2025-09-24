import HeroSection from "@/components/sections/HeroSection";
import FindEventsSection from "@/components/sections/FindEventsSection";
import PartnerLogos from "@/components/sections/PartnerLogos";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MediaTextSection from "@/components/sections/MediaTextSection";
import Testimonials from "@/components/sections/Testimonials";
import StatsSection from "@/components/sections/StatsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FindEventsSection
        heading="Are you an industry professional?"
        subheading="Search for machinery and industrial events on Rockbell for free"
        buttonText="Search for events"
        href="/events"
        buttonVariant="secondary"
        aosDelay={0}
        aosData="none"
      />
      <PartnerLogos />
      <div className="container justify-center items-center flex w-full flex-col gap-12 py-12 md:gap-12 md:py-24 lg:py-32">
        <MediaTextSection
          title="Reach 100,000+ industry professionals"
          description="Tap into the largest community of engaged industry professionals searching for machinery, equipment and industrial events. Every day, professionals look for events like yours. List and be one of the top results they see."
          imageSrc="/workers.jpg"
          imageAlt="Reach 100,000+ industry professionals"
          href="/events"
          buttonText="List for Free"
          imagePosition="right"
        />
        <MediaTextSection
          title="Be discovered by local businesses"
          description="Industry professionals use Rockbell to find local machinery and equipment events. By listing with us, your events appear where it counts, based on industry, location and specialization, so you're seen by the businesses most likely to attend."
          imageSrc="/colleagues.jpg"
          imageAlt="Be discovered by local businesses"
          href="/events"
          buttonText="List for Free"
          imagePosition="left"
        />
        <MediaTextSection
          title="Add booking links to drive traffic"
          description="With our paid Booking Links tier, you can add direct booking links to your listings and track clicks. This helps you convert views into registrations on your own website."
          imageSrc="/factory.jpg"
          imageAlt="Add booking links to drive traffic"
          href="/events"
          buttonText="List for Free"
          imagePosition="right"
        />
      </div>
      <FindEventsSection
        heading="Join other top industry providers"
        subheading="Rockbell is trusted by 300+ organizers to promote their industrial events."
        buttonText="Start Listing for free"
        href="/signup"
        buttonVariant="primary"
      />
      <Testimonials />
      <FindEventsSection
        heading="Ready to reach more industry professionals?"
        subheading="Start listing your events where professionals are already searching."
        buttonText="Start Listing for free"
        href="/signup"
        buttonVariant="primary"
      />
      <PartnerLogos />
      <FeaturesSection />
      <StatsSection />
      <FindEventsSection
        heading="Start getting discovered today"
        subheading="List your industrial activities by sector and location so the right professionals find you."
        buttonText="Start Listing for free"
        href="/signup"
        buttonVariant="primary"
      />
      <PricingSection />
      <FindEventsSection
        heading="Not sure which plan is right for you?"
        subheading="We’re here to help. Whether you’re just starting out or growing fast, we’ll walk you through the best option for your business."
        buttonText="Contact Us"
        href="/contact"
        buttonVariant="primary"
      />
      <FAQSection />
      <FindEventsSection
        heading="Still have questions?  "
        subheading="Get in touch with our team to learn more about how Rockbell can help your business grow."
        buttonText="Contact Us"
        href="/contact"
        buttonVariant="primary"
      />
    </>
  );
}
