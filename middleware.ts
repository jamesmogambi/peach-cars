import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/",
  "/api/webhook/clerk",
  "/cars-for-sale-in-kenya(.*)",
  "/cars(.*)",
  "/brand(.*)",
  "/detail(.*)",
  "/financing",
  "/trade-in",
  "/contact-us",
  "/about-us",
  "/blog(.*)",
  "/service-centers",
  "/wishlist",
  "/checkout",
  "/reserve(.*)",
  "/login",
  "/register",
  "/forgot-password",
]);

export default clerkMiddleware(async (auth, request) => {
  if (!isPublicRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};