// Crie um script que atribua 3 valores as variáveis x,y,z e faça as seguintes comparações:
// x é maior ou igual a z; ok
// x é menor ou igual a z; 
// x é maior que z;
// x é menor que z;
// y é diferente de z;
// y é idêntico a z;
// y é igual a z;


var x = 2;
var y = 4;
var z = 4;
document.write("x = ", x + " / y = ", y + " / z = ", z);
document.write("<br />");
document.write("x é maior ou igual a z?: ");
document.write(x >= z ? "sim" : "não");
document.write("<br />");
document.write("x é menor ou igual a z?: ");
document.write(x <= z ? "sim" : "não");
document.write("<br />");
document.write("x é maior que z?: ");
document.write(x > z ? "sim" : "não");
document.write("<br />");
document.write("x é menor que z?: ");
document.write(x < z ? "sim" : "não");
document.write("<br />");
document.write("y é diferente de z?: ");
document.write(y != z ? "sim" : "não");
document.write("<br />");
document.write("y é idêntico a z?: ");
document.write(y === z ? "sim" : "não");
document.write("<br />");
document.write("y é igual a z?: ");
document.write(y == z ? "sim" : "não");

