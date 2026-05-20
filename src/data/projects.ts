import type { Project } from '../types/project';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Bespoke Silk Wedding Gown',
    category: 'Women',
    description: 'A hand-draped wedding dress crafted from 100% pure silk satin, featuring a delicate cathedral train and individually stitched pearl detailing.',
    longDescription: 'Created over a span of 12 weeks, this wedding gown is a testament to the art of haute couture tailoring. The process began with detailed body measurements, followed by three toile fittings in cotton muslin to perfect the silhouette. The final piece is cut from premium heavy-weight silk satin, with an inner structured corset, hand-draped cowl neck, and a cascade of 120 hand-sewn freshwater pearls trailing down the back.',
    coverImage: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800',
      'https://images.unsplash.com/photo-1549416878-b9ca95e2690a?q=80&w=800',
      'https://images.unsplash.com/photo-1518049362265-d5b2a946763c?q=80&w=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1520637102912-2df6bb2aec6d?q=80&w=800', // Draping / pattern stage
    afterImage: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?q=80&w=800',  // Completed gown
    clientName: 'Eleanor Vance',
    date: 'April 2026',
    specs: {
      fabric: '100% Silk Satin & French Chantilly Lace',
      duration: '72 Hours (over 12 weeks)',
      serviceType: 'Bespoke Bridal Customization'
    }
  },
  {
    id: '2',
    title: 'Italian Wool Double-Breasted Suit',
    category: 'Men',
    description: 'A classic double-breasted suit tailored from Vitale Barberis Canonico Super 120s wool, featuring structured shoulders and a modern slim silhouette.',
    longDescription: 'This bespoke two-piece suit combines classic Neapolitan tailoring traditions with a contemporary fit. Structured with a half-canvas chest piece that conforms to the wearer over time, it features hand-carved horn buttons, functional surgeon cuffs, and double vents. Every seam is pressed and shaped by hand to create clean lines and an impeccable drape.',
    coverImage: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?q=80&w=800',
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1558278224-5db379207748?q=80&w=800', // Measuring and fabric cut
    afterImage: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=800',  // Finished look
    clientName: 'Alexander Hayes',
    date: 'March 2026',
    specs: {
      fabric: 'Vitale Barberis Canonico Super 120s Wool',
      duration: '45 Hours',
      serviceType: 'Bespoke Tailoring'
    }
  },
  {
    id: '3',
    title: 'Luxury Gold-Embroidered Kaftan',
    category: 'Traditional',
    description: 'A stunning traditional Kaftan made from rich emerald silk velvet, detailed with intricate gold metallic threadwork (Zardozi) and silk beadings.',
    longDescription: 'Crafted as a custom traditional heritage garment, this emerald kaftan highlights hand-guided metallic Zardozi embroidery. The design features a modern oversized silhouette with tailored inner structure to retain the garment\'s shape. Over 300 gold glass beads and sequins were stitched along the neckline, cuffs, and central placket, giving it an unmatched weight and luxury shine.',
    coverImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800',
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1504198266287-1659872e6590?q=80&w=800', // Sewing threads / setup
    afterImage: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=800',
    clientName: 'Layla Al-Mansoor',
    date: 'February 2026',
    specs: {
      fabric: 'Emerald Silk Velvet & Metallic Gold Thread',
      duration: '60 Hours',
      serviceType: 'Heritage Custom Wear'
    }
  },
  {
    id: '4',
    title: 'Tailored Linen Summer Blazer',
    category: 'Custom',
    description: 'A modern, lightweight unlined blazer cut from premium Belgian linen, perfect for warm-climate elegance.',
    longDescription: 'This blazer is designed for relaxed luxury. By omitting the traditional lining and heavy canvasing, the blazer retains a feather-light feel while maintaining a smart structural shape. Features hand-finished flat-felled seams on the interior to ensure visual perfection inside and out, finished with premium mother-of-pearl buttons.',
    coverImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
      'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1605493744188-1f4a9b23e71d?q=80&w=800', // Raw draping
    afterImage: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=800',
    clientName: 'Oliver Sterling',
    date: 'May 2026',
    specs: {
      fabric: '100% Belgian Flax Linen',
      duration: '28 Hours',
      serviceType: 'Custom Resort Tailoring'
    }
  },
  {
    id: '5',
    title: 'Velvet Evening Gown Restyling',
    category: 'Custom',
    description: 'A sophisticated restyling and resizing service that transformed a vintage velvet gown into a modern, form-fitting silhouette.',
    longDescription: 'This alteration project showcases the power of garment reconstruction. The client brought in a vintage 1980s velvet gown with oversized puff sleeves and a boxy torso. We completely disassembled the garment, removed the shoulder pads, re-cut the bodice to fit the client\'s precise contemporary proportions, and created an elegant off-the-shoulder neckline. The result is a timeless, modern gown that retains the sentimental vintage fabric.',
    coverImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1528255671579-01b9e182ed1d?q=80&w=800', // vintage fabric/pins
    afterImage: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800',
    clientName: 'Sofia Rossi',
    date: 'January 2026',
    specs: {
      fabric: 'Royal Blue Cotton Velvet',
      duration: '20 Hours',
      serviceType: 'Creative Reconstruction & Alteration'
    }
  },
  {
    id: '6',
    title: 'Double-Breasted Cashmere Kids Coat',
    category: 'Kids',
    description: 'A miniature luxury double-breasted winter coat tailored from soft cashmere-wool blend, featuring contrast satin lining.',
    longDescription: 'Applying couture tailoring standards to childrenswear, this coat is crafted from an ultra-soft navy cashmere and wool blend. It is fully lined with a premium breathable Bemberg satin in contrasting warm beige, and features detailed miniature hand-stitched buttonholes, custom-anchored buttons for safety, and an adjustable back martingale belt.',
    coverImage: 'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=800',
    images: [
      'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=800',
      'https://images.unsplash.com/photo-1519457431-44ccd64a579b?q=80&w=800'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1516962215378-7fa2e137ae93?q=80&w=800', // Paper pattern
    afterImage: 'https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?q=80&w=800',
    clientName: 'The Sterling Family',
    date: 'December 2025',
    specs: {
      fabric: '80% Cashmere Wool & Bemberg Satin Lining',
      duration: '18 Hours',
      serviceType: 'Bespoke Kids Wear'
    }
  }
];
