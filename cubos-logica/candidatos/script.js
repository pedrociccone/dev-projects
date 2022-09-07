function processarVotos(votosA, votosB, votosC) {
    let votosTotais = votosA + votosB + votosC;

        if (votosA > votosB && votosA > votosC) {
            let porcentagemA = Math.round(votosA * 100 / votosTotais);
            if (porcentagemA >= 51) {
                imprimir(`O Candidato A está ganhando com ${porcentagemA}% dos votos! Por enquanto, não haverá segundo turno.`);
            } else {
                imprimir(`O Candidato A está ganhando com ${porcentagemA}% dos votos! Estamos indo pro segundo turno!`);
            }
        } else if (votosB > votosA && votosB > votosC) {
            let porcentagemB = Math.round(votosB * 100 / votosTotais);
            if (porcentagemB >= 51) {
                imprimir(`O Candidato B está ganhando com ${porcentagemB}% dos votos! Por enquanto, não haverá segundo turno.`);
            } else {
                imprimir(`O Candidato B está ganhando com ${porcentagemB}% dos votos! Estamos indo pro segundo turno!`);
            }
        } else if (votosC > votosA && votosC > votosA) {
            let porcentagemC = Math.round(votosC * 100 / votosTotais);
            if (porcentagemC >= 51) {
                imprimir(`O Candidato C está ganhando com ${porcentagemC}% dos votos! Por enquanto, não haverá segundo turno.`);
            } else {
                imprimir(`O Candidato C está ganhando com ${porcentagemC}% dos votos! Estamos indo pro segundo turno!`);
            }
        } else {
            imprimir(`Temos um empate!`);
        }
}

//Não mexa em nada daqui pra baixo
let votosA = 0, votosB = 0, votosC = 0;

function imprimir(text) {
    document.getElementById("imprimir").innerHTML= text;
}

document.getElementById("a").addEventListener("click", () => {
    votosA++;
    document.getElementById("a").innerHTML = votosA;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("b").addEventListener("click", () => {
    votosB++;
    document.getElementById("b").innerHTML = votosB;
    processarVotos(votosA, votosB, votosC);
});

document.getElementById("c").addEventListener("click", () => {
    votosC++;
    document.getElementById("c").innerHTML = votosC;
    processarVotos(votosA, votosB, votosC);
});