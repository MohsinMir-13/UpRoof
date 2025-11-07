yarn install
yarn dev
## UpRoof Website (Private)

Live site: https://uproof.eu

Multilingual roofing services website built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and next-intl. The codebase emphasizes performance, SEO (structured data, localized canonicals, hreflang), accessibility, and a scalable content model.

This is a private repository. It must not be cloned, copied, redistributed, or used outside authorized purposes.

### Overview
- Framework: Next.js 14 (App Router, static generation + ISR)
- Languages: lv, en, nl-BE via next-intl
- Styling: Tailwind CSS
- Animations: Framer Motion (select components)
- Analytics: Vercel Analytics and Speed Insights; Google Tag Manager loads only after consent

### Capabilities
- Locale-scoped routing (`/lv`, `/en`, `/nl-BE`)
- SEO: Canonical and hreflang per page
- Structured Data: RoofingContractor (organization), Service, FAQ, Breadcrumb
- Targeted landing pages for Latvian service keywords
- Sitemap coverage for all core and service pages

### Structure (excerpt)
```
app/[locale]/        # Locale-specific pages
components/          # UI components (Hero, Services, Breadcrumbs, etc.)
messages/            # Translation bundles
data/                # Static JSON content
lib/                 # Utilities (auth, sanitize)
public/              # Static assets (images, video)
```

### Performance and SEO
- Consent-gated analytics; deferred GTM
- Hourly ISR revalidation for locale pages
- Service + FAQ schema on service landing pages for richer results
- Recommended ongoing tasks: compress large media, add verified reviews schema, refine address details in local business schema

### Ownership and Use
All code, content, translations, schemas, and media are proprietary. Unauthorized use or redistribution is prohibited.

### Contact
Repository inquiries: mohsinmaqboolmir@gmail.com

© 2025 UpRoof.

