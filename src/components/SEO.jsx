import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

export const SEO = ({ title, description, path = '/' }) => {
  useEffect(() => {
    const defaultTitle = "Candles by Aura | Handcrafted Candles & Gifts";
    document.title = title ? `${title} | Candles by Aura` : defaultTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description || "Discover handcrafted candles by Candles by Aura — beautiful candles for Diwali, gifting, celebrations and everyday moments. Hand-poured in Nashik, Maharashtra."
      );
    }

    trackPageView(title || 'Home', path);
  }, [title, description, path]);

  return null;
};
