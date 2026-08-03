/**
 * ProductPlaceholder
 * Renders a styled placeholder tile when a product image is null.
 * Delete this component once real images are wired in via products.ts.
 */
import React from 'react';
import { BookOpen, Gamepad2, Package, Palette } from 'lucide-react';
import type { ShopProduct } from '../../lib/shop/products';

const CONFIG: Record<ShopProduct['category'], { icon: React.ElementType; bg: string; fg: string }> = {
  game:         { icon: Gamepad2,  bg: 'bg-amber-100',   fg: 'text-amber-500'   },
  book:         { icon: BookOpen,  bg: 'bg-sky-100',      fg: 'text-sky-500'     },
  coloring:     { icon: Palette,   bg: 'bg-pink-100',     fg: 'text-pink-500'    },
  subscription: { icon: Package,   bg: 'bg-primary/10',   fg: 'text-primary'     },
};

type Props = {
  category: ShopProduct['category'];
  size?: 'sm' | 'md' | 'lg';
};

export function ProductPlaceholder({ category, size = 'md' }: Props) {
  const { icon: Icon, bg, fg } = CONFIG[category];
  const iconSize = size === 'sm' ? 20 : size === 'lg' ? 56 : 36;

  return (
    <div className={`w-full h-full flex items-center justify-center ${bg}`}>
      <Icon size={iconSize} className={fg} strokeWidth={1.5} />
    </div>
  );
}
