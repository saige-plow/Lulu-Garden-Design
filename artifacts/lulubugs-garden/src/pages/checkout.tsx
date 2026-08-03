/**
 * CHECKOUT PAGE
 *
 * This is a lightweight order-summary + hand-off page.
 * It shows what's in the cart and routes to Shopify's hosted checkout.
 *
 * ─── TO CONNECT SHOPIFY ────────────────────────────────────────────────────────
 * 1. Replace the "Proceed to Shopify Checkout" button href with:
 *      cart.checkoutUrl   (returned by Storefront API cartCreate / cartLinesAdd)
 * 2. The email field below can be used to pre-fill the Shopify checkout via:
 *      cartBuyerIdentityUpdate mutation  (email field)
 * 3. Remove the placeholder notice banner once Shopify is live.
 * ───────────────────────────────────────────────────────────────────────────────
 */

import React, { useState } from 'react';
import { Link } from 'wouter';
import { ArrowLeft, Lock, ExternalLink, ShoppingBag } from 'lucide-react';
import { useCart } from '../lib/shop/cartContext';
import { formatPrice } from '../lib/shop/products';
import { ProductPlaceholder } from '../components/shop/ProductPlaceholder';

export function Checkout() {
  const { items, subtotal, checkoutUrl } = useCart();
  const [email, setEmail] = useState('');

  const ESTIMATED_SHIPPING = subtotal >= 50 ? 0 : 5.99;
  const ESTIMATED_TOTAL = subtotal + ESTIMATED_SHIPPING;

  if (items.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-24">
        <ShoppingBag size={64} className="text-muted-foreground opacity-30 mb-6" />
        <h1 className="font-display text-3xl font-bold text-foreground mb-3">Nothing to check out</h1>
        <p className="text-muted-foreground mb-8">Your cart is empty. Add something from the shop first!</p>
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
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Placeholder notice — remove once Shopify is connected */}
      <div className="mb-8 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-800">
        <strong>Coming soon:</strong> Shopify checkout is not yet connected. Clicking "Proceed to Checkout" will redirect to a placeholder URL.
        Remove this notice and update <code className="bg-amber-100 px-1 rounded">checkoutUrl</code> in <code className="bg-amber-100 px-1 rounded">cartContext.tsx</code> once Shopify is live.
      </div>

      <Link
        href="/cart"
        className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to cart
      </Link>

      <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10">Checkout</h1>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Left: contact + handoff */}
        <div className="md:col-span-3 space-y-6">
          {/* Contact */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-4">Contact</h2>
            <label className="block text-sm font-bold text-foreground mb-1.5" htmlFor="checkout-email">
              Email address
            </label>
            <input
              id="checkout-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition"
            />
            <p className="text-xs text-muted-foreground mt-2">
              {/* SHOPIFY: pass this email to cartBuyerIdentityUpdate before redirecting */}
              We'll send your order confirmation here.
            </p>
          </div>

          {/* Shopify handoff */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-6">
            <h2 className="font-display text-lg font-bold text-foreground mb-2">Shipping & Payment</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Shipping address, payment, and order confirmation are handled securely through Shopify.
            </p>

            {/*
              SHOPIFY: Replace href below with the live `cart.checkoutUrl` from the Storefront API.
              Optionally pre-fill buyer email via cartBuyerIdentityUpdate before redirecting.
            */}
            <a
              href={checkoutUrl}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-all shadow-sm"
            >
              <Lock size={16} />
              Proceed to Secure Checkout
              <ExternalLink size={14} className="opacity-70" />
            </a>

            <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Lock size={11} /> SSL encrypted</span>
              <span>·</span>
              <span>Powered by Shopify</span>
            </div>
          </div>
        </div>

        {/* Right: order summary */}
        <div className="md:col-span-2 bg-muted/40 rounded-2xl border border-border p-6">
          <h2 className="font-display text-lg font-bold text-foreground mb-5">Order Summary</h2>

          <ul className="space-y-4 mb-6">
            {items.map((item) => (
              <li key={item.variant.id} className="flex gap-3 items-start">
                <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-white border border-border relative">
                  {item.product.image ? (
                    <img src={item.product.image} alt={item.product.title} className="w-full h-full object-cover" />
                  ) : (
                    <ProductPlaceholder category={item.product.category} size="sm" />
                  )}
                  {/* Quantity bubble */}
                  <span className="absolute -top-1.5 -right-1.5 bg-muted-foreground text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {item.quantity}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-foreground leading-snug">{item.product.title}</p>
                  {item.variant.title !== 'Default' && (
                    <p className="text-xs text-muted-foreground">{item.variant.title}</p>
                  )}
                </div>
                <p className="text-sm font-bold text-foreground shrink-0">
                  {formatPrice(item.variant.price * item.quantity)}
                </p>
              </li>
            ))}
          </ul>

          <div className="border-t border-border pt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span className="font-bold">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Shipping</span>
              <span className="font-bold">
                {ESTIMATED_SHIPPING === 0 ? (
                  <span className="text-green-600">FREE</span>
                ) : (
                  formatPrice(ESTIMATED_SHIPPING)
                )}
              </span>
            </div>
            <div className="flex justify-between pt-2 border-t border-border font-bold text-base">
              <span>Total</span>
              <span>{formatPrice(ESTIMATED_TOTAL)}</span>
            </div>
            <p className="text-xs text-muted-foreground">Tax calculated at checkout.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
