// Desafio :
// 3.O cardápio de uma lancheria é o seguinte:

// Especificação Código Preço
// Cachorro quente 100 1.20
// Bauru simples 101 1.30
// Bauru com ovo 102 1.50
// Hambúrger 103 1.20
// Cheeseburguer 104 1.30
// Refrigerante 105 1.00


// Implemente um programa que leia o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item.

// valores válidos: 100, 101, 102, 103, 104, 105
var codigo = 104;
var quantidade = 5;

var produto = "";
var preco = 0;
var codigo_valido = false;

switch(codigo){
    case 100:
        preco = 1.20;
        total = preco *quantidade;
        total = total.toFixed(2);
        produto = "Cachorro quente";
        codigo_valido = true;
        break;
    case 101:
        preco = 1.30;
        total = preco *quantidade;
        total = total.toFixed(2);
        produto = "Bauru simples";
        codigo_valido = true;
        break;
    case 102:
        preco = 1.50;
        total = preco *quantidade;
        total = total.toFixed(2);
        produto = "Bauru com ovo";
        codigo_valido = true;
        break;
    case 103:
        preco = 1.20;
        total = preco *quantidade;
        total = total.toFixed(2);
        produto = "Hamburguer";
        codigo_valido = true;
        break;
    case 104:
        preco = 1.30;
        total = preco *quantidade;
        total = total.toFixed(2);
        produto = "Cheeseburguer";
        codigo_valido = true;
        break;
    case 105:
        preco = 1.00;
        total = preco *quantidade;
        total = total.toFixed(2);
        produto = "Refrigerante";
        codigo_valido = true;
        break;
    default:
        document.write("código de produto inválido.");
}
if (codigo_valido){
    document.write("Seu pedido é: " + produto + "<br />" + "Quantidade: " + quantidade + "<br />" + "O valor de sua compra é: R$ " + total);
}