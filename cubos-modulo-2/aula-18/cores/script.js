const bloco = document.querySelector(".bloco");
const botao01 = document.querySelector(".botao-01");
const botao02 = document.querySelector(".botao-02");
const botao03 = document.querySelector(".botao-03");

function gerarNumeroInteiroAleatorio(min, max) {
	// número fracionário aleatório maior ou igual a 0 e menor que 1
	const aleatorioDeBase = Math.random();
	// número fracionário aleatório maior ou igual a 0 e menor que (max - min + 1)
	const aleatorioFracionario = Math.random() * (max - min + 1);
	// número inteiro aleatório maior ou igual a 0 e menor ou igual a (max - min)
	// Math.trunc tira a parte fracionária de um número: 0,5 vira 0, 1,25 vira 1, etc
	const aleatorioInteiro = Math.trunc(aleatorioFracionario);
	// número inteiro aleatório maior ou igual a min e menor ou igual a max
	return min + aleatorioInteiro;
}

function gerarCorAleatoria() {
	const vermelho = gerarNumeroInteiroAleatorio(0, 255);
	const verde = gerarNumeroInteiroAleatorio(0, 255);
	const azul = gerarNumeroInteiroAleatorio(0, 255);
	
	return "rgb(" + vermelho + ", " + verde + ", " + azul + ")";
}

function escolherElementoAleatorio(array) {
	return array[gerarNumeroInteiroAleatorio(0, array.length - 1)]
}

let acerto = 0;
const botoes = [botao01, botao02, botao03];

function alterarCoreseBotoes() {
	
	let cores = [];
	cores.push(
		gerarCorAleatoria(),
		gerarCorAleatoria(),
		gerarCorAleatoria()
	)

	bloco.style["background-color"] = escolherElementoAleatorio(cores);

	botoes[0].innerText = cores[0];
	botoes[1].innerText = cores[1];
	botoes[2].innerText = cores[2];

	if (acerto === 10) {
		alert("Eba!! 10 acertos! Você venceu!")
	};
}

for (let i = 0; i < botoes.length; i++) {
	botoes[i].addEventListener("click", () => {
		if (bloco.style["background-color"] === botoes[i].innerText) {
			alert("Você acertou!");
			acerto++
		} else {
			alert("Errou!");
		}
		alterarCoreseBotoes();
	});
}

alterarCoreseBotoes();

// Pendentes

// Levar os códigos de cores aleatórias aos outros botões
// Adicionar evento de clique quando o usuário acerta a resposta (refrescar a página)
// Adicionar evento de clique quando o usuário erra a resposta (alert + refrescar a página)

// while (botoes.length - 1) {
// 	let index = botaoEscolhido[i];
// 	console.log(botoes[index]);
// 	let botoesRestantes = botoes.splice(index, 1);
// 	console.log(botoesRestantes);
// 	console.log(botoes);
// }