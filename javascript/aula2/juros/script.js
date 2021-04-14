var valor_i = 200.75;
// meses de atraso, de 0 a 5;
var atraso = 3;
montante = valor_i;
juros = (valor_i * atraso/100);
montante += juros;
juros = juros.toFixed(2);
montante = montante.toFixed(2);

switch(atraso){
    case 0:
        document.write("Sua dívida é de " + valor_i + ". Você não está em atraso com os pagamentos");
        break;
    case 1:
        document.write("Dívida inicial: R$ " + valor_i + ". Você está com " + atraso + " mês de atraso. Juros aplicados: R$ " + juros);
        document.write ("<br />" + "Dívida atual: R$ " + montante)
        break;
    case 2:
        document.write("Dívida inicial: R$ " + valor_i + ". Você está com " + atraso + " meses de atraso. Juros aplicados: R$ " + juros);
        document.write ("<br />" + "Dívida atual: R$ " + montante)
        break;
    case 3:
        document.write("Dívida inicial: R$ " + valor_i + ". Você está com " + atraso + " meses de atraso. Juros aplicados: R$ " + juros);
        document.write ("<br />" + "Dívida atual: R$ " + montante)
        break;
    case 4:
        document.write("Dívida inicial: R$ " + valor_i + ". Você está com " + atraso + " meses de atraso. Juros aplicados: R$ " + juros);
        document.write ("<br />" + "Dívida atual: R$ " + montante)
        break;
    case 5:
        document.write("Dívida inicial: R$ " + valor_i + ". Você está com " + atraso + " meses de atraso. Juros aplicados: R$ " + juros);
        document.write ("<br />" + "Dívida atual: R$ " + montante)
        break;
    default:
        document.write("Você não pode atrasar " + atraso + " meses. Procure o banco para renegociar.")
}