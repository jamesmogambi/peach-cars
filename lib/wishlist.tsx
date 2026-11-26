"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface WishlistCar {
  _id: string;
  title: string;
  slug: { current: string };
  price: number;
  year: number;
  mileage: number;
  fuel: string;
  transmission: string;
  inStock: boolean;
  isNewArrival?: boolean;
  images: { asset: { _id: string; url: string } } | { asset: { _id: string; url: string } }[];
  brand: { _id: string; name: string; slug: { current: string }; logo?: { asset: { _id: string; url: string } } };
  bodyStyle: { _id: string; name: string; slug: { current: string } };
}

interface WishlistContextType {
  wishlist: WishlistCar[];
  addToWishlist: (car: WishlistCar) => void;
  removeFromWishlist: (carId: string) => void;
  toggleWishlist: (car: WishlistCar) => void;
  isInWishlist: (carId: string) => boolean;
  clearWishlist: () => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

const STORAGE_KEY = "peach-cars-wishlist";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [wishlist, setWishlist] = useState<WishlistCar[]>([]);
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          setWishlist(JSON.parse(stored));
        }
      } catch (error) {
        console.error("Failed to load wishlist:", error);
      }
      setInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (initialized && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(wishlist));
    }
  }, [wishlist, initialized]);

  const addToWishlist = (car: WishlistCar) => {
    setWishlist((prev) => {
      if (prev.some((c) => c._id === car._id)) return prev;
      return [...prev, car];
    });
  };

  const removeFromWishlist = (carId: string) => {
    setWishlist((prev) => prev.filter((c) => c._id !== carId));
  };

  const toggleWishlist = (car: WishlistCar) => {
    if (wishlist.some((c) => c._id === car._id)) {
      removeFromWishlist(car._id);
    } else {
      addToWishlist(car);
    }
  };

  const isInWishlist = (carId: string) => {
    return wishlist.some((c) => c._id === carId);
  };

  const clearWishlist = () => {
    setWishlist([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}