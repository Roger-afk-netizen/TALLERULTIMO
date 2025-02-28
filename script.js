document.addEventListener('DOMContentLoaded', () => {
    const figuras = document.querySelectorAll('.figura');

    figuras.forEach(figura => {
        animateFigura(figura);
    });
});

function animateFigura(figura) {
    const maxWidth = window.innerWidth - 20;
    const maxHeight = window.innerHeight - 20;
    const randomX = Math.floor(Math.random() * maxWidth);
    const randomY = Math.floor(Math.random() * maxHeight);

    figura.style.left = `${randomX}px`;
    figura.style.top = `${randomY}px`;

    setTimeout(() => animateFigura(figura), 1000);
}
