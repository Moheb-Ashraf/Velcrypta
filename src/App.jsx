import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CinematicCursor from './components/CinematicCursor';
import HomePage from './pages/HomePage';
import StoryPage from './pages/StoryPage';
import CategoryPage from './pages/CategoryPage';
import StoriesPage from './pages/StoriesPage';
import { useSEO } from './hooks/useSEO';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); }, [pathname]);
  return null;
}

function NotFound() {
  useSEO({ title: 'Page Not Found', description: 'This page has vanished without a trace.' });
  return (
    <div className="min-h-screen flex items-center justify-center text-center px-6 pt-20">
      <div>
        <p className="text-gold/40 text-xs tracking-[0.3em] uppercase font-sans mb-4">Error 404</p>
        <h1 className="font-gothic text-6xl font-black text-bone mb-4">Lost in the Dark</h1>
        <p className="text-ash/60 font-body text-xl italic mb-10">This page vanished without a trace.</p>
        <a href="/"
          className="btn-primary px-10 py-4 border border-gold/30 text-gold/70 text-xs tracking-[0.25em] uppercase font-sans hover:text-gold hover:border-gold/60 transition-all duration-400">
          Return to Safety
        </a>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <div className="min-h-screen bg-void text-bone">
      {/* Global cinematic overlays */}
      <div className="grain" aria-hidden="true" />
      <div className="vignette" aria-hidden="true" />

      {/* Cinematic cursor — desktop only */}
      <div className="hidden md:block">
        <CinematicCursor />
      </div>

      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stories" element={<StoriesPage />} />
          <Route path="/story/:id" element={<StoryPage />} />
          <Route path="/categories" element={<CategoryPage />} />
          <Route path="/categories/:id" element={<CategoryPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout />
    </BrowserRouter>
  );
}
