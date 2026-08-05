import React from 'react';
import { Link } from 'wouter';
import { Youtube, ArrowRight, PlayCircle } from 'lucide-react';
import { NewsletterForm } from '../components/forms/NewsletterForm';

import logo            from '../assets/reference/logo.png';
import bgRoseGardenFg  from '../assets/reference/bg-rose-garden-fg.png';
import hmhfLogo        from '../assets/reference/hmhf-logo.png';

import luluIllustrated     from '../assets/reference/lulu-illustrated.png';
import curbyIllustrated    from '../assets/reference/curby-illustrated.png';
import sterlingIllustrated from '../assets/reference/sterling-illustrated.png';
import daisyIllustrated    from '../assets/reference/daisy-illustrated.png';
import willowIllustrated   from '../assets/reference/willow-illustrated.png';
import feelingsFlower      from '../assets/reference/feelings-flower.png';

const episodeCards = [
  {
    videoId: 'XZcQn1lD3TQ',
    label: 'Frustrated',
    desc: "Lulubug learns it's okay to feel frustrated — and what to do when big feelings bubble up.",
  },
  {
    videoId: 'erLx5BxPHRo',
    label: 'Helpful',
    desc: 'When helping feels hard, Lulubug and friends discover that trying your best is what matters most.',
  },
  {
    videoId: 'shO0PRm13Vs',
    label: 'Games with Curby',
    desc: 'Join Curby for a fun-filled garden adventure packed with games, giggles, and big feelings.',
  },
];

export function Home() {
  return (
    <div className="w-full">

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center"
        style={{ background: '#FFF5F2' }}>

        {/* Soft colour blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top-left — Garden Vine */}
          <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full opacity-20"
            style={{ background: '#7DB238', filter: 'blur(90px)' }} />
          {/* Top-right — Dragonfly Wing */}
          <div className="absolute -top-20 -right-24 w-[400px] h-[400px] rounded-full opacity-20"
            style={{ background: '#91CFE8', filter: 'blur(80px)' }} />
          {/* Bottom-left — Golden Nectar */}
          <div className="absolute -bottom-24 -left-20 w-[440px] h-[440px] rounded-full opacity-20"
            style={{ background: '#FFC421', filter: 'blur(100px)' }} />
          {/* Bottom-right — Apricot Petal */}
          <div className="absolute -bottom-16 -right-16 w-[360px] h-[360px] rounded-full opacity-25"
            style={{ background: '#FFBFB2', filter: 'blur(80px)' }} />
        </div>

        {/* ── Floating characters ─────────────────────────────────── */}

        {/* Feelings Flower — top-left */}
        <img src={feelingsFlower} alt=""
          className="absolute top-10 left-6 md:left-12 w-20 md:w-28 select-none pointer-events-none"
          style={{ transform: 'rotate(-12deg)', mixBlendMode: 'multiply' }} />

        {/* Sterling — top-right */}
        <img src={sterlingIllustrated} alt=""
          className="absolute top-8 right-6 md:right-14 w-24 md:w-36 drop-shadow-lg select-none pointer-events-none"
          style={{ transform: 'rotate(8deg)' }} />

        {/* Daisy — left, mid */}
        <img src={daisyIllustrated} alt=""
          className="absolute top-1/2 left-0 md:left-4 w-20 md:w-28 drop-shadow-lg select-none pointer-events-none -translate-y-20"
          style={{ transform: 'translateY(-5rem) rotate(5deg)' }} />

        {/* Willow — right, mid */}
        <img src={willowIllustrated} alt=""
          className="absolute top-1/2 right-0 md:right-4 w-20 md:w-28 drop-shadow-lg select-none pointer-events-none"
          style={{ transform: 'translateY(-3rem) rotate(-6deg)' }} />

        {/* Curby — bottom-right */}
        <img src={curbyIllustrated} alt=""
          className="absolute bottom-6 right-6 md:right-16 w-32 md:w-44 drop-shadow-xl select-none pointer-events-none"
          style={{ transform: 'rotate(6deg)' }} />

        {/* Lulubug — bottom-left, biggest */}
        <img src={luluIllustrated} alt=""
          className="absolute bottom-0 left-4 md:left-12 w-40 md:w-60 drop-shadow-xl select-none pointer-events-none" />

        {/* ── Main content ────────────────────────────────────────── */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 py-16">

          {/* Large logo — the first thing you see */}
          <img src={logo} alt="Lulubug's Garden"
            className="w-40 md:w-56 lg:w-64 mb-6 drop-shadow-md" />

          {/* Editorial headline — stacked */}
          <h1 className="font-display leading-none tracking-tight mb-8 select-none">
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ color: '#386641' }}>
              How are you
            </span>
            <span className="block text-6xl sm:text-8xl md:text-9xl lg:text-[10rem]"
              style={{ color: '#386641', lineHeight: '0.92' }}>
              feeling
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1"
              style={{ color: '#ED1C24' }}>
              today?
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-body text-base md:text-lg max-w-sm mb-10 leading-relaxed"
            style={{ color: '#386641CC' }}>
            A cozy show where kids learn that all feelings are welcome — and growing up is an adventure we share.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.youtube.com/@LulubugsGarden"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-base md:text-lg text-white transition-transform hover:scale-105 shadow-lg"
              style={{ background: '#ED1C24' }}
            >
              <Youtube size={22} />
              Watch on YouTube
            </a>
            <Link
              href="/friends"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-bold text-base md:text-lg transition-colors border-2"
              style={{ color: '#386641', borderColor: '#386641' }}
            >
              Meet the Friends
              <ArrowRight size={18} />
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

          <div className="grid md:grid-cols-3 gap-8">
            {episodeCards.map((card) => (
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
                <p className="text-primary-foreground px-2 pb-2 text-sm">{card.desc}</p>
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
