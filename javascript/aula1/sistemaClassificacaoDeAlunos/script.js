// Uma escola está precisando criar um sistema que exiba na tela a situação dos alunos com relação a aprovação. Crie um script com os seguintes criterios: 
// 1- os alunos tem 03 notas;
// 2 - Você deverá fazer a média entre as três notas;
// 3 - Se a media for maior que 7 exiba na tela "aprovado";
// 4- Se a media for menor que 7 exiba na tela "em recuperação";
// 5 - Se media for menor que 4 "reprovado".
// 6 - Atribua nome aos alunos e inclua junto a exibição da classificação.

// Obs.: Faça este processo para 03 alunos e enquadre cada um nas situações acima..


var alunoA = "Eros";
var alunoB = "Hercules"
var alunoC = "Sócrates"
// notas alunoA
var nota1A = 9.0;
var nota2A = 7.5;
var nota3A = 5.0;
// notas alunoB
var nota1B = 4.0;
var nota2B = 6.4;
var nota3B = 5.7;
// notas alunoC
var nota1C = 3.0;
var nota2C = 5.3;
var nota3C = 2.8;
// médias
var mediaA = (nota1A + nota2A + nota3A)/3;
var mediaB = (nota1B + nota2B + nota3B)/3;
var mediaC = (nota1C + nota2C + nota3C)/3;
// arrumando para duas casas decimais
mediaA = mediaA.toFixed(2);
mediaB = mediaB.toFixed(2);
mediaC = mediaC.toFixed(2);

document.write("Situação dos alunos com relação a aprovação");
document.write("<br />")
document.write("<br />")

// alunoA
document.write("Resultado final do aluno " + alunoA + ": ");
if (mediaA >= 7){
    document.write("aprovado");
}else if (mediaA < 7 && mediaA > 4){
    document.write("em recuperação")
}else {
    document.write("reprovado")
}
document.write(". Sua média foi igual a ", mediaA)
document.write("<br />")

// alunoB
document.write("Resultado final do aluno " + alunoB + ": ")
if (mediaB >= 7){
    document.write("aprovado");
}else if (mediaB < 7 && mediaB > 4){
    document.write("em recuperação")
}else {
    document.write("reprovado")
}
document.write(". Sua média foi igual a ", mediaB)
document.write("<br />")

// alunoC
document.write("Resultado final do aluno " + alunoC + ": ")
if (mediaC >= 7){
    document.write("aprovado");
}else if (mediaC < 7 && mediaC > 4){
    document.write("em recuperação")
}else {
    document.write("reprovado")
}
document.write(". Sua média foi igual a ", mediaC)








document.write("x = ", x + " / y = ", y + " / z = ", z);
document.write("<br />");
document.write("x é maior ou igual a z?: ");
document.write(x >= z ? "sim" : "não");
document.write("<br />");
document.write("x é menor ou igual a z?: ");
document.write(x <= z ? "sim" : "não");
document.write("<br />");
document.write("x é maior que z?: ");
document.write(x > z ? "sim" : "não");
document.write("<br />");
document.write("x é menor que z?: ");
document.write(x < z ? "sim" : "não");
document.write("<br />");
document.write("y é diferente de z?: ");
document.write(y != z ? "sim" : "não");
document.write("<br />");
document.write("y é idêntico a z?: ");
document.write(y === z ? "sim" : "não");
document.write("<br />");
document.write("y é igual a z?: ");
document.write(y == z ? "sim" : "não");

