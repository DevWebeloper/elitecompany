import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Droplet,
  VolumeX,
  Flame,
  Check,
  Layers,
  Compass,
  Package,
  Maximize2,
  Sliders,
  Award,
  Eye,
  Building,
  CheckCircle2,
} from 'lucide-react';
import { ELITE_COLORS, FLAGSHIP_PRODUCT, COMPANY_INFO } from '../data/products';
import { assetUrl } from '../utils/assetUrl';
import '../styles/home.css';

// Atmospheric Hero Background Presets
const HERO_BACKGROUNDS = [
  {
    id: 'penthouse',
    name: 'Berlin Penthouse',
    subtitle: 'Smoked Oak & Matte Black',
    src: assetUrl('/assets/bg-penthouse-kitchen.jpg'),
    defaultColorId: 'carbon-black',
  },
  {
    id: 'villa',
    name: 'Tuscan Villa',
    subtitle: 'Honed Travertine & Brass',
    src: assetUrl('/assets/bg-villa-kitchen.jpg'),
    defaultColorId: 'creamy-white',
  },
  {
    id: 'studio-noir',
    name: 'Munich Loft',
    subtitle: 'Architectural Basalt & Steel',
    src: assetUrl('/assets/kitchen-black.webp'),
    defaultColorId: 'dark-grey',
  },
  {
    id: 'nordic',
    name: 'Nordic Residence',
    subtitle: 'Pale Ash & Alabaster White',
    src: assetUrl('/assets/kitchen-cream.webp'),
    defaultColorId: 'white',
  },
];

// Architectural Living Spaces
const ARCHITECTURAL_SPACES = [
  {
    id: 'penthouse-suite',
    title: 'The Sky Penthouse Suite',
    location: 'Berlin, Germany',
    concept: 'Fluted smoked oak cabinetry, illuminated cove lighting, and seamless monolithic island.',
    pairedColor: 'Carbon Black',
    pairedColorId: 'carbon-black',
    model: 'ETD-855D Double Bowl',
    image: assetUrl('/assets/bg-penthouse-kitchen.jpg'),
    tag: 'Contemporary Luxury',
  },
  {
    id: 'mediterranean-villa',
    title: 'The Travertine Stone Villa',
    location: 'Mallorca, Spain',
    concept: 'Natural sunlit travertine stone island, warm brass fixtures, and indoor-outdoor terrace vista.',
    pairedColor: 'Cashmere Cream',
    pairedColorId: 'creamy-white',
    model: 'ETD-855D Double Bowl',
    image: assetUrl('/assets/bg-villa-kitchen.jpg'),
    tag: 'Warm Architectural',
  },
  {
    id: 'industrial-loft',
    title: 'The Modernist Industrial Loft',
    location: 'Zurich, Switzerland',
    concept: 'Dark quartz composite countertops, minimalist handleless joinery, and shadow-gap details.',
    pairedColor: 'Basalt Dark Grey',
    pairedColorId: 'dark-grey',
    model: 'ETD-855D Double Bowl',
    image: assetUrl('/assets/kitchen-black.webp'),
    tag: 'Minimalist Noir',
  },
  {
    id: 'nordic-residence',
    title: 'The Scandinavian Atelier',
    location: 'Copenhagen, Denmark',
    concept: 'Natural pale birch, light marble surfaces, and airy morning illumination.',
    pairedColor: 'Alabaster White',
    pairedColorId: 'white',
    model: 'ETD-855D Double Bowl',
    image: assetUrl('/assets/kitchen-cream.webp'),
    tag: 'Nordic Clean',
  },
];

export default function HomePage({ onOpenQuoteModal, currencySymbol, formatPrice }) {
  // Hero atmospheric background state
  const [activeHeroBg, setActiveHeroBg] = useState(HERO_BACKGROUNDS[0]);
  // Hero sink color selection
  const [activeHeroColor, setActiveHeroColor] = useState(ELITE_COLORS[0]);
  // Hero card view mode: 'perspective' | 'top' | 'blueprint'
  const [heroViewMode, setHeroViewMode] = useState('perspective');

  // Collection category filter
  const [collectionFilter, setCollectionFilter] = useState('all');
  // Card interactive finish preview state map: { [model]: colorId }
  const [cardColorPreview, setCardColorPreview] = useState({});

  // Filter products
  const filteredProducts = FLAGSHIP_PRODUCT.siblingProducts.filter((prod) => {
    if (collectionFilter === 'double') return prod.bowl.includes('Twin') || prod.name.includes('Double');
    if (collectionFilter === 'single') return !prod.bowl.includes('Twin') && !prod.name.includes('Double');
    return true;
  });

  // Get current hero sink image based on selected view mode
  const getHeroSinkImage = () => {
    if (heroViewMode === 'blueprint') return assetUrl('/assets/blueprint-etd-855d.png');
    if (heroViewMode === 'top') return activeHeroColor.topImg;
    return activeHeroColor.perspectiveImg;
  };

  return (
    <main>
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION WITH DYNAMIC LUXURY BACKGROUNDS                 */}
      {/* ========================================================================= */}
      <section className="hero">
        <div className="hero-bg">
          <img
            key={activeHeroBg.id}
            src={activeHeroBg.src}
            alt={activeHeroBg.name}
            className="hero-bg-img fade-in"
          />
          <div className="hero-gradient-overlay" />
          <div className="hero-mesh-glow" />
        </div>

        <div className="container hero-content">
          <div>
            <div className="hero-badge-row">
              <span className="section-tag">
                <Sparkles size={13} />
                <span>Engineered in Germany</span>
              </span>
              <span className="badge badge-gold">PureTech™ Quartz Matrix</span>
              <span className="badge badge-outline">15-Year Guarantee</span>
            </div>

            <h1 className="hero-title">
              ARCHITECTURAL <br />
              <span className="hero-title-highlight">GRANITE SINKS</span>
            </h1>

            <p className="hero-desc">
              Precision-molded from 80% pure German quartz crystal. Exceptional acoustic silence,
              antibacterial hygiene, and 7 enduring architectural finishes designed for modern European culinary spaces.
            </p>

            <div className="hero-actions">
              <Link
                to={`/product?color=${activeHeroColor.id}`}
                className="btn btn-gold btn-lg"
              >
                <span>Configure ETD-855D</span>
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Quick Background Atmosphere Switcher */}
            <div className="hero-bg-picker-bar">
              <div className="hero-bg-picker-label">
                <span style={{ color: 'var(--text-muted)' }}>Kitchen Setting:</span>
                <strong style={{ color: 'var(--accent-gold)' }}>{activeHeroBg.name}</strong>
              </div>
              <div className="hero-bg-pill-group">
                {HERO_BACKGROUNDS.map((bg) => (
                  <button
                    key={bg.id}
                    type="button"
                    className={`hero-bg-pill ${activeHeroBg.id === bg.id ? 'active' : ''}`}
                    onClick={() => {
                      setActiveHeroBg(bg);
                      const matchingColor = ELITE_COLORS.find((c) => c.id === bg.defaultColorId);
                      if (matchingColor) setActiveHeroColor(matchingColor);
                    }}
                  >
                    <span>{bg.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="hero-stats">
              <div>
                <div className="hero-stat-val">80%</div>
                <div className="hero-stat-label">Bavarian Quartz Crystal</div>
              </div>
              <div>
                <div className="hero-stat-val">280°C</div>
                <div className="hero-stat-label">Thermal Tolerance</div>
              </div>
              <div>
                <div className="hero-stat-val">15 YR</div>
                <div className="hero-stat-label">European Guarantee</div>
              </div>
            </div>
          </div>

          {/* Interactive Hero Showcase Card */}
          <div className="hero-visualizer-card">
            <div className="hero-visualizer-header">
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                  <span className="badge badge-gold">Flagship Showcase</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>EN 13310 Certified</span>
                </div>
                <h3 className="hero-visualizer-model">{FLAGSHIP_PRODUCT.model} Double Bowl</h3>
                <p className="hero-visualizer-dim">855 × 507 mm • Twin 390 × 400 mm Bowls</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block' }}>
                  Starting from
                </span>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {formatPrice(FLAGSHIP_PRODUCT.price)}
                </span>
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="hero-view-switch-row">
              <button
                type="button"
                className={`hero-view-pill ${heroViewMode === 'perspective' ? 'active' : ''}`}
                onClick={() => setHeroViewMode('perspective')}
              >
                3D Perspective
              </button>
              <button
                type="button"
                className={`hero-view-pill ${heroViewMode === 'top' ? 'active' : ''}`}
                onClick={() => setHeroViewMode('top')}
              >
                Top Plan
              </button>
              <button
                type="button"
                className={`hero-view-pill ${heroViewMode === 'blueprint' ? 'active' : ''}`}
                onClick={() => setHeroViewMode('blueprint')}
              >
                CAD Blueprint
              </button>
            </div>

            {/* Sink Showcase Stage */}
            <div className="hero-sink-stage">
              <img
                key={`${activeHeroColor.id}-${heroViewMode}`}
                src={getHeroSinkImage()}
                alt={`ELITE ETD-855D in ${activeHeroColor.name}`}
                className="hero-sink-img fade-in"
              />
            </div>

            {/* Quick Swatch Bar */}
            <div className="quick-swatch-box">
              <div className="quick-swatch-label-row">
                <span style={{ color: 'var(--text-muted)' }}>Selected Finish:</span>
                <span className="quick-swatch-color-name">
                  {activeHeroColor.name} ({activeHeroColor.tagline})
                </span>
              </div>

              <div className="quick-swatch-list">
                {ELITE_COLORS.map((color) => {
                  const isSelected = activeHeroColor.id === color.id;
                  return (
                    <button
                      key={color.id}
                      type="button"
                      className={`quick-swatch-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => setActiveHeroColor(color)}
                      title={`${color.name} - ${color.tagline}`}
                      aria-label={color.name}
                    >
                      <div
                        className="quick-swatch-inner"
                        style={{
                          backgroundImage: `url(${color.swatchImg})`,
                          backgroundColor: color.hex,
                          backgroundSize: 'cover',
                        }}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="hero-quick-swatch-footer" style={{ marginTop: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Active Finish: <strong style={{ color: 'var(--text-primary)' }}>{activeHeroColor.name}</strong>
                </span>
                <Link
                  to={`/product?color=${activeHeroColor.id}`}
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 700,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <span>Open Full Configurator</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. ARCHITECTURAL LIVING SPACES (NEW PHOTO-REALISTIC BACKGROUND SHOWCASE)   */}
      {/* ========================================================================= */}
      <section className="section" id="spaces" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Building size={14} />
              <span>Architectural Harmony</span>
            </span>
            <h2 className="section-title">ELITE Sinks in Distinct Architectural Spaces</h2>
            <p className="section-subtitle">
              Explore how our 7 European quartz composite finishes seamlessly integrate with modern marble,
              fluted dark timber, travertine, and minimalist concrete interiors.
            </p>
          </div>

          <div className="spaces-gallery-grid">
            {ARCHITECTURAL_SPACES.map((space) => (
              <div key={space.id} className="space-showcase-card">
                <div className="space-card-image-wrap">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="space-card-img"
                    loading="lazy"
                  />
                  <div className="space-card-overlay" />
                  <span className="space-tag-badge">{space.tag}</span>
                  <span className="space-location-badge">{space.location}</span>
                </div>

                <div className="space-card-content">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <h3 className="space-card-title">{space.title}</h3>
                  </div>
                  <p className="space-card-concept">{space.concept}</p>

                  <div className="space-card-meta-row">
                    <div className="space-meta-item">
                      <span className="space-meta-label">Featured Finish</span>
                      <strong className="space-meta-value" style={{ color: 'var(--accent-gold)' }}>
                        {space.pairedColor}
                      </strong>
                    </div>
                    <div className="space-meta-item">
                      <span className="space-meta-label">Integrated Sink</span>
                      <strong className="space-meta-value">{space.model}</strong>
                    </div>
                  </div>

                  <div className="space-card-action">
                    <Link
                      to={`/product?color=${space.pairedColorId}`}
                      className="btn btn-outline btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Configure This Architectural Style</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PURETECH™ MATERIAL SCIENCE (WITH HIGH-RES MACRO BACKGROUND)            */}
      {/* ========================================================================= */}
      <section className="section section-macro-bg" id="technology">
        <div className="macro-bg-layer">
          <img
            src={assetUrl('/assets/bg-quartz-matrix.jpg')}
            alt="PureTech German Quartz Matrix Aggregate Close Up"
            className="macro-bg-img"
          />
          <div className="macro-gradient-overlay" />
        </div>

        <div className="container relative-z">
          <div className="section-header">
            <span className="section-tag">
              <Sparkles size={14} />
              <span>PureTech™ Quartz Matrix</span>
            </span>
            <h2 className="section-title">Formulated for Decades of Culinary Mastery</h2>
            <p className="section-subtitle">
              German quartz composites bond dense natural Bavarian crystals with proprietary acrylic resins to create
              an impervious, rock-solid surface that outperforms traditional metal sinks.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card feature-card-glass">
              <div className="feature-icon-wrapper">
                <Sparkles size={24} />
              </div>
              <h3 className="feature-card-title">PureTech™ Antibacterial Matrix</h3>
              <p className="feature-card-desc">
                Integrated active hygienic barrier prevents 99.9% of bacterial colonization without chemicals,
                maintaining food-grade hygiene directly on the surface.
              </p>
              <div className="feature-card-badge">EN 13310 Certified</div>
            </div>

            <div className="feature-card feature-card-glass">
              <div className="feature-icon-wrapper">
                <VolumeX size={24} />
              </div>
              <h3 className="feature-card-title">Acoustic Silence Engineering</h3>
              <p className="feature-card-desc">
                High-density composite structure absorbs up to 80% of running water noise, dish clatter, and garbage
                disposal vibration for serene open-concept living.
              </p>
              <div className="feature-card-badge">80% Noise Absorption</div>
            </div>

            <div className="feature-card feature-card-glass">
              <div className="feature-icon-wrapper">
                <Flame size={24} />
              </div>
              <h3 className="feature-card-title">280°C Thermal Shock Resistance</h3>
              <p className="feature-card-desc">
                Boiling pasta water, hot cast-iron skillets, and rapid thermal swings will not induce cracking,
                warping, or surface discoloration.
              </p>
              <div className="feature-card-badge">DIN Tested to 280°C</div>
            </div>

            <div className="feature-card feature-card-glass">
              <div className="feature-icon-wrapper">
                <Droplet size={24} />
              </div>
              <h3 className="feature-card-title">Hydrophobic Lotus Effect</h3>
              <p className="feature-card-desc">
                Micro-sealed pores cause liquids to bead dynamically. Organic pigments from espresso, red wine,
                and turmeric wipe clean with a damp microfiber cloth.
              </p>
              <div className="feature-card-badge">0.03% Water Absorption</div>
            </div>
          </div>

          {/* Quick Technology Metrics Bar */}
          <div className="macro-metrics-bar">
            <div className="macro-metric-item">
              <span className="macro-metric-number">80%</span>
              <span className="macro-metric-title">Bavarian Quartz Sand</span>
              <span className="macro-metric-sub">Mohs Scale 7 Hardness</span>
            </div>
            <div className="macro-metric-item">
              <span className="macro-metric-number">20%</span>
              <span className="macro-metric-title">High-Grade Acrylic Matrix</span>
              <span className="macro-metric-sub">Elasticity & Impact Bond</span>
            </div>
            <div className="macro-metric-item">
              <span className="macro-metric-number">280°C</span>
              <span className="macro-metric-title">Continuous Thermal Rating</span>
              <span className="macro-metric-sub">No Thermal Cracking</span>
            </div>
            <div className="macro-metric-item">
              <span className="macro-metric-number">15 YR</span>
              <span className="macro-metric-title">European Warranty</span>
              <span className="macro-metric-sub">Full Structural Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. REDESIGNED SINK COLLECTION WITH INTERACTIVE FINISH PREVIEW             */}
      {/* ========================================================================= */}
      <section className="section" id="collection" style={{ background: 'var(--bg-surface)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Layers size={14} />
              <span>Product Lineup</span>
            </span>
            <h2 className="section-title">The ELITE Granite Collection</h2>
            <p className="section-subtitle">
              Precision-molded double bowl flagships and spacious single bowl configurations engineered to strict European standards.
            </p>

            {/* Filter Tabs */}
            <div className="collection-filter-tabs">
              <button
                type="button"
                className={`filter-tab ${collectionFilter === 'all' ? 'active' : ''}`}
                onClick={() => setCollectionFilter('all')}
              >
                All Models ({FLAGSHIP_PRODUCT.siblingProducts.length})
              </button>
              <button
                type="button"
                className={`filter-tab ${collectionFilter === 'double' ? 'active' : ''}`}
                onClick={() => setCollectionFilter('double')}
              >
                Double Bowl
              </button>
              <button
                type="button"
                className={`filter-tab ${collectionFilter === 'single' ? 'active' : ''}`}
                onClick={() => setCollectionFilter('single')}
              >
                Single Bowl & Drainer
              </button>
            </div>
          </div>

          <div className="collection-grid">
            {filteredProducts.map((prod) => {
              const activeColorId = cardColorPreview[prod.model] || (prod.isCurrent ? activeHeroColor.id : 'carbon-black');
              const activeColorObj = ELITE_COLORS.find((c) => c.id === activeColorId) || ELITE_COLORS[0];

              return (
                <div
                  key={prod.model}
                  className={`collection-card ${prod.isCurrent ? 'featured' : ''}`}
                >
                  {prod.isCurrent && (
                    <span className="badge badge-gold collection-featured-badge">
                      Flagship Prototype
                    </span>
                  )}

                  <div className="collection-card-header">
                    <div className="collection-dim-tag">{prod.dimensions}</div>
                    <h3 className="collection-model-title">{prod.model}</h3>
                    <p className="collection-model-subtitle">{prod.name}</p>
                  </div>

                  {/* Visual Stage with Blueprint Grid Background */}
                  <div className="collection-stage">
                    <img
                      key={`${prod.model}-${activeColorId}`}
                      src={prod.isCurrent ? activeColorObj.topImg : assetUrl('/assets/sink-top-carbon-black.jpg')}
                      alt={prod.model}
                      className="collection-sink-image fade-in"
                    />
                  </div>

                  {/* Interactive Color Preview Swatches for this Card */}
                  <div className="collection-card-swatches">
                    <span className="collection-swatches-label">
                      {prod.isCurrent ? 'Preview Finish:' : 'Available Finishes (7 European Colors):'}
                    </span>
                    <div className="collection-swatches-row">
                      {ELITE_COLORS.map((color) => (
                        <button
                          key={color.id}
                          type="button"
                          disabled={!prod.isCurrent}
                          aria-disabled={!prod.isCurrent}
                          className={`mini-swatch-dot ${activeColorId === color.id ? 'active' : ''}`}
                          style={{
                            backgroundColor: color.hex,
                            cursor: prod.isCurrent ? 'pointer' : 'not-allowed',
                            opacity: prod.isCurrent ? 1 : (color.id === 'carbon-black' ? 0.9 : 0.4),
                          }}
                          title={
                            prod.isCurrent
                              ? color.name
                              : `${color.name} (3D preview exclusive to ETD-855D)`
                          }
                          onClick={() => {
                            if (prod.isCurrent) {
                              setCardColorPreview((prev) => ({ ...prev, [prod.model]: color.id }));
                            }
                          }}
                          aria-label={
                            prod.isCurrent
                              ? `Preview ${prod.model} in ${color.name}`
                              : `${color.name} finish available for ${prod.name}`
                          }
                        />
                      ))}
                    </div>
                  </div>

                  <div className="collection-specs-list">
                    <div className="collection-spec-item">
                      <span>Bowl Dimensions:</span>
                      <strong>{prod.bowl}</strong>
                    </div>
                    <div className="collection-spec-item">
                      <span>Min Cabinet Base:</span>
                      <strong>{prod.minCabinet}</strong>
                    </div>
                    <div className="collection-spec-item">
                      <span>Mounting Options:</span>
                      <strong style={{ color: 'var(--accent-gold)' }}>Topmount / Undermount</strong>
                    </div>
                  </div>

                  <div className="collection-card-footer">
                    <div>
                      <span className="collection-price-label">MSRP Guide</span>
                      <span className="collection-price-val">
                        {formatPrice(prod.price)}
                      </span>
                    </div>

                    {prod.isCurrent ? (
                      <Link to={`/product?color=${activeColorId}`} className="btn btn-gold btn-sm">
                        <span>Configure</span>
                        <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() =>
                          onOpenQuoteModal({
                            model: prod.model,
                            title: prod.name,
                            price: prod.price,
                          })
                        }
                        className="btn btn-outline btn-sm"
                      >
                        <span>Request Specs</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. GRANITE COMPOSITE VS STAINLESS STEEL                                   */}
      {/* ========================================================================= */}
      <section className="section" style={{ position: 'relative' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-tag">Material Comparison</span>
            <h2 className="section-title">Granite Quartz Composite vs Stainless Steel</h2>
            <p className="section-subtitle">
              Why European interior architects and luxury kitchen studios consistently specify quartz granite composite over metal sinks.
            </p>
          </div>

          <div className="comparison-table-wrap">
            <div className="table-scroll-hint">
              <span>← Swipe horizontally to view full comparison →</span>
            </div>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Performance Metric</th>
                  <th className="col-elite">ELITE® Granite Composite</th>
                  <th>Standard Stainless Steel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Scratch & Abrasion Resistance</strong></td>
                  <td className="col-elite">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)' }}>
                      <CheckCircle2 size={16} />
                      <span>Rock-hard 80% natural quartz; kitchen knives & heavy pans leave no gouges.</span>
                    </div>
                  </td>
                  <td>Scratches easily from cutlery and scrub pads; permanent micro-scratches.</td>
                </tr>
                <tr>
                  <td><strong>Noise & Vibration Absorption</strong></td>
                  <td className="col-elite">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)' }}>
                      <CheckCircle2 size={16} />
                      <span>Ultra-quiet acoustic dampening; deadens rushing water & impact naturally.</span>
                    </div>
                  </td>
                  <td>Loud drumming reverberation; thin steel amplifies water stream & disposal.</td>
                </tr>
                <tr>
                  <td><strong>Water Spots & Fingerprints</strong></td>
                  <td className="col-elite">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)' }}>
                      <CheckCircle2 size={16} />
                      <span>Matte mineral texture naturally resists limescale accumulation and visible smudges.</span>
                    </div>
                  </td>
                  <td>Shows immediate water rings, mineral streaks, and greasy fingerprints.</td>
                </tr>
                <tr>
                  <td><strong>Architectural Color Integration</strong></td>
                  <td className="col-elite">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)' }}>
                      <CheckCircle2 size={16} />
                      <span>7 curated European finishes (Black, Carbon, Grey, White, Coffee) to match sintered stone.</span>
                    </div>
                  </td>
                  <td>Restricted to metallic silver sheen.</td>
                </tr>
                <tr>
                  <td><strong>Tactile Surface Feel</strong></td>
                  <td className="col-elite">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-gold)' }}>
                      <CheckCircle2 size={16} />
                      <span>Warm, pleasant natural stone feel that maintains comfortable ambient temperature.</span>
                    </div>
                  </td>
                  <td>Cold, clinical, and industrial metal contact.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. EUROPEAN HERITAGE & MANUFACTURING EXCELLENCE                           */}
      {/* ========================================================================= */}
      <section className="section" id="heritage" style={{ background: 'var(--bg-surface)' }}>
        <div className="container heritage-grid">
          <div>
            <span className="section-tag">European Heritage</span>
            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', marginBottom: '1.5rem', lineHeight: 1.15 }}>
              German Engineering Precision <br />
              <span style={{ color: 'var(--accent-gold)' }}>Prague European Logistics Hub</span>
            </h2>
            <p className="heritage-lead">
              Elite Import & Export S.R.O was established in 2022 and is headquartered in Prague, Czech Republic.
            </p>
            <p className="heritage-text">
              We specialize in importing and distributing high-performance quartz composite granite sinks, manufactured
              in strict alignment with European EN standards. By combining German formulation precision with refined
              architectural minimalism, our sinks serve residential, commercial, and hospitality projects with
              uncompromising durability.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={onOpenQuoteModal} className="btn btn-gold" type="button">
                <span>Partner With Us</span>
                <ArrowRight size={15} />
              </button>
              <Link to="/materials" className="btn btn-outline">
                <span>Explore PureTech™ Science</span>
              </Link>
            </div>
          </div>

          <div className="heritage-card-box">
            <div className="heritage-mini-card">
              <ShieldCheck className="icon" size={26} />
              <div className="heritage-mini-title">EN 13310 Compliance</div>
              <div className="heritage-mini-desc">
                Rigorously validated for thermal shock, stain resistance, and heavy culinary load impact.
              </div>
            </div>
            <div className="heritage-mini-card">
              <Package className="icon" size={26} />
              <div className="heritage-mini-title">Prague Central Hub</div>
              <div className="heritage-mini-desc">
                Direct European warehouse inventory with 3-5 business day transit to Germany and CEE.
              </div>
            </div>
            <div className="heritage-mini-card">
              <Layers className="icon" size={26} />
              <div className="heritage-mini-title">7 Architectural Colors</div>
              <div className="heritage-mini-desc">
                Specifically formulated to complement premier sintered stone, quartz, and luxury marble countertops.
              </div>
            </div>
            <div className="heritage-mini-card">
              <Compass className="icon" size={26} />
              <div className="heritage-mini-title">German Formulation</div>
              <div className="heritage-mini-desc">
                High-pressure resin casting, controlled quartz granulometry, and automated tempering ovens.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. FULL-BLEED LUXURY BANNER: FOR ARCHITECTS & TRADE PARTNERS              */}
      {/* ========================================================================= */}
      <section className="trade-banner-section" id="trade">
        <div className="trade-banner-bg">
          <img
            src={assetUrl('/assets/kitchen-luxury-dark.jpg')}
            alt="Luxury Architecture Kitchen Island"
            className="trade-banner-img"
          />
          <div className="trade-banner-overlay" />
        </div>

        <div className="container trade-banner-content">
          <span className="section-tag" style={{ background: 'rgba(198, 166, 93, 0.15)', borderColor: 'var(--accent-gold)' }}>
            <Award size={14} />
            <span>Direct European Supply & Trade Terms</span>
          </span>

          <h2 className="trade-banner-title">
            Designing a Luxury Kitchen or Commercial Development?
          </h2>

          <p className="trade-banner-desc">
            We collaborate directly with kitchen studios, interior architects, property developers, and European distributors.
            Receive preferential trade margins, physical sample material boxes, and dedicated technical CAD support.
          </p>

          <div className="trade-banner-actions">
            <button onClick={onOpenQuoteModal} className="btn btn-gold btn-lg" type="button">
              <span>Request Trade Sample Box</span>
              <ArrowRight size={18} />
            </button>
          </div>

          <div className="trade-badges-row">
            <span className="trade-badge-item">✓ 48-Hour Sample Dispatch</span>
            <span className="trade-badge-item">✓ Tiered Container Volume Pricing</span>
            <span className="trade-badge-item">✓ BIM / Revit / DXF Cutout Files</span>
            <span className="trade-badge-item">✓ European Headquarters & Stock in Prague</span>
          </div>
        </div>
      </section>
    </main>
  );
}
