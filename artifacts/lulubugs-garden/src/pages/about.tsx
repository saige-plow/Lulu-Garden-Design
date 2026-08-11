import React from 'react';
import jilPhoto from '../assets/reference/jil.jpg';
import teamPhoto from '../assets/reference/team.jpg';
import drKarenPhoto from '../assets/reference/dr-karen.jpg';
import brighamPhoto from '../assets/reference/brigham-taylor.jpg';

export function About() {
  const team = [
    {
      name: "Jil Hunter",
      role: "Creator",
      bio: "Creator of Lulubug's Garden and mother of seven, Jil is dedicated to providing families with engaging tools to navigate childhood mental health.",
      color: "primary",
      photo: jilPhoto
    },
    {
      name: "Dr. Karen",
      role: "Child Psychiatrist",
      bio: "A child psychiatrist and developmental expert from the Huntsman Mental Health Institute, Dr. Karen focuses on helping kids understand their emotions and fostering strong connections with caregivers.",
      color: "secondary",
      photo: drKarenPhoto
    },
    {
      name: "Brigham Taylor",
      role: "Director",
      bio: "A veteran film producer and former Disney executive (Pirates of the Caribbean, The Jungle Book), Brigham brings blockbuster storytelling expertise to Lulubug's Garden.",
      color: "accent",
      photo: brighamPhoto
    },
    {
      name: "Executive Producers",
      role: "The Village",
      bio: "By blending our diverse expertise and our love for children, we bring this series to life. Every detail — narrative, visuals, and take-home resources — is crafted to ensure kids feel understood, secure, and ready to grow.",
      color: "muted",
      photo: teamPhoto
    }
  ];

  return (
    <div className="w-full">
      {/* YouTube CTA */}
      <section className="py-16 px-4 bg-secondary/5">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">Now streaming on YouTube</h2>
            <p className="text-lg text-foreground/70 max-w-lg">Subscribe to Lulubug's Garden and never miss a new episode, Mental Health Moment, or garden adventure.</p>
          </div>
          <a
            href="https://www.youtube.com/@LulubugsGarden"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 rounded-full bg-[#FF0000] px-8 py-4 text-white font-bold text-lg hover:bg-[#cc0000] transition-all transform hover:scale-105 shadow-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            Watch on YouTube
          </a>
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
