import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, BRAND_INFO } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { OrderProcess } from '../components/OrderProcess';
import { SEO } from '../components/SEO';
import { getQuestionWhatsAppLink } from '../utils/whatsapp';
import { 
  Sparkles, 
  Flame, 
  ArrowRight, 
  MessageCircle, 
  Heart, 
  Award, 
  ShieldCheck 
} from 'lucide-react';
import { InstagramIcon as Instagram } from '../components/Icons';
import './HomePage.css';

export const HomePage = () => {
  // Featured products (ensure Modak Candle is prominent)
  const bestsellers = PRODUCTS.filter(p => p.isBestseller || p.id === 1);

  // Instagram post placeholders
  const instaPosts = [
    { id: 1, img: "/images/modak-candle.jpg", likes: "240+", caption: "Our signature handmade Modak candles for festive blessings 🕯️✨" },
    { id: 2, img: "/images/diwali-gift-box.jpg", likes: "310+", caption: "Luxury Diwali hampers hand-packed with love in Nashik 🎁" },
    { id: 3, img: "/images/flower-candle-box.jpg", likes: "185+", caption: "Fresh lotus & marigold candles illuminating thalis 🌸" },
    { id: 4, img: "/images/diya-candle.jpg", likes: "290+", caption: "Gold shimmer terracotta diyas pouring warm aromas ✨" },
    { id: 5, img: "/images/hero-candle.jpg", likes: "420+", caption: "Behind the scenes: Hand-pouring 100% soy wax 🌿" },
    { id: 6, img: "/images/modak-candle.jpg", likes: "195+", caption: "Small batch artisanal candles crafted in Maharashtra ❤️" }
  ];

  return (
    <>
      <SEO 
        title="Handcrafted Candles, Made for Beautiful Moments" 
        description="Discover handcrafted soy candles by Candles by Aura in Nashik — Modak candles, Diwali gift boxes, decorative candles and corporate gifting."
        path="/"
      />

      {/* 1. Hero Section */}
      <section className="hero-section">
        <div className="container hero-container">
          <div className="hero-text-content">
            <span className="hero-badge">
              <Sparkles size={16} /> Handcrafted in Nashik, Maharashtra
            </span>
            
            <h1 className="hero-headline">
              Handcrafted Candles, Made for Beautiful Moments.
            </h1>
            
            <p className="hero-subheading">
              Beautifully handcrafted candles for celebrations, gifting and everyday moments. Hand-poured in small batches using 100% natural soy wax.
            </p>

            <div className="hero-cta-group">
              <Link to="/shop" className="btn btn-primary btn-lg">
                <span>Shop Candles</span>
                <ArrowRight size={18} />
              </Link>
              
              <Link to="/diwali-collection" className="btn btn-gold btn-lg">
                <Sparkles size={18} />
                <span>Explore Diwali Collection</span>
              </Link>
            </div>

            <div className="hero-trust-row">
              <div className="trust-pill">
                <Flame size={16} color="#C86D51" />
                <span>Ganpati Modak Special</span>
              </div>
              <div className="trust-pill">
                <MessageCircle size={16} color="#25D366" />
                <span>Direct WhatsApp Ordering</span>
              </div>
              <div className="trust-pill">
                <Award size={16} color="#D4AF37" />
                <span>100% Eco Soy Wax</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-content">
            <div className="hero-image-card">
              <img 
                src="/images/hero-candle.jpg" 
                alt="Candles by Aura Artisanal Setting" 
                className="hero-main-img"
              />
              <div className="hero-floating-badge">
                <div className="floating-badge-icon">🪔</div>
                <div>
                  <strong>Modak Candle Bestseller</strong>
                  <span>Starting at ₹99</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Bestsellers Section (USER REQUEST: Moved to Top right after Hero) */}
      <section className="bestsellers-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Customer Favorites</span>
            <h2 className="section-title">Made With Love. Loved By You.</h2>
            <p className="section-description">
              Hand-poured creations that brought warmth and smiles to hundreds of homes.
            </p>
          </div>

          <div className="products-grid">
            {bestsellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="view-all-box">
            <Link to="/shop" className="btn btn-outline btn-lg">
              <span>View All Products ({PRODUCTS.length})</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. 4-Step Order Process Explanation */}
      <OrderProcess />

      {/* 4. Featured Categories */}
      <section className="categories-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Curated Collections</span>
            <h2 className="section-title">Explore By Category</h2>
            <p className="section-description">
              Find the perfect ambient candle for your home, festive rituals, or heartfelt gifting.
            </p>
          </div>

          <div className="categories-grid">
            {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
              <Link 
                to={cat.slug ? `/${cat.slug}` : `/shop?category=${cat.id}`} 
                key={cat.id} 
                className="category-card"
              >
                <div className="category-icon-box">{cat.icon}</div>
                <h3 className="category-card-title">{cat.name}</h3>
                <p className="category-card-desc">{cat.description}</p>
                <span className="category-link-text">
                  Explore <ArrowRight size={14} inline />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Brand Story & Origin Section */}
      <section className="brand-story-section section-padding">
        <div className="container story-container">
          <div className="story-image-wrap">
            <img 
              src="/images/modak-candle.jpg" 
              alt="Artisanal Handmade Modak Candle" 
              className="story-img" 
            />
            <div className="story-image-badge">
              <Sparkles size={20} color="#D4AF37" />
              <span>Ganpati Modak Heritage</span>
            </div>
          </div>

          <div className="story-content">
            <span className="section-subtitle">Authentic & Small-Business</span>
            <h2 className="story-title">From a Ganpati Candle to Candles by Aura</h2>
            
            <p className="story-text">
              Our business started in Nashik with a simple dream during the Ganpati festival—crafting handmade Modak-shaped candles for festive worship. The response from our local community was overwhelming and deeply encouraging!
            </p>

            <p className="story-text">
              That warm reception inspired us to launch <strong>Candles by Aura</strong>. Today, we continue to hand-cast each candle with eco-friendly soy wax, therapeutic essential oils, and genuine Indian craftsmanship.
            </p>

            <div className="story-highlights-list">
              <div className="story-highlight-item">
                <ShieldCheck size={20} className="highlight-icon" />
                <div>
                  <strong>Small-Business Authenticity</strong>
                  <span>Personally crafted, packed, and verified in Nashik.</span>
                </div>
              </div>

              <div className="story-highlight-item">
                <Heart size={20} className="highlight-icon" />
                <div>
                  <strong>Warm & Elegant Aesthetics</strong>
                  <span>Designed to elevate thalis, altars, and gift boxes.</span>
                </div>
              </div>
            </div>

            <div className="story-actions">
              <Link to="/about" className="btn btn-primary">
                Read Our Full Story
              </Link>
              <a 
                href={getQuestionWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <MessageCircle size={18} /> Chat With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Instagram Journey Section */}
      <section className="instagram-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Social Community</span>
            <h2 className="section-title">Follow Our Candle Journey</h2>
            <p className="section-description">
              Join our Instagram family <strong>{BRAND_INFO.instagramHandle}</strong> for candle making behind-the-scenes and festive styling tips.
            </p>
          </div>

          <div className="insta-grid">
            {instaPosts.map((post) => (
              <a 
                key={post.id}
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="insta-card"
              >
                <img src={post.img} alt="Candles by Aura Instagram" className="insta-img" />
                <div className="insta-overlay">
                  <Instagram size={28} color="#FFFFFF" />
                  <span className="insta-likes">❤️ {post.likes}</span>
                  <p className="insta-caption">{post.caption}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="insta-cta-box">
            <a 
              href={BRAND_INFO.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold btn-lg"
            >
              <Instagram size={20} />
              <span>Follow Us on Instagram ({BRAND_INFO.instagramHandle})</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
