import React from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Youtube, ShoppingBag } from 'lucide-react';
import logo from '../../assets/reference/logo.png';
import { useCart } from '../../lib/shop/cartContext';

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [location] = useLocation();
  const { itemCount, openDrawer } = useCart();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/friends', label: 'Meet Garden Friends' },
    { href: '/about', label: 'About Us' },
    { href: '/mental-health-matters', label: 'Why Mental Health?' },
    { href: '/shop', label: 'Shop' },
    { href: '/press', label: 'Press' },
    { href: '/contact', label: 'Contact' },
  ];

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-40 w-full bg-background/90 backdrop-blur-md border-b border-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <img src={logo} alt="Lulubug's Garden" className="h-16 w-auto object-contain" />
            </Link>
          </div>
          
          <div className="hidden lg:flex items-center space-x-6">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`text-sm font-bold transition-colors hover:text-secondary ${
                  location === link.href ? 'text-secondary' : 'text-foreground/80'
                }`}
              >
                {link.label}
              </Link>
            ))}
            
            <div className="flex items-center gap-3 pl-4 border-l border-muted">
              <a 
                href="https://www.youtube.com/@LulubugsGarden" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-muted text-primary hover:bg-secondary hover:text-white transition-all transform hover:scale-105"
                aria-label="Watch on YouTube"
              >
                <Youtube size={20} />
              </a>

              {/* Cart icon */}
              <button
                onClick={openDrawer}
                aria-label={`Open cart${itemCount > 0 ? ` (${itemCount} items)` : ''}`}
                className="relative flex items-center justify-center w-10 h-10 rounded-full bg-muted text-primary hover:bg-secondary hover:text-white transition-all transform hover:scale-105"
              >
                <ShoppingBag size={20} />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-secondary text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-0.5 shadow-sm">
                    {itemCount > 99 ? '99+' : itemCount}
                  </span>
                )}
              </button>

              <Link 
                href="/join" 
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all transform hover:scale-105 shadow-sm"
              >
                Join the Garden
              </Link>
            </div>
          </div>
          
          <div className="flex items-center lg:hidden gap-2">
            {/* Mobile cart icon */}
            <button
              onClick={openDrawer}
              aria-label={`Open cart${itemCount > 0 ? ` (${itemCount} items)` : ''}`}
              className="relative p-2 text-primary"
            >
              <ShoppingBag size={22} />
              {itemCount > 0 && (
                <span className="absolute top-0.5 right-0.5 bg-secondary text-white text-[9px] font-bold rounded-full min-w-[16px] h-[16px] flex items-center justify-center px-0.5">
                  {itemCount}
                </span>
              )}
            </button>

            <Link 
              href="/join" 
              className="inline-flex items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground"
            >
              Join
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-primary hover:bg-muted focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-background border-b border-muted shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={closeMenu}
                className={`block px-3 py-3 rounded-xl text-base font-bold ${
                  location === link.href ? 'bg-muted text-secondary' : 'text-foreground hover:bg-muted/50'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-muted px-3">
              <a 
                href="https://www.youtube.com/@LulubugsGarden" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 text-base font-bold text-foreground hover:text-secondary"
              >
                <Youtube size={20} className="text-secondary" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
