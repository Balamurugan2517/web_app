import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight text-gray-900">
          Luxe & Thread<span className="text-indigo-600">.</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition-colors">New Arrivals</Link>
          <Link href="/shop" className="hover:text-gray-900 transition-colors">Shop All</Link>
          <Link href="/collections" className="hover:text-gray-900 transition-colors">Collections</Link>
          <Link href="/about" className="hover:text-gray-900 transition-colors">Our Story</Link>
        </nav>

        {/* Right Action Icons / Cart */}
        <div className="flex items-center space-x-4">
          <Link 
            href="/cart" 
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-700"
            aria-label="Shopping Cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {/* Cart Badge Counter */}
            <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
