// Client-safe: no Node.js APIs here. Keep this separate from content.ts (which uses
// node:fs for the blog loader) so Header/Footer — client and server components alike —
// can import it without pulling fs into the browser bundle.
import { projects } from '@/content/projects';
import { reviews } from '@/content/reviews';
import { areas } from '@/content/areas';
import type { NavigationFlag } from '@/types/content';

// A navigation item's showWhen flag is only "ready" once its content array has enough
// real entries — see docs/04-spesifikasi-konten.md section 7 and docs/07-rencana-build.md
// Fase 6 (projects need >= 3 entries before the page and nav link appear).
export const MIN_PROJECTS_TO_SHOW = 3;

export function isNavigationFlagReady(flag: NavigationFlag | null): boolean {
  if (flag === null) return true;

  switch (flag) {
    case 'projects':
      return projects.length >= MIN_PROJECTS_TO_SHOW;
    case 'reviews':
      return reviews.length > 0;
    case 'areas':
      return areas.some((area) => area.published);
    default:
      return false;
  }
}
