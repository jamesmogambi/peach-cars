"use client";

import { WishlistProvider } from "@/lib/wishlist";
import { ReactNode } from "react";

export default function WishlistWrapper({ children }: { children: ReactNode }) {
  return <WishlistProvider>{children}</WishlistProvider>;
}