const indicators = document.querySelectorAll('.indicator');
const track = document.querySelector('.carousel-track');
let currentIndex = 0;
const totalCards = indicators.length; // Total de cartões

// Função para atualizar o carrossel
function updateCarousel() {
    const offset = -currentIndex * 297; // 297px é a largura de cada cartão
    track.style.transform = `translateX(${offset}px)`;

    // Atualiza os indicadores
    indicators.forEach(ind => ind.classList.remove('active'));
    indicators[currentIndex].classList.add('active');
}

// Adiciona funcionalidade de clicar nos indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel();
    });
});

// Função para mudar o cartão automaticamente a cada 10 segundos
setInterval(() => {
    currentIndex = (currentIndex + 1) % totalCards; // Avança para o próximo cartão
    updateCarousel();
}, 10000); // 10 segundos

// Chama a função pela primeira vez para garantir que o estado inicial está correto
updateCarousel();
