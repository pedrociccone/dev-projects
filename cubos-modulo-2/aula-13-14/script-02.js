const texto = document.querySelector(".texto");
const aumentar = document.querySelector(".aumentar");
const diminuir = document.querySelector(".diminuir");

let contador = 16;

aumentar.addEventListener("click", () => {
    contador++;
    texto.style["font-size"] = contador + "px";
});

diminuir.addEventListener("click", () => {
    contador--;
    texto.style["font-size"] = contador + "px";
});