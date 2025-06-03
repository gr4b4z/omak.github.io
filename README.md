# OMAK Website

A modern, responsive website for OMAK (Orchestrate Multi-Cloud AKS) - Advanced Kubernetes management tool for multi-cloud environments.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
- **Responsive Layout**: Fully responsive design that works on desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, smooth scrolling, and animated dashboard preview
- **Download Modal**: Interactive download experience with platform-specific instructions
- **Performance Optimized**: Lightweight CSS and JavaScript with minimal dependencies
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 📁 File Structure

```
/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and animations
├── script.js           # JavaScript functionality
└── README.md          # This file
```

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue gradient (#667eea to #764ba2)
- **Secondary**: Green (#10b981)
- **Accent**: Amber (#f59e0b)
- **Text**: Gray scale for optimal readability

### Sections
1. **Hero Section**: Eye-catching introduction with animated dashboard preview
2. **Features**: Six key features with icons and descriptions
3. **Comparison**: Feature comparison table with competitors
4. **Download**: Platform-specific download options (Windows, macOS, Linux)
5. **Community**: Links to GitHub, Discord, Documentation, and Twitter
6. **Footer**: Additional links and social media

### Interactive Elements
- Smooth scrolling navigation
- Animated dashboard preview with floating effect
- Hover effects on cards and buttons
- Download modal with installation instructions
- Mobile-responsive hamburger menu

## 🛠️ Customization

### Updating Content

#### Hero Section
Edit the hero title and subtitle in `index.html`:
```html
<h1 class="hero-title">
    Orchestrate Multi-Cloud AKS
    <span class="gradient-text">Like Never Before</span>
</h1>
<p class="hero-subtitle">
    Your custom description here...
</p>
```

#### Features
Update the features in the `.features-grid` section:
```html
<div class="feature-card">
    <div class="feature-icon">
        <i class="fas fa-your-icon"></i>
    </div>
    <h3>Your Feature Title</h3>
    <p>Your feature description...</p>
</div>
```

#### Download Links
Update the download URLs in the download section:
```html
<a href="your-download-url" class="btn btn-download">
    <i class="fas fa-download"></i>
    Download .exe
</a>
```

### Styling Customization

#### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
    --accent-color: #your-color;
    /* ... other colors */
}
```

#### Fonts
Change the font family in the body selector:
```css
body {
    font-family: 'Your-Font', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
```

### Adding Analytics

Replace the placeholder analytics in `script.js`:
```javascript
// Analytics tracking (replace with your analytics service)
console.log(`Download clicked: ${platform} - ${downloadType}`);

// Example with Google Analytics
gtag('event', 'download', {
    'event_category': 'engagement',
    'event_label': `${platform}-${downloadType}`
});
```

## 🌐 Deployment

### Static Hosting
This website can be deployed to any static hosting service:

- **Netlify**: Drag and drop the files or connect to Git
- **Vercel**: Import from GitHub repository
- **GitHub Pages**: Push to a GitHub repository and enable Pages
- **AWS S3**: Upload files to an S3 bucket with static hosting enabled

### Custom Domain
1. Purchase a domain from your preferred registrar
2. Configure DNS settings to point to your hosting provider
3. Set up SSL certificate (most hosting providers offer free SSL)

## 📱 Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 🔧 Development

### Local Development
1. Clone or download the files
2. Open `index.html` in a web browser
3. For live reloading, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Making Changes
1. Edit HTML content in `index.html`
2. Modify styles in `styles.css`
3. Add functionality in `script.js`
4. Test across different devices and browsers

## 📊 Performance Tips

1. **Optimize Images**: Use WebP format for better compression
2. **Minify Files**: Minify CSS and JavaScript for production
3. **CDN**: Use a CDN for Font Awesome and Google Fonts
4. **Caching**: Set up proper cache headers on your server

## 🤝 Contributing

To improve the website:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This website template is free to use and modify for your OMAK project.

## 🆘 Support

For questions about customizing this website:
1. Check the code comments for guidance
2. Refer to the CSS and JavaScript documentation
3. Test changes in a development environment first

---

**Note**: Remember to replace placeholder links with actual download URLs and update social media links with your real accounts before going live. 