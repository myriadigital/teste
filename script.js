const indicators = document.querySelectorAll('.indicator');
const track = document.querySelector('.carousel-track');
let currentIndex = 0;
const totalCards = document.querySelectorAll('.carousel-card').length;
const cardsToShow = 2;

function moveCarousel(index) {
  const offset = -index * 307; // Largura do cartão + margem (297px + 10px)
  track.style.transform = `translateX(${offset}px)`;
  
  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[index % indicators.length].classList.add('active');
}

function nextCard() {
  currentIndex = (currentIndex + 1) % (totalCards - cardsToShow + 1); // Loop de volta ao início
  moveCarousel(currentIndex);
}

// Configura mudança automática a cada 10 segundos
setInterval(nextCard, 10000);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    moveCarousel(currentIndex);
  });
});
