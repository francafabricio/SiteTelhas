// Draggable & Automatic Benefits Carousel
const benefitsContainer = document.querySelector('.benefits-carousel-container');
if (benefitsContainer) {
    const track = benefitsContainer.querySelector('.benefits-carousel-track');
    let isDragging = false;
    let startX;
    let scrollLeft;
    let animationFrameId;

    const autoScroll = () => {
        if (!isDragging) {
            track.scrollLeft += 0.5; // Speed of the auto-scroll
            // Reset scroll to the beginning for the infinite loop effect
            if (track.scrollLeft >= track.scrollWidth / 2) {
                track.scrollLeft = 0;
            }
        }
        animationFrameId = requestAnimationFrame(autoScroll);
    };

    const stopAutoScroll = () => {
        cancelAnimationFrame(animationFrameId);
    };

    const startDrag = (e) => {
        isDragging = true;
        stopAutoScroll();
        startX = (e.pageX || e.touches[0].pageX) - track.offsetLeft;
        scrollLeft = track.scrollLeft;
    };

    const onDrag = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = (e.pageX || e.touches[0].pageX) - track.offsetLeft;
        const walk = (x - startX) * 2; // Drag speed multiplier
        track.scrollLeft = scrollLeft - walk;
    };

    const endDrag = () => {
        if (!isDragging) return;
        isDragging = false;
        // Delay restart to prevent immediate scroll after drag
        setTimeout(() => {
            animationFrameId = requestAnimationFrame(autoScroll);
        }, 50);
    };

    // Mouse Events
    track.addEventListener('mousedown', startDrag);
    track.addEventListener('mousemove', onDrag);
    document.addEventListener('mouseup', endDrag);
    track.addEventListener('mouseleave', () => { if (isDragging) endDrag(); });

    // Touch Events
    track.addEventListener('touchstart', startDrag, { passive: true });
    track.addEventListener('touchmove', onDrag, { passive: true });
    track.addEventListener('touchend', endDrag);

    // Initial start
    animationFrameId = requestAnimationFrame(autoScroll);
}