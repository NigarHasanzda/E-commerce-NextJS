"use client";

import FavoritesAddedToast from "@/components/favorites/FavoritesAddedToast";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const STORAGE_KEY = "panto-favorites";
const TOAST_MS = 5000;

const FavoritesContext = createContext(null);

function readStoredFavorites() {
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

function toFavoriteLine(product) {
  return {
    id: product.id,
    name: product.name,
    price: product.price,
    image: product.image,
    material: product.material,
    category: product.category,
    inStock: product.inStock,
    description: product.description,
  };
}

export function FavoritesProvider({ children }) {
  const [items, setItems] = useState([]);
  const [hydrated, setHydrated] = useState(false);
  const [favoritesToast, setFavoritesToast] = useState(null);
  const toastTimerRef = useRef(null);

  useEffect(() => {
    setItems(readStoredFavorites());
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

  const dismissFavoritesToast = useCallback(() => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setFavoritesToast((prev) => (prev ? { ...prev, visible: false } : null));
    toastTimerRef.current = setTimeout(() => setFavoritesToast(null), 300);
  }, []);

  const showFavoritesToast = useCallback((product) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setFavoritesToast({ product, visible: true });
    toastTimerRef.current = setTimeout(() => {
      setFavoritesToast((prev) => (prev ? { ...prev, visible: false } : null));
      toastTimerRef.current = setTimeout(() => setFavoritesToast(null), 300);
    }, TOAST_MS);
  }, []);

  const isFavorite = useCallback(
    (id) => items.some((line) => line.id === id),
    [items],
  );

  const toggleFavorite = useCallback(
    (product) => {
      if (!product?.id) return false;
      let added = false;
      setItems((prev) => {
        const exists = prev.some((line) => line.id === product.id);
        if (exists) {
          return prev.filter((line) => line.id !== product.id);
        }
        added = true;
        return [...prev, toFavoriteLine(product)];
      });
      if (added) showFavoritesToast(product);
      return added;
    },
    [showFavoritesToast],
  );

  const removeFavorite = useCallback((id) => {
    setItems((prev) => prev.filter((line) => line.id !== id));
  }, []);

  const itemCount = items.length;

  const value = useMemo(
    () => ({
      items,
      hydrated,
      itemCount,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      favoritesToast,
      dismissFavoritesToast,
    }),
    [
      items,
      hydrated,
      itemCount,
      isFavorite,
      toggleFavorite,
      removeFavorite,
      favoritesToast,
      dismissFavoritesToast,
    ],
  );

  return (
    <FavoritesContext.Provider value={value}>
      {children}
      <FavoritesAddedToast />
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) {
    throw new Error("useFavorites must be used within FavoritesProvider");
  }
  return ctx;
}
