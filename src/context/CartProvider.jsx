"use client";

import CartAddedToast from "@/components/cart/CartAddedToast";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const STORAGE_KEY = "panto-cart";
const TOAST_MS = 5000;

const CartContext = createContext(null);

function readStoredCart() {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  const [cartToast, setCartToast] = useState(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    setItems(readStoredCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, hydrated]);

  useEffect(() => {
    return () => {
      if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    };
  }, []);

  const dismissCartToast = useCallback(() => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setCartToast((prev) => (prev ? { ...prev, visible: false } : null));
    toastTimerRef.current = setTimeout(() => setCartToast(null), 300);
  }, []);

  const showCartToast = useCallback((product) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setCartToast({ product, visible: true });
    toastTimerRef.current = setTimeout(() => {
      setCartToast((prev) => (prev ? { ...prev, visible: false } : null));
      toastTimerRef.current = setTimeout(() => setCartToast(null), 300);
    }, TOAST_MS);
  }, []);

  const addItem = useCallback((product, quantity = 1) => {
    if (!product?.inStock) return false;
    const qty = Math.max(1, Math.min(99, quantity));
    setItems((prev) => {
      const existing = prev.find((line) => line.id === product.id);
      if (existing) {
        return prev.map((line) =>
          line.id === product.id
            ? { ...line, quantity: Math.min(99, line.quantity + qty) }
            : line,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          material: product.material,
          quantity: qty,
        },
      ];
    });
    showCartToast(product);
    return true;
  }, [showCartToast]);

  const removeItem = useCallback((id) => {
    setItems((prev) => prev.filter((line) => line.id !== id));
  }, []);

  const updateQuantity = useCallback((id, quantity) => {
    const qty = Math.max(1, Math.min(99, quantity));
    setItems((prev) =>
      prev.map((line) => (line.id === id ? { ...line, quantity: qty } : line)),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const itemCount = useMemo(
    () => items.reduce((sum, line) => sum + line.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((sum, line) => sum + line.price * line.quantity, 0),
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      hydrated,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal,
      cartToast,
      dismissCartToast,
    }),
    [
      items,
      hydrated,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      itemCount,
      subtotal,
      cartToast,
      dismissCartToast,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartAddedToast />
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
