// 2.Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021) .Controle : o usuário não pode digitar idade negativa ou acima de 130 anos por exemplo

function maiorDeIdade(ano){
    if(anoAtual - ano >= 18){
        document.write("Maior de idade");
    }else{
        document.write("Menor de idade");
    }
}

var anoAtual = 2021;


do {
    var ano = parseInt(prompt("Digite o ano de nascimento"));
    if (ano > anoAtual || ano < (anoAtual - 130) || isNaN(ano)) {
        alert("dados inválidos");
        continue;
    }
    document.write(anoAtual-ano+ " anos - ");
    maiorDeIdade(ano);

}while(ano > anoAtual || ano < (anoAtual - 130) || isNaN(ano));




