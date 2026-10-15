# Low-Level Design (LLD): Phase 1 - Core Foundation

## 1. Component Topology
- `src/app/layout.tsx`: Root layout wrapper integrating Inter font, metadata headers, and global CSS.
- `src/components/Header.tsx`: Sticky navigation bar with responsive layout, brand logo, links, and cart badge counter.
- `src/components/Footer.tsx`: Multi-column footer layout with newsletter subscription input and copyright notice.

## 2. Design Tokens & Styling
- Compiled via Tailwind CSS v4 (`globals.css`).
- Applied mobile-first responsive utilities (`flex`, `grid`, `hidden md:flex`, `sticky top-0`).
