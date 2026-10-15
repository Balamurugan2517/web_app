import { Product } from './product';

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: string, size: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
}
