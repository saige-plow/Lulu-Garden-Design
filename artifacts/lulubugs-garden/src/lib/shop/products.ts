/**
 * SHOP PRODUCT CATALOG
 *
 * This file is the single source of truth for products while running without Shopify.
 *
 * ─── TO CONNECT SHOPIFY ────────────────────────────────────────────────────────
 * 1. Install the Shopify Buy SDK:  pnpm add shopify-buy
 * 2. In cartContext.tsx, replace the PRODUCTS import with a Storefront API fetch:
 *      const products = await client.product.fetchAll();
 * 3. Map Shopify's response shape to the ShopProduct / ShopVariant types below.
 *    The field names intentionally mirror Shopify's product model so the mapping
 *    is one-to-one (id → id, handle → handle, variants → variants, etc.).
 * ───────────────────────────────────────────────────────────────────────────────
 */

export type ShopVariant = {
  /** Will become the Shopify variant GID, e.g. "gid://shopify/ProductVariant/123" */
  id: string;
  title: string;
  price: number;
  compareAtPrice?: number;
  /** Display suffix shown after the price, e.g. "/ month" */
  intervalLabel?: string;
  available: boolean;
};

export type ShopProduct = {
  /** Will become the Shopify product GID */
  id: string;
  /** URL-safe slug — used for routing and as the Shopify product handle */
  handle: string;
  title: string;
  shortDescription: string;
  description: string;
  category: 'game' | 'book' | 'subscription' | 'coloring';
  /** Set to null until real images are added; swap with an import or URL string */
  image: string | null;
  /** Secondary image shown on hover — set to null until available */
  hoverImage: string | null;
  badge?: string;
  variants: ShopVariant[];
};

export const PRODUCTS: ShopProduct[] = [
  {
    id: 'product-memory-game',
    handle: 'memory-game',
    title: "Lulubug's Garden Memory Game",
    shortDescription: 'Match the garden friends and their feelings.',
    description:
      'A beautifully illustrated memory matching game featuring Lulubug, Curby, Sterling, Willow, Daisy and the Feelings Flower. 36 cards, ages 3+. Helps children practice emotional vocabulary while they play.',
    category: 'game',
    image: null,
    hoverImage: null,
    badge: 'New',
    variants: [
      {
        id: 'variant-memory-game-default',
        title: 'Default',
        price: 24.99,
        available: true,
      },
    ],
  },
  {
    id: 'product-activity-book',
    handle: 'activity-book',
    title: 'Garden Friends Activity Book',
    shortDescription: 'Puzzles, mazes, and feeling exercises for little learners.',
    description:
      '48 pages of age-appropriate activities — connect-the-dots, mazes, emotion check-ins, and guided drawing prompts — all starring your favourite garden friends. Ages 4–7. Perfect for screen-free time.',
    category: 'book',
    image: null,
    hoverImage: null,
    variants: [
      {
        id: 'variant-activity-book-default',
        title: 'Default',
        price: 14.99,
        available: true,
      },
    ],
  },
  {
    id: 'product-coloring-book',
    handle: 'coloring-book',
    title: 'Lulubug Coloring Book',
    shortDescription: 'Bring the garden to life with your own colors.',
    description:
      '32 full-page illustrations of scenes from the show, ready to color. Includes a feelings chart poster at the back. Printed on thick, marker-friendly paper. Ages 3+.',
    category: 'coloring',
    image: null,
    hoverImage: null,
    variants: [
      {
        id: 'variant-coloring-book-default',
        title: 'Default',
        price: 9.99,
        available: true,
      },
    ],
  },
  {
    id: 'product-subscription-box',
    handle: 'subscription-box',
    title: "Lulubug's Garden Subscription Box",
    shortDescription: 'A curated box of garden-themed activities delivered to your door.',
    description:
      'Each box is packed with seasonal crafts, a mini activity booklet, a feelings card deck, a small plush or figurine, and a parent guide — all tied to a theme from the show. New box every month or quarter.',
    category: 'subscription',
    image: null,
    hoverImage: null,
    badge: 'Best Value',
    variants: [
      {
        id: 'variant-sub-monthly',
        title: 'Monthly',
        price: 29.99,
        intervalLabel: '/ month',
        available: true,
      },
      {
        id: 'variant-sub-quarterly',
        title: 'Quarterly',
        price: 74.99,
        intervalLabel: '/ quarter',
        compareAtPrice: 89.97, // 3× monthly, showing the saving
        available: true,
      },
    ],
  },
];

/** Helper: lowest price across all variants */
export function startingPrice(product: ShopProduct): number {
  return Math.min(...product.variants.map((v) => v.price));
}

/** Helper: format a price as a USD string */
export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
}
