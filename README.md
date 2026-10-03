# 🕯️ Candles by Aura — Phase 1 E-Commerce Website

**Candles by Aura** is a modern, premium, and fully responsive e-commerce web application built for a handmade candle brand based in **Nashik, Maharashtra, India**.

> *Tagline:* **Handcrafted Candles, Made for Beautiful Moments.**

---

## 💡 Important Ordering System Architecture (WhatsApp Integration)

This website is designed specifically around a **direct WhatsApp ordering model** without online payments or traditional automated checkouts:

1. Customers browse products, photos, prices, descriptions, and categories.
2. Customers select quantities or add multiple candles to their **Cart** (saved via `localStorage`).
3. Clicking **Order on WhatsApp** (for a single product or the entire cart) automatically constructs a formatted, pre-filled WhatsApp message.
4. WhatsApp opens on the customer's phone or computer, allowing them to review, edit, or add custom questions/delivery notes before manually clicking **Send**.
5. The business owner personally confirms availability, delivery address, shipping fees, and final amount on WhatsApp before hand-crafting and delivering the candles!

---

## 🛠️ Tech Stack & Features

- **Frontend**: React 18, Vite, JavaScript, React Router v6
- **Styling**: Modern Modular Vanilla CSS with rich design system tokens (warm neutrals, cream, ivory, soft brown, terracotta, gold accents)
- **Icons**: Lucide React Icons
- **State Management**: React Context API + `localStorage` for Cart
- **Analytics**: Google Analytics 4 (GA4) with custom event tracking for views, cart actions, and WhatsApp clicks
- **Deployment Ready**: Configured for instant single-page app deployment on **Vercel** (`vercel.json`)

---

## 🚀 1. How to Run Locally

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps
1. Open terminal in the project root directory:
   ```bash
   cd e:\candleByAura
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Copy environment variables file:
   ```bash
   cp .env.example .env
   ```
4. Start development server:
   ```bash
   npm run dev
   ```
5. Open your browser at `http://localhost:5173`.

---

## 🏗️ 2. How to Build for Production

To test the production build locally:
```bash
npm run build
npm run preview
```
The optimized production bundle will be generated in the `dist/` directory.

---

## 🌐 3. How to Deploy to Vercel

1. **Push your code to GitHub** (or connect via Vercel CLI).
2. Go to [Vercel Dashboard](https://vercel.com) and click **Add New Project**.
3. Import your GitHub repository.
4. Configure Environment Variables in Vercel settings:
   - `VITE_WHATSAPP_NUMBER` = `919876543210` *(your phone number with country code, no + or spaces)*
   - `VITE_GA_MEASUREMENT_ID` = `G-XXXXXXXXXX` *(your GA4 ID)*
   - `VITE_INSTAGRAM_URL` = `https://www.instagram.com/candles_by_aura_?stkn=MXg5anR3d2Q2b3F4Mw==`
5. Click **Deploy**. Vercel will automatically detect Vite and use `vercel.json` for React Router URL rewrites.

---

## 📦 4. How to Add or Change Products

All products are defined in a clean, central data file: [`src/data/products.js`](file:///e:/candleByAura/src/data/products.js).

To add a new candle:
1. Open `src/data/products.js`.
2. Add a new object to the `PRODUCTS` array:
```javascript
{
  id: 7,
  name: "Rose Petal Pillar Candle",
  slug: "rose-petal-pillar-candle",
  price: 249,
  category: "Floral",
  categorySlug: "floral",
  image: "/images/rose-petal-pillar.jpg",
  weight: "180g",
  burnTime: "20 Hours",
  dimensions: "7cm × 7cm × 10cm",
  fragrance: "English Rose",
  waxType: "100% Eco Soy Wax",
  badge: "New",
  isBestseller: false,
  isDiwaliSpecial: false,
  available: true,
  shortDescription: "Embedded with real dried rose petals and organic essential oils.",
  description: "Full product description here...",
  safetyInfo: "Safety instructions here..."
}
```

---

## 🖼️ 5. How to Add Product Images

1. Place your photo file (e.g. `my-new-candle.jpg`) in the [`public/images/`](file:///e:/candleByAura/public/images/) directory.
2. In `src/data/products.js`, set the `image` field of your product to:
   ```javascript
   image: "/images/my-new-candle.jpg"
   ```

---

## 📱 6. How to Configure your WhatsApp Number

1. Open your `.env` file (or set Environment Variables in Vercel):
   ```env
   VITE_WHATSAPP_NUMBER=919876543210
   ```
2. Enter your phone number with your country code (e.g. `91` for India followed by your 10-digit number without `+`, spaces, or hyphens).
3. All WhatsApp buttons across the app automatically use this central number!

---

## 📊 7. How to Configure Google Analytics (GA4)

1. Get your Measurement ID from Google Analytics 4 (format: `G-XXXXXXXXXX`).
2. Add it to your `.env` file or Vercel Environment Variables:
   ```env
   VITE_GA_MEASUREMENT_ID=G-YOURREALID
   ```
3. The app automatically tracks page views and custom events:
   - `view_item` (when a customer views a product page)
   - `add_to_cart` (when an item is added to cart)
   - `whatsapp_product_click` (single product order click)
   - `whatsapp_cart_click` (cart order click)
   - `whatsapp_question_click` (question click)
   - `corporate_whatsapp_click` (corporate enquiry click)

---

## 🏷️ 8. How to Change Brand Information

General brand details (Name, Tagline, Story, Instagram Handle, Location) are maintained in [`src/data/products.js`](file:///e:/candleByAura/src/data/products.js) inside the `BRAND_INFO` export.

---

## 🎨 Design System & Brand Palette

- **Cream**: `#FAF7F2`
- **Ivory**: `#FFFDF9`
- **Warm Beige**: `#F2EBE1`
- **Soft Brown**: `#5C4A3E`
- **Muted Terracotta**: `#C86D51`
- **Gold Accent**: `#D4AF37`
- **WhatsApp Green**: `#25D366`

---

*Hand-poured with love in Nashik, Maharashtra, India.* 🪔✨
