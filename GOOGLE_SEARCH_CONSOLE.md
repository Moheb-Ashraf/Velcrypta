# Velcrypta — Google Search Console Setup Guide

## Step 1: Add Property
1. Go to https://search.google.com/search-console/
2. Click "Add property"
3. Choose "URL prefix" → enter: https://velcrypta.vercel.app/
4. OR, if you use the custom domain, choose "Domain" → enter: velcrypta.com (covers all subdomains)

## Step 2: Verify Ownership
Choose ONE of these methods:

### Option A: HTML file (easiest)
1. Download the google verification file (e.g. `googleXXXXXXXXXXXXXXXX.html`)
2. Place it in `/public/` folder
3. Deploy your site
4. Click "Verify" in Search Console

### Option B: Meta tag
1. Copy the meta tag from Search Console, e.g.:
   `<meta name="google-site-verification" content="XXXXXXXXXXXXXXXX" />`
2. Add it inside `<head>` in `/index.html` (already has a placeholder comment)
3. Deploy and verify

### Option C: DNS record (best for domain verification)
1. In Search Console, copy the TXT record value
2. Add a TXT record in your DNS provider:
   - Type: TXT
   - Name: @ (root)
   - Value: google-site-verification=XXXXXXXXXXXXXXXX
3. Verify in Search Console

## Step 3: Submit Sitemap
1. In Search Console → Sitemaps
2. Add: https://velcrypta.vercel.app/sitemap.xml
3. Click "Submit"
4. Wait 24–48 hours for Google to crawl

## Step 4: Request Indexing (optional, faster)
1. Use the URL Inspection tool
2. Enter your homepage URL
3. Click "Request Indexing"
4. Repeat for /stories, /categories, and each story

## Step 5: Monitor
- Coverage report: shows which pages are indexed
- Performance report: shows clicks, impressions, keywords
- Core Web Vitals: page speed metrics

---

## What's Already Optimized in This Build:

✅ Unique <title> per page (via useSEO hook)
✅ Unique meta description per page
✅ Canonical URLs set per page
✅ Open Graph tags (og:title, og:description, og:image, og:url)
✅ Twitter Card tags
✅ JSON-LD structured data:
   - WebSite schema (with SearchAction/sitelinks searchbox)
   - Organization schema
   - Article schema per story
   - BreadcrumbList per page
✅ /robots.txt — allows all crawlers
✅ /sitemap.xml — all pages listed with priority + lastmod
✅ /site.webmanifest — PWA manifest
✅ Semantic HTML (h1, article, nav, aside, main, footer)
✅ aria-label on interactive elements
✅ Alt text on images
✅ Breadcrumb navigation (visible + structured data)
✅ Mobile-responsive design
✅ Preconnect / dns-prefetch for performance
✅ Preload hero image
✅ Security headers (vercel.json)
✅ SPA routing (Netlify _redirects + vercel.json rewrites)

## Target Keywords (already in meta):
- "unsolved mysteries"
- "horror stories"
- "true crime stories"
- "Dyatlov Pass incident"
- "Flight 19 disappearance"
- "Hinterkaifeck murders"
- "dark theories"
- "supernatural stories"
- "mystery storytelling platform"
- "velcrypta"
