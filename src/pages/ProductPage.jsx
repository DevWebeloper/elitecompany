import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  ShieldCheck,
  Check,
  ArrowRight,
  Truck,
  Sparkles,
  Info,
  Layers,
  ChevronRight,
  Share2,
} from 'lucide-react';
import {
  ELITE_COLORS,
  INSTALLATION_TYPES,
  FLAGSHIP_PRODUCT,
  COMPANY_INFO,
} from '../data/products';
import ProductGallery from '../components/ProductGallery';
import ColorPicker from '../components/ColorPicker';
import SpecAccordion from '../components/SpecAccordion';
import '../styles/product.css';

export default function ProductPage({ onOpenQuoteModal, formatPrice, currency }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Find initial color from query param or fallback to first color (black)
  const initialColorId = searchParams.get('color') || 'black';
  const matchedColor =
    ELITE_COLORS.find((c) => c.id === initialColorId) || ELITE_COLORS[0];

  const [activeColor, setActiveColor] = useState(matchedColor);
  const [activeInstallation, setActiveInstallation] = useState(
    INSTALLATION_TYPES[0]
  );
  const [currentView, setCurrentView] = useState(
    searchParams.get('view') || 'perspective'
  );
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  // Sync state if query param changes externally
  useEffect(() => {
    const qColor = searchParams.get('color');
    if (qColor && qColor !== activeColor.id) {
      const found = ELITE_COLORS.find((c) => c.id === qColor);
      if (found) setActiveColor(found);
    }
  }, [searchParams]);

  // Update color selection and URL query
  const handleSelectColor = (color) => {
    setActiveColor(color);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('color', color.id);
    setSearchParams(newParams);
  };

  const handleViewChange = (view) => {
    setCurrentView(view);
    const newParams = new URLSearchParams(searchParams);
    newParams.set('view', view);
    setSearchParams(newParams);
  };

  const handleShare = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        })
        .catch(() => {
          setCopiedLink(true);
          setTimeout(() => setCopiedLink(false), 2500);
        });
    } else {
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <main className="product-page">
      <div className="container">
        {/* Breadcrumbs */}
        <nav className="product-breadcrumbs" aria-label="Breadcrumb">
          <div className="product-breadcrumbs-links">
            <Link to="/">Home</Link>
            <ChevronRight size={13} />
            <Link to="/#collection">Sinks</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>
              {FLAGSHIP_PRODUCT.model} Double Bowl
            </span>
          </div>
          <span className="product-breadcrumb-finish">
            Finish: {activeColor.name}
          </span>
        </nav>

        {/* 2-Column Product Configurator Layout */}
        <div className="product-layout">
          {/* Left Column: Visualizer & Gallery */}
          <div className="product-left-col">
            <ProductGallery
              activeColor={activeColor}
              currentView={currentView}
              onViewChange={handleViewChange}
            />

            {/* Technical Highlights Under Visualizer */}
            <div
              style={{
                marginTop: '2.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 180px), 1fr))',
                gap: '1rem',
              }}
            >
              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                  }}
                >
                  Dimensions
                </span>
                <div
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  855 × 507 mm
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  Twin 390 × 400 mm bowls, 210 mm depth
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                  }}
                >
                  Quartz Matrix
                </span>
                <div
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  80% Natural Crystal
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  PureTech™ Antibacterial Formula
                </div>
              </div>

              <div
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                }}
              >
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--accent-gold)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                  }}
                >
                  Cabinet Base
                </span>
                <div
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: 'var(--text-primary)',
                    marginTop: '0.25rem',
                  }}
                >
                  Min. 900 mm
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  European standard cabinet size
                </div>
              </div>
            </div>

            {/* Specifications Accordion */}
            <SpecAccordion />
          </div>

          {/* Right Column: Sticky Configurator Panel */}
          <div className="product-config-panel">
            {/* Header / Brand Origin */}
            <div className="config-header">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div className="config-origin-badge">
                  <ShieldCheck size={16} />
                  <span>Engineered in Germany</span>
                </div>
                <button
                  type="button"
                  onClick={handleShare}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: copiedLink ? '#4cd964' : 'var(--text-muted)',
                    cursor: 'pointer',
                    fontSize: '0.8rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                  }}
                >
                  <Share2 size={14} />
                  <span>{copiedLink ? 'Link Copied!' : 'Share Config'}</span>
                </button>
              </div>

              <h1 className="config-product-title">
                {FLAGSHIP_PRODUCT.model}
              </h1>
              <p className="config-product-tagline">
                Double Bowl Quartz Composite Granite Kitchen Sink
              </p>

              {/* Price Preview */}
              <div className="config-price-box">
                <span className="config-price-current">
                  {formatPrice(FLAGSHIP_PRODUCT.price * quantity)}
                </span>
                <span className="config-price-msrp">
                  MSRP {formatPrice(FLAGSHIP_PRODUCT.msrp * quantity)}
                </span>
                <span className="badge badge-gold">10% Trade Intro</span>
              </div>

              <div className="config-stock-indicator">
                <span className="stock-dot" />
                <span>
                  {FLAGSHIP_PRODUCT.stockStatus} • Dispatched in 24–48h
                </span>
              </div>
            </div>

            {/* 1. Interactive 7-Color Picker */}
            <ColorPicker
              activeColor={activeColor}
              onSelectColor={handleSelectColor}
            />

            {/* 2. Installation Type Selector */}
            <div className="config-section">
              <div className="config-section-title-row">
                <span className="config-section-label">Installation Type</span>
                <span
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--accent-gold)',
                    fontWeight: 700,
                  }}
                >
                  {activeInstallation.title}
                </span>
              </div>

              <div className="installation-grid">
                {INSTALLATION_TYPES.map((type) => {
                  const isSelected = activeInstallation.id === type.id;
                  return (
                    <button
                      key={type.id}
                      type="button"
                      className={`installation-btn ${isSelected ? 'active' : ''}`}
                      onClick={() => setActiveInstallation(type)}
                    >
                      <span className="installation-title">{type.title}</span>
                      <span className="installation-tag">{type.tagline}</span>
                    </button>
                  );
                })}
              </div>

              <div className="installation-desc-box">
                <strong style={{ color: 'var(--text-primary)', display: 'block' }}>
                  {activeInstallation.description}
                </strong>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Countertop compatibility: {activeInstallation.countertopSuitability}
                </span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                background: 'var(--bg-surface)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}
            >
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-secondary)',
                }}
              >
                Quantity:
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <button
                  type="button"
                  disabled={quantity <= 1}
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                  aria-disabled={quantity <= 1}
                  style={{
                    width: '38px',
                    height: '38px',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    borderRadius: 'var(--radius-xs)',
                    cursor: quantity <= 1 ? 'not-allowed' : 'pointer',
                    opacity: quantity <= 1 ? 0.35 : 1,
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    touchAction: 'manipulation',
                  }}
                >
                  -
                </button>
                <span
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 700,
                    minWidth: '28px',
                    textAlign: 'center',
                    fontSize: '1rem',
                  }}
                >
                  {quantity}
                </span>
                <button
                  type="button"
                  disabled={quantity >= 50}
                  onClick={() => setQuantity(Math.min(50, quantity + 1))}
                  aria-label="Increase quantity"
                  aria-disabled={quantity >= 50}
                  style={{
                    width: '38px',
                    height: '38px',
                    background: 'var(--bg-surface-elevated)',
                    border: '1px solid var(--border-subtle)',
                    color: 'var(--text-primary)',
                    borderRadius: 'var(--radius-xs)',
                    cursor: quantity >= 50 ? 'not-allowed' : 'pointer',
                    opacity: quantity >= 50 ? 0.35 : 1,
                    fontSize: '1.2rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    touchAction: 'manipulation',
                  }}
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions & Prototype Triggers */}
            <div className="config-cta-group">
              <button
                type="button"
                onClick={onOpenQuoteModal}
                className="btn btn-gold config-btn-quote"
              >
                <span>Request Quotation / Order Sample</span>
                <ArrowRight size={16} />
              </button>

              <button
                type="button"
                onClick={() => {
                  setCurrentView('blueprint');
                  const galleryEl = document.querySelector('.product-gallery-section');
                  if (galleryEl) {
                    galleryEl.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn btn-outline config-btn-spec"
              >
                <Layers size={15} />
                <span>View CAD & Dimension Blueprint</span>
              </button>
            </div>

            {/* Assurance Highlights */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                borderTop: '1px solid var(--border-subtle)',
                paddingTop: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Check size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Includes 2× Stainless Steel 3.5" Basket Strainers & Overflow</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Check size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>15-Year European Limited Manufacturer Guarantee</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                <Truck size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Direct dispatch from Prague Logistics Center to all EU countries</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Sticky Bottom Floating Action Bar */}
      <div className="mobile-bottom-bar">
        <div className="mobile-bottom-info">
          <div
            className="mobile-bottom-chip"
            style={{
              backgroundImage: `url(${activeColor.swatchImg})`,
              backgroundColor: activeColor.hex,
              backgroundSize: 'cover',
            }}
          />
          <div className="mobile-bottom-text">
            <span className="mobile-bottom-title">
              {FLAGSHIP_PRODUCT.model} ({activeColor.name})
            </span>
            <span className="mobile-bottom-price">
              {formatPrice(FLAGSHIP_PRODUCT.price * quantity)}
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenQuoteModal}
          className="btn btn-gold btn-sm"
        >
          <span>Request Quote</span>
        </button>
      </div>
    </main>
  );
}
