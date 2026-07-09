const base = import.meta.env.BASE_URL;

export default function Partners() {
  return (
    <div className="w-screen h-screen overflow-hidden relative bg-[#FDFBF7] font-[family-name:var(--font-body)] flex items-center justify-center">
      {/* Decorative background shapes */}
      <div className="absolute -top-[12vh] -right-[6vw] w-[34vw] h-[34vw] rounded-full bg-[#FFE8A1] opacity-30 blur-[4vw]" />
      <div className="absolute -bottom-[14vh] -left-[8vw] w-[36vw] h-[36vw] rounded-full bg-[#9AD6B3] opacity-30 blur-[4vw]" />

      <div className="relative z-10 w-[86vw] h-[80vh] flex flex-col px-[3vw] py-[4vh]">
        <div className="mb-[3.5vh]">
          <div className="inline-block px-[1.6vw] py-[1vh] rounded-full bg-[#fdeccf] text-[#8a6d00] font-medium text-[1.4vw] mb-[2vh]">
            Partnering With Innovators
          </div>
          <h2 className="font-[family-name:var(--font-display)] text-[3.6vw] font-bold text-[#2A4B3A] leading-[1.05] tracking-tight">
            Our Mental Health Partners
          </h2>
        </div>

        <div className="flex-1 flex gap-[2.4vw]">
          <div className="flex-1 bg-white rounded-[2.5vw] p-[2.2vw] shadow-sm border border-[#2A4B3A]/10 flex flex-col">
            <div className="w-full h-[13vh] flex items-center">
              <img
                src={`${base}photos/hmhf-logo.png`}
                crossOrigin="anonymous"
                alt="Huntsman Mental Health Foundation logo"
                className="max-h-full max-w-[70%] object-contain"
              />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-[1.8vw] font-semibold text-[#2A4B3A] mt-[1.6vh]">
              Huntsman Mental Health Foundation
            </h3>
            <p className="text-[1.5vw] text-[#3A5C4A] mt-[1.4vh] leading-relaxed">
              Powers groundbreaking research, innovative care, and national leadership; provides the Mental Health Moment for each episode.
            </p>
          </div>

          <div className="flex-1 bg-white rounded-[2.5vw] p-[2.2vw] shadow-sm border border-[#2A4B3A]/10 flex flex-col">
            <div className="w-full h-[13vh] flex items-center">
              <img
                src={`${base}photos/hmhi-logo.png`}
                crossOrigin="anonymous"
                alt="Huntsman Mental Health Institute logo"
                className="max-h-full max-w-[70%] object-contain"
              />
            </div>
            <h3 className="font-[family-name:var(--font-display)] text-[1.8vw] font-semibold text-[#2A4B3A] mt-[1.6vh]">
              Huntsman Mental Health Institute
            </h3>
            <p className="text-[1.5vw] text-[#3A5C4A] mt-[1.4vh] leading-relaxed">
              Built on a $150 million gift from the Huntsman family, bringing research, education, and patient care together for children and families.
            </p>
          </div>
        </div>

        <div className="mt-[3vh] text-center">
          <span className="text-[1.6vw] text-[#2A4B3A] font-semibold italic">
            Lulubug&apos;s good friend Dr. Karen is part of the HMHI team.
          </span>
        </div>
      </div>
    </div>
  );
}
