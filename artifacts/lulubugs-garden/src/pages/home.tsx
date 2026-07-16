import React from 'react';
import { Link } from 'wouter';
import { Youtube, ArrowRight, PlayCircle } from 'lucide-react';
import { NewsletterForm } from '../components/forms/NewsletterForm';
import bgMeadowSun from '../assets/reference/bg-meadow-sun.png';
import bgMushroomWildflower from '../assets/reference/bg-mushroom-wildflower.jpg';
import bgPondDragonfly from '../assets/reference/bg-pond-dragonfly.png';
import bgOrchids from '../assets/reference/bg-orchids.png';
import bgLeftCarrots from '../assets/reference/bg-left-carrots.png';
import bgRoseGardenFg from '../assets/reference/bg-rose-garden-fg.png';
import hmhfLogo from '../assets/reference/hmhf-logo.png';

const episodeCards = [
  {
    bg: bgMushroomWildflower,
    label: 'A New Feeling',
    desc: "Lulubug learns that it's okay to feel frustrated when things don't go her way.",
  },
  {
    bg: bgPondDragonfly,
    label: 'Brave in the Garden',
    desc: 'When something feels scary, Lulubug and friends discover what it means to be brave.',
  },
  {
    bg: bgOrchids,
    label: 'Sharing is Growing',
    desc: 'The garden friends learn that sharing feelings — and things — helps everyone grow.',
  },
];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden px-4">
        {/* Decorative background scene — left-carrots behind text */}
        <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-10 hidden lg:block">
          <img src={bgLeftCarrots} alt="" aria-hidden className="h-full w-full object-cover object-right" />
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="z-10 order-2 md:order-1">
            <span className="inline-block py-1 px-3 rounded-full bg-secondary/10 text-secondary font-bold text-sm mb-6 tracking-wide uppercase">
              A New Series for Kids
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-[1.1] mb-6">
              Welcome to <br/>
              <span className="text-secondary">Lulubug's</span> Garden
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-lg font-medium leading-relaxed">
              A cozy place where kids learn that all feelings are okay, and growing up is an adventure we share.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://www.youtube.com/@LulubugsGarden" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-white font-bold text-lg hover:bg-secondary/90 transition-transform transform hover:scale-105 shadow-md"
              >
                <Youtube size={24} />
                Watch on YouTube
              </a>
              <Link 
                href="/friends" 
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary/10 px-8 py-4 text-primary font-bold text-lg hover:bg-primary/20 transition-colors"
              >
                Meet the Friends
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
          
          <div className="relative z-10 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[4/3] transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src={bgMeadowSun}
                alt="Lulubug's Garden — a sunny meadow in the garden"
                className="blob-shape w-full h-full object-cover shadow-xl bg-white"
              />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-full bg-accent/30 -z-10 blur-xl"></div>
              <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-secondary/20 -z-10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Episode / Concept */}
      <section className="py-20 bg-primary text-primary-foreground relative px-4">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-0 transform -translate-y-full">
          <svg className="relative block w-full h-12 md:h-20" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V0C63.2,16.76,126.7,33.56,188.1,49.27c49.2,12.56,99.5,24.18,149.5,29.9,23.5,2.71,47.2,4.8,70.9,5.7Z" fill="hsl(var(--primary))"></path>
          </svg>
        </div>

        {/* Rose garden decorative strip */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
          <img src={bgRoseGardenFg} alt="" aria-hidden className="w-full h-full object-cover object-bottom" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Learning to grow, together.</h2>
            <p className="text-xl text-primary-foreground/80">
              Join Lulubug and her friends as they navigate big feelings, learn empathy, and discover how to be brave.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {episodeCards.map((card) => (
              <div key={card.label} className="bg-white/10 rounded-3xl p-4 backdrop-blur-sm border border-white/20 transform hover:-translate-y-2 transition-transform duration-300">
                <div className="w-full aspect-video mb-4 rounded-2xl overflow-hidden">
                  <img
                    src={card.bg}
                    alt={card.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-display text-xl font-bold mb-2 px-2">{card.label}</h3>
                <p className="text-primary-foreground/70 px-2 pb-2 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
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

      {/* Trust & Partnership */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-muted-foreground font-bold uppercase tracking-widest text-sm mb-4 block">In Partnership With</span>
          <div className="flex justify-center mb-8">
            <img
              src={hmhfLogo}
              alt="Huntsman Mental Health Foundation"
              className="h-24 object-contain"
            />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
            Rooted in real mental health expertise.
          </h2>
          <p className="text-lg text-foreground/70 mb-10">
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

      {/* Newsletter CTA */}
      <section className="py-24 px-4 bg-accent/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10 bg-white/60 backdrop-blur-md p-10 md:p-16 rounded-[3rem] border border-white/50 shadow-xl">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-primary mb-6">
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
