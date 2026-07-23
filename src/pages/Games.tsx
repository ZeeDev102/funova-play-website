import { useReveal } from '@/hooks/useReveal';
import { Clock, Gamepad2, Sparkles } from 'lucide-react';

const games = [
  {
    title: 'Project Nova',
    genre: 'Action / Adventure',
    description: 'An epic journey through vibrant worlds filled with challenges and discovery.',
    image: 'https://images.pexels.com/photos/1671325/pexels-photo-1671325.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    title: 'Puzzle Quest',
    genre: 'Puzzle / Casual',
    description: 'A delightful brain-teasing experience with hundreds of colorful levels.',
    image: 'https://images.pexels.com/photos/2698878/pexels-photo-2698878.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-purple-500/30 to-pink-500/30',
  },
  {
    title: 'Turbo Racers',
    genre: 'Racing',
    description: 'High-speed arcade racing with stunning tracks and thrilling competition.',
    image: 'https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-orange-500/30 to-red-500/30',
  },
  {
    title: 'Battle Arena',
    genre: 'Fighting',
    description: 'A fast-paced fighting game with unique characters and dynamic combat.',
    image: 'https://images.pexels.com/photos/2118075/pexels-photo-2118075.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-green-500/30 to-emerald-500/30',
  },
  {
    title: 'Skyward Saga',
    genre: 'Adventure / Strategy',
    description: 'Build, explore, and conquer in a beautifully crafted fantasy world.',
    image: 'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-teal-500/30 to-cyan-500/30',
  },
  {
    title: 'Shadow Strike',
    genre: 'FPS / TPS',
    description: 'An intense tactical shooter with immersive gameplay and strategic depth.',
    image: 'https://images.pexels.com/photos/2024097/pexels-photo-2024097.jpeg?auto=compress&cs=tinysrgb&w=800',
    gradient: 'from-fuchsia-500/30 to-violet-500/30',
  },
];

export default function Games() {
  useReveal();

  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="absolute top-32 left-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-4">
            Our Games
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Upcoming <span className="gradient-text-main">Releases</span>
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We're working hard on our first lineup of games. Here's a sneak peek at what's coming soon.
          </p>
        </div>

        {/* Games grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, i) => (
            <div
              key={game.title}
              className="glass-card overflow-hidden group hover:scale-[1.03] transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${game.gradient} mix-blend-overlay`} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f2e] via-transparent to-transparent" />
                <div className="absolute top-4 right-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs font-bold text-yellow-400">
                    <Clock size={12} />
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                  {game.genre}
                </span>
                <h3 className="text-xl font-extrabold mb-2 group-hover:text-cyan-400 transition-colors">
                  {game.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{game.description}</p>
                <div className="flex items-center gap-2 text-white/30 text-xs font-semibold">
                  <Gamepad2 size={14} />
                  <span>In Development</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="text-center mt-16 reveal">
          <div className="glass-card-cyan p-10 max-w-2xl mx-auto">
            <Sparkles className="mx-auto mb-4 text-cyan-400" size={32} />
            <h2 className="text-2xl font-extrabold mb-3">More Games on the Way</h2>
            <p className="text-white/50">
              We're constantly exploring new ideas and genres. Follow Funova Play for updates on upcoming releases.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
