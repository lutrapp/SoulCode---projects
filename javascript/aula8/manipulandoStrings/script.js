// Encontre a posição do caractere h na string txt

var txt = "abcdefghijklm";
var pos = txt.indexOf("f");
console.log(pos);

document.getElementById("div1").innerHTML = `O elemento "f" na lista [abcdefghijklm] está na posição ${pos}`;

// Use o método slice para retornar a palavra "bananas".
var txt = "Posso comer bananas o dia todo"
var x = txt.slice(12,19);
console.log(x);

document.getElementById("div2").innerHTML = `Retornar a palavra "bananas" com slice em [Posso comer bananas o dia todo] = ${x}`;

// Use o método String correto para substituir a palavra "Hello" pela palavra "Welcome".
var txt = "Olá, mundo";
txt2 = txt.replace("mundo", "seja bem-vindo");

document.getElementById("div3").innerHTML = `"${txt}" foi substituído com replace para = "${txt2}"`;

// converta o valor de txt para maiúsculas
var txt = "Olá, mundo";
txt2 = txt.toUpperCase();
document.getElementById("div4").innerHTML = `"${txt}" foi convertido para maiúsculo com toUpperCase() = "${txt2}"`;

// converta o valor de txt para minúsculas
var txt = "Olá, mundo";
txt2 = txt.toLowerCase();
document.getElementById("div5").innerHTML = `"${txt}" foi convertido para minúsculo com toLowerCase() = "${txt2}"`;

// Use a propriedade lenghth para alertar sobre o comprimento txt
var txt = "Olá, mundo!";
var x = txt.length;
document.getElementById("div6").innerHTML = `O comprimento da variável txt = "${txt}" é igual a "${x}"`;

// Use caracteres de escape para alertar We are "Vikings"
var txt = "We are \"Vikings\" ";
alert(txt);

// Concatene as duas strings para alertar "Hello Word!"
var str1 = "Olá";
var str2 = "Mundo!";
alert(str1.replace('Olá','\"Hello ')+str2.replace('Mundo', 'World!\"'))