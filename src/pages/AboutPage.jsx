import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BRAND_INFO } from '../data/products';
import { getQuestionWhatsAppLink } from '../utils/whatsapp';
import { 
  Flame, 
  Heart, 
  Sparkles, 
  MapPin, 
  MessageCircle, 
  CheckCircle,
  Leaf,
  ShieldCheck
} from 'lucide-react';
import './AboutPage.css';

export const AboutPage = () => {
  return (
    <>
      <SEO 
        title="Our Story | From Ganpati Modak Candle to Candles by Aura" 
        description="Read the authentic story of how Candles by Aura began in Nashik during Ganpati festival with handmade Modak candles."
        path="/about"
      />

      <div className="about-page section-padding">
        <div className="container">
          {/* Header Banner */}
          <div className="about-header text-center">
            <span className="section-subtitle">Our Journey & Philosophy</span>
            <h1 className="about-main-title">From a Ganpati Candle to Candles by Aura</h1>
            <p className="about-lead">
              Handcrafted in Nashik, Maharashtra with love, natural soy wax, and traditional Indian spirit.
            </p>
          </div>

          {/* Story Grid */}
          <div className="about-story-grid">
            <div className="story-img-column">
              <div className="story-image-card">
                <img src="/images/modak-candle.jpg" alt="Original Modak Candle by Aura" />
                <div className="story-card-overlay">
                  <Flame size={20} color="#D4AF37" />
                  <span>Started in Nashik, Maharashtra</span>
                </div>
              </div>
            </div>

            <div className="story-text-column">
              <h2>The Story Behind Our Flames</h2>
              <p>
                Every brand has a turning point, and for us, it was the sacred season of Ganpati. In our home workshop in Nashik, we hand-poured our very first small batch of <strong>Modak-shaped candles</strong>. We wished to create something deeply meaningful—a flame that looked like the revered festive modak and radiated serene lavender aroma.
              </p>

              <p>
                The response was beyond anything we imagined. Neighbors, friends, and festival patrons embraced our Modak candles with genuine warmth. Their encouraging feedback gave us the courage to build <strong>Candles by Aura</strong> into a full handcrafted brand.
              </p>

              <p>
                Today, while our collection has grown to include lotus diyas, floral boxes, and luxury gift hampers, our core foundation remains untouched: <em>small-batch craftsmanship, personal customer connection, and uncompromising quality.</em>
              </p>

              <div className="about-location-pill">
                <MapPin size={18} color="#C86D51" />
                <span>Handcrafted & Dispatched from Nashik, Maharashtra, India</span>
              </div>
            </div>
          </div>

          {/* Core Values Section */}
          <div className="values-section">
            <div className="section-header">
              <span className="section-subtitle">Why Choose Us</span>
              <h2 className="section-title">The Aura Promise</h2>
            </div>

            <div className="values-grid">
              <div className="value-card">
                <Flame size={32} className="value-icon" />
                <h3>Handmade Quality</h3>
                <p>No industrial mass manufacturing. Each candle is hand-cast, hand-finished, and inspected individually.</p>
              </div>

              <div className="value-card">
                <Leaf size={32} className="value-icon" />
                <h3>100% Eco Soy Wax</h3>
                <p>We use clean-burning, biodegradable soy wax free from harmful toxins or heavy paraffin soot.</p>
              </div>

              <div className="value-card">
                <Sparkles size={32} className="value-icon" />
                <h3>Artisanal Indian Aesthetic</h3>
                <p>Rooted in rich Indian heritage with refined gold trims, warm neutrals, and authentic scents.</p>
              </div>

              <div className="value-card">
                <ShieldCheck size={32} className="value-icon" />
                <h3>Personalized Care</h3>
                <p>We talk to every customer directly on WhatsApp to ensure your order, custom scent, or gift note is perfect.</p>
              </div>
            </div>
          </div>

          {/* CTA Box */}
          <div className="about-cta-banner">
            <h2>Experience the Warmth of Handcrafted Candles</h2>
            <p>Browse our collection or talk to us directly on WhatsApp to customize your festive gifts.</p>
            <div className="cta-btn-row">
              <Link to="/shop" className="btn btn-primary btn-lg">Explore Shop</Link>
              <a 
                href={getQuestionWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-lg"
              >
                <MessageCircle size={20} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
