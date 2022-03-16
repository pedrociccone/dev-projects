const peso = document.querySelector(".peso");
const altura = document.querySelector(".altura");
const button = document.querySelector("button");

button.addEventListener("click", () => {

    let valorImc = peso.valueAsNumber / (altura.valueAsNumber * altura.valueAsNumber);
    let resultado;
    
    if (valorImc < 18.5) {
        resultado = "abaixo do peso";
    } else if (valorImc >= 18.5 && valorImc <= 24.9) {
        resultado = "peso normal";
    } else if (valorImc >= 25 && valorImc <= 29.9) {
        resultado = "sobrepeso";
    } else if (valorImc >= 30 && valorImc <= 34.9) {
        resultado = "obesidade grau 1";
    } else if (valorImc >= 35 && valorImc <= 39.9) {
        resultado = "obesidade grau 2";
    } else {
        resultado = "obesidade grau 3";
    }
    console.log(valorImc);
    console.log(resultado);

    alert(`IMC: ${valorImc}. Resultado: ${resultado}.`);

});