"use client";

import { CartProvider } from "@/context/CartProvider";

export default function AppProviders({ children }) {
  return <CartProvider>{children}</CartProvider>;
}
