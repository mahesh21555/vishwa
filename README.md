# VISHWA - Cinematic Director & Editor Portfolio

A premium, cinematic one-page portfolio website for filmmaker Vishwa. Built with HTML5, CSS3, and Vanilla JavaScript with GSAP animations and smooth scrolling.

## Features

✨ **Cinematic Design**
- Black & white premium aesthetic
- Smooth scroll experience with Lenis
- GSAP-powered animations and transitions
- Custom interactive cursor
- Film grain overlay

🎬 **Interactive Sections**
- Loading/intro animation
- Hero section with parallax
- About Me with image parallax
- Skills grid with hover effects
- Horizontal scrolling film gallery
- Asymmetric college works grid
- YouTube & graphic design showcase
- Contact section with social links
- Project modal with full details

📱 **Responsive & Accessible**
- Mobile-first design
- Touch device optimization
- Keyboard navigation
- Screen reader support
- Reduced motion support
- Accessible forms and modals

⚡ **Performance Optimized**
- GPU-accelerated animations
- Lazy loading support
- Optimized GSAP transforms
- Minimal dependencies
- Static HTML/CSS/JS deployment

## Project Structure

```
vishwa/
├── index.html           # Main HTML file
├── css/
│   └── style.css        # All styling
├── js/
│   └── script.js        # All animations & interactions
├── assets/
│   ├── images/          # Image placeholders
│   ├── videos/          # Video files
│   └── icons/           # Icon assets
└── README.md            # This file
```

## Getting Started

### Quick Start
1. Clone or download this project
2. Open `index.html` in a web browser
3. No build process required - it's pure static HTML/CSS/JS

### Customization

#### Update Personal Information

**index.html** - Update these sections:

```html
<!-- Navigation -->
<li class="nav-item"><a href="#about" class="nav-link">ABOUT</a></li>

<!-- Contact Links -->
<a href="https://instagram.com/yourhandle" target="_blank">INSTAGRAM</a>
<a href="mailto:your@email.com">EMAIL</a>
<a href="https://linkedin.com/in/yourprofile">LINKEDIN</a>
```

#### Add Your Projects

**Short Films** - Edit the `.film-card` elements:

```html
<article class="film-card" data-project>
    <div class="film-number">01</div>
    <div class="film-image" style="background-image: url('./assets/images/film-01.jpg');">
    </div>
    <div class="film-content">
        <h3 class="film-title">YOUR FILM TITLE</h3>
        <p class="film-role">DIRECTOR / EDITOR</p>
        <p class="film-year">2026</p>
        <p class="film-description">Your project description here.</p>
        <a href="https://youtube.com/watch?v=..." class="film-link" data-cursor-text="PLAY">WATCH</a>
    </div>
</article>
```

**College Works** - Edit the `.college-work` elements:

```html
<article class="college-work" data-reveal>
    <div class="college-image large" style="background-image: url('./assets/images/college-01.jpg');">
    </div>
    <div class="college-info">
        <h3 class="college-title">PROJECT TITLE</h3>
        <p class="college-role">YOUR ROLE</p>
        <p class="college-year">2024</p>
    </div>
</article>
```

**Other Works** - Edit YouTube or graphic design sections:

```html
<div class="work-item">
    <div class="work-thumbnail" style="background-image: url('./assets/images/work-01.jpg');"></div>
    <p class="work-title">Your Work Title</p>
</div>
```

#### Customize Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --color-black: #000000;
    --color-white: #FFFFFF;
    --color-gray: #A0A0A0;
    --color-dark-gray: #1a1a1a;
    --color-border: rgba(255, 255, 255, 0.15);
}
```

#### Customize Fonts

The website uses system fonts by default. To add custom fonts:

1. Add Google Fonts link in `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
```

2. Update CSS:

```css
--font-display: 'Space Grotesk', sans-serif;
```

#### Customize Animations

**Loader Duration** - In `js/script.js`:

```javascript
// Change intro animation speed
tl.to(loader, {
    opacity: 0,
    duration: 0.8,  // Duration in seconds
    delay: 1.5,     // Delay before hiding
});
```

**Parallax Speed** - In HTML (data-parallax values):

```html
<div data-parallax="0.15">  <!-- Lower = slower, higher = faster -->
```

**Animation Duration** - In `js/script.js`:

```javascript
// ScrollTrigger reveal animation
tl.to(element, {
    opacity: 1,
    y: 0,
    duration: 0.8,  // Adjust duration
    ease: 'cubic.out',
});
```

## Adding Images

1. Add images to `assets/images/` folder
2. Reference in HTML:

```html
<!-- Background image -->
<div class="about-image" style="background-image: url('./assets/images/portrait.jpg');"></div>

<!-- Image element -->
<img src="./assets/images/project.jpg" alt="Project Description">

<!-- Lazy load image (loads when visible) -->
<img data-src="./assets/images/project.jpg" alt="Project Description">
```

## Adding Videos

1. Add videos to `assets/videos/` folder
2. Reference in HTML:

```html
<video autoplay muted loop>
    <source src="./assets/videos/background.mp4" type="video/mp4">
</video>
```

## SEO Optimization

Edit meta tags in `index.html` `<head>`:

```html
<meta name="description" content="Your description here">
<meta name="keywords" content="Film Director, Video Editor, Portfolio">
<meta property="og:title" content="Your Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="./assets/images/social-image.jpg">
```

## Smooth Scrolling

The website uses Lenis for smooth scrolling. To customize:

1. Edit `js/script.js` in `initSmoothScroll()`:

```javascript
const lenis = new Lenis({
    duration: 1.2,        // Scroll duration
    easing: (t) => ...,   // Easing function
    direction: 'vertical',
});
```

## Custom Cursor

The custom cursor appears on desktop only. Disable it by commenting in `js/script.js`:

```javascript
// Comment out to disable custom cursor
initCustomCursor();
```

## Mobile Optimization

- Parallax is automatically reduced on mobile
- Custom cursor is hidden on touch devices
- Navigation becomes hamburger menu
- All sections remain fully responsive

## Accessibility Features

- Keyboard navigation support
- Screen reader friendly
- ARIA labels on interactive elements
- High contrast colors (WCAG AA)
- Reduced motion support
- Modal close on ESC key
- Focus states on all links

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari 12+
- Mobile browsers (iOS Safari, Chrome Android)

## Performance Tips

1. **Optimize Images**
   - Compress with TinyPNG or similar
   - Use modern formats (WebP with fallback)
   - Resize to appropriate dimensions

2. **Optimize Videos**
   - Use MP4 format
   - Compress to reasonable bitrate
   - Consider autoplay restrictions on mobile

3. **Disable Unused Animations**
   - Comment out animation functions in `js/script.js`
   - Remove unused CSS selectors

4. **Lazy Loading**
   - Use `data-src` for images below the fold
   - Lenis lazy loads video elements

## Deployment

### Netlify (Recommended)
1. Push to GitHub
2. Connect repository to Netlify
3. Deploy (no build step needed)

### Vercel
1. Push to GitHub
2. Import project to Vercel
3. Deploy (automatic)

### Traditional Hosting
1. Upload files via FTP to your server
2. Ensure `.htaccess` allows smooth scrolling
3. No special server configuration needed

## Dependencies

All dependencies are loaded via CDN:

- **GSAP** - Animation library
- **ScrollTrigger** - Scroll-based animations
- **Lenis** - Smooth scrolling

No npm/package manager required.

## Troubleshooting

### Animations not working?
- Check browser console for errors
- Ensure GSAP/ScrollTrigger CDN links are accessible
- Clear browser cache

### Smooth scroll not working?
- Lenis may not load - check console
- Fallback to native smooth scroll works fine
- Works best in modern browsers

### Images not showing?
- Check file paths (relative to index.html)
- Ensure images are in `assets/images/`
- Verify image formats are supported

### Custom cursor not showing?
- Custom cursor only works on desktop
- Hidden on mobile/touch devices (intentional)
- Disable if desired in `js/script.js`

## Customization Tips

1. **Add More Sections**
   - Copy section structure from existing sections
   - Add `data-reveal` for scroll animations

2. **Change Color Scheme**
   - Edit CSS variables in `:root`
   - Consider maintaining high contrast

3. **Adjust Typography**
   - Modify font sizes with `clamp()` for responsive scaling
   - Update letter-spacing for different feel

4. **Add Form**
   - Create contact form in final section
   - Use FormSubmit.co or similar for email backend

5. **Add Analytics**
   - Add Google Analytics script
   - `trackEvent()` function available for custom tracking

## License

This template is provided as-is for personal and professional use.

## Support

For issues or questions:
1. Check browser console for errors
2. Verify all file paths are correct
3. Ensure all CDN dependencies load
4. Test in incognito/private mode

---

**Created with ❤️ for Vishwa - Director & Editor**

Inspired by premium film studio portfolios and cinematic design principles.
