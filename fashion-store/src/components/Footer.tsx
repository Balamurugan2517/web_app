import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#FAF0E6] border-t border-rose-300/60 pt-16 pb-12 text-[#4A151B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#4A151B]">
              Luxe &amp; Thread<span className="text-rose-600">.</span>
            </h3>
            <p className="text-xs text-[#4A151B]/80 leading-relaxed">
              Modern fashion essentials crafted with precision and sustainable materials for the contemporary wardrobe.
            </p>
          </div>

          {/* Shop Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4A151B] mb-4">
              Shop
            </h4>
            <ul className="space-y-2.5 text-xs text-[#4A151B]/80">
              <li><Link href="/shop" className="hover:text-rose-700 transition-colors">New Arrivals</Link></li>
              <li><Link href="/shop" className="hover:text-rose-700 transition-colors">Best Sellers</Link></li>
              <li><Link href="/shop" className="hover:text-rose-700 transition-colors">Outerwear</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4A151B] mb-4">
              Support
            </h4>
            <ul className="space-y-2.5 text-xs text-[#4A151B]/80">
              <li><a href="#" className="hover:text-rose-700 transition-colors">Shipping &amp; Returns</a></li>
              <li><a href="#" className="hover:text-rose-700 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-rose-700 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold text-[#4A151B] mb-4">
              Stay Updated
            </h4>
            <p className="text-xs text-[#4A151B]/80 mb-3">
              Subscribe to receive updates on exclusive collection drops.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white border border-rose-300/80 rounded-lg px-3 py-2 text-xs text-[#4A151B] placeholder-rose-400 focus:outline-none focus:border-rose-500 flex-grow"
              />
              <button className="bg-[#4A151B] text-white text-xs px-4 py-2 rounded-lg font-medium hover:bg-rose-900 transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-rose-300/50 pt-8 text-center text-[11px] text-[#4A151B]/70">
          &copy; 2026 Luxe &amp; Thread Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}