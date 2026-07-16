import React from 'react';
import { NewsletterForm } from '../components/forms/NewsletterForm';
import { Mail } from 'lucide-react';

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
        <div className="bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-border text-center">
          <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-8 blob-shape">
            <Mail size={40} />
          </div>
          
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary mb-4">
            Join the Garden Club
          </h1>
          
          <p className="text-lg text-foreground/80 mb-10 max-w-md mx-auto">
            Grown-ups, leave your email to get gentle reminders for new episodes, free coloring pages, and resources for helping your little ones navigate big feelings.
          </p>
          
          <div className="bg-background rounded-3xl p-6 md:p-8 border border-border">
            <NewsletterForm compact={false} />
            <p className="text-xs text-muted-foreground mt-6">
              We respect your inbox. No spam, just sunshine and resources. 
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
