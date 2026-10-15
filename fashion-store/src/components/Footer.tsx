'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
        <div>
          <h3 className="text-white text-lg font-bold mb-4">Luxe & Thread.</h3>
          <p className="text-sm">Modern fashion essentials crafted with precision and sustainable materials for the contemporary wardrobe.</p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/shop" className="hover:text-white transition-colors">New Arrivals</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Best Sellers</Link></li>
            <li><Link href="/shop" className="hover:text-white transition-colors">Outerwear</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Support</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/contact" className="hover:text-white transition-colors">Shipping & Returns</Link></li>
            <li><Link href="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
            <li><Link href="/support" className="hover:text-white transition-colors">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">Stay Updated</h4>
          <p className="text-sm mb-4">Subscribe to receive updates on exclusive collection drops and offers.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-gray-800 text-white px-4 py-2 text-sm rounded-l-md focus:outline-none focus:ring-1 focus:ring-indigo-500 w-full"
            />
            <button className="bg-indigo-600 text-white px-4 py-2 text-sm font-medium rounded-r-md hover:bg-indigo-500 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-gray-800 text-xs text-center">
        &copy; 2026 Luxe & Thread Inc. All rights reserved.
      </div>
    </footer>
  );
}