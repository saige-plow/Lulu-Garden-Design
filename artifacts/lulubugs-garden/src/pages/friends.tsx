import React from 'react';
import { Placeholder } from '../components/ui/Placeholder';
import { ArrowRight } from 'lucide-react';
import luluIllustrated from '../assets/reference/lulu-illustrated.png';
import curbyIllustrated from '../assets/reference/curby-illustrated.png';
import sterlingIllustrated from '../assets/reference/sterling-illustrated.png';
import daisyIllustrated from '../assets/reference/daisy-illustrated.png';
import willowIllustrated from '../assets/reference/willow-illustrated.png';
import feelingsFlowerPhoto from '../assets/reference/feelings-flower.png';

export function Friends() {
  const friends = [
    {
      name: "Lulubug",
      role: "The Heart of the Garden",
      description: "Lulubug is the heart of the Garden and often helps guide her friends through new experiences. She loves organizing, making lists, and drawing with the children who visit her garden. When things don't go as planned, she learns how to move from frustrated to brave and try again — a true leader who shows it's okay to feel it all.",
      color: "secondary",
      shape: "blob-1" as const,
      photo: luluIllustrated
    },
    {
      name: "Curby",
      role: "The Enthusiastic Caterpillar",
      description: "Curby is a fun, food-loving caterpillar who brings big energy to everything he does. He's curious, enthusiastic, and loves diving into whatever captures his imagination. Sometimes that excitement can turn into moments of carelessness — but Curby always finds his way back to the fun.",
      color: "primary",
      shape: "blob-2" as const,
      photo: curbyIllustrated
    },
    {
      name: "Sterling",
      role: "The Thoughtful Observer",
      description: "Sterling is observant and thoughtful, always taking time to understand situations before engaging. He asks good questions and helps the group see things from different perspectives. When big feelings swirl around, Sterling's calm presence helps everyone slow down and make sense of what's going on.",
      color: "accent",
      shape: "blob-3" as const,
      photo: sterlingIllustrated
    },
    {
      name: "Daisy",
      role: "The Joyful Spirit",
      description: "Daisy brings big energy and excitement to the Garden, jumping into every adventure with her whole heart. She's the first to suggest a dance party, a silly game, or something new to explore. Her enthusiasm is contagious — and she's learning that all that joy is even better when it's shared.",
      color: "accent",
      shape: "circle" as const,
      photo: daisyIllustrated
    },
    {
      name: "Willow",
      role: "The Calming Presence",
      description: "Willow helps friends pause and listen, bringing a steady, gentle presence to every situation. She has a gift for noticing when someone needs a moment to breathe or a quiet word of encouragement. Willow shows that being calm doesn't mean holding feelings in — it means moving through them with care.",
      color: "primary",
      shape: "blob-1" as const,
      photo: willowIllustrated
    },
    {
      name: "Feelings Flower",
      role: "The Emotion Guide",
      description: "The Feelings Flower helps characters spot, name, and understand big emotions. With colorful petals that represent different feelings, it's a fun, visual way for kids to learn that all emotions are okay — and that naming a feeling is the first step to handling it.",
      color: "secondary",
      shape: "blob-2" as const,
      photo: feelingsFlowerPhoto
    }
  ];

  return (
    <div className="w-full pt-12 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16 mx-auto text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
            Meet the Garden Friends
          </h1>
          <p className="text-xl text-foreground/80 font-medium leading-relaxed">
            Every friend in the garden has their own unique personality and way of feeling things. 
            Together, they learn that no matter who you are, all feelings are okay!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {friends.map((friend) => (
            <div 
              key={friend.name} 
              className="flex flex-col bg-white rounded-[2.5rem] p-8 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-6">
                {friend.photo ? (
                  <img
                    src={friend.photo}
                    alt={friend.name}
                    className="w-48 h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className={`w-48 h-48 flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-500 ${
                    friend.color === 'accent' ? 'bg-accent/20' : friend.color === 'primary' ? 'bg-primary/10' : 'bg-secondary/10'
                  } rounded-full`}>
                    <span className="text-4xl mb-2">🌱</span>
                    <span className="font-display font-bold text-lg text-foreground/70">{friend.name}</span>
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-1">Coming Soon</span>
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col">
                <h3 className="font-display text-3xl font-bold text-foreground mb-1">{friend.name}</h3>
                <span className="inline-block text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">
                  {friend.role}
                </span>
                <p className="text-foreground/80 leading-relaxed">
                  {friend.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* YouTube CTA */}
        <div className="mt-20 rounded-[2.5rem] bg-secondary/10 border border-secondary/20 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-3">Watch them come to life!</h2>
            <p className="text-lg text-foreground/70 max-w-lg">See Lulubug, Curby, Sterling, Daisy, Willow, and the Feelings Flower in action on YouTube — new episodes streaming now.</p>
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
      </div>
    </div>
  );
}
