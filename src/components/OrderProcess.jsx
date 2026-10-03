import React from 'react';
import { ShoppingBag, MessageCircle, CheckCircle, PackageCheck } from 'lucide-react';
import './OrderProcess.css';

export const OrderProcess = () => {
  const steps = [
    {
      number: "01",
      icon: <ShoppingBag size={28} className="step-icon" />,
      title: "1. Choose your candle",
      description: "Browse our handcrafted collection and select your favourite candles or gift hampers."
    },
    {
      number: "02",
      icon: <MessageCircle size={28} className="step-icon" />,
      title: "2. Message us on WhatsApp",
      description: "Click 'Order on WhatsApp' to open a pre-filled message with your selected items and notes."
    },
    {
      number: "03",
      icon: <CheckCircle size={28} className="step-icon" />,
      title: "3. We confirm your details",
      description: "We'll personally confirm availability, address, delivery charges, and final amount with you."
    },
    {
      number: "04",
      icon: <PackageCheck size={28} className="step-icon" />,
      title: "4. Your candles are delivered",
      description: "We carefully hand-pack your aromatic candles in Nashik and deliver them to your doorstep."
    }
  ];

  return (
    <section className="order-process-section section-padding">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Simple & Personal</span>
          <h2 className="section-title">How WhatsApp Ordering Works</h2>
          <p className="section-description">
            No complicated online payments or registration forms. Browse online and complete your order directly with us on WhatsApp.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, idx) => (
            <div className="process-card" key={idx}>
              <div className="card-top-row">
                <span className="step-number">{step.number}</span>
                <div className="icon-wrapper">{step.icon}</div>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
