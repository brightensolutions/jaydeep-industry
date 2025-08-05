import HeroSlider from "@/components/hero-slider" // Renamed import
import AboutSection from "@/components/about-section" // Renamed import
import ProductsSection from "@/components/products-section" // Renamed import
import ContactCta from "@/components/contact-cta" // Renamed import

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutSection />
      <ProductsSection />
      <ContactCta />
    </>
  )
}
