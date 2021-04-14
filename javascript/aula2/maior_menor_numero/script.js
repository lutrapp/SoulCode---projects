// Faça um script que leia três números inteiros, em seguida mostre o maior e o menor deles.

num = [99, 512, 44]



if (num[0] > num[1] && num[0] > num[2]) {
    document.write ("O maior número é: " + num[0])
} else if (num[1] > num[0] && num[1] > num[2]) {
    document.write ("O maior número é: " + num[1])
} else {
    document.write ("O maior número é: " + num[2])
}

document.write("<br />")

if (num[0] < num[1] && num[0] < num[2]) {
    document.write ("O menor número é: " + num[0])
} else if (num[1] < num[0] && num[1] < num[2]) {
    document.write ("O menor número é: " + num[1])
} else {
    document.write ("O menor número é: " + num[2])
}

document.write("<br />")

document.write("As opções das lista eram: " + num[0] + " | "  + num[1] + " | "   + num[2] + " | "  )