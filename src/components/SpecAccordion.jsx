import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check, ShieldCheck, Box, Wrench } from 'lucide-react';
import { FLAGSHIP_PRODUCT } from '../data/products';

export default function SpecAccordion() {
  const [openSection, setOpenSection] = useState('specs');

  const toggle = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const { specifications, includedInBox, features } = FLAGSHIP_PRODUCT;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem' }}>
      {/* 1. Technical Dimensions */}
      <div className="specs-card">
        <button
          type="button"
          onClick={() => toggle('specs')}
          className="specs-accordion-trigger"
          aria-expanded={openSection === 'specs'}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Wrench size={16} color="var(--accent-gold)" />
            <span>Technical Dimensions & Blueprint</span>
          </span>
          {openSection === 'specs' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {openSection === 'specs' && (
          <div>
            <div className="specs-row">
              <span className="specs-label">Overall External Dimensions</span>
              <span className="specs-value">{specifications.overallSize}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Internal Bowl Dimensions</span>
              <span className="specs-value">{specifications.bowlSize}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Bowl Depth</span>
              <span className="specs-value">{specifications.bowlDepth}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Minimum Base Cabinet</span>
              <span className="specs-value">{specifications.cabinetBaseWidth}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Top-Mount Cutout Dimension</span>
              <span className="specs-value">{specifications.cutoutSizeTopmount}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Drain Hole Specification</span>
              <span className="specs-value">{specifications.drainDiameter}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Material Composition</span>
              <span className="specs-value">{specifications.materialComposition}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Thermal Tolerance</span>
              <span className="specs-value">{specifications.heatResistance}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Net Unit Weight</span>
              <span className="specs-value">{specifications.weight}</span>
            </div>
            <div className="specs-row">
              <span className="specs-label">Standard & Guarantee</span>
              <span className="specs-value">{specifications.warranty}</span>
            </div>
          </div>
        )}
      </div>

      {/* 2. Included in the Box */}
      <div className="specs-card">
        <button
          type="button"
          onClick={() => toggle('box')}
          className="specs-accordion-trigger"
          aria-expanded={openSection === 'box'}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Box size={16} color="var(--accent-gold)" />
            <span>Scope of Delivery (In The Box)</span>
          </span>
          {openSection === 'box' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {openSection === 'box' && (
          <div className="specs-card-content" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {includedInBox.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem' }}>
                <Check size={16} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 3. PureTech Performance Testing */}
      <div className="specs-card">
        <button
          type="button"
          onClick={() => toggle('puretech')}
          className="specs-accordion-trigger"
          aria-expanded={openSection === 'puretech'}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <ShieldCheck size={16} color="var(--accent-gold)" />
            <span>PureTech™ Material Certifications</span>
          </span>
          {openSection === 'puretech' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>

        {openSection === 'puretech' && (
          <div className="specs-card-content" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {features.map((feat, idx) => (
              <div key={idx} style={{ borderBottom: idx < features.length - 1 ? '1px solid var(--border-subtle)' : 'none', paddingBottom: '0.75rem' }}>
                <div style={{ fontWeight: 700, color: 'var(--accent-gold)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                  {feat.title}
                </div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                  {feat.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
