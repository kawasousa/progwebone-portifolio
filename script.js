const titulo = "Our Team's Portfolio";
let index = 0;

function digitarTitulo() {
    if (index < titulo.length) {
        document.getElementById("titulo").innerText += titulo.charAt(index);
        index++;
        setTimeout(digitarTitulo, 100);
    }
}

// Função para virar a carta
function virarCarta(elemento) {
    elemento.classList.toggle("virada");
}

// Animação de entrada dos cards
window.onload = () => {
    digitarTitulo();

    const cards = document.querySelectorAll('.card-container');
    setTimeout(() => {
        cards.forEach((card, i) => {
            setTimeout(() => {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            }, i * 200);
        });
    }, 500);
};
