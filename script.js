document.addEventListener('DOMContentLoaded', function () {

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Hero Image Slider
    const heroImages = document.querySelectorAll('.hero-image');
    if (heroImages.length > 1) {
        let currentHeroImage = 0;
        setInterval(() => {
            heroImages[currentHeroImage].classList.remove('active');
            currentHeroImage = (currentHeroImage + 1) % heroImages.length;
            heroImages[currentHeroImage].classList.add('active');
        }, 5000);
    }

    // Automatic Benefits Carousel (CSS-driven)
    const benefitsTrack = document.querySelector('.benefits-carousel-track');
    if (benefitsTrack) {
        const cards = Array.from(benefitsTrack.children);
        cards.forEach(card => {
            const clone = card.cloneNode(true);
            benefitsTrack.appendChild(clone);
        });
    }

    // Gallery Image Carousel (Automatic)
    const galleryTrack = document.querySelector('.gallery-carousel-track');
    if (galleryTrack) {
        const galleryItems = galleryTrack.querySelectorAll('.gallery-item');
        if (galleryItems.length > 1) {
            let currentGalleryIndex = 0;
            setInterval(() => {
                currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length;
                galleryTrack.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
            }, 4000);
        }
    }

    // Function to match Gallery Heights
    function matchGalleryHeights() {
        const videoContainer = document.querySelector('.video-item-insta');
        const carouselContainer = document.querySelector('.gallery-carousel-container');
        if (videoContainer && carouselContainer) {
            const videoHeight = videoContainer.offsetHeight;
            if (videoHeight > 0) {
                carouselContainer.style.height = `${videoHeight}px`;
            }
        }
    }

    // Run height matching on load, resize, and after a delay for the iframe
    window.addEventListener('load', () => {
        matchGalleryHeights();
        // Add delays to handle slow iframe loading
        setTimeout(matchGalleryHeights, 500);
        setTimeout(matchGalleryHeights, 1500);
    });
    window.addEventListener('resize', matchGalleryHeights);

    // Intersection Observer for animations
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.product-card, .testimonial-card, .gallery-layout');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});