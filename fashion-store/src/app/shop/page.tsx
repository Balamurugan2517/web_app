import Link from 'next/link';
import { products } from '@/data/products';
import SparkleBackground from '@/components/SparkleBackground';

export default function ShopPage() {
  return (
    <div className="relative min-h-screen bg-[#FAF6F0] py-16 px-4 sm:px-6 lg:px-8">
      <SparkleBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold text-rose-800/80 block mb-2">
            Curated Couture
          </span>
          <h1 className="text-4xl sm:text-5xl font-serif font-light text-[#4A151B] mb-4">
            The Complete Collection
          </h1>
          <p className="text-rose-900/70 max-w-xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Discover timeless silhouettes, artisan fabrics, and modern wardrobe essentials.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white/90 border border-rose-200/70 rounded-2xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image Placeholder */}
              <div className="aspect-[4/5] bg-gradient-to-b from-rose-50/50 to-amber-50/30 flex items-center justify-center p-6 text-center border-b border-rose-100/60 relative overflow-hidden">
                <span className="text-xs uppercase tracking-widest text-rose-800/60 font-medium group-hover:scale-105 transition-transform duration-300">
                  [ {product.name} ]
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col justify-between flex-grow bg-white">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-rose-800 font-semibold block mb-1">
                    {product.category}
                  </span>
                  <h2 className="text-lg font-serif font-medium text-[#4A151B] group-hover:text-rose-700 transition-colors">
                    {product.name}
                  </h2>
                </div>

                <div className="mt-4 flex items-center justify-between pt-3 border-t border-rose-100/60">
                  <span className="text-base font-light text-[#4A151B]">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-rose-900 font-medium group-hover:translate-x-1 transition-transform">
                    View &rarr;
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}