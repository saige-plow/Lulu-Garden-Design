import React from 'react';
import { Phone, ExternalLink } from 'lucide-react';
import hmhfLogo from '../assets/reference/hmhf-logo.png';
import hmhiLogo from '../assets/reference/hmhi-logo.png';

export function MentalHealthMatters() {
  return (
    <div className="w-full bg-[#E8EFEA] min-h-screen">
      {/* 
        This page uses a specific, calmer sage/mint background 
        to distinguish it as a resource/trust page 
      */}
      
      {/* Safety Band - CRITICAL ELEMENT */}
      <div className="bg-[#2A4B3A] text-white py-6 px-4 w-full shadow-md relative z-20">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-bold text-xl mb-1 text-[#9AD6B3]">You're Never Alone.</h3>
            <p className="text-white/90 text-sm md:text-base leading-relaxed">
              We believe learning positive mental health skills is critical to preventing challenges as we grow. Sometimes, however, we may need some extra help. If you or a loved one is struggling or in crisis, contact the 988 Suicide & Crisis Lifeline. No-cost, confidential support is available nationwide, 24/7 by phone, text, or chat.
            </p>
          </div>
          <div className="flex flex-col items-center gap-3 shrink-0">
            <a 
              href="tel:988" 
              className="flex items-center gap-2 bg-[#9AD6B3] text-[#2A4B3A] px-6 py-3 rounded-full font-bold text-lg hover:bg-white transition-colors"
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

      <div className="pt-16 pb-24 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-[#2A4B3A] mb-8">
              Mental Health Matters
            </h1>
            <div className="text-xl text-[#3A5C4A] leading-relaxed space-y-6 text-left md:text-center">
              <p>
                Here at Lulubug's Garden, we believe that a lifetime of healthy minds is possible for all of us. Our adventures in the garden are all rooted in building skills that foster positive mental health from a very early age. 
              </p>
              <p>
                Learning to recognize and address feelings, making decisions about how to deal with negative emotions, and learning how to support each other, are all part of why we created Lulubug's Garden. We believe that mental health is part of our overall health.
              </p>
              <p>
                We also know that there are many people who do not know where to turn for mental health support and treatment. By partnering with two innovative groups, we believe we can share correct principles with a non-threatening, de-stigmatizing approach.
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {/* Huntsman Foundation */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#2A4B3A]/10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="w-full aspect-[3/2] bg-[#F4F9F6] border border-[#2A4B3A]/20 rounded-[1.5rem] flex items-center justify-center p-6">
                    <img
                      src={hmhfLogo}
                      alt="Huntsman Family Foundation logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-3xl font-bold text-[#2A4B3A] mb-4">
                    Huntsman Mental Health Foundation
                  </h2>
                  <p className="text-[#3A5C4A] leading-relaxed mb-6">
                    Huntsman Mental Health Foundation is transforming how the world understands, treats, and advances mental health care through groundbreaking research, innovative care, and national leadership. Powering Huntsman Mental Health Institute as well as research-based efforts across the country, Huntsman Mental Health Foundation continues to innovate what philanthropy and community support can mean in diagnosing, researching, treating, and helping heal, mental health challenges of all kinds. 
                  </p>
                  <p className="text-[#3A5C4A] font-bold italic mb-8">
                    Lulubug's Garden is grateful to Huntsman Mental Health Foundation for helping provide the Mental Health Moment for each episode.
                  </p>
                  <a 
                    href="https://huntsmanmentalhealthfoundation.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2A4B3A] font-bold border-b-2 border-[#9AD6B3] pb-1 hover:text-[#4A7C5A] hover:border-[#4A7C5A] transition-colors"
                  >
                    Visit HMHF <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Huntsman Institute */}
            <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-[#2A4B3A]/10">
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="w-full md:w-1/3 shrink-0">
                  <div className="w-full aspect-[3/2] bg-[#F4F9F6] border border-[#2A4B3A]/20 rounded-[1.5rem] flex items-center justify-center p-6">
                    <img
                      src={hmhiLogo}
                      alt="Huntsman Mental Health Institute logo"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-serif text-3xl font-bold text-[#2A4B3A] mb-4">
                    Huntsman Mental Health Institute
                  </h2>
                  <p className="text-[#3A5C4A] leading-relaxed mb-6">
                    The Huntsman Mental Health Institute was created to transform how we understand and treat mental illness. Built on a $150 million gift from the Huntsman family, the Institute is the first of its kind to bring research, education, and patient care together to solve one of our nation's greatest challenges: untreated mental health conditions. Their caring team is there to help — with services ranging from individual therapy to specialized treatment programs, for all ages.
                  </p>
                  <p className="text-[#3A5C4A] font-bold italic mb-8">
                    Lulubug's good friend Dr. Karen is part of the exceptional team at Huntsman Mental Health Institute that provides world-class mental health care to children and their families.
                  </p>
                  <a 
                    href="https://healthcare.utah.edu/hmhi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#2A4B3A] font-bold border-b-2 border-[#9AD6B3] pb-1 hover:text-[#4A7C5A] hover:border-[#4A7C5A] transition-colors"
                  >
                    Learn more about HMHI <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
