import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import StoryCard from '../components/StoryCard';
import { stories, categories, getStoriesByCategory } from '../data/stories';
import { useSEO, breadcrumbSchema } from '../hooks/useSEO';

const categoryIcons = { mysteries: '◈', 'true-crime': '⊕', 'dark-theories': '◉', supernatural: '◎' };

export default function CategoryPage() {
  const { id } = useParams();
  const [activeFilter, setActiveFilter] = useState(id || 'all');
  const category = categories.find(c => c.id === id);
  const isAllPage = !id;
  const displayedStories = activeFilter === 'all' ? stories : getStoriesByCategory(activeFilter);

  useSEO({
    title: isAllPage ? 'Categories — Browse by Theme' : `${category?.label} — ${category?.description?.slice(0, 60)}`,
    description: isAllPage
      ? 'Explore Velcrypta by category: Mysteries, True Crime, Dark Theories, and Supernatural stories. Find the darkness that calls to you.'
      : `${category?.description} Browse all ${category?.label?.toLowerCase()} stories on Velcrypta.`,
    keywords: isAllPage
      ? 'mystery categories, horror categories, true crime, dark theories, supernatural, unsolved mysteries'
      : `${category?.label?.toLowerCase()}, ${id?.replace('-', ' ')}, horror stories, Velcrypta ${category?.label?.toLowerCase()}`,
    url: isAllPage ? '/categories' : `/categories/${id}`,
    structuredData: breadcrumbSchema([
      { name: 'Home', path: '/' },
      { name: 'Categories', path: '/categories' },
      ...(category ? [{ name: category.label, path: `/categories/${id}` }] : []),
    ])
  });

  return (
    <div className="min-h-screen bg-void pt-24">
      {/* Header */}
      <div className="relative border-b border-white/5 pb-16 pt-10 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 70% 50% at 30% 50%, rgba(107,15,26,0.08) 0%, transparent 100%)` }} />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <nav className="flex items-center gap-2 text-smoke/50 text-xs font-sans tracking-widest uppercase mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold/60 transition-colors">Home</Link>
            <span className="text-smoke/30">›</span>
            <Link to="/categories" className="hover:text-gold/60 transition-colors">Categories</Link>
            {category && <>
              <span className="text-smoke/30">›</span>
              <span className="text-ash/60">{category.label}</span>
            </>}
          </nav>

          <div className="flex items-start gap-6">
            {!isAllPage && category && (
              <div className="text-6xl font-gothic text-gold/25 mt-1 flex-shrink-0 select-none">
                {categoryIcons[category.id]}
              </div>
            )}
            <div>
              <p className="text-gold/60 text-xs tracking-[0.28em] uppercase font-sans mb-3">
                {isAllPage ? 'Browse' : 'Category'}
              </p>
              <h1 className="font-gothic text-5xl md:text-6xl font-black text-bone mb-4 leading-tight">
                {isAllPage ? 'Categories' : category?.label}
              </h1>
              {!isAllPage && category && (
                <p className="text-ash/60 font-sans text-base max-w-xl leading-relaxed">
                  {category.description}
                </p>
              )}
              <div className="mt-5 h-px w-16 bg-gold/40" />
            </div>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="border-b border-white/5 sticky top-[60px] z-40"
        style={{ background: 'rgba(11,11,11,0.97)', backdropFilter: 'blur(20px)' }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center overflow-x-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`flex-shrink-0 px-5 py-4 text-xs font-sans tracking-[0.15em] uppercase border-b-2 transition-all duration-300 ${activeFilter === 'all' ? 'border-gold text-gold' : 'border-transparent text-smoke hover:text-ash'}`}
            >
              All ({stories.length})
            </button>
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveFilter(cat.id)}
                className={`flex-shrink-0 px-5 py-4 text-xs font-sans tracking-[0.15em] uppercase border-b-2 transition-all duration-300 ${activeFilter === cat.id ? 'border-gold text-gold' : 'border-transparent text-smoke hover:text-ash'}`}
              >
                {cat.label} ({getStoriesByCategory(cat.id).length})
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* If showing categories overview (no id), show category cards */}
      {isAllPage && activeFilter === 'all' && (
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mb-16">
            {categories.map((cat, i) => {
              const catStories = getStoriesByCategory(cat.id);
              return (
                <Link key={cat.id} to={`/categories/${cat.id}`}
                  className="group relative p-8 border border-white/5 hover:border-gold/25 bg-crypt/50 overflow-hidden transition-all duration-500"
                  style={{ animationDelay: `${i * 0.1}s` }}>
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600"
                    style={{ background: 'radial-gradient(ellipse at top left, rgba(194,169,106,0.05) 0%, transparent 70%)' }} />
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-5xl font-gothic text-gold/20 group-hover:text-gold/40 transition-colors duration-400">{categoryIcons[cat.id]}</span>
                    <span className="text-smoke/40 text-xs font-sans">
                      {catStories.length} {catStories.length === 1 ? 'story' : 'stories'}
                    </span>
                  </div>
                  <h2 className="font-gothic text-3xl font-bold text-bone group-hover:text-gold transition-colors duration-400 mb-3">{cat.label}</h2>
                  <p className="text-smoke text-sm font-sans leading-relaxed mb-6">{cat.description}</p>
                  {/* Preview thumbnails */}
                  <div className="flex gap-2 mb-6">
                    {catStories.slice(0, 3).map(s => (
                      <div key={s.id} className="w-14 h-10 overflow-hidden flex-shrink-0 border border-white/5">
                        <img src={s.image} alt="" aria-hidden className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                      </div>
                    ))}
                  </div>
                  <span className="text-gold/0 group-hover:text-gold text-xs font-sans tracking-[0.2em] uppercase transition-all duration-400">
                    Explore {cat.label} →
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      )}

      {/* Stories grid */}
      {(!isAllPage || activeFilter !== 'all') && (
        <div className="max-w-6xl mx-auto px-6 py-16">
          {displayedStories.length === 0 ? (
            <div className="text-center py-24">
              <p className="font-gothic text-3xl text-ash/40 mb-4">Nothing found.</p>
              <button onClick={() => setActiveFilter('all')} className="text-gold text-sm underline font-sans">Show all</button>
            </div>
          ) : (
            <>
              <p className="text-smoke/50 text-xs font-sans tracking-wider mb-8 uppercase">
                {displayedStories.length} {displayedStories.length === 1 ? 'story' : 'stories'}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {displayedStories.map((story, i) => (
                  <div key={story.id}
                    style={{ opacity: 0, animation: `fadeIn 0.6s ease ${Math.min(i, 8) * 0.07}s forwards` }}>
                    <StoryCard story={story} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}

      {/* Other categories */}
      {!isAllPage && (
        <section className="border-t border-white/5 py-16 bg-crypt/20">
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-gold/50 text-xs tracking-[0.25em] uppercase font-sans mb-6">Other Categories</p>
            <div className="flex flex-wrap gap-3">
              {categories.filter(c => c.id !== id).map(cat => (
                <Link key={cat.id} to={`/categories/${cat.id}`}
                  className="group flex items-center gap-2 px-5 py-3 border border-white/8 hover:border-gold/35 text-ash/70 hover:text-gold transition-all duration-400 text-sm font-sans">
                  <span className="text-sm">{categoryIcons[cat.id]}</span>
                  {cat.label}
                  <span className="text-smoke/40 text-xs">({getStoriesByCategory(cat.id).length})</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
