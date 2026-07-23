import React from 'react';
import { Download, Mail, Newspaper, PencilLine } from 'lucide-react';

export function Press() {
  return (
    <div className="w-full pt-16 pb-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Resources, assets, and news about Lulubug's Garden and our mission to support early childhood mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main content column */}
          <div className="md:col-span-2 space-y-16">
            
            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">About the Show</h2>
              <div className="prose prose-lg text-foreground/80 bg-background p-8 rounded-3xl border border-border">
                <div className="flex items-start gap-3 mb-6 bg-amber-50 border border-amber-200 rounded-2xl px-4 py-3 not-prose">
                  <PencilLine size={18} className="text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-amber-700 text-sm font-medium">
                    Press boilerplate pending approval — add final copy here before publishing.
                  </p>
                </div>
                <p>
                  Lulubug's Garden is an upcoming children's series dedicated to teaching preschoolers that all feelings are okay. Through the adventures of Lulubug and her garden friends, the show models healthy emotional processing, empathy, and resilience. Produced in partnership with the Huntsman Mental Health Foundation, the series blends joyful storytelling with evidence-based mental health principles designed specifically for early childhood development.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">In the News</h2>
              <div className="py-10 px-8 rounded-3xl bg-background border border-border">
                <Newspaper size={28} className="text-muted-foreground mb-4" />
                <p className="font-display text-xl font-bold text-foreground/70 mb-2">Coverage coming soon</p>
                <p className="text-foreground/50 text-sm max-w-xs">
                  As Lulubug's Garden prepares for launch, we'll update this section with features, reviews, and interviews.
                </p>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="font-display text-2xl font-bold mb-6 text-primary">Media Assets</h3>
              <ul className="space-y-4">
                <li>
                  <button className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group">
                    <Download className="text-primary group-hover:text-white" size={20} />
                    <span className="font-bold text-left">Brand Guidelines & Logos</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group">
                    <Download className="text-primary group-hover:text-white" size={20} />
                    <span className="font-bold text-left">Character Bios & Art</span>
                  </button>
                </li>
                <li>
                  <button className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group">
                    <Download className="text-primary group-hover:text-white" size={20} />
                    <span className="font-bold text-left">Full Media Kit (PDF)</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-3xl p-8 border border-secondary/20">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Media Contact</h3>
              <p className="text-foreground/80 mb-6 text-sm">
                For interview requests, screeners, or additional assets, please reach out to our press team.
              </p>
              <a href="mailto:office@lulubug.com" className="inline-flex items-center gap-2 font-bold text-secondary hover:text-secondary/80">
                <Mail size={18} />
                office@lulubug.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
