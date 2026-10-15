import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static routes for all product IDs at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <nav className="text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-gray-900">Home</Link> / 
        <Link href="/shop" className="hover:text-gray-900 ml-1">Shop</Link> / 
        <span className="text-gray-900 ml-1">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image Showcase */}
        <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center text-gray-400 font-medium text-lg">
          [ {product.name} Image ]
        </div>

        {/* Product Details & Actions */}
        <div className="flex flex-col justify-center space-y-6">
          <div>
            <span className="inline-block bg-indigo-50 text-indigo-700 text-xs px-3 py-1 rounded-full font-medium mb-3">
              {product.category}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{product.name}</h1>
            <p className="text-2xl font-semibold text-gray-900 mt-2">${product.price.toFixed(2)}</p>
          </div>

          <p className="text-gray-600 leading-relaxed">{product.description}</p>

          {/* Size Selector */}
          <div>
            <label className="block text-sm font-medium text-gray-900 mb-2">Select Size</label>
            <div className="flex gap-3">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="border border-gray-300 rounded-md px-4 py-2 text-sm font-medium hover:border-gray-900 transition-colors focus:ring-2 focus:ring-indigo-500"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="w-full bg-gray-900 text-white py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors shadow-sm">
            Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
}