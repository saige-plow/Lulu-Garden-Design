import { Shell } from "@/components/shell";
import { EmailCapture } from "@/components/email-capture";

export default function Join() {
  return (
    <Shell>
      <div className="flex-1 flex items-center justify-center bg-lulubug-cream py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-6xl md:text-8xl font-black text-lulubug-red mb-6">Ready for Adventure?</h1>
            <p className="text-2xl font-bold text-lulubug-green max-w-2xl mx-auto">
              Join the garden crew! We promise to keep your information safe and only send you the most whimsical updates from Lulubug's world.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <EmailCapture />
          </div>
        </div>
      </div>
    </Shell>
  );
}
