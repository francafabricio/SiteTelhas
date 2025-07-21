document.addEventListener('DOMContentLoaded', () => {

    // --- TAREFA 1: Carregamento Otimizado do Google Maps ---
    // Esta função carrega o mapa somente depois que a página está pronta.
    const mapFrame = document.getElementById('google-map-iframe');
    if (mapFrame && mapFrame.dataset.src) {
        // Atraso de 2 segundos para não competir com o carregamento inicial
        setTimeout(() => {
            mapFrame.setAttribute('src', mapFrame.dataset.src);
        }, 2000);
    }

    // --- TAREFA 3: Carrosséis Automáticos ---

    // 3.1: Carrossel de Imagens da Seção Hero (Fade-in/Fade-out)
    const heroImages = document.querySelectorAll('.hero-image');
    if (heroImages.length > 1) {
        let currentHeroIndex = 0;
        setInterval(() => {
            heroImages[currentHeroIndex].classList.remove('active'); // Esconde a imagem atual
            currentHeroIndex = (currentHeroIndex + 1) % heroImages.length; // Move para a próxima
            heroImages[currentHeroIndex].classList.add('active'); // Mostra a nova imagem
        }, 3000); // Muda a cada 5 segundos
    }

    // 3.2: Carrossel de Imagens da Seção Galeria (Slider)
    const galleryTrack = document.querySelector('.gallery-carousel-track');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryTrack && galleryItems.length > 1) {
        let currentGalleryIndex = 0;
        setInterval(() => {
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length; // Move para o próximo slide
            galleryTrack.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
        }, 3000); // Muda a cada 6 segundos
    }


    // --- Código Original: Carrossel de Benefícios Arrastável e Automático ---
    // Mantive o seu código original para o carrossel de benefícios
    const benefitsContainer = document.querySelector('.benefits-carousel-container');
    if (benefitsContainer) {
        const track = benefitsContainer.querySelector('.benefits-carousel-track');
        // Como a seção de benefícios agora é um grid estático, a funcionalidade
        // de carrossel foi desativada para ela, mas o código é mantido caso queira reativar.
        // Se quiser reativar, descomente o bloco abaixo e ajuste o CSS de .benefits-carousel-track para usar 'display: flex'.

        /*
        let isDragging = false;
        let startX;
        let scrollLeft;
        let animationFrameId;

        const autoScroll = () => {
            if (!isDragging) {
                track.scrollLeft += 0.5;
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
            const walk = (x - startX) * 2;
            track.scrollLeft = scrollLeft - walk;
        };

        const endDrag = () => {
            if (!isDragging) return;
            isDragging = false;
            setTimeout(() => {
                animationFrameId = requestAnimationFrame(autoScroll);
            }, 50);
        };

        // Clonar itens para efeito de loop infinito
        const items = Array.from(track.children);
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        track.addEventListener('mousedown', startDrag);
        track.addEventListener('mousemove', onDrag);
        document.addEventListener('mouseup', endDrag);
        track.addEventListener('mouseleave', () => { if (isDragging) endDrag(); });

        track.addEventListener('touchstart', startDrag, { passive: true });
        track.addEventListener('touchmove', onDrag, { passive: true });
        track.addEventListener('touchend', endDrag);

        animationFrameId = requestAnimationFrame(autoScroll);
        */
    }

});