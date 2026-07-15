const base = import.meta.env.BASE_URL;

export default function TitleSlide() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#FDFBF7] font-[family-name:var(--font-body)] flex items-center justify-center">
      {/* Decorative background shapes */}
      <div className="absolute -top-[10vh] -left-[6vw] w-[38vw] h-[38vw] rounded-full bg-[#9AD6B3] opacity-40 blur-[4vw]" />
      <div className="absolute -bottom-[16vh] -right-[10vw] w-[46vw] h-[46vw] rounded-full bg-[#FFE8A1] opacity-40 blur-[5vw]" />
      <div className="absolute top-[14vh] right-[8vw] w-[9vw] h-[9vw] rounded-[2.5vw] bg-[#FFC9A3] opacity-70 rotate-[15deg]" />
      <div className="absolute bottom-[12vh] left-[10vw] w-[6vw] h-[6vw] rounded-full bg-[#2A4B3A] opacity-10" />

      {/* Main content card */}
      <div className="relative z-10 w-[84vw] h-[80vh] bg-white/70 backdrop-blur-sm rounded-[4vw] border border-white shadow-sm flex flex-col px-[5vw] py-[5vh]">
        {/* Header */}
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-[1vw]">
            <img
              src={`${base}photos/lulubug-logo.png`}
              crossOrigin="anonymous"
              alt="Lulubug's Garden logo"
              className="h-[7vh] object-contain"
            />
          </div>
          <div className="px-[1.6vw] py-[0.9vh] rounded-full bg-[#2A4B3A] text-[#9AD6B3] font-medium text-[1.3vw]">
            Mental Health Resource Page
          </div>
        </div>

        {/* Center content */}
        <div className="flex-1 flex items-center gap-[3vw] mt-[2vh]">
          <div className="flex-1">
            <div className="inline-block px-[1.6vw] py-[1vh] rounded-full bg-[#FFE8A1] text-[#8a6d00] font-medium text-[1.4vw] mb-[3vh] -rotate-2">
              Lulubug&apos;s Garden
            </div>
            <h1 className="font-[family-name:var(--font-display)] text-[6.5vw] font-bold text-[#2A4B3A] leading-[1.02] tracking-tight text-balance">
              Mental Health Matters
            </h1>
            <p className="text-[2vw] text-[#3A5C4A] mt-[3vh] max-w-[36vw] leading-relaxed">
              A look inside Lulubug&apos;s Garden&apos;s mental health resource page — safety support, video moments, expert partners, and a podcast for parents.
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center">
            <div className="w-[30vw] h-[30vw] rounded-full bg-[#F4F9F6] border-[0.3vw] border-white shadow-sm flex items-center justify-center overflow-hidden">
              <img
                src={`${base}photos/lulu-illustrated.png`}
                crossOrigin="anonymous"
                alt="Lulubug illustrated"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-center w-full">
          <div className="text-[1.3vw] font-medium text-[#6b8577] flex items-center gap-[0.6vw]">
            <span className="w-[0.7vw] h-[0.7vw] rounded-full bg-[#9AD6B3] inline-block" />
            lulubugsgarden.com
          </div>
        </div>
      </div>
    </div>
  );
}
