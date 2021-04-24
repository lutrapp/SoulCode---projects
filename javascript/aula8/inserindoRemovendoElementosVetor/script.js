// Conforme orientações abaixo, realize as seguintes manipulações em um dado vetor S:

// Exiba na tela S= [A,b,B,C,c,1, 2, 3];

let S = Array("A","b","B","C","c", 1, 2, 3);
document.write(`Lista S = ${S.join(", ")} <br /><br />`);
// Insira na primeira posição do vetor o elemento "a" e exiba na tela;  [a,A,b,B,C,c,1, 2, 3];
S.unshift("a");
document.write(`Insira na primeira posição do vetor o elemento "a" <br />`);
document.write(`Lista S = ${S.join(", ")}<br /><br />`);
// Insira na ultima posição do vetor o elemento "4" e exiba na tela;  [a,A,b,B,C,c,1, 2, 3,4];
S.push(4)
document.write(`Insira na última posição do vetor o elemento "4" <br />`);
document.write(`Lista S = ${S.join(", ")}<br /><br />`);
// Remova o elemento "c" do vetor e exiba na tela;  [a,A,b,B,C,1, 2, 3,4];
// primeiro precisa transferir o c para o fim
for(i=5; i<S.length; i++){
    S[i] = S[i+1]
}
document.write(`Remova o elemento "c" do vetor <br />`);
document.write(`Lista S = ${S.join(", ")}<br /><br />`);
console.log("aqui");
console.log(S);
// agora remove o c
S.pop();
// Remova o primeiro elemento do vetor e exiba na tela; [A,b,B,C,1, 2, 3,4];
S.shift(S);
document.write(`Remova o primeiro elemento do vetor <br />`);
document.write(`Lista S = ${S.join(", ")}<br /><br />`);
// Remova o ultimo elemento do vetor e exiba na tela; [A,b,B,C,1, 2, 3];
S.pop();
document.write(`Remova o último elemento do vetor <br />`);
document.write(`Lista S = ${S}<br />`);
