import { siteName } from "@/lib/site";

export const metadata = {
  title: "Products",
  description:
    "Browse modern wooden, glass, and metal tables. Filter by material and price to find minimalist furniture for your home.",
  openGraph: {
    title: `Products | ${siteName}`,
    description:
      "Browse modern wooden, glass, and metal tables for a minimalist interior.",
  },
};

export default function ProductsLayout({ children }) {
  return children;
}
