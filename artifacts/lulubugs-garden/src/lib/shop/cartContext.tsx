/**
 * CART CONTEXT
 *
 * Manages cart state (items, quantities) and drawer visibility.
 *
 * ─── TO CONNECT SHOPIFY ────────────────────────────────────────────────────────
 * Replace the localStorage-backed state here with Shopify Cart API calls:
 *   - addItem       → POST /api/2024-01/graphql (cartLinesAdd mutation)
 *   - removeItem    → cartLinesRemove mutation
 *   - updateQty     → cartLinesUpdate mutation
 *   - clearCart     → cartDelete or cartLinesRemove all
 *   - checkoutUrl   → cart.checkoutUrl from Storefront API response
 * Keep the same hook API (useCart) so no page components need to change.
 * ───────────────────────────────────────────────────────────────────────────────
 */

import React, { createContext, useContext, useReducer, useState, useCallback } from 'react';
import { ShopProduct, ShopVariant } from './products';

export type CartItem = {
  product: ShopProduct;
  variant: ShopVariant;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

type CartAction =
  | { type: 'ADD_ITEM'; product: ShopProduct; variant: ShopVariant }
  | { type: 'REMOVE_ITEM'; variantId: string }
  | { type: 'UPDATE_QTY'; variantId: string; quantity: number }
  | { type: 'CLEAR' };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find((i) => i.variant.id === action.variant.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.variant.id === action.variant.id
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          { product: action.product, variant: action.variant, quantity: 1 },
        ],
      };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter((i) => i.variant.id !== action.variantId) };
    case 'UPDATE_QTY':
      if (action.quantity <= 0) {
        return { items: state.items.filter((i) => i.variant.id !== action.variantId) };
      }
      return {
        items: state.items.map((i) =>
          i.variant.id === action.variantId ? { ...i, quantity: action.quantity } : i
        ),
      };
    case 'CLEAR':
      return { items: [] };
    default:
      return state;
  }
}

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  addItem: (product: ShopProduct, variant: ShopVariant) => void;
  removeItem: (variantId: string) => void;
  updateQty: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  /**
   * SHOPIFY: Replace this placeholder string with the live cart.checkoutUrl
   * returned by the Storefront API after each cart mutation.
   */
  checkoutUrl: string;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const addItem = useCallback((product: ShopProduct, variant: ShopVariant) => {
    dispatch({ type: 'ADD_ITEM', product, variant });
    setDrawerOpen(true);
  }, []);

  const removeItem = useCallback((variantId: string) => {
    dispatch({ type: 'REMOVE_ITEM', variantId });
  }, []);

  const updateQty = useCallback((variantId: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QTY', variantId, quantity });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const itemCount = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const subtotal = state.items.reduce(
    (sum, i) => sum + i.variant.price * i.quantity,
    0
  );

  // SHOPIFY: Replace with live cart.checkoutUrl from Storefront API
  const checkoutUrl = '/checkout';

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        itemCount,
        subtotal,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        addItem,
        removeItem,
        updateQty,
        clearCart,
        checkoutUrl,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside <CartProvider>');
  return ctx;
}
