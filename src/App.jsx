import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import WorldOfMaterialsPage from './pages/WorldOfMaterialsPage';
import { FLAGSHIP_PRODUCT, ELITE_COLORS, INSTALLATION_TYPES } from './data/products';
import './styles/main.css';

// Scroll to top on route change, or smooth scroll to hash target if present
function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const timer = setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 80);
      return () => clearTimeout(timer);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
}

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [activeQuoteProduct, setActiveQuoteProduct] = useState(FLAGSHIP_PRODUCT);
  const [currency, setCurrency] = useState('EUR');
  const [selectedColor, setSelectedColor] = useState(ELITE_COLORS[0]);
  const [selectedInstallation, setSelectedInstallation] = useState(INSTALLATION_TYPES[0]);

  const handleOpenQuote = (customProduct) => {
    if (customProduct && customProduct.model) {
      setActiveQuoteProduct({
        ...FLAGSHIP_PRODUCT,
        ...customProduct,
      });
    } else {
      setActiveQuoteProduct(FLAGSHIP_PRODUCT);
    }
    setQuoteModalOpen(true);
  };

  // Currency Formatter
  const currencyRates = {
    EUR: { rate: 1, symbol: '€', code: 'EUR' },
    USD: { rate: 1.08, symbol: '$', code: 'USD' },
    GBP: { rate: 0.85, symbol: '£', code: 'GBP' },
    CZK: { rate: 25.2, symbol: 'Kč', code: 'CZK', isSuffix: true },
  };

  const formatPrice = (eurAmount) => {
    const curr = currencyRates[currency] || currencyRates.EUR;
    const converted = Math.round(eurAmount * curr.rate);
    if (curr.isSuffix) {
      return `${converted.toLocaleString()} ${curr.symbol}`;
    }
    return `${curr.symbol}${converted.toLocaleString()}`;
  };

  return (
    <div className="app-layout">
      <ScrollToTop />

      <Navbar
        onOpenQuoteModal={() => handleOpenQuote()}
        currency={currency}
        setCurrency={setCurrency}
      />

      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenQuoteModal={handleOpenQuote}
              currencySymbol={currencyRates[currency]?.symbol || '€'}
              formatPrice={formatPrice}
            />
          }
        />
        <Route
          path="/product"
          element={
            <ProductPage
              onOpenQuoteModal={() => handleOpenQuote()}
              formatPrice={formatPrice}
              currency={currency}
            />
          }
        />
        <Route
          path="/materials"
          element={
            <WorldOfMaterialsPage
              onOpenQuoteModal={() => handleOpenQuote()}
            />
          }
        />
        <Route
          path="*"
          element={
            <HomePage
              onOpenQuoteModal={handleOpenQuote}
              currencySymbol={currencyRates[currency]?.symbol || '€'}
              formatPrice={formatPrice}
            />
          }
        />
      </Routes>

      <Footer onOpenQuoteModal={() => handleOpenQuote()} />

      {/* Quote / Sample Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        product={activeQuoteProduct}
        activeColor={selectedColor}
        installationType={selectedInstallation}
      />
    </div>
  );
}
