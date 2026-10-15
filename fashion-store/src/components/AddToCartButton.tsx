'use client';

import React, { useState } from 'react';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';

export default function AddToCartButton({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'M');
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Size Selector */}
      <div>
        <div className="flex justify-between items-center mb-3">
          <label className="text-xs uppercase tracking-widest text-rose-800 font-medium">Select Size</label>
          <span className="text-xs text-rose-700/80 uppercase tracking-wider cursor-pointer hover:underline">Size Guide</span>
        </div>
        <div className="flex gap-3">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`border rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                selectedSize === size
                  ? 'border-rose-950 bg-rose-950 text-white shadow-md'
                  : 'border-rose-200 bg-white text-rose-950 hover:border-rose-400'
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={handleAddToCart}
        className={`w-full py-4 rounded-xl font-medium tracking-wide uppercase text-sm transition-all shadow-md ${
          added
            ? 'bg-emerald-700 text-white'
            : 'bg-rose-950 text-white hover:bg-rose-900 shadow-rose-950/20'
        }`}
      >
        {added ? '✓ Added to Shopping Bag' : 'Add to Bag'}
      </button>
    </div>
  );
}