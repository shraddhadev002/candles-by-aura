import React from 'react';
import { useCart } from '../context/CartContext';
import { Sparkles } from 'lucide-react';

export const Toast = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="toast-container">
      <div className="toast">
        <Sparkles size={18} color="#D4AF37" />
        <span>{toastMessage}</span>
      </div>
    </div>
  );
};
