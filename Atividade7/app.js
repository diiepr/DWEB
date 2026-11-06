
let opcoes = ["pedra", "papel", "tesoura"];

function jogar(jogador) {

    let numero = Math.floor(Math.random() * 3);
    let computador = opcoes[numero];

    let emojis = {
        pedra: "✊",
        papel: "✋",
        tesoura: "✌️"
    };

    document.getElementById("escolhaJogador").textContent = emojis[jogador];

    document.getElementById("escolhaComputador").textContent = emojis[computador];

    let mensagem = "";

    if (jogador === computador) {

        mensagem = "🤝 Empate!";

    } else if (
        (jogador === "pedra" && computador === "tesoura") ||
        (jogador === "tesoura" && computador === "papel") ||
        (jogador === "papel" && computador === "pedra")
    ) {

        mensagem = "🏆 Você venceu!";

    } else {

        mensagem = "💻 O computador venceu!";

    }

    document.getElementById("mensagem").textContent = mensagem;

    document.getElementById("detalhes").textContent =
        "Você: " + jogador + " | Computador: " + computador;
}

function reiniciar() {

    document.getElementById("escolhaJogador").textContent = "❔";

    document.getElementById("escolhaComputador").textContent = "❔";

    document.getElementById("mensagem").textContent = "Boa sorte!";

    document.getElementById("detalhes").textContent =
        "Escolha uma opção para começar.";
}
