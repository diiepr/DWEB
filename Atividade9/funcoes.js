document.addEventListener("DOMContentLoaded", () => {

    document.getElementById("btnMaior").addEventListener("click", () => {
        let n1 = Number(prompt('Digite o primeiro número:'));
        let n2 = Number(prompt('Digite o segundo número:'));
        let n3 = Number(prompt('Digite o terceiro número:'));
        
        let maior = Math.max(n1, n2, n3);
        alert(`O maior número é: ${maior}`);
    });

    document.getElementById("btnOrdem").addEventListener("click", () => {
        let n1 = Number(prompt('Digite o primeiro número:'));
        let n2 = Number(prompt('Digite o segundo número:'));
        let n3 = Number(prompt('Digite o terceiro número:'));
        
        let numeros = [n1, n2, n3].sort((a, b) => a - b);
        alert(`Ordem crescente: ${numeros.join(', ')}`);
    });

    document.getElementById("btnPalindromo").addEventListener("click", () => {
        let palavra = prompt('Digite uma palavra:');
        if (!palavra) {
            alert("Nenhuma palavra informada.");
            return;
        }
        
        let limpa = palavra.toLowerCase().replace(/\s+/g, '');
        let reverso = limpa.split('').reverse().join('');
        
        if (limpa === reverso) {
            alert(`A palavra "${palavra}" é um palíndromo!`);
        } else {
            alert(`A palavra "${palavra}" NÃO é um palíndromo.`);
        }
    });

    document.getElementById("btnSubconjunto").addEventListener("click", () => {
        let palavra1 = prompt('Digite a primeira palavra:');
        let palavra2 = prompt('Digite a segunda palavra:');
        
        if (!palavra1 || !palavra2) {
            alert("Preencha ambas as palavras.");
            return;
        }
        
        if (palavra2.includes(palavra1)) {
            alert(`Sim! "${palavra1}" está contida em "${palavra2}".`);
        } else {
            alert(`Não. "${palavra1}" NÃO está contida em "${palavra2}".`);
        }
    });

    document.getElementById("btnDiaSemana").addEventListener("click", () => {
        let dataStr = prompt('Digite uma data (AAAA-MM-DD):');
        if (!dataStr) {
            alert("Data inválida.");
            return;
        }
        
        let data = new Date(dataStr + 'T00:00:00');
        if (isNaN(data.getTime())) {
            alert("Formato de data inválido. Use AAAA-MM-DD.");
            return;
        }
        
        const diasDaSemana = [
            'Domingo', 'Segunda-feira', 'Terça-feira', 
            'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'
        ];
        
        let diaIndex = data.getDay();
        alert(`O dia da semana é: ${diasDaSemana[diaIndex]}`);
    });

});