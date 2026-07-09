import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import lulubugPhoto from "@/assets/reference/lulubug-photo.jpg";

const FRIENDS_DATA = [
  {
    name: "Lulubug",
    image: lulubugPhoto,
    bio: "Lulubug is the heart of the Garden and often helps guide her friends through new experiences. She loves organizing, making lists, and drawing with the children who visit her garden. When things don't go as planned, she learns how to move from frustrated to brave and try again."
  },
  {
    name: "Curby",
    image: null,
    bio: "Curby is a fun, food-loving caterpillar who brings big energy to everything he does. He's curious, enthusiastic, and loves diving into whatever captures his imagination. Sometimes that excitement can turn into moments of carelessness or impatience when things don't go the way he expected."
  },
  {
    name: "Sterling",
    image: null,
    bio: "Sterling is thoughtful and observant, often taking a moment to observe and understand what's happening before jumping in. He likes to ask questions and think things through, helping the group see situations from different perspectives. When emotions start to feel big or confusing, Sterling's steady nature helps everyone slow down and make sense of what's going on."
  },
  {
    name: "Daisy",
    image: null,
    bio: "Daisy loves to jump into every moment with excitement and laughter, bringing joy and energy to the group."
  },
  {
    name: "Willow",
    image: null,
    bio: "Willow brings a quieter presence, helping friends pause, listen, and understand their feelings."
  },
  {
    name: "Feelings Flower",
    image: null,
    bio: "The Feelings Flower helps kids recognize and name their emotions with colorful petals that represent different feelings. It's a fun way to learn that all emotions are okay—and that understanding how we feel is the first step to building the tools to handle any feeling that comes."
  }
];

export default function Friends() {
  return (
    <Shell>
      <div className="bg-lulubug-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-lulubug-green mb-6">Meet Garden Friends</h1>
            <p className="text-xl md:text-2xl font-bold text-lulubug-green/80 max-w-3xl mx-auto">
              Our garden is full of wonderful friends who help each other learn about big feelings!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {FRIENDS_DATA.map((friend) => (
              <div key={friend.name} className="bg-white rounded-[3rem] p-8 border-4 border-lulubug-green/10 shadow-xl flex flex-col gap-6">
                <div className="w-full aspect-square rounded-[2rem] bg-lulubug-cream border-4 border-lulubug-sage overflow-hidden flex-shrink-0">
                  {friend.image ? (
                    <img src={friend.image} alt={friend.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-lulubug-green/20">
                      <span className="font-display text-6xl font-bold mb-2">?</span>
                      <span className="font-bold text-lg">Portrait Coming Soon</span>
                    </div>
                  )}
                </div>
                <div>
                  <h2 className="font-display text-4xl font-bold text-lulubug-red mb-4">{friend.name}</h2>
                  <p className="text-lg leading-relaxed font-semibold text-lulubug-green/90">
                    {friend.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Shell>
  );
}
