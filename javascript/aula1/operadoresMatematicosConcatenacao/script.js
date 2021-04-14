var idade = 39;
idade +=15;
var item1 = idade;
//imprime item1
document.write(idade);
document.write("<br/>");
idade *=75;
var item2 = idade;
//imprime item2
document.write(idade);
document.write("<br/>");
var idadeIrmaos = 43 + 42 + 35;
var idadeLu = 39;
var auxiliar = idadeIrmaos * idadeLu;
auxiliar /= item1;
var item3 = auxiliar;
//imprime item3
document.write(auxiliar);
document.write("<br/>");
var rendaFamiliar = 14000;
rendaFamiliar /=5;
rendaFamiliar *=30;
// imprime item4
document.write(rendaFamiliar);
document.write("<br/>");
document.write("<br/>");
var item4 = rendaFamiliar;


document.write("A soma de minha idade com minha filha mais velha é " + item1 + ". Se eu pegar a  soma da idade de minha filha e a minha idade, e multiplicar com a idade de meu pai, o resultado fica " + item2 + ".");
document.write("<br />");
document.write("<br />");
document.write("A soma das idades dos meus irmãos: Cris, Luiz e Eliane multiplicado pela minha idade, e dividido pelo resultado da soma da idade de minha filha e eu, fica " + item3 + ". A renda familiar per capita multiplicada por 30 é R$ " + item4 + ",00.");


