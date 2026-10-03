import React from 'react';
import { Link } from 'react-router-dom';
import { getSingleProductWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppProductClick } from '../utils/analytics';
import { MessageCircle, Eye, Sparkles, Clock, Scale } from 'lucide-react';
import './ProductCard.css';

export const ProductCard = ({ product }) => {
  const handleWhatsAppOrder = (e) => {
    e.stopPropagation();
    trackWhatsAppProductClick(product, 1);
    const link = getSingleProductWhatsAppLink(product, 1);
    window.open(link, '_blank');
  };

  const getBadgeClass = (badge) => {
    if (!badge) return '';
    const b = badge.toLowerCase();
    if (b.includes('bestseller')) return 'badge-bestseller';
    if (b.includes('diwali')) return 'badge-diwali';
    if (b.includes('new')) return 'badge-new';
    return 'badge-limited';
  };

  return (
    <div className="product-card">
      {/* Product Image & Badge Container */}
      <div className="product-image-wrap">
        <Link to={`/product/${product.slug}`} className="product-image-link">
          <img 
            src={product.image} 
            alt={product.name} 
            className="product-img"
            loading="lazy"
            onError={(e) => {
              // Fallback to placeholder gradient if image fails to load
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="image-fallback" style={{ display: 'none' }}>
            <Sparkles size={32} color="#D4AF37" />
            <span>Candles by Aura</span>
          </div>
        </Link>

        {product.badge && (
          <span className={`badge product-badge ${getBadgeClass(product.badge)}`}>
            {product.badge === 'Diwali Special' && <Sparkles size={12} inline />}
            {product.badge}
          </span>
        )}

        <div className="quick-specs-pill">
          {product.weight && <span><Scale size={12} inline /> {product.weight}</span>}
          {product.burnTime && <span><Clock size={12} inline /> {product.burnTime}</span>}
        </div>
      </div>

      {/* Product Details */}
      <div className="product-info">
        <div className="product-category-row">
          <span className="product-category-tag">{product.category}</span>
          {product.code && <span className="product-code-tag">{product.code}</span>}
        </div>
        
        <h3 className="product-title">
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </h3>

        <p className="product-desc-short">{product.shortDescription || product.description}</p>

        <div className="product-price-row">
          <div className="price-box">
            <span className="price-currency">₹</span>
            <span className="price-amount">{product.price}</span>
            <span className="price-tax-tag">Inc. all taxes</span>
          </div>
          <span className="stock-status">🟢 In Stock (Nashik)</span>
        </div>

        {/* Action Buttons */}
        <div className="product-card-actions">
          <button 
            onClick={handleWhatsAppOrder} 
            className="btn btn-whatsapp btn-full"
            title="Order directly on WhatsApp"
          >
            <MessageCircle size={18} />
            <span>Order on WhatsApp</span>
          </button>
          
          <Link 
            to={`/product/${product.slug}`} 
            className="btn btn-secondary btn-full btn-sm view-details-btn"
          >
            <Eye size={16} /> View Details
          </Link>
        </div>
      </div>
    </div>
  );
};
