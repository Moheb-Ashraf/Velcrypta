import { useState } from 'react';
import { Link } from 'react-router-dom';
import StoryCard from '../components/StoryCard';
import { stories, categories } from '../data/stories';
import { useSEO, breadcrumbSchema } from '../hooks/useSEO';

export default function StoriesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useSEO({
    title: 'All Stories — Mysteries, True Crime & Horror',
    description: 'Browse the complete Velcrypta archive. Unsolved mysteries, true crime cases, dark theories, supernatural encounters, and horror stories. Dyatlov Pass, Flight 19, Hinterkaifeck, and more.',
    keywords: 'mystery stories archive, horror stories, true crime archive, unsolved cases, supernatural stories, dark theories, Dyatlov Pass, Flight 19, Hinterkaifeck murders',
    url: '/stories',
    structuredData: breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Stories', path: '/stories' },
    ])
  });

  const filtered = stories.filter(s => {
    const matchCat = activeCategory === 'all' || s.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q || s.title.toLowerCase().includes(q) || s.excerpt.toLowerCase().includes(q) || s.categoryLabel.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-void pt-24">
      {/* Header */}
      <div className="relative border-b border-white/5 pb-14 pt-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(194,169,106,0.04) 0%, transparent 100%)' }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-smoke/50 text-xs font-sans tracking-widest uppercase mb-8"
            aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold/60 transition-colors">Home</Link>
            <span className="text-smoke/30">›</span>
            <span className="text-ash/60">Stories</span>
          </nav>
          <p className="text-gold/60 text-xs tracking-[0.28em] uppercase font-sans mb-3">Archive</p>
          <h1 className="font-gothic text-5xl md:text-6xl font-black text-bone mb-4 leading-tight">
            All Stories
          </h1>
          <p className="text-ash/60 font-sans text-base max-w-xl leading-relaxed mb-2">
            Every account of the inexplicable, unsolved, and deeply disturbing — collected in one place.
          </p>
          <div className="mt-5 h-px w-16 bg-gold/40" />
        </div>
      </div>

      {/* Search + Filter bar */}
      <div className="sticky top-[60px] z-40 border-b border-white/5"
        style={{ background: 'rgba(11,11,11,0.97)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          {/* Search */}
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search stories…"
              className="w-full bg-crypt/60 border border-white/10 text-bone/80 placeholder:text-smoke/40 text-sm font-sans px-4 py-2.5 pl-9 focus:outline-none focus:border-gold/40 transition-colors duration-300"
              style={{ letterSpacing: '0.02em' }}
            />
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-smoke/40 text-sm">🔍</span>
          </div>
          {/* Category tabs */}
          <div className="flex items-center gap-0 overflow-x-auto">
            {[{ id: 'all', label: `All (${stories.length})` }, ...categories.map(c => ({ id: c.id, label: `${c.label} (${stories.filter(s => s.category === c.id).length})` }))].map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className={`flex-shrink-0 px-4 py-3 text-xs font-sans tracking-[0.15em] uppercase border-b-2 transition-all duration-300 ${
                  activeCategory === id ? 'border-gold text-gold' : 'border-transparent text-smoke hover:text-ash'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <p className="font-gothic text-3xl text-ash/50 mb-4">Nothing found in the dark.</p>
            <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
              className="text-gold text-sm font-sans underline">Clear filters</button>
          </div>
        ) : (
          <>
            <p className="text-smoke/50 text-xs font-sans tracking-wider mb-8 uppercase">
              {filtered.length} {filtered.length === 1 ? 'story' : 'stories'} found
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {filtered.map((story, i) => (
                <div key={story.id}
                  style={{ opacity: 0, animation: `fadeIn 0.6s ease ${Math.min(i, 8) * 0.07}s forwards` }}>
                  <StoryCard story={story} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
