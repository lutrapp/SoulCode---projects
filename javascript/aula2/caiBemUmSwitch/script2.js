// 2.Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A. 10%
// B. 15%
// C. 20%
// Faça um programa que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário.

var salario = 5000.00;
// você pode alterar para o plano A, B ou C. 
var plano = "B";
var salario_reajustado = salario;
var plano_valido = false;

switch(plano){
    case "A":
        salario_reajustado *= 1.1;
        plano_valido = true;
        break;
    case "B":
        salario_reajustado *= 1.15;
        plano_valido = true;
        break;
    case "C":
        salario_reajustado *= 1.2;
        plano_valido = true;
        break;
    default:
        document.write("Os planos aceitos para consulta são: A, B ou C.");
}
if (plano_valido){
    document.write("O plano do funcionário é o plano " + plano + ". Seu salário foi reajustado de R$ " + salario + " para R$ " + salario_reajustado + ".");
}