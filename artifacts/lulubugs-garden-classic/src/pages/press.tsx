import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export default function Press() {
  return (
    <Shell>
      <div className="bg-lulubug-sage py-16 md:py-24 border-b-4 border-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="font-display text-6xl md:text-8xl font-black text-lulubug-red mb-6">Press Room</h1>
          <p className="text-xl md:text-2xl font-bold text-lulubug-green/80">
            News, media resources, and the latest buzz from Lulubug's Garden.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="md:col-span-2 space-y-12">
            <section>
              <h2 className="font-display text-4xl font-bold text-lulubug-green mb-6">About the Show</h2>
              <div className="bg-white rounded-[2rem] p-8 border-4 border-lulubug-sage text-lg font-bold text-lulubug-green/80 leading-relaxed shadow-lg">
                <p className="mb-4">
                  Lulubug's Garden is an innovative children's media property designed for kids ages 3-7. Combining the tactile charm of puppetry with storybook-style animation, the show teaches foundational emotional skills—naming feelings, developing empathy, and building resilience.
                </p>
                <p>
                  Created by Jil Hunter and backed by clinical psychiatric expertise, the show serves a dual purpose: providing joyful, engaging entertainment for children, and offering parents a trusted, scientifically-grounded resource for early mental health education.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-4xl font-bold text-lulubug-green mb-6">In the News</h2>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="bg-white rounded-[2rem] p-6 border-4 border-lulubug-sage shadow-md hover:border-lulubug-red/30 transition-colors cursor-pointer group">
                    <p className="text-lulubug-red font-bold mb-2 uppercase tracking-wide text-sm">Press Release • Coming Soon</p>
                    <h3 className="font-display text-2xl font-bold text-lulubug-green group-hover:text-lulubug-red transition-colors">
                      Lulubug's Garden Announces New Season of Emotional Learning
                    </h3>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <div className="md:col-span-1 space-y-8">
            <div className="bg-lulubug-red text-white rounded-[2rem] p-8 shadow-xl text-center">
              <h3 className="font-display text-3xl font-bold mb-4">Media Kit</h3>
              <p className="font-semibold opacity-90 mb-8">
                Download high-res logos, character portraits, and official press materials.
              </p>
              <Button disabled className="w-full rounded-full h-14 font-bold bg-white text-lulubug-red hover:bg-gray-100 disabled:opacity-50 flex items-center justify-center gap-2">
                <Download size={20} />
                Download (Coming Soon)
              </Button>
            </div>

            <div className="bg-white rounded-[2rem] p-8 border-4 border-lulubug-sage shadow-xl text-center">
              <h3 className="font-display text-2xl font-bold text-lulubug-green mb-4">Press Contact</h3>
              <p className="font-bold text-lulubug-green/80 mb-4">
                For media inquiries, interviews, or review access, please reach out to our team.
              </p>
              <a href="mailto:press@lulubugsgarden.com" className="font-bold text-lulubug-red hover:underline">
                press@lulubugsgarden.com
              </a>
            </div>
          </div>

        </div>
      </div>
    </Shell>
  );
}
