numero = parseInt(prompt("Digite um número para ver o seu fatorial"));

var fatorial = numero;
// i > 1 pois não há necessidade de multiplicar por 1
for(i = numero - 1; i > 1; i--){
    fatorial *= i;
}
document.write("O fatorial de " + numero + " é igual a " + fatorial);
