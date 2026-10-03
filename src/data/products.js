// Product & Brand Data for Candles by Aura

export const BRAND_INFO = {
  name: "Candles by Aura",
  tagline: "Handcrafted Candles, Made for Beautiful Moments.",
  location: "Nashik, Maharashtra, India",
  email: "shraddhaj0033@gmail.com",
  instagramHandle: "@candles_by_aura_",
  instagramUrl: import.meta.env.VITE_INSTAGRAM_URL || "https://www.instagram.com/candles_by_aura_?stkn=MXg5anR3d2Q2b3F4Mw==",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "9145156735",
  storyHeading: "From a Ganpati Candle to Candles by Aura",
  storyText: "Our journey began during the Ganpati festival in Nashik with a humble creation—a handcrafted Modak candle. The love and warmth from our first customers encouraged us to build 'Candles by Aura'. Today, every candle is hand-poured with 100% eco-friendly soy wax, non-toxic aromatic oils, and Indian artisanal soul."
};

export const CATEGORIES = [
  { id: "all", name: "All Candles", icon: "✨" },
  { id: "festive", name: "Diwali Collection", slug: "diwali-collection", icon: "🪔", description: "Festive diyas, modaks, and celebratory aromas" },
  { id: "decorative", name: "Decorative Candles", slug: "decorative", icon: "🕯️", description: "Artistic shapes & sculpted home accents" },
  { id: "floral", name: "Floral Candles", slug: "floral", icon: "🌸", description: "Infused with botanical rose, lotus & jasmine notes" },
  { id: "gift-boxes", name: "Gift Boxes", slug: "gift-boxes", icon: "🎁", description: "Handcrafted festive hampers & gift sets" },
  { id: "corporate", name: "Corporate Gifting", slug: "corporate", icon: "🏢", description: "Custom bulk hampers for clients & employees" }
];

export const PRODUCTS = [
  {
    id: 1,
    code: "CBA-MODAK-01",
    name: "Modak Candle",
    slug: "modak-candle",
    price: 99,
    category: "Festive",
    categorySlug: "festive",
    image: "/images/modak-candle.jpg",
    weight: "15g",
    burnTime: "45 Minutes",
    dimensions: "4.5cm × 4.5cm × 5cm",
    fragrance: "Lavender",
    waxType: "100% Eco-Friendly Soy Wax",
    badge: "Bestseller",
    isBestseller: true,
    isDiwaliSpecial: true,
    available: true,
    shortDescription: "Handmade Modak-shaped candle crafted for festive blessings and serene everyday moments.",
    description: "Our signature Modak Candle is where the Candles by Aura journey began! Handcrafted with intricate ridges and elegant gold trims, this modest yet serene candle radiates a calming lavender aroma. Perfect for Ganpati pujas, Diwali thalis, festive gifts, and home mandir decor.",
    safetyInfo: "Place on a heat-resistant surface. Keep away from flammable objects and out of reach of children and pets."
  },
  {
    id: 2,
    code: "CBA-FLOWER-02",
    name: "Flower Candle Box",
    slug: "flower-candle-box",
    price: 299,
    category: "Gift Boxes",
    categorySlug: "gift-boxes",
    image: "/images/flower-candle-box.jpg",
    weight: "120g (Set of 6)",
    burnTime: "15 Hours total",
    dimensions: "14cm × 14cm × 5cm",
    fragrance: "Rose & Jasmine Bloom",
    waxType: "100% Pure Soy Wax with Botanical Infusions",
    badge: "Diwali Special",
    isBestseller: true,
    isDiwaliSpecial: true,
    available: true,
    shortDescription: "Set of 6 handcrafted lotus and marigold flower-shaped candles with subtle gold leaf highlights.",
    description: "Bring the radiance of Indian blossoms to your festive decor. Each flower candle in this set is individually hand-cast in vibrant shades of marigold orange and subtle pinks, accented with delicate gold leafing.",
    safetyInfo: "Burn in shallow brass urlis or heat-resistant candle dishes."
  },
  {
    id: 3,
    code: "CBA-DIYA-03",
    name: "Diya Candle",
    slug: "diya-candle",
    price: 149,
    category: "Festive",
    categorySlug: "festive",
    image: "/images/diya-candle.jpg",
    weight: "60g",
    burnTime: "6 Hours",
    dimensions: "8cm × 8cm × 3.5cm",
    fragrance: "Sandalwood & Mogra",
    waxType: "Soy Wax with Golden Shimmer",
    badge: "Diwali Special",
    isBestseller: false,
    isDiwaliSpecial: true,
    available: true,
    shortDescription: "Traditional clay-style handcrafted diya candle enriched with royal Sandalwood scent.",
    description: "Reinvent tradition with our long-burning Diya Candle. Crafted in a traditional earthenware shape adorned with hand-painted gold geometric swirls, it fills your home with nostalgic Chandan and fresh Mogra notes.",
    safetyInfo: "Never leave burning candle unattended. Trim wick to 1/4 inch before each lighting."
  },
  {
    id: 4,
    code: "CBA-GIFTBOX-04",
    name: "Diwali Gift Box",
    slug: "diwali-gift-box",
    price: 399,
    category: "Gift Boxes",
    categorySlug: "gift-boxes",
    image: "/images/diwali-gift-box.jpg",
    weight: "250g",
    burnTime: "25 Hours total",
    dimensions: "18cm × 14cm × 8cm",
    fragrance: "Festive Spices & Royal Vanilla",
    waxType: "Hand-poured Soy & Beeswax Blend",
    badge: "Bestseller",
    isBestseller: true,
    isDiwaliSpecial: true,
    available: true,
    shortDescription: "Curated gift box containing 2 Modak Candles, 2 Flower Diyas, and a jar of scented wax melts.",
    description: "Our signature Festive Box brings together all of Aura's most beloved handmade creations. Presented in an elegant cream silk-finish rigid box tied with velvet ribbon.",
    safetyInfo: "Keep box away from direct flame. Burn individual candles on safe surfaces."
  },
  {
    id: 5,
    code: "CBA-LOTUS-05",
    name: "Lotus Candle",
    slug: "lotus-candle",
    price: 199,
    category: "Decorative",
    categorySlug: "decorative",
    image: "/images/flower-candle-box.jpg",
    weight: "85g",
    burnTime: "10 Hours",
    dimensions: "9cm × 9cm × 6cm",
    fragrance: "Lotus Bloom & Wild Honey",
    waxType: "100% Eco Soy Wax",
    badge: "Popular",
    isBestseller: false,
    isDiwaliSpecial: true,
    available: true,
    shortDescription: "Hand-carved blooming lotus flower candle designed for thali decorations and rangolis.",
    description: "Symbolising purity and spiritual radiance, our Lotus Candle features layered petals hand-finished with subtle metallic gold touches.",
    safetyInfo: "Trim wick to 5mm. Place on a ceramic or metal thali before lighting."
  },
  {
    id: 6,
    code: "CBA-HAMPER-06",
    name: "Premium Diwali Hamper",
    slug: "premium-diwali-hamper",
    price: 799,
    category: "Gift Boxes",
    categorySlug: "gift-boxes",
    image: "/images/diwali-gift-box.jpg",
    weight: "500g",
    burnTime: "45 Hours total",
    dimensions: "22cm × 22cm × 10cm",
    fragrance: "Royal Oudh & Warm Saffron",
    waxType: "Luxury Hand-poured Soy Wax",
    badge: "Limited",
    isBestseller: true,
    isDiwaliSpecial: true,
    available: true,
    shortDescription: "Luxury hamper featuring 2 frosted glass jar candles, brass snuffer, and taper candles.",
    description: "The ultimate expression of festive luxury. Comes in an artisanal handcrafted box complete with custom greeting card for your loved ones or corporate clients.",
    safetyInfo: "Do not move hot candle jar while wax is liquid."
  }
];

export const FAQ_ITEMS = [
  {
    question: "Are your candles handmade?",
    answer: "Yes, 100%! Every single candle by Candles by Aura is hand-poured with love in Nashik, Maharashtra, using eco-friendly soy wax and premium fragrance oils."
  },
  {
    question: "What wax do you use?",
    answer: "We use 100% natural, biodegradable soy wax derived from soybean oil. It burns clean, non-toxic, produces minimal soot, and lasts longer than traditional paraffin wax."
  },
  {
    question: "What is the burn time for Modak Candles?",
    answer: "Our 15g Modak Candle offers approximately 45 minutes of serene burn time. Larger jar candles and hampers burn up to 45 hours."
  },
  {
    question: "Do you offer corporate gifting and bulk orders?",
    answer: "Yes! We specialize in customized corporate gifts for employees, clients, dealers, and festive events with custom packaging and branding options."
  },
  {
    question: "Can I customize my order?",
    answer: "Absolutely! Since everything is made by hand in Nashik, you can customize fragrances, colors, hampers, and personalized message cards by messaging us directly on WhatsApp."
  },
  {
    question: "How do I place an order?",
    answer: "Simply browse our website, select your candles or add them to your cart, and click 'Order on WhatsApp'. A pre-filled WhatsApp message will open where you can review, edit, or ask any questions before sending!"
  },
  {
    question: "How does delivery work?",
    answer: "Once you send us your order message on WhatsApp, we personally confirm product availability, delivery location, shipping fees, and expected delivery date with you."
  },
  {
    question: "Can I ask questions before ordering?",
    answer: "Yes! On every product page and in our header, you'll find an 'Ask on WhatsApp' button. We're happy to discuss sizes, custom aromas, or gifting recommendations."
  },
  {
    question: "How should I use candle safely?",
    answer: "Always trim the wick to 1/4 inch before lighting. Place candles on heat-resistant trays, away from curtains and drafts, and never leave a burning candle unattended."
  }
];
