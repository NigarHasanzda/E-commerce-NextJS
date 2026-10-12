import "./globals.css";
import {
  Experiences,
  HeroSection,
  HowItWorks,
  Materials,
  Newsletter,
  SellingSection,
  Testimonials,
  WhyChoosing,
} from "@/components/sections";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Home",
  description:
    "Make your interior more minimalistic and modern. Discover curated furniture and shop tables with ease at Panto.",
  openGraph: {
    title: `Home | ${siteName}`,
    description:
      "Turn your room into a minimalist, modern space with curated furniture and fast shopping.",
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhyChoosing />
      <SellingSection />
      <Experiences />
      <Materials />
      <HowItWorks />
      <Testimonials />
      <Newsletter />
    </>
  );
}
