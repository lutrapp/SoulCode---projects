var i = 0;
var lista = [];
var agrupador = 0.0;
var media = 0;
var auxiliar = 0.0;
var contPositivos = 0;
var contNegativos = 0;

numero = parseInt(prompt("Vamos fazer uma média. Quantos valores você quer considerar nessa média?"));

do {
    auxiliar = parseFloat(prompt("Digite o número"));
    if(auxiliar < 0){
        contNegativos+=1;
    }else{
        contPositivos+=1;
    }
    i++;
    agrupador += auxiliar;
    lista[i] = auxiliar;
}while(i<numero);

media = agrupador/numero;

document.write("lista: " + lista);
document.write("<br>");
document.write("quantidade de números positivos: " + contPositivos);
document.write("<br>");
document.write("quantidade de números negativos: " + contNegativos);
document.write("<br>");
document.write("média: " + media);
