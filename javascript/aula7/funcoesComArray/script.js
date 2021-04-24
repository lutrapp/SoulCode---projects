
var numero = parseInt(prompt("Vamos fazer um vetor de números ímpares. Quantas posições você quer que ele tenha?"));

var vetor = new Array(numero);
// nosso vetor guardará números ímpares, iniciando em 1

for (i = 1; i <= numero; i++) {
    // i - 1 é para não imprimir uma vírgula sozinha na primeira posição
    vetor[i - 1] = " " + (i * 2 - 1);
}

function duplica(lista) {
    var dobro = new Array(numero);
    for (indice in lista) {
        dobro[indice] = " "+ lista[indice] * 2;
    }
    document.getElementById("divDepois").innerHTML = `Depois: [${dobro}]`;
}
document.getElementById("divAntes").innerHTML = `Antes: [${vetor}] `;
duplica(vetor);