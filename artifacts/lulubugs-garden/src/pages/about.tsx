import React from 'react';
import { Placeholder } from '../components/ui/Placeholder';
import gardenIllustration from '../assets/reference/garden-illustration.jpeg';
import jilPhoto from '../assets/reference/jil.jpg';
import teamPhoto from '../assets/reference/team.jpg';

export function About() {
  const team = [
    {
      name: "Jil",
      role: "Creator",
      bio: "Jil draws on her background in special education and her experience raising seven children to shape the heart of Lulubug's Garden. After navigating her own wellness journey, she became dedicated to using art, music, and nature as tools for family connection. As a creator of the show, Jil ensures every episode provides a gentle, supportive space for children to explore their emotional world.",
      color: "primary",
      photo: jilPhoto
    },
    {
      name: "Dr. Karen",
      role: "Board-Certified Child Psychiatrist",
      bio: "Dr. Karen is a board-certified child psychiatrist who brings deep expertise in child development to everything we create. She reviews all our content to ensure it fosters emotional wellbeing and age-appropriate growth — giving families confidence that this is a space built with children in mind.",
      color: "secondary",
      photo: null
    },
    {
      name: "Brigham Taylor",
      role: "Director",
      bio: "Brigham brings a director's eye for warmth and detail to every episode of Lulubug's Garden, shaping how each story looks, sounds, and feels on screen. He works closely with the cast and crew to keep every scene playful, grounded, and true to the spirit of the garden.",
      color: "accent",
      photo: null
    },
    {
      name: "Executive Producers",
      role: "The Village",
      bio: "By blending our diverse expertise and our love for children, we bring this series to life. Every detail, including narrative, visuals, and take-home resources, is crafted by our dedicated team to ensure kids feel understood, secure, and ready to grow.",
      color: "muted",
      photo: teamPhoto
    }
  ];

  return (
    <div className="w-full">
      {/* Mission Section */}
      <section className="pt-16 pb-24 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-8">
            Why we planted this garden
          </h1>
          <p className="text-2xl md:text-3xl font-serif text-foreground/90 leading-normal mb-8">
            We nurture self-awareness, empathy, resilience, and curiosity — through joyful storytelling and interactive play that helps children grow.
          </p>
          <p className="text-xl text-secondary font-bold">
            A world of confident, emotionally-healthy children starts in the garden, one feeling at a time.
          </p>
          <div className="mt-12 flex justify-center">
            <img
              src={gardenIllustration}
              alt="Illustrated view of Lulubug's Garden"
              className="blob-shape w-full max-w-2xl aspect-video object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
            Meet the team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {team.map((member, index) => (
              <div key={member.name} className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0 w-full sm:w-auto flex justify-center">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover shadow-md"
                    />
                  ) : (
                    <Placeholder 
                      label={member.name} 
                      shape="circle"
                      color={member.color as any}
                      className="w-40 h-40 shadow-md"
                    />
                  )}
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                  <span className="inline-block text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                    {member.role}
                  </span>
                  <p className="text-foreground/80 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
