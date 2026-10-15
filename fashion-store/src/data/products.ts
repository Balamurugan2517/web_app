import { Product } from '@/types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Linen Shirt',
    price: 45.00,
    category: 'Tops & Shirts',
    image: '/images/linen-shirt.jpg', // Placeholder or styled container
    description: 'Crafted from 100% breathable organic linen, designed for effortless summer layering and everyday comfort.',
    sizes: ['S', 'M', 'L', 'XL'],
    isNewArrival: true,
  },
  {
    id: '2',
    name: 'Structured Wool Overcoat',
    price: 180.00,
    category: 'Outerwear',
    image: '/images/wool-coat.jpg',
    description: 'A timeless tailored silhouette crafted from a premium wool blend. Features structured shoulders and deep pockets.',
    sizes: ['S', 'M', 'L'],
    isNewArrival: true,
  },
  {
    id: '3',
    name: 'Relaxed Pleated Trousers',
    price: 75.00,
    category: 'Bottoms',
    image: '/images/trousers.jpg',
    description: 'High-waisted tailored trousers with front pleats, offering a relaxed wide-leg drape for contemporary styling.',
    sizes: ['28', '30', '32', '34'],
    isNewArrival: false,
  },
  {
    id: '4',
    name: 'Minimalist Leather Tote',
    price: 120.00,
    category: 'Accessories',
    image: '/images/tote.jpg',
    description: 'Full-grain vegetable-tanned leather tote designed to carry your daily essentials with understated elegance.',
    sizes: ['One Size'],
    isNewArrival: true,
  },
];
