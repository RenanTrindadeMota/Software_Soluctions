// Seleção de elementos do carrossel
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');

let lengthItems = items.length - 1;
let active = 0;

// Avança o slide
next.onclick = function () {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};

// Volta o slide
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};

// Atualiza o carrossel automaticamente a cada 6 segundos
let refreshInterval = setInterval(() => { next.click() }, 6000);

// Atualiza o slide ativo
function reloadSlider() {
    slider.style.transform = `translateX(-${items[active].offsetLeft}px)`;

    // Atualiza os pontos de navegação
    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');

    // Reinicia o intervalo automático
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => { next.click() }, 6000);
}

// Muda de slide ao clicar nos pontos
dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

// Recarrega o carrossel ao redimensionar a janela
window.onresize = function () {
    reloadSlider();
};
