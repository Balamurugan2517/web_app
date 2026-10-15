import { products } from '@/data/products';
import Link from 'next/link';

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">All Products</h1>
        <p className="text-gray-600 mt-1">Explore our complete collection of modern wardrobe essentials.</p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="group block bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="aspect-square bg-gray-100 flex items-center justify-center text-gray-400 text-sm font-medium group-hover:bg-gray-200 transition-colors">
              [ {product.name} ]
            </div>
            <div className="p-4">
              <span className="text-xs text-indigo-600 font-medium">{product.category}</span>
              <h3 className="text-base font-bold text-gray-900 mt-1 group-hover:text-indigo-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-900 font-semibold mt-2">${product.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
