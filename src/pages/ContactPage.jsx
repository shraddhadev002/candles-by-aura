import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { FAQ_ITEMS, BRAND_INFO } from '../data/products';
import { getQuestionWhatsAppLink } from '../utils/whatsapp';
import { trackWhatsAppQuestionClick } from '../utils/analytics';
import { 
  MessageCircle, 
  MapPin, 
  Mail, 
  ChevronDown, 
  ChevronUp, 
  HelpCircle, 
  Sparkles, 
  PhoneCall 
} from 'lucide-react';
import { InstagramIcon as Instagram } from '../components/Icons';
import './ContactPage.css';

export const ContactPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const handleWhatsAppChat = () => {
    trackWhatsAppQuestionClick('Contact Page');
    window.open(getQuestionWhatsAppLink(), '_blank');
  };

  return (
    <>
      <SEO 
        title="Contact & FAQs" 
        description="Get in touch with Candles by Aura in Nashik, Maharashtra. Chat on WhatsApp for custom candle orders, corporate enquiries and delivery status."
        path="/contact"
      />

      <div className="contact-page section-padding">
        <div className="container">
          {/* Header */}
          <div className="section-header">
            <span className="section-subtitle">We'd Love To Hear From You</span>
            <h1 className="section-title">Contact & Frequently Asked Questions</h1>
            <p className="section-description">
              Have a question about sizes, fragrances, bulk orders, or delivery? Reach out to us directly on WhatsApp.
            </p>
          </div>

          {/* Contact Info Cards Grid */}
          <div className="contact-cards-grid">
            {/* Primary WhatsApp Card */}
            <div className="contact-card primary-contact">
              <div className="contact-card-icon wa-icon">
                <MessageCircle size={32} />
              </div>
              <h3>WhatsApp Direct</h3>
              <p>Chat personally with our founder for instant order confirmation and custom requests.</p>
              <button onClick={handleWhatsAppChat} className="btn btn-whatsapp btn-full mt-auto">
                <MessageCircle size={18} />
                <span>Chat With Us on WhatsApp</span>
              </button>
            </div>

            {/* Location Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <MapPin size={30} />
              </div>
              <h3>Workshop & Location</h3>
              <p>Handcrafted and dispatched with love from Nashik, Maharashtra, India.</p>
              <span className="location-tag">📍 Nashik, Maharashtra</span>
            </div>

            {/* Instagram Card */}
            <div className="contact-card">
              <div className="contact-card-icon insta-icon">
                <Instagram size={30} />
              </div>
              <h3>Instagram Journey</h3>
              <p>Follow our daily candle poured stories and styling tips on Instagram.</p>
              <a 
                href={BRAND_INFO.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline btn-full btn-sm mt-auto"
              >
                Follow {BRAND_INFO.instagramHandle}
              </a>
            </div>

            {/* Email Card */}
            <div className="contact-card">
              <div className="contact-card-icon">
                <Mail size={30} />
              </div>
              <h3>Email Enquiries</h3>
              <p>For formal business proposals or bulk corporate gifting queries.</p>
              <a href={`mailto:${BRAND_INFO.email}`} className="email-link">
                {BRAND_INFO.email}
              </a>
            </div>
          </div>

          {/* FAQ Accordion Section */}
          <div className="faq-container">
            <div className="section-header">
              <span className="section-subtitle"><HelpCircle size={16} inline /> Got Questions?</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
            </div>

            <div className="faq-accordion-list">
              {FAQ_ITEMS.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
                    <div 
                      className="faq-question" 
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>

                    {isOpen && (
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
