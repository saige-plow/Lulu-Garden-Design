import React, { useState } from 'react';
import { Download, Mail, Clock, ExternalLink, PlayCircle } from 'lucide-react';

type CoverageItem = {
  outlet: string;
  logo: string;
  url: string;
};

const COVERAGE: CoverageItem[] = [
  {
    outlet: 'Parade',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDroYL0BIS8MM05Wbfk8cRt2_ARR4J89hKgsFPtCNKsucCpffzbUbuGwLM',
    url: 'https://parade.com/news/lulubugs-garden-kids-series-disney-producer-emotional-development',
  },
  {
    outlet: "Today's Parent",
    logo: 'https://www.zecraft.com/wp-content/uploads/2016/04/todays-parent-logotype.png',
    url: 'https://www.todaysparent.com/toddler/lulubugs-garden',
  },
  {
    outlet: 'Yahoo',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbIWKCm0LglSs2YCGCVAM9nnvzgLTuJQKZ7kbnJLXY_hb0PHnURJsQM',
    url: 'https://www.yahoo.com/entertainment/tv/articles/discover-lulubugs-garden-uses-disney-133000009.html',
  },
  {
    outlet: 'AOL',
    logo: 'https://1000logos.net/wp-content/uploads/2016/10/AOL-Logo.png',
    url: 'https://www.aol.com/articles/discover-lulubugs-garden-uses-disney-133000009.html',
  },
  {
    outlet: 'Charlotte Observer',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/The_Charlotte_Observer_masthead.svg/960px-The_Charlotte_Observer_masthead.svg.png',
    url: 'https://www.charlotteobserver.com/entertainment/article315584932.html',
  },
  {
    outlet: 'KUTV',
    logo: 'https://static-newson.akamaized.net/icons/v3/sinclair/KUTV.png',
    url: 'https://kutv.com/news/local/utah-based-youtube-series-uses-puppets-music-to-teach-children-emotional-skills',
  },
  {
    outlet: 'ABC4 Utah',
    logo: 'https://www.abc4.com/wp-content/uploads/sites/4/2022/10/android-abc4-News-512x512-2.png',
    url: 'https://www.abc4.com/news/news4utahplus/thrive/lulubugs-garden-a-new-series-helping-kids',
  },
  {
    outlet: 'KMYU',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/KMYU_logo.svg/1280px-KMYU_logo.svg.png',
    url: 'https://kmyu.tv/news/arc-salt-lake/utah-based-youtube-series-uses-puppets-music-to-teach-children-emotional-skills',
  },
  {
    outlet: 'Bragging Mommy',
    logo: 'https://assets.replocdn.com/projects/20b289ab-cd36-4dd9-890d-5318d84d857b/e6f97edf-3d24-46e7-bdc3-73962e6f2d40',
    url: 'https://www.thebraggingmommy.com/new-youtube-kids-series-from-disney-producer-focuses-on-kids-mental-health/',
  },
  {
    outlet: 'Sacramento Bee',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/The_Sacramento_Bee_logo.svg/1280px-The_Sacramento_Bee_logo.svg.png',
    url: 'https://www.sacbee.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Fort Worth Star-Telegram',
    logo: 'https://static.wikia.nocookie.net/logopedia/images/f/f8/Fort_Worth_Star-Telegram.svg/revision/latest?cb=20140906202651',
    url: 'https://www.star-telegram.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Bellingham Herald',
    logo: '',
    url: 'https://www.bellinghamherald.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Fresno Bee',
    logo: '',
    url: 'https://www.fresnobee.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Idaho Statesman',
    logo: '',
    url: 'https://www.idahostatesman.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Lexington Herald Leader',
    logo: '',
    url: 'https://www.kentucky.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Macon Telegraph',
    logo: 'https://iconape.com/wp-content/png_logo_vector/the-telegraph-macon-2020-01-15.png',
    url: 'https://www.macon.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Modesto Bee',
    logo: '',
    url: 'https://www.modbee.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Myrtle Beach Sun News',
    logo: '',
    url: 'https://www.myrtlebeachonline.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Rock Hill Herald',
    logo: '',
    url: 'https://www.heraldonline.com/entertainment/article315584932.html',
  },
  {
    outlet: 'San Luis Obispo Tribune',
    logo: '',
    url: 'https://www.sanluisobispo.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Tacoma News Tribune',
    logo: '',
    url: 'https://www.thenewstribune.com/entertainment/article315584932.html',
  },
  {
    outlet: 'The Olympian',
    logo: '',
    url: 'https://www.theolympian.com/entertainment/article315584932.html',
  },
  {
    outlet: 'The State',
    logo: 'https://iconape.com/wp-content/files/sp/281568/png/281568.png',
    url: 'https://www.thestate.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Tri-City Herald',
    logo: '',
    url: 'https://www.tri-cityherald.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Wichita Eagle',
    logo: '',
    url: 'https://www.kansas.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Bradenton Herald',
    logo: '',
    url: 'https://www.bradenton.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Belleville News-Democrat',
    logo: '',
    url: 'https://www.bnd.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Hilton Head Island Packet',
    logo: '',
    url: 'https://www.islandpacket.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Merced Sun-Star',
    logo: '',
    url: 'https://www.mercedsunstar.com/entertainment/article315584932.html',
  },
];

function LogoTile({ item }: { item: CoverageItem }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      title={item.outlet}
      className="flex items-center justify-center h-16 px-4 rounded-2xl bg-background border border-border hover:border-primary/30 hover:shadow-md transition-all group"
    >
      {item.logo && !imgFailed ? (
        <img
          src={item.logo}
          alt={item.outlet}
          onError={() => setImgFailed(true)}
          className="max-h-8 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
        />
      ) : (
        <span className="text-xs font-bold text-center text-foreground/60 group-hover:text-primary transition-colors leading-tight">
          {item.outlet}
        </span>
      )}
    </a>
  );
}

export function Press() {
  const [toast, setToast] = useState<string | null>(null);

  const handleDownload = (assetName: string) => {
    setToast(assetName);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="w-full pt-16 pb-24 px-4 bg-white relative">
      {/* Coming Soon Toast */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-foreground text-white px-5 py-3 rounded-2xl shadow-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
          <Clock size={18} className="shrink-0 text-primary-foreground/70" />
          <span className="font-medium text-sm"><span className="font-bold">{toast}</span> — assets coming soon! Check back or email us.</span>
        </div>
      )}

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl">
            Resources, assets, and news about Lulubug's Garden and our mission to support early childhood mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main content column */}
          <div className="md:col-span-2 space-y-16">

            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">About the Show</h2>
              <div className="prose prose-lg text-foreground/80 bg-background p-8 rounded-3xl border border-border space-y-4">
                <p>
                  Lulubug's Garden is a children's series for ages 3–7 that helps young viewers build emotional awareness, social skills and resilience through music, movement, storytelling and imaginative play.
                </p>
                <p>
                  Set in a vibrant garden world, the series follows twin sisters Willow and Daisy alongside Lulubug the Ladybug, Curby Caterpillar, Sterling Snail and the animated Feelings Flower as they navigate big emotions, friendships, healthy habits and everyday childhood challenges. Each episode is thoughtfully designed to entertain while giving children age-appropriate language and tools to better understand themselves and the people around them.
                </p>
                <p>
                  Created by Jil Hunter, the series was inspired by her own experiences using creative play, art, music and nature to help her children connect and work through difficult feelings. Longtime Disney producer Brigham Taylor serves as director, while board-certified child and adolescent psychiatrist Dr. Karen Manotas provides guidance to ensure the show reflects developmentally informed, research-based practices.
                </p>
                <p>
                  Each episode concludes with a brief segment from Dr. Karen that helps parents understand the lesson and offers practical ways to continue the conversation at home.
                </p>
                <p>
                  Lulubug's Garden is now streaming on YouTube.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">In the News</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {COVERAGE.map((item) => (
                  <LogoTile key={item.url} item={item} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-3xl font-bold mb-6 text-foreground">Watch an Episode</h2>
              <div className="rounded-3xl overflow-hidden border border-border shadow-sm">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/erLx5BxPHRo"
                    title="When I Feel Helpful | Lulubug's Garden Full Episode"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center gap-3 px-6 py-4 bg-background">
                  <PlayCircle size={20} className="text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">When I Feel Helpful</p>
                    <p className="text-xs text-foreground/50">Full episode · Lulubug's Garden on YouTube</p>
                  </div>
                  <a
                    href="https://www.youtube.com/@LulubugsGarden/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    See all episodes <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar */}
          <div className="space-y-8">

            <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
              <h3 className="font-display text-2xl font-bold mb-6 text-primary">Media Assets</h3>
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => handleDownload('Brand Guidelines & Logos')}
                    className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group"
                  >
                    <Download className="text-primary group-hover:text-white" size={20} />
                    <span className="font-bold text-left">Brand Guidelines & Logos</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDownload('Character Bios & Art')}
                    className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group"
                  >
                    <Download className="text-primary group-hover:text-white" size={20} />
                    <span className="font-bold text-left">Character Bios & Art</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleDownload('Full Media Kit (PDF)')}
                    className="flex items-center gap-3 w-full p-4 rounded-xl bg-white hover:bg-primary hover:text-white transition-colors border border-border shadow-sm group"
                  >
                    <Download className="text-primary group-hover:text-white" size={20} />
                    <span className="font-bold text-left">Full Media Kit (PDF)</span>
                  </button>
                </li>
              </ul>
            </div>

            <div className="bg-secondary/10 rounded-3xl p-8 border border-secondary/20">
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">Media Contact</h3>
              <p className="text-foreground/80 mb-6 text-sm">
                For interview requests, screeners, or additional assets, please reach out to our press team.
              </p>
              <a href="mailto:office@lulubug.com" className="inline-flex items-center gap-2 font-bold text-secondary hover:text-secondary/80">
                <Mail size={18} />
                office@lulubug.com
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
