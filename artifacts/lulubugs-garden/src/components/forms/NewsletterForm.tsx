import React, { useState } from 'react';
import { Mail, CheckCircle2, Loader2 } from 'lucide-react';

interface NewsletterFormProps {
  compact?: boolean;
}

export function NewsletterForm({ compact = false }: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError(null);

    try {
      const base = import.meta.env.BASE_URL?.replace(/\/$/, '') ?? '';
      const apiBase = base.replace(/^(\/[^/]+).*/, '$1');
      const res = await fetch(`${apiBase}/api/newsletter/subscribe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Something went wrong. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Could not connect. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className={`flex items-center gap-3 p-4 rounded-2xl bg-primary/10 text-primary font-bold ${compact ? 'justify-center' : ''}`}>
        <CheckCircle2 className="text-primary shrink-0" />
        <span>Yay! You're in the garden club. 🌱</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex ${compact ? 'flex-col sm:flex-row gap-2' : 'flex-col gap-4'} w-full max-w-md mx-auto`}>
      <div className="relative flex-1">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" size={20} />
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          disabled={loading}
          className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-transparent bg-white shadow-sm focus:border-secondary focus:ring-4 focus:ring-secondary/20 outline-none transition-all font-sans text-foreground disabled:opacity-60"
        />
      </div>
      {error && (
        <p className="text-sm text-red-500 text-center -mt-2">{error}</p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="px-8 py-3 rounded-full bg-secondary text-white font-bold hover:bg-secondary/90 transition-transform transform hover:scale-105 shadow-sm whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Joining…
          </>
        ) : (
          'Join Now'
        )}
      </button>
    </form>
  );
}
