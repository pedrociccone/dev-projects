const adultos = document.querySelector(".adultos");
const criancas = document.querySelector(".criancas");
const button = document.querySelector("button");

button.addEventListener("click", () => {

    let qtdAdultos = adultos.valueAsNumber;
    let qtdCriancas = criancas.valueAsNumber;

    let carne = qtdAdultos * 300 + qtdCriancas * 150;
    let coracao = qtdAdultos * 100 + qtdCriancas * 50;
    let refrigerante = qtdAdultos + qtdCriancas * 0.5;
    let cerveja = qtdAdultos * 0.5;

    alert(`Lista de compras:
    - ${carne}g de carne
    - ${coracao}g de coração
    - ${cerveja}L de cerveja
    - ${refrigerante}L de refrigerante`);
});


// Por adulto:

// 300g de carne
// 100g de coração
// 0,5L de cerveja
// 1L de refrigerante

// Por criança:

// 150g de carne
// 50g de coracao
// 0,5L de refrigerante