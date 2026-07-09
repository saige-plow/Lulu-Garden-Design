import { useState } from "react";
import { Shell } from "@/components/shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Shell>
      <div className="flex-1 bg-lulubug-sage py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-7xl font-bold text-lulubug-green mb-6">We'd Love to Hear From You!</h1>
            <p className="text-xl font-bold text-lulubug-green/80">
              Whether it's about our garden friends or finding our videos, feel free to send us a bug-mail!
            </p>
          </div>

          <div className="bg-white rounded-[3rem] p-8 md:p-12 border-4 border-lulubug-green/10 shadow-2xl">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-lulubug-red rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2 className="font-display text-4xl font-bold text-lulubug-green mb-4">Bug-mail Sent!</h2>
                <p className="text-xl font-bold text-lulubug-green/80 mb-8">
                  Thanks for reaching out to the garden. We'll get back to you soon.
                </p>
                <Button 
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="rounded-full h-14 px-8 font-bold border-2 border-lulubug-green/20 text-lulubug-green hover:bg-lulubug-green hover:text-white"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="contact-name" className="font-bold text-lulubug-green ml-2">Name</label>
                    <Input id="contact-name" required placeholder="Your name" className="rounded-full h-14 px-6 border-2 border-lulubug-green/20 focus-visible:ring-lulubug-red bg-lulubug-cream text-lg" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="font-bold text-lulubug-green ml-2">Email</label>
                    <Input id="contact-email" required type="email" placeholder="Your email" className="rounded-full h-14 px-6 border-2 border-lulubug-green/20 focus-visible:ring-lulubug-red bg-lulubug-cream text-lg" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact-subject" className="font-bold text-lulubug-green ml-2">Subject</label>
                  <Input id="contact-subject" required placeholder="What is this regarding?" className="rounded-full h-14 px-6 border-2 border-lulubug-green/20 focus-visible:ring-lulubug-red bg-lulubug-cream text-lg" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="contact-message" className="font-bold text-lulubug-green ml-2">Message</label>
                  <Textarea id="contact-message" required placeholder="Type your message here..." className="rounded-[2rem] min-h-[150px] p-6 border-2 border-lulubug-green/20 focus-visible:ring-lulubug-red bg-lulubug-cream text-lg resize-none" />
                </div>

                <Button type="submit" className="rounded-full h-16 text-xl font-bold bg-lulubug-red hover:bg-red-700 text-white mt-4 w-full md:w-auto md:px-12 md:self-end">
                  Send Bug-mail!
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </Shell>
  );
}
