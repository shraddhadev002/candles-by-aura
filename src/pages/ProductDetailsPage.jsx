import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { SEO } from '../components/SEO';
import { ProductCard } from '../components/ProductCard';
import { 
  getSingleProductWhatsAppLink, 
  getQuestionWhatsAppLink 
} from '../utils/whatsapp';
import { 
  trackViewItem, 
  trackWhatsAppProductClick, 
  trackWhatsAppQuestionClick 
} from '../utils/analytics';
import { 
  MessageCircle, 
  ShoppingBag, 
  Plus, 
  Minus, 
  Flame, 
  Clock, 
  Scale, 
  Ruler, 
  Sparkles, 
  ShieldAlert, 
  ChevronDown, 
  ChevronUp, 
  ArrowLeft,
  Camera,
  CheckCircle
} from 'lucide-react';
import './ProductDetailsPage.css';

export const ProductDetailsPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('care');
  const [openAccordion, setOpenAccordion] = useState('care');

  useEffect(() => {
    if (product) {
      trackViewItem(product);
      window.scrollTo(0, 0);
      setQuantity(1);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="container section-padding text-center">
        <h2>Product not found</h2>
        <Link to="/shop" className="btn btn-primary mt-4">Return to Shop</Link>
      </div>
    );
  }

  const handleWhatsAppOrder = () => {
    trackWhatsAppProductClick(product, quantity);
    const link = getSingleProductWhatsAppLink(product, quantity);
    window.open(link, '_blank');
  };

  const handleAskQuestion = () => {
    trackWhatsAppQuestionClick(product.name);
    const link = getQuestionWhatsAppLink(product.name, product.code);
    window.open(link, '_blank');
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.isDiwaliSpecial)
  ).slice(0, 3);

  return (
    <>
      <SEO 
        title={product.name} 
        description={product.shortDescription || product.description}
        path={`/product/${product.slug}`}
      />

      <div className="product-details-page section-padding">
        <div className="container">
          {/* Breadcrumb */}
          <div className="breadcrumb">
            <Link to="/"><ArrowLeft size={16} inline /> Home</Link>
            <span>/</span>
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <span className="current">{product.name}</span>
          </div>

          <div className="product-details-grid">
            {/* Left: Product Image & Gallery */}
            <div className="details-image-container">
              <div className="main-image-wrap">
                <img src={product.image} alt={product.name} className="main-product-img" />
                {product.badge && (
                  <span className="badge details-badge">{product.badge}</span>
                )}
              </div>

              {/* Product Photo WhatsApp Tip Note */}
              <div className="photo-tip-box">
                <Camera size={18} className="tip-icon" />
                <span>
                  <strong>Tip for WhatsApp:</strong> You can attach the product photo to your WhatsApp message if needed when ordering or asking questions.
                </span>
              </div>
            </div>

            {/* Right: Product Info & Actions */}
            <div className="details-info-container">
              <div className="details-tags-row">
                <span className="category-pill-tag">{product.category}</span>
                {product.code && <span className="code-pill-tag">Product ID: {product.code}</span>}
              </div>
              
              <h1 className="details-title">{product.name}</h1>

              <div className="details-price-row">
                <span className="currency-symbol">₹</span>
                <span className="price-value">{product.price}</span>
                <span className="tax-inclusive">Inclusive of all taxes</span>
                <span className="stock-pill">🟢 In Stock (Hand-poured in Nashik)</span>
              </div>

              <p className="details-description">{product.description}</p>

              {/* Specs Grid */}
              <div className="specs-grid">
                <div className="spec-card">
                  <Flame size={18} className="spec-icon" />
                  <div>
                    <span className="spec-label">Wax Type</span>
                    <span className="spec-value">{product.waxType || '100% Eco Soy Wax'}</span>
                  </div>
                </div>

                <div className="spec-card">
                  <Scale size={18} className="spec-icon" />
                  <div>
                    <span className="spec-label">Weight</span>
                    <span className="spec-value">{product.weight || '15g'}</span>
                  </div>
                </div>

                <div className="spec-card">
                  <Clock size={18} className="spec-icon" />
                  <div>
                    <span className="spec-label">Burn Time</span>
                    <span className="spec-value">{product.burnTime || '45 Minutes'}</span>
                  </div>
                </div>

                <div className="spec-card">
                  <Sparkles size={18} className="spec-icon" />
                  <div>
                    <span className="spec-label">Fragrance</span>
                    <span className="spec-value">{product.fragrance || 'Lavender'}</span>
                  </div>
                </div>

                {product.dimensions && (
                  <div className="spec-card spec-full">
                    <Ruler size={18} className="spec-icon" />
                    <div>
                      <span className="spec-label">Dimensions</span>
                      <span className="spec-value">{product.dimensions}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Quantity Selector & Action Buttons */}
              <div className="action-row">
                <div className="quantity-selector">
                  <label htmlFor="qty-input">Quantity:</label>
                  <div className="qty-controls-lg">
                    <button 
                      className="qty-btn-lg"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      <Minus size={16} />
                    </button>
                    <span className="qty-val-lg">{quantity}</span>
                    <button 
                      className="qty-btn-lg"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="main-btns-group">
                  <button 
                    className="btn btn-whatsapp btn-lg btn-full"
                    onClick={handleWhatsAppOrder}
                  >
                    <MessageCircle size={22} />
                    <span>Order on WhatsApp (₹{product.price * quantity})</span>
                  </button>

                  <button 
                    className="btn btn-secondary btn-lg btn-full"
                    onClick={() => addToCart(product, quantity)}
                  >
                    <ShoppingBag size={20} />
                    <span>Add to Cart</span>
                  </button>
                </div>
              </div>

              {/* Customer Questions Box */}
              <div className="customer-question-box">
                <div className="question-text">
                  <strong>Have a question? Ask us on WhatsApp.</strong>
                  <p>Want to know about fragrance, size, burn time, customization or delivery? Message us directly.</p>
                </div>
                <button 
                  className="btn btn-outline btn-sm"
                  onClick={handleAskQuestion}
                >
                  <MessageCircle size={16} />
                  <span>Ask on WhatsApp</span>
                </button>
              </div>

              {/* Accordion Tabs for Candle Care & Safety */}
              <div className="accordion-section">
                <div 
                  className={`accordion-header ${openAccordion === 'care' ? 'open' : ''}`}
                  onClick={() => setOpenAccordion(openAccordion === 'care' ? '' : 'care')}
                >
                  <span>🕯️ Candle Care & Burn Instructions</span>
                  {openAccordion === 'care' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {openAccordion === 'care' && (
                  <div className="accordion-content">
                    <ul>
                      <li><CheckCircle size={14} inline color="#278A4B" /> Trim wick to 1/4 inch before lighting each time.</li>
                      <li><CheckCircle size={14} inline color="#278A4B" /> Burn on a flat, heat-resistant surface or brass thali.</li>
                      <li><CheckCircle size={14} inline color="#278A4B" /> Allow wax pool to reach edges on first burn to prevent tunneling.</li>
                    </ul>
                  </div>
                )}

                <div 
                  className={`accordion-header ${openAccordion === 'safety' ? 'open' : ''}`}
                  onClick={() => setOpenAccordion(openAccordion === 'safety' ? '' : 'safety')}
                >
                  <span>🛡️ Safety Information</span>
                  {openAccordion === 'safety' ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
                {openAccordion === 'safety' && (
                  <div className="accordion-content">
                    <p>{product.safetyInfo || "Never leave a burning candle unattended. Keep away from drafts, pets, and children."}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Related Products Section */}
          {relatedProducts.length > 0 && (
            <div className="related-products-section">
              <div className="section-header">
                <span className="section-subtitle">You May Also Like</span>
                <h2 className="section-title">Pair With These Artisanal Candles</h2>
              </div>
              <div className="products-grid">
                {relatedProducts.map((rel) => (
                  <ProductCard key={rel.id} product={rel} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Sticky Mobile Bottom Bar for Easy Ordering */}
      <div className="mobile-sticky-order-bar">
        <div className="mobile-bar-info">
          <span className="mobile-bar-name">{product.name}</span>
          <span className="mobile-bar-price">₹{product.price * quantity}</span>
        </div>
        <button 
          className="btn btn-whatsapp btn-sm"
          onClick={handleWhatsAppOrder}
        >
          <MessageCircle size={18} />
          <span>Order on WhatsApp</span>
        </button>
      </div>
    </>
  );
};
