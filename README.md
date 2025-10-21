# UpRoof Website - Multilingual Roofing Services

A modern, responsive website for UpRoof roofing services built with Next.js 14, TypeScript, and Tailwind CSS. Features full multilingual support for Latvian, English, and Belgian Dutch.

## 🌟 Features

- ✅ **Multilingual Support**: Latvian (LV), English (EN), Belgian Dutch (NL-BE)
- ✅ **Modern Design**: Clean, professional UI with Tailwind CSS
- ✅ **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ✅ **SEO Optimized**: Proper meta tags and semantic HTML
- ✅ **Performance**: Built with Next.js 14 App Router for optimal speed
- ✅ **Animations**: Smooth transitions with Framer Motion
- ✅ **Contact Form**: Working contact form with validation
- ✅ **Type-Safe**: Full TypeScript support

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm

### Installation

1. **Install dependencies:**

\`\`\`bash
npm install
# or
yarn install
# or
pnpm install
\`\`\`

2. **Run the development server:**

\`\`\`bash
npm run dev
# or
yarn dev
# or
pnpm dev
\`\`\`

3. **Open your browser:**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
UpRoof/
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── layout.tsx     # Root layout with i18n
│   │   └── page.tsx       # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── Solutions.tsx      # Solutions grid
│   ├── ContactSection.tsx # Contact form
│   ├── Footer.tsx         # Footer
│   └── LanguageSwitcher.tsx # Language switcher
├── messages/              # Translation files
│   ├── lv.json           # Latvian translations
│   ├── en.json           # English translations
│   └── nl-BE.json        # Belgian Dutch translations
├── i18n.ts               # i18n configuration
├── middleware.ts         # Next.js middleware for i18n
├── tailwind.config.ts    # Tailwind CSS configuration
├── next.config.mjs       # Next.js configuration
└── package.json          # Dependencies
\`\`\`

## 🌍 Languages

The website supports three languages:

- **🇱🇻 Latvian (lv)** - Default language
- **🇬🇧 English (en)**
- **🇧🇪 Belgian Dutch (nl-BE)**

### Adding/Editing Translations

Edit the JSON files in the `messages/` directory:

- `messages/lv.json` - Latvian
- `messages/en.json` - English
- `messages/nl-BE.json` - Belgian Dutch

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

\`\`\`typescript
colors: {
  primary: { ... },  // Main brand color (blue)
  accent: { ... },   // Accent color (orange)
}
\`\`\`

### Content

Update the translation files in `messages/` to change text content.

### Images

Replace placeholder images in components with your actual roof images.

## 📧 Contact Form

The contact form currently logs submissions to the console. To make it functional:

1. Create an API route at `app/api/contact/route.ts`
2. Implement email sending (using services like SendGrid, Resend, or Nodemailer)
3. Update the form submission in `components/ContactSection.tsx`

Example API route:

\`\`\`typescript
// app/api/contact/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const data = await request.json();
  
  // Send email using your preferred service
  // await sendEmail(data);
  
  return NextResponse.json({ success: true });
}
\`\`\`

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your repository
   - Vercel will auto-detect Next.js and configure settings

3. **Add your domain:**
   - Go to Project Settings > Domains
   - Add `uproof.eu` and `www.uproof.eu`
   - Follow Vercel's instructions to update DNS records

### Deploy to Netlify

\`\`\`bash
npm run build
\`\`\`

Then drag the `.next` folder to Netlify or connect your Git repository.

### Environment Variables

If you add email functionality, create a `.env.local` file:

\`\`\`env
EMAIL_SERVICE_API_KEY=your_api_key
CONTACT_EMAIL=karlis.uproof@gmail.com
\`\`\`

## 🔧 Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📱 Key Improvements Over Squarespace

1. **Full Code Control**: Complete customization freedom
2. **Better Performance**: Faster load times with Next.js optimization
3. **Multilingual**: Native i18n support (Squarespace charges extra)
4. **SEO**: Better search engine optimization
5. **No Monthly Fees**: Host on Vercel/Netlify for free
6. **Modern UX**: Smooth animations and transitions
7. **Easy Updates**: Simple JSON file editing for content

## 📞 Contact Information

**UpRoof - SIA UpLift**
- Email: karlis.uproof@gmail.com
- Phone: +371 25612440

## 📄 License

© 2025 UpRoof - SIA UpLift. All rights reserved.

---

## 🆘 Need Help?

If you need assistance with:
- Customization
- Deployment
- Adding features
- Email integration

Feel free to reach out!
