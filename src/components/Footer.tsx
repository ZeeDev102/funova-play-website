import { Mail, Gamepad2 } from 'lucide-react';
import type { Page } from './Navbar';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

const footerLinks: { label: string; page: Page }[] = [
  { label: 'Home', page: 'home' },
  { label: 'About', page: 'about' },
  { label: 'Games', page: 'games' },
  { label: 'Privacy Policy', page: 'privacy' },
  { label: 'Contact', page: 'contact' },
];

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#0a0a25]">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/ChatGPT_Image_Apr_21,_2026,_10_10_59_PM.png"
                alt="Funova Play"
                className="h-10 w-10 rounded-xl object-cover"
              />
              <span className="text-xl font-extrabold gradient-text-main">Funova Play</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              An independent game development studio creating fun, high-quality games for players worldwide.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Gamepad2 size={18} className="text-cyan-400" />
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => {
                      onNavigate(link.page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-white/50 hover:text-cyan-400 transition-colors text-sm font-semibold"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
              <Mail size={18} className="text-cyan-400" />
              Contact
            </h3>
            <a
              href="mailto:funovaplay@gmail.com"
              className="text-white/50 hover:text-cyan-400 transition-colors text-sm font-semibold"
            >
              funovaplay@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center">
          <p className="text-white/40 text-sm font-semibold">
            © 2026 Funova Play. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
