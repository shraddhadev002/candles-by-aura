import React, { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getQuestionWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppQuestionClick } from '../utils/analytics';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  MessageCircle, 
  Flame,
  Sparkles
} from 'lucide-react';
import './Header.css';

export const Header = () => {
  const { cartCount, setIsCartOpen } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppQuestionClick('Header Quick Chat');
    window.open(getQuestionWhatsAppLink(), '_blank');
  };

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="container announcement-content">
          <span><Sparkles size={14} inline /> Handcrafted in Nashik, Maharashtra</span>
          <span className="announcement-divider">•</span>
          <span>Order directly via WhatsApp — No Payment Required Online</span>
          <span className="announcement-divider">•</span>
          <span className="festive-tag"><Flame size={14} inline /> Diwali Special Collection Live</span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container header-inner">
          {/* Brand Logo */}
          <Link to="/" className="brand-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="logo-icon">
              <Flame size={22} className="flame-icon" />
            </div>
            <div className="logo-text">
              <span className="brand-name">Candles by Aura</span>
              <span className="brand-tagline">Nashik • Handcrafted</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Shop
            </NavLink>
            <NavLink to="/diwali-collection" className={({ isActive }) => (isActive ? 'nav-link active festive' : 'nav-link festive')}>
              <Sparkles size={14} /> Diwali Collection
            </NavLink>
            <NavLink to="/corporate-gifting" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Corporate Gifting
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
              Contact
            </NavLink>
          </nav>

          {/* Action Icons */}
          <div className="header-actions">
            {/* Search Trigger */}
            <button 
              className="icon-btn" 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              title="Search products"
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            {/* Cart Trigger */}
            <button 
              className="icon-btn cart-btn" 
              onClick={() => setIsCartOpen(true)}
              title="View Cart"
              aria-label="Cart"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>

            {/* WhatsApp Direct CTA */}
            <button 
              className="btn btn-whatsapp header-wa-btn"
              onClick={handleWhatsAppClick}
              title="Chat on WhatsApp"
            >
              <MessageCircle size={18} />
              <span className="wa-text">Chat on WhatsApp</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button 
              className="icon-btn mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Dropdown Search Bar */}
        {isSearchOpen && (
          <div className="search-bar-dropdown">
            <div className="container">
              <form onSubmit={handleSearchSubmit} className="search-form">
                <Search size={20} className="search-input-icon" />
                <input
                  type="text"
                  placeholder="Search Modak, Flower candles, Diwali hampers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                <button type="submit" className="btn btn-primary btn-sm">Search</button>
                <button 
                  type="button" 
                  className="close-search-btn"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X size={18} />
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="mobile-nav-drawer">
            <nav className="mobile-nav-links">
              <NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</NavLink>
              <NavLink to="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop All Candles</NavLink>
              <NavLink to="/diwali-collection" onClick={() => setIsMobileMenuOpen(false)} className="festive-mobile">
                <Sparkles size={16} /> Diwali Collection
              </NavLink>
              <NavLink to="/corporate-gifting" onClick={() => setIsMobileMenuOpen(false)}>Corporate Gifting</NavLink>
              <NavLink to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Our Journey</NavLink>
              <NavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact & FAQs</NavLink>
            </nav>

            <div className="mobile-drawer-footer">
              <button 
                className="btn btn-whatsapp btn-full"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleWhatsAppClick();
                }}
              >
                <MessageCircle size={18} />
                Order / Enquire on WhatsApp
              </button>
              <p className="mobile-location-tag">📍 Nashik, Maharashtra, India</p>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
