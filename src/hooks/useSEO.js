import { useEffect } from 'react';

const BASE = 'https://velcrypta.vercel.app';
const DEFAULT_IMG = `${BASE}/velcrypta-logo.jpg`;

function setMeta(attr, name, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) { el = document.createElement('meta'); el.setAttribute(attr, name); document.head.appendChild(el); }
  el.setAttribute('content', content);
}

function setCanonical(url) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) { el = document.createElement('link'); el.rel = 'canonical'; document.head.appendChild(el); }
  el.href = url;
}

function setJsonLd(data) {
  let el = document.querySelector('script[data-vel-schema]');
  if (!el) { el = document.createElement('script'); el.type = 'application/ld+json'; el.setAttribute('data-vel-schema','1'); document.head.appendChild(el); }
  el.textContent = JSON.stringify(data);
}

export function useSEO({ title, description, keywords, image, url, type = 'website', structuredData }) {
  useEffect(() => {
    const fullTitle = title || 'Velcrypta — Uncover the Hidden. Fear the Unknown.';
    const fullUrl   = url ? `${BASE}${url}` : BASE;
    const img       = image || DEFAULT_IMG;

    document.title = fullTitle;
    setCanonical(fullUrl);

    setMeta('name','description', description);
    setMeta('name','keywords', keywords);

    setMeta('property','og:title', fullTitle);
    setMeta('property','og:description', description);
    setMeta('property','og:url', fullUrl);
    setMeta('property','og:image', img);
    setMeta('property','og:type', type);

    setMeta('name','twitter:title', fullTitle);
    setMeta('name','twitter:description', description);
    setMeta('name','twitter:image', img);

    if (structuredData) setJsonLd(structuredData);
  }, [title, description, keywords, image, url, type, structuredData]);
}

export function storySchema(story) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': story.title,
    'description': story.excerpt,
    'image': story.image,
    'datePublished': story.date,
    'dateModified': '2026-05-30',
    'author': { '@type': 'Organization', 'name': 'Velcrypta', 'url': BASE },
    'publisher': { '@type': 'Organization', 'name': 'Velcrypta', 'logo': { '@type': 'ImageObject', 'url': DEFAULT_IMG } },
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `${BASE}/story/${story.id}` },
    'articleSection': story.categoryLabel,
    'keywords': `${story.title}, ${story.categoryLabel}, unsolved mystery, horror, true crime, velcrypta`,
    'url': `${BASE}/story/${story.id}`,
    'inLanguage': 'en-US',
  };
}

export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': `${BASE}${item.path}`,
    })),
  };
}
