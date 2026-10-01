// Server-only: reads MDX files from disk. Never import this from a Client Component
// (see src/lib/navigation.ts for the client-safe navigation flag helper).
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';
import type { ImageAsset } from '@/types/content';

const BLOG_DIR = join(process.cwd(), 'src', 'content', 'blog');

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  updated: string | null;
  author: string;
  tags: string[];
  relatedServices: string[];
  image: ImageAsset | null;
};

export type BlogPostSummary = BlogFrontmatter & { slug: string };

export function getAllBlogSlugs(): string[] {
  if (!existsSync(BLOG_DIR)) return [];
  return readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''));
}

export function getAllBlogPosts(): BlogPostSummary[] {
  return getAllBlogSlugs()
    .map((slug) => {
      const raw = readFileSync(join(BLOG_DIR, `${slug}.mdx`), 'utf-8');
      const { data } = matter(raw);
      return { slug, ...(data as BlogFrontmatter) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

// Lightweight lookup (frontmatter only, no MDX compile) for link labels elsewhere on the
// site — e.g. a service page linking to a related post before the full article exists.
export function getBlogFrontmatterBySlug(slug: string): BlogFrontmatter | null {
  const path = join(BLOG_DIR, `${slug}.mdx`);
  if (!existsSync(path)) return null;

  const raw = readFileSync(path, 'utf-8');
  const { data } = matter(raw);
  return data as BlogFrontmatter;
}

export async function getBlogPost(slug: string) {
  const path = join(BLOG_DIR, `${slug}.mdx`);
  if (!existsSync(path)) return null;

  const raw = readFileSync(path, 'utf-8');
  const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
    source: raw,
    options: { parseFrontmatter: true },
  });

  return { slug, content, frontmatter };
}
