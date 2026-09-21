import React, { useState } from 'react';
import { Eye, Layers, Compass, Maximize2, Minimize2 } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';

export default function ProductGallery({ activeColor, currentView = 'perspective', onViewChange }) {
  const [viewMode, setViewMode] = useState(currentView);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleModeChange = (mode) => {
    setViewMode(mode);
    if (onViewChange) onViewChange(mode);
  };

  return (
    <div className="product-gallery-sticky">
      {/* Main Visualizer Stage */}
      <div className="visualizer-main-stage">
        {/* Top Badges & Controls Toolbar */}
        <div className="visualizer-top-toolbar">
          <div className="visualizer-current-badge">
            {viewMode === 'perspective' && (
              <>
                <Compass size={13} color="var(--accent-gold)" />
                <span>3D Perspective</span>
              </>
            )}
            {viewMode === 'top' && (
              <>
                <Layers size={13} color="var(--accent-gold)" />
                <span>Top Plan View</span>
              </>
            )}
            {viewMode === 'blueprint' && (
              <>
                <Eye size={13} color="var(--accent-gold)" />
                <span>Blueprint & CAD</span>
              </>
            )}
          </div>

          {/* Zoom Button */}
          <button
            type="button"
            className={`visualizer-zoom-btn ${isZoomed ? 'active' : ''}`}
            onClick={() => setIsZoomed(!isZoomed)}
            title={isZoomed ? 'Reset Zoom (100%)' : 'Zoom In (130%)'}
            aria-label={isZoomed ? 'Reset zoom' : 'Zoom image'}
          >
            {isZoomed ? <Minimize2 size={16} /> : <Maximize2 size={16} />}
          </button>
        </div>

        {/* Visualizer Image Canvas */}
        {viewMode === 'perspective' && (
          <img
            key={`persp-${activeColor.id}`}
            src={activeColor.perspectiveImg}
            alt={`ELITE ETD-855D in ${activeColor.name} 3D Perspective`}
            className="visualizer-img fade-in"
            style={{
              transform: isZoomed ? 'scale(1.3)' : 'scale(1)',
              transition: 'transform 0.4s ease',
            }}
          />
        )}

        {viewMode === 'top' && (
          <img
            key={`top-${activeColor.id}`}
            src={activeColor.topImg}
            alt={`ELITE ETD-855D in ${activeColor.name} Top View`}
            className="visualizer-img fade-in"
            style={{
              transform: isZoomed ? 'scale(1.3)' : 'scale(1)',
              transition: 'transform 0.4s ease',
            }}
          />
        )}

        {viewMode === 'blueprint' && (
          <img
            src={assetUrl('/assets/blueprint-etd-855d.png')}
            alt="ELITE ETD-855D Blueprint and Dimensions"
            className="visualizer-blueprint-img fade-in"
            style={{
              transform: isZoomed ? 'scale(1.35)' : 'scale(1)',
              transition: 'transform 0.4s ease',
            }}
          />
        )}

        <div className="visualizer-stage-hint">
          {viewMode === 'perspective' && `Finish: ${activeColor.name} • 3D Render`}
          {viewMode === 'top' && `Finish: ${activeColor.name} • Overhead Plan`}
          {viewMode === 'blueprint' && `Blueprint: 855 × 507 mm • Dual 390 × 400 mm Bowls`}
        </div>
      </div>

      {/* Gallery Thumbnails Strip */}
      <div className="gallery-thumbs-row">
        <button
          type="button"
          className={`gallery-thumb-btn ${viewMode === 'perspective' ? 'active' : ''}`}
          onClick={() => handleModeChange('perspective')}
        >
          <img
            src={activeColor.perspectiveImg}
            alt="3D Perspective"
            className="gallery-thumb-preview"
          />
          <span className="gallery-thumb-title">3D Perspective</span>
        </button>

        <button
          type="button"
          className={`gallery-thumb-btn ${viewMode === 'top' ? 'active' : ''}`}
          onClick={() => handleModeChange('top')}
        >
          <img
            src={activeColor.topImg}
            alt="Top View"
            className="gallery-thumb-preview"
          />
          <span className="gallery-thumb-title">Top Plan View</span>
        </button>

        <button
          type="button"
          className={`gallery-thumb-btn ${viewMode === 'blueprint' ? 'active' : ''}`}
          onClick={() => handleModeChange('blueprint')}
        >
          <img
            src={assetUrl('/assets/blueprint-etd-855d.png')}
            alt="Blueprint"
            className="gallery-thumb-preview"
            style={{ filter: 'invert(0.9) brightness(1.2)' }}
          />
          <span className="gallery-thumb-title">Blueprint & Cutout</span>
        </button>
      </div>
    </div>
  );
}
