// Validates content files before build. See docs/04-spesifikasi-konten.md section 12.
// Fails (exit 1) on: [TBD]/TODO/lorem/xxx leaks, title/meta length, missing required
// fields on published services/areas, duplicate slugs, missing image files or alt text,
// incomplete reviews, and blog posts missing required frontmatter.
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';

const ROOT = join(import.meta.dirname, '..');
const CONTENT_DIR = join(ROOT, 'src', 'content');
const PUBLIC_DIR = join(ROOT, 'public');
const BLOG_DIR = join(CONTENT_DIR, 'blog');

const FORBIDDEN_PATTERN = /\[TBD\]|TODO|lorem|xxx/i;
const TITLE_MAX = 70;
const META_MAX = 155;

const errors: string[] = [];

function fail(message: string): void {
  errors.push(message);
}

function checkForbiddenText(label: string, value: unknown): void {
  if (typeof value === 'string' && FORBIDDEN_PATTERN.test(value)) {
    fail(`${label}: contains forbidden placeholder text ("${value.slice(0, 60)}...")`);
  }
}

function walkStrings(label: string, value: unknown): void {
  if (typeof value === 'string') {
    checkForbiddenText(label, value);
    return;
  }
  if (Array.isArray(value)) {
    value.forEach((item, index) => walkStrings(`${label}[${index}]`, item));
    return;
  }
  if (value && typeof value === 'object') {
    for (const [key, nested] of Object.entries(value)) {
      walkStrings(`${label}.${key}`, nested);
    }
  }
}

function checkImage(label: string, image: { src?: string; alt?: string } | undefined): void {
  if (!image) return;
  if (!image.alt) {
    fail(`${label}: missing alt text`);
  }
  if (image.src && !image.src.startsWith('http')) {
    const path = join(PUBLIC_DIR, image.src.replace(/^\//, ''));
    if (!existsSync(path)) {
      fail(`${label}: referenced image not found in public/ (${image.src})`);
    }
  }
}

async function loadContentModule<T>(filename: string): Promise<T | null> {
  const path = join(CONTENT_DIR, `${filename}.ts`);
  if (!existsSync(path)) return null;
  const mod = (await import(path)) as Record<string, unknown>;
  const exported = Object.values(mod)[0];
  return exported as T;
}

type ServiceLike = {
  slug: string;
  title: string;
  metaDescription: string;
  h1: string;
  heroImage?: { src?: string; alt?: string };
};

type AreaLike = {
  slug: string;
  published: boolean;
  intro?: string | null;
  localNotes?: string[];
};

type ReviewLike = { id: string; author?: string; date?: string; text?: string };

async function checkServices(): Promise<void> {
  const services = await loadContentModule<ServiceLike[]>('services');
  if (!services) return;
  const slugs = new Set<string>();
  for (const service of services) {
    if (slugs.has(service.slug)) fail(`services.ts: duplicate slug "${service.slug}"`);
    slugs.add(service.slug);

    if (!service.title || !service.metaDescription || !service.h1) {
      fail(`services.ts (${service.slug}): missing title, metaDescription, or h1`);
    }
    if (service.title && service.title.length > TITLE_MAX) {
      fail(`services.ts (${service.slug}): title longer than ${TITLE_MAX} chars`);
    }
    if (service.metaDescription && service.metaDescription.length > META_MAX) {
      fail(`services.ts (${service.slug}): metaDescription longer than ${META_MAX} chars`);
    }
    checkImage(`services.ts (${service.slug}).heroImage`, service.heroImage);
    walkStrings(`services.ts (${service.slug})`, service);
  }
}

async function checkAreas(): Promise<void> {
  const areas = await loadContentModule<AreaLike[]>('areas');
  if (!areas) return;
  const slugs = new Set<string>();
  for (const area of areas) {
    if (slugs.has(area.slug)) fail(`areas.ts: duplicate slug "${area.slug}"`);
    slugs.add(area.slug);

    if (area.published && (!area.intro || (area.localNotes ?? []).length < 2)) {
      fail(`areas.ts (${area.slug}): published without an intro and at least 2 localNotes`);
    }
    if (area.published) {
      walkStrings(`areas.ts (${area.slug})`, area);
    }
  }
}

async function checkReviews(): Promise<void> {
  const reviews = await loadContentModule<ReviewLike[]>('reviews');
  if (!reviews) return;
  for (const review of reviews) {
    if (!review.author || !review.date || !review.text) {
      fail(`reviews.ts (${review.id}): missing author, date, or text`);
    }
  }
}

async function checkBlogPosts(): Promise<void> {
  if (!existsSync(BLOG_DIR)) return;
  const files = readdirSync(BLOG_DIR).filter((file) => file.endsWith('.mdx'));
  for (const file of files) {
    const raw = readFileSync(join(BLOG_DIR, file), 'utf-8');
    const { data, content } = matter(raw);
    const required = ['title', 'description', 'date', 'author'];
    for (const field of required) {
      if (!data[field]) {
        fail(`blog/${file}: missing required frontmatter field "${field}"`);
      }
    }
    if (typeof data.description === 'string' && data.description.length > META_MAX) {
      fail(`blog/${file}: description longer than ${META_MAX} chars`);
    }
    checkForbiddenText(`blog/${file} content`, content);
  }
}

async function main(): Promise<void> {
  await checkServices();
  await checkAreas();
  await checkReviews();
  await checkBlogPosts();

  if (errors.length > 0) {
    console.error(`check-content: ${errors.length} problem(s) found:\n`);
    for (const error of errors) {
      console.error(`  - ${error}`);
    }
    process.exit(1);
  }

  console.log('check-content: all checks passed.');
}

void main();
