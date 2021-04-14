
// início script IMC
peso = 53;
altura = 1.69;

imc = peso/(altura**2)
imc = imc.toFixed(1)
document.write("Seu IMC é: ", imc)
document.write("<br />")

if (imc < 18.5){
    document.write("Você está abaixo do peso.");
}else if (imc >= 18.5 && imc <= 25) {
    document.write("Seu peso está normal.");
}else if (imc > 25 && imc <= 30){
    document.write("Você está acima do peso.");
}else{
    document.write("Você está obeso.")
}
// fim script IMC
// início script números ordenados
n1 = 3;
n2 = 4;
n3 = 1;
n4 = 2;

var primeiro;
var segundo;
var terceiro;
var quarto;

document.write("<br />");
document.write("A sequência de números original é: " + n1 + " | " + n2 + " | " + n3 + " | " + n4);
document.write("<br />");


// testando se n1 é o maior
if (n1 > n2 && n1 > n3 && n1 > n4){
    primeiro = n1;
    if (n2 > n3 && n2 > n4){
        segundo = n2;
        if(n3 > n4){
            terceiro = n3;
            quarto = n4;
        }else{
            terceiro = n4;
            quarto = n3;
        }
    }else if (n3 > n2 && n3 > n4){
        segundo= n3;
        if(n2 > n4){
            terceiro = n2;
            quarto = n4;
        }else{
            terceiro = n4;
            quarto = n2;
        }
    }else {
        segundo = n4;
        if(n2 > n3){
            terceiro = n2;
            quarto = n3;
        }else{
            terceiro = n3;
            quarto = n2;
        }
    }
    document.write("Ordenados em ordem crescente: " + quarto + " | " + terceiro + " | " + segundo + " | " + primeiro);
    document.write("<br />")
    document.write("Ordenados em ordem decrescente: " + primeiro + " | " + segundo + " | " + terceiro + " | " + quarto);

    // teste se n2 é o maior
}else if(n2 > n1 && n2 > n3 && n2 > n4){
    primeiro = n2;
    if (n1 > n3 && n1 > n4){
        segundo = n1;
        if(n3 > n4){
            terceiro = n3;
            quarto = n4;
        }else{
            terceiro = n4;
            quarto = n3;
        }
    }else if (n3 > n1 && n3 > n4){
        segundo= n3;
        if(n1 > n4){
            terceiro = n1;
            quarto = n4;
        }else{
            terceiro = n4;
            quarto = n1;
        }
    }else {
        segundo = n4;
        if(n1 > n3){
            terceiro = n1;
            quarto = n3;
        }else{
            terceiro = n3;
            quarto = n1;
        }
    }
    document.write("Ordenados em ordem crescente: " + quarto + " | " + terceiro + " | " + segundo + " | " + primeiro);
    document.write("<br />")
    document.write("Ordenados em ordem decrescente: " + primeiro + " | " + segundo + " | " + terceiro + " | " + quarto);

    // teste se n3 é o maior
}else if(n3 > n1 && n3 > n2 && n3 > n4){
    primeiro = n3;
    if (n2 > n1 && n2 > n4){
        segundo = n2;
        if(n1 > n4){
            terceiro = n1;
            quarto = n4;
        }else{
            terceiro = n4;
            quarto = n1;
        }
    }else if (n1 > n2 && n1 > n4){
        segundo= n1;
        if(n2 > n4){
            terceiro = n2;
            quarto = n4;
        }else{
            terceiro = n4;
            quarto = n2;
        }
    }else {
        segundo = n4;
        if(n1 > n2){
            terceiro = n1;
            quarto = n2;
        }else{
            terceiro = n2;
            quarto = n1;
        }
    }
    document.write("Ordenados em ordem crescente: " + quarto + " | " + terceiro + " | " + segundo + " | " + primeiro);
    document.write("<br />")
    document.write("Ordenados em ordem decrescente: " + primeiro + " | " + segundo + " | " + terceiro + " | " + quarto);
    // teste se o n4 é o maior
}else{
    primeiro = n4;
    if(n1 > n2 && n1 > n3){
        segundo = n1;
        if(n2 > n3){
            terceiro = n2;
            quarto = n3;
        }else{
            terceiro = n3;
            quarto= n2;
        }
    }else if(n2 > n1 && n2 > n3){
        segundo = n2;
        if(n1 > n3){
            terceiro = n1;
            quarto = n3;
        }else {
            terceiro = n3;
            quarto = n1;
        }
    }else{
        segundo = n3;
        if(n1 > n2){
            terceiro = n1;
            quarto = n2;
        }else {
            terceiro = n2;
            quarto = n1;
        }
    }
    document.write("Ordenados em ordem crescente: " + quarto + " | " + terceiro + " | " + segundo + " | " + primeiro);
    document.write("<br />")
    document.write("Ordenados em ordem decrescente: " + primeiro + " | " + segundo + " | " + terceiro + " | " + quarto);
}

   