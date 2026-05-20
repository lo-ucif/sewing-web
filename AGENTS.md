# Maison de Couture Design System Integration Rules (AGENTS.md)

This document outlines the rules, structures, and design tokens for translating the Maison de Couture design system from Figma into code, or generating code from Figma selections.

## 1. Token Definitions

Design tokens are declared in the root CSS file: [src/index.css](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/index.css) using the Tailwind CSS v4 `@theme` directive.

### Color Palette (60-30-10 Rule)
* **Primary / Base Background (60%):** `--color-beige` (`#f5f1ea`) - a warm, luxurious off-white.
* **Secondary / Structure (30%):** `--color-dark` (`#111111`) - an elegant off-black used for primary text, footer backgrounds, dark frames, and layout wrappers.
* **Accent / Details (10%):** `--color-gold` (`#c8a96a`) - a tailored metallic gold used for highlights, borders, active states, and call-to-actions.

```css
@theme {
  --color-beige: #f5f1ea;
  --color-dark: #111111;
  --color-gold: #c8a96a;
}
```

### Typography System
* **Headings / Serif (Editorial Look):** `Cormorant Garamond` (weights: 300 Light, 400 Regular, 500 Medium, 600 Semi-bold)
* **Body / Sans-serif (Clean Readability):** `Outfit` (weights: 300 Light, 400 Regular, 500 Medium, 600 Semi-bold)
* **Global Font Configuration:** Set on `<html/>` and `<body/>` using standard styles:
  * Serif font class helper: `font-serif` maps to `Cormorant Garamond`.
  * Sans-serif font class helper: `font-sans` maps to `Outfit`.

### Spacing & Grid System
* **Figma Grid Layout:** 12-column grid on desktop, 1200px max container width, 24px columns gap.
* **Tailwind spacing tokens:** Follows 8px grid multiples (`rem` scale):
  * `gap-2` (8px), `gap-4` (16px), `gap-6` (24px), `gap-8` (32px), `gap-16` (64px)
  * Vertical Section Padding: `py-24` (96px) or `py-32` (128px) for high whitespace lux feel.

---

## 2. Component Library & Architecture

All reusable UI widgets are atomic functional React elements configured in [src/components/ui/](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/components/ui/):

### Reusable UI Components
* **Button** ([Button.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/components/ui/Button.tsx)): Standardized with variants `primary`, `gold`, `outline`, `text`. Supports `fullWidth` modifier.
* **BeforeAfterSlider** ([BeforeAfterSlider.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/components/ui/BeforeAfterSlider.tsx)): Comparative overlay slider using range input track and clip-path layouts.
* **ProjectCard** ([ProjectCard.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/components/ui/ProjectCard.tsx)): Displays image, zoom container, title, client category, and link trigger on click.
* **Modal** ([Modal.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/components/ui/Modal.tsx)): Global portal for image viewing and lightboxes.

### Layout Wrappers
* **Navbar** ([Navbar.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/components/layout/Navbar.tsx)): Fixed navigation with custom scroll-based backdrop-blur (glassmorphism) toggle.
* **Footer** ([Footer.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/components/layout/Footer.tsx)): Minimalist grid dividing brand signature, page routes, operating hours, and location links.

---

## 3. Styling approach & Tailwind classes

* **Utility Classes:** Direct use of Tailwind inline utility classes for standard styling.
* **Responsiveness:** Mobile-first design methodology using Tailwind prefixes (`sm:`, `md:`, `lg:`, `xl:`):
  * Grid adjustments: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
  * Text adjustments: `text-3xl md:text-4xl lg:text-6xl`
* **Interactions / Micro-animations:**
  * Image Zoom: `transition-transform duration-700 hover:scale-102` (or `hover:scale-103`)
  * Link Underlines: Custom border underlines transitioning on hover: `hover:text-gold transition-colors duration-300`

---

## 4. Frameworks & Build system

* **Frontend Framework:** React 19 (Vite)
* **Type Safety:** TypeScript (strict verbatim module syntax requires `import type` for type variables)
* **Styling Engine:** Tailwind CSS v4
* **Icons:** `lucide-react` for system icons. Native SVGs for custom logos.
* **Routing:** `react-router-dom` (BrowserRouter client-side history API)

---

## 5. Screen Layout Specifications

| Figma Screen | Main Page Component | key UI Sections / Frames |
|---|---|---|
| **Home Page** | [Home.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/pages/Home.tsx) | Hero, FeaturedProjects, Categories, AboutSection, Testimonials, ContactSection |
| **Projects Page** | [Projects.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/pages/Projects.tsx) | Category chip filters, masonry-style ProjectCard grid, load more actions |
| **Project Details** | [ProjectDetails.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/pages/ProjectDetails.tsx) | Specs card block, thumbnail gallery, interactive BeforeAfterSlider comparison |
| **About Page** | [About.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/pages/About.tsx) | Founder portrait & signature block, process timeline grid (steps 1 to 4) |
| **Contact Page** | [Contact.tsx](file:///c:/Users/Ahmed%20Loucif/Desktop/coding/Project%20web/sewing%20web/sewing-web/src/pages/Contact.tsx) | Booking form, address panel, direct instant WhatsApp link buttons |

---

## 6. Code-to-Design Translation Pattern Examples

### Primary Button Component
```tsx
// Figma: Rounded button with #111 bg, #fff text, and #c8a96a border on hover
<button className="bg-dark text-white px-8 py-3.5 rounded-sm font-sans text-xs tracking-widest uppercase font-semibold border border-transparent hover:border-gold hover:bg-transparent hover:text-dark transition-all duration-300">
  Button Text
</button>
```

### Page Header Standard Typography
```tsx
// Figma: 64px Serif tracking-wide, centered
<h1 className="text-dark text-4xl md:text-5xl lg:text-6xl font-light mb-4 tracking-wide font-serif">
  Page Title
</h1>
```
