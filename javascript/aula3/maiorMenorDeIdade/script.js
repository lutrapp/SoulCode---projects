var i = 0;
var maior = 0;
var menor = 0;
var idade = [];
invalido = 0;

alert("Você digitará 10 idades para verificarmos quantos são maiores de idade")

do {   
    idade[i] = parseInt(prompt("Digite uma idade: "));
    if(idade[i] >= 18 && idade[i] < 120){
        maior++;
        // uma validação para negativos, maiores de 120 e entrada vazia.
    }else if(idade[i] <= 0){
        invalido++;
    }else if(idade[i] >= 120){
        invalido++;
    }else if(isNaN(idade[i])){
        invalido++;
    }else{
        menor++;
    } i++;
}while(i<10);

document.write("Idades digitadas: " + idade + " ");
document.write("<br />");
document.write("Maiores de idade: " + maior);
document.write("<br />");
document.write("Menores de idade: " + menor);

if (invalido > 0){
    document.write("<br />")
    document.write("Foram digitados " + invalido + " números inválidos.")
}
// obs: entradas vazias vão ser impressas como Nan, mas entram como inválidas



//---------- A SEGUIR CÓDIGO SEM ARRAY, COMENTADO

// var i = 0;
// var maior = 0;
// var menor = 0;
// do {
//     i++;
//     idade = parseInt(prompt("Digite uma idade: "));
//     if(idade >= 18){
//         maior++;
//     }else{
//         menor++
//     }
// }while(i<10);
// document.write("Maiores de 18: " + maior);
// document.write("<br />");
// document.write("Menores de 18: " + menor);

//---------- A SEGUIR CÓDIGO COM MUITA REPETIÇÃO, COMENTADO

// idade1 = parseInt(prompt("Digite uma idade: ")); 
// idade2 = parseInt(prompt("Digite uma idade: ")); 
// idade3 = parseInt(prompt("Digite uma idade: ")); 
// idade4 = parseInt(prompt("Digite uma idade: ")); 
// idade5 = parseInt(prompt("Digite uma idade: ")); 
// idade6 = parseInt(prompt("Digite uma idade: ")); 
// idade7 = parseInt(prompt("Digite uma idade: ")); 
// idade8 = parseInt(prompt("Digite uma idade: ")); 
// idade9 = parseInt(prompt("Digite uma idade: ")); 
// idade10 = parseInt(prompt("Digite uma idade: ")); 
// maior = 0;
// menor = 0;

// if (idade1 >= 18){
//     maior +=1;
// }else{
//     menor +=1;
// }
// if(idade2 >= 18){
//     maior +=1;
// }else{
//     menor +=1;
// }
// if(idade3 >= 18){
//     maior +=1
// }else{
//     menor+=1
// }
// if(idade4 >= 18){
//     maior +=1;
// }else{
//     menor+=1
// }
// if(idade5 >= 18){
//     maior +=1;
// }else{
//     menor+=1
// }
// if(idade6 >= 18){
//     maior +=1;
// }else{
//     menor+=1
// }
// if(idade7 >= 18){
//     maior +=1;
// }else{
//     menor+=1
// }
// if(idade8 >= 18){
//     maior +=1;
// }else{
//     menor+=1
// }
// if(idade9 >= 18){
//     maior +=1;
// }else{
//     menor+=1
// }
// if(idade10 >= 18){
//     maior +=1;
// }else{
//     menor+=1
// } 
// document.write("maiores de 18: " + maior);
// document.write("<br />");
// document.write("menores de 18: " + menor);

