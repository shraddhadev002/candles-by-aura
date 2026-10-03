import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getCartWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppCartClick } from '../utils/analytics';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  MessageCircle, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import './CartDrawer.css';

export const CartDrawer = () => {
  const { 
    cart, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    cartTotal, 
    isCartOpen, 
    setIsCartOpen 
  } = useCart();

  const [userNotes, setUserNotes] = useState('');

  if (!isCartOpen) return null;

  const handleWhatsAppOrder = () => {
    trackWhatsAppCartClick(cart, cartTotal);
    const link = getCartWhatsAppLink(cart, cartTotal, userNotes);
    window.open(link, '_blank');
  };

  return (
    <div className="cart-drawer-overlay" onClick={() => setIsCartOpen(false)}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="cart-drawer-header">
          <div className="drawer-title-box">
            <ShoppingBag size={20} className="header-cart-icon" />
            <h3>Your Order Cart</h3>
            <span className="drawer-count">({cart.length} {cart.length === 1 ? 'item' : 'items'})</span>
          </div>
          <button className="close-drawer-btn" onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        {/* Notice Banner */}
        <div className="cart-notice-banner">
          <ShieldCheck size={18} className="notice-icon" />
          <span>No online payment! We confirm your order & delivery directly on WhatsApp.</span>
        </div>

        {/* Content Body */}
        <div className="cart-drawer-body">
          {cart.length === 0 ? (
            <div className="empty-cart-view">
              <div className="empty-cart-icon">
                <Sparkles size={40} color="#D4AF37" />
              </div>
              <h4>Your cart is empty</h4>
              <p>Explore our handcrafted candles and festive Diwali hampers!</p>
              <Link 
                to="/shop" 
                className="btn btn-primary"
                onClick={() => setIsCartOpen(false)}
              >
                Browse Shop
              </Link>
            </div>
          ) : (
            <div className="cart-items-list">
              {cart.map((item) => (
                <div className="cart-item-card" key={item.id}>
                  <img src={item.image} alt={item.name} className="cart-item-img" />
                  
                  <div className="cart-item-info">
                    <div className="cart-item-header">
                      <h4 className="cart-item-title">{item.name}</h4>
                      <button 
                        className="remove-item-btn"
                        onClick={() => removeFromCart(item.id)}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="cart-item-price-unit">₹{item.price} each</div>

                    <div className="cart-item-footer">
                      <div className="qty-controls">
                        <button 
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className="qty-value">{item.quantity}</span>
                        <button 
                          className="qty-btn"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>

                      <div className="cart-item-subtotal">
                        ₹{item.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Optional Custom Notes Input */}
              <div className="cart-notes-box">
                <label htmlFor="cart-notes">Add Special Notes or Delivery Instructions:</label>
                <textarea
                  id="cart-notes"
                  rows="2"
                  placeholder="e.g. Need gift wrapping, specific aroma request, or delivery address..."
                  value={userNotes}
                  onChange={(e) => setUserNotes(e.target.value)}
                ></textarea>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        {cart.length > 0 && (
          <div className="cart-drawer-footer">
            <div className="cart-subtotal-row">
              <span className="subtotal-label">Estimated Total:</span>
              <span className="subtotal-amount">₹{cartTotal}</span>
            </div>

            <button 
              className="btn btn-whatsapp btn-full btn-lg"
              onClick={handleWhatsAppOrder}
            >
              <MessageCircle size={22} />
              <span>Order Entire Cart on WhatsApp</span>
            </button>

            <button 
              className="clear-cart-link"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
