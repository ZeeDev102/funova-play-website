import { useReveal } from '@/hooks/useReveal';
import type { Page } from '@/components/Navbar';
import { Target, Eye, Heart, Users, Globe, Sparkles } from 'lucide-react';

interface AboutProps {
  onNavigate: (page: Page) => void;
}

export default function About({ onNavigate }: AboutProps) {
  useReveal();

  const values = [
    {
      icon: Heart,
      title: 'Passion for Fun',
      desc: 'We believe games should bring joy. Every project we undertake is driven by a love for play.',
      color: 'from-pink-400 to-rose-500',
    },
    {
      icon: Target,
      title: 'Quality First',
      desc: 'We hold ourselves to a high standard, polishing every detail to deliver experiences players love.',
      color: 'from-cyan-400 to-blue-500',
    },
    {
      icon: Users,
      title: 'Player-Centric',
      desc: 'Our players are at the heart of every decision. We listen, adapt, and build for the community.',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: Globe,
      title: 'For Everyone',
      desc: 'We create games that are accessible and enjoyable for players of all ages and backgrounds.',
      color: 'from-purple-400 to-violet-500',
    },
  ];

  return (
    <div className="relative pt-32 pb-20 px-6">
      {/* Decorative blobs */}
      <div className="absolute top-32 right-10 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-bold uppercase tracking-wider mb-4">
            About Us
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            We Are <span className="gradient-text-main">Funova Play</span>
          </h1>
          <p className="text-lg text-white/60 max-w-3xl mx-auto leading-relaxed">
            Funova Play is an independent game development studio on a mission to create fun,
            high-quality games for players worldwide. We believe great games come from a passion
            for play, a commitment to quality, and a deep respect for the people who enjoy our work.
          </p>
        </div>

        {/* Logo showcase */}
        <div className="flex justify-center mb-16 reveal">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-2xl animate-glow-cyan" />
            <img
              src="/ChatGPT_Image_Apr_21,_2026,_10_10_59_PM.png"
              alt="Funova Play"
              className="relative h-32 w-32 rounded-3xl object-cover border border-white/20"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="glass-card-cyan p-8 reveal-left">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 mb-4">
              <Target size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-extrabold mb-3">Our Mission</h2>
            <p className="text-white/60 leading-relaxed">
              To create fun, high-quality games that bring joy to players around the world.
              We strive to build experiences that are accessible, engaging, and memorable for everyone.
            </p>
          </div>
          <div className="glass-card-purple p-8 reveal-right">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-400 to-pink-500 mb-4">
              <Eye size={24} className="text-white" />
            </div>
            <h2 className="text-2xl font-extrabold mb-3">Our Vision</h2>
            <p className="text-white/60 leading-relaxed">
              To be a globally recognized independent studio known for crafting games that players
              love and remember. We want every Funova Play title to feel like a celebration of play.
            </p>
          </div>
        </div>

        {/* Values grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-extrabold text-center mb-10 reveal">
            What We <span className="gradient-text-main">Value</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="glass-card p-6 flex items-start gap-4 hover:scale-[1.02] transition-transform duration-300 reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className={`flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${value.color}`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{value.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center reveal">
          <div className="glass-card p-10 max-w-2xl mx-auto">
            <Sparkles className="mx-auto mb-4 text-cyan-400" size={32} />
            <h2 className="text-2xl font-extrabold mb-3">Want to see what we're building?</h2>
            <p className="text-white/50 mb-6">Check out our upcoming games and stay tuned for releases.</p>
            <button
              onClick={() => onNavigate('games')}
              className="btn-primary px-8 py-4 text-white text-sm uppercase tracking-wide"
            >
              View Games
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
