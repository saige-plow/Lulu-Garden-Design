import { Sidebar } from "@/components/sidebar";
import { Footer } from "@/components/footer";
import { PhoneCall, HeartHandshake } from "lucide-react";

export default function MentalHealthMatters() {
  return (
    <div className="min-h-[100dvh] flex flex-col md:flex-row bg-[#F5F7F5] text-[#2C4A3B] selection:bg-[#4A7C59] selection:text-white">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        {/* 988 Banner - Top Pinned */}
        <div className="bg-[#1B3B2B] text-white py-4 px-4 sticky top-0 md:top-0 z-30 border-b-4 border-[#4A7C59]">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
            <PhoneCall size={28} className="text-[#A3C9A8] shrink-0" />
            <div className="font-bold">
              <span className="block md:inline text-lg">988 Suicide & Crisis Lifeline</span>
              <span className="block md:inline md:ml-2 text-[#A3C9A8] font-semibold">
                No-cost 24/7 support. Call or text 988 or chat at <a href="https://988lifeline.org" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">988lifeline.org</a>
              </span>
            </div>
            <a href="tel:988" className="mt-2 md:mt-0 md:ml-4 bg-[#A3C9A8] text-[#1B3B2B] px-6 py-2 rounded-full font-black uppercase tracking-wide hover:bg-white transition-colors">
              Call 988
            </a>
          </div>
        </div>

      <main className="flex-1 flex flex-col">
        {/* Hero */}
        <section className="py-20 md:py-32 bg-[#E8EFE9]">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <HeartHandshake size={64} className="mx-auto mb-8 text-[#4A7C59]" />
            <h1 className="font-display text-5xl md:text-7xl font-bold text-[#1B3B2B] mb-8">Mental Health Matters</h1>
            <p className="text-xl md:text-2xl font-bold text-[#2C4A3B]/80 leading-relaxed">
              We believe that emotional well-being is the foundation for a healthy, happy childhood. 
              By giving children the vocabulary to understand their feelings early, we help them build resilience for life.
            </p>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="bg-white rounded-[3rem] p-8 md:p-16 border-4 border-[#E8EFE9] shadow-xl">
              <h2 className="font-display text-4xl font-bold text-[#1B3B2B] mb-6">Our Approach</h2>
              <p className="text-lg font-bold text-[#2C4A3B]/80 leading-relaxed mb-6">
                Mental health education shouldn't wait until there's a crisis. In Lulubug's Garden, we weave clinical best practices seamlessly into joyful storytelling. When kids watch Curby feel frustrated or Willow feel shy, they learn that all emotions are natural and manageable.
              </p>
              <p className="text-lg font-bold text-[#2C4A3B]/80 leading-relaxed">
                By destigmatizing conversations about mental health at ages 3-7, we empower parents and children to communicate openly, building a toolkit of coping strategies long before they are urgently needed.
              </p>
            </div>
          </div>
        </section>

        {/* Partners */}
        <section className="py-20 bg-[#E8EFE9]">
          <div className="container mx-auto px-4 max-w-5xl">
            <h2 className="font-display text-4xl font-bold text-center text-[#1B3B2B] mb-12">Our Partners in Care</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Partner 1 */}
              <div className="bg-white rounded-[2rem] p-8 border-4 border-[#A3C9A8]/30 flex flex-col h-full">
                <h3 className="font-display text-2xl font-bold text-[#1B3B2B] mb-4">Huntsman Mental Health Foundation</h3>
                <p className="text-[#2C4A3B]/80 font-bold mb-8 flex-1">
                  Dedicated to expanding mental health resources and eliminating the stigma surrounding mental illness. Through our partnership, we work to ensure that early emotional education reaches the families who need it most, supporting their mission of transforming mental health care.
                </p>
                <a href="https://healthcare.utah.edu/hmhi/foundation" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#4A7C59] text-white text-center px-6 py-3 rounded-full font-bold hover:bg-[#1B3B2B] transition-colors">
                  Learn More
                </a>
              </div>

              {/* Partner 2 */}
              <div className="bg-white rounded-[2rem] p-8 border-4 border-[#A3C9A8]/30 flex flex-col h-full">
                <h3 className="font-display text-2xl font-bold text-[#1B3B2B] mb-4">Huntsman Mental Health Institute</h3>
                <p className="text-[#2C4A3B]/80 font-bold mb-8 flex-1">
                  A leader in psychiatric care and research. Their clinical expertise helps inform the foundational concepts within Lulubug's Garden, ensuring our content is not just entertaining, but grounded in evidence-based developmental psychology and behavioral science.
                </p>
                <a href="https://healthcare.utah.edu/hmhi" target="_blank" rel="noopener noreferrer" className="inline-block bg-[#4A7C59] text-white text-center px-6 py-3 rounded-full font-bold hover:bg-[#1B3B2B] transition-colors">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

        <Footer />
      </div>
    </div>
  );
}
