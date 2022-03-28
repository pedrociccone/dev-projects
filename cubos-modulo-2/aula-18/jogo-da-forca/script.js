const partesDoCorpo = document.querySelectorAll(".corpo *");
const elementoLetras = document.querySelector(".letras");
const botoes = document.querySelectorAll(".botoes button");

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

function escolherElementoAleatorio(array) {
	return array[gerarNumeroInteiroAleatorio(0, array.length - 1)]
}

const palavras = ["palmeiras", "corinthians", "botafogo", "sao paulo"];

let palavraSorteada;
let qtdAcertos = 0;
let qtdErros = 0;

function iniciarPartida() {
	qtdAcertos = 0;
	qtdErros = 0;
	palavraSorteada = escolherElementoAleatorio(palavras);

	for (const parteDoCorpo of partesDoCorpo) {
		parteDoCorpo.setAttribute("hidden", "");
	}

	elementoLetras.innerHTML = "";

	for (const letra of palavraSorteada.split("")) {
		const elementoLetra = document.createElement("span");
		elementoLetra.classList.add("letra");
		elementoLetras.append(elementoLetra);
	}
}

iniciarPartida();

function chutarLetra(letra) {
	const acertou = palavraSorteada.includes(letra);

	if (acertou) {
		const letras = document.querySelectorAll(".letra");

		for (let i = 0; i < palavraSorteada.length; i++) {
			if (palavraSorteada[i] === letra) {
				letras[i].innerText = letra;
				qtdAcertos++;
			}
		}

		const ganhou = qtdAcertos === palavraSorteada.length;

		if (ganhou) {
			alert("Parabéns!! Você ganhou!");
			iniciarPartida();
		}
	} else {
		partesDoCorpo[qtdErros].removeAttribute("hidden");
		qtdErros++;

		const perdeu = qtdErros === partesDoCorpo.length;

		if(perdeu) {
			alert(`Poxa! Você perdeu. A palavra era "${palavraSorteada}".`);
			iniciarPartida();
		}
	}
}

for (botao of botoes) {
	botao.addEventListener("click", event => {
		const botaoClicado = event.target;
		const letra = botaoClicado.innerText;
		chutarLetra(letra);
	})
}

document.addEventListener("keypress", event => {
	const letra = event.key;
	chutarLetra(letra);
})


// Lógica do programa

// Jogo dividido em partidas

// Início da partida
// 		Sortear uma palavra //
// 		Esconder as partes do corpo //
//		Colocar os tracinhos das letras da palavra //

// Loop do jogo
//		Usuário chuta uma letra //
//		Se acertar
//			Revelar todas as ocorrências daquela letra na palavra sorteada; //
//			Se todas as letras já tiverem sido reveladas, o usuário ganha. //
//				Mostrar mensagem de parabéns; //
//				Reiniciar a partida. //
//		Se errar
//			Revelar uma parte do corpo; //
//			Se todas as partes do corpo já tiverem sido reveladas, o usuário perde. //
//				Mostrar mensagem; //
//				Reiniciar a partida. //