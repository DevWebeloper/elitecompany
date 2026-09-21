import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ShieldCheck,
  Flame,
  VolumeX,
  Droplet,
  ArrowRight,
  Layers,
  CheckCircle,
} from 'lucide-react';
import { ELITE_COLORS } from '../data/products';

export default function WorldOfMaterialsPage({ onOpenQuoteModal }) {
  return (
    <main style={{ paddingTop: 'calc(var(--header-height, 76px) + 24px)', paddingBottom: 'clamp(3.5rem, 6vw, 6rem)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header" style={{ maxWidth: '840px', margin: '0 auto clamp(2.5rem, 5vw, 4rem) auto' }}>
          <span className="section-tag">Material Science</span>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)', marginBottom: '1.25rem', lineHeight: 1.12 }}>
            The Science of Pure Quartz Composite
          </h1>
          <p className="lead" style={{ color: 'var(--text-muted)' }}>
            80% natural German quartz sand bound with high-performance acrylic resins under high-temperature curing.
            Explore why ELITE granite sinks surpass conventional ceramics and stainless steel.
          </p>
        </div>

        {/* 4 Pillars of PureTech */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
            gap: 'clamp(1.25rem, 2.5vw, 2rem)',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          <div className="glass-card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(198, 166, 93, 0.12)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Sparkles size={24} />
            </div>
            <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.3rem)', marginBottom: '0.75rem' }}>
              80% Natural Quartz Matrix
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Quartz is the fourth hardest mineral on Earth (Mohs hardness 7). Its microscopic crystalline facets
              resist blunt pan drops, knife slips, and daily utensil abrasions without gouging or scratching.
            </p>
          </div>

          <div className="glass-card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(198, 166, 93, 0.12)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Droplet size={24} />
            </div>
            <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.3rem)', marginBottom: '0.75rem' }}>
              PureTech™ Antibacterial Lotus Effect
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              A microscopic non-porous surface structure prevents moisture and organic particulates from penetrating
              the sink wall. Natural ionic protection impedes bacterial proliferation by 99.9%.
            </p>
          </div>

          <div className="glass-card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(198, 166, 93, 0.12)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <VolumeX size={24} />
            </div>
            <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.3rem)', marginBottom: '0.75rem' }}>
              Acoustic Dampening Comfort
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Unlike hollow sheet metal that acts as an acoustic amplifier, the heavy mineral composite structure
              naturally absorbs dish clatter and pressurized tap flow for a serene, peaceful kitchen environment.
            </p>
          </div>

          <div className="glass-card">
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-sm)',
                background: 'rgba(198, 166, 93, 0.12)',
                color: 'var(--accent-gold)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1.25rem',
              }}
            >
              <Flame size={24} />
            </div>
            <h3 style={{ fontSize: 'clamp(1.15rem, 2vw, 1.3rem)', marginBottom: '0.75rem' }}>
              280°C Thermal Shock Safety
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Formulated to withstand direct contact with hot cookware up to 280°C (536°F) and immediate quenching
              with cold tap water without internal stress fractures or color leaching.
            </p>
          </div>
        </div>

        {/* 7 Color Palette Showcase */}
        <div style={{ marginBottom: 'clamp(3rem, 6vw, 5rem)' }}>
          <div className="section-header">
            <span className="section-tag">Color Collection</span>
            <h2 className="section-title">The 7 Architectural Quartz Finishes</h2>
            <p className="section-subtitle">
              Every finish is homogenously pigmented throughout the entire composite body—not a surface coating.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'clamp(1rem, 2.5vw, 1.5rem)',
            }}
          >
            {ELITE_COLORS.map((col) => (
              <div
                key={col.id}
                style={{
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-lg)',
                  padding: 'clamp(1.25rem, 3vw, 1.75rem)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div
                    style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: '50%',
                      backgroundImage: `url(${col.swatchImg})`,
                      backgroundColor: col.hex,
                      backgroundSize: 'cover',
                      border: '2px solid rgba(255,255,255,0.15)',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <h4 style={{ fontSize: '1.15rem', color: 'var(--text-primary)' }}>
                      {col.name}
                    </h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--accent-gold)', fontWeight: 600 }}>
                      {col.tagline}
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {col.description}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '0.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                  <Link
                    to={`/product?color=${col.id}`}
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--accent-gold)',
                      fontWeight: 600,
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      minHeight: '40px',
                    }}
                  >
                    <span>View ETD-855D in {col.name}</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="glass-card"
          style={{
            textAlign: 'center',
            padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1.25rem, 4vw, 2rem)',
            border: '1px solid var(--border-gold)',
            boxShadow: 'var(--shadow-glow)',
          }}
        >
          <span className="section-tag">Sample Service</span>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.4rem)', marginBottom: '1rem' }}>
            Experience PureTech™ In Your Hands
          </h2>
          <p className="lead" style={{ maxWidth: '650px', margin: '0 auto 2rem auto' }}>
            Order an authentic physical sample box containing precision-cut quartz chips in all 7 colors.
            Delivered directly to kitchen studios, architects, and private builders across Europe.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenQuoteModal} className="btn btn-gold btn-lg" type="button">
              <span>Request Sample Box</span>
              <ArrowRight size={16} />
            </button>
            <Link
              to="/product"
              className="btn btn-outline btn-lg"
            >
              <span>Explore Colors in 3D Visualizer</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
