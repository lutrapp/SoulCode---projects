document.write("Números ímpares de 1 a 500, que são múltiplos de 3:")
document.write("<br />");

var soma = 0;

for(i=1; i <=500; i++){
    if(i % 3 == 0 && i % 2 != 0){
        document.write(i + ", ")
        soma+=i;
    }
}
document.write("<br />");
document.write("<br />");
document.write("A soma desses números é: " + soma);