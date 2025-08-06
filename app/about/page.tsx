import type { Metadata } from "next";
import PageHeroTitle from "@/components/page-hero-title";
import ProfessionalAbout from "@/components/professional-about";

export const metadata: Metadata = {
  title: "About Us - Jaydeep Industries",
  description:
    "Learn about Jaydeep Industries' legacy, journey, vision, and mission in the textile weaving industry.",
};

export default function AboutPage() {
  return (
    <main>
      <PageHeroTitle
        title="About Jaydeep Industries"
        description="Discover our journey of excellence, our core values, and our commitment to innovation in the textile industry."
        themeColor="blue"
      />
      <ProfessionalAbout />
    </main>
  );
}
