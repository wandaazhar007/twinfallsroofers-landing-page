import type { FaqItem } from '@/types/content';

// General, non-numeric FAQ content. Answers with specific prices, timelines, or warranty
// terms must come from the client — see docs/06-pertanyaan-terbuka.md #8 and #19. Until
// then, these stay general and educational rather than company-specific claims.
export const faq: FaqItem[] = [
  {
    id: 'faq-001',
    category: 'cost',
    question: 'How much does a new roof cost in Twin Falls?',
    answer:
      'Roofing costs vary based on the size and pitch of your roof, the material you choose, and how much of the existing roof needs to be removed or repaired. Request a free estimate and we will walk through the specifics for your property.',
  },
  {
    id: 'faq-002',
    category: 'timing',
    question: 'How long does a roof replacement take?',
    answer:
      'Most residential roof replacements take a few days from start to finish, depending on the size of the roof, the material, and the weather. Your estimator can give you a timeline specific to your project.',
  },
  {
    id: 'faq-003',
    category: 'materials',
    question: 'What roofing materials do you work with?',
    answer:
      'Canyon Construction Services installs and repairs both asphalt shingle and metal roofing systems for residential and commercial properties in Twin Falls and the Magic Valley.',
  },
  {
    id: 'faq-004',
    category: 'warranty',
    question: 'Do roofing warranties cover both materials and labor?',
    answer:
      'Roofing warranties typically have two parts: a manufacturer warranty on the material itself, and a workmanship warranty from the contractor who installed it. Ask for the specific written terms that apply to your project before work begins.',
  },
  {
    id: 'faq-005',
    category: 'insurance',
    question: 'Does homeowners insurance cover roof damage?',
    answer:
      'Many homeowners insurance policies cover sudden damage from wind, hail, or falling debris, though coverage depends on your specific policy and the cause of the damage. Check with your insurance provider to confirm what is covered before filing a claim.',
  },
  {
    id: 'faq-006',
    category: 'preparation',
    question: 'How do I prepare my property before a roofing project starts?',
    answer:
      'Move vehicles away from the driveway and garage, trim back any branches touching the roof, protect fragile items in the attic or garage from vibration, and keep pets indoors on the day work begins.',
  },
];
