numeros = [];
var i = 0;
var a = 0;
var intervalo1 = 0;
var intervalo2 = 0;
var intervalo3 = 0;
var intervalo4 = 0;

alert("Você digitará 10 números. Clique em ok para começar.");

do {
    auxiliar = parseFloat(prompt("Digite um número: "));
    // verificando se o número é negativo
    if(auxiliar < 0){
        alert("Digitou número negativo");
    }else if(auxiliar>100){
        alert("Aceita apenas números de 0 a 100");
    }else{
        // aqui vai registrar o número positivo
        numeros[i] = auxiliar;
        i++;
    }
}while(i<10);

document.write("Sua lista de números: " + numeros);


for (a = 0; a < 10; a++){
    if(numeros[a] >= 0 && numeros[a] < 26){
        intervalo1++;
    console.log("0-26:"+numeros[a]);

    }else if(numeros[a] >= 26 && numeros[a] < 51){
        intervalo2++;
    console.log("26-51:"+numeros[a]);

    }else if(numeros[a] >= 51 && numeros[a] < 76){
        intervalo3++;
    console.log("51-76:"+numeros[a]);

    }else if(numeros[a] >= 76 && numeros[a] < 100){
        intervalo4++;
    console.log("76-100:"+numeros[a]);
    }
} 
document.write("<br />")  
document.write("intervalo1 (0-26): " + intervalo1);    
document.write("<br />")  
document.write("intervalo2 (26-51): " + intervalo2); 
document.write("<br />")  
document.write("intervalo3 (51-76): " + intervalo3);
document.write("<br />")  
document.write("intervalo4 (76-100): " + intervalo4);
