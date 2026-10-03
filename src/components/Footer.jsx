import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO, CATEGORIES } from '../data/products';
import { getQuestionWhatsAppLink } from '../utils/whatsapp';
import { 
  Flame, 
  MapPin, 
  MessageCircle, 
  Mail, 
  Heart, 
  Sparkles, 
  ShieldCheck, 
  Leaf 
} from 'lucide-react';
import { InstagramIcon as Instagram } from './Icons';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="site-footer">
      {/* Trust Highlights Ticker */}
      <div className="trust-highlights">
        <div className="container trust-grid">
          <div className="trust-card">
            <div className="trust-icon"><Flame size={20} /></div>
            <div>
              <h4>100% Handcrafted</h4>
              <p>Hand-poured with love in Nashik</p>
            </div>
          </div>
          <div className="trust-card">
            <div className="trust-icon"><Leaf size={20} /></div>
            <div>
              <h4>Eco Soy Wax</h4>
              <p>Clean, non-toxic & long burning</p>
            </div>
          </div>
          <div className="trust-card">
            <div className="trust-icon"><MessageCircle size={20} /></div>
            <div>
              <h4>WhatsApp Ordering</h4>
              <p>Direct personal confirmation</p>
            </div>
          </div>
          <div className="trust-card">
            <div className="trust-icon"><ShieldCheck size={20} /></div>
            <div>
              <h4>Safe & Transparent</h4>
              <p>No online payment required initially</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="container footer-main">
        <div className="footer-grid">
          {/* Brand Info Column */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="logo-icon">
                <Flame size={22} />
              </div>
              <span className="brand-name">Candles by Aura</span>
            </div>
            <p className="brand-tagline-footer">
              "Handcrafted Candles, Made for Beautiful Moments."
            </p>
            <p className="brand-story-snippet">
              Born during Ganpati festival in Nashik with handcrafted Modak candles. Crafting warm, serene scents for every home and celebration.
            </p>
            <div className="social-links">
              <a 
                href={BRAND_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn instagram"
                title="Follow on Instagram"
              >
                <Instagram size={18} />
              </a>
              <a 
                href={getQuestionWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-btn whatsapp"
                title="Chat on WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop All Candles</Link></li>
              <li><Link to="/diwali-collection" className="festive-link"><Sparkles size={14} /> Diwali Collection</Link></li>
              <li><Link to="/corporate-gifting">Corporate & Bulk Gifting</Link></li>
              <li><Link to="/about">Our Story (About)</Link></li>
              <li><Link to="/contact">Contact & FAQs</Link></li>
            </ul>
          </div>

          {/* Product Categories */}
          <div className="footer-col">
            <h4 className="footer-heading">Categories</h4>
            <ul className="footer-links">
              {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                <li key={cat.id}>
                  <Link to={`/shop?category=${cat.id}`}>
                    {cat.icon} {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-col">
            <h4 className="footer-heading">Get In Touch</h4>
            <div className="contact-details">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon" />
                <span>Nashik, Maharashtra, India</span>
              </div>
              <div className="contact-item">
                <MessageCircle size={18} className="contact-icon" />
                <a href={getQuestionWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp Direct Enquiry
                </a>
              </div>
              <div className="contact-item">
                <Instagram size={18} className="contact-icon" />
                <a href={BRAND_INFO.instagramUrl} target="_blank" rel="noopener noreferrer">
                  {BRAND_INFO.instagramHandle}
                </a>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon" />
                <a href={`mailto:${BRAND_INFO.email}`}>{BRAND_INFO.email}</a>
              </div>
            </div>

            <div className="footer-wa-box">
              <p>Ready to order or ask a question?</p>
              <a 
                href={getQuestionWhatsAppLink()} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp btn-sm"
              >
                <MessageCircle size={16} /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-content">
          <p>© {new Date().getFullYear()} Candles by Aura. All rights reserved.</p>
          <p className="made-with">
            Crafted with <Heart size={14} color="#C86D51" fill="#C86D51" inline /> in Nashik, Maharashtra
          </p>
        </div>
      </div>
    </footer>
  );
};
