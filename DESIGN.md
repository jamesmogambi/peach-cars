# Design & Theme

## Overview
- App: **Saisa Motors Limited** — dealers in new and clean second-hand motor vehicles.
- Stack: Next.js 15 (App Router) + Tailwind CSS 3.4 + shadcn/ui (new-york style) + Radix UI.
- Frontend CSS: `app/(frontend)/globals.css`, `app/(frontend)/styles.css`.

## Colors
- Primary: `#e91e2a` (red), mapped to `primary` in Tailwind.
- Accent red used in UI: `#c81a24`.
- Background: black (`rgb(0, 0, 0)`).
- Foreground/text: white (`rgb(1000, 1000, 1000)`).
- shadcn base color: `neutral`.
- CSS variables: `--background`, `--foreground`, `--radius` (0.5rem).

## Typography
- Body font: Nunito (weight 500), loaded via `next/font/google`.
- Display/heading font: Paytone One (weight 400), exposed as `--font-paytone` / `font-paytone`.
- Base font size: 18px (15px on ≤1024px), line-height 32px (24px on ≤1024px).
- h1: 64px / 70px line-height, bold; responsive down to 32px on ≤400px.

## Radius & Spacing
- Border radius base: `0.5rem` (`--radius`); Tailwind `lg`/`md`/`sm` derived.
- h1 margin: 40px (24px on ≤1024px); p margin: 24px.

## Dark Mode
- Tailwind `darkMode: ["class"]`.

## Components
- shadcn/ui, RSC + TSX, icon library: lucide-react.
- Aliases: `@/components`, `@/lib`, `@/components/ui`, `@/hooks`.
- Animations: tailwindcss-animate plugin.

## Layout
- Root layout: `app/(frontend)/layout.tsx` — html `lang="en"`, body uses Nunito + Paytone variable.
- Includes Header, Footer, SocialLinks, WhatsappButton, Vercel Analytics.
