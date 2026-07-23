import { useReveal } from '@/hooks/useReveal';
import type { Page } from '@/components/Navbar';
import {
  Gamepad2, Puzzle, Swords, Mountain, Crosshair, Shield,
  Flag, Car, Brain, Boxes, Sparkles, ChevronRight,
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

const genres = [
  { name: 'Casual', icon: Gamepad2, color: 'from-cyan-400 to-blue-500' },
  { name: 'Action', icon: Swords, color: 'from-red-400 to-orange-500' },
  { name: 'Adventure', icon: Mountain, color: 'from-green-400 to-emerald-500' },
  { name: 'FPS', icon: Crosshair, color: 'from-orange-400 to-red-500' },
  { name: 'TPS', icon: Shield, color: 'from-blue-400 to-indigo-500' },
  { name: 'Fighting', icon: Swords, color: 'from-pink-400 to-rose-500' },
  { name: 'Racing', icon: Car, color: 'from-yellow-400 to-orange-500' },
  { name: 'Puzzle', icon: Puzzle, color: 'from-purple-400 to-violet-500' },
  { name: 'Strategy', icon: Brain, color: 'from-teal-400 to-cyan-500' },
  { name: '2D & 3D Games', icon: Boxes, color: 'from-fuchsia-400 to-pink-500' },
];

export default function Home({ onNavigate }: HomeProps) {
  useReveal();

  return (
    <div className="relative">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
        {/* Floating decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />

        {/* Stars */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="star-bg"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              ['--duration' as string]: `${Math.random() * 3 + 2}s`,
              ['--delay' as string]: `${Math.random() * 3}s`,
            }}
          />
        ))}

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center mb-8 animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/30 rounded-3xl blur-2xl animate-glow-cyan" />
              <img
                src="/ChatGPT_Image_Apr_21,_2026,_10_10_59_PM.png"
                alt="Funova Play"
                className="relative h-28 w-28 rounded-3xl object-cover border border-white/20"
              />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            <span className="gradient-text-main">Creating Fun Games</span>
            <br />
            <span className="text-white">for Everyone</span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
            Funova Play is an independent game development studio dedicated to crafting
            joyful, high-quality gaming experiences for players around the world.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('games')}
              className="btn-primary px-8 py-4 text-white text-sm uppercase tracking-wide flex items-center gap-2"
            >
              <Sparkles size={18} />
              Explore Games
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="btn-secondary px-8 py-4 text-sm uppercase tracking-wide"
            >
              About Us
            </button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 animate-bounce-light">
          <ChevronDown />
        </div>
      </section>

      {/* Game Genres */}
      <section className="relative py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Game Genres We <span className="gradient-text-main">Create</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              From quick casual fun to immersive 3D adventures, we build games across a wide range of genres.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {genres.map((genre, i) => {
              const Icon = genre.icon;
              return (
                <div
                  key={genre.name}
                  className="glass-card p-6 text-center hover:scale-105 hover:border-white/20 transition-all duration-300 cursor-default reveal"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${genre.color} mb-4`}>
                    <Icon size={26} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white text-sm">{genre.name}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-20 px-6">
        <div className="max-w-5xl mx-auto reveal">
          <div className="glass-card-cyan p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Ready to <span className="gradient-text-cyan">Play?</span>
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Our first games are coming soon. Stay tuned for exciting releases from Funova Play.
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-primary px-8 py-4 text-white text-sm uppercase tracking-wide"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ChevronDown() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
