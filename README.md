# Canyon Construction Services — Website

Marketing website for **Canyon Construction Services**, a roofing contractor in Twin Falls, Idaho ([twinfallsroofers.com](https://twinfallsroofers.com)). The site is built to rank in local search (Twin Falls and the Magic Valley) and turn visitors into phone calls and estimate requests.

## Tech stack

- **Next.js 16** (App Router) + **React 19**, **TypeScript** (strict)
- **SCSS Modules**, mobile-first, with design tokens in `src/styles`
- **Static generation (SSG)**: no database, no API routes, no auth. All content lives in typed files under `src/content`
- **react-hook-form** + **zod** for the estimate form, submitted to **Formspree**
- JSON-LD structured data (`RoofingContractor`, `Service`, `FAQPage`, `BreadcrumbList`)
- Hosting target: **DigitalOcean** Ubuntu droplet with **Nginx** (reverse proxy) and **PM2**

## Getting started

Requires Node.js 22 or newer.

```bash
npm install
cp .env.example .env.local   # then fill in the values
npm run dev                  # http://localhost:3000
```

### Environment variables

All variables are `NEXT_PUBLIC_*`, none of them are secret, and they are **inlined at build time**. Production values must be available when `next build` runs (for example, as CI variables), not only on the server.

| Variable                    | Purpose                                                              |
| --------------------------- | -------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`      | Canonical site URL used for canonical tags and JSON-LD               |
| `NEXT_PUBLIC_GTM_ID`        | Google Tag Manager container ID. GTM is only loaded when this is set |
| `NEXT_PUBLIC_FORM_ENDPOINT` | Formspree endpoint (`https://formspree.io/f/<form-id>`)              |

If `NEXT_PUBLIC_FORM_ENDPOINT` is empty, the estimate form runs in a **preview mode** during `npm run dev` (valid submissions are logged to the browser console instead of sent). In production it is replaced by a click-to-call button.

## Scripts

| Command                 | Description                                                                                    |
| ----------------------- | ---------------------------------------------------------------------------------------------- |
| `npm run dev`           | Start the development server                                                                   |
| `npm run lint`          | ESLint                                                                                         |
| `npm run typecheck`     | TypeScript check (`tsc --noEmit`)                                                              |
| `npm run check:content` | Validate content: no placeholder leaks, title/meta length limits, required fields, image files |
| `npm run build`         | Production build                                                                               |
| `npm run start`         | Serve the production build                                                                     |

Before committing, `lint`, `typecheck`, `check:content`, and `build` should all pass.

## Project structure

```
src/
├── app/            # Routes (App Router): home, [slug] (services + city pages), about,
│                   # contact, faq, reviews, projects, service-areas, privacy-policy
├── components/
│   ├── layout/     # Header, Footer, StickyCallBar, Breadcrumbs
│   ├── sections/   # Hero, ServicesGrid, ReviewsSection, ProcessSteps, AreasList, CtaSection, ...
│   ├── ui/         # Button, FaqAccordion, ExpandableText, icons, ...
│   ├── forms/      # EstimateForm
│   └── seo/        # JsonLd
├── content/        # All site data (see below)
├── lib/            # seo.ts (metadata), jsonld.ts, tracking.ts, helpers
├── types/          # Shared content types (content.ts)
└── styles/         # _variables.scss, _responsive.scss, _globals.scss, main.scss
scripts/
└── check-content.ts
public/images/      # Logo and site images (lowercase-kebab file names)
```

## Editing content

There is no CMS. Content is edited in `src/content`, then the site is rebuilt and redeployed.

| What                                                                     | File            | Notes                                                                                                                  |
| ------------------------------------------------------------------------ | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Business name, phone, address, email, hours, social links, Google rating | `site.ts`       | Single source of truth. Never hardcode these values elsewhere                                                          |
| Services                                                                 | `services.ts`   | Each entry generates a service page                                                                                    |
| City pages                                                               | `areas.ts`      | Only entries with `published: true` are generated and linked                                                           |
| Reviews                                                                  | `reviews.ts`    | Copy reviews **verbatim** from the Google Business Profile. `featured: true` shows a review on the home page (up to 6) |
| Projects gallery                                                         | `projects.ts`   | The `/projects/` page and its navigation link appear only once there are at least 3 projects                           |
| FAQ                                                                      | `faq.ts`        | The first 4 entries also appear on the home page                                                                       |
| Menus                                                                    | `navigation.ts` | Header and footer links                                                                                                |

Content rules: never publish unconfirmed business facts (license numbers, years in business, prices, warranty terms), and never edit review text. `npm run check:content` catches placeholder text and SEO length limits.

## Deployment

The app runs with `next start` under PM2 (`ecosystem.config.cjs`, port 3000) behind Nginx on a DigitalOcean droplet. Do not use `output: 'export'`: the site relies on `next/image` optimization and `redirects()`.

## Status

**Done**

- Home, service pages, city pages, Service Areas, About, Contact, FAQ, Reviews, Privacy Policy
- Google reviews section with Google-style cards and "Read more" on long reviews
- Estimate form, ready for Formspree

**In progress**

- Formspree account and `NEXT_PUBLIC_FORM_ENDPOINT` are not set up yet
- Privacy Policy is a draft pending client approval
- Projects gallery is waiting for client photos

**Planned**

- MDX blog and migration of 10 existing articles
- `sitemap.ts`, `robots.ts`, 301 redirects from the old site, Lighthouse QA
- CI/CD with GitHub Actions and Nginx config for the droplet
