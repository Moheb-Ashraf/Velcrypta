import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function StoryCard({ story, size = 'default' }) {
  const isLarge = size === 'large';
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    const rotateX = (y - 0.5) * -6;
    const rotateY = (x - 0.5) * 8;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  };

  const handleMouseLeave = (e) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
  };

  return (
    <Link
      to={`/story/${story.id}`}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`group block relative overflow-hidden bg-crypt ${
        isLarge ? 'h-[480px]' : 'h-[340px]'
      }`}
      style={{
        border: '1px solid rgba(255,255,255,0.04)',
        transition: 'transform 0.4s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.4s ease, border-color 0.4s ease',
      }}
    >
      {/* Image layer */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="card-image w-full h-full object-cover opacity-45 group-hover:opacity-55 transition-opacity duration-700"
          loading="lazy"
        />
        {/* Multi-layer gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-br from-void/40 via-transparent to-crimson/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>

      {/* Scanline effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden pointer-events-none">
        <div className="scanline" />
      </div>

      {/* Corner decorations — all four corners */}
      {[
        'top-0 left-0 border-t border-l',
        'top-0 right-0 border-t border-r',
        'bottom-0 left-0 border-b border-l',
        'bottom-0 right-0 border-b border-r',
      ].map((cls, i) => (
        <div
          key={i}
          className={`absolute w-6 h-6 ${cls} border-gold/20 group-hover:border-gold/60 transition-all duration-500 group-hover:w-8 group-hover:h-8`}
        />
      ))}

      {/* Gold shimmer on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(194,169,106,0.04) 0%, transparent 50%, rgba(194,169,106,0.04) 100%)',
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        {/* Category + meta */}
        <div className="flex items-center gap-2 mb-3 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
          <span className="category-pill px-2 py-0.5 bg-crimson/80 text-bone/80 group-hover:bg-crimson text-bone">
            {story.categoryLabel}
          </span>
          <span className="text-smoke text-xs font-sans">{story.readTime}</span>
        </div>

        {/* Title */}
        <h3
          className={`font-gothic font-bold text-bone group-hover:text-gold transition-colors duration-400 leading-tight mb-2 ${
            isLarge ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}
        >
          {story.title}
        </h3>

        {/* Excerpt — slides in on hover */}
        <div
          className="overflow-hidden"
          style={{ maxHeight: 0, transition: 'max-height 0.5s cubic-bezier(0.25,0.46,0.45,0.94)' }}
          ref={(el) => {
            if (el) {
              const parent = el.closest('a');
              if (parent) {
                parent.addEventListener('mouseenter', () => { el.style.maxHeight = '80px'; });
                parent.addEventListener('mouseleave', () => { el.style.maxHeight = '0'; });
              }
            }
          }}
        >
          <p className="text-ash text-sm font-sans leading-relaxed line-clamp-2 pt-1 pb-2">
            {story.excerpt}
          </p>
        </div>

        {/* Read CTA */}
        <div className="flex items-center gap-2 mt-1">
          <span
            className="text-gold text-xs font-sans tracking-[0.18em] uppercase opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-1 group-hover:translate-y-0"
          >
            Read Story
          </span>
          <span
            className="text-gold text-xs opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-x-1"
            style={{ transition: 'opacity 0.5s ease, transform 0.4s ease' }}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
