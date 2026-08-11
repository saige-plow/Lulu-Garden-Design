import React, { useEffect, useState } from 'react';
import { Link } from 'wouter';
import { Youtube, ArrowRight, PlayCircle } from 'lucide-react';
import { NewsletterForm } from '../components/forms/NewsletterForm';
import bgRoseGardenFg from '../assets/reference/bg-rose-garden-fg.png';
import hmhfLogo       from '../assets/reference/hmhf-logo.png';
import wordmark       from '../assets/reference/wordmark.png';

interface EpisodeCard {
  videoId: string;
  label: string;
}

const FALLBACK_EPISODES: EpisodeCard[] = [
  { videoId: 'XZcQn1lD3TQ', label: 'Frustrated' },
  { videoId: 'erLx5BxPHRo', label: 'Helpful' },
  { videoId: 'shO0PRm13Vs', label: 'Games with Curby' },
];

function usePopularEpisodes() {
  const [episodes, setEpisodes] = useState<EpisodeCard[]>(FALLBACK_EPISODES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const base = (import.meta.env.BASE_URL ?? '').replace(/\/$/, '');
    const apiBase = base.replace(/^(\/[^/]+).*/, '$1');
    fetch(`${apiBase}/api/youtube/popular`)
      .then((r) => r.json())
      .then((data) => {
        if (data.videos && data.videos.length > 0) {
          setEpisodes(
            data.videos.map((v: { videoId: string; title: string }) => ({
              videoId: v.videoId,
              label: v.title,
            }))
          );
        }
      })
      .catch(() => {/* keep fallback */})
      .finally(() => setLoading(false));
  }, []);

  return { episodes, loading };
}

export function Home() {
  const { episodes, loading } = usePopularEpisodes();

  return (
    <div className="w-full">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative h-[560px] md:h-[680px] overflow-hidden">
        <video
          src={`${import.meta.env.BASE_URL}theme-song.mp4`}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/20 to-black/55" />

        <div className="relative z-10 h-full flex flex-col items-center md:items-start justify-center text-center md:text-left px-6 md:px-16 lg:px-24 max-w-4xl">
          <img
            src={wordmark}
            alt="Lulubug's Garden"
            className="w-72 md:w-[420px] lg:w-[500px] mb-10 drop-shadow-xl"
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="https://www.youtube.com/@LulubugsGarden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-white font-bold text-lg hover:bg-secondary/90 transition-transform transform hover:scale-105 shadow-lg"
            >
              <Youtube size={24} />
              Watch on YouTube
            </a>
            <Link
              href="/friends"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white/20 backdrop-blur-sm px-8 py-4 text-white font-bold text-lg hover:bg-white/30 transition-colors border border-white/30"
            >
              Meet the Friends
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Episodes ────────────────────────────────────── */}
      <section className="py-20 bg-primary text-primary-foreground relative px-4">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
          <svg className="relative block w-full h-12 md:h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C63.2,16.76,126.7,33.56,188.1,49.27c49.2,12.56,99.5,24.18,149.5,29.9,23.5,2.71,47.2,4.8,70.9,5.7Z" fill="hsl(var(--primary))"></path>
          </svg>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <img src={bgRoseGardenFg} alt="" aria-hidden className="w-full h-full object-cover object-bottom" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-12 text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Learning to grow, together.</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
              Join Lulubug and her friends as they navigate big feelings, learn empathy, and discover how to be brave.
            </p>
          </div>

          <div className={`grid md:grid-cols-3 gap-8 transition-opacity duration-300 ${loading ? 'opacity-50' : 'opacity-100'}`}>
            {episodes.map((card) => (
              <a
                key={card.videoId}
                href={`https://www.youtube.com/watch?v=${card.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 rounded-3xl p-4 backdrop-blur-sm border border-white/20 transform hover:-translate-y-2 transition-transform duration-300 group block"
              >
                <div className="w-full aspect-video mb-4 rounded-2xl overflow-hidden relative">
                  <img
                    src={`https://img.youtube.com/vi/${card.videoId}/maxresdefault.jpg`}
                    alt={card.label}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <PlayCircle size={32} className="text-primary" />
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold mb-2 px-2">{card.label}</h3>
              </a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://www.youtube.com/@LulubugsGarden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-white font-bold text-lg transition-colors group"
            >
              <PlayCircle className="group-hover:scale-110 transition-transform" />
              Watch all episodes on YouTube
            </a>
          </div>
        </div>
      </section>

      {/* ── Trust & Partnership ──────────────────────────────────── */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-muted-foreground font-bold uppercase tracking-widest text-sm mb-6 block">In Partnership With</span>
          <div className="flex justify-center mb-8">
            <img src={hmhfLogo} alt="Huntsman Mental Health Foundation" className="h-20 object-contain" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Rooted in real mental health expertise.
          </h2>
          <p className="text-lg text-foreground/70 mb-10 max-w-2xl mx-auto">
            We partner with the Huntsman Mental Health Foundation and board-certified child psychiatrists to ensure every story fosters genuine emotional wellbeing for your child.
          </p>
          <Link
            href="/mental-health-matters"
            className="inline-flex items-center justify-center rounded-full border-2 border-primary text-primary px-8 py-3 font-bold hover:bg-primary hover:text-white transition-colors"
          >
            Read about our approach
          </Link>
        </div>
      </section>

      {/* ── Newsletter CTA ───────────────────────────────────────── */}
      <section className="py-24 px-4 bg-accent/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

        <div className="max-w-3xl mx-auto relative z-10 bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/50 shadow-xl text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary mb-6">
            Let's grow together
          </h2>
          <p className="text-lg text-foreground/80 mb-10">
            Sign up for the Lulubug's Garden newsletter to get free activity sheets, parenting resources, and updates on new episodes.
          </p>
          <NewsletterForm />
        </div>
      </section>

    </div>
  );
}
