// Faça um script que funcione como uma calculadora, na qual você irá ler 2 valores e escolher qual operação deseja executar e exiba o resultado na tela.

document.write("Calculadora SoulCode");
document.write("<div />");

valor1 = 4;
valor2 = 5;

// digite entre aspas soma, subtração, divisão, multiplicação
operacao = "multiplicação";

switch(operacao){
    case("soma"):
    resultado = valor1 + valor2;
    document.write(valor1 + " + " + valor2 + " = " + resultado);
    break;
    case("subtração"):
    resultado = valor1 - valor2;
    document.write(valor1 + " - " + valor2 + " = " + resultado);
    break;
    case("divisão"):
    resultado = valor1 / valor2;
    document.write(valor1 + " / " + valor2 + " = " + resultado);
    break;
    case("multiplicação"):
    resultado = valor1 * valor2;
    document.write(valor1 + " * " + valor2 + " = " + resultado);
}