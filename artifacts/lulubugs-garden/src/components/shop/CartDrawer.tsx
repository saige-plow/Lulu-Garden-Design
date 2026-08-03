import React from 'react';
import { Link } from 'wouter';
import { X, Minus, Plus, ShoppingBag, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../lib/shop/cartContext';
import { formatPrice } from '../../lib/shop/products';
import { ProductPlaceholder } from './ProductPlaceholder';

export function CartDrawer() {
  const { items, isDrawerOpen, closeDrawer, removeItem, updateQty, subtotal, itemCount, checkoutUrl } = useCart();

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-background shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-primary" />
            <h2 className="font-display text-lg font-bold text-foreground">
              Your Cart
              {itemCount > 0 && (
                <span className="ml-2 text-sm font-bold text-white bg-secondary rounded-full px-2 py-0.5">
                  {itemCount}
                </span>
              )}
            </h2>
          </div>
          <button
            onClick={closeDrawer}
            className="p-2 rounded-full hover:bg-muted transition-colors"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto py-4 px-5">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-16">
              <ShoppingBag size={48} className="text-muted-foreground mb-4 opacity-40" />
              <p className="font-display text-lg font-bold text-foreground mb-1">Your cart is empty</p>
              <p className="text-sm text-muted-foreground mb-6">Add something from the shop!</p>
              <button
                onClick={closeDrawer}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-secondary transition-colors"
              >
                Browse the shop <ArrowRight size={14} />
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li key={item.variant.id} className="flex gap-3 py-2">
                  {/* Thumbnail */}
                  <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-muted">
                    {item.product.image ? (
                      <img
                        src={item.product.image}
                        alt={item.product.title}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <ProductPlaceholder category={item.product.category} size="sm" />
                    )}
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm text-foreground leading-tight truncate">
                      {item.product.title}
                    </p>
                    {item.variant.title !== 'Default' && (
                      <p className="text-xs text-muted-foreground mt-0.5">{item.variant.title}</p>
                    )}
                    <p className="text-sm font-bold text-secondary mt-1">
                      {formatPrice(item.variant.price)}
                      {item.variant.intervalLabel && (
                        <span className="text-xs font-normal text-muted-foreground ml-1">
                          {item.variant.intervalLabel}
                        </span>
                      )}
                    </p>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-border rounded-full overflow-hidden">
                        <button
                          onClick={() => updateQty(item.variant.id, item.quantity - 1)}
                          className="px-2.5 py-1 hover:bg-muted transition-colors text-foreground"
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="px-2 text-sm font-bold min-w-[24px] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQty(item.variant.id, item.quantity + 1)}
                          className="px-2.5 py-1 hover:bg-muted transition-colors text-foreground"
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.variant.id)}
                        className="p-1.5 text-muted-foreground hover:text-destructive transition-colors rounded-full hover:bg-destructive/10"
                        aria-label="Remove item"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  </div>

                  {/* Line total */}
                  <div className="text-right shrink-0">
                    <p className="text-sm font-bold text-foreground">
                      {formatPrice(item.variant.price * item.quantity)}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-border px-5 py-5 space-y-3 bg-background">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold text-foreground">{formatPrice(subtotal)}</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Shipping & taxes calculated at checkout.
            </p>
            <Link
              href="/cart"
              onClick={closeDrawer}
              className="block w-full text-center py-2.5 rounded-full border-2 border-primary text-primary font-bold text-sm hover:bg-primary hover:text-white transition-all"
            >
              View Cart
            </Link>
            <Link
              href={checkoutUrl}
              onClick={closeDrawer}
              className="block w-full text-center py-3 rounded-full bg-secondary text-white font-bold text-sm hover:bg-secondary/90 transition-all shadow-sm"
            >
              Checkout →
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
