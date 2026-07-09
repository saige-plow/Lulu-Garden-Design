import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import logo from "@/assets/reference/logo.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/friends", label: "Meet Garden Friends" },
  { href: "/about", label: "About Us" },
  { href: "/join", label: "Join Now" },
  { href: "/contact", label: "Contact" },
  { href: "/mental-health-matters", label: "Mental Health Matters", hidden: true },
  { href: "/press", label: "Press", hidden: true }
];

export function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-lulubug-cream border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4 h-24 flex items-center justify-between">
        <Link href="/" className="h-16 inline-block">
          <img src={logo} alt="Lulubug's Garden" className="h-full w-auto object-contain" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-3">
          {NAV_LINKS.filter(l => !l.hidden).map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-4 py-2 rounded-full font-bold text-sm transition-colors",
                  isActive
                    ? "bg-lulubug-red text-white underline decoration-2 underline-offset-4"
                    : "bg-lulubug-red text-white hover:bg-red-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-lulubug-green"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <nav className="md:hidden border-t border-border bg-lulubug-cream p-4 flex flex-col gap-3">
          {NAV_LINKS.filter(l => !l.hidden).map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-full font-bold text-center text-lg transition-colors",
                  isActive
                    ? "bg-lulubug-red text-white underline decoration-2 underline-offset-4"
                    : "bg-lulubug-red text-white hover:bg-red-700"
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
