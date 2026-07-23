import React, { useEffect } from 'react';
import { Phone, ExternalLink, Youtube, Mic2, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import hmhfLogo from '../assets/reference/hmhf-logo.png';
import hmhiLogo from '../assets/reference/hmhi-horizontal.png';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const MENTAL_HEALTH_MOMENTS = [
  {
    videoId: '6GIyrZZbjWw',
    title: "When Your Child Feels Proud",
    description: "A gentle Mental Health Moment on helping kids recognize and celebrate feeling proud of themselves.",
  },
  {
    videoId: 'oR-yhDmR7_A',
    title: "Helping Kids Feel Safe After Mistakes (Shame)",
    description: "A caring look at how to help children move through shame and feel safe again after a mistake.",
  },
  {
    videoId: 'yxO50ctmRZQ',
    title: "When I Feel Angry",
    description: "A Mental Health Moment on helping children understand angry feelings and find healthy ways to work through them.",
  },
  {
    videoId: 'LiZHM0uJqxc',
    title: "When Your Child Feels Disappointed",
    description: "A gentle Mental Health Moment on guiding kids through disappointment and building emotional resilience.",
  },
  {
    videoId: 'mSauTLQ28E4',
    title: "When I Feel Optimistic",
    description: "A bright Mental Health Moment on nurturing a hopeful outlook and helping children lean into positive feelings.",
  },
];

export function MentalHealthMatters() {
  useEffect(() => {
    const prev = document.title;
    document.title = 'Why Mental Health? | Lulubug\'s Garden';
    return () => { document.title = prev; };
  }, []);

  return (
    <div className="w-full bg-spring-seedling/20 min-h-screen">
      {/* 
        This page uses a specific, calmer sage/mint background 
        to distinguish it as a resource/trust page 
      */}

      <div className="pt-16 pb-24 px-4">
        <div className="max-w-4xl mx-auto">

          {/* Why Mental Health? — first section on the page */}
          <div className="mb-20">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-evergreen-ivy mb-8">
              Why Mental Health?
            </h2>
            <p className="text-xl text-evergreen-ivy leading-relaxed">
              Here at Lulubug's Garden, we believe that a lifetime of healthy minds is possible for all of us. Our adventures in the garden are rooted in building skills that foster positive mental health from a very early age — learning to recognize and address feelings, make decisions about negative emotions, and support each other. We believe mental health is part of our overall health, and we know that many people don't know where to turn for support. By partnering with two innovative groups, we're able to share correct principles with a non-threatening, de-stigmatizing approach.
            </p>
          </div>

          <div className="space-y-16 mb-24">
            {/* Huntsman Foundation */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-evergreen-ivy/10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="w-full aspect-[3/2] bg-morning-dew border border-evergreen-ivy/20 rounded-[1.5rem] flex items-center justify-center p-8">
                    <img
                      src={hmhfLogo}
                      alt="Huntsman Family Foundation logo"
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-3xl font-bold text-evergreen-ivy mb-4">
                    Huntsman Mental Health Foundation
                  </h2>
                  <p className="text-evergreen-ivy leading-relaxed mb-6">
                    Huntsman Mental Health Foundation is transforming how the world understands, treats, and advances mental health care through groundbreaking research, innovative care, and national leadership. Powering Huntsman Mental Health Institute as well as research-based efforts across the country, Huntsman Mental Health Foundation continues to innovate what philanthropy and community support can mean in diagnosing, researching, treating, and helping heal, mental health challenges of all kinds. 
                  </p>
                  <p className="text-evergreen-ivy font-bold italic mb-8">
                    Lulubug's Garden is grateful to Huntsman Mental Health Foundation for helping provide the Mental Health Moment for each episode.
                  </p>
                  <a 
                    href="https://huntsmanmentalhealthfoundation.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-evergreen-ivy font-bold border-b-2 border-spring-seedling pb-1 hover:text-garden-vine hover:border-garden-vine transition-colors"
                  >
                    Visit HMHF <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Huntsman Institute */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-evergreen-ivy/10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="w-full aspect-[3/2] bg-morning-dew border border-evergreen-ivy/20 rounded-[1.5rem] flex items-center justify-center p-6">
                    <img
                      src={hmhiLogo}
                      alt="Huntsman Mental Health Institute logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-3xl font-bold text-evergreen-ivy mb-4">
                    Huntsman Mental Health Institute
                  </h2>
                  <p className="text-evergreen-ivy leading-relaxed mb-6">
                    The Huntsman Mental Health Institute was created to transform how we understand and treat mental illness. Built on a $150 million gift from the Huntsman family, the Institute is the first of its kind to bring research, education, and patient care together to solve one of our nation's greatest challenges: untreated mental health conditions. Their caring team is there to help — with services ranging from individual therapy to specialized treatment programs, for all ages.
                  </p>
                  <p className="text-evergreen-ivy font-bold italic mb-8">
                    Lulubug's good friend Dr. Karen is part of the exceptional team at Huntsman Mental Health Institute that provides world-class mental health care to children and their families.
                  </p>
                  <a 
                    href="https://healthcare.utah.edu/hmhi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-evergreen-ivy font-bold border-b-2 border-spring-seedling pb-1 hover:text-garden-vine hover:border-garden-vine transition-colors"
                  >
                    Learn more about HMHI <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Mental Health Moment video carousel */}
          <div className="mb-24">
            <div className="mb-10">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-evergreen-ivy mb-4">
                Mental Health Moments
              </h1>
              <p className="text-lg text-evergreen-ivy max-w-2xl">
                Every episode of Lulubug's Garden includes a short Mental Health Moment. Watch a few of our favorites below, or visit{' '}
                <a
                  href="https://www.youtube.com/@lulubugsgarden"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold underline underline-offset-4 hover:text-garden-vine"
                >
                  @lulubugsgarden
                </a>{' '}
                on YouTube for the full collection.
              </p>
            </div>

            <Carousel
              opts={{ align: 'start', loop: true }}
              className="max-w-4xl mx-auto"
              aria-label="Mental Health Moment video carousel"
            >
              <CarouselContent>
                {MENTAL_HEALTH_MOMENTS.map((moment) => (
                  <CarouselItem key={moment.videoId} className="md:basis-1/2 lg:basis-1/2">
                    <div className="bg-white rounded-[2rem] p-4 shadow-sm border border-evergreen-ivy/10 h-full flex flex-col">
                      <div className="w-full aspect-video rounded-2xl overflow-hidden bg-morning-dew">
                        <iframe
                          className="w-full h-full"
                          src={`https://www.youtube.com/embed/${moment.videoId}`}
                          title={moment.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                        />
                      </div>
                      <div className="pt-4 px-2">
                        <h3 className="font-display text-xl font-bold text-evergreen-ivy mb-1">
                          {moment.title}
                        </h3>
                        <p className="text-sm text-evergreen-ivy/80">{moment.description}</p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="border-evergreen-ivy/20 text-evergreen-ivy" />
              <CarouselNext className="border-evergreen-ivy/20 text-evergreen-ivy" />
            </Carousel>

            <div className="mt-8">
              <a
                href="https://www.youtube.com/@lulubugsgarden"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-evergreen-ivy font-bold border-b-2 border-spring-seedling pb-1 hover:text-garden-vine hover:border-garden-vine transition-colors"
              >
                <Youtube size={20} />
                Watch more on YouTube
              </a>
            </div>
          </div>

          {/* Podcast for parents resource */}
          <div className="mb-24">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-evergreen-ivy mb-8">
              Lulubug's Podcast
            </h2>
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-evergreen-ivy/10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="w-full aspect-video rounded-2xl overflow-hidden bg-morning-dew">
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/X6MP1-sWncs"
                      title="Meet Your Hosts: Jil & Karen Introduce the Show | Lulubug's Podcast for Parents"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-3xl font-bold text-evergreen-ivy mb-4">
                    Lulubug's Podcast for Parents
                  </h3>
                  <p className="text-evergreen-ivy leading-relaxed mb-6">
                    Hosted by Jil & Karen, Lulubug's Podcast for Parents goes deeper on the topics your child explores in the garden — unpacking each episode's emotional themes with practical, real-world conversation starters, so you can keep the mental health moment going long after the screen turns off.
                  </p>
                  <p className="text-sm font-bold text-evergreen-ivy mb-3 uppercase tracking-wider">Listen &amp; Follow</p>
                  <div className="flex gap-3">
                    <a
                      href="https://lulubugspodcastforparents.buzzsprout.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-evergreen-ivy text-white w-10 h-10 rounded-full hover:bg-garden-vine transition-colors"
                      aria-label="Buzzsprout podcast hub"
                    >
                      <Mic2 size={18} />
                    </a>
                    <a
                      href="https://www.youtube.com/@LulubugsPodcastForParents"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-evergreen-ivy text-white w-10 h-10 rounded-full hover:bg-garden-vine transition-colors"
                      aria-label="YouTube podcast"
                    >
                      <Youtube size={18} />
                    </a>
                    <a
                      href="https://www.instagram.com/lulubugspodcast"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-evergreen-ivy text-white w-10 h-10 rounded-full hover:bg-garden-vine transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram size={18} />
                    </a>
                    <a
                      href="https://www.tiktok.com/@lulubugspodcast?_r=1&_t=ZP-97WMYBreaDu"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-evergreen-ivy text-white w-10 h-10 rounded-full hover:bg-garden-vine transition-colors"
                      aria-label="TikTok"
                    >
                      <FaTiktok size={16} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 988 Crisis Card — bottom of page */}
          <div className="bg-evergreen-ivy text-white rounded-[2.5rem] p-8 md:p-12 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-bold text-xl mb-2 text-spring-seedling">You're Never Alone.</h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed">
                  We believe learning positive mental health skills is critical to preventing challenges as we grow. Sometimes, however, we may need some extra help. If you or a loved one is struggling or in crisis, contact the 988 Suicide & Crisis Lifeline. No-cost, confidential support is available nationwide, 24/7 by phone, text, or chat.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3 shrink-0">
                <a 
                  href="tel:988" 
                  className="flex items-center gap-2 bg-spring-seedling text-evergreen-ivy px-6 py-3 rounded-full font-bold text-lg hover:bg-white transition-colors"
                >
                  <Phone size={20} />
                  Call 988
                </a>
                <a 
                  href="https://988lifeline.org" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/80 text-sm hover:text-white underline underline-offset-4"
                >
                  Visit 988lifeline.org
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
