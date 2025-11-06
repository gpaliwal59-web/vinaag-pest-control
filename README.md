# Vinaag Pest Control Website

A professional, modern website for Vinaag Pest Control built with Next.js, React, TypeScript, and TailwindCSS.

## Features

- ✅ **Modern Design**: Clean, professional UI with responsive design
- ✅ **Complete Pages**: Home, Services, About, Contact, and Booking pages
- ✅ **Online Booking System**: Fully functional booking form with validation
- ✅ **WhatsApp Integration**: Floating WhatsApp button for instant communication
- ✅ **Mobile Responsive**: Works perfectly on all devices
- ✅ **SEO Optimized**: Proper meta tags and structure
- ✅ **Fast Performance**: Built with Next.js for optimal speed

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Forms**: React Hook Form

## Setup Instructions (Step by Step)

### Prerequisites

Make sure you have Node.js installed on your computer. You can download it from [nodejs.org](https://nodejs.org/)

### Step 1: Install Dependencies

Open your terminal/command prompt, navigate to the project folder, and run:

```bash
cd c:/Users/Ghanshyam/Desktop/vinaag
npm install
```

This will install all required packages (Next.js, React, TailwindCSS, etc.)

### Step 2: Run Development Server

After installation is complete, start the development server:

```bash
npm run dev
```

The website will be available at: **http://localhost:3000**

### Step 3: View Your Website

Open your web browser and go to:
- **http://localhost:3000** - Home page
- **http://localhost:3000/services** - Services page
- **http://localhost:3000/about** - About page
- **http://localhost:3000/contact** - Contact page
- **http://localhost:3000/booking** - Booking page

### Step 4: Build for Production

When you're ready to deploy, build the production version:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Contact Information

The website includes the following contact details:
- **Phone**: 7498571873
- **Email**: support@vinaag.com
- **WhatsApp**: Integrated floating button

## Pages Overview

### 1. Home Page (/)
- Hero section with call-to-action buttons
- Why Choose Us section with key features
- Services overview
- Trust indicators and statistics
- Eco-friendly messaging

### 2. Services Page (/services)
- Detailed service descriptions
- 6 main services:
  - Termite Control
  - Rodent Control
  - Cockroach Control
  - Bed Bug Control
  - Mosquito Control
  - Commercial Pest Control
- Service guarantees
- Call-to-action sections

### 3. About Page (/about)
- Company information
- Mission statement
- Core values
- Team information
- Achievements

### 4. Contact Page (/contact)
- Contact information
- Contact form
- FAQ section
- Business hours

### 5. Booking Page (/booking)
- Online booking form
- Service selection
- Date and time picker
- Property type selection
- Confirmation message

## Customization

### Update Contact Information

To update contact details, edit the following files:
- `components/Header.tsx` - Top bar contact info
- `components/Footer.tsx` - Footer contact details
- `components/WhatsAppButton.tsx` - WhatsApp number
- `app/contact/page.tsx` - Contact page details
- `app/booking/page.tsx` - Booking page contact info

### Update Colors

The primary color scheme uses green. To change colors, edit:
- `tailwind.config.js` - Update the primary color values

### Add/Remove Services

To modify services, edit:
- `app/page.tsx` - Home page services
- `app/services/page.tsx` - Services page

## Deployment Options

### Option 1: Vercel (Recommended - Free)

1. Create account at [vercel.com](https://vercel.com)
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy:
   ```bash
   vercel
   ```
4. Follow the prompts

### Option 2: Netlify

1. Create account at [netlify.com](https://netlify.com)
2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```
3. Build and deploy:
   ```bash
   npm run build
   netlify deploy --prod
   ```

### Option 3: Traditional Hosting

1. Build the project:
   ```bash
   npm run build
   ```
2. Upload the `.next` folder and other files to your hosting
3. Set up Node.js environment on your server
4. Run `npm start` on the server

## Troubleshooting

### Issue: npm install fails
**Solution**: Make sure you have Node.js version 18 or higher installed

### Issue: Port 3000 already in use
**Solution**: Use a different port:
```bash
npm run dev -- -p 3001
```

### Issue: TypeScript errors
**Solution**: These are normal during development. Run `npm run build` to check for actual errors

## Support

For any questions or issues:
- Email: support@vinaag.com
- Phone: 7498571873

## License

© 2024 Vinaag Pest Control. All rights reserved.
