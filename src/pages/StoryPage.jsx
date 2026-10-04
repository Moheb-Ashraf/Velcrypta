import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import StoryCard from '../components/StoryCard';
import ReadingProgress from '../components/ReadingProgress';
import { getStoryById, getRelatedStories, stories } from '../data/stories';
import { useSEO, storySchema, breadcrumbSchema } from '../hooks/useSEO';
import { useLanguage } from '../context/LanguageContext';

function ParagraphBlock({ text, index }) {
  const ref = useRef(null);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      onClick={() => setHighlighted(h => !h)}
      className={`story-paragraph ${highlighted ? 'highlighted' : ''}`}
      style={{
        opacity: 0,
        transform: 'translateY(20px)',
        transition: `opacity 0.8s ease ${index * 0.06}s, transform 0.8s ease ${index * 0.06}s, color 0.4s ease, border-color 0.4s ease, padding-left 0.4s ease, background 0.4s ease`,
        cursor: 'pointer',
      }}
      title="Click to highlight"
    >
      {text}
    </p>
  );
}

function TableOfContents({ items }) {
  const { lang } = useLanguage();
  return (
    <nav className="mb-12 p-6 border border-gold/15 bg-crypt/60 relative overflow-hidden"
      aria-label="Table of contents">
      <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold/60 via-crimson/40 to-transparent" />
      <p className="text-gold/70 text-xs font-sans tracking-[0.25em] uppercase mb-4 pl-3">
        {lang === 'ar' ? 'محتويات القصة' : 'In This Story'}
      </p>
      <ul className="space-y-2 pl-3">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-3">
            <span className="text-gold/30 text-xs font-gothic">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="text-smoke text-sm font-body italic leading-snug">
              {item.length > 80 ? item.slice(0, 80) + '…' : item}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default function StoryPage() {
  const { id } = useParams();
  const story = getStoryById(id);
  const navigate = useNavigate();
  const { lang, t } = useLanguage();
  const [votedOption, setVotedOption] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const articleRef = useRef(null);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const title = lang === 'ar' && story?.titleAr ? story.titleAr : story?.title;
  const subtitle = lang === 'ar' && story?.subtitleAr ? story.subtitleAr : story?.subtitle;
  const excerpt = lang === 'ar' && story?.excerptAr ? story.excerptAr : story?.excerpt;
  const content = lang === 'ar' && story?.contentAr ? story.contentAr : story?.content;
  const categoryLabel = lang === 'ar' && story?.categoryLabelAr ? story.categoryLabelAr : story?.categoryLabel;
  const keywords = lang === 'ar' ? story?.seoKeywordsAr : story?.seoKeywordsEn;

  useSEO(story ? {
    title: title,
    description: excerpt,
    keywords: keywords || `${title}, ${categoryLabel}, unsolved mystery, horror story, true crime, Velcrypta`,
    image: story.image,
    url: `/story/${story.id}`,
    type: 'article',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [
        storySchema(story),
        breadcrumbSchema([
          { name: t('home'), path: '/' },
          { name: t('stories'), path: '/stories' },
          { name: categoryLabel, path: `/categories/${story.category}` },
          { name: title, path: `/story/${story.id}` },
        ])
      ]
    }
  } : { title: 'Story Not Found' });

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center text-bone pt-20">
        <div className="text-center">
          <p className="text-gold/50 text-xs font-sans tracking-widest uppercase mb-4">404</p>
          <p className="font-gothic text-4xl mb-4 text-bone/80">Story not found.</p>
          <Link to="/stories" className="text-gold text-sm font-sans underline hover:text-gold/70 transition-colors">
            Browse all stories →
          </Link>
        </div>
      </div>
    );
  }

  const relatedStories = getRelatedStories(story.relatedIds);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  const handleRandomStory = () => {
    const otherStories = stories.filter(s => s.id !== story.id);
    const random = otherStories[Math.floor(Math.random() * otherStories.length)];
    if (random) navigate(`/story/${random.id}`);
  };

  return (
    <div className="min-h-screen bg-void">
      <ReadingProgress />

      {/* ─── CINEMATIC HERO ─── */}
      <div className="relative h-[75vh] md:h-[85vh] overflow-hidden">
        {/* Parallax image */}
        <img
          src={story.image}
          alt={title}
          className="w-full h-full object-cover opacity-35"
          style={{ transform: 'scale(1.08)', transformOrigin: 'center center' }}
        />
        {/* Multi-layer atmospheric overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/55 to-void/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/60 via-transparent to-void/60" />
        <div className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 80%, rgba(107,15,26,0.18) 0%, transparent 100%)' }} />

        {/* Scan line */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
          <div className="scanline" />
        </div>

        {/* Bottom fade to pure black */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-void to-transparent" />

        {/* Breadcrumb */}
        <div className="absolute top-28 left-0 right-0 px-8 md:px-16">
          <div className="max-w-4xl mx-auto">
            <nav className="flex items-center gap-2 text-smoke/60 text-xs font-sans tracking-widest uppercase"
              aria-label="Breadcrumb">
              <Link to="/" className="hover:text-gold/70 transition-colors duration-300">{t('home')}</Link>
              <span className="text-smoke/30">›</span>
              <Link to="/stories" className="hover:text-gold/70 transition-colors duration-300">{t('stories')}</Link>
              <span className="text-smoke/30">›</span>
              <Link to={`/categories/${story.category}`} className="hover:text-gold/70 transition-colors duration-300">{categoryLabel}</Link>
              <span className="text-smoke/30">›</span>
              <span className="text-smoke/40 truncate max-w-32">{title}</span>
            </nav>
          </div>
        </div>

        {/* Story meta & title */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-16 pb-12">
          <div className="max-w-4xl mx-auto">
            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <Link
                to={`/categories/${story.category}`}
                className="category-pill px-3 py-1 bg-crimson/80 hover:bg-crimson text-bone/80 hover:text-bone transition-colors duration-300"
              >
                {categoryLabel}
              </Link>
              <span className="text-smoke text-xs font-sans">{story.date}</span>
              <span className="text-smoke/30 text-xs">·</span>
              <span className="text-smoke text-xs font-sans">{story.readTime} {t('readTime')}</span>
              <span className="text-smoke/30 text-xs">·</span>
              <span className="text-smoke text-xs font-sans">{content?.length || 0} {lang === 'ar' ? 'أجزاء' : 'sections'}</span>
            </div>

            {/* Title */}
            <h1
              className="font-gothic font-black text-bone leading-[1.1] mb-4"
              style={{
                fontSize: 'clamp(2rem, 5vw, 4.2rem)',
                textShadow: '0 2px 40px rgba(0,0,0,0.9), 0 0 80px rgba(0,0,0,0.5)',
              }}
            >
              {title}
            </h1>
            <p className="font-body text-lg md:text-xl text-ash/80 italic leading-relaxed max-w-2xl">
              {subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* ─── ARTICLE LAYOUT ─── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* ── LEFT SIDEBAR ── */}
          <aside className="hidden lg:block lg:col-span-2">
            <div className="sticky top-28 flex flex-col items-center gap-6">
              {/* Back */}
              <Link to="/stories"
                className="flex flex-col items-center gap-2 text-smoke/50 hover:text-gold transition-colors duration-300 group"
                aria-label="Back to stories">
                <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
                <span className="text-xs font-sans tracking-widest uppercase"
                  style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
                  {t('backToStories')}
                </span>
              </Link>
              <div className="w-px h-16 bg-gold/15" />

              {/* Random story button */}
              <button
                onClick={handleRandomStory}
                className="p-2 border border-gold/30 rounded text-gold hover:bg-gold/10 text-xs transition-colors"
                title={t('randomStory')}
              >
                🎲
              </button>
            </div>
          </aside>

          {/* ── MAIN ARTICLE ── */}
          <article ref={articleRef} className="lg:col-span-7">
            {/* Mobile back */}
            <div className="flex items-center justify-between lg:hidden mb-8">
              <Link to="/stories"
                className="flex items-center gap-2 text-smoke/50 text-xs font-sans tracking-widest uppercase hover:text-gold transition-colors duration-300">
                {t('backToStories')}
              </Link>
              <button
                onClick={handleRandomStory}
                className="px-3 py-1 text-xs border border-gold/40 text-gold rounded"
              >
                {t('randomStory')}
              </button>
            </div>

            {/* Opening ornament */}
            <div className="flex items-center gap-6 mb-12">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgba(194,169,106,0.4))' }} />
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-flicker flex-shrink-0">
                <polygon points="12,2 22,20 2,20" stroke="#C2A96A" strokeWidth="1" fill="none" opacity="0.7" />
                <circle cx="12" cy="13" r="2.5" fill="#C2A96A" opacity="0.8" />
              </svg>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgba(194,169,106,0.4))' }} />
            </div>

            {/* Table of contents */}
            {content?.length > 3 && (
              <TableOfContents items={content.map(p => p.slice(0, 90))} />
            )}

            {/* Lead / excerpt */}
            <p className="font-body text-2xl text-bone/90 leading-[1.85] mb-10 italic"
              style={{
                borderLeft: lang === 'ar' ? 'none' : '3px solid rgba(107,15,26,0.6)',
                borderRight: lang === 'ar' ? '3px solid rgba(107,15,26,0.6)' : 'none',
                paddingLeft: lang === 'ar' ? '0' : '1.5rem',
                paddingRight: lang === 'ar' ? '1.5rem' : '0',
              }}>
              {excerpt}
            </p>

            <div className="divider-gold mb-12" />

            {/* Content paragraphs */}
            <div>
              {content?.map((para, i) => (
                <ParagraphBlock key={i} text={para} index={i} />
              ))}
            </div>

            {/* Hint */}
            <p className="text-smoke/30 text-xs font-sans italic text-center mt-4 mb-8">
              {lang === 'ar' ? 'اضغط على أي فقرة لتمييزها وتحديدها' : 'Click any paragraph to highlight it'}
            </p>

            {/* Social Share Bar */}
            <div className="my-10 p-6 border border-gold/20 bg-crypt/50 rounded flex flex-wrap items-center justify-between gap-4">
              <span className="text-gold/80 text-xs font-sans tracking-wider font-bold">
                {t('shareStory')}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(`${title} — ${window.location.href}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-green-900/40 hover:bg-green-800/60 text-green-400 text-xs border border-green-700/50 rounded transition-all"
                >
                  WhatsApp
                </a>
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-blue-950/40 hover:bg-blue-900/60 text-blue-400 text-xs border border-blue-700/50 rounded transition-all"
                >
                  X (Twitter)
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 bg-indigo-950/40 hover:bg-indigo-900/60 text-indigo-400 text-xs border border-indigo-700/50 rounded transition-all"
                >
                  Facebook
                </a>
                <button
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 bg-gold/10 hover:bg-gold/20 text-gold text-xs border border-gold/40 rounded transition-all"
                >
                  {copiedLink ? (lang === 'ar' ? 'تم النسخ!' : 'Copied!') : (lang === 'ar' ? 'نسخ الرابط' : 'Copy Link')}
                </button>
              </div>
            </div>

            {/* Interactive Theory Vote */}
            <div className="my-12 p-8 border border-crimson/40 bg-void/80 rounded relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-crimson/10 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-gothic text-xl text-bone font-bold mb-2">
                {t('voteTheory')}
              </h3>
              <p className="text-ash text-xs mb-6">
                {lang === 'ar'
                  ? 'شاركنا رأيك ونظريتك حول السر الأكبر في هذه القصة:'
                  : 'Cast your vote on what truly happened in this cold case:'}
              </p>

              <div className="space-y-3 mb-6">
                {[
                  lang === 'ar' ? 'ظاهرة خارقة للطبيعة لا يفسرها العلم' : 'Supernatural phenomenon beyond current science',
                  lang === 'ar' ? 'مؤامرة حكومية سرية وجريمة مدبرة' : 'Covert government conspiracy or planned crime',
                  lang === 'ar' ? 'حادث طبيعي مأساوي تم تهويله' : 'Tragic natural occurrence distorted over time',
                  lang === 'ar' ? 'سر آخر لم يكتشف بعد' : 'Something completely unknown yet to be discovered'
                ].map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setVotedOption(idx)}
                    className={`w-full text-left px-4 py-3 rounded border text-sm transition-all duration-300 flex items-center justify-between ${
                      votedOption === idx
                        ? 'border-gold bg-gold/10 text-gold font-bold'
                        : 'border-white/10 bg-crypt/40 text-bone/80 hover:border-gold/40'
                    }`}
                  >
                    <span>{opt}</span>
                    {votedOption === idx && <span className="text-gold font-bold">✓</span>}
                  </button>
                ))}
              </div>

              {votedOption !== null && (
                <div className="p-3 bg-gold/10 border border-gold/30 rounded text-gold text-xs text-center font-bold">
                  {t('voted')}
                </div>
              )}
            </div>

            {/* Closing ornament */}
            <div className="flex items-center gap-6 mt-14">
              <div className="h-px flex-1 bg-gold/15" />
              <span className="font-gothic text-2xl text-gold/50 animate-flicker">✦</span>
              <div className="h-px flex-1 bg-gold/15" />
            </div>

            {/* End-of-story CTA */}
            <div className="mt-12 p-8 border border-white/5 bg-crypt/40 text-center">
              <p className="text-smoke text-sm font-sans mb-4">
                {lang === 'ar' ? 'المزيد من القضايا الغامضة تنتظرك في الأرشيف.' : 'More awaits in the archive.'}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/stories"
                  className="btn-primary inline-block px-8 py-3 border border-gold/30 text-gold/70 text-xs tracking-[0.2em] uppercase font-sans hover:border-gold/60 hover:text-gold transition-all duration-400">
                  {t('allStories')}
                </Link>
                <button
                  onClick={handleRandomStory}
                  className="px-6 py-3 border border-crimson/40 text-bone text-xs uppercase tracking-wider hover:border-crimson hover:bg-crimson/20 transition-all"
                >
                  {t('randomStory')}
                </button>
              </div>
            </div>
          </article>

          {/* ── RIGHT SIDEBAR ── */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-28 space-y-8">
              {/* Story info card */}
              <div className="p-6 border border-white/5 bg-crypt/50">
                <p className="text-gold/60 text-xs font-sans tracking-[0.2em] uppercase mb-4">
                  {lang === 'ar' ? 'معلومات القصة' : 'Story Info'}
                </p>
                <div className="space-y-3">
                  {[
                    { label: lang === 'ar' ? 'التصنيف' : 'Category', val: categoryLabel },
                    { label: lang === 'ar' ? 'التاريخ' : 'Date', val: story.date },
                    { label: lang === 'ar' ? 'وقت القراءة' : 'Read Time', val: story.readTime },
                    { label: lang === 'ar' ? 'الأجزاء' : 'Sections', val: `${content?.length || 0}` },
                  ].map(({ label, val }) => (
                    <div key={label} className="flex justify-between items-start gap-2">
                      <span className="text-smoke text-xs font-sans uppercase tracking-wider">{label}</span>
                      <span className="text-bone/70 text-xs font-gothic text-right">{val}</span>
                    </div>
                  ))}
                </div>
                <div className="divider-gold mt-4" />
                <div className="mt-4">
                  <Link
                    to={`/categories/${story.category}`}
                    className="text-gold/60 text-xs font-sans tracking-widest uppercase hover:text-gold transition-colors duration-300">
                    {lang === 'ar' ? `المزيد في قسم ${categoryLabel}` : `More in ${categoryLabel}`} →
                  </Link>
                </div>
              </div>

              {/* Related previews */}
              {relatedStories.slice(0, 2).map(s => {
                const rTitle = lang === 'ar' && s.titleAr ? s.titleAr : s.title;
                const rCat = lang === 'ar' && s.categoryLabelAr ? s.categoryLabelAr : s.categoryLabel;
                return (
                  <Link key={s.id} to={`/story/${s.id}`}
                    className="group block border border-white/5 hover:border-gold/20 transition-colors duration-400 overflow-hidden">
                    <div className="relative h-28 overflow-hidden">
                      <img src={s.image} alt={rTitle}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-55 transition-opacity duration-500 card-image" />
                      <div className="absolute inset-0 bg-gradient-to-t from-void to-transparent" />
                    </div>
                    <div className="p-4">
                      <span className="category-pill text-gold/50 text-xs">{rCat}</span>
                      <h4 className="font-gothic text-sm font-bold text-bone/80 group-hover:text-gold transition-colors duration-300 mt-1 leading-snug">
                        {rTitle}
                      </h4>
                    </div>
                  </Link>
                );
              })}
            </div>
          </aside>
        </div>
      </div>

      {/* ─── RELATED STORIES ─── */}
      {relatedStories.length > 0 && (
        <section className="border-t border-white/5 bg-crypt/20 py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-8 bg-gold/40" />
              <p className="text-gold/60 text-xs tracking-[0.25em] uppercase font-sans">
                {lang === 'ar' ? 'قصص وروايات ذات صلة' : 'The Darkness Continues'}
              </p>
            </div>
            <h2 className="font-gothic text-4xl font-bold text-bone mb-12">
              {t('relatedStories')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedStories.slice(0, 3).map(s => (
                <StoryCard key={s.id} story={s} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
