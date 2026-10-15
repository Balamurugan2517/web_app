import { products } from '@/data/products';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import AddToCartButton from '@/components/AddToCartButton';
import SparkleBackground from '@/components/SparkleBackground';

export const instant = false;

interface PageProps {
  params: Promise<{ id: string }>;
}

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
    <div className="relative min-h-screen bg-[#FAF6F0] py-16 px-4 sm:px-6 lg:px-8">
      <SparkleBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <nav className="text-xs uppercase tracking-widest text-rose-800/70 mb-10 flex items-center space-x-2">
          <Link href="/" className="hover:text-[#4A151B] transition-colors">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#4A151B] transition-colors">Shop</Link>
          <span>/</span>
          <span className="text-[#4A151B] font-semibold">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Product Image Card */}
          <div className="aspect-[4/5] bg-white border border-rose-200/80 rounded-2xl flex items-center justify-center text-rose-900/60 font-light tracking-wide shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-100/40 via-transparent to-amber-50/40" />
            <div className="text-center p-6 relative z-10">
              <span className="text-xs uppercase tracking-[0.25em] block text-rose-800/80 mb-3 font-semibold">
                Luxe &amp; Thread Couture
              </span>
              <span className="text-2xl font-serif text-[#4A151B]">
                [ {product.name} ]
              </span>
            </div>
          </div>

          {/* Product Details & Actions */}
          <div className="flex flex-col justify-center space-y-8 lg:py-6">
            <div>
              <span className="inline-block bg-rose-100/80 border border-rose-200 text-[#4A151B] text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full font-semibold mb-4">
                {product.category}
              </span>
              <h1 className="text-3xl sm:text-5xl font-serif font-light tracking-tight text-[#4A151B] mb-4">
                {product.name}
              </h1>
              <p className="text-2xl font-light text-[#4A151B] tracking-wide">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <div className="border-t border-rose-200/80 pt-6">
              <p className="text-[#4A151B]/80 font-light leading-relaxed text-base">
                {product.description}
              </p>
            </div>

            {/* Interactive Size Selector & Add To Cart Button */}
            <div className="border-t border-rose-200/80 pt-6">
              <AddToCartButton product={product} />
            </div>

            {/* Premium Details */}
            <div className="border-t border-rose-200/80 pt-6 text-xs text-rose-900/80 space-y-2 uppercase tracking-wider font-medium">
              <p>✦ Complimentary artisan gift packaging on all orders</p>
              <p>✦ Sustainably sourced organic silk, linen &amp; wool blends</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}