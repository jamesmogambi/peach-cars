# Peach Cars

A modern, full-stack car dealership platform built with **Next.js 15**, **React 19**, **Clerk Authentication**, **Sanity CMS**, and **Tailwind CSS**. Features vehicle listings, wishlist, reservation system, blog, and service center management.

## 🚀 Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3.4 |
| **Authentication** | Clerk (Next.js integration) |
| **CMS** | Sanity.io (Headless CMS) |
| **State Management** | React Context + localStorage (Wishlist) |
| **Forms** | React Hook Form + Zod validation |
| **UI Components** | Radix UI primitives + custom components |
| **Icons** | Lucide React |
| **Fonts** | Paytone One, Nunito (via next/font) |
| **Deployment** | Vercel (recommended) |

## ✨ Features

### 🔐 Authentication
- **Clerk-powered auth**: Sign up, sign in, password reset, session management
- **Server-side user creation** via Clerk API
- **Protected routes** with middleware-based auth
- **User profiles** with metadata storage (phone, address, etc.)
- **Public routes**: Home, cars listing, blog, wishlist, contact, etc.

### 🚗 Vehicle Management
- **Dynamic car listings** with filtering (brand, status: in-stock/shipping/new-arrivals)
- **Search functionality** across title, brand, description
- **Car detail pages** with image gallery, specifications, and reserve action
- **Brand pages** with model listings
- **Body style filtering**

### ❤️ Wishlist
- **Client-side persistence** via localStorage (no auth required)
- **Add/remove** cars with heart icon toggle
- **Dedicated wishlist page** with car cards
- **Consistent button styling** using app's design system

### 📅 Reservation System
- **Reserve car flow** with checkout redirect
- **Auth-gated reserve buttons** - unauthenticated users see "Sign in to Reserve" with redirect back
- **Server-side auth checks** on reserve page

### 📝 Blog
- **Static blog listing** with excerpt cards
- **Dynamic blog post pages** with full content
- **SEO metadata** per post

### 🛠 Service Center
- **Service center page** with features, why choose us, contact info
- **Schedule service** CTA integration

### 🎨 UI/UX
- **Responsive design** (mobile-first, breakpoints: sm/md/lg/xl)
- **Consistent button variants** (default, outline, ghost, secondary, destructive)
- **Form inputs** with show/hide password toggle
- **Dropdown menus**, hover cards, sheets (mobile nav)
- **Image optimization** via Next.js Image component

## 📁 Project Structure

```
peach-cars/
├── app/
│   ├── (frontend)/                 # Route group for public pages
│   │   ├── (auth)/                 # Auth pages (login, register, forgot-password)
│   │   ├── (home)/                 # Main site pages
│   │   │   ├── blog/               # Blog listing + [slug] detail
│   │   │   ├── brand/[slug]/       # Brand detail pages
│   │   │   ├── cars/               # Cars listing with filters
│   │   │   ├── detail/[carID]/     # Car detail page
│   │   │   ├── reserve/[slug]/     # Reserve car page
│   │   │   ├── wishlist/           # Wishlist page
│   │   │   └── page.tsx            # Home page
│   │   ├── layout.tsx              # Root layout with providers
│   │   └── page.tsx                # Landing redirect
│   ├── globals.css                 # Global styles + Tailwind
│   └── layout.tsx                  # Root layout
├── actions/                        # Server Actions
│   ├── cars.ts                     # Car fetching (with search/filter)
│   ├── car.ts                      # Single car + related
│   ├── clerkAuthServer.ts          # Server-side Clerk user mgmt
│   ├── clerkAuth.ts                # Client-side auth helpers
│   ├── brand.ts, bodyStyle.ts      # Brand/body style queries
│   ├── featuredCars.ts, carousel.ts# Homepage data
│   ├── serviceCenter.ts, contact.ts# Service/contact data
│   └── about.ts                    # About page data
├── components/
│   ├── ui/                         # Radix-based primitive components
│   │   ├── button.tsx              # Button with variants/sizes
│   │   ├── input.tsx, label.tsx    # Form primitives
│   │   ├── dropdown-menu.tsx       # Dropdown menu
│   │   ├── sheet.tsx               # Mobile sidebar
│   │   ├── hover-card.tsx          # Hover card
│   │   ├── checkbox.tsx, radio-group.tsx
│   │   ├── separator.tsx
│   │   └── scroll-area.tsx
│   ├── Header.tsx                  # Main header with search, auth, nav
│   ├── Footer.tsx                  # Footer with links, social
│   ├── FormInput.tsx               # Form input with password toggle
│   ├── MyButton.tsx                # Primary action button wrapper
│   ├── ButtonLink.tsx              # Styled link-as-button
│   ├── WishlistWrapper.tsx         # Wishlist context provider
│   ├── FeaturedCars/               # Car card components
│   ├── Footer/                     # Footer sections
│   └── ...                         # Other section components
├── lib/
│   ├── sanity.ts                   # Sanity client config
│   ├── wishlist.tsx                # Wishlist context + hooks
│   └── utils.ts                    # cn(), formatPrice(), formatText()
├── middleware.ts                   # Clerk auth middleware (route protection)
├── next.config.ts                  # Next.js config (images, fonts)
├── tailwind.config.ts              # Tailwind config
├── tsconfig.json                   # TypeScript config
└── package.json
```

## 🛠 Getting Started

### Prerequisites
- Node.js 18.17+
- npm/yarn/pnpm/bun
- Clerk account (for auth)
- Sanity.io account (for CMS)

### Installation

```bash
# Clone repository
git clone <repository-url>
cd peach-cars

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local  # Create and fill in values
```

### Environment Variables

Create `.env.local` with:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
CLERK_SECRET_KEY=sk_test_xxx
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/register
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_with_write_permissions

# Optional: Analytics, etc.
```

### Development

```bash
# Start dev server
npm run dev

# Run type checking
npm run typecheck  # or: npx tsc --noEmit

# Run linting
npm run lint
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## 🔑 Key Implementation Details

### Authentication Flow
- **Middleware** (`middleware.ts`) protects routes via `clerkMiddleware`
- Public routes defined in `isPublicRoute` matcher
- Server Actions (`clerkAuthServer.ts`) handle user creation/profile updates via Clerk REST API
- Client components use `useAuth()`, `useUser()`, `useSignIn()` hooks

### Sanity Integration
- Client configured in `lib/sanity.ts`
- GROQ queries in `actions/*.ts` with timeout protection
- Image URLs served via Sanity CDN
- **Note**: Requires valid `NEXT_PUBLIC_SANITY_PROJECT_ID` and `SANITY_API_TOKEN`

### Wishlist Architecture
- `WishlistProvider` context in `lib/wishlist.tsx`
- Persists to `localStorage` (`peach-cars-wishlist`)
- Hooks: `useWishlist()` → `{ wishlist, toggleWishlist, isInWishlist, addToWishlist, removeFromWishlist }`
- Works without authentication

### Search Implementation
- Header `SearchBox` component submits GET to `/cars?search=<query>`
- `getAllCars()` action accepts `search` param
- GROQ `match` query searches title, brand name, description
- Results preserve search term in filter/brand links

### Button Design System
- `components/ui/button.tsx` - cva-based variants (default, outline, ghost, secondary, destructive, link)
- Sizes: default, sm, lg, icon
- `MyButton` - primary action wrapper (primary bg, white text)
- `ButtonLink` - link-styled button with `asChild`

## 📦 Deployment

### Vercel (Recommended)
1. Connect repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Environment Variables for Production
Ensure all Clerk and Sanity keys are set for production domains.

## 🧪 Testing

```bash
# Type checking
npx tsc --noEmit

# Linting
npm run lint

# Build verification
npm run build
```

## 📄 License

Private - Peach Cars Ltd.

## 🤝 Contributing

Internal project. For issues or feature requests, contact the development team.

---

**Built with ❤️ for Peach Cars Kenya**