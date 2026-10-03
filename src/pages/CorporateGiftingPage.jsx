import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { getCorporateWhatsAppLink } from '../utils/whatsapp';
import { trackCorporateWhatsAppClick } from '../utils/analytics';
import { 
  Building2, 
  Users, 
  Award, 
  Package, 
  Sparkles, 
  MessageCircle, 
  CheckCircle,
  Briefcase
} from 'lucide-react';
import './CorporateGiftingPage.css';

export const CorporateGiftingPage = () => {
  const [formData, setFormData] = useState({
    company: '',
    quantity: '',
    budget: '',
    location: '',
    requiredDate: '',
    requirements: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEnquire = (e) => {
    e.preventDefault();
    trackCorporateWhatsAppClick(formData.company);
    const link = getCorporateWhatsAppLink(formData);
    window.open(link, '_blank');
  };

  const samplePackages = [
    {
      name: "Aura Essential",
      priceTag: "Starting from ₹299",
      description: "A thoughtful festive tokens set perfect for mass employee appreciation.",
      items: [
        "2 Handcrafted Modak Candles or Diyas",
        "Custom branded sleeve / message card",
        "Sustainably packaged eco box"
      ],
      icon: <Sparkles size={28} color="#D4AF37" />
    },
    {
      name: "Aura Celebration",
      priceTag: "Starting from ₹499",
      popular: true,
      description: "Our signature corporate hamper for valued clients and key team members.",
      items: [
        "1 Scented Jar Candle + 2 Flower Diyas",
        "Custom laser-engraved wooden tag",
        "Artisanal rigid gift box with velvet ribbon"
      ],
      icon: <Package size={28} color="#C86D51" />
    },
    {
      name: "Aura Premium",
      priceTag: "Starting from ₹799",
      description: "Luxury VIP gift hampers tailored for high-value clients and executive leadership.",
      items: [
        "2 Luxury Soy Jars + Brass Snuffer set",
        "Premium custom logo embossing",
        "Personalized handwritten greeting note"
      ],
      icon: <Award size={28} color="#D4AF37" />
    }
  ];

  return (
    <>
      <SEO 
        title="Corporate & Bulk Gifting" 
        description="Thoughtful Diwali & corporate candle gifts for employees, clients, and dealers. Handcrafted in Nashik with custom branding and hampers."
        path="/corporate-gifting"
      />

      <div className="corporate-page section-padding">
        <div className="container">
          {/* Corporate Hero */}
          <div className="corporate-hero">
            <div className="corporate-hero-content">
              <span className="corporate-badge">
                <Building2 size={16} /> B2B & Bulk Gifting Solutions
              </span>
              
              <h1 className="corporate-title">
                Thoughtful Diwali Gifts. Beautifully Made.
              </h1>

              <p className="corporate-desc">
                Elevate your corporate relationships with handcrafted, aromatic soy candle hampers. Custom branded for employees, clients, and dealer networks.
              </p>

              <div className="corporate-trust-row">
                <span>✓ Custom Branding Available</span>
                <span>✓ Pan-India Delivery</span>
                <span>✓ Small to Large Bulk Orders</span>
              </div>
            </div>
          </div>

          {/* Offerings Overview */}
          <div className="offerings-grid">
            <div className="offering-card">
              <Users size={32} className="offering-icon" />
              <h3>Employee Gifting</h3>
              <p>Recognize and inspire your team with warm festive candle gift sets.</p>
            </div>
            <div className="offering-card">
              <Briefcase size={32} className="offering-icon" />
              <h3>Client & VIP Gifting</h3>
              <p>Make a memorable impression with luxury scented jars and brass accessories.</p>
            </div>
            <div className="offering-card">
              <Building2 size={32} className="offering-icon" />
              <h3>Dealer & Partner Rewards</h3>
              <p>Strengthen business partnerships with artisanal gift hampers.</p>
            </div>
            <div className="offering-card">
              <Package size={32} className="offering-icon" />
              <h3>Custom Packaging</h3>
              <p>Add your company logo, custom brand sleeves, and personalized message cards.</p>
            </div>
          </div>

          {/* Sample Packages */}
          <div className="section-header">
            <span className="section-subtitle">Curated Bundles</span>
            <h2 className="section-title">Sample Corporate Packages</h2>
            <p className="section-description">
              Choose from our popular hamper configurations or let us design a bespoke box for your budget.
            </p>
          </div>

          <div className="packages-grid">
            {samplePackages.map((pkg, idx) => (
              <div key={idx} className={`package-card ${pkg.popular ? 'popular' : ''}`}>
                {pkg.popular && <span className="popular-badge">Most Popular</span>}
                <div className="package-icon-box">{pkg.icon}</div>
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">{pkg.priceTag}</div>
                <p className="package-desc">{pkg.description}</p>
                <ul className="package-items">
                  {pkg.items.map((item, i) => (
                    <li key={i}><CheckCircle size={14} color="#278A4B" inline /> {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="disclaimer-text text-center">
            * Prices are indicative and may vary based on quantity and customization.
          </p>

          {/* Interactive WhatsApp Enquiry Form */}
          <div className="corporate-form-container">
            <div className="form-header">
              <MessageCircle size={32} color="#25D366" />
              <div>
                <h2>Corporate WhatsApp Enquiry</h2>
                <p>Fill in your requirements below and click to send an instant pre-filled WhatsApp message to us!</p>
              </div>
            </div>

            <form onSubmit={handleEnquire} className="corporate-form">
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="company">Company Name:</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="e.g. Acme Corp India"
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="quantity">Approximate Quantity:</label>
                  <input
                    type="text"
                    id="quantity"
                    name="quantity"
                    placeholder="e.g. 50 units, 200 units"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Budget Per Gift:</label>
                  <input
                    type="text"
                    id="budget"
                    name="budget"
                    placeholder="e.g. ₹300, ₹500, ₹1000"
                    value={formData.budget}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="location">Delivery Location:</label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    placeholder="e.g. Nashik, Mumbai, Pan-India"
                    value={formData.location}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="requiredDate">Required Date:</label>
                  <input
                    type="text"
                    id="requiredDate"
                    name="requiredDate"
                    placeholder="e.g. 15th October 2026"
                    value={formData.requiredDate}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group form-full">
                  <label htmlFor="requirements">Customization Requirements / Notes:</label>
                  <textarea
                    id="requirements"
                    name="requirements"
                    rows="3"
                    placeholder="e.g. Need logo printed on box, specific fragrance preferences..."
                    value={formData.requirements}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="btn btn-whatsapp btn-lg btn-full mt-3">
                <MessageCircle size={22} />
                <span>Enquire on WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
