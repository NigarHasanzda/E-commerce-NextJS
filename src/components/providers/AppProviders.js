"use client";

import { CartProvider } from "@/context/CartProvider";
import { FavoritesProvider } from "@/context/FavoritesProvider";

export default function AppProviders({ children }) {
  return (
    <CartProvider>
      <FavoritesProvider>{children}</FavoritesProvider>
    </CartProvider>
  );
}
