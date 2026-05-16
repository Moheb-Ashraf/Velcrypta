import { useScrollReveal } from '../hooks/useScrollReveal';

export default function SectionTitle({ eyebrow, title, subtitle, align = 'left' }) {
  const ref = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal mb-12 ${align === 'center' ? 'text-center' : ''}`}
    >
      {eyebrow && (
        <p className="text-gold text-xs tracking-[0.25em] uppercase font-sans mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="font-gothic text-4xl md:text-5xl font-bold text-bone leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-ash font-sans text-base leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-5 h-px w-16 bg-gold/40 ${align === 'center' ? 'mx-auto' : ''}`} />
    </div>
  );
}
