// 3.Crie um script onde o usuário digite um numero e escolha a escala do numero randômico (0 - escolha do usuário) e mostre na tela o resultado absoluto da subtração bem como o numero escolhido pelo usuário e o numero randômico . Controle o usuário não pode digitar texto , e a escala tem que ser maior que 0 não podendo ser também numero real(float)

function subtracao(x, y){
    var resultado = x-y;
    return(resultado);
}

do {
    var numRand = parseInt(prompt("Vamos gerar um número aleatório. Digite um número maior que zero. O número de algarismos é a base que gera o número aleatório"));
    var num = parseFloat(prompt("Agora digite um número qualquer"));
    if(isNaN(num) || isNaN(numRand) || numRand <= 0){
        alert("dados inválidos");
        continue;
    }else{
        var numRandEscala = Math.trunc(Math.random()*numRand);
        document.write("O número randômico na escala " +numRand+ " é: " + numRandEscala);
        document.write("<br />");
        document.write("O número escolhido foi " +num+ ".")
        document.write("<br />");
        document.write("O resultado absoluto da subtração é " + Math.abs(subtracao(numRandEscala,num))+ ".")
    }
    
}while(isNaN(num) || isNaN(numRand) || numRand <= 0);

