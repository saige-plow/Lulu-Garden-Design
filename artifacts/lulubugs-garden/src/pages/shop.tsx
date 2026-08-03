import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { PRODUCTS, ShopProduct } from '../lib/shop/products';
import { ProductCard } from '../components/shop/ProductCard';

type Category = 'all' | ShopProduct['category'];

const FILTERS: { label: string; value: Category }[] = [
  { label: 'All', value: 'all' },
  { label: 'Games', value: 'game' },
  { label: 'Activity Books', value: 'book' },
  { label: 'Coloring Books', value: 'coloring' },
  { label: 'Subscription Box', value: 'subscription' },
];

export function Shop() {
  const [activeFilter, setActiveFilter] = useState<Category>('all');

  const filtered = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      {/* Page header */}
      <div className="bg-primary pt-16 pb-20 px-4 relative overflow-hidden">
        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="dots" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex items-center gap-2 mb-4">
            <Leaf size={18} className="text-white/60" />
            <span className="text-white/60 text-sm font-bold uppercase tracking-wider">The Garden Shop</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-4">
            Shop the Garden
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl">
            Games, books, and surprises to bring the garden home — and keep the learning growing.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-20 z-30 bg-background/95 backdrop-blur border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-bold transition-all ${
                activeFilter === f.value
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-muted text-foreground/70 hover:bg-muted/80'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-16">No products in this category yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* Bottom trust bar */}
      <div className="border-t border-border py-10 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-sm text-muted-foreground">
          <div>
            <p className="font-bold text-foreground mb-1">🌱 Purpose-driven</p>
            <p>Every purchase helps fund more episodes and free educational resources.</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">📦 Free shipping over $50</p>
            <p>US orders only. International shipping available at checkout.</p>
          </div>
          <div>
            <p className="font-bold text-foreground mb-1">💚 Easy returns</p>
            <p>Not happy? We'll make it right within 30 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
