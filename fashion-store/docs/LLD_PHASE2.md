# Low-Level Design (LLD): Phase 2 - Dynamic Routing & Product Catalog

## 1. Data Schema (src/types/product.ts)
- Interface Product: id, 
ame, price, category, image, description, sizes, isNewArrival.

## 2. Dynamic Routing Architecture
- Route /products/[id]: Uses async App Router page parameters params: Promise<{ id: string }>.
- Route /shop: Renders the multi-item product showcase using Tailwind CSS grid utilities.
- Fallback Handling: Leverages 
ext/navigation 
otFound() for unmapped product IDs.
