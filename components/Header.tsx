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
import { getUser, logoutUser } from "@/actions/auth";
import { cn } from "@/lib/utils";

export const carItems = [
  { name: "all stock", href: "all-stock" },
  { name: "in stock", href: "in-stock" },
  { name: "shipping", href: "shipping" },
  { name: "new arrivals", href: "new-arrivals" },
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
      <div className="flex items-center overflow-hidden rounded-md border border-neutral-200 bg-white">
        <input
          autoFocus
          placeholder="Search..."
          className="w-36 text-neutral-800 border-0 outline-none text-sm px-3 py-2"
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
          }}
        />
        <button
          onClick={onClose}
          className="pr-2 text-neutral-400 hover:text-neutral-600"
          aria-label="Close search"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
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

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    setOpen(false);
  }, [pathname, searchParams]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Blog", href: "/blog" },
    { label: "Service Centers", href: "/service-centers" },
    { label: "Trade In", href: "/trade-in" },
    { label: "Financing", href: "/financing" },
    { label: "Wishlist", href: "/wishlist" },
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
                <li key={link.href} className="border-b-[0.5px] border-neutral-100">
                  <Link
                    href={link.href}
                    className={cn(
                      "block px-6 py-3.5 uppercase text-[14px] transition-colors",
                      pathname === link.href
                        ? "text-primary font-semibold"
                        : "text-neutral-700 hover:text-primary"
                    )}
                  >
                    {link.label}
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
                        <Link href={item.href} className="uppercase cursor-pointer">
                          {item.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </ScrollArea>
        </SheetContent>
      </Sheet>

      <Link href="/" className="flex-shrink-0">
        <Image
          alt="Peach Cars"
          priority
          quality={99}
          height={300}
          width={450}
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
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();

  useEffect(() => {
    getUser().then(setUser);
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
  };

  const navItems = [
    { label: "home", href: "/" },
    { label: "about us", href: "/about-us" },
    { label: "contact us", href: "/contact-us" },
    { label: "blog", href: "/blog" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="shadow-md bg-white">
      <div className="pt-5 pb-3 px-4 md:px-0 w-full lg:max-w-6xl mx-auto">
        {/* layer 1 — contact bar */}
        <div className="flex justify-between w-full items-center">
          <div className="flex gap-7">
            <div className="flex items-center gap-2">
              <Clock className="text-primary h-4 w-4 shrink-0" />
              <p className="text-[13px] text-neutral-600">
                Office Hours : 8 am - 5 pm Daily
              </p>
            </div>
            <div className="md:flex items-center gap-2 hidden">
              <Phone className="text-primary h-4 w-4 shrink-0" />
              <Link
                href="tel:0746962447"
                className="text-[13px] text-neutral-600 hover:text-primary transition-colors"
              >
                0746962447
              </Link>
            </div>
          </div>

          <div className="flex gap-4 text-[13px] items-center">
            <div className="md:flex hidden gap-2 items-center">
              <Mail className="text-primary h-4 w-4 shrink-0" />
              <Link
                href="mailto:info@saisamotors.co.ke"
                className="text-[13px] text-neutral-600 hover:text-primary transition-colors"
              >
                info@saisamotors.co.ke
              </Link>
            </div>

            <div className="flex items-center gap-2">
              {user?.user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center gap-1 cursor-pointer text-[13px] text-neutral-600 hover:text-primary transition-colors">
                    {user?.user?.firstName} {user?.user?.lastName}
                    <ChevronDown className="h-4 w-4" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem
                      onClick={handleLogout}
                      className="cursor-pointer text-primary font-semibold"
                    >
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
              <Heart className="text-primary h-4 w-4 shrink-0" />
              <Link
                href="/wishlist"
                className="text-[13px] text-neutral-600 hover:text-primary transition-colors"
              >
                Wishlist
              </Link>
            </div>
          </div>
        </div>

        {/* layer 2 — main nav */}
        <div className="hidden lg:flex justify-between items-center mt-4">
          {/* menu */}
          <nav className="flex items-center text-[14px] text-[#323232] flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "group relative uppercase py-[19px] px-[15px] transition-colors",
                  isActive(item.href)
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute right-[15px] left-[15px] bottom-2 h-[3px] bg-primary origin-left transition-transform duration-300",
                    isActive(item.href)
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
            <HoverCard>
              <HoverCardTrigger asChild>
                <span className="group relative uppercase flex items-center py-[19px] px-[15px] cursor-pointer hover:text-primary transition-colors">
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
          <Link
            href="/"
            className="w-[180px] h-[64px] flex-none relative mx-6"
          >
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
          <MobileNav />
        </div>
      </div>
    </div>
  );
};

export default Header;