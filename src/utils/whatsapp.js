// WhatsApp Ordering & Enquiry Utility

export const getWhatsAppNumber = () => {
  let num = import.meta.env.VITE_WHATSAPP_NUMBER || "9145156735";
  // Remove non-digit characters
  let cleaned = num.replace(/\D/g, "");
  // Automatically prepend India country code 91 if a 10-digit mobile number is supplied
  if (cleaned.length === 10) {
    cleaned = "91" + cleaned;
  }
  return cleaned;
};

export const getInstagramUrl = () => {
  return import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/candles_by_aura_?stkn=MXg5anR3d2Q2b3F4Mw==";
};

/**
 * Encodes text and returns a full wa.me link
 */
export const buildWhatsAppUrl = (messageText) => {
  const number = getWhatsAppNumber();
  const encodedMessage = encodeURIComponent(messageText);
  return `https://wa.me/${number}?text=${encodedMessage}`;
};

/**
 * Generates WhatsApp URL for single product order
 */
export const getSingleProductWhatsAppLink = (product, quantity = 1, userNotes = "") => {
  const total = product.price * quantity;
  const itemCode = product.code || `#${product.id}`;
  
  let text = `Hello Candles by Aura 🕯️\n\n`;
  text += `I am interested in ordering:\n\n`;
  text += `Product: ${product.name}\n`;
  text += `Product ID: ${itemCode}\n`;
  text += `Price: ₹${product.price}\n`;
  text += `Quantity: ${quantity}\n`;
  text += `Total: ₹${total}\n\n`;
  text += `I have a few questions / requirements:\n`;
  if (userNotes.trim()) {
    text += `${userNotes.trim()}\n`;
  }
  
  return buildWhatsAppUrl(text);
};

/**
 * Generates WhatsApp URL for entire Cart order
 */
export const getCartWhatsAppLink = (cartItems, total, userNotes = "") => {
  let text = `Hello Candles by Aura 🕯️\n\n`;
  text += `I would like to order:\n\n`;
  
  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    const itemCode = item.code || `#${item.id}`;
    text += `${index + 1}. ${item.name} (${itemCode}) × ${item.quantity} — ₹${itemTotal}\n`;
  });
  
  text += `\nEstimated total: ₹${total}\n\n`;
  text += `I would also like to ask:\n`;
  if (userNotes.trim()) {
    text += `${userNotes.trim()}\n`;
  }
  
  return buildWhatsAppUrl(text);
};

/**
 * Generates WhatsApp URL for product/general question
 */
export const getQuestionWhatsAppLink = (productName = "", productCode = "") => {
  let text = `Hello Candles by Aura 👋\n\n`;
  if (productName) {
    const codeTag = productCode ? ` [${productCode}]` : "";
    text += `I have a question about ${productName}${codeTag}:\n\n`;
  } else {
    text += `I have a question about your candles:\n\n`;
  }
  return buildWhatsAppUrl(text);
};

/**
 * Generates WhatsApp URL for Corporate Gifting enquiry
 */
export const getCorporateWhatsAppLink = (formData = {}) => {
  const {
    company = "",
    quantity = "",
    budget = "",
    location = "",
    requiredDate = "",
    requirements = ""
  } = formData;

  let text = `Hello Candles by Aura,\n\n`;
  text += `I am interested in corporate gifting.\n\n`;
  text += `Company: ${company}\n`;
  text += `Approximate quantity: ${quantity}\n`;
  text += `Budget per gift: ${budget}\n`;
  text += `Delivery location: ${location}\n`;
  text += `Required date: ${requiredDate}\n`;
  text += `Customization requirements: ${requirements}\n`;
  
  return buildWhatsAppUrl(text);
};
