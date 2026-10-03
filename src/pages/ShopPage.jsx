import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SEO } from '../components/SEO';
import { Search, Filter, ArrowUpDown, X, Sparkles } from 'lucide-react';
import './ShopPage.css';

export const ShopPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const categoryParam = searchParams.get('category') || 'all';
  const searchParam = searchParams.get('search') || '';

  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [searchQuery, setSearchQuery] = useState(searchParam);
  const [sortBy, setSortBy] = useState('featured');

  useEffect(() => {
    setActiveCategory(categoryParam);
    setSearchQuery(searchParam);
  }, [categoryParam, searchParam]);

  // Filter & Sort logic
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      let matchCat = true;
      if (activeCategory !== 'all') {
        const cat = CATEGORIES.find(c => c.id === activeCategory);
        if (cat) {
          matchCat = product.categorySlug === activeCategory || 
                     product.category.toLowerCase() === cat.name.toLowerCase() ||
                     product.category.toLowerCase().includes(activeCategory);
        }
      }

      // Search match
      let matchSearch = true;
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        matchSearch = product.name.toLowerCase().includes(q) ||
                      product.description.toLowerCase().includes(q) ||
                      product.fragrance.toLowerCase().includes(q) ||
                      product.category.toLowerCase().includes(q);
      }

      return matchCat && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return a.id - b.id; // default featured
    });
  }, [activeCategory, searchQuery, sortBy]);

  const handleCategorySelect = (catId) => {
    setActiveCategory(catId);
    const newParams = new URLSearchParams(searchParams);
    if (catId === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', catId);
    }
    setSearchParams(newParams);
  };

  const handleClearFilters = () => {
    setActiveCategory('all');
    setSearchQuery('');
    setSortBy('featured');
    setSearchParams({});
  };

  return (
    <>
      <SEO 
        title="Shop Handcrafted Candles & Gift Sets" 
        description="Browse our complete collection of handmade Modak candles, lotus diyas, festive gift boxes and scented jar candles."
        path="/shop"
      />

      <div className="shop-page section-padding">
        <div className="container">
          {/* Shop Page Banner Header */}
          <div className="shop-header">
            <span className="section-subtitle"><Sparkles size={14} inline /> Hand-poured Collection</span>
            <h1 className="shop-title">Handcrafted Candles</h1>
            <p className="shop-description">
              Browse our full range of soy candles, Diwali diyas, flower candle boxes and custom hampers. All orders are confirmed personally via WhatsApp.
            </p>
          </div>

          {/* Filters & Search Toolbar */}
          <div className="shop-toolbar">
            {/* Search Input */}
            <div className="shop-search-box">
              <Search size={18} className="toolbar-search-icon" />
              <input
                type="text"
                placeholder="Search by candle name, aroma, or occasion..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  const newParams = new URLSearchParams(searchParams);
                  if (e.target.value.trim()) {
                    newParams.set('search', e.target.value.trim());
                  } else {
                    newParams.delete('search');
                  }
                  setSearchParams(newParams);
                }}
              />
              {searchQuery && (
                <button 
                  className="clear-search-btn"
                  onClick={() => {
                    setSearchQuery('');
                    const newParams = new URLSearchParams(searchParams);
                    newParams.delete('search');
                    setSearchParams(newParams);
                  }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sort Select */}
            <div className="shop-sort-box">
              <ArrowUpDown size={16} className="sort-icon" />
              <label htmlFor="sort-select">Sort By:</label>
              <select 
                id="sort-select"
                value={sortBy} 
                onChange={(e) => setSortBy(e.target.value)}
              >
                <option value="featured">Featured / Bestsellers</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="name">Name (A - Z)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="category-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                className={`category-pill ${activeCategory === cat.id ? 'active' : ''}`}
                onClick={() => handleCategorySelect(cat.id)}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Active Filter Tags */}
          {(activeCategory !== 'all' || searchQuery) && (
            <div className="active-filter-bar">
              <span>Showing results for:</span>
              {activeCategory !== 'all' && (
                <span className="filter-tag">
                  Category: {CATEGORIES.find(c => c.id === activeCategory)?.name}
                  <X size={14} onClick={() => handleCategorySelect('all')} />
                </span>
              )}
              {searchQuery && (
                <span className="filter-tag">
                  Search: "{searchQuery}"
                  <X size={14} onClick={() => setSearchQuery('')} />
                </span>
              )}
              <button className="reset-all-btn" onClick={handleClearFilters}>
                Reset All Filters
              </button>
            </div>
          )}

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-products-view">
              <div className="no-products-icon">🕯️</div>
              <h3>No candles found matching your search</h3>
              <p>Try searching for another term like "Modak", "Flower", "Diwali", or reset filters.</p>
              <button className="btn btn-primary" onClick={handleClearFilters}>
                View All Candles
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
