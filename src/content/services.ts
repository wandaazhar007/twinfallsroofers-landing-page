import type { Service } from '@/types/content';

// Service pages. title/metaDescription/h1 are copied exactly from docs/02-peta-seo-halaman.md
// and must not be rewritten without approval. heroImage stays null until real project photos
// are confirmed by the client (docs/06-pertanyaan-terbuka.md #10). Content avoids any
// unconfirmed business facts (licensing, certifications, warranty terms, insurance claim
// assistance, pricing) per docs/06-pertanyaan-terbuka.md.
export const services: Service[] = [
  {
    slug: 'roof-repair',
    name: 'Roof Repair',
    path: '/roof-repair-twin-falls/',
    audience: 'residential',
    title: 'Roof Repair in Twin Falls, ID | Canyon Construction Services',
    metaDescription:
      'Leaking or storm-damaged roof? Canyon Construction Services repairs shingle and metal roofs in Twin Falls and the Magic Valley. Call (208) 440-4006.',
    h1: 'Roof Repair in Twin Falls, Idaho',
    shortDescription: 'Shingle and metal roof repair for homes in Twin Falls and the Magic Valley.',
    heroImage: null,
    sections: [
      {
        heading: 'Reliable Roof Repair for Twin Falls Homes',
        body: "A roof leak rarely stays small. Once water finds a way under the roofing material, it can damage the decking, insulation, and ceilings below long before you see a stain indoors. Canyon Construction Services repairs shingle and metal roofs for homeowners across Twin Falls and the surrounding Magic Valley, from a single damaged section to multiple problem areas on an older roof.\n\nWe start every repair with an inspection so you know exactly what is wrong and what it will take to fix it, rather than guessing at the cause of a leak.\n\nRepairs on an aging roof aren't the same as repairs on a newer one. We take the condition of the whole roof into account, not just the immediate problem area, so you get an honest picture of whether a repair is the right move or whether it's worth thinking about replacement instead.",
      },
      {
        heading: 'What Our Roof Repair Service Covers',
        body: "Our repair work covers both asphalt shingle and metal roofing systems. That includes replacing damaged or missing shingles, resealing and re-fastening metal panels, repairing flashing around chimneys, vents, and skylights, and fixing the underlying decking once water has gotten through. We match materials as closely as possible to your existing roof so a repaired section blends in rather than standing out.\n\nEvery repair is scoped during the inspection, so you know what is being fixed and why before any work starts.\n\nWe also address smaller details that often get skipped in a quick patch job — resealing exposed nail heads, replacing cracked pipe boots around plumbing vents, and clearing debris that traps moisture against the roofing material. These are inexpensive to fix during a repair visit but expensive to ignore.",
      },
      {
        heading: 'Signs Your Roof Needs Repair',
        body: "Some roof problems are obvious — a missing shingle after a windstorm, a visible tear in a metal panel, or a water stain spreading across a ceiling. Others are easy to miss from the ground: curling or cracked shingles, rusted or lifted flashing, granules collecting in gutters, or daylight showing through the attic. If you've noticed any of these signs, or simply haven't had your roof looked at in a while, it's worth having it checked before a small problem turns into a bigger repair.\n\nInside the house, watch for peeling paint or bubbling drywall near the ceiling, a musty smell in the attic, or insulation that feels damp to the touch. These are often the first indoor signs of a roof problem that has been developing outside for a while.",
      },
      {
        heading: 'Idaho Weather and Your Roof',
        body: "Twin Falls roofs deal with a wide swing in conditions over the course of a year. Winter brings snow load and repeated freeze-thaw cycles that can work screws and fasteners loose and stress flashing and seams. High winds move through the Magic Valley during storms and can lift shingles or metal panels that aren't properly secured. Summers bring intense, high-elevation UV exposure that dries out and ages roofing material faster than in milder climates. All of that adds up to real wear, even on a roof that looks fine from the driveway.\n\nTwin Falls also sits at an elevation where the swing between daytime and nighttime temperatures can be larger than in lower-elevation cities, which adds to the expansion and contraction that roofing materials go through year-round.",
      },
      {
        heading: 'Our Repair Process',
        body: "We inspect the affected area and anything nearby that could be contributing to the problem, explain what we find, and provide a written estimate before starting work. Most repairs are completed in a single visit. When a repair uncovers additional damage — for example, rotted decking under a section of shingles — we'll show you what we found and get your approval before doing any additional work.",
      },
      {
        heading: 'What to Expect on Repair Day',
        body: "We arrive with materials matched to your existing roof, set up to protect the surrounding landscaping and any vehicles nearby, and complete the repair work directly. Once finished, we clear away debris and walk the repaired area with you so you can see exactly what was done.",
      },
    ],
    faq: [
      {
        id: 'roof-repair-faq-1',
        category: 'timing',
        question: 'How quickly can you repair a leaking roof?',
        answer:
          "Once we've inspected the roof and scoped the repair, most jobs are completed in a single visit. Call us to schedule an inspection as soon as you notice a leak — the sooner it's addressed, the less damage it can cause inside your home.",
      },
      {
        id: 'roof-repair-faq-2',
        category: 'materials',
        question: 'Do you repair both shingle and metal roofs?',
        answer: 'Yes. We repair asphalt shingle and metal roofing systems on residential properties in Twin Falls and the Magic Valley.',
      },
      {
        id: 'roof-repair-faq-3',
        category: 'cost',
        question: 'How much does a roof repair cost?',
        answer:
          'Repair costs depend on the extent of the damage and the materials involved. We provide a written estimate after inspecting the roof, before any work begins.',
      },
      {
        id: 'roof-repair-faq-4',
        category: 'preparation',
        question: 'What happens if you find more damage once you start?',
        answer:
          "If we uncover additional damage, such as rotted decking under the roofing material, we'll walk you through what we found and get your approval before doing any extra work.",
      },
      {
        id: 'roof-repair-faq-5',
        category: 'materials',
        question: 'Will a repaired section match the rest of my roof?',
        answer: 'We match materials as closely as possible to your existing roof so a repair blends in rather than standing out.',
      },
    ],
    relatedServices: ['roof-inspection', 'storm-damage-roof-repair', 'roof-replacement'],
    relatedPosts: [
      'are-trees-too-close-to-your-roof-how-to-spot-and-solve-the-problem',
      'why-does-my-roof-look-wavy-understanding-roof-warping-and-what-to-do-about-it',
      'roof-stains',
    ],
    materials: ['asphalt shingle', 'metal'],
  },
  {
    slug: 'roof-replacement',
    name: 'Roof Replacement',
    path: '/roof-replacement-twin-falls/',
    audience: 'residential',
    title: 'Roof Replacement in Twin Falls, ID | Canyon Construction Services',
    metaDescription:
      'Full roof replacement in Twin Falls, ID with shingle or metal roofing. Written estimates and clean job sites. Call (208) 440-4006.',
    h1: 'Roof Replacement in Twin Falls, Idaho',
    shortDescription: 'Full shingle and metal roof replacement for Twin Falls homes.',
    heroImage: null,
    sections: [
      {
        heading: 'Full Roof Replacement for Twin Falls Homes',
        body: "At some point, repairing a roof section by section stops making sense — the shingles are past their useful life, repairs are becoming more frequent, or storm damage covers too much of the roof to patch. Canyon Construction Services installs full shingle and metal roof replacements for homes in Twin Falls and the Magic Valley, removing the old roofing system down to the decking and installing new material from the ground up.\n\nA full replacement is a bigger job than a repair, so we walk through the scope, materials, and timeline with you before any work begins.\n\nWe also coordinate the timing of the project around Idaho's weather, since tearing off an old roof exposes your home until the new one goes on — not something you want to do in the middle of an active storm system.",
      },
      {
        heading: "What's Included in a Roof Replacement",
        body: "A roof replacement removes the existing shingles or metal panels, inspects and repairs the decking underneath, and installs new underlayment, flashing, and roofing material. We work with both asphalt shingle and metal roofing systems, so you can choose the material that fits your home and budget. Flashing around chimneys, vents, and valleys is replaced as part of the job rather than reused, since it's one of the most common places roofs eventually leak.\n\nVentilation is also part of the job. Poorly ventilated attics trap heat in summer and moisture in winter, both of which shorten the life of new roofing material, so we check and improve ventilation where it's needed rather than leaving it as-is.",
      },
      {
        heading: "Signs It's Time to Replace, Not Repair",
        body: "A roof usually tells you it's reaching the end of its life before it fails outright. Shingles that are curling, cracking, or losing granules across large areas, multiple past repairs in different spots, visible sagging in the roof deck, or daylight coming through the attic are all signs that a repair would be treating a symptom rather than the underlying problem. If you're not sure which situation you're in, a roof inspection is the simplest way to find out.\n\nA roof that's needed three or four repairs in as many years is usually telling you that the material itself has reached the end of its service life, even if any single repair looks minor on its own.",
      },
      {
        heading: "Why Idaho's Climate Matters for a New Roof",
        body: "Twin Falls roofs are built to handle a real range of conditions: heavy snow load in winter, repeated freeze-thaw cycles as temperatures swing above and below freezing, occasional high winds during storms, and strong, high-elevation UV exposure in summer. A roof replacement is a chance to address any of these factors that may have shortened the life of the previous roof — for example, improving attic ventilation — rather than simply reinstalling the same system.\n\nReplacement also gives you the option to switch materials entirely — for example, moving from aging shingles to a metal roofing system built to shed snow and resist wind uplift more effectively.",
      },
      {
        heading: 'Our Roof Replacement Process',
        body: 'We start with an inspection and a written estimate that spells out the materials, scope, and timeline. Most residential roof replacements take a few days from tear-off to final cleanup, depending on the size of the roof and the weather. We protect your property during the job, remove the old roofing material and debris, and walk the finished roof with you before considering the job complete.\n\nBefore the crew leaves each day, the site is secured so your home stays protected overnight if the job runs more than one day. Debris, old shingles, and nails are cleared from the property as part of the job, not left for you to deal with afterward.',
      },
      {
        heading: 'Serving Homes Across the Magic Valley',
        body: 'We replace roofs for homeowners throughout Twin Falls and nearby Magic Valley communities, working on everything from straightforward single-slope roofs to homes with multiple rooflines, valleys, and dormers.',
      },
    ],
    faq: [
      {
        id: 'roof-replacement-faq-1',
        category: 'timing',
        question: 'How long does a roof replacement take?',
        answer:
          "Most residential roof replacements take a few days from start to finish, depending on the size of the roof, the material, and the weather. We'll give you a timeline specific to your project during the estimate.",
      },
      {
        id: 'roof-replacement-faq-2',
        category: 'materials',
        question: 'Can I choose between shingle and metal roofing?',
        answer: 'Yes. We install both asphalt shingle and metal roofing systems, and can walk you through the differences during your estimate.',
      },
      {
        id: 'roof-replacement-faq-3',
        category: 'cost',
        question: 'What determines the cost of a roof replacement?',
        answer:
          'Cost depends on the size and pitch of your roof, the material you choose, and the condition of the decking underneath. We provide a written estimate before any work begins.',
      },
      {
        id: 'roof-replacement-faq-4',
        category: 'preparation',
        question: 'Do I need to do anything before replacement day?',
        answer:
          "We'll let you know anything specific to your property, but in general it helps to move vehicles away from the driveway and clear anything fragile from the attic or garage.",
      },
      {
        id: 'roof-replacement-faq-5',
        category: 'warranty',
        question: 'Does a new roof come with a warranty?',
        answer:
          'Roofing warranties typically cover the material (from the manufacturer) and the installation (from the contractor). Ask your estimator for the specific written terms that apply to your project.',
      },
    ],
    relatedServices: ['roof-repair', 'metal-roofing', 'roof-inspection'],
    relatedPosts: [
      'what-happens-if-your-roofer-skips-a-permit-and-how-it-could-come-back-to-haunt-you',
      'how-long-will-my-roof-really-last-a-material-by-material-breakdown',
      'what-is-roof-decking-and-why-should-homeowners-care',
      'wildfire-risk',
      'replace-your-gutters',
      'roof-over-existing-shingles',
    ],
    materials: ['asphalt shingle', 'metal'],
  },
  {
    slug: 'metal-roofing',
    name: 'Metal Roofing',
    path: '/metal-roofing-twin-falls/',
    audience: 'both',
    title: 'Metal Roofing in Twin Falls, ID | Canyon Construction Services',
    metaDescription:
      'Metal roofing installation and repair for Twin Falls homes and businesses. Built for Idaho wind, snow, and sun. Call (208) 440-4006.',
    h1: 'Metal Roofing in Twin Falls, Idaho',
    shortDescription: 'Metal roof installation and repair for homes and businesses in Twin Falls.',
    heroImage: null,
    sections: [
      {
        heading: 'Metal Roofing for Twin Falls Homes and Businesses',
        body: "Metal roofing is a long-term option for homeowners and business owners who want a roofing system built to handle Idaho's weather without frequent maintenance. Canyon Construction Services installs and repairs metal roofing for residential and commercial properties in Twin Falls and the Magic Valley, including standing seam panels and other metal roofing profiles.\n\nMetal roofing comes in a range of panel styles and colors, so choosing metal doesn't mean limiting your home's appearance — it's an aesthetic choice as much as a practical one.",
      },
      {
        heading: 'Why Property Owners Choose Metal Roofing',
        body: "Metal roofing sheds snow more readily than shingles, resists wind uplift when properly installed and fastened, and holds up well under the sun without the same granule loss that affects asphalt shingles over time. It's a common choice for homeowners planning to stay in a property long-term, as well as for commercial buildings where minimizing maintenance visits matters.\n\nBecause metal panels are installed in long runs rather than individual pieces like shingles, there are fewer seams and fastening points for water to work its way underneath, which is part of why metal roofing tends to need less ongoing maintenance over its lifespan.",
      },
      {
        heading: 'Metal Roofing and Idaho Weather',
        body: "Twin Falls winters bring real snow load, and metal roofing's smooth surface helps snow slide off rather than accumulate the way it can on shingles, reducing the stress on the roof structure. The freeze-thaw cycles common in the Magic Valley are less likely to work metal panels loose than they are shingle nail pops, provided the panels and fasteners were installed correctly. Metal also stands up well to the strong, high-elevation UV exposure that comes with Twin Falls summers.\n\nIce damming — where melting snow refreezes at the roof's edge and backs water up under the roofing material — is less of a concern with metal roofing than with shingles, since metal sheds water and snow before it has much chance to pool.",
      },
      {
        heading: 'Installation and Repair',
        body: "We install new metal roofing systems and repair existing ones, including resealing seams, replacing damaged panels, and addressing fastener issues before they lead to leaks. If you're considering metal roofing for a full replacement project, our roof replacement page covers how that process works from tear-off to final inspection.\n\nCommon repair needs on an existing metal roof include resealing around roof penetrations like vent pipes and skylights, replacing worn fasteners before they back out and create a leak path, and addressing any panels that have shifted due to wind or settling.",
      },
      {
        heading: 'Metal Roofing for Commercial Buildings',
        body: "Metal roofing is also a practical fit for commercial properties with large roof areas, where its durability and reduced maintenance needs can matter more over time than the upfront cost difference compared to other systems. See our commercial roofing page for more on how we approach larger roof systems.",
      },
      {
        heading: 'What to Ask Before Choosing Metal',
        body: "If you're deciding between metal and shingles, it helps to think about how long you plan to stay in the home, how much snow and wind your specific property typically sees, and whether you want to minimize maintenance over the years ahead. We can walk through these trade-offs with you during an estimate, including how panel color and profile affect both appearance and performance on your specific roof.",
      },
      {
        heading: 'Our Process',
        body: "As with any roofing project, we start with an inspection — of the existing roof for a repair, or of the structure and your goals for a new installation — and provide a written estimate before work begins. We'll walk you through panel profile and fastening options so you understand what's being installed and why.",
      },
    ],
    faq: [
      {
        id: 'metal-roofing-faq-1',
        category: 'materials',
        question: 'What types of metal roofing do you install?',
        answer:
          'We install standing seam and other metal roofing profiles for residential and commercial properties. We can go over the options that fit your property during your estimate.',
      },
      {
        id: 'metal-roofing-faq-2',
        category: 'timing',
        question: 'Does metal roofing hold up better in winter?',
        answer:
          "Metal roofing's smooth surface sheds snow more readily than shingles, which reduces the snow load sitting on the roof during Twin Falls winters.",
      },
      {
        id: 'metal-roofing-faq-3',
        category: 'cost',
        question: 'Is metal roofing more expensive than shingles?',
        answer: 'Material and installation costs vary by profile and project size. We provide a written estimate comparing options so you can decide what fits your budget.',
      },
      {
        id: 'metal-roofing-faq-4',
        category: 'warranty',
        question: 'Do metal roofs come with a warranty?',
        answer: 'Metal roofing typically carries a manufacturer warranty on the material and a workmanship warranty from the installer. Ask for the specific written terms during your estimate.',
      },
    ],
    relatedServices: ['roof-replacement', 'commercial-roofing'],
    relatedPosts: ['how-long-will-my-roof-really-last-a-material-by-material-breakdown', 'wildfire-risk'],
    materials: ['metal'],
  },
  {
    slug: 'storm-damage-roof-repair',
    name: 'Storm Damage Roof Repair',
    path: '/storm-damage-roof-repair-twin-falls/',
    audience: 'residential',
    title: 'Storm Damage Repair in Twin Falls, ID | Canyon Construction Services',
    metaDescription:
      'Wind or hail damaged your roof? We inspect and repair storm damage in Twin Falls and the Magic Valley. Call (208) 440-4006.',
    h1: 'Storm Damage Roof Repair in Twin Falls, Idaho',
    shortDescription: 'Wind and hail damage roof inspection and repair in the Magic Valley.',
    heroImage: null,
    sections: [
      {
        heading: 'Storm Damage Roof Repair in Twin Falls',
        body: 'Wind and hail move through the Magic Valley with Idaho\'s seasonal storms, and roofs often take the first hit. Canyon Construction Services inspects and repairs storm-damaged shingle and metal roofs for homeowners in Twin Falls and the surrounding area, addressing both the visible damage and anything it may have exposed underneath.\n\nNot every storm causes damage serious enough to need a full repair, but it\'s common for a roof to take on small issues during a storm that grow worse over the following weeks if left unaddressed.',
      },
      {
        heading: 'What Counts as Storm Damage',
        body: "Storm damage can mean missing or torn shingles after high wind, dented or creased metal panels from hail, lifted flashing, or debris damage from fallen branches. It can also be less visible — granule loss from hail impact, or shingles that were lifted and resealed poorly on their own, leaving them vulnerable to the next storm. Our inspection looks at the whole roof, not just the obviously damaged section, since storm damage doesn't always follow a neat pattern.\n\nHail damage in particular can be deceptive — a hit that only bruises a shingle without tearing it can still break down its weatherproofing layer, leading to a leak months later even though nothing looked obviously wrong right after the storm.",
      },
      {
        heading: 'Our Inspection and Repair Process',
        body: "After a storm, we inspect the roof to document the damage and determine what repair work is needed. We repair what can be repaired and explain the options when a section needs full replacement instead. Our focus is on the roof itself: identifying the damage, explaining what we find, and getting it repaired correctly.\n\nWhen a repair isn't enough to bring a section of roof back to a sound condition, we'll explain why and what a partial or full replacement of that area would involve, so you can make an informed decision rather than paying for a repair that won't hold.",
      },
      {
        heading: 'Repairing Versus Replacing After a Storm',
        body: "Storm damage doesn't always mean a full roof needs replacing. In many cases, the affected section can be repaired and blended with the surrounding roof. We'll walk you through both options when the extent of the damage makes either one reasonable, including the trade-offs of each and what to expect from the materials involved.",
      },
      {
        heading: 'Storms in the Magic Valley',
        body: 'Twin Falls and the surrounding Magic Valley see seasonal wind events and occasional hail as storm systems move through the region. Roofs that were already due for repair or replacement are the most likely to show damage after a storm, which is part of why a periodic roof inspection is worth having even in a quiet year.\n\nWind events in the Magic Valley can be localized, affecting one side of a neighborhood more than another depending on the direction a storm moves through, which is part of why we inspect the whole roof rather than assuming damage is limited to what a neighbor experienced.',
      },
      {
        heading: 'What You\'ll Learn From the Inspection',
        body: "After we inspect your roof, you'll know exactly what storm damage was found, which sections are affected, and what repair work is recommended. That information is yours to use however you need it, including for your own records or to share with anyone else involved in the decision, such as a family member or your insurance provider.",
      },
      {
        heading: 'After the Repair',
        body: "Once the repair is complete, we'll walk you through what was done. If you're working with your insurance provider on a claim, keep in mind that coverage and the claims process depend on your specific policy — your insurance provider can confirm what applies to your situation.",
      },
    ],
    faq: [
      {
        id: 'storm-damage-faq-1',
        category: 'insurance',
        question: 'Will you help me with my insurance claim?',
        answer:
          'We focus on inspecting and repairing the roof itself. For questions about coverage or the claims process, your insurance provider can confirm what applies to your specific policy.',
      },
      {
        id: 'storm-damage-faq-2',
        category: 'timing',
        question: 'How soon should I get my roof checked after a storm?',
        answer:
          "It's worth having your roof inspected soon after a storm, even if you don't see obvious damage from the ground — some damage, like granule loss or lifted flashing, isn't visible from below.",
      },
      {
        id: 'storm-damage-faq-3',
        category: 'materials',
        question: 'Do you repair hail damage on metal roofs?',
        answer: 'Yes. We inspect and repair both asphalt shingle and metal roofs for storm and hail damage.',
      },
      {
        id: 'storm-damage-faq-4',
        category: 'preparation',
        question: 'What should I do if I notice storm damage?',
        answer: "Call us to schedule an inspection. We'll document what we find and provide a written estimate for the repair.",
      },
    ],
    relatedServices: ['roof-repair', 'roof-inspection'],
    relatedPosts: [],
    materials: ['asphalt shingle', 'metal'],
  },
  {
    slug: 'roof-inspection',
    name: 'Roof Inspection',
    path: '/roof-inspection-twin-falls/',
    audience: 'residential',
    title: 'Roof Inspection in Twin Falls, ID | Canyon Construction Services',
    metaDescription:
      'Roof inspections in Twin Falls for homeowners, buyers, and sellers. Find small problems before they become costly repairs.',
    h1: 'Roof Inspections in Twin Falls, Idaho',
    shortDescription: 'Roof inspections for Twin Falls homeowners, buyers, and sellers.',
    heroImage: null,
    sections: [
      {
        heading: 'Roof Inspections for Twin Falls Homeowners',
        body: "A roof inspection is the simplest way to find out what condition your roof is actually in, rather than guessing based on its age or what you can see from the ground. Canyon Construction Services provides roof inspections for homeowners in Twin Falls and the Magic Valley — whether you're buying a home, selling one, or just want to know where your current roof stands.\n\nAn inspection also gives you a baseline. If something changes after a storm or over the following winter, having a record of the roof's condition beforehand makes it easier to tell what's new damage versus what was already there. This is especially useful if you're not planning any immediate work but want peace of mind, or if you're budgeting for a replacement a few years out and want to know how much time you realistically have.",
      },
      {
        heading: 'What We Check During an Inspection',
        body: "We look at the roofing material itself — shingles or metal panels — for signs of wear, damage, or improper past repairs. We also check flashing around chimneys, vents, and skylights, the condition of gutters, and attic ventilation, since poor ventilation can shorten a roof's life regardless of the material. You'll get a clear picture of what's in good shape and what needs attention.\n\nWe also look at how the roof meets other parts of the house — where it meets siding, where a lower roofline tucks under a higher one, and around any additions or dormers, since these transition points are common places for small leaks to start.",
      },
      {
        heading: 'When You Need an Inspection',
        body: "Common reasons to schedule an inspection include buying or selling a home, noticing a stain on a ceiling, preparing for winter after a dry summer, or simply not having had the roof looked at in several years. An inspection before you need a repair is also the best way to catch small issues — a lifted shingle, a cracked seal around a vent — before they turn into a leak.\n\nIf you've recently had storm damage, see our storm damage repair page for how that inspection and repair process works specifically for wind and hail damage.",
      },
      {
        heading: 'What Twin Falls Weather Does to a Roof Over Time',
        body: "Idaho's freeze-thaw cycles, winter snow load, seasonal wind, and strong summer UV exposure all add up over the life of a roof, even when nothing dramatic happens in any single storm. An inspection looks for the cumulative wear these conditions cause — brittle or cracked shingles, loosened fasteners, worn flashing seals — that isn't always obvious from a quick look.\n\nRoofs on the north side of a home often show different wear patterns than south-facing sections, since they hold snow and shade longer in winter while the south side takes more direct summer sun — both contribute to uneven aging across a single roof.",
      },
      {
        heading: 'Inspections for Buyers and Sellers',
        body: "If you're buying a home, a roof inspection gives you a factual basis for negotiating repairs or pricing, rather than relying on a general home inspector's roof notes alone. If you're selling, knowing your roof's condition ahead of time means fewer surprises during the buyer's own inspection, and gives you the option to address any issues before the home goes on the market.",
      },
      {
        heading: 'After the Inspection',
        body: "You'll get a straightforward rundown of what we found. If repairs are needed, we'll explain what they involve and provide a written estimate. If your roof is in good shape, you'll know that too — an inspection isn't a sales pitch, it's information about your home, and you're free to use it however you'd like, including getting a second opinion.",
      },
    ],
    faq: [
      {
        id: 'roof-inspection-faq-1',
        category: 'timing',
        question: 'How long does a roof inspection take?',
        answer: "Most residential inspections are completed in a single visit. We'll let you know if anything requires a closer look.",
      },
      {
        id: 'roof-inspection-faq-2',
        category: 'preparation',
        question: 'Do I need to do anything before an inspection?',
        answer:
          'No special preparation is needed. If you have specific concerns — a stain, a noise, a past repair — let us know so we can focus on those areas too.',
      },
      {
        id: 'roof-inspection-faq-3',
        category: 'cost',
        question: 'Is there a charge for the inspection?',
        answer:
          "Call us and we'll explain current pricing — if you're also considering a repair or replacement, we provide free estimates for that work.",
      },
      {
        id: 'roof-inspection-faq-4',
        category: 'timing',
        question: 'Should I get an inspection before buying a home?',
        answer:
          'Yes, a pre-purchase inspection is one of the most common reasons homeowners request this service, since it tells you the real condition of the roof before you close.',
      },
    ],
    relatedServices: ['roof-repair', 'roof-replacement'],
    relatedPosts: [
      'roofing-red-flags-on-a-home-inspection-report-what-to-watch-out-for',
      'why-does-my-roof-look-wavy-understanding-roof-warping-and-what-to-do-about-it',
      'roof-stains',
    ],
    materials: [],
  },
  {
    slug: 'commercial-roofing',
    name: 'Commercial Roofing',
    path: '/commercial-roofing-twin-falls/',
    audience: 'commercial',
    title: 'Commercial Roofing in Twin Falls, ID | Canyon Construction Services',
    metaDescription:
      'Commercial roof repair and replacement for Twin Falls businesses. Shingle and metal roofing systems. Request an estimate today.',
    h1: 'Commercial Roofing in Twin Falls, Idaho',
    shortDescription: 'Shingle and metal commercial roofing for Twin Falls businesses.',
    heroImage: null,
    sections: [
      {
        heading: 'Commercial Roofing in Twin Falls, Idaho',
        body: 'Commercial roofs have different demands than residential ones — larger surface areas, rooftop equipment, and less tolerance for downtime that disrupts a business. Canyon Construction Services installs and repairs shingle and metal roofing systems for commercial properties in Twin Falls and the Magic Valley, from standalone retail buildings to multi-tenant properties.\n\nA commercial roof failure doesn\'t just mean a repair bill — it can mean closed storefronts, damaged inventory, or disrupted operations, which is why catching problems early matters even more than it does for a house.',
      },
      {
        heading: 'Shingle and Metal Systems for Commercial Properties',
        body: 'We work with asphalt shingle and metal roofing systems on commercial buildings, matched to the structure and use of the property. Metal roofing is a common choice for larger commercial spans and for property owners who want to minimize long-term maintenance, while shingle systems remain a practical option for smaller commercial roofs with a more residential-style structure.\n\nThe right system for a given building depends on the roof\'s slope, size, and what\'s mounted on top of it — HVAC units, vents, and other equipment all need flashing and penetrations handled correctly, regardless of which roofing material is used.',
      },
      {
        heading: 'Signs a Commercial Roof Needs Attention',
        body: 'Commercial roofs often show problems gradually — a slow leak that appears as a stain on an interior ceiling tile, rising energy costs that point to failing insulation or ventilation, or visible wear at seams and flashing during a routine walk of the property. Because commercial roofs are harder to inspect from ground level, problems can go unnoticed longer than they would on a house.\n\nFlat or low-slope sections of a commercial roof are particularly prone to ponding water if drainage isn\'t working properly, which can accelerate wear on both shingle and metal systems well beyond what normal weather exposure would cause on its own.',
      },
      {
        heading: 'Idaho Weather and Commercial Roofs',
        body: 'Twin Falls commercial properties deal with the same seasonal factors as homes — snow load and freeze-thaw cycles in winter, occasional high wind, and strong summer UV exposure — but often across a much larger roof area, where a small vulnerability can affect a larger portion of the building. Regular attention to seams, flashing, and drainage matters more as the roof area increases.\n\nRooftop equipment also means more penetrations through the roofing material than a typical home has, and each one is a potential point for water to get in if the flashing around it isn\'t maintained.',
      },
      {
        heading: 'Minimizing Disruption to Your Business',
        body: "We understand that a commercial roofing project happens while a business is still trying to operate. We plan work to limit noise and access disruptions where possible, and can discuss scheduling options — including phased work on larger buildings, early morning starts, or weekend scheduling — during the estimate process.",
      },
      {
        heading: 'Ongoing Maintenance for Commercial Roofs',
        body: "Beyond one-time repairs or a full replacement, periodic inspections can catch small commercial roof issues — a cracked pipe boot, a seam starting to separate — before they turn into an interior leak affecting your business operations. We can discuss a periodic inspection schedule that fits your property, your budget, and how the building is used throughout the year.",
      },
      {
        heading: 'Working With Property Managers and Owners',
        body: "We provide a written estimate and a clear scope of work before starting any commercial project, and can work around your business hours where possible to minimize disruption. Whether you're a property manager handling multiple buildings or a business owner with a single location, we'll walk the roof with you and explain what we find in plain terms, without assuming you already speak the trade's vocabulary.",
      },
    ],
    faq: [
      {
        id: 'commercial-roofing-faq-1',
        category: 'materials',
        question: 'What roofing systems do you install on commercial buildings?',
        answer: 'We install and repair asphalt shingle and metal roofing systems on commercial properties in Twin Falls and the Magic Valley.',
      },
      {
        id: 'commercial-roofing-faq-2',
        category: 'timing',
        question: 'Can you work around our business hours?',
        answer: 'We can often schedule commercial work to minimize disruption — let us know your constraints when you request an estimate.',
      },
      {
        id: 'commercial-roofing-faq-3',
        category: 'preparation',
        question: 'Who should be on-site during a commercial roof inspection?',
        answer: "It helps to have a property manager or facilities contact available, but it isn't required for the initial walk-through.",
      },
      {
        id: 'commercial-roofing-faq-4',
        category: 'cost',
        question: 'How do you price commercial roofing work?',
        answer: 'Commercial pricing depends on the size of the roof, the system, and the scope of work. We provide a written estimate after assessing the property.',
      },
    ],
    relatedServices: ['metal-roofing', 'roof-repair'],
    relatedPosts: [],
    // Only shingle and metal are confirmed for commercial work — docs/06 #5.
    materials: ['asphalt shingle', 'metal'],
  },
];
