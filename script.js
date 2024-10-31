const indicators = document.querySelectorAll('.indicator');
const track = document.querySelector('.carousel-track');
let currentIndex = 0;

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    
    // Calcula o deslocamento baseado na largura dos cartões
    const offset = -index * 297; // 297px é a largura de cada cartão
    track.style.transform = `translateX(${offset}px)`;
    
    // Atualiza os indicadores
    indicators.forEach(ind => ind.classList.remove('active'));
    indicator.classList.add('active');
  });
});
