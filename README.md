# NexaByte Technologies - Frontend

Modern, responsive website for NexaByte Technologies built with React, Vite, and Tailwind CSS.

## 🚀 Features

- ✅ Fully responsive design (Mobile, Tablet, Desktop)
- ✅ Modern UI with Tailwind CSS
- ✅ React Router for navigation
- ✅ Certificate verification system
- ✅ Contact form with validation
- ✅ SEO optimized
- ✅ Google Maps integration
- ✅ Social media integration
- ✅ 404 error page
- ✅ Mobile hamburger menu
- ✅ Font Awesome icons throughout

## 📦 Tech Stack

- **React 19** - UI Library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Font Awesome** - Icons

## 🛠️ Installation

1. Clone the repository
```bash
git clone <repository-url>
cd nexabyte-frontend
```

2. Install dependencies
```bash
npm install
```

3. Create environment file
```bash
cp .env.example .env
```

4. Update environment variables in `.env` file

5. Start development server
```bash
npm run dev
```

6. Build for production
```bash
npm run build
```

7. Preview production build
```bash
npm run preview
```

## 📁 Project Structure

```
nexabyte-frontend/
├── public/
│   ├── favicon.ico
│   ├── brochure.pdf
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   └── logo.png
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── Loading.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Programs.jsx
│   │   ├── Placement.jsx
│   │   ├── Contact.jsx
│   │   ├── Verify.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env.example
├── package.json
├── tailwind.config.js
└── vite.config.js
```

## 🌐 Pages

- **Home** (`/`) - Landing page with hero section, stats, services preview
- **About** (`/about`) - Company information, mission, vision, team
- **Services** (`/services`) - IT services and solutions
- **Programs** (`/programs`) - Training and internship programs
- **Placement** (`/placement`) - Placement statistics and success stories
- **Contact** (`/contact`) - Contact form and information
- **Verify** (`/verify`) - Certificate verification system
- **404** (`/*`) - Not found page

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and update with your values:

- `VITE_API_URL` - Backend API URL
- `VITE_EMAIL_SERVICE_ID` - Email service ID (EmailJS)
- `VITE_GOOGLE_MAPS_API_KEY` - Google Maps API key
- Social media URLs

### Customization

1. **Logo**: Replace `src/assets/logo.png` with your logo
2. **Favicon**: Replace `public/favicon.ico` with your favicon
3. **Brochure**: Replace `public/brochure.pdf` with your company brochure
4. **Colors**: Update Tailwind config in `tailwind.config.js`
5. **Content**: Update text content in respective page files

## 📱 Responsive Design

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🎨 Color Scheme

- Primary: Blue (#1e3a8a)
- Secondary: Cyan (#06b6d4)
- Dark: Slate (#0f172a)
- Light: Gray (#f9fafb)

## 📞 Support

For support, email info@nexabyte.in or call +91 91353 21898

## 📄 License

© 2024 NexaByte Technologies Pvt. Ltd. All rights reserved.
