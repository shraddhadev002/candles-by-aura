// Google Analytics 4 (GA4) Tracking Utility

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID;

/**
 * Initializes GA4 script dynamically if valid ID is present
 */
export const initGA = () => {
  if (!GA_MEASUREMENT_ID || GA_MEASUREMENT_ID === 'G-XXXXXXXXXX') {
    console.log('[Analytics] GA4 measurement ID not configured or using default placeholder.');
    return;
  }

  // Prevent duplicate insertion
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, {
    send_page_view: false // We trigger page views manually on route changes
  });

  console.log(`[Analytics] Google Analytics initialized with ID: ${GA_MEASUREMENT_ID}`);
};

/**
 * Generic event tracker wrapper
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag && GA_MEASUREMENT_ID && GA_MEASUREMENT_ID !== 'G-XXXXXXXXXX') {
    window.gtag('event', eventName, eventParams);
  }
  // Console logging in dev mode for verification
  console.log(`[Event Tracked] ${eventName}:`, eventParams);
};

// Custom Helper Trackers according to specification:
export const trackPageView = (pageTitle, pagePath) => {
  trackEvent('page_view', {
    page_title: pageTitle,
    page_location: window.location.href,
    page_path: pagePath
  });
};

export const trackViewItem = (product) => {
  trackEvent('view_item', {
    currency: 'INR',
    value: product.price,
    items: [{
      item_id: product.id,
      item_name: product.name,
      category: product.category,
      price: product.price
    }]
  });
};

export const trackAddToCart = (product, quantity = 1) => {
  trackEvent('add_to_cart', {
    currency: 'INR',
    value: product.price * quantity,
    items: [{
      item_id: product.id,
      item_name: product.name,
      price: product.price,
      quantity: quantity
    }]
  });
};

export const trackWhatsAppProductClick = (product, quantity = 1) => {
  trackEvent('whatsapp_product_click', {
    item_id: product.id,
    item_name: product.name,
    quantity: quantity,
    value: product.price * quantity
  });
};

export const trackWhatsAppCartClick = (cartItems, total) => {
  trackEvent('whatsapp_cart_click', {
    item_count: cartItems.length,
    value: total
  });
};

export const trackWhatsAppQuestionClick = (productName = 'General') => {
  trackEvent('whatsapp_question_click', {
    topic: productName
  });
};

export const trackCorporateWhatsAppClick = (companyName) => {
  trackEvent('corporate_whatsapp_click', {
    company: companyName || 'Unspecified'
  });
};
