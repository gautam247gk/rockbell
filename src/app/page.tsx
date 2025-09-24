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
        heading="Are you a parent?"
        subheading="Search for events on Rockbell for free"
        buttonText="Search for events"
        href="/events"
        buttonVariant="secondary"
        aosDelay={0}
        aosData="none"
      />
      <PartnerLogos />
      <div className="container justify-center items-center flex w-full flex-col gap-12 py-12 md:gap-12 md:py-24 lg:py-32">
        <MediaTextSection
          title="Reach 100,000+ London parents"
          description="Tap into London's largest community of engaged families searching for baby, toddler and children's activities. Every day, parents look for classes like yours. List and be one of the top results they see."
          imageSrc="/reach-parents.webp"
          imageAlt="Reach 100,000+ London parents"
          href="/events"
          buttonText="List for Free"
          imagePosition="right"
        />
        <MediaTextSection
          title="Be discovered by local families"
          description="Parents across London use Rockbell to find local activities. By listing with us, your classes appear where it counts, based on age, location and interest, so you're seen by the families most likely to book."
          imageSrc="/be-discovered.webp"
          imageAlt="Be discovered by local families"
          href="/events"
          buttonText="List for Free"
          imagePosition="left"
        />
        <MediaTextSection
          title="Add booking links to drive traffic"
          description="With our paid Booking Links tier, you can add direct booking links to your listings and track clicks. This helps you convert views into signups on your own website."
          imageSrc="/more-bookings.webp"
          imageAlt="Add booking links to drive traffic"
          href="/events"
          buttonText="List for Free"
          imagePosition="right"
        />
      </div>
      <FindEventsSection
        heading="Join other top providers in London"
        subheading="Rockbell is trusted by 300+ organisers to promote their events."
        buttonText="Start Listing for free"
        href="/signup"
        buttonVariant="primary"
      />
      <Testimonials />
      <FindEventsSection
        heading="Ready to reach more families?"
        subheading="Start listing your classes where families are already searching."
        buttonText="Start Listing for free"
        href="/signup"
        buttonVariant="primary"
      />
      <PartnerLogos />
      <FeaturesSection />
      <StatsSection />
      <FindEventsSection
        heading="Start getting discovered today"
        subheading="List your activities by age and location so the right families find you."
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
