import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Banner */}
      <section className="relative bg-gray-100 rounded-2xl mx-4 sm:mx-8 overflow-hidden py-24 px-8 sm:px-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between">
        <div className="max-w-xl space-y-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-indigo-600">
            Autumn / Winter Collection 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
            Thoughtful pieces, made to be worn.
          </h1>
          <p className="text-lg text-gray-600">
            Discover natural textures, timeless shapes, and sustainable fashion designed for everyday elegance.
          </p>
          <div className="pt-2 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link
              href="/shop"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="/about"
              className="bg-white text-gray-900 border border-gray-300 px-6 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>

        {/* Featured Card Showcase */}
        <div className="mt-10 md:mt-0 w-full max-w-sm bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-left">
          <div className="aspect-square bg-stone-100 rounded-lg mb-4 flex items-center justify-center text-stone-400 font-medium">
            [ Featured Product Image ]
          </div>
          <span className="inline-block bg-indigo-50 text-indigo-700 text-xs px-2.5 py-1 rounded-full font-medium mb-2">
            New Arrival
          </span>
          <h3 className="text-lg font-bold text-gray-900">Classic Linen Shirt</h3>
          <p className="text-sm text-gray-500 mb-4">Natural · 100% Linen</p>
          <div className="flex items-center justify-between pt-2 border-t border-gray-100">
            <span className="text-lg font-bold text-gray-900">$45.00</span>
            <button className="bg-gray-900 text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
              Add to Cart
            </button>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {['Outerwear', 'Tops & Shirts', 'Accessories'].map((category) => (
            <div
              key={category}
              className="group relative bg-gray-100 h-64 rounded-xl p-6 flex flex-col justify-end overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <div className="relative z-20 text-white">
                <h3 className="text-xl font-bold">{category}</h3>
                <span className="text-xs text-gray-300 underline underline-offset-4 mt-1 inline-block group-hover:text-white">
                  Explore category &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}