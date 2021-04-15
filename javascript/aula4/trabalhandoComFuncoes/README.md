# SoulCode---projects

# javascript

1.Crie uma função que exibe a palavra (ímpar/par) de acordo com o numero digitado pelo usuário.

2.Crie uma função que recebe 2 parâmetros(numéricos) e retorna a divisão deles e mostra na tela.

3.Crie uma função que pede ao usuário para digitar um valor e calcular 5% de desconto
retornando o valor do desconto.

4.Crie uma função que recebe o ano de nascimento da pessoa informando se ela é maior de idade(18 anos acima) ou menor (considere 2021)


* Extra : Imagine o seguinte cenário: Marcelo lhe deve um dinheiro e promete pagar em parcelas mensais de R$ 70; com o intuito de prever qual seria o valor devido após o decorrer de 12 meses, você resolve escrever algumas linhas de código (JavaScript). Levando em consideração que o valor devido por Marcelo era de R$ 1400, qual seria o total devido após a execução do trecho a seguir?

var total_divida = 1400;
function atualizar_divida(valor_recebido){
total_divida -= valor_recebido;
return total_divida;
}
for(var i=0;i<12;i++){
atualizar_divida(70);
}
