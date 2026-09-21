import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, ShieldCheck } from 'lucide-react';
import '../styles/modal.css';

export default function QuoteModal({ isOpen, onClose, product, activeColor, installationType }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: 'Germany',
    quantity: '1',
    requestSampleChips: true,
    message: '',
  });

  const isFormValid =
    formData.name.trim().length > 0 &&
    formData.email.trim().length > 0 &&
    formData.email.includes('@');

  // Lock body scroll and handle Escape key
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setSubmitted(false);
          setIsSubmitting(false);
          onClose();
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid || isSubmitting) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 350);
  };

  const resetAndClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div
      className="modal-backdrop"
      onClick={resetAndClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-quote-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={resetAndClose}
          aria-label="Close quote dialog"
          type="button"
        >
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  color: 'var(--accent-gold)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '0.4rem',
                }}
              >
                <ShieldCheck size={14} />
                <span>Trade & Direct European Inquiries</span>
              </div>
              <h2 className="modal-title" id="modal-quote-title">Request Quotation & Samples</h2>
              <p className="modal-subtitle">
                Receive commercial pricing, lead time verification, or order a 7-color quartz material sample kit.
              </p>
            </div>

            {/* Current Configuration Summary */}
            <div className="modal-product-summary">
              <div
                className="modal-summary-chip"
                style={{
                  backgroundImage: `url(${activeColor.swatchImg})`,
                  backgroundColor: activeColor.hex,
                  backgroundSize: 'cover',
                }}
              />
              <div className="modal-summary-details">
                <span className="modal-summary-name">
                  {product.model} — {product.title}
                </span>
                <span className="modal-summary-meta">
                  Selected Finish: <strong style={{ color: 'var(--accent-gold)' }}>{activeColor.name}</strong> •{' '}
                  Mounting: {installationType?.title || 'Undermount'}
                </span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Markus Weber"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Company / Studio</label>
                  <input
                    type="text"
                    placeholder="e.g. Studio Architektura"
                    className="form-input"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Business Email *</label>
                  <input
                    required
                    type="email"
                    placeholder="name@company.com"
                    className="form-input"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Destination Country *</label>
                  <select
                    className="form-select"
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  >
                    <option value="Germany">Germany (DE)</option>
                    <option value="Czech Republic">Czech Republic (CZ)</option>
                    <option value="Austria">Austria (AT)</option>
                    <option value="Poland">Poland (PL)</option>
                    <option value="Slovakia">Slovakia (SK)</option>
                    <option value="France">France (FR)</option>
                    <option value="United Kingdom">United Kingdom (UK)</option>
                    <option value="Other EU / International">Other EU / International</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">Estimated Quantity</label>
                  <select
                    className="form-select"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  >
                    <option value="1">1 Unit (Individual Residential / Prototype)</option>
                    <option value="2-5">2 – 5 Units (Kitchen Studio Display)</option>
                    <option value="10-25">10 – 25 Units (Multi-family Project)</option>
                    <option value="50+">50+ Units (Commercial / Wholesale Batch)</option>
                  </select>
                </div>
                <div className="form-group form-checkbox-group">
                  <label className="form-checkbox-label">
                    <input
                      type="checkbox"
                      checked={formData.requestSampleChips}
                      onChange={(e) =>
                        setFormData({ ...formData, requestSampleChips: e.target.checked })
                      }
                      className="form-checkbox"
                    />
                    <span>Include 7-Color Granite Sample Box (Free for Trade)</span>
                  </label>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Project Details or Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Specify cabinet sizes, delivery timing, or distributor inquiries..."
                  className="form-textarea"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                disabled={!isFormValid || isSubmitting}
                aria-disabled={!isFormValid || isSubmitting}
                className="btn btn-gold"
                style={{
                  width: '100%',
                  marginTop: '0.5rem',
                  padding: '1rem',
                  cursor: !isFormValid || isSubmitting ? 'not-allowed' : 'pointer',
                  opacity: !isFormValid || isSubmitting ? 0.45 : 1,
                }}
                title={
                  !isFormValid
                    ? 'Please provide your full name and a valid business email'
                    : 'Submit quotation inquiry'
                }
              >
                <Send size={16} />
                <span>
                  {isSubmitting
                    ? 'Transmitting Inquiry...'
                    : 'Submit Quotation & Sample Request'}
                </span>
              </button>
            </form>
          </>
        ) : (
          <div className="modal-success-box">
            <div className="modal-success-icon">
              <CheckCircle size={32} />
            </div>
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800 }}>Inquiry Received</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6 }}>
              Thank you, <strong style={{ color: 'var(--text-primary)' }}>{formData.name}</strong>. Your
              quote inquiry for the <strong style={{ color: 'var(--accent-gold)' }}>{product.model} ({activeColor.name})</strong> has been routed to Elite Import & Export European Logistics in Prague.
            </p>
            <div
              style={{
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-subtle)',
                borderRadius: 'var(--radius-md)',
                padding: '1rem 1.5rem',
                width: '100%',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
              }}
            >
              <div>Reference Code: <strong style={{ color: 'var(--text-primary)' }}>ELT-{Math.floor(100000 + Math.random() * 900000)}</strong></div>
              <div>Estimated Response: <strong style={{ color: 'var(--accent-gold)' }}>Within 4 business hours</strong></div>
              <div>Direct Dispatch: <strong style={{ color: 'var(--text-primary)' }}>info@elitecompany-de.com</strong></div>
            </div>
            <div style={{ width: '100%', marginTop: '0.5rem' }}>
              <button
                type="button"
                className="btn btn-gold"
                style={{ width: '100%', justifyContent: 'center', padding: '0.9rem' }}
                onClick={resetAndClose}
              >
                Return to Configurator
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
