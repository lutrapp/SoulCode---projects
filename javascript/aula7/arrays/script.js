// função para elevar ao quadrado
let numeroAoQuadrado = (x) => Math.pow(x, 2);

// declarei assim pois se quiser mudar o tamanho do array é só mexer na variável quantidade
let quantidade = 101;
let arrayLu = new Array(quantidade);
// busca o elemento para imprimir os resultados
let resultado = document.getElementById("resultado");


for (x = 0; x <= quantidade; x++) {
    arrayLu[x] = numeroAoQuadrado(x);
    // criando um elemento p 
    let elementoP = document.createElement("p");
    // poe cada item do array em p
    elementoP.append(`Posição ${x} = ${arrayLu[x]}`)
    // poe cada p dentro de resultado (que é uma section)
    resultado.append(elementoP);
}