
'use client';

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
} from 'react';

import { Product } from '@/types/product';
import { CartItem, CartContextType } from '@/types/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'luxe_thread_cart';

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartLoaded, setIsCartLoaded] = useState(false);

  // Load the saved cart after the component mounts.
  useEffect(() => {
    let cancelled = false;

    const loadCart = async () => {
      try {
        // Yield before loading persisted data.
        await Promise.resolve();

        const savedCart = window.localStorage.getItem(CART_STORAGE_KEY);

        if (savedCart) {
          const parsedCart: unknown = JSON.parse(savedCart);

          if (Array.isArray(parsedCart) && !cancelled) {
            setCart(parsedCart as CartItem[]);
          }
        }
      } catch (error) {
        console.error('Failed to load cart from localStorage', error);
      } finally {
        if (!cancelled) {
          setIsCartLoaded(true);
        }
      }
    };

    void loadCart();

    return () => {
      cancelled = true;
    };
  }, []);

  // Persist changes only after the saved cart has loaded.
  useEffect(() => {
    if (!isCartLoaded) return;

    try {
      window.localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
      );
    } catch (error) {
      console.error('Failed to save cart to localStorage', error);
    }
  }, [cart, isCartLoaded]);

  const addToCart = (product: Product, size: string) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedSize === size
      );

      if (existingIndex !== -1) {
        return prevCart.map((item, index) =>
          index === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...prevCart,
        {
          product,
          quantity: 1,
          selectedSize: size,
        },
      ];
    });
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prevCart) =>
      prevCart.filter(
        (item) =>
          !(
            item.product.id === productId &&
            item.selectedSize === size
          )
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalItems,
        subtotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
}
