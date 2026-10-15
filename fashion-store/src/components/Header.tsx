'use client';

import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-[#FAF0E6]/95 backdrop-blur-md border-b border-rose-300/60 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-2xl font-serif font-bold tracking-tight text-[#4A151B]">
          Luxe & Thread<span className="text-rose-600">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide uppercase text-[#4A151B]/80">
          <Link href="/" className="hover:text-rose-700 transition-colors">
            Home
          </Link>
          <Link href="/shop" className="hover:text-rose-700 transition-colors">
            Shop
          </Link>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center space-x-4">
          <Link
            href="/cart"
            className="relative p-2.5 text-[#4A151B] hover:text-rose-700 transition-colors flex items-center justify-center bg-rose-200/50 rounded-full border border-rose-300/70 shadow-2xs"
            aria-label="Shopping Bag"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            {totalItems > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-rose-900 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm"
              >
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}