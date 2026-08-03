import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';
import { ShopProduct, ShopVariant, formatPrice } from '../../lib/shop/products';
import { useCart } from '../../lib/shop/cartContext';
import { ProductPlaceholder } from './ProductPlaceholder';

type Props = {
  product: ShopProduct;
};

export function ProductCard({ product }: Props) {
  const { addItem } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<ShopVariant>(product.variants[0]);
  const [added, setAdded] = useState(false);

  const isMultiVariant = product.variants.length > 1;

  function handleAdd() {
    addItem(product, selectedVariant);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  }

  return (
    <div className="group flex flex-col bg-white rounded-2xl border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image area */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        {product.image ? (
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
            <ProductPlaceholder category={product.category} size="lg" />
          </div>
        )}

        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-sm">
            {product.badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-display font-bold text-foreground text-base leading-snug mb-1">
          {product.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
          {product.shortDescription}
        </p>

        {/* Variant selector (subscription box only) */}
        {isMultiVariant && (
          <div className="flex gap-2 mb-4">
            {product.variants.map((v) => (
              <button
                key={v.id}
                onClick={() => setSelectedVariant(v)}
                className={`flex-1 py-2 px-3 rounded-xl border-2 text-sm font-bold transition-all ${
                  selectedVariant.id === v.id
                    ? 'border-primary bg-primary/5 text-primary'
                    : 'border-border text-muted-foreground hover:border-primary/40'
                }`}
              >
                <span className="block">{v.title}</span>
                <span className="block text-xs font-normal mt-0.5">
                  {formatPrice(v.price)}
                  {v.intervalLabel && v.intervalLabel}
                </span>
                {v.compareAtPrice && (
                  <span className="block text-xs text-muted-foreground line-through">
                    {formatPrice(v.compareAtPrice)}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {/* Price row */}
        <div className="flex items-end justify-between mb-4">
          <div>
            <span className="text-xl font-bold text-foreground">
              {formatPrice(selectedVariant.price)}
            </span>
            {selectedVariant.intervalLabel && (
              <span className="text-sm text-muted-foreground ml-1">
                {selectedVariant.intervalLabel}
              </span>
            )}
            {selectedVariant.compareAtPrice && (
              <span className="text-sm text-muted-foreground line-through ml-2">
                {formatPrice(selectedVariant.compareAtPrice)}
              </span>
            )}
          </div>
        </div>

        {/* Add to cart */}
        <button
          onClick={handleAdd}
          disabled={!selectedVariant.available || added}
          className={`w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-sm transition-all shadow-sm ${
            added
              ? 'bg-green-500 text-white'
              : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]'
          }`}
        >
          {added ? (
            <>
              <Check size={16} />
              Added!
            </>
          ) : (
            <>
              <ShoppingCart size={16} />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
}
