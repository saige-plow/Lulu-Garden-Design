import { Shell } from "@/components/shell";
import jilPhoto from "@/assets/reference/jil.jpg";
import aboutHero from "@/assets/reference/garden-illustration.jpeg";
import teamPhoto from "@/assets/reference/team.jpg";

export default function About() {
  return (
    <Shell>
      {/* Mission Section */}
      <section className="bg-lulubug-sage py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="font-display text-5xl md:text-7xl font-bold text-lulubug-green mb-6">Our Mission</h1>
              <p className="text-xl md:text-2xl leading-relaxed font-bold text-lulubug-green/90">
                Our mission is to support young children in learning the skills that help them thrive-- understanding their emotions, managing their actions, caring for others, building friendships, and making healthy choices. Through joyful storytelling and interactive play, we help children grow self-awareness, empathy, resilience, and curiosity about the world around them.
              </p>
            </div>
            <div className="order-1 md:order-2 rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl aspect-square">
              <img src={aboutHero} alt="Illustrated view of Lulubug's Garden" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-32 bg-lulubug-cream">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-center text-lulubug-red mb-16">Meet the Team</h2>
          
          <div className="flex flex-col gap-16">
            {/* Jil */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border-4 border-lulubug-green/10 shadow-xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-64 h-64 shrink-0 rounded-[2rem] overflow-hidden border-4 border-lulubug-sage">
                <img src={jilPhoto} alt="Jil Hunter" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold text-lulubug-green mb-2">Jil Hunter</h3>
                <h4 className="text-xl font-bold text-lulubug-red mb-6">Creator</h4>
                <p className="text-lg leading-relaxed font-semibold text-lulubug-green/80">
                  Jil Hunter, creator of Lulubug's Garden, has early memories of lying on her grandmother's lap, watching television, singing, and talking together about the world. She treasures the time she spent learning from her oma. This sense of exploration and learning followed Jil throughout her life, especially as she began raising her 7 children. After her 5th child was born, Jil experienced debilitating anxiety and depression. Striving to find resources and help, she realized that many parents and children did not have the appropriate tools to identify, discuss, and solve mental health challenges. Thus began Jil's years-long journey to discover tools to help young minds develop skills to live healthy, happy lives. Jil carefully crafted Lulubug's Garden as an innovative mental health tool that families, parents, and children can enjoy together. Grounded in scientific principles and written with joy, each episode features helpful tips, important lessons, and catchy songs. The unique combination of all these elements has resulted in a magical and uplifting garden for children of all ages.
                </p>
              </div>
            </div>

            {/* Dr Karen */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border-4 border-lulubug-green/10 shadow-xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-64 h-64 shrink-0 rounded-[2rem] bg-lulubug-sage flex items-center justify-center border-4 border-lulubug-green/10">
                <span className="font-display text-5xl font-bold text-lulubug-green/20">?</span>
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold text-lulubug-green mb-2">Dr. Karen</h3>
                <h4 className="text-xl font-bold text-lulubug-red mb-6">Child Psychiatrist</h4>
                <p className="text-lg leading-relaxed font-semibold text-lulubug-green/80">
                  Dr. Karen is a board-certified child and adolescent psychiatrist with deep expertise in child development and emotional well-being. Early in her career, while working with youth hospitalized for mental health concerns, she saw how often children reached a point of crisis without their struggles ever being recognized. Many didn't yet have the language, support, or coping skills to manage big emotions or ask for help.
                </p>
              </div>
            </div>

            {/* Brigham Taylor */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border-4 border-lulubug-green/10 shadow-xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-64 h-64 shrink-0 rounded-[2rem] bg-lulubug-sage flex items-center justify-center border-4 border-lulubug-green/10">
                <span className="font-display text-5xl font-bold text-lulubug-green/20">?</span>
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold text-lulubug-green mb-2">Brigham Taylor</h3>
                <h4 className="text-xl font-bold text-lulubug-red mb-6">Director</h4>
                <p className="text-lg leading-relaxed font-semibold text-lulubug-green/80">
                  Bringing the magical world of Lulubug to life on screen requires a keen eye for playful detail and a deep understanding of storytelling. Brigham ensures that every episode captures the heart of the garden, making complex emotional concepts accessible and engaging for our youngest viewers.
                </p>
              </div>
            </div>
            
            {/* Executive Producers */}
            <div className="bg-white rounded-[3rem] p-8 md:p-12 border-4 border-lulubug-green/10 shadow-xl flex flex-col md:flex-row gap-8 md:gap-12 items-center">
              <div className="w-64 h-64 shrink-0 rounded-[2rem] overflow-hidden border-4 border-lulubug-sage">
                <img src={teamPhoto} alt="The Lulubug's Garden executive producer team" className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-display text-4xl font-bold text-lulubug-green mb-2">Executive Producers</h3>
                <h4 className="text-xl font-bold text-lulubug-red mb-6">Production Team</h4>
                <p className="text-lg leading-relaxed font-semibold text-lulubug-green/80">
                  Our dedicated group of executive producers brings decades of collective experience in independent children's television. They oversee the intricate balance of puppetry, animation, and educational curriculum, ensuring Lulubug's Garden remains a trusted, high-quality resource for families worldwide.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Shell>
  );
}
