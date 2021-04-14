// Faça um script que leia três números inteiros e mostre o maior deles.

numeros = [2021, 1981, 2003]


if (numeros[0] > numeros[1] && numeros[0] > numeros[2]) {
    document.write("O maior número é: " + numeros[0]);
} else if (numeros[1] > numeros[0] && numeros[1] > numeros[2]) {
    document.write("O maior número é: " + numeros[1]);
} else {
    document.write("O maior número é: " + numeros[2]);
}