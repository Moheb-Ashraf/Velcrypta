import { Link } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import StoryCard from '../components/StoryCard';
import SectionTitle from '../components/SectionTitle';
import VelcryptaLogo from '../components/VelcryptaLogo';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSEO } from '../hooks/useSEO';
import { stories, categories, getFeaturedStories, getLatestStories } from '../data/stories';

/* ─── Typewriter ─── */
function useTypewriter(text, speed = 60, delay = 1000) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed('');
    setDone(false);
    let i = 0;
    const t = setTimeout(() => {
      const iv = setInterval(() => {
        if (i < text.length) { setDisplayed(text.slice(0, ++i)); }
        else { setDone(true); clearInterval(iv); }
      }, speed);
      return () => clearInterval(iv);
    }, delay);
    return () => clearTimeout(t);
  }, [text, speed, delay]);
  return { displayed, done };
}

/* ─── CountUp ─── */
function CountUp({ target, duration = 1800 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        if (typeof target !== 'number') { setVal(target); return; }
        const t0 = Date.now();
        const tick = () => {
          const p = Math.min((Date.now() - t0) / duration, 1);
          setVal(Math.floor((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        obs.unobserve(el);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, duration]);
  return <span ref={ref}>{typeof target === 'number' ? val : target}</span>;
}

/* ─── CategoryCard ─── */
const CAT_ICONS = { mysteries: '◈', 'true-crime': '⊕', 'dark-theories': '◉', supernatural: '◎' };

function CategoryCard({ category, index }) {
  const ref = useScrollReveal();
  return (
    <Link
      to={`/categories/${category.id}`}
      ref={ref}
      className="reveal group relative block overflow-hidden"
      style={{
        background: 'rgba(20,20,20,0.9)',
        border: '1px solid rgba(255,255,255,0.05)',
        transition: 'border-color 0.5s ease, box-shadow 0.5s ease',
        animationDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(194,169,106,0.25)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.6)'; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'; e.currentTarget.style.boxShadow = 'none'; }}
    >
      {/* hover glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500"
        style={{ background: 'radial-gradient(ellipse at top left, rgba(194,169,106,0.06) 0%, transparent 65%)' }} />
      <div className="relative p-7">
        <div className="font-gothic text-4xl text-gold/20 group-hover:text-gold/50 transition-colors duration-500 mb-5 select-none">
          {CAT_ICONS[category.id]}
        </div>
        <p className="text-gold/50 text-xs font-sans tracking-[0.2em] uppercase mb-2 group-hover:text-gold/80 transition-colors duration-400">Category</p>
        <h3 className="font-gothic text-xl font-bold text-bone group-hover:text-gold transition-colors duration-400 mb-3 leading-tight">
          {category.label}
        </h3>
        <div className="h-px w-8 bg-gold/20 group-hover:bg-gold/40 mb-4 transition-all duration-700" style={{ width: '2rem' }}
          ref={el => el && el.closest('a')?.addEventListener('mouseenter', () => el.style.width = '100%')}
        />
        <p className="text-smoke/70 text-sm font-sans leading-relaxed mb-5">{category.description}</p>
        <span className="text-gold text-xs font-sans tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          Explore →
        </span>
      </div>
      {/* bottom glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: 'linear-gradient(to right, transparent, rgba(194,169,106,0.5), transparent)' }} />
    </Link>
  );
}

/* ═══════════════════════════════════════════
   HOMEPAGE
═══════════════════════════════════════════ */
export default function HomePage() {
  useSEO({
    title: 'Velcrypta — Uncover the Hidden. Fear the Unknown.',
    description: 'Dark mystery storytelling platform. Horror, unsolved mysteries, true crime, and dark conspiracy theories.',
    keywords: 'mystery platform, horror stories, unsolved mysteries, true crime, dark theories, supernatural, Velcrypta',
    url: '/',
  });

  const featuredStories = getFeaturedStories();
  const latestStories   = getLatestStories(4);
  const heroImgRef      = useRef(null);
  const statsRef        = useScrollReveal();
  const { displayed, done } = useTypewriter('Stories hidden in the shadows...', 55, 1400);

  /* Parallax */
  useEffect(() => {
    const onScroll = () => {
      if (heroImgRef.current) {
        heroImgRef.current.style.transform = `translateY(${window.scrollY * 0.25}px) scale(1.15)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-void">

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Background image — fixed behind content */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            ref={heroImgRef}
            src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1800&q=80"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-[0.18]"
            style={{ transformOrigin: 'center top', willChange: 'transform', transform: 'scale(1.15)' }}
          />
          {/* Dark vignette layers */}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0B0B0B 0%, rgba(11,11,11,0.55) 40%, rgba(11,11,11,0.55) 70%, #0B0B0B 100%)' }} />
          <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(107,15,26,0.14) 0%, transparent 100%)' }} />
        </div>

        {/* Content — pt accounts for fixed navbar (~80px) */}
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-24 w-full max-w-4xl mx-auto">

          {/* Logo — animate in */}
          <div
            className="mb-10 animate-drift"
            style={{
              animation: 'fadeUp 1s ease 0.3s both',
              filter: 'drop-shadow(0 0 40px rgba(194,169,106,0.22)) drop-shadow(0 0 80px rgba(107,15,26,0.18))',
            }}
          >
            <VelcryptaLogo size={160} showWordmark={false} showTagline={false} />
          </div>

          {/* Main heading */}
          <div style={{ animation: 'fadeUp 1s ease 0.55s both' }}>
            <h1 className="font-gothic font-black text-bone leading-[1.05] tracking-tight"
              style={{ fontSize: 'clamp(2.8rem, 8vw, 7.5rem)' }}>
              Enter the
            </h1>
            <h1
              className="font-gothic font-black leading-[1.05] tracking-tight mb-8 glitch-title"
              data-text="Unknown"
              style={{
                fontSize: 'clamp(2.8rem, 8vw, 7.5rem)',
                WebkitTextStroke: '1px rgba(194,169,106,0.55)',
                color: 'transparent',
                textShadow: '0 0 60px rgba(194,169,106,0.18)',
              }}
            >
              Unknown
            </h1>
          </div>

          {/* Typewriter subtitle */}
          <div className="h-8 flex items-center justify-center mb-10"
            style={{ animation: 'fadeUp 1s ease 0.75s both' }}>
            <p className="font-body text-lg md:text-xl text-ash/75 italic">
              {displayed}
              {!done && <span className="typing-cursor text-gold/80 ml-0.5">|</span>}
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row items-center gap-4"
            style={{ animation: 'fadeUp 1s ease 0.95s both' }}
          >
            <Link
              to="/stories"
              className="btn-primary w-full sm:w-auto px-10 py-3.5 border border-gold/45 text-gold text-xs tracking-[0.22em] uppercase font-sans hover:bg-gold/10 hover:border-gold/80 transition-all duration-400"
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 30px rgba(194,169,106,0.18)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
            >
              Explore Stories
            </Link>
            <Link
              to="/categories"
              className="w-full sm:w-auto px-8 py-3.5 border border-white/10 text-bone/45 text-xs tracking-[0.22em] uppercase font-sans hover:border-white/25 hover:text-bone/70 transition-all duration-400"
            >
              Browse Categories
            </Link>
          </div>

          {/* Tagline */}
          <p className="mt-10 text-smoke/40 text-xs font-sans tracking-[0.22em] uppercase"
            style={{ animation: 'fadeUp 1s ease 1.1s both' }}>
            <span className="text-smoke/30">Uncover the </span>
            <span style={{ color: 'rgba(139,21,37,0.7)' }}>Hidden</span>
            <span className="text-smoke/30">. Fear the </span>
            <span style={{ color: 'rgba(139,21,37,0.7)' }}>Unknown</span>
            <span className="text-smoke/30">.</span>
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-drift pointer-events-none">
          <span className="text-smoke/40 text-xs font-sans tracking-[0.28em] uppercase">Descend</span>
          <div className="w-px h-10 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-b from-gold/50 to-transparent"
              style={{ animation: 'scanline 1.6s ease-in-out infinite' }} />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          STATS BAR
      ══════════════════════════════════════ */}
      <section
        ref={statsRef}
        className="reveal relative border-y border-gold/10 py-10 overflow-hidden"
        style={{ background: 'rgba(15,15,15,0.7)' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'repeating-linear-gradient(90deg, rgba(194,169,106,0.015) 0, transparent 1px, transparent 80px, rgba(194,169,106,0.015) 80px)' }} />
        <div className="relative z-10 max-w-5xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { target: stories.length,  label: 'Hidden Stories' },
            { target: categories.length, label: 'Dark Categories' },
            { target: '∞',              label: 'Unanswered Questions' },
            { target: 1922,             label: 'Earliest Case' },
          ].map(({ target, label }) => (
            <div key={label} className="group">
              <p className="font-gothic text-4xl font-black text-gold mb-1 group-hover:text-shadow-gold transition-all duration-300">
                <CountUp target={target} />
              </p>
              <p className="text-smoke/60 text-xs font-sans tracking-[0.16em] uppercase">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          FEATURED STORIES
      ══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          eyebrow="Featured"
          title="Stories of Darkness"
          subtitle="Curated accounts from the edges of human understanding."
        />
        {/* Big card + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 mb-3">
          <div className="lg:col-span-2 reveal">
            {featuredStories[0] && <StoryCard story={featuredStories[0]} size="large" />}
          </div>
          <div className="flex flex-col gap-3">
            {featuredStories.slice(1, 3).map((s, i) => (
              <div key={s.id} className="reveal flex-1" style={{ animationDelay: `${(i + 1) * 0.12}s` }}>
                <StoryCard story={s} />
              </div>
            ))}
          </div>
        </div>
        {/* Bottom row */}
        {featuredStories.length > 3 && (
          <div className={`grid gap-3 grid-cols-1 ${featuredStories.slice(3).length === 1 ? 'md:grid-cols-1' : 'md:grid-cols-2'}`}>
            {featuredStories.slice(3, 5).map((s, i) => (
              <div key={s.id} className="reveal" style={{ animationDelay: `${(i + 3) * 0.1}s` }}>
                <StoryCard story={s} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ══════════════════════════════════════
          CINEMATIC QUOTE BREAK
      ══════════════════════════════════════ */}
      <section className="relative h-[44vh] min-h-[280px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=1400&q=75"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover opacity-15"
          style={{ objectPosition: 'center 30%' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #0B0B0B 0%, rgba(11,11,11,0.3) 50%, #0B0B0B 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, #0B0B0B 0%, transparent 30%, transparent 70%, #0B0B0B 100%)' }} />
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center max-w-2xl">
            <p className="font-gothic text-5xl text-gold/10 mb-3 leading-none select-none">"</p>
            <blockquote className="font-gothic text-xl md:text-3xl text-bone/55 italic leading-relaxed">
              The oldest and strongest emotion of mankind is fear.
            </blockquote>
            <cite className="block mt-5 text-gold/45 text-xs font-sans tracking-[0.28em] uppercase not-italic">
              — H.P. Lovecraft
            </cite>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          LATEST STORIES
      ══════════════════════════════════════ */}
      <section style={{ background: 'rgba(13,13,13,0.6)', borderTop: '1px solid rgba(255,255,255,0.04)', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <SectionTitle eyebrow="Latest" title="Recently Unearthed" />
            <Link
              to="/stories"
              className="hidden md:flex items-center gap-2 text-gold/55 text-xs font-sans tracking-[0.2em] uppercase hover:text-gold transition-colors duration-300 group pb-1"
            >
              All Stories
              <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {latestStories.map((s, i) => (
              <div key={s.id} className="reveal" style={{ animationDelay: `${i * 0.1}s` }}>
                <StoryCard story={s} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CATEGORIES
      ══════════════════════════════════════ */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionTitle
          eyebrow="Explore"
          title="The Categories"
          subtitle="Choose your descent into the unknown."
          align="center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 50%, rgba(107,15,26,0.13) 0%, transparent 100%)' }} />
        {[15, 35, 65, 85].map(p => (
          <div key={p} className="absolute top-0 bottom-0 w-px"
            style={{ left: `${p}%`, background: 'linear-gradient(to bottom, transparent, rgba(194,169,106,0.06), transparent)' }} />
        ))}
        <div className="relative z-10 max-w-xl mx-auto px-6 text-center">
          <p className="text-gold/45 text-xs font-sans tracking-[0.28em] uppercase mb-5">The Archive Awaits</p>
          <h2 className="font-gothic text-5xl md:text-6xl font-black text-bone leading-tight mb-5">
            Are you ready
            <span className="block italic text-gold/65"> to know?</span>
          </h2>
          <p className="font-body text-xl text-ash/60 italic leading-relaxed mb-10">
            Some truths cannot be unlearned. Some doors, once opened, cannot be closed.
          </p>
          <Link
            to="/stories"
            className="btn-primary group inline-flex items-center gap-4 px-12 py-4 border border-crimson/40 text-bone/55 text-xs tracking-[0.28em] uppercase font-sans hover:border-crimson/75 hover:text-bone transition-all duration-500"
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(107,15,26,0.28)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <span>Begin Reading</span>
            <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
          </Link>
        </div>
      </section>

    </div>
  );
}