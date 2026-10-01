import type { TeamMember } from '@/types/content';

// Team photos provided by the client (2026-10-01); names come from the photo file names.
// Roles and bios stay null until confirmed — see docs/06-pertanyaan-terbuka.md #7.
// Sorted alphabetically so the order implies no hierarchy.
const NAMES = ['Alex', 'Becky', 'Gustavo', 'Mynor', 'Rick', 'Ronaldo', 'Yoni'];

export const team: TeamMember[] = NAMES.map((name) => ({
  id: name.toLowerCase(),
  name,
  role: null,
  photo: {
    src: `/images/team/team-${name.toLowerCase()}.jpg`,
    alt: `${name}, Canyon Construction Services team member`,
  },
}));
