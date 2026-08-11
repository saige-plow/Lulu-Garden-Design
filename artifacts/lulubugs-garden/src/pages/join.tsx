import React from 'react';
import { NewsletterForm } from '../components/forms/NewsletterForm';
import { Mail } from 'lucide-react';

const YT_LOGO = (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

export function Join() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-20 px-4 bg-background relative overflow-hidden">
      {/* Decorative environment */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-accent blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-secondary blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-primary blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-2xl w-full relative z-10">
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-border">
          <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mb-8 blob-shape">
            <Mail size={40} />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Join the Garden Club
          </h1>
          
          <p className="text-lg text-foreground/80 mb-10 max-w-md">
            Grown-ups, leave your email to get gentle reminders for new episodes, free coloring pages, and resources for helping your little ones navigate big feelings.
          </p>
          
          <div className="bg-background rounded-3xl p-6 md:p-8 border border-border">
            <NewsletterForm compact={false} />
            <p className="text-xs text-muted-foreground mt-6">
              We respect your inbox. No spam, just sunshine and resources. 
              You can unsubscribe at any time.
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center">
            <p className="text-sm text-foreground/60 mb-4">Rather watch than read? We're on YouTube!</p>
            <a
              href="https://www.youtube.com/@LulubugsGarden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-8 py-3.5 text-white font-bold text-base hover:bg-[#cc0000] transition-all transform hover:scale-105 shadow-md"
            >
              {YT_LOGO}
              Watch on YouTube
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
