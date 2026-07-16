import React from 'react';
import { Link } from 'wouter';
import { Youtube, Instagram, Facebook, ExternalLink } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import hmhfLogo from '../../assets/reference/hmhf-logo.png';
import hmhiLogo from '../../assets/reference/hmhi-stacked.png';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground overflow-hidden relative">
      <div className="absolute inset-0 opacity-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="2" fill="currentColor" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-serif text-3xl font-bold mb-4">Lulubug's Garden</h3>
            <p className="text-primary-foreground/80 max-w-md mb-8 text-lg">
              A world of confident, emotionally-healthy children starts in the garden, one feeling at a time.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/@LulubugsGarden" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="YouTube">
                <Youtube size={24} />
              </a>
              <a href="https://www.instagram.com/lulubugsgarden/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={24} />
              </a>
              <a href="https://www.facebook.com/lulubugsgarden" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://www.tiktok.com/@lulubugsgarden" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-colors" aria-label="TikTok">
                <FaTiktok size={22} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Explore</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link href="/friends" className="hover:text-accent transition-colors">Meet the Friends</Link></li>
              <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="/mental-health-matters" className="hover:text-accent transition-colors">Why Mental Health?</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Our Partners</h4>
            <div className="flex flex-col items-start gap-4">
              <a href="https://huntsmanmentalhealthfoundation.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={hmhfLogo} alt="Huntsman Mental Health Foundation" className="h-10 w-auto object-contain brightness-0 invert" />
              </a>
              <a href="https://healthcare.utah.edu/hmhi" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
                <img src={hmhiLogo} alt="Huntsman Mental Health Institute" className="h-16 w-auto object-contain brightness-0 invert" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-accent">Connect</h4>
            <ul className="space-y-3">
              <li><Link href="/join" className="hover:text-accent transition-colors">Join our Newsletter</Link></li>
              <li><Link href="/press" className="hover:text-accent transition-colors">Press</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-primary-foreground/20 text-sm text-primary-foreground/60 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>This is a commercial website from Lulubug Enterprises LLC.</p>
          <p>LULUBUG'S GARDEN is a trademark of Lulubug Enterprises LLC. Logos © 2026.</p>
        </div>
      </div>
    </footer>
  );
}
