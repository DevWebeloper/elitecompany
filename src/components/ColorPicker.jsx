import React from 'react';
import { ELITE_COLORS } from '../data/products';

export default function ColorPicker({ activeColor, onSelectColor, showDescription = true }) {
  return (
    <div className="config-section">
      <div className="config-section-title-row">
        <span className="config-section-label">Select Color Finish (7 Available)</span>
        <span className="config-active-color-name">{activeColor.name}</span>
      </div>

      <div className="color-swatches-grid" role="radiogroup" aria-label="Color options">
        {ELITE_COLORS.map((color) => {
          const isSelected = activeColor.id === color.id;
          return (
            <button
              key={color.id}
              role="radio"
              aria-checked={isSelected}
              aria-label={`${color.name} - ${color.tagline}`}
              title={`${color.name} (${color.tagline})`}
              className={`color-swatch-item ${isSelected ? 'active' : ''}`}
              onClick={() => onSelectColor(color)}
              type="button"
            >
              <div
                className="color-swatch-circle"
                style={{
                  backgroundImage: `url(${color.swatchImg})`,
                  backgroundColor: color.hex,
                }}
              />
            </button>
          );
        })}
      </div>

      {showDescription && (
        <div className="color-active-description">
          <strong style={{ color: 'var(--accent-gold)', display: 'block', marginBottom: '0.25rem' }}>
            {activeColor.name} — {activeColor.tagline}
          </strong>
          {activeColor.description}
        </div>
      )}
    </div>
  );
}
