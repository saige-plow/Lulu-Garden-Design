import React, { useState } from 'react';
import { Download, Mail, Newspaper, PencilLine, Clock, ExternalLink, PlayCircle } from 'lucide-react';

type NewsItem = {
  outlet: string;
  headline: string;
  date: string;
  url: string;
  description: string;
};

const NEWS_ITEMS: NewsItem[] = [
  {
    outlet: 'PR Newswire',
    headline: 'Big Feelings Bloom Into Lifelong Skills in Lulubug\'s Garden',
    date: 'April 30, 2026',
    url: 'https://www.prnewswire.com/news-releases/big-feelings-bloom-into-lifelong-skills-in-lulubugs-garden-302758244.html',
    description: 'Official launch press release: Lulubug\'s Garden premieres on YouTube, redefining what children\'s programming can be through music, movement, and emotional development.',
  },
  {
    outlet: 'Parade',
    headline: 'This New Series for Kids Has a Surprising Disney Link',
    date: 'April 30, 2026',
    url: 'https://parade.com/news/lulubugs-garden-kids-series-disney-disney-producer-emotional-development',
    description: 'The thoughtful new children\'s series rethinking screen time — with a Disney producer at the helm.',
  },
  {
    outlet: 'Today\'s Parent',
    headline: 'A Disney Producer Is Behind This New YouTube Show About Kids\' Big Feelings',
    date: 'April 30, 2026',
    url: 'https://www.todaysparent.com/toddler/lulubugs-garden/',
    description: 'A look at how Lulubug\'s Garden puts emotional regulation in the spotlight for preschoolers.',
  },
  {
    outlet: 'KUTV (CBS Utah)',
    headline: 'Utah-based YouTube series uses puppets, music to teach children emotional skills',
    date: 'May 14, 2026',
    url: 'https://kutv.com/news/arc-salt-lake/utah-based-youtube-series-uses-puppets-music-to-teach-children-emotional-skills',
    description: 'Local news feature covering how Lulubug\'s Garden blends puppetry and original music to help children name and process their emotions.',
  },
  {
    outlet: 'KSL TV',
    headline: 'The new kid\'s show premiering in Utah focused on children\'s mental health',
    date: 'April 2026',
    url: 'https://ksltv.com/ksl-noon-show/kids-show-utah-mental-health/907393/',
    description: 'KSL coverage of the show\'s Utah premiere and its mission to support early childhood mental health.',
  },
];

export function Press() {
  const [toast, setToast] = useState<string | null>(null);

  const handleDownload = (assetName: string) => {
    setToast(assetName);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="w-full pt-16 pb-24 px-4 bg-white relative">
      {/* Coming Soon Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-foreground text-white px-5 py-3 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Clock size={18} className="shrink-0 text-primary-foreground/70" />
          <span className="font-medium text-sm"><span className="font-bold">{toast}</span> — assets coming soon! Check back or email us.</span>
        </div>
      )}

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
              <div className="space-y-4">
                {NEWS_ITEMS.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all group"
                  >
                    <Newspaper size={20} className="text-muted-foreground mt-1 shrink-0 group-hover:text-primary transition-colors" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary uppercase tracking-wide">{item.outlet}</span>
                        <span className="text-xs text-foreground/40">·</span>
                        <span className="text-xs text-foreground/50">{item.date}</span>
                      </div>
                      <p className="font-bold text-foreground group-hover:text-primary transition-colors leading-snug mb-1">{item.headline}</p>
                      <p className="text-sm text-foreground/60 leading-snug">{item.description}</p>
                    </div>
                    <ExternalLink size={16} className="text-foreground/30 group-hover:text-primary shrink-0 mt-1 transition-colors" />
                  </a>
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">Watch an Episode</h2>
              <div className="rounded-3xl overflow-hidden border border-border shadow-sm">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/erLx5BxPHRo"
                    title="When I Feel Helpful | Lulubug's Garden Full Episode"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-background">
                  <PlayCircle size={20} className="text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">When I Feel Helpful</p>
                    <p className="text-xs text-foreground/50">Full episode · Lulubug's Garden on YouTube</p>
                  </div>
                  <a
                    href="https://www.youtube.com/@LulubugsGarden/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    See all episodes <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            
            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="font-display text-2xl font-bold mb-6 text-primary">Media Assets</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => handleDownload('Brand Guidelines & Logos')}
                    className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group"
                  >
                    <Download className="text-primary group-hover:text-white" size={20} />
                    <span className="font-bold text-left">Brand Guidelines & Logos</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDownload('Character Bios & Art')}
                    className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group"
                  >
                    <Download className="text-primary group-hover:text-white" size={20} />
                    <span className="font-bold text-left">Character Bios & Art</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDownload('Full Media Kit (PDF)')}
                    className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group"
                  >
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
