import { Metadata } from "next";
import Link from "next/link";
import WishlistContent from "./WishlistContent";

export const metadata: Metadata = {
  title: "My Wishlist | Peach Cars",
  description: "View your saved cars at Peach Cars",
};

export default function WishlistPage() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        <h1 className="uppercase font-semibold text-[35.2px] mb-8">My Wishlist</h1>
        <WishlistContent />
      </div>
    </div>
  );
}