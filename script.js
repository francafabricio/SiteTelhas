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


    // 3.1: Carrossel de Imagens da Seção Hero (Fade-in/Fade-out)
    const heroImages = document.querySelectorAll('.hero-image');
    if (heroImages.length > 1) {
        let currentHeroIndex = 0;
        setInterval(() => {
            heroImages[currentHeroIndex].classList.remove('active'); // Esconde a imagem atual
            currentHeroIndex = (currentHeroIndex + 1) % heroImages.length; // Move para a próxima
            heroImages[currentHeroIndex].classList.add('active'); // Mostra a nova imagem
        }, 3000); // Muda a cada 3 segundos
    }

    // 3.2: Carrossel de Imagens da Seção Galeria (Slider)
    const galleryTrack = document.querySelector('.gallery-carousel-track');
    const galleryItems = document.querySelectorAll('.gallery-item');
    if (galleryTrack && galleryItems.length > 1) {
        let currentGalleryIndex = 0;
        setInterval(() => {
            currentGalleryIndex = (currentGalleryIndex + 1) % galleryItems.length; // Move para o próximo slide
            galleryTrack.style.transform = `translateX(-${currentGalleryIndex * 100}%)`;
        }, 3000); // Muda a cada 3 segundos
    }


    const benefitsContainer = document.querySelector('.benefits-carousel-container');
    if (benefitsContainer) {
        const track = benefitsContainer.querySelector('.benefits-carousel-track');
    }

    // --- CÓDIGO PARA PROTEGER IMAGENS ---
    const imagensProtegidas = document.querySelectorAll('.gallery-item img'); // Seleciona todas as imagens da galeria

    imagensProtegidas.forEach(img => {
        // Impede o clique com o botão direito
        img.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        // Impede que a imagem seja arrastada
        img.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
    });
});