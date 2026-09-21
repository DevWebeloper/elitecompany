import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, FileText, Globe, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';
import { assetUrl } from '../utils/assetUrl';
import '../styles/navbar.css';

export default function Navbar({ onOpenQuoteModal, currency, setCurrency }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const closeMobile = () => setMobileOpen(false);

  // Lock body scroll when mobile menu is open & close on ESC
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') setMobileOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="header">
        {/* Top Info Bar */}
        <div className="top-bar">
          <div className="container top-bar-inner">
            <div className="top-bar-left">
              <span className="top-bar-item">
                <ShieldCheck size={14} color="var(--accent-gold)" />
                <span className="top-bar-warranty-text">Engineered in Germany • 15-Year Warranty</span>
              </span>
              <span className="top-bar-item top-bar-hide-mobile">
                <span>Prague European Logistics Hub</span>
              </span>
            </div>
            <div className="top-bar-right">
              <span className="top-bar-item">
                <Globe size={13} />
                <select
                  aria-label="Currency Selector"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="currency-select"
                >
                  <option value="EUR">EUR (€)</option>
                  <option value="USD">USD ($)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="CZK">CZK (Kč)</option>
                </select>
              </span>
            </div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="container nav-main" aria-label="Main Navigation">
          <Link to="/" className="brand-logo-link" onClick={closeMobile} aria-label="ELITE Home">
            <img
              src={assetUrl('/assets/elite-logo-white.png')}
              alt="ELITE Granite Sinks"
              className="brand-logo-img"
            />
          </Link>

          <ul className="nav-menu">
            <li>
              <Link
                to="/"
                className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`}
              >
                ETD-855D Sink
              </Link>
            </li>
            <li>
              <a
                href="/#collection"
                className="nav-link"
                onClick={(e) => {
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Collection
              </a>
            </li>
            <li>
              <Link
                to="/materials"
                className={`nav-link ${location.pathname === '/materials' ? 'active' : ''}`}
              >
                World of Materials
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            <button
              onClick={onOpenQuoteModal}
              className="btn btn-gold btn-sm nav-quote-btn"
              type="button"
            >
              <span className="quote-text-full">Request Quote</span>
              <span className="quote-text-short">Quote</span>
              <ArrowRight size={14} className="nav-quote-icon" />
            </button>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation-drawer"
              type="button"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileOpen ? 'open' : ''}`}
        onClick={closeMobile}
        aria-hidden="true"
      />

      {/* Mobile Navigation Drawer */}
      <aside
        id="mobile-navigation-drawer"
        className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
        aria-hidden={!mobileOpen}
      >
        <div className="mobile-drawer-header">
          <Link to="/" className="brand-logo-link" onClick={closeMobile} aria-label="ELITE Home">
            <img
              src={assetUrl('/assets/elite-logo-white.png')}
              alt="ELITE Granite Sinks"
              className="brand-logo-img"
            />
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={closeMobile}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="mobile-drawer-currency-row">
          <span className="mobile-currency-label">
            <Globe size={14} />
            <span>Display Currency:</span>
          </span>
          <select
            aria-label="Mobile Currency Selector"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className="currency-select mobile-drawer-currency-select"
          >
            <option value="EUR">EUR (€)</option>
            <option value="USD">USD ($)</option>
            <option value="GBP">GBP (£)</option>
            <option value="CZK">CZK (Kč)</option>
          </select>
        </div>

        <ul className="mobile-nav-links">
          <li>
            <Link
              to="/"
              className={`mobile-nav-link ${location.pathname === '/' ? 'active' : ''}`}
              onClick={closeMobile}
            >
              <span>Home</span>
              <ArrowRight size={16} />
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className={`mobile-nav-link ${location.pathname === '/product' ? 'active' : ''}`}
              onClick={closeMobile}
            >
              <span>ETD-855D Double Sink</span>
              <ArrowRight size={16} />
            </Link>
          </li>
          <li>
            <a
              href="/#collection"
              className="mobile-nav-link"
              onClick={(e) => {
                closeMobile();
                if (location.pathname === '/') {
                  e.preventDefault();
                  document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              <span>Sink Collection</span>
              <ArrowRight size={16} />
            </a>
          </li>
          <li>
            <Link
              to="/materials"
              className={`mobile-nav-link ${location.pathname === '/materials' ? 'active' : ''}`}
              onClick={closeMobile}
            >
              <span>World of Materials & PureTech™</span>
              <ArrowRight size={16} />
            </Link>
          </li>
        </ul>

        <div className="mobile-drawer-footer">
          <div className="mobile-drawer-badge">
            <ShieldCheck size={16} color="var(--accent-gold)" />
            <span>EN 13310 European Certified • Prague Hub</span>
          </div>

          <button
            onClick={() => {
              closeMobile();
              onOpenQuoteModal();
            }}
            className="btn btn-gold"
            style={{ width: '100%' }}
          >
            <span>Request Trade Quote</span>
          </button>
        </div>
      </aside>
    </>
  );
}
