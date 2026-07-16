import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full pt-16 pb-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        <div>
          <h1 className="font-serif text-5xl font-bold text-primary mb-6">
            Say Hello
          </h1>
          <p className="text-xl text-foreground/80 mb-10 leading-relaxed">
            Whether you have a question about the show, want to explore a partnership, or just want to share how your little one is enjoying the garden — we'd love to hear from you.
          </p>
          
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg mb-2">General Inquiries</h3>
              <a href="mailto:hello@lulubugsgarden.com" className="text-secondary hover:underline font-medium">hello@lulubugsgarden.com</a>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Partnerships</h3>
              <a href="mailto:partners@lulubugsgarden.com" className="text-secondary hover:underline font-medium">partners@lulubugsgarden.com</a>
            </div>
            <div className="p-6 bg-white rounded-3xl border border-border mt-8">
              <p className="font-bold mb-2">Need immediate help?</p>
              <p className="text-sm text-foreground/70">
                If you or someone you know is struggling or in crisis, please call or text the Suicide & Crisis Lifeline at <strong className="text-primary">988</strong>.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-sm border border-border">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Message Sent!</h2>
              <p className="text-foreground/70 mb-8">
                Thank you for reaching out to the garden. We'll get back to you as soon as we can.
              </p>
              <button 
                onClick={() => {
                  setSubmitted(false);
                  setFormData({name: '', email: '', subject: '', message: ''});
                }}
                className="text-secondary font-bold hover:underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-foreground mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-foreground mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-foreground mb-2">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all bg-white"
                >
                  <option value="" disabled>Select a topic</option>
                  <option value="general">General Question</option>
                  <option value="feedback">Show Feedback</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="press">Press/Media</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                  placeholder="How can we help?"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-transform transform hover:scale-[1.02] shadow-sm"
              >
                Send Message
                <Send size={18} />
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
