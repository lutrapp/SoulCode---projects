// Crie um script que receba uma quantidade N pelo prompt, que determina a quantidade valores digitados pelo usuario. Em seguida utilize o metodo sort e reverse para ordenar em ordem crescente decrescente e exiba na tela as 03 formas do array(ordem digitada, ordem crescente e ordem decrescente).

var qtde = parseInt(prompt("quantos itens você quer em sua lista?"))
var lista = Array();
for (var i = 0; i < qtde; i++) {
    lista.push(prompt(`Digite item ${i+1} da lista`));
}
document.getElementById("div1").innerHTML = `A lista digitada foi: ${lista.join(", ")}`;

listaOrdenada = (lista.sort((a, b) => {
    if (a < b)
        return -1;
    else if (a > b)
        return 1
}));

document.getElementById("div2").innerHTML = `A lista em ordem crescente fica assim: ${(listaOrdenada.sort((a, b) => {return a - b})).join(", ")}`

listaDecrescente = listaOrdenada.reverse();
document.getElementById("div3").innerHTML = `A lista em ordem decrescente fica assim: ${listaDecrescente.join(", ")}`;