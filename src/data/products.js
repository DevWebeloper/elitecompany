import { assetUrl } from '../utils/assetUrl';

export const ELITE_COLORS = [
  {
    id: 'black',
    name: 'Black',
    hex: '#18181A',
    tone: 'dark',
    tagline: 'Deep Basalt Onyx',
    description:
      'Intense obsidian black with velvety depth. The definitive statement finish for modern luxury architecture.',
    swatchImg: assetUrl('/assets/swatch-black.jpg'),
    topImg: assetUrl('/assets/sink-top-black.jpg'),
    perspectiveImg: assetUrl('/assets/sink-perspective-black.png'),
  },
  {
    id: 'carbon-black',
    name: 'Carbon Black',
    hex: '#3E3F42',
    tone: 'dark',
    tagline: 'Matte Technical Carbon',
    description:
      'Architectural graphite tone with textured carbon sheen. Naturally conceals micro-scratches and mineral spots.',
    swatchImg: assetUrl('/assets/swatch-carbon-black.jpg'),
    topImg: assetUrl('/assets/sink-top-carbon-black.jpg'),
    perspectiveImg: assetUrl('/assets/sink-perspective-carbon-black.png'),
  },
  {
    id: 'dark-grey',
    name: 'Dark Grey',
    hex: '#6E6B74',
    tone: 'dark',
    tagline: 'Basalt Slate Grey',
    description:
      'Rich mineral slate with subtle cool undertones. Complements dark sintered stone and brushed gunmetal taps.',
    swatchImg: assetUrl('/assets/swatch-dark-grey.jpg'),
    topImg: assetUrl('/assets/sink-top-dark-grey.jpg'),
    perspectiveImg: assetUrl('/assets/sink-perspective-dark-grey.png'),
  },
  {
    id: 'light-grey',
    name: 'Light Grey',
    hex: '#9CA0A5',
    tone: 'medium',
    tagline: 'Urban Concrete Grey',
    description:
      'Neutral contemporary grey inspired by polished micro-cement and Nordic stone textures.',
    swatchImg: assetUrl('/assets/swatch-light-grey.jpg'),
    topImg: assetUrl('/assets/sink-top-light-grey.jpg'),
    perspectiveImg: assetUrl('/assets/sink-perspective-light-grey.png'),
  },
  {
    id: 'white',
    name: 'White',
    hex: '#F4F4F6',
    tone: 'light',
    tagline: 'Pure Alpine Quartz',
    description:
      'A brilliant, pristine alpine white surface. Non-porous PureTech™ formulation prevents coffee, wine, and tea stains.',
    swatchImg: assetUrl('/assets/swatch-white.jpg'),
    topImg: assetUrl('/assets/sink-top-white.jpg'),
    perspectiveImg: assetUrl('/assets/sink-perspective-white.png'),
  },
  {
    id: 'creamy-white',
    name: 'Creamy White',
    hex: '#DDD6C7',
    tone: 'light',
    tagline: 'Limestone Sandstone',
    description:
      'Warm limestone ivory infused with subtle warm mineral grains. Balances natural oak cabinetry and warm travertine.',
    swatchImg: assetUrl('/assets/swatch-creamy-white.jpg'),
    topImg: assetUrl('/assets/sink-top-creamy-white.jpg'),
    perspectiveImg: assetUrl('/assets/sink-perspective-creamy-white.png'),
  },
  {
    id: 'coffee',
    name: 'Coffee',
    hex: '#4A3E39',
    tone: 'dark',
    tagline: 'Roasted Espresso Earth',
    description:
      'Deep, comforting roasted mocha tones. Combines gracefully with walnut joinery, brushed brass, and bronze accents.',
    swatchImg: assetUrl('/assets/swatch-coffee.jpg'),
    topImg: assetUrl('/assets/sink-top-coffee.jpg'),
    perspectiveImg: assetUrl('/assets/sink-perspective-coffee.png'),
  },
];

export const INSTALLATION_TYPES = [
  {
    id: 'undermount',
    title: 'Undermount',
    tagline: 'Seamless Counter Transition',
    description:
      'Installed beneath the countertop for effortless wiping of water and food debris directly into the bowls. Ideal for quartz, granite, and sintered stone countertops.',
    countertopSuitability: 'Natural Stone, Quartz Composite, Sintered Porcelain, Solid Surface',
  },
  {
    id: 'topmount',
    title: 'Top-Mount / Inset',
    tagline: 'Ultra-Slim Architectural Rim',
    description:
      'Dropped into the cutout with a precision-machined 6 mm low-profile rim. Universal installation compatible with all worktop materials including laminate and butcher block.',
    countertopSuitability: 'Universal (All countertop types including Laminate & Solid Wood)',
  },
  {
    id: 'flushmount',
    title: 'Flush-Mount',
    tagline: 'Continuous Horizon Level',
    description:
      'Recessed into a CNC-milled rebate so the top of the sink rim sits completely coplanar with the worktop surface.',
    countertopSuitability: 'CNC Milled Stone, High-Density Compact Laminate',
  },
];

export const FLAGSHIP_PRODUCT = {
  model: 'ETD-855D',
  title: 'ELITE ETD-855D Granite Double Bowl Sink',
  tagline: 'German Engineering Meets Architectural Purity',
  category: 'Granite Quartz Composite Sink',
  msrp: 640,
  price: 580,
  currency: 'EUR',
  stockStatus: 'In Stock — European Distribution Center (Prague)',
  leadTime: '3–5 Business Days delivery across EU',
  specifications: {
    overallSize: '855 × 507 mm',
    bowlSize: '390 × 400 mm (symmetrical twin bowls)',
    bowlDepth: '210 mm (8.27 in)',
    cabinetBaseWidth: 'Min. 900 mm',
    materialComposition: '80% German quartz sand, 20% high-grade acrylic resins',
    technology: 'PureTech™ Antibacterial & Ultra-Durable Acoustic Composite',
    heatResistance: 'Up to 280°C (536°F)',
    cutoutSizeTopmount: '835 × 487 mm (R10 mm)',
    cutoutSizeUndermount: 'Templated DXF / Cutout template included in box',
    drainDiameter: 'Standard 3.5" (90 mm) with dual designer basket strainers',
    weight: '18.8 kg (41.4 lbs)',
    warranty: '15-Year European Limited Warranty',
    origin: 'Engineered in Germany • Distributed by Elite Import & Export S.R.O, Prague',
  },
  includedInBox: [
    'ELITE ETD-855D Quartz Composite Granite Sink',
    '2× 3.5" Heavy-duty stainless steel basket strainer waste kits',
    'Integrated twin overflow plumbing kit with flexible connector',
    'Universal undermount and top-mount mounting clamp brackets',
    '1:1 Full-scale precision cutout paper template',
    'Care & maintenance manual in EN, DE, CZ',
  ],
  features: [
    {
      title: 'PureTech™ Antibacterial',
      description:
        'Active ionic protection embedded throughout the matrix inhibits 99.9% of bacterial growth naturally without chemical coatings.',
    },
    {
      title: 'Rock-Hard Quartz Matrix',
      description:
        'Composed of 80% natural quartz crystal—the fourth hardest mineral on Earth—delivering unmatched scratch and impact resistance.',
    },
    {
      title: 'Acoustic Sound Dampening',
      description:
        'Dense quartz composite deadens water rushing and garbage disposal noise by up to 80% compared to conventional stainless steel.',
    },
    {
      title: 'Thermal Shock Resistance',
      description:
        'Withstands boiling liquids, direct pot contact up to 280°C, and sudden cold cycles without micro-fissuring or thermal warping.',
    },
    {
      title: 'Stain-Proof Lotus Surface',
      description:
        'Hydrophobic non-porous structure causes liquids to bead and roll off. Red wine, beetroot, mustard, and curry wipe clean with warm soapy water.',
    },
  ],
  siblingProducts: [
    {
      model: 'ETS-615',
      name: 'Single Bowl Compact',
      dimensions: '615 × 510 × 200 mm',
      bowl: '545 × 400 mm',
      minCabinet: '600 mm',
      price: 395,
      colorsCount: 7,
    },
    {
      model: 'ETS-700',
      name: 'Single Bowl Wide',
      dimensions: '700 × 510 × 200 mm',
      bowl: '630 × 400 mm',
      minCabinet: '800 mm',
      price: 440,
      colorsCount: 7,
    },
    {
      model: 'ETS-790-V',
      name: 'Single Bowl with Integrated Drainer',
      dimensions: '790 × 500 × 200 mm',
      bowl: '490 × 400 mm',
      minCabinet: '600 mm',
      price: 495,
      colorsCount: 7,
    },
    {
      model: 'ETD-855D',
      name: 'Flagship Double Bowl',
      dimensions: '855 × 507 × 210 mm',
      bowl: '390 × 400 mm (×2)',
      minCabinet: '900 mm',
      price: 580,
      colorsCount: 7,
      isCurrent: true,
    },
  ],
};

export const COMPANY_INFO = {
  legalName: 'Elite Import & Export S.R.O',
  founded: 2022,
  headquarters: 'Prague, Czech Republic',
  address: 'Prague, Czech Republic',
  email: 'info@elitecompany-de.com',
  website: 'www.elitecompany-de.com',
  tagline: 'European Quality • Refined Design • Enduring Performance',
  badge: 'Engineered in Germany',
};
