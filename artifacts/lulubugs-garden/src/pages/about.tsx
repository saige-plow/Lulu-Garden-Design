import React from 'react';
import aboutHero from '../assets/reference/garden-friends-hero.jpg';
import jilPhoto from '../assets/reference/jil.jpg';
import teamPhoto from '../assets/reference/team.jpg';
import drKarenPhoto from '../assets/reference/dr-karen.jpg';
import brighamPhoto from '../assets/reference/brigham-taylor.jpg';

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
      photo: drKarenPhoto
    },
    {
      name: "Brigham Taylor",
      role: "Director",
      bio: "Brigham brings a director's eye for warmth and detail to every episode of Lulubug's Garden, shaping how each story looks, sounds, and feels on screen. He works closely with the cast and crew to keep every scene playful, grounded, and true to the spirit of the garden.",
      color: "accent",
      photo: brighamPhoto
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
      {/* Hero Banner */}
      <section className="relative h-[480px] md:h-[580px] overflow-hidden">
        <img
          src={aboutHero}
          alt="A child creating a Lulubug craft"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        {/* Gradient: lighter at top so the craft activity shows, heavier at bottom for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/35 to-transparent" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-14 px-6 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Why we planted this garden
          </h1>
        </div>
      </section>

      {/* Mission Content */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl md:text-2xl font-display text-foreground/85 leading-relaxed mb-6">
            We nurture self-awareness, empathy, resilience, and curiosity — through joyful storytelling and interactive play that helps children grow.
          </p>
          <p className="text-lg text-secondary font-bold">
            A world of confident, emotionally healthy children starts in the garden, one feeling at a time.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-16 text-foreground">
            Meet the team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {team.map((member) => (
              <div key={member.name} className="flex flex-col sm:flex-row gap-8 items-start">
                <div className="shrink-0 w-full sm:w-auto flex justify-center sm:justify-start">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-40 h-40 rounded-full object-cover shadow-md"
                    />
                  ) : (
                    <div className={`w-40 h-40 rounded-full flex items-center justify-center shadow-md text-3xl font-display font-bold ${
                      member.color === 'primary' ? 'bg-primary/10 text-primary' :
                      member.color === 'secondary' ? 'bg-secondary/10 text-secondary' :
                      member.color === 'accent' ? 'bg-accent/20 text-foreground' :
                      'bg-muted text-muted-foreground'
                    }`}>
                      {member.name.split(' ').map(w => w[0]).join('')}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-1">{member.name}</h3>
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
