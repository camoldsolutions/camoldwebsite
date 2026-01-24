# Implementation Plan - Polish & Finish CA Mold Site

## Goal
Address visual bugs and remove AI-generated-looking elements to give the site a polished, professional, and authentic appearance.

## User Review Required

> [!IMPORTANT]
> **Logo**: The current logo has a white background that clashes with the dark header. Options:
> 1. **Preferred**: Use a version of the logo with a **transparent background**.
> 2. **Fallback**: Apply CSS to blend the existing logo (e.g., dark background behind it, or `mix-blend-mode`).
>
> Do you have a transparent PNG version of the logo, or shall I apply a CSS fix?

---

## Proposed Changes

### 1. Logo Header Blending

#### Option A: Transparent Logo (Best)
- Replace `ASSETS.logo` URL with a transparent-background PNG.

#### Option B: CSS Fix (Fallback)
- **[MODIFY]** [Navbar.jsx](file:///c:/Users/austi/Documents/Websites/CAMoldWebsite/src/components/layout/Navbar.jsx)
  - Remove the white wrapper `div` from the logo `img`.
  - Apply `mix-blend-mode: lighten` or add a subtle rounded dark background container.

---

### 2. Fix Trust Bar Card Fade/Clipping

The `InfiniteMovingCards` component uses a gradient mask that fades edges. This cuts off the first and last cards.

#### [MODIFY] [InfiniteMovingCards.jsx](file:///c:/Users/austi/Documents/Websites/CAMoldWebsite/src/components/ui/InfiniteMovingCards.jsx)
- **Remove or reduce** the CSS mask gradient (`::before`, `::after` pseudo-elements or `mask-image`).
- Ensure full card visibility on mobile and desktop.

---

### 3. Replace Generic "Serving All of California" Badge

This phrase is overused and signals AI generation. Replace with a more specific, authentic value proposition.

#### [MODIFY] [Home.jsx](file:///c:/Users/austi/Documents/Websites/CAMoldWebsite/src/pages/Home.jsx)
- **Current**: `<ShieldCheck /> Serving All of California`
- **Proposed Options** (pick one):
    1. `Protecting California Homes Since 2018` (or founding year)
    2. `Trusted by 500+ Homeowners` (if applicable)
    3. `Licensed & IICRC Certified`
    4. `Responding Within 24 Hours` (or actual response time)
    5. Remove the badge entirely and rely on the H1.

---

## Verification Plan

### Visual Check
- Run `npm run dev`.
- Verify logo blends seamlessly with the dark header on scroll and static.
- Verify trust bar cards are fully visible (no fading at edges).
- Verify the hero badge text feels authentic and specific.
