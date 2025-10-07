import HeroSlider from "@/components/hero-slider"; // Renamed import
import AboutSection from "@/components/about-section"; // Renamed import
import GlobalMapSection from "@/components/global-map-section";
import ProductsSection from "@/components/products-section";
import AchievementsSection from "@/components/achievements-section";
import ContactCta from "@/components/contact-cta"; // Renamed import

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <GlobalMapSection />
      <ProductsSection />
      <AchievementsSection />
      <ContactCta />
    </>
  );
}
