import { useEffect } from 'react';

const BASE_URL = 'https://velcrypta.vercel.app';
const DEFAULT_IMAGE = `${BASE_URL}/velcrypta-logo.jpg`;

function setMeta(name, content, attr = 'name') {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setJsonLd(id, data) {
  let el = document.querySelector(`script[data-schema-id="${id}"]`);
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.setAttribute('data-schema-id', id);
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

export function useSEO({ title, description, keywords, image, url, type = 'website', structuredData }) {
  useEffect(() => {
    const fullTitle = title
      ? `${title} — Velcrypta`
      : 'Velcrypta — Uncover the Hidden. Fear the Unknown.';
    const fullUrl = url ? `${BASE_URL}${url}` : BASE_URL;
    const img = image || DEFAULT_IMAGE;

    // Title
    document.title = fullTitle;

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;

    // Primary meta
    setMeta('description', description);
    if (keywords) setMeta('keywords', keywords);

    // OG
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('og:url', fullUrl, 'property');
    setMeta('og:image', img, 'property');
    setMeta('og:type', type, 'property');

    // Twitter
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', description);
    setMeta('twitter:image', img);

    // Structured data
    if (structuredData) {
      setJsonLd('page-schema', structuredData);
    }
  }, [title, description, keywords, image, url, type, structuredData]);
}

// Helper: generate Article schema for a story
export function storySchema(story) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${BASE_URL}/story/${story.id}`,
    'headline': story.title,
    'description': story.excerpt,
    'image': story.image,
    'datePublished': story.date,
    'dateModified': '2026-05-16',
    'author': {
      '@type': 'Organization',
      'name': 'Velcrypta',
      'url': BASE_URL
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Velcrypta',
      'logo': { '@type': 'ImageObject', 'url': DEFAULT_IMAGE }
    },
    'mainEntityOfPage': { '@type': 'WebPage', '@id': `${BASE_URL}/story/${story.id}` },
    'articleSection': story.categoryLabel,
    'keywords': `${story.categoryLabel}, mystery, horror, unsolved, ${story.title}`,
    'wordCount': story.content?.join(' ').split(' ').length || 500,
    'timeRequired': `PT${story.readTime?.replace(' min', '')}M`,
    'inLanguage': 'en-US',
    'url': `${BASE_URL}/story/${story.id}`
  };
}

// Helper: BreadcrumbList schema
export function breadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, i) => ({
      '@type': 'ListItem',
      'position': i + 1,
      'name': item.name,
      'item': `${BASE_URL}${item.path}`
    }))
  };
}
