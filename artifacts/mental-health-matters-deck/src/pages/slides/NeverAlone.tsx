const base = import.meta.env.BASE_URL;

export default function NeverAlone() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#2A4B3A] font-[family-name:var(--font-body)] flex items-center justify-center">
      {/* Decorative background shapes */}
      <div className="absolute -top-[12vh] -right-[8vw] w-[40vw] h-[40vw] rounded-full bg-[#9AD6B3] opacity-15 blur-[4vw]" />
      <div className="absolute -bottom-[14vh] -left-[8vw] w-[36vw] h-[36vw] rounded-full bg-[#FFE8A1] opacity-10 blur-[4vw]" />

      <div className="relative z-10 w-[84vw] h-[80vh] flex items-center gap-[5vw] px-[3vw]">
        <div className="flex-1">
          <div className="inline-block px-[1.6vw] py-[1vh] rounded-full bg-[#9AD6B3] text-[#1a3327] font-medium text-[1.4vw] mb-[3vh]">
            Safety First
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[5vw] font-bold text-white leading-[1.05] tracking-tight mb-[4vh]">
            You&apos;re Never Alone
          </h2>
          <ul className="space-y-[2.6vh]">
            <li className="flex items-start gap-[1.2vw]">
              <span className="mt-[0.6vh] w-[1vw] h-[1vw] rounded-full bg-[#FFE8A1] shrink-0" />
              <span className="text-[2vw] text-white/90 leading-snug">
                Learning positive mental health skills helps prevent challenges as kids grow
              </span>
            </li>
            <li className="flex items-start gap-[1.2vw]">
              <span className="mt-[0.6vh] w-[1vw] h-[1vw] rounded-full bg-[#FFC9A3] shrink-0" />
              <span className="text-[2vw] text-white/90 leading-snug">
                If you or a loved one is struggling or in crisis, contact the 988 Suicide &amp; Crisis Lifeline
              </span>
            </li>
            <li className="flex items-start gap-[1.2vw]">
              <span className="mt-[0.6vh] w-[1vw] h-[1vw] rounded-full bg-[#9AD6B3] shrink-0" />
              <span className="text-[2vw] text-white/90 leading-snug">
                No-cost, confidential support, nationwide, 24/7, on phone, text, or chat
              </span>
            </li>
          </ul>
        </div>

        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-[32vw] h-[32vw] rounded-[3vw] bg-white/95 shadow-sm flex flex-col items-center justify-center gap-[2vh] p-[3vw]">
            <img
              src={`${base}photos/feelings-flower.png`}
              crossOrigin="anonymous"
              alt="Feelings flower illustration"
              className="w-[18vw] h-[18vw] object-contain"
            />
            <div className="text-[2.6vw] font-bold text-[#2A4B3A] font-[family-name:var(--font-display)]">
              Call or Text 988
            </div>
            <div className="text-[1.4vw] text-[#6b8577]">988lifeline.org</div>
          </div>
        </div>
      </div>
    </div>
  );
}
