
let pessoas = [];

document.getElementById("formulario").addEventListener("submit", function(event) {

    event.preventDefault();

    let idade = Number(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = Number(document.getElementById("opiniao").value);

    if (idade <= 0 || idade > 120 || pessoas.length >= 45) {
        alert("Dados inválidos!");
        return;
    }

    pessoas.push({
        idade: idade,
        sexo: sexo,
        opiniao: opiniao
    });

    document.getElementById("contador").innerHTML =
        "Pessoas cadastradas: " + pessoas.length + "/45";

    document.getElementById("formulario").reset();

});

document.getElementById("verResultados").addEventListener("click", function() {

    if (pessoas.length < 45) {
        alert("É necessário cadastrar as 45 pessoas!");
        return;
    }

    calcular();

});

function calcular() {

    let soma = 0;
    let maior = pessoas[0].idade;
    let menor = pessoas[0].idade;

    let pessimo = 0;
    let otimoBom = 0;

    let mulheres = 0;
    let homens = 0;
    let outros = 0;

    for (let i = 0; i < pessoas.length; i++) {

        soma += pessoas[i].idade;

        if (pessoas[i].idade > maior) {
            maior = pessoas[i].idade;
        }

        if (pessoas[i].idade < menor) {
            menor = pessoas[i].idade;
        }

        if (pessoas[i].opiniao == 1) {
            pessimo++;
        }

        if (pessoas[i].opiniao == 3 || pessoas[i].opiniao == 4) {
            otimoBom++;
        }

        if (pessoas[i].sexo == "feminino") {
            mulheres++;
        } else if (pessoas[i].sexo == "masculino") {
            homens++;
        } else {
            outros++;
        }
    }

    let media = soma / pessoas.length;
    let porcentagem = (otimoBom / pessoas.length) * 100;

    document.getElementById("dadosResultado").innerHTML = `
        <p>Média de idade: ${media.toFixed(2)} anos</p>
        <p>Pessoa mais velha: ${maior} anos</p>
        <p>Pessoa mais nova: ${menor} anos</p>
        <p>Quantidade de péssimos: ${pessimo}</p>
        <p>Porcentagem de ótimo e bom: ${porcentagem.toFixed(2)}%</p>
        <p>Mulheres: ${mulheres}</p>
        <p>Homens: ${homens}</p>
        <p>Outros: ${outros}</p>
    `;

    document.getElementById("resultado").hidden = false;

}
