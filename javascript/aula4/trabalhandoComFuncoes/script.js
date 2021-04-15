// 1.Crie uma função que exibe a palavra (ímpar/par) de acordo com o numero digitado pelo usuário.

var numero = parseFloat(prompt("Digite um número, vamos verificar se ele é par ou ímpar."))

function verificaPar(x){
    if(x%2){
        return "ímpar";
    }else{
        return "par";
    }
}
document.write("Você digitou " + numero + ". Ele é " + verificaPar(numero));

// 2.Crie uma função que recebe 2 parâmetros(numéricos) e retorna a divisão deles e mostra na tela.

alert("Agora vamos fazer uma divisão.");

var entrada1 = parseFloat(prompt("Digite o primeiro número"));
var entrada2 = parseFloat(prompt("Digite o segundo número"));

function divisao(x,y) {
    return (x/y).toFixed(2);
}

document.write("<br />");
document.write(entrada1 + "/" + entrada2 + " = " + divisao(entrada1, entrada2));

// 3.Crie uma função que pede ao usuário para digitar um valor e calcular 5% de desconto
// retornando o valor do desconto.

var minhaCompra = parseFloat(prompt("Digite o valor da sua compra. Vamos te dar um descontinho de 5%"))

function descontinho(x){
    desconto = x*0.05;
    return desconto.toFixed(2);
}

var minhaCompraComDesconto = (minhaCompra - descontinho(minhaCompra)).toFixed(2);

document.write("<br />");
document.write("O valor de sua compra era " + minhaCompra + ". Seu desconto é de R$" + descontinho(minhaCompra) + ". Você precisa pagar apenas R$" + minhaCompraComDesconto);

// 4.Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021)

var ano = parseInt(prompt("Digite seu ano de nascimento"));
var anoAtual = 2021;

function maiorDeIdade(y){
    if((anoAtual- y) >= 18){
        return "Você é maior de idade";
    }else if(ano > anoAtual){
        return "você ainda não nasceu."    
    }else{
        return "você menor de idade";
    }
}

document.write("<br />");
document.write("Seu ano de nascimento informa que " + maiorDeIdade(ano));
