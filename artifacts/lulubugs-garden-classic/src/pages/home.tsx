import { Shell } from "@/components/shell";
import { EmailCapture } from "@/components/email-capture";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/reference/hero-portal.jpg";
import lulubugPhoto from "@/assets/reference/lulubug-photo.jpg";
import { Link } from "wouter";

const FRIENDS = [
  { name: "Lulubug", image: lulubugPhoto },
  { name: "Curby", image: "" },
  { name: "Sterling", image: "" },
  { name: "Daisy", image: "" },
  { name: "Willow", image: "" },
  { name: "Feelings Flower", image: "" },
];

export default function Home() {
  return (
    <Shell>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-lulubug-cream py-12 md:py-24">
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tighter">
            <span className="text-lulubug-red block">LULUBUG'S</span>
            <span className="text-lulubug-green block -mt-2 md:-mt-6">GARDEN</span>
          </h1>
          
          <div className="relative w-full max-w-4xl mx-auto rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl mb-12 aspect-video bg-lulubug-sage flex items-center justify-center">
            <img src={heroImage} alt="The Garden Portal" className="w-full h-full object-cover" />
          </div>
          
          <a href="https://www.youtube.com/@LulubugsGarden" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full h-16 md:h-20 px-12 md:px-16 text-2xl md:text-3xl font-black bg-lulubug-red hover:bg-red-700 text-white uppercase tracking-wide">
              Watch Now!
            </Button>
          </a>
        </div>
      </section>

      {/* Meet Garden Friends Teaser */}
      <section className="bg-lulubug-sage py-20 border-y-4 border-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-6xl font-bold text-lulubug-green mb-4">Meet Garden Friends</h2>
            <p className="text-xl font-bold text-lulubug-green/80 max-w-2xl mx-auto">
              Join Lulubug and her friends as they learn about feelings and how to navigate them together!
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {FRIENDS.map((friend) => (
              <Link key={friend.name} href="/friends" className="group flex flex-col items-center gap-4">
                <div className="w-full aspect-square rounded-[2rem] bg-white border-4 border-lulubug-green/10 overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
                  {friend.image ? (
                    <img src={friend.image} alt={friend.name} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-lulubug-green/20 font-display text-4xl font-bold">
                      ?
                    </div>
                  )}
                </div>
                <Button variant="outline" className="rounded-full font-bold bg-white text-lulubug-green border-2 border-lulubug-green/20 hover:bg-lulubug-red hover:text-white hover:border-lulubug-red w-full">
                  Meet {friend.name}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="bg-lulubug-cream py-24">
        <div className="container mx-auto px-4">
          <EmailCapture />
        </div>
      </section>
    </Shell>
  );
}
