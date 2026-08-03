import React, { useState } from 'react';
import { Mail, Clock, ExternalLink, PlayCircle } from 'lucide-react';

type CoverageItem = {
  outlet: string;
  logo: string;
  url: string;
};

const COVERAGE: CoverageItem[] = [
  {
    outlet: 'Parade',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDroYL0BIS8MM05Wbfk8cRt2_ARR4J89hKgsFPtCNKsucCpffzbUbuGwLM&s=10',
    url: 'https://parade.com/news/lulubugs-garden-kids-series-disney-producer-emotional-development',
  },
  {
    outlet: "Today's Parent",
    logo: 'https://www.zecraft.com/wp-content/uploads/2016/04/todays-parent-logotype.png',
    url: 'https://www.todaysparent.com/toddler/lulubugs-garden',
  },
  {
    outlet: 'Yahoo',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfbIWKCm0LglSs2YCGCVAM9nnvzgLTuJQKZ7kbnJLXY_hb0PHnURJsQMs&s=10',
    url: 'https://www.yahoo.com/entertainment/tv/articles/discover-lulubugs-garden-uses-disney-133000586.html',
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
    url: 'https://www.abc4.com/news/news4utahplus/thrive/lulubugs-garden-a-new-series-helping-kids-navigate-big-emotions',
  },
  {
    outlet: 'KMYU',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/KMYU_logo.svg/1280px-KMYU_logo.svg.png',
    url: 'https://kmyu.tv/news/arc-salt-lake/utah-based-youtube-series-uses-puppets-music-to-teach-children-emotional-skills',
  },
  {
    outlet: 'Bragging Mommy',
    logo: 'https://assets.replocdn.com/projects/20b289ab-cd36-4dd9-890d-5318d84d857b/e6f97edf-3d24-46e7-bdc3-73962e6f2d40',
    url: 'https://www.thebraggingmommy.com/new-youtube-kids-series-from-disney-producer-focuses-on-emotional-development',
  },
  {
    outlet: 'Bellingham Herald',
    logo: 'https://s3-eu-west-1.amazonaws.com/pagesuite-feed-editions/useruploads/images/d77c3b89-eb0c-dfe5-7dc1-58676b153653/b60d69ac-e824-32bc-168f-cf8d72895a52.png',
    url: 'https://www.bellinghamherald.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Sacramento Bee',
    logo: 'https://s3-eu-west-1.amazonaws.com/pagesuite-feed-editions/useruploads/images/d77c3b89-eb0c-dfe5-7dc1-58676b153653/5312e153-7d55-94f2-bfc3-35f5dea095ea.png',
    url: 'https://www.sacbee.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Fort Worth Star-Telegram',
    logo: 'https://static.wikia.nocookie.net/logopedia/images/f/f8/Fort_Worth_Star-Telegram.svg/revision/latest?cb=20140906202651',
    url: 'https://www.star-telegram.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Belleville News-Democrat',
    logo: 'https://content.feed-editions.pagesuite.com/useruploads/images/875a3c95-4463-532f-21ff-9170627b72ac/c68695db-9b3a-d4a0-081b-33c8b71867de.png',
    url: 'https://www.bnd.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Idaho Statesman',
    logo: 'https://s3-eu-west-1.amazonaws.com/pagesuite-feed-editions/useruploads/images/d77c3b89-eb0c-dfe5-7dc1-58676b153653/34c18b96-d271-7f49-c49b-548d99be177e.png',
    url: 'https://www.idahostatesman.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Merced Sun-Star',
    logo: 'https://s3-eu-west-1.amazonaws.com/pagesuite-feed-editions/useruploads/images/d77c3b89-eb0c-dfe5-7dc1-58676b153653/4b8bb469-9575-98ef-05b9-376254781172.png',
    url: 'https://www.mercedsunstar.com/entertainment/article315584932.html',
  },
  {
    outlet: 'The State',
    logo: 'https://iconape.com/wp-content/files/sp/281568/png/281568.png',
    url: 'https://www.thestate.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Tri-City Herald',
    logo: 'https://yt3.googleusercontent.com/ytc/AIdro_kKG-RawAoy_7nuJTovCAK4Ce1K7XELU_FkOwtD-Ws8yA=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.tri-cityherald.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Tacoma News Tribune',
    logo: 'https://play-lh.googleusercontent.com/IxH9ryNL9bZnE3JlddRajX_ATPtG-_fhSnyv9C-I4q-ekHEld6IDV8dgPA8PcV6tTrUVhQwkxeZWt7vRx4oP2Fg',
    url: 'https://www.thenewstribune.com/entertainment/article315584932.html',
  },
  {
    outlet: 'San Luis Obispo Tribune',
    logo: 'https://s3-eu-west-1.amazonaws.com/pagesuite-feed-editions/useruploads/images/d77c3b89-eb0c-dfe5-7dc1-58676b153653/e0b0f38f-23d5-1264-9c84-64a995ca0787.png',
    url: 'https://www.sanluisobispo.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Macon Telegraph',
    logo: 'https://iconape.com/wp-content/png_logo_vector/the-telegraph-macon-2020-01-15.png',
    url: 'https://www.macon.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Rock Hill Herald',
    logo: 'https://www.reportforamerica.org/wp-content/uploads/2019/11/The_Herald.jpg',
    url: 'https://www.heraldonline.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Modesto Bee',
    logo: 'https://s3-eu-west-1.amazonaws.com/pagesuite-feed-editions/useruploads/images/d77c3b89-eb0c-dfe5-7dc1-58676b153653/4627d544-cace-9e4c-ef82-e76e7e916953.png',
    url: 'https://www.modbee.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Wichita Eagle',
    logo: 'https://yt3.googleusercontent.com/ytc/AIdro_nTBkb--OwF--X68hvZOlMInuyTXEJ_YgCoi9ys6NN7eg=s900-c-k-c0x00ffffff-no-rj',
    url: 'https://www.kansas.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Bradenton Herald',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBiimbcwIXVz4PLpz9XdQY6z3kNgF53M7awa9NwvFHw&s',
    url: 'https://www.bradenton.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Lexington Herald Leader',
    logo: 'https://s3-eu-west-1.amazonaws.com/pagesuite-feed-editions/useruploads/images/d77c3b89-eb0c-dfe5-7dc1-58676b153653/f33ac3c6-5ecd-5a75-6b5e-8c6fdf079a68.png',
    url: 'https://www.kentucky.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Hilton Head Island Packet',
    logo: 'https://www.islandpacket.com/wps/build/images/islandpacket/facebook.jpg',
    url: 'https://www.islandpacket.com/entertainment/article315584932.html',
  },
  {
    outlet: 'The Olympian',
    logo: 'https://logowik.com/content/uploads/images/the-olympian2755.logowik.com.webp',
    url: 'https://www.theolympian.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Myrtle Beach Sun News',
    logo: 'https://s3-eu-west-1.amazonaws.com/pagesuite-feed-editions/useruploads/images/d77c3b89-eb0c-dfe5-7dc1-58676b153653/408cce53-4d15-8427-8348-de45d3a2f43b.png',
    url: 'https://www.myrtlebeachonline.com/entertainment/article315584932.html',
  },
  {
    outlet: 'Fresno Bee',
    logo: '',
    url: 'https://www.fresnobee.com/entertainment/article315584932.html',
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
      className="flex items-center justify-center h-16 px-4 rounded-xl bg-white border border-border hover:border-primary/30 hover:shadow-md transition-all group"
    >
      {item.logo && !imgFailed ? (
        <img
          src={item.logo}
          alt={item.outlet}
          onError={() => setImgFailed(true)}
          className="max-h-8 max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
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
  return (
    <div className="w-full pt-16 pb-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">

        {/* Page header */}
        <div className="mb-14">
          <h1 className="font-display text-4xl md:text-6xl font-bold text-primary mb-4">
            Press & Media
          </h1>
          <p className="text-xl text-foreground/60 max-w-2xl">
            Resources and news about Lulubug's Garden and our mission to support early childhood mental health.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Main content column */}
          <div className="md:col-span-2 space-y-14">

            <section>
              <h2 className="font-display text-2xl font-bold mb-5 text-foreground tracking-tight">About the Show</h2>
              <div className="text-foreground/80 space-y-4 text-[0.97rem] leading-relaxed">
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
                <p className="font-medium text-foreground">
                  Lulubug's Garden is now streaming on YouTube.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-5 text-foreground tracking-tight">In the News</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {COVERAGE.map((item) => (
                  <LogoTile key={item.url} item={item} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="font-display text-2xl font-bold mb-5 text-foreground tracking-tight">Watch an Episode</h2>
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm">
                <div className="aspect-video">
                  <iframe
                    src="https://www.youtube.com/embed/erLx5BxPHRo"
                    title="When I Feel Helpful | Lulubug's Garden Full Episode"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div className="flex items-center gap-3 px-5 py-3.5 bg-background border-t border-border">
                  <PlayCircle size={18} className="text-primary shrink-0" />
                  <div>
                    <p className="font-bold text-foreground text-sm">When I Feel Helpful</p>
                    <p className="text-xs text-foreground/50">Full episode · Lulubug's Garden on YouTube</p>
                  </div>
                  <a
                    href="https://www.youtube.com/@LulubugsGarden/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-xs font-bold text-primary hover:text-primary/80 flex items-center gap-1 shrink-0"
                  >
                    See all episodes <ExternalLink size={11} />
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* Sidebar — Media Contact only */}
          <div>
            <div className="bg-background rounded-2xl p-8 border border-border sticky top-8">
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Media Contact</h3>
              <p className="text-foreground/70 mb-6 text-sm leading-relaxed">
                For interview requests, screeners, press inquiries, or additional assets, please reach out to our team.
              </p>
              <a
                href="mailto:office@lulubug.com"
                className="inline-flex items-center gap-2 font-bold text-secondary hover:text-secondary/80 transition-colors"
              >
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
