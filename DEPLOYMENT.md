# Deployment Guide - NexaByte Frontend

## 🚀 Deployment Options

### 1. Vercel (Recommended)

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Login to Vercel
```bash
vercel login
```

3. Deploy
```bash
vercel --prod
```

### 2. Netlify

1. Install Netlify CLI
```bash
npm i -g netlify-cli
```

2. Login to Netlify
```bash
netlify login
```

3. Deploy
```bash
netlify deploy --prod
```

### 3. GitHub Pages

1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

2. Add to package.json
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Update vite.config.js
```javascript
export default defineConfig({
  base: '/repository-name/',
  // ... rest of config
})
```

4. Deploy
```bash
npm run deploy
```

### 4. Traditional Hosting (cPanel, etc.)

1. Build the project
```bash
npm run build
```

2. Upload `dist` folder contents to your hosting

3. Configure `.htaccess` for React Router
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

## 🔐 Environment Variables

Set these in your hosting platform:

- `VITE_API_URL`
- `VITE_EMAIL_SERVICE_ID`
- `VITE_EMAIL_TEMPLATE_ID`
- `VITE_EMAIL_PUBLIC_KEY`
- `VITE_GOOGLE_MAPS_API_KEY`

## ✅ Pre-Deployment Checklist

- [ ] Update all environment variables
- [ ] Replace placeholder logo with actual logo
- [ ] Replace favicon with actual favicon
- [ ] Add actual company brochure PDF
- [ ] Update social media links
- [ ] Test all forms
- [ ] Test all navigation links
- [ ] Test mobile responsiveness
- [ ] Run production build locally
- [ ] Check console for errors
- [ ] Test on different browsers
- [ ] Verify SEO meta tags
- [ ] Update sitemap.xml with actual domain
- [ ] Update robots.txt with actual domain

## 🔧 Post-Deployment

1. Test all pages
2. Verify forms work
3. Check Google Maps integration
4. Test certificate verification
5. Verify social media links
6. Check mobile menu
7. Test 404 page
8. Submit sitemap to Google Search Console
9. Set up Google Analytics (optional)
10. Set up monitoring (optional)

## 📊 Performance Optimization

1. Enable compression on server
2. Set up CDN (Cloudflare, etc.)
3. Enable caching headers
4. Optimize images
5. Minify assets (done by Vite)

## 🐛 Troubleshooting

### Blank page after deployment
- Check browser console for errors
- Verify base URL in vite.config.js
- Check .htaccess configuration

### 404 on page refresh
- Configure server for SPA routing
- Add .htaccess or equivalent

### Environment variables not working
- Ensure variables start with `VITE_`
- Rebuild after changing variables
- Check hosting platform env var settings

## 📞 Support

For deployment issues, contact: info@nexabyte.in
