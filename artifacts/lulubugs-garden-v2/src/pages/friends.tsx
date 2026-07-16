import React from 'react';
import { Placeholder } from '../components/ui/Placeholder';
import luluIllustrated from '../assets/reference/lulu-illustrated.png';
import curbyIllustrated from '../assets/reference/curby-illustrated.png';
import sterlingIllustrated from '../assets/reference/sterling-illustrated.png';
import feelingsFlowerPhoto from '../assets/reference/feelings-flower.png';

export function Friends() {
  const friends = [
    {
      name: "Lulubug",
      role: "The Heart of the Garden",
      description: "Lulubug is the heart of the Garden and often helps guide her friends through new experiences. She loves organizing, making lists, and drawing with the children who visit her garden. When things don't go as planned, she learns how to move from frustrated to brave and try again.",
      color: "secondary",
      shape: "blob-1" as const,
      photo: luluIllustrated
    },
    {
      name: "Curby",
      role: "The Enthusiastic Caterpillar",
      description: "Curby is a fun, food-loving caterpillar who brings big energy to everything he does. He's curious, enthusiastic, and loves diving into whatever captures his imagination. Sometimes that excitement can turn into moments of carelessness or impatience when things don't go the way he expected.",
      color: "primary",
      shape: "blob-2" as const,
      photo: curbyIllustrated
    },
    {
      name: "Sterling",
      role: "The Thoughtful Observer",
      description: "Sterling is thoughtful and observant, often taking a moment to understand what's happening before jumping in. He likes to ask questions and think things through, helping the group see situations from different perspectives. When emotions start to feel big or confusing, Sterling's steady nature helps everyone slow down and make sense of what's going on.",
      color: "accent",
      shape: "blob-3" as const,
      photo: sterlingIllustrated
    },
    {
      name: "Daisy",
      role: "The Joyful Spirit",
      description: "Daisy loves to jump into every moment with excitement and laughter, bringing joy and energy to the group.",
      color: "accent",
      shape: "circle" as const,
      photo: null
    },
    {
      name: "Willow",
      role: "The Calming Presence",
      description: "Willow brings a quieter presence, helping friends pause, listen, and understand their feelings.",
      color: "primary",
      shape: "blob-1" as const,
      photo: null
    },
    {
      name: "Feelings Flower",
      role: "The Emotion Guide",
      description: "The Feelings Flower helps kids recognize and name their emotions with colorful petals that represent different feelings. It's a fun way to learn that all emotions are okay — and that understanding how we feel is the first step to handling any feeling that comes.",
      color: "secondary",
      shape: "blob-2" as const,
      photo: feelingsFlowerPhoto
    }
  ];

  return (
    <div className="w-full pt-12 pb-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
            Meet the Garden Friends
          </h1>
          <p className="text-xl text-foreground/80 font-medium leading-relaxed">
            Every friend in the garden has their own unique personality and way of feeling things. 
            Together, they learn that no matter who you are, all feelings are okay!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {friends.map((friend) => (
            <div 
              key={friend.name} 
              className="flex flex-col bg-white rounded-[2.5rem] p-8 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="flex justify-center mb-8">
                {friend.photo ? (
                  <img
                    src={friend.photo}
                    alt={friend.name}
                    className="w-48 h-48 object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <Placeholder 
                    label={friend.name} 
                    shape={friend.shape}
                    color={friend.color as any}
                    className="w-48 h-48 group-hover:scale-105 transition-transform duration-500"
                  />
                )}
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="font-display text-3xl font-bold text-foreground mb-2">{friend.name}</h3>
                <span className="inline-block text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">
                  {friend.role}
                </span>
                <p className="text-foreground/80 leading-relaxed">
                  {friend.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
