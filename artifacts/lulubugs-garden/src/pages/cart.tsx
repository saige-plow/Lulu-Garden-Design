import React from 'react';
import { Link } from 'wouter';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft, ArrowRight } from 'lucide-react';
import { useCart } from '../lib/shop/cartContext';
import { formatPrice } from '../lib/shop/products';
import { ProductPlaceholder } from '../components/shop/ProductPlaceholder';

export function Cart() {
  const { items, removeItem, updateQty, subtotal, itemCount, clearCart, checkoutUrl } = useCart();

  const ESTIMATED_SHIPPING = subtotal >= 50 ? 0 : 5.99;
  const ESTIMATED_TOTAL = subtotal + ESTIMATED_SHIPPING;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
        <ShoppingBag size={64} className="text-muted-foreground opacity-30 mb-6" />
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">Your cart is empty</h1>
        <p className="text-muted-foreground mb-8 max-w-sm">
          Head back to the shop to find something for your little one!
        </p>
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all"
        >
          <ArrowLeft size={16} />
          Shop the Garden
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Your Cart
          <span className="ml-3 text-lg font-normal text-muted-foreground">
            ({itemCount} {itemCount === 1 ? 'item' : 'items'})
          </span>
        </h1>
        <button
          onClick={clearCart}
          className="text-sm text-muted-foreground hover:text-destructive transition-colors"
        >
          Clear all
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8 items-start">
        {/* Line items */}
        <div className="md:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={item.variant.id}
              className="flex gap-4 p-4 bg-white rounded-2xl border border-border shadow-sm"
            >
              {/* Thumbnail */}
              <div className="w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-muted">
                {item.product.image ? (
                  <img
                    src={item.product.image}
                    alt={item.product.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <ProductPlaceholder category={item.product.category} size="md" />
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-foreground leading-snug">{item.product.title}</h3>
                {item.variant.title !== 'Default' && (
                  <p className="text-sm text-muted-foreground mt-0.5">{item.variant.title}</p>
                )}
                <p className="text-sm font-bold text-secondary mt-1">
                  {formatPrice(item.variant.price)}
                  {item.variant.intervalLabel && (
                    <span className="font-normal text-muted-foreground ml-1">
                      {item.variant.intervalLabel}
                    </span>
                  )}
                </p>

                <div className="flex items-center gap-3 mt-3">
                  {/* Qty controls */}
                  <div className="flex items-center border border-border rounded-full overflow-hidden">
                    <button
                      onClick={() => updateQty(item.variant.id, item.quantity - 1)}
                      className="px-3 py-1.5 hover:bg-muted transition-colors text-foreground"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={13} />
                    </button>
                    <span className="px-3 text-sm font-bold min-w-[32px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQty(item.variant.id, item.quantity + 1)}
                      className="px-3 py-1.5 hover:bg-muted transition-colors text-foreground"
                      aria-label="Increase quantity"
                    >
                      <Plus size={13} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.variant.id)}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-destructive transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 size={14} />
                    Remove
                  </button>
                </div>
              </div>

              {/* Line total */}
              <div className="shrink-0 text-right">
                <p className="font-bold text-foreground">{formatPrice(item.variant.price * item.quantity)}</p>
              </div>
            </div>
          ))}

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors mt-2"
          >
            <ArrowLeft size={14} />
            Continue shopping
          </Link>
        </div>

        {/* Order summary sidebar */}
        <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sticky top-28">
          <h2 className="font-display text-xl font-bold text-foreground mb-5">Order Summary</h2>

          <div className="space-y-3 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Estimated shipping</span>
              <span className="font-bold">
                {ESTIMATED_SHIPPING === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  formatPrice(ESTIMATED_SHIPPING)
                )}
              </span>
            </div>
            {subtotal < 50 && (
              <p className="text-xs text-muted-foreground bg-muted rounded-lg px-3 py-2">
                Add {formatPrice(50 - subtotal)} more for free shipping!
              </p>
            )}
            <div className="border-t border-border pt-3 flex justify-between font-bold text-base">
              <span>Estimated total</span>
              <span>{formatPrice(ESTIMATED_TOTAL)}</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground mt-3 mb-5">
            Tax calculated at checkout.
          </p>

          <Link
            href={checkoutUrl}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-all shadow-sm text-sm"
          >
            Proceed to Checkout
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
