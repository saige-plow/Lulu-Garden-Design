import React, { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

interface NewsletterFormProps {
  compact?: boolean;
}

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Faux submission
      setTimeout(() => {
        // Reset after a while if desired, or keep showing success
      }, 5000);
    }
  };

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 p-4 rounded-2xl bg-primary/10 text-primary font-bold ${compact ? 'justify-center' : ''}`}>
        <CheckCircle2 className="text-primary" />
        <span>Yay! You're in the garden club.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${compact ? 'flex-col sm:flex-row gap-2' : 'flex-col gap-4'} w-full max-w-md mx-auto`}>
      <div className="relative flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Grown-up's email address
        </label>
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Grown-up's email address"
          className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-transparent bg-white shadow-sm focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all font-sans text-foreground"
        />
      </div>
      <button
        type="submit"
        className="px-8 py-3 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-transform transform hover:scale-105 shadow-sm whitespace-nowrap"
      >
        Join Now
      </button>
    </form>
  );
}
