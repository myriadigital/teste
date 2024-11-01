const indicators = document.querySelectorAll('.indicator');
const track = document.querySelector('.carousel-track');
const totalCards = indicators.length;
let currentIndex = 0;

// Função para atualizar o carrossel
const updateCarousel = () => {
  const offset = -currentIndex * 307; // 297px (largura do cartão) + 10px (margem)
  track.style.transform = `translateX(${offset}px)`;

  indicators.forEach(ind => ind.classList.remove('active'));
  indicators[currentIndex].classList.add('active');
};

// Navegação manual
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Navegação automática
const autoSlide = () => {
  currentIndex = (currentIndex + 1) % totalCards; // Volta ao primeiro após o último
  updateCarousel();
};

// Iniciar a mudança automática a cada 10 segundos
setInterval(autoSlide, 10000); // Muda automaticamente a cada 10 segundos

    
    // Se atingir o último cartão, volta ao primeiro
    if (currentIndex >= totalCards) {
        currentIndex = 0;
    }
    
    updateCarousel(currentIndex);
};

// Iniciar a mudança automática a cada 10 segundos
setInterval(autoSlide, 10000); // Muda automaticamente a cada 10 segundos


setInterval(autoSlide, 10000); // Muda automaticamente a cada 10 segundos

