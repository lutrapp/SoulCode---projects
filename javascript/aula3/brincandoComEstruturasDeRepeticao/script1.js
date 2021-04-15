// Desenvolver um algoritmo que leia a altura de 15 pessoas. Este programa deverá calcular e
// mostrar :
// a. A menor altura do grupo; 
// b. A maior altura do grupo; 

alert("Você irá digitar a altura de 15 pessoas. Clique em ok para começar")
var auxiliar = 0.0;
var alturas = [];
var alturaMenor = 0;
var alturaMaior = 0;
i = 0;

do {
   
    auxiliar = parseFloat(prompt("["+ (i+1) + " / 15] - Digite a altura (ex: 1.58)"));
    alturas[i] = auxiliar;
    if(i == 0){
        alturaMaior = auxiliar;
        alturaMenor = auxiliar;
    }
    if(auxiliar > alturaMaior){
        alturaMaior = auxiliar;
    }if(auxiliar < alturaMenor){
        alturaMenor = auxiliar;
    }
    i++;
}while(i<15);

document.write("mais alto: " + alturaMaior);
document.write("<br>");
document.write("mais baixo: " + alturaMenor);
document.write("<br>");
document.write("alturas digitadas: " + alturas);