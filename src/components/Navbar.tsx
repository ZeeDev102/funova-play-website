import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

export type Page = 'home' | 'about' | 'games' | 'privacy' | 'contact';

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const navItems: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Games', page: 'games' },
  { label: 'Privacy Policy', page: 'privacy' },
  { label: 'Contact', page: 'contact' },
];

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavigate = (page: Page) => {
    onNavigate(page);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#08081e]/90 backdrop-blur-xl border-b border-white/10 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <button onClick={() => handleNavigate('home')} className="flex items-center gap-3 group">
          <img
            src="/ChatGPT_Image_Apr_21,_2026,_10_10_59_PM.png"
            alt="Funova Play"
            className="h-10 w-10 rounded-xl object-cover transition-transform group-hover:scale-110"
          />
          <span className="text-xl font-extrabold gradient-text-main">Funova Play</span>
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavigate(item.page)}
              className={`nav-link text-sm uppercase tracking-wide ${
                currentPage === item.page ? 'active text-white' : 'text-white/70 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[#0f0f2e]/95 backdrop-blur-xl border-t border-white/10 mt-3">
          <div className="px-6 py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavigate(item.page)}
                className={`text-left py-2 font-bold ${
                  currentPage === item.page ? 'text-cyan-400' : 'text-white/70'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
