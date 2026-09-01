// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    initSmoothScroll();
    initLoader();
    initHeroAnimation();
    initNavigation();
    initReveals();
    initParallax();

    initModal();

    // Refresh ScrollTrigger after everything loads
    window.addEventListener('load', () => ScrollTrigger.refresh());
});

// ==================== SMOOTH SCROLLING ====================
function initSmoothScroll() {
    if (typeof Lenis === 'undefined') return;
    if (window.innerWidth <= 768) return;

    const lenis = new Lenis({
        duration: 1.0,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 0.9,
        smoothTouch: false,
        touchMultiplier: 1.5,
    });

    // Connect Lenis to GSAP ticker for synchronised frame updates
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    // Sync ScrollTrigger with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    window.lenis = lenis;
}

// ==================== LOADER ====================
function initLoader() {
    const loader = document.getElementById('loader');
    const loaderTitle = document.querySelector('.loader-title');
    const loaderSubtitle = document.querySelector('.loader-subtitle');
    const loaderLine = document.querySelector('.loader-line');

    if (!loader || typeof gsap === 'undefined') {
        if (loader) loader.classList.add('hidden');
        document.querySelector('.navbar')?.classList.add('visible');
        return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        loader.classList.add('hidden');
        document.querySelector('.navbar')?.classList.add('visible');
        return;
    }

    const tl = gsap.timeline({
        onComplete: () => {
            loader.classList.add('hidden');
            document.querySelector('.navbar')?.classList.add('visible');
        }
    });

    tl.to(loaderTitle, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out',
    })
    .to(loaderSubtitle, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power3.out',
    }, 0.4)
    .to(loaderLine, {
        opacity: 1,
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.inOut',
    }, 0.6)
    .to(loader, {
        opacity: 0,
        pointerEvents: 'none',
        duration: 0.8,
        ease: 'power2.inOut',
        delay: 1.2,
    });
}

// ==================== NAVIGATION ====================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (!navToggle || !navMenu || !navbar) return;

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Show navbar after scrolling past hero
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                if (window.scrollY > 100 && !navbar.classList.contains('visible')) {
                    navbar.classList.add('visible');
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ==================== HERO ANIMATION ====================
function initHeroAnimation() {
    const textChars = document.querySelectorAll('.text-char');

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        textChars.forEach(char => {
            char.style.opacity = '1';
            char.style.transform = 'none';
        });
        return;
    }

    gsap.to(textChars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.08,
        delay: 2.2,
    });
}

// ==================== REVEAL ANIMATIONS ====================
function initReveals() {
    document.querySelectorAll('[data-reveal]').forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: 'top 85%',
            once: true,
            onEnter: () => el.classList.add('revealed'),
        });
    });
}

// ==================== PARALLAX (GPU-optimised scrub) ====================
function initParallax() {
    if (window.innerWidth <= 768) return;
    document.querySelectorAll('[data-parallax]').forEach(el => {
        const speed = parseFloat(el.dataset.parallax);

        gsap.to(el, {
            y: () => speed * 100,
            ease: 'none',
            scrollTrigger: {
                trigger: el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: 0.8,
            }
        });
    });
}


// ==================== MODAL & SLIDER ====================
function initModal() {
    const modal = document.getElementById('projectModal');
    const modalClose = document.getElementById('modalClose');

    if (modal && modalClose) {
        modalClose.addEventListener('click', closeModal);

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    // Slide click logic
    document.querySelectorAll('.slide-item').forEach(item => {
        item.addEventListener('click', () => {
            openModal(item.dataset.img);
        });
    });

    // Slider arrows logic
    const track = document.querySelector('.films-track');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    if (track && prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            track.scrollBy({ left: -Math.min(window.innerWidth * 0.8, 600), behavior: 'smooth' });
        });
        nextBtn.addEventListener('click', () => {
            track.scrollBy({ left: Math.min(window.innerWidth * 0.8, 600), behavior: 'smooth' });
        });
    }
}

function openModal(imgSrc) {
    const modal = document.getElementById('projectModal');
    const modalImg = document.getElementById('modalFullImage');
    if (!modal || !modalImg) return;

    modalImg.src = imgSrc;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    if (window.lenis) window.lenis.stop();
}

function closeModal() {
    const modal = document.getElementById('projectModal');
    if (!modal) return;

    modal.classList.remove('active');
    document.body.style.overflow = '';

    if (window.lenis) window.lenis.start();
}

// ==================== RESIZE HANDLER ====================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => ScrollTrigger.refresh(), 250);
}, { passive: true });
