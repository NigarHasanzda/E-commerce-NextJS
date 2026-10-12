import AboutView from "@/components/about/AboutView";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `Learn about ${siteName}—our story, values, and mission to bring calm, modern furniture to your home.`,
  openGraph: {
    title: `About | ${siteName}`,
    description: `Discover how ${siteName} curates minimalist furniture with honest materials and fair pricing.`,
  },
};

export default function AboutPage() {
  return <AboutView />;
}
