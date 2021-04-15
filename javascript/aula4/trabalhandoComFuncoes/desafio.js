var total_divida = 1400;
var deve = 0;

function atualizar_divida(valor_recebido){
    total_divida -= valor_recebido;
    return total_divida;
}

// atribuindo uma varível "deve" para saber o valor da dívida atualizada após esses sucessivos pagamentos
for(var i=0;i<12;i++){
    deve = atualizar_divida(70);
}

document.write("O Valor devido após esses pagamentos ainda seria de R$" + deve);


