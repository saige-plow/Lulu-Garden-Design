import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  if (submitted) {
    return (
      <div className="bg-lulubug-sage p-8 rounded-[2rem] text-center max-w-2xl mx-auto border-4 border-lulubug-green/10">
        <h3 className="font-display text-3xl font-bold text-lulubug-green mb-2">Welcome to the Garden!</h3>
        <p className="text-lg font-bold text-lulubug-green/80">We've added you to our whimsical updates list.</p>
      </div>
    );
  }

  return (
    <div className="bg-lulubug-sage p-8 md:p-12 rounded-[2rem] max-w-4xl mx-auto border-4 border-lulubug-green/10 shadow-xl">
      <div className="text-center mb-8">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-lulubug-green mb-4">Join the Garden!</h2>
        <p className="text-xl font-bold text-lulubug-green/80">
          Get the most whimsical updates from Lulubug's world straight to your inbox.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
        <label htmlFor="email-capture-input" className="sr-only">Email address</label>
        <Input 
          id="email-capture-input"
          type="email" 
          placeholder="Enter your email address" 
          required 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-full h-14 px-6 text-lg border-2 border-lulubug-green/20 focus-visible:ring-lulubug-red bg-white"
        />
        <Button 
          type="submit" 
          className="rounded-full h-14 px-8 text-lg font-bold bg-lulubug-red hover:bg-red-700 text-white shrink-0"
        >
          Join Now
        </Button>
      </form>
    </div>
  );
}
