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

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % totalCards;
    updateCarousel(currentIndex);
};

setInterval(autoSlide, 10000); // Muda automaticamente a cada 10 segundos

