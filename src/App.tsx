import { useState, useEffect } from 'react';
import Navbar, { type Page } from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Games from '@/pages/Games';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Contact from '@/pages/Contact';

function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [page]);

  return (
    <div className="min-h-screen bg-[#08081e] text-white">
      <Navbar currentPage={page} onNavigate={setPage} />
      <main>
        {page === 'home' && <Home onNavigate={setPage} />}
        {page === 'about' && <About onNavigate={setPage} />}
        {page === 'games' && <Games />}
        {page === 'privacy' && <PrivacyPolicy />}
        {page === 'contact' && <Contact />}
      </main>
      <Footer onNavigate={setPage} />
    </div>
  );
}

export default App;
