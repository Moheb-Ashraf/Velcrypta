import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import VelcryptaLogo from './VelcryptaLogo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/stories', label: 'Stories' },
    { to: '/categories', label: 'Categories' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled ? 'py-2 border-b border-gold/10' : 'py-4'}`}
      style={{
        background: scrolled ? 'rgba(11,11,11,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(0.7)' : 'none',
      }}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-3 relative" aria-label="Velcrypta Home">
          <div className="transition-all duration-500 group-hover:drop-shadow-[0_0_12px_rgba(194,169,106,0.5)]">
            <VelcryptaLogo size={40} showWordmark={false} />
          </div>
          <span
            className="font-gothic text-base font-bold tracking-[0.22em] text-bone group-hover:text-gold transition-colors duration-500 hidden sm:block"
            style={{ letterSpacing: '0.22em' }}
          >
            VELCRYPTA
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link font-sans text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                location.pathname === to ? 'text-gold' : 'text-ash hover:text-bone'
              }`}
            >
              {label}
            </Link>
          ))}
          <Link
            to="/stories"
            className="btn-primary group relative px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-sans border border-gold/30 text-gold/80 hover:text-gold hover:border-gold/70 transition-all duration-400 overflow-hidden"
          >
            <span className="relative z-10">Enter</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2 z-50"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block h-px bg-gold transition-all duration-400 ${menuOpen ? 'w-6 rotate-45 translate-y-[9px]' : 'w-6'}`} />
          <span className={`block h-px bg-gold transition-all duration-300 w-4 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-px bg-gold transition-all duration-400 ${menuOpen ? 'w-6 -rotate-45 -translate-y-[9px]' : 'w-6'}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-500"
        style={{ maxHeight: menuOpen ? '320px' : '0', opacity: menuOpen ? 1 : 0 }}
      >
        <div className="border-t border-gold/10 px-6 py-8 flex flex-col gap-6"
          style={{ background: 'rgba(11,11,11,0.99)', backdropFilter: 'blur(20px)' }}>
          {/* Logo in mobile menu */}
          <div className="flex justify-center mb-2">
            <VelcryptaLogo size={80} showWordmark={true} showTagline={false} />
          </div>
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`font-gothic text-2xl font-bold tracking-wider transition-colors duration-300 ${
                location.pathname === to ? 'text-gold' : 'text-ash hover:text-bone'
              }`}
            >
              {label}
            </Link>
          ))}
          <div className="divider-gold" />
          <Link to="/stories" className="text-gold text-xs font-sans tracking-[0.25em] uppercase">
            → Enter the Archive
          </Link>
        </div>
      </div>
    </header>
  );
}
