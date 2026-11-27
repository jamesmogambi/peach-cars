"use client";
import {
  ChevronDown,
  Clock,
  Heart,
  Mail,
  Menu,
  Phone,
  Search,
  X,
  User,
  Car,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import ButtonLink from "./ButtonLink";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { useWishlist } from "@/lib/wishlist";
import { useUser, useAuth } from "@clerk/nextjs";
import { signOutUser } from "@/actions/clerkAuth";

export const carItems = [
  { name: "all cars", href: "/cars?filter=all" },
  { name: "in stock", href: "/cars?filter=in-stock" },
  { name: "shipping", href: "/cars?filter=shipping" },
  { name: "new arrivals", href: "/cars?filter=new-arrivals" },
];

const SearchBox = ({
  show,
  onOpen,
  onClose,
}: {
  show: boolean;
  onOpen: () => void;
  onClose: () => void;
}) => {
  if (show) {
    return (
      <form
        action="/cars"
        method="GET"
        className="flex items-center overflow-hidden rounded-md border border-neutral-200 bg-white"
      >
        <input
          name="search"
          autoFocus
          placeholder="Search..."
          className="w-36 text-neutral-800 border-0 outline-none text-sm px-3 py-2"
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              e.preventDefault();
              onClose();
            }
          }}
        />
        <button
          type="submit"
          className="pr-2 text-neutral-400 hover:text-neutral-600"
          aria-label="Search"
        >
          <Search className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onClose}
          className="pr-2 text-neutral-400 hover:text-neutral-600"
          aria-label="Close search"
        >
          <X className="h-4 w-4" />
        </button>
      </form>
    );
  }
  return (
    <button
      onClick={onOpen}
      className="flex items-center gap-1 text-neutral-500 hover:text-primary transition-colors"
      aria-label="Open search"
    >
      <span className="uppercase text-sm font-light">search</span>
      <Search className="h-4 w-4" />
    </button>
  );
};

const MobileNav = ({ user, isLoaded }: { user: any; isLoaded: boolean }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;
  const { signOut } = useAuth();

  useEffect(() => {
    setOpen(false);
  }, [pathname, searchParams]);

  const handleLogout = async () => {
    await signOutUser();
    signOut();
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Blog", href: "/blog" },
    { label: "Service Centers", href: "/service-centers" },
    { label: "Trade In", href: "/trade-in" },
    { label: "Financing", href: "/financing" },
    { label: "Wishlist", href: "/wishlist", count: wishlistCount },
  ];

  return (
    <div className="flex lg:hidden items-center w-full justify-between">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="text-primary">
          <Menu className="h-6 w-6" />
        </SheetTrigger>
        <SheetContent side="left" className="w-[300px] border-none px-0">
          <SheetHeader className="px-6 py-5 border-b">
            <SheetTitle className="text-left uppercase text-lg font-bold text-[#111]">
              Menu
            </SheetTitle>
          </SheetHeader>
          <ScrollArea className="h-[calc(100vh-80px)]">
            <ul className="py-2">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="border-b-[0.5px] border-neutral-100"
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between px-6 py-3.5 uppercase text-[14px] transition-colors",
                      pathname === link.href
                        ? "text-primary font-semibold"
                        : "text-neutral-700 hover:text-primary",
                    )}
                  >
                    <span className="flex items-center gap-2">
                      {link.label === "Wishlist" && (
                        <Heart
                          className="h-4 w-4"
                          fill="white"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        />
                      )}
                      {link.label}
                    </span>
                    {link.count && link.count > 0 && (
                      <span className="bg-primary text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                        {link.count > 9 ? "9+" : link.count}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
              <li className="border-b-[0.5px] border-neutral-100">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex w-full items-center justify-between px-6 py-3.5 uppercase text-[14px] text-neutral-700 hover:text-primary">
                    Cars <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-[250px]">
                    {carItems.map((item) => (
                      <DropdownMenuItem key={item.name} asChild>
                        <Link
                          href={item.href}
                          className="uppercase cursor-pointer"
                        >
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
              {user && isLoaded && (
                <>
                  <li className="border-b-[0.5px] border-neutral-100 px-6 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-semibold">
                        {user.firstName?.[0] ||
                          user.emailAddresses?.[0]?.emailAddress?.[0] ||
                          "U"}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">
                          {user.firstName} {user.lastName}
                        </p>
                        <p className="text-xs text-neutral-500">
                          {user.emailAddresses?.[0]?.emailAddress}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="border-b-[0.5px] border-neutral-100">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-3 px-6 py-3.5 uppercase text-[14px] text-neutral-700 hover:text-primary"
                    >
                      <User className="h-4 w-4" />
                      Profile
                    </Link>
                  </li>
                  <li className="border-b-[0.5px] border-neutral-100">
                    <Link
                      href="/reserved-cars"
                      className="flex items-center gap-3 px-6 py-3.5 uppercase text-[14px] text-neutral-700 hover:text-primary"
                    >
                      <Car className="h-4 w-4" />
                      Reserved Cars
                    </Link>
                  </li>
                  <li className="border-b-[0.5px] border-neutral-100">
                    <Link
                      href="/wishlist"
                      className="flex items-center gap-3 px-6 py-3.5 uppercase text-[14px] text-neutral-700 hover:text-primary"
                    >
                      <Heart
                        className="h-4 w-4"
                        fill="white"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      />
                      Wishlist
                      {wishlistCount > 0 && (
                        <span className="bg-primary text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                          {wishlistCount > 9 ? "9+" : wishlistCount}
                        </span>
                      )}
                    </Link>
                  </li>
                  <li className="border-t border-neutral-100 pt-3 px-6">
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center gap-3 text-red-600 text-sm font-semibold"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </li>
                </>
              )}
              {!user && isLoaded && (
                <li className="border-t border-neutral-100 pt-3 px-6">
                  <Link
                    href="/login"
                    className="block text-center text-primary font-semibold uppercase py-3"
                  >
                    Login / Register
                  </Link>
                </li>
              )}
            </ul>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <Link href="/" className="flex-shrink-0">
        <Image
          alt="Peach Cars"
          priority
          quality={99}
          height={320}
          width={480}
          src="/images/logos/peach-cars-logo-transparent.svg"
          className="h-auto w-auto"
        />
      </Link>

      <Link
        href="/cars-for-sale-in-kenya"
        className="text-primary"
        aria-label="Search cars"
      >
        <Search className="h-5 w-5" />
      </Link>
    </div>
  );
};

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);
  const { user, isLoaded } = useUser();
  const { signOut } = useAuth();
  const pathname = usePathname();
  const { wishlist } = useWishlist();
  const wishlistCount = wishlist.length;

  const handleLogout = async () => {
    await signOutUser();
    signOut();
  };

  const navItems = [
    { label: "home", href: "/" },
    { label: "about us", href: "/about-us" },
    { label: "contact us", href: "/contact-us" },
    { label: "blog", href: "/blog" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (!isLoaded) {
    return (
      <div className="shadow-md bg-white">
        <div className="pt-5 pb-3 px-4 md:px-0 w-full lg:max-w-6xl mx-auto">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-7">
              <div className="flex items-center gap-2">
                <Clock className="text-primary h-4 w-4 shrink-0" />
                <p className="text-[13px] text-neutral-600 font-semibold">
                  Office Hours : 8 am - 5 pm Daily
                </p>
              </div>
            </div>
            <div className="flex gap-4 text-[13px] items-center">
              <div className="animate-pulse">
                <div className="h-5 w-24 bg-neutral-200 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="shadow-md bg-white">
      <div className="pt-5 pb-3 px-4 md:px-0 w-full lg:max-w-6xl mx-auto">
        {/* layer 1 — contact bar */}
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-7">
            <div className="flex items-center gap-2">
              <Clock className="text-primary h-4 w-4 shrink-0" />
              <p className="text-[13px] text-neutral-500 ">
                Office Hours : 8 am - 5 pm Daily
              </p>
            </div>
            <div className="md:flex items-center gap-2 hidden">
              <Phone className="text-primary h-4 w-4 shrink-0" />
              <Link
                href="tel:0746962447"
                className="text-[13px] text-neutral-600 hover:text-primary transition-colors "
              >
                0743129621
              </Link>
            </div>
          </div>

          <div className="flex gap-4 text-[13px] items-center">
            <div className="md:flex hidden gap-2 items-center">
              <Mail className="text-primary h-4 w-4 shrink-0" />
              <Link
                href="mailto:info@peachcars.co.ke"
                className="text-[13px] text-neutral-600 hover:text-primary transition-colors   "
              >
                info@peachcars.co.ke
              </Link>
            </div>

            <div className="flex items-center gap-2">
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer text-[13px] text-neutral-600 hover:text-primary transition-colors">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold">
                      {user.firstName?.[0] ||
                        user.emailAddresses?.[0]?.emailAddress?.[0] ||
                        "U"}
                    </div>
                    <span className="hidden sm:block">
                      {user.firstName} {user.lastName}
                    </span>
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56">
                    <div className="px-4 py-2 border-b">
                      <p className="text-sm font-semibold">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {user.emailAddresses?.[0]?.emailAddress}
                      </p>
                    </div>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/dashboard"
                        className="flex items-center gap-2 text-sm"
                      >
                        <User className="h-4 w-4" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/reserved-cars"
                        className="flex items-center gap-2 text-sm"
                      >
                        <Car className="h-4 w-4" />
                        Reserved Cars
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link
                        href="/wishlist"
                        className="flex items-center gap-2 text-sm"
                      >
                        <Heart
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                        />
                        Wishlist
                        {wishlistCount > 0 && (
                          <span className="bg-primary text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                            {wishlistCount > 9 ? "9+" : wishlistCount}
                          </span>
                        )}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="cursor-pointer text-red-600 flex items-center gap-2 text-sm"
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="lg:hidden text-neutral-600 hover:text-primary transition-colors"
                    aria-label="Login"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="/login"
                    className="hidden lg:block text-neutral-600 hover:text-primary transition-colors"
                  >
                    Login/Register
                  </Link>
                </>
              )}
            </div>

            <div className="md:flex hidden items-center gap-2">
              <Link
                href="/wishlist"
                className="flex items-center gap-1 text-[13px] text-neutral-600 hover:text-primary transition-colors"
              >
                <Heart
                  className="h-4 w-4"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth={1.5}
                />
                Wishlist
                {wishlistCount > 0 && (
                  <span className="bg-primary text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount > 9 ? "9+" : wishlistCount}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>

        {/* layer 2 — main nav */}
        <div className="hidden lg:flex justify-between items-center ">
          {/* menu */}
          <nav className="flex items-center text-[14px] text-[#323232] flex-1 flex-nowrap overflow-hidden">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative uppercase py-[19px] px-[15px] transition-colors whitespace-nowrap flex-shrink-0 ",
                  isActive(item.href) ? "text-primary" : "hover:text-primary",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute right-[15px] left-[15px] bottom-2 h-[3px] bg-primary origin-left transition-transform duration-300",
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100",
                  )}
                />
              </Link>
            ))}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="group relative uppercase flex items-center py-[19px] px-[15px] cursor-pointer hover:text-primary transition-colors whitespace-nowrap flex-shrink-0 font-semibold">
                  Cars <ChevronDown className="h-4 w-4 ml-1" />
                  <span className="absolute right-[15px] left-[15px] bottom-2 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
                </span>
              </HoverCardTrigger>
              <HoverCardContent className="w-48 p-2">
                <ul className="space-y-1">
                  {carItems.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-3 py-2 uppercase text-[13px] rounded hover:bg-neutral-50 hover:text-primary transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </HoverCardContent>
            </HoverCard>
          </nav>

          {/* logo */}
          <Link href="/" className="w-[220px] h-[80px] flex-none relative mx-6">
            <Image
              alt="Peach Cars"
              priority
              quality={99}
              fill
              src="/images/logos/peach-cars-logo-transparent.svg"
              className="object-contain"
            />
          </Link>

          {/* actions */}
          <div className="flex items-center justify-end gap-2 flex-1">
            <SearchBox
              show={showSearch}
              onOpen={() => setShowSearch(true)}
              onClose={() => setShowSearch(false)}
            />
            <div className="flex gap-2 ml-2">
              {/* <Link
                href="/wishlist"
                className="relative flex items-center gap-1 py-5 px-3 text-[14px] text-neutral-600 hover:text-primary transition-colors"
              >
                <Heart className="h-4 w-4" fill="white" stroke="currentColor" strokeWidth={1.5} />
                Wishlist
                {wishlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-semibold w-5 h-5 rounded-full flex items-center justify-center">
                    {wishlistCount > 9 ? "9+" : wishlistCount}
                  </span>
                )}
              </Link> */}
              <ButtonLink text="trade in" href="/trade-in" className="py-5" />
              <ButtonLink
                text="financing"
                href="/financing"
                className="bg-black hover:bg-neutral-800 py-5"
              />
              <ButtonLink
                text="service center"
                href="/service-centers"
                className="py-5 max-w-28 text-wrap text-center leading-tight"
              />
            </div>
          </div>
        </div>

        <div>
          <MobileNav user={user} isLoaded={isLoaded} />
        </div>
      </div>
    </div>
  );
};

export default Header;
