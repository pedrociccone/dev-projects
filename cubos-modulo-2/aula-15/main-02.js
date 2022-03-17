const adultos = document.querySelector(".adultos");
const criancas = document.querySelector(".criancas");
const button = document.querySelector("button");
const select = document.querySelector("select");

button.addEventListener("click", () => {

    let qtdAdultos = adultos.valueAsNumber;
    let qtdCriancas = criancas.valueAsNumber;

    let carne = qtdAdultos * 300 + qtdCriancas * 150;
    let coracao = qtdAdultos * 100 + qtdCriancas * 50;
    let refrigerante = qtdAdultos + qtdCriancas * 0.5;
    let cerveja = qtdAdultos * 0.5;

    let formatoDeCerveja;
    let fraseCerveja = "";

    if (select.value === "Garrafa de 600ml") {
        formatoDeCerveja = Math.round(cerveja / 0.6);
        fraseCerveja = `${formatoDeCerveja} garrafas de 600ml`
    } else if (select.value === "Latão 475ml") {
        formatoDeCerveja = Math.round(cerveja / 0.475);
        fraseCerveja = `${formatoDeCerveja} latões de 475ml`
    } else if (select.value === "Long neck 330ml") {
        formatoDeCerveja = Math.round(cerveja / 0.33);
        fraseCerveja = `${formatoDeCerveja} long necks de 330ml`
    } else if (select.value === "Lata 350ml") {
        formatoDeCerveja = Math.round(cerveja / 0.35);
        fraseCerveja = `${formatoDeCerveja} latas de 350ml`
    } else {
        formatoDeCerveja = Math.round(cerveja / 0.475);
        fraseCerveja = `${formatoDeCerveja} latinhas de 269ml`
    }

    alert(`Lista de compras:
    - ${carne}g de carne
    - ${coracao}g de coração
    - ${fraseCerveja} de cerveja
    - ${refrigerante}L de refrigerante`);
});

// Garrafa de 600ml
// Latão 475ml
// Long neck 330ml
// Lata 350ml
// Latinha 269ml

// Por adulto:

// 300g de carne
// 100g de coração
// 0,5L de cerveja
// 1L de refrigerante

// Por criança:

// 150g de carne
// 50g de coracao
// 0,5L de refrigerante