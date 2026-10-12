import FavoritesView from "@/components/favorites/FavoritesView";
import { siteName } from "@/lib/site";

export const metadata = {
  title: "Favorites",
  description: `Your saved pieces at ${siteName}—wishlist items ready to move to your basket.`,
  robots: { index: false, follow: true },
};

export default function FavoritesPage() {
  return <FavoritesView />;
}
