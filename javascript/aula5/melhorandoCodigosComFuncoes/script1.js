function divide(x, y){
    if(isNaN(x) || isNaN(y)){
        alert("Digite apenas números");
    }else{
        var maior = Math.max(x, y);
        var menor = Math.min(x,y);
        while(menor == 0){
            alert("Número inválido");
            var aux = prompt("Digite outro número");
            if(aux > maior){
                menor = maior;
                maior = aux;
            }else{
                menor = aux;
            }
        }
    }
    var resultado = maior/menor;
    document.write("O resultado da divisão de " +maior+ " por " +menor+ " é: " +Math.round(resultado));
}

// chamando a função
num1 = (prompt("Digite um número para dividir"));
num2 = (prompt("Digite outro número para dividir"));
divide(num1,num2);


