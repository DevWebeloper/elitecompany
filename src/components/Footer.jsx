import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';
import { assetUrl } from '../utils/assetUrl';

export default function Footer({ onOpenQuoteModal }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-col">
            <div className="footer-brand-header">
              <img
                src={assetUrl('/assets/elite-logo-white.png')}
                alt="ELITE"
                className="footer-logo-img"
              />
              <div>
                <div className="footer-brand-name">ELITE</div>
                <div className="footer-brand-subtitle">ENGINEERED IN GERMANY</div>
              </div>
            </div>
            <p className="footer-brand-desc">
              {COMPANY_INFO.legalName} is a European specialist in premium quartz composite granite sinks,
              precision-engineered in accordance with strict European standards.
            </p>
            <div className="footer-contact-list">
              <span className="footer-contact-item">
                <MapPin size={15} color="var(--accent-gold)" />
                <span>{COMPANY_INFO.headquarters}</span>
              </span>
              <span className="footer-contact-item">
                <Mail size={15} color="var(--accent-gold)" />
                <a href={`mailto:${COMPANY_INFO.email}`}>
                  {COMPANY_INFO.email}
                </a>
              </span>
            </div>
          </div>

          {/* Sinks & Models */}
          <div>
            <h4 className="footer-col-title">Granite Sinks</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/product" className="footer-nav-link highlight">
                  ETD-855D Double Bowl (Flagship)
                </Link>
              </li>
              <li>
                <Link to="/#collection" className="footer-nav-link">
                  ETS-615 Compact Single
                </Link>
              </li>
              <li>
                <Link to="/#collection" className="footer-nav-link">
                  ETS-700 Standard Single
                </Link>
              </li>
              <li>
                <Link to="/#collection" className="footer-nav-link">
                  ETS-790-V Single with Drainer
                </Link>
              </li>
              <li>
                <Link to="/materials" className="footer-nav-link">
                  PureTech™ Antibacterial Technology
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical & Trade */}
          <div>
            <h4 className="footer-col-title">Technical & Trade</h4>
            <ul className="footer-nav-list">
              <li>
                <Link to="/product?view=blueprint" className="footer-nav-link">
                  <span>ETD-855D Technical Dimensions</span>
                </Link>
              </li>
              <li>
                <Link to="/materials" className="footer-nav-link">
                  <span>PureTech™ Quartz Specifications</span>
                </Link>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenQuoteModal}
                  className="footer-nav-btn"
                >
                  <span>Request Architectural Specs & Samples</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Quality & Assurance */}
          <div>
            <h4 className="footer-col-title">Quality Standards</h4>
            <div className="footer-quality-card">
              <div className="footer-quality-header">
                <ShieldCheck size={18} />
                <span className="footer-quality-title">15-Year European Guarantee</span>
              </div>
              <p className="footer-quality-desc">
                Manufactured in accordance with EN 13310 European standards for residential, commercial, and
                architectural applications.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="footer-bottom-strip">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {COMPANY_INFO.legalName}. All rights reserved. Registered in Prague, Czech Republic.
          </div>
          <div className="footer-legal-links">
            <span className="footer-legal-item">Privacy Policy</span>
            <span className="footer-legal-item">Terms of Commercial Supply</span>
            <span className="footer-legal-item">EN 13310 Compliance</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
