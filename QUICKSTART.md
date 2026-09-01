# QUICK START GUIDE - Customization Steps

## Step 1: Basic Information (5 minutes)

### Update Your Name & Title
Open `index.html` and find the loader section:

```html
<h1 class="loader-title">VISHWA</h1>
<p class="loader-subtitle">DIRECTOR & EDITOR</p>
```

Change to your information.

### Update Navigation
Find the navbar section and update the logo letter and links as needed:

```html
<a href="#hero" class="navbar-logo">
    <span class="navbar-logo-text">V</span>  <!-- Change to your initial -->
</a>
```

## Step 2: Add Your About Section (10 minutes)

Find the About section in `index.html`:

```html
<section class="about" id="about">
    <!-- ... -->
    <div class="about-image" style="background-image: url('./assets/images/your-portrait.jpg');"></div>
    <!-- Update image path -->
    
    <div class="about-text">
        <p class="about-intro">I'M [YOUR NAME].</p>
        <h3 class="about-title">DIRECTOR.<br>EDITOR.<br>STORYTELLER.</h3>
        <p class="about-description">
            [Write your bio here. Make it personal and compelling.]
        </p>
    </div>
</section>
```

### Add a Portrait Image
1. Save your portrait as `portrait.jpg` in `assets/images/`
2. Update the background-image path

## Step 3: Update Skills (5 minutes)

Replace the skill items with your actual skills:

```html
<div class="skill-item">
    <h3 class="skill-name">YOUR SKILL</h3>
    <p class="skill-desc">Brief description of expertise</p>
</div>
```

Examples:
- DIRECTING: Vision, Storytelling, Cinematography
- EDITING: Color Grading, Motion Design, VFX
- CINEMATOGRAPHY: Lighting, Composition, Visual Language
- STORYTELLING: Narrative, Pacing, Emotional Impact

## Step 4: Add Your Films (15 minutes)

Find the Short Films section and update each film card:

```html
<article class="film-card" data-project>
    <div class="film-number">01</div>
    <div class="film-image" style="background-image: url('./assets/images/film-01.jpg');"></div>
    <div class="film-content">
        <h3 class="film-title">YOUR FILM TITLE</h3>
        <p class="film-role">DIRECTOR / EDITOR</p>  <!-- Your role -->
        <p class="film-year">2026</p>               <!-- Release year -->
        <p class="film-description">Your film description</p>
        <a href="https://youtube.com/watch?v=..." class="film-link" data-cursor-text="PLAY">WATCH</a>
    </div>
</article>
```

### Steps to Add a Film:
1. Create a thumbnail and save as `film-01.jpg` in `assets/images/`
2. Update the film title, role, year
3. Write a compelling 1-2 sentence description
4. Add link to your YouTube video or hosting platform
5. Change the film number (01, 02, 03, etc.)

## Step 5: Add College Projects (10 minutes)

Find the College Works section:

```html
<article class="college-work" data-reveal>
    <div class="college-image large" style="background-image: url('./assets/images/college-01.jpg');"></div>
    <div class="college-info">
        <h3 class="college-title">PROJECT TITLE</h3>
        <p class="college-role">DIRECTOR / EDITOR</p>
        <p class="college-year">2024</p>
    </div>
</article>
```

Mix `large` and `small` classes to create an asymmetric layout:
- `<div class="college-image large">` - full width
- `<div class="college-image small">` - smaller aspect ratio

## Step 6: Add Other Works (10 minutes)

### YouTube Content
```html
<div class="work-item">
    <div class="work-thumbnail" style="background-image: url('./assets/images/youtube-01.jpg');"></div>
    <p class="work-title">Channel Name - Project Title</p>
</div>
```

### Graphic Design
```html
<div class="work-item">
    <div class="work-thumbnail" style="background-image: url('./assets/images/design-01.jpg');"></div>
    <p class="work-title">Poster Design / Social Media</p>
</div>
```

## Step 7: Update Contact Information (5 minutes)

Find the Contact section:

```html
<div class="contact-links">
    <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" class="contact-link">INSTAGRAM</a>
    <a href="https://youtube.com/c/your-channel" target="_blank" rel="noopener noreferrer" class="contact-link">YOUTUBE</a>
    <a href="mailto:your.email@example.com" class="contact-link">EMAIL</a>
    <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" class="contact-link">LINKEDIN</a>
</div>
```

Replace all URLs with your actual social media handles and email.

## Step 8: SEO & Meta Tags (5 minutes)

Open `index.html` and update meta tags in the `<head>`:

```html
<meta name="description" content="Your professional description here">
<meta name="keywords" content="Film Director, Video Editor, Your Specialty, Your Location">
<meta property="og:title" content="Your Name - Director & Editor">
<meta property="og:description" content="Your tagline or description">
<meta property="og:image" content="./assets/images/social-preview.jpg">
```

## Step 9: Image Assets (20 minutes)

Prepare these images:

| Image | Size | Format | Purpose |
|-------|------|--------|---------|
| portrait.jpg | 600×800px | JPG | About section profile |
| film-01.jpg | 1280×720px | JPG | Film thumbnail |
| college-01.jpg | Variable | JPG | College project image |
| youtube-01.jpg | 1280×720px | JPG | YouTube thumbnail |
| design-01.jpg | Variable | JPG | Graphic design sample |
| og-image.jpg | 1200×630px | JPG | Social media preview |

### Image Tips:
- Compress images to <200KB each
- Use grayscale or high-contrast B&W for cinematic feel
- Maintain consistent aspect ratios
- Ensure high quality (1920px minimum width)

## Step 10: Customize Colors (Optional)

Edit `css/style.css` to change the color scheme:

```css
:root {
    --color-black: #000000;        /* Background */
    --color-white: #FFFFFF;        /* Text */
    --color-gray: #A0A0A0;         /* Secondary text */
    --color-dark-gray: #1a1a1a;    /* Dark backgrounds */
    --color-border: rgba(255, 255, 255, 0.15);  /* Borders */
}
```

Example for a different aesthetic:
```css
:root {
    --color-black: #0a0a0a;        /* Slightly lighter black */
    --color-white: #f5f5f5;        /* Off-white */
    --color-gray: #888888;         /* Darker gray */
}
```

## Step 11: Customize Fonts (Optional)

To use a specific font family, add to `index.html` `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap" rel="stylesheet">
```

Then update `css/style.css`:

```css
:root {
    --font-display: 'Space Grotesk', sans-serif;
}
```

Popular font choices:
- Space Grotesk (modern, geometric)
- Poppins (friendly, versatile)
- Oxanium (bold, cinematic)
- Rubik (clean, professional)

## Step 12: Add Google Analytics (Optional)

Add to `index.html` before closing `</head>` tag:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual tracking ID.

## Deployment Steps

### Deploy to Netlify (Free)
1. Push your project to GitHub
2. Go to netlify.com
3. Click "New site from Git"
4. Select your repository
5. Deploy (automatic, no build step needed)

### Deploy to Vercel (Free)
1. Push your project to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your repository
5. Deploy (automatic)

### Deploy to Your Own Server
1. Upload all files via FTP to your hosting
2. Ensure files maintain directory structure
3. No special configuration needed
4. Website works immediately

## Testing Checklist

- [ ] All images load correctly
- [ ] All links work (navigation, external, social)
- [ ] Mobile menu opens/closes
- [ ] Animations play smoothly
- [ ] Custom cursor appears on desktop
- [ ] Project modal opens and closes
- [ ] Contact links open correctly
- [ ] No console errors
- [ ] Website loads quickly
- [ ] Mobile responsiveness looks good

## Common Issues & Fixes

### Images don't show
- Check file paths (use `./assets/images/filename.jpg`)
- Ensure images are in the correct folder
- Check file permissions

### Smooth scrolling doesn't work
- Lenis might not load - check console
- Normal smooth scroll still works as fallback
- Clear cache and refresh

### Animations not running
- Check browser console for GSAP errors
- Ensure GSAP CDN link is accessible
- Try different browser to isolate issue

### Mobile menu not working
- Check that `js/script.js` is loaded
- Clear cache
- Test in incognito mode

## Next Steps

1. ✅ Complete customization
2. ✅ Add all your images and content
3. ✅ Test on multiple devices
4. ✅ Check performance (should load <3s)
5. ✅ Deploy to hosting
6. ✅ Share your portfolio!

---

**That's it! Your portfolio is now ready. Total time: ~90 minutes**

For detailed customization options, see README.md
