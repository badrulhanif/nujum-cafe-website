import FacilitiesSection from "@/components/sections/Facilities";
import HeroSection from "@/components/sections/Hero";
import HighlightSection from "@/components/sections/Highlight";
import OverviewSection from "@/components/sections/Overview";
import ReviewSection from "@/components/sections/Review";

export default function Home() {
  return (
    <>
      <HeroSection />
      <OverviewSection />
      <HighlightSection />
      <FacilitiesSection />
      <ReviewSection />
    </>
  );
}
