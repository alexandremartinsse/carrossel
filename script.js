const imagens = ["foto1.webp", "foto2.jpg", "foto3.jpg"];

let indice = 0;

const imagem = document.getElementById("imagem");
const botaoAnterior = document.getElementById("anterior");
const botaoProximo = document.getElementById("proximo");

botaoProximo.addEventListener("click", () => {
    indice++;
    if (indice >= imagens.length) {
        indice = 0;
    }
    imagem.src = imagens[indice];
});

botaoAnterior.addEventListener("click", () => {
    indice--;
    if (indice < 0) {
        indice = imagens.length - 1;
    }
    imagem.src = imagens[indice];
});