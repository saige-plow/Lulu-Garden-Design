import { Link } from "wouter";
import logo from "@/assets/reference/logo.png";
import { SiYoutube, SiInstagram, SiFacebook, SiTiktok } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-lulubug-green text-white py-12">
      <div className="container mx-auto px-4 flex flex-col items-center gap-8">
        <Link href="/" className="h-20 inline-block bg-white p-2 rounded-xl">
          <img src={logo} alt="Lulubug's Garden" className="h-full w-auto object-contain" />
        </Link>
        
        <div className="flex items-center gap-6">
          <a href="https://www.youtube.com/@LulubugsGarden" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-lulubug-red transition-colors">
            <SiYoutube size={32} />
          </a>
          <a href="https://www.instagram.com/lulubugsgarden/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-lulubug-red transition-colors">
            <SiInstagram size={28} />
          </a>
          <a href="https://www.facebook.com/lulubugsgarden" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-lulubug-red transition-colors">
            <SiFacebook size={28} />
          </a>
          <a href="https://www.tiktok.com/@lulubugsgarden" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-lulubug-red transition-colors">
            <SiTiktok size={28} />
          </a>
        </div>

        <nav className="flex flex-wrap justify-center gap-6 font-bold text-sm">
          <Link href="/friends" className="hover:text-lulubug-red">Meet Garden Friends</Link>
          <Link href="/about" className="hover:text-lulubug-red">About Us</Link>
          <Link href="/mental-health-matters" className="hover:text-lulubug-red">Mental Health Matters</Link>
          <Link href="/press" className="hover:text-lulubug-red">Press</Link>
          <Link href="/contact" className="hover:text-lulubug-red">Contact</Link>
        </nav>

        <p className="text-sm opacity-80 mt-4 text-center">
          © Lulubug's Garden. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
