import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import logo from "@/assets/reference/logo.png";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/friends", label: "Meet Garden Friends" },
  { href: "/about", label: "About Us" },
  { href: "/mental-health-matters", label: "Mental Health Matters" },
  { href: "/press", label: "Press" },
  { href: "/join", label: "Join Now" },
  { href: "/contact", label: "Contact" },
];

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const [location] = useLocation();

  return (
    <nav className="flex flex-col gap-2">
      {NAV_LINKS.map((link) => {
        const isActive = location === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "px-4 py-3 rounded-full font-bold text-sm text-center transition-colors",
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
  );
}

export function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Lock background scroll while the drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Focus the close button on open, restore focus to the trigger on close
  useEffect(() => {
    if (mobileOpen) {
      closeRef.current?.focus();
    } else {
      triggerRef.current?.focus();
    }
  }, [mobileOpen]);

  // Escape to close + simple focus trap within the drawer
  useEffect(() => {
    if (!mobileOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key === "Tab" && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a, button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden w-full bg-lulubug-cream border-b border-border sticky top-0 z-40 flex items-center justify-between px-4 h-20">
        <Link href="/" className="h-14 inline-block">
          <img src={logo} alt="Lulubug's Garden" className="h-full w-auto object-contain" />
        </Link>
        <button
          ref={triggerRef}
          className="p-2 text-lulubug-green"
          aria-label="Open menu"
          aria-haspopup="dialog"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-drawer"
          onClick={() => setMobileOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-[70] flex">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-nav-drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="relative z-10 w-72 max-w-[80vw] h-full bg-lulubug-cream border-r border-border p-6 flex flex-col gap-8 overflow-y-auto"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="h-14 inline-block" onClick={() => setMobileOpen(false)}>
                <img src={logo} alt="Lulubug's Garden" className="h-full w-auto object-contain" />
              </Link>
              <button
                ref={closeRef}
                className="p-2 text-lulubug-green"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            <NavLinks onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop fixed sidebar */}
      <aside className="hidden md:flex md:flex-col md:w-64 md:shrink-0 md:h-screen md:sticky md:top-0 bg-lulubug-cream border-r border-border p-6 gap-10 overflow-y-auto">
        <Link href="/" className="h-16 inline-block">
          <img src={logo} alt="Lulubug's Garden" className="h-full w-auto object-contain" />
        </Link>
        <NavLinks />
      </aside>
    </>
  );
}
