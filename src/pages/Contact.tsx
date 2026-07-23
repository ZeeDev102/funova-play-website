import { useReveal } from '@/hooks/useReveal';
import { Mail, Copy, Check, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  useReveal();
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('funovaplay@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="absolute top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Contact <span className="gradient-text-main">Us</span>
          </h1>
          <p className="text-lg text-white/60 max-w-xl mx-auto">
            Have a question, feedback, or just want to say hello? We'd love to hear from you.
          </p>
        </div>

        {/* Contact card */}
        <div className="reveal">
          <div className="glass-card p-10 md:p-14 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl" />

            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-6 animate-glow-cyan">
                <Mail size={36} className="text-white" />
              </div>

              <h2 className="text-2xl font-extrabold mb-2">Email Us</h2>
              <p className="text-white/50 mb-8">
                The best way to reach us is by email. We'll get back to you as soon as possible.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:funovaplay@gmail.com"
                  className="btn-primary px-8 py-4 text-white text-sm uppercase tracking-wide flex items-center gap-2"
                >
                  <Mail size={18} />
                  funovaplay@gmail.com
                </a>
                <button
                  onClick={handleCopy}
                  className="btn-secondary px-6 py-4 text-sm uppercase tracking-wide flex items-center gap-2"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Response time note */}
        <div className="text-center mt-10 reveal">
          <div className="inline-flex items-center gap-2 text-white/40 text-sm">
            <MessageCircle size={16} />
            <span>Typical response time: 1-3 business days</span>
          </div>
        </div>
      </div>
    </div>
  );
}
