const base = import.meta.env.BASE_URL;

export default function MentalHealthMoments() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#FDFBF7] font-[family-name:var(--font-body)] flex items-center justify-center">
      {/* Decorative background shapes */}
      <div className="absolute -top-[10vh] -left-[6vw] w-[34vw] h-[34vw] rounded-full bg-[#FFC9A3] opacity-30 blur-[4vw]" />
      <div className="absolute -bottom-[16vh] -right-[8vw] w-[40vw] h-[40vw] rounded-full bg-[#9AD6B3] opacity-30 blur-[4vw]" />

      <div className="relative z-10 w-[86vw] h-[80vh] flex flex-col px-[3vw] py-[4vh]">
        <div className="mb-[4vh]">
          <div className="inline-block px-[1.6vw] py-[1vh] rounded-full bg-[#e2f4ea] text-[#2A4B3A] font-medium text-[1.4vw] mb-[2vh]">
            Every Episode
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[4.2vw] font-bold text-[#2A4B3A] leading-[1.05] tracking-tight">
            Mental Health Moments
          </h2>
        </div>

        <div className="flex-1 flex gap-[3vw]">
          <div className="flex-1 bg-white rounded-[2.5vw] p-[1.8vw] shadow-sm border border-[#2A4B3A]/10 flex flex-col">
            <div className="w-full h-[26vh] rounded-[1.6vw] overflow-hidden bg-[#F4F9F6]">
              <img
                src={`${base}photos/yt-proud.jpg`}
                crossOrigin="anonymous"
                alt="When Your Child Feels Proud video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-[2vw] font-semibold text-[#2A4B3A] mt-[2.4vh]">
              When Your Child Feels Proud
            </h3>
            <p className="text-[1.6vw] text-[#3A5C4A] mt-[1.2vh] leading-snug">
              Helping kids recognize and celebrate pride.
            </p>
          </div>

          <div className="flex-1 bg-white rounded-[2.5vw] p-[1.8vw] shadow-sm border border-[#2A4B3A]/10 flex flex-col">
            <div className="w-full h-[26vh] rounded-[1.6vw] overflow-hidden bg-[#F4F9F6]">
              <img
                src={`${base}photos/yt-shame.jpg`}
                crossOrigin="anonymous"
                alt="Helping Kids Feel Safe After Mistakes video thumbnail"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-[2vw] font-semibold text-[#2A4B3A] mt-[2.4vh]">
              Helping Kids Feel Safe After Mistakes
            </h3>
            <p className="text-[1.6vw] text-[#3A5C4A] mt-[1.2vh] leading-snug">
              Helping children move through shame.
            </p>
          </div>
        </div>

        <div className="mt-[3vh] text-center">
          <span className="text-[1.6vw] text-[#2A4B3A] font-semibold">
            Full collection on YouTube: @lulubugsgarden
          </span>
        </div>
      </div>
    </div>
  );
}
