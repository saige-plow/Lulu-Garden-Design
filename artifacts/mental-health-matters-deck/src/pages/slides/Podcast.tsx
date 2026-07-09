const base = import.meta.env.BASE_URL;

export default function Podcast() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#2A4B3A] font-[family-name:var(--font-body)] flex items-center justify-center">
      {/* Decorative background shapes */}
      <div className="absolute -top-[10vh] -left-[6vw] w-[32vw] h-[32vw] rounded-full bg-[#FFC9A3] opacity-15 blur-[4vw]" />
      <div className="absolute -bottom-[16vh] -right-[8vw] w-[38vw] h-[38vw] rounded-full bg-[#9AD6B3] opacity-15 blur-[4vw]" />

      <div className="relative z-10 w-[84vw] h-[80vh] flex items-center gap-[4vw] px-[3vw]">
        <div className="flex-1 flex flex-col gap-[2vh]">
          <div className="w-full h-[28vh] rounded-[2vw] overflow-hidden shadow-sm">
            <img
              src={`${base}photos/yt-podcast.jpg`}
              crossOrigin="anonymous"
              alt="Meet Your Hosts episode thumbnail"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex items-center gap-[1.2vw] bg-white/10 rounded-[1.6vw] p-[1.2vw]">
            <img
              src={`${base}photos/jil.jpg`}
              crossOrigin="anonymous"
              alt="Jil, podcast host"
              className="w-[6vw] h-[6vw] rounded-full object-cover border-[0.2vw] border-[#9AD6B3]"
            />
            <div className="text-[1.5vw] text-white/90">
              Hosted by Jil &amp; Karen
            </div>
          </div>
        </div>

        <div className="flex-1">
          <div className="inline-block px-[1.6vw] py-[1vh] rounded-full bg-[#9AD6B3] text-[#1a3327] font-medium text-[1.4vw] mb-[3vh]">
            For Parents
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[4.2vw] font-bold text-white leading-[1.05] tracking-tight mb-[3.5vh]">
            Lulubug&apos;s Podcast
          </h2>
          <ul className="space-y-[2.2vh]">
            <li className="flex items-start gap-[1.2vw]">
              <span className="mt-[0.6vh] w-[0.9vw] h-[0.9vw] rounded-full bg-[#FFE8A1] shrink-0" />
              <span className="text-[1.9vw] text-white/90 leading-snug">
                Goes deeper on the emotional themes your child explores in the garden
              </span>
            </li>
            <li className="flex items-start gap-[1.2vw]">
              <span className="mt-[0.6vh] w-[0.9vw] h-[0.9vw] rounded-full bg-[#FFC9A3] shrink-0" />
              <span className="text-[1.9vw] text-white/90 leading-snug">
                Practical, real-world conversation starters to keep the mental health moment going
              </span>
            </li>
          </ul>
          <a
            href="https://www.youtube.com/@LulubugsPodcastForParents"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-[4vh] text-[1.6vw] text-[#9AD6B3] underline underline-offset-4 font-semibold"
          >
            Watch on YouTube: @LulubugsPodcastForParents
          </a>
        </div>
      </div>
    </div>
  );
}
