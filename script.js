const indicators = document.querySelectorAll('.indicator');
const track = document.querySelector('.carousel-track');
const totalCards = indicators.length;
let currentIndex = 0;

const updateCarousel = (index) => {
    const offset = -index * 317; // Largura do cartão + margem
    track.style.transform = `translateX(${offset}px)`;

    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[index].classList.add('active');
};

indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

// Função para passar automaticamente os cartões
const autoSlide = () => {
    currentIndex++;
    
    // Se atingir o último cartão, volta ao primeiro
    if (currentIndex >= totalCards) {
        currentIndex = 0;
    }
    
    updateCarousel(currentIndex);
};

// Iniciar a mudança automática a cada 10 segundos
setInterval(autoSlide, 10000); // Muda automaticamente a cada 10 segundos


setInterval(autoSlide, 10000); // Muda automaticamente a cada 10 segundos

