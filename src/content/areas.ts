import type { Area } from '@/types/content';

// Service area pages. All start as published: false — see docs/04-spesifikasi-konten.md
// section 3. A city only becomes published: true once it has a real intro and at least
// two accurate localNotes (docs/06 #4). Twin Falls is the home office and is served by
// Home and the service pages, not a dedicated area page. Mountain Home is excluded until
// docs/06 #3 is answered.
export const areas: Area[] = [
  {
    slug: 'jerome',
    name: 'Jerome',
    path: '/roofing-jerome-id/',
    published: true,
    distanceFromOffice: 'About a 20-minute drive from our Twin Falls office via US-93.',
    intro:
      'Jerome sits just north of Twin Falls across the Snake River Canyon, at the center of one of Idaho\'s largest dairy farming regions. We repair and replace roofs on homes and farm buildings throughout Jerome and Jerome County.',
    localNotes: [
      'Jerome has a mix of older homes near downtown and newer construction on the outskirts, so we see everything from aging shingle roofs due for replacement to newer roofs that just need routine repair.',
      'Metal roofing is a common choice on the farm buildings and barns around Jerome County, and it holds up well on homes in the area too.',
    ],
    heroImage: {
      src: '/images/shingle-roof-detail.jpg',
      alt: 'Close-up of an asphalt shingle roof',
    },
    projects: [],
    reviewIds: [],
  },
  {
    slug: 'burley',
    name: 'Burley',
    path: '/roofing-burley-id/',
    published: true,
    distanceFromOffice: 'About a 30-minute drive from our Twin Falls office via I-84.',
    intro:
      'Burley sits along the Snake River in Cassia County, about 30 miles east of Twin Falls. We repair and replace roofs on homes and farm buildings throughout Burley and the surrounding Mini-Cassia area.',
    localNotes: [
      "Burley's older neighborhoods near downtown often have shingle roofs original to the home, while newer subdivisions on the edge of town usually just need periodic inspection.",
      'Like the rest of the Magic Valley, Burley has plenty of agricultural storage buildings nearby, many of which use metal roofing for its durability.',
    ],
    heroImage: {
      src: '/images/shingle-installation-closeup.jpg',
      alt: 'Close-up of hands installing asphalt shingles',
    },
    projects: [],
    reviewIds: [],
  },
  {
    slug: 'buhl',
    name: 'Buhl',
    path: '/roofing-buhl-id/',
    published: true,
    distanceFromOffice: 'About a 20-minute drive from our Twin Falls office via US-30.',
    intro:
      'Buhl is a small town west of Twin Falls along the Snake River Canyon, known locally for its trout farms. We repair and replace roofs on homes and outbuildings throughout Buhl and the surrounding area.',
    localNotes: [
      'Homes closer to the canyon rim in Buhl can see more direct wind exposure than those set back from the edge.',
      'A number of homes in Buhl are older farmhouses with steep-pitch shingle roofs that need periodic repair as they age.',
    ],
    heroImage: {
      src: '/images/lifted-shingle-damage.jpg',
      alt: 'Close-up of a lifted and damaged asphalt shingle',
    },
    projects: [],
    reviewIds: [],
  },
  {
    slug: 'kimberly',
    name: 'Kimberly',
    path: '/roofing-kimberly-id/',
    published: true,
    distanceFromOffice: 'About a 10-minute drive from our Twin Falls office via Kimberly Road.',
    intro:
      'Kimberly is just east of Twin Falls and one of the closer communities we serve. We repair and replace roofs on homes throughout Kimberly and the surrounding farmland.',
    localNotes: [
      'Kimberly has grown with newer residential construction in recent years alongside its older agricultural core, so we see a mix of recent-build roofs and older ones due for replacement.',
      'Being this close to Twin Falls, Kimberly homes deal with the same freeze-thaw and wind exposure we see across the Magic Valley.',
    ],
    heroImage: {
      src: '/images/flat-roof-installation-dusk.jpg',
      alt: 'Roofer installing a flat roof membrane at dusk',
    },
    projects: [],
    reviewIds: [],
  },
  {
    slug: 'filer',
    name: 'Filer',
    path: '/roofing-filer-id/',
    published: true,
    distanceFromOffice: 'About a 15-minute drive from our Twin Falls office via US-30.',
    intro:
      'Filer sits just southwest of Twin Falls and is home to the Twin Falls County Fairgrounds. We repair and replace roofs on homes and farm buildings throughout Filer.',
    localNotes: [
      'Many properties around Filer are working farms, where outbuildings and barns commonly use metal roofing alongside the shingle roofs on the house itself.',
      "Filer's older homes near the center of town often need roof attention sooner than the newer construction on its outskirts.",
    ],
    heroImage: {
      src: '/images/metal-roof-installation.jpg',
      alt: 'Roofer installing standing seam metal roofing',
    },
    projects: [],
    reviewIds: [],
  },
  {
    slug: 'hansen',
    name: 'Hansen',
    path: '/roofing-hansen-id/',
    published: true,
    distanceFromOffice: 'About a 15-minute drive from our Twin Falls office, across the Snake River via the Hansen Bridge.',
    intro:
      'Hansen is a small community just south of Twin Falls across the Snake River Canyon. We repair and replace roofs on homes throughout Hansen and the surrounding rural area.',
    localNotes: [
      'Hansen properties often include detached garages, shops, and barns in addition to the main house roof, many of which use metal roofing.',
      'The canyon rim location means some Hansen properties see more direct wind than homes further from the edge.',
    ],
    heroImage: {
      src: '/images/tree-branch-over-roof.png',
      alt: 'Tree branch overhanging a shingle roof with debris in the gutter',
    },
    projects: [],
    reviewIds: [],
  },
  {
    slug: 'heyburn',
    name: 'Heyburn',
    path: '/roofing-heyburn-id/',
    published: true,
    distanceFromOffice: 'About a 30-minute drive from our Twin Falls office via I-84.',
    intro:
      'Heyburn sits right next to Rupert in Minidoka County, about 30 miles east of Twin Falls. We repair and replace roofs on homes throughout Heyburn and the surrounding Mini-Cassia communities.',
    localNotes: [
      "Heyburn's housing stock includes a good number of older homes with roofs that are due, or past due, for a full replacement.",
      'As in Burley next door, metal roofing is common on the agricultural buildings around Heyburn.',
    ],
    heroImage: {
      src: '/images/warped-shingle-detail.png',
      alt: 'Close-up of warped and uneven asphalt shingles',
    },
    projects: [],
    reviewIds: [],
  },
  {
    slug: 'shoshone',
    name: 'Shoshone',
    path: '/roofing-shoshone-id/',
    published: true,
    distanceFromOffice: 'About a 30-minute drive from our Twin Falls office via US-93.',
    intro:
      'Shoshone is the Lincoln County seat, north of Twin Falls along US-93. We repair and replace roofs on homes throughout Shoshone and the surrounding area.',
    localNotes: [
      'Shoshone sees some of the colder winter temperatures in the Magic Valley, which adds to the freeze-thaw stress on an aging roof.',
      'A number of homes in Shoshone are older construction, so full roof replacement is a common request alongside repairs.',
    ],
    heroImage: {
      src: '/images/curled-shingle-damage.jpg',
      alt: 'Close-up of a curled and weathered asphalt shingle edge',
    },
    projects: [],
    reviewIds: [],
  },
  {
    slug: 'hagerman',
    name: 'Hagerman',
    path: '/roofing-hagerman-id/',
    published: true,
    distanceFromOffice: 'About a 30-minute drive from our Twin Falls office via US-30.',
    intro:
      'Hagerman sits in a scenic canyon northwest of Twin Falls, known for its trout farms and natural springs. We repair and replace roofs on homes throughout Hagerman and the surrounding valley.',
    localNotes: [
      'Hagerman\'s canyon location creates a milder microclimate than the surrounding high desert, but homes still deal with seasonal wind funneling through the valley.',
      'Many Hagerman properties sit on larger rural lots with additional outbuildings alongside the main house roof.',
    ],
    heroImage: {
      src: '/images/roofer-installing-shingles.jpg',
      alt: 'Roofer installing asphalt shingles with a nail gun',
    },
    projects: [],
    reviewIds: [],
  },
];
