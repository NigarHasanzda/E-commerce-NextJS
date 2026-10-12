import BasketView from "@/components/basket/BasketView";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Basket",
  description: `Review your ${siteName} basket and complete secure checkout.`,
  robots: { index: false, follow: true },
};

export default function BasketPage() {
  return <BasketView />;
}
