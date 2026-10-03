import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { initGA } from './utils/analytics';

// Pages
import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { DiwaliCollectionPage } from './pages/DiwaliCollectionPage';
import { CorporateGiftingPage } from './pages/CorporateGiftingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Scroll to top on route change helper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export function App() {
  useEffect(() => {
    initGA();
  }, []);

  return (
    <CartProvider>
      <ScrollToTop />
      <Header />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:slug" element={<ProductDetailsPage />} />
          <Route path="/diwali-collection" element={<DiwaliCollectionPage />} />
          <Route path="/corporate-gifting" element={<CorporateGiftingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Catch-all route */}
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />
      <Toast />
    </CartProvider>
  );
}

export default App;
