import { Link } from 'react-router-dom';
import VelcryptaLogo from './VelcryptaLogo';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { lang, t } = useLanguage();

  return (
    <footer className="relative mt-24 border-t border-gold/10 overflow-hidden">
      {/* Atmospheric crimson glow */}
      <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-t from-void to-transparent pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(107,15,26,0.08) 0%, transparent 100%)' }} />

      {/* Decorative vertical lines */}
      {[20, 50, 80].map(pct => (
        <div key={pct} className="absolute top-0 bottom-0 w-px opacity-[0.03]"
          style={{ left: `${pct}%`, background: 'linear-gradient(to bottom, #C2A96A, transparent)' }} />
      ))}

      <div className="max-w-6xl mx-auto px-6 pt-16 pb-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-flex items-center gap-4 mb-6 group">
              <VelcryptaLogo size={56} showWordmark={false} />
              <span className="font-gothic text-lg font-bold tracking-[0.22em] text-bone/80 group-hover:text-gold transition-colors duration-500">
                {lang === 'ar' ? 'فيلكريبتا' : 'VELCRYPTA'}
              </span>
            </Link>
            <p className="text-smoke text-sm font-sans leading-relaxed mb-6 max-w-xs">
              {t('footerText')}
            </p>
            {/* Tagline */}
            <p className="text-xs font-sans tracking-[0.2em] uppercase">
              <span className="text-smoke/60">{lang === 'ar' ? 'اكشف ' : 'Uncover the '}</span>
              <span className="text-crimson">{lang === 'ar' ? 'المستور' : 'Hidden'}</span>
              <span className="text-smoke/60">{lang === 'ar' ? '.. واخشى ' : '. Fear the '}</span>
              <span className="text-crimson">{lang === 'ar' ? 'المجهول' : 'Unknown'}</span>
            </p>
          </div>

          {/* Navigate */}
          <div className="md:col-span-2 md:col-start-6">
            <p className="text-gold/60 text-xs tracking-[0.25em] uppercase font-sans mb-5">
              {lang === 'ar' ? 'التنقل' : 'Navigate'}
            </p>
            <ul className="space-y-3">
              {[
                { to: '/', label: t('home') },
                { to: '/stories', label: t('allStories') },
                { to: '/categories', label: t('categories') }
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-smoke text-sm font-sans hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-3 h-px bg-smoke/30 group-hover:bg-gold/60 group-hover:w-5 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="md:col-span-2">
            <p className="text-gold/60 text-xs tracking-[0.25em] uppercase font-sans mb-5">
              {lang === 'ar' ? 'الأقسام' : 'Explore'}
            </p>
            <ul className="space-y-3">
              {[
                { to: '/categories/mysteries', label: t('mysteries') },
                { to: '/categories/true-crime', label: t('trueCrime') },
                { to: '/categories/dark-theories', label: t('darkTheories') },
                { to: '/categories/supernatural', label: t('supernatural') },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-smoke text-sm font-sans hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-3 h-px bg-smoke/30 group-hover:bg-gold/60 group-hover:w-5 transition-all duration-300" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="md:col-span-2">
            <p className="text-gold/60 text-xs tracking-[0.25em] uppercase font-sans mb-5">
              {lang === 'ar' ? 'تواصل' : 'Connect'}
            </p>
            <ul className="space-y-3">
              {(lang === 'ar'
                ? ['من نحن', 'اتصل بنا', 'أرسل قصة', 'النشرة البريدية']
                : ['About', 'Contact', 'Submit a Story', 'Newsletter']
              ).map(label => (
                <li key={label}>
                  <span className="text-smoke text-sm font-sans hover:text-gold transition-colors duration-300 cursor-pointer flex items-center gap-2 group">
                    <span className="w-3 h-px bg-smoke/30 group-hover:bg-gold/60 group-hover:w-5 transition-all duration-300" />
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider-gold mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-smoke/50 text-xs font-sans tracking-wider">
            © {new Date().getFullYear()} Velcrypta. {t('rightsReserved')}
          </p>
          <div className="flex items-center gap-1">
            <VelcryptaLogo size={18} showWordmark={false} />
            <p className="text-smoke/40 text-xs font-sans tracking-wider italic ml-1">
              {lang === 'ar'
                ? '"ليس كل من ضل الطريق مفقوداً، بعضهم لم يُعثر عليه أبداً."'
                : '"Not all who wander are lost. Some are never found."'
              }
            </p>
          </div>
          <div className="flex items-center gap-4">
            {(lang === 'ar' ? ['الخصوصية', 'الشروط', 'خريطة الموقع'] : ['Privacy', 'Terms', 'Sitemap']).map((item, idx) => (
              <a key={item}
                href={idx === 2 ? '/sitemap.xml' : '#'}
                className="text-smoke/40 text-xs font-sans hover:text-gold/60 transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
