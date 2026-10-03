import React from 'react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { getQuestionWhatsAppLink } from '../utils/whatsapp';
import { Sparkles, Flame, MessageCircle, Gift } from 'lucide-react';
import './DiwaliCollectionPage.css';

export const DiwaliCollectionPage = () => {
  const diwaliProducts = PRODUCTS.filter(
    (p) => p.isDiwaliSpecial || p.category === 'Festive' || p.category === 'Gift Boxes'
  );

  return (
    <>
      <SEO 
        title="Diwali Collection 2026 | Handcrafted Festive Candles" 
        description="Celebrate Diwali with handcrafted lotus candles, clay diyas, Modak candles, and luxury gift hampers by Candles by Aura."
        path="/diwali-collection"
      />

      <div className="diwali-page section-padding">
        <div className="container">
          {/* Festive Banner Hero */}
          <div className="diwali-hero">
            <div className="diwali-hero-content">
              <span className="festive-badge">
                <Sparkles size={16} /> Festive Season 2026 • Limited Edition
              </span>

              <h1 className="diwali-hero-title">
                Diwali Lights & Festive Aromas
              </h1>

              <p className="diwali-hero-desc">
                Illuminate your home with pure soy wax diyas, hand-carved lotus blossoms, traditional modaks, and opulent festive hampers. Hand-cast with love in Nashik.
              </p>

              <div className="diwali-hero-cta">
                <a 
                  href={getQuestionWhatsAppLink('Diwali Bulk Orders')} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-whatsapp btn-lg"
                >
                  <MessageCircle size={20} />
                  <span>Enquire Diwali Bulk Orders</span>
                </a>
              </div>
            </div>
          </div>

          {/* Highlights Row */}
          <div className="diwali-highlights">
            <div className="highlight-pill">
              <Flame size={18} color="#D4AF37" />
              <span>Clean Soy Wax Burn</span>
            </div>
            <div className="highlight-pill">
              <Sparkles size={18} color="#D4AF37" />
              <span>Hand-painted Gold Accents</span>
            </div>
            <div className="highlight-pill">
              <Gift size={18} color="#D4AF37" />
              <span>Custom Festive Hampers</span>
            </div>
          </div>

          {/* Product Grid */}
          <div className="section-header mt-5">
            <span className="section-subtitle">Diwali Specialities</span>
            <h2 className="section-title">Explore Festive Creations</h2>
          </div>

          <div className="products-grid">
            {diwaliProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
