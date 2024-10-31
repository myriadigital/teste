const indicators = document.querySelectorAll('.indicator');
const track = document.querySelector('.carousel-track');
let currentIndex = 0;

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    const offset = -index * 190; // Ajuste com base no tamanho dos cartões
    track.style.transform = `translateX(${offset}px)`;
    
    indicators.forEach(ind => ind.classList.remove('active'));
    indicator.classList.add('active');
  });
});
