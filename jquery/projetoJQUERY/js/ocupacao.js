//DATA
var d = new Date()

function datasite (data = new Date()) {
    var dia = data.getDate()
    var mes = data.getMonth()+1 //adiciona +1 pra contagem do mês começar a partir de 1 e não 0
    var ano = data.getFullYear()

    if(dia.toString().length == 1) dia = '0' +dia //se o dia tiver 1 caractere, adicione 0 na frente
    if(mes.toString().length == 1) mes = '0' +mes

    return dia+'/'+mes +'/'+ano     
}

document.querySelector("#datadata").innerHTML = datasite() //retornando valor no HTML

//HORA
function horasite (data = new Date()){
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    
    
    if(hora.toString().length == 1) hora = '0' +hora //se a hora tiver 1 caractere, adicione 0 na frente
    if(minuto.toString().length == 1) minuto = '0' +minuto
    if(segundo.toString().length == 1) segundo = '0' +segundo

    //para atualizar a cada meio segundo(500)
    setTimeout('horasite()', 500);

    var horaAtualizada = hora+':'+minuto+':'+segundo;
    document.querySelector("#horahora").innerHTML = horaAtualizada;
   
}
// chamando a função
horasite()

//ACESSIBILIDADE
// VARIÁVEIS QUE SERÃO MODIFICADAS COM A LETRA MAIOR 
//menu
var paragrafo = document.getElementsByTagName('li')[0]
var paragrafo1 = document.getElementsByTagName('li')[1]
var paragrafo2 = document.getElementsByTagName('li')[2]
var paragrafo3 = document.getElementsByTagName('li')[3]
var paragrafo4 = document.getElementsByTagName('li')[4]
var paragrafo5 = document.getElementsByTagName('li')[5]
var paragrafo6 = document.getElementsByTagName('button')[0]
var paragrafo7 = document.getElementsByTagName('li')[6]
var paragrafo8 = document.getElementsByTagName('li')[7]
var paragrafo9 = document.getElementsByTagName('li')[8]
var acessibilidade2 = document.getElementById('aumentar')

// FUNÇÃO PARA MODIFICAR AS VARIÁVEIS (A MODIFICAÇÃO É FEITA NO CSS)
acessibilidade2.addEventListener('click', function(){
    paragrafo.classList.toggle('mais')
    paragrafo1.classList.toggle('mais')
    paragrafo2.classList.toggle('mais')
    paragrafo3.classList.toggle('mais')
    paragrafo4.classList.toggle('mais')
    paragrafo5.classList.toggle('mais')
    paragrafo6.classList.toggle('mais')
    paragrafo7.classList.toggle('mais')
    paragrafo8.classList.toggle('mais')
    
})



// taxa de ocupaçao
// fase1(vermelha): acima de 80%
// fase2(laranja): entre 70 e 80%
// fase3(amarela): entre 60 e 70%
// fase4(verde): abaixo de 60%
// fase5(azul): outros critérios

// **********
var nome = $("input#nome").val();

// UTILIZAÇÃO DO TOGGLE
// aciona o slideToggle com informativo da fase azul
$(document).ready(function () {
    // botao fase azul
    $("#faseAzul1").click(function () {
        $("#faseAzul2").css({
            "padding": "1% 0 1% 0",
            "margin": "1%"
        }).slideToggle("slow");
    });
    $("#criterios1").click(function () {
        $("#criterios2").css({
            "padding": "1% 0 1% 0",
            "margin": "1%"
        }).slideToggle("slow");
    });
    $("#taxaUti, #taxaEnfermaria").click(function () {
        $("input").css("visibility", "visible");
        // para os parágrafos sumirem e dar lugar ao input
        $("#taxaUti p, #taxaEnfermaria p").slideUp(1500);
        $("#taxaUti p, #taxaEnfermaria p").slideUp(1500);
    });
    $("#btnVerifica").click(function () {
        var taxaUti = $("#valorUti").val();
        var taxaEnfermaria = $("#valorEnfermaria").val();
        // pesos considerados:
        // enfermaria: peso 4/ uti:peso 6
        if (taxaUti == "" || taxaEnfermaria == "" || taxaUti > 100 || taxaEnfermaria > 100 || taxaUti < 0 || taxaEnfermaria < 0) {
            alert("Digite valores entre 0 e 100")
        } else {
            var taxaMedia = (parseInt(taxaUti) * 6 + parseInt(taxaEnfermaria) * 4) / 10;
            console.log(taxaMedia);

            $("#taxaUti, #taxaEnfermaria").css("visibility", "hidden");
            // BOTAO NOVO QUE SURGE ENQUANTO OS OUTROS SOMEM    
            $("#btnNovosDados").css("display", "block");
            $("input").css("visibility", "hidden");
            $("#btnVerifica").css("display", "none");

            // MOSTRA A MENSAGEM NA SPAN INFO com display block

            $("span#info").css("display", "block").text(`Você informou a taxa de ocupação de UTI: ${taxaUti} e Enfermaria: ${taxaEnfermaria}, resultando na média: ${taxaMedia}%`);
            if (taxaMedia > 80) {
                // fase1 - vermelha
                $("#taxaTexto").css({
                    // modifica as cores de fundo da div para vermelho
                    "background": "#e62e2d",
                    "color": "#f8f8f8",
                });
                $("#taxas").hide();
                // seria usado mas acabou sendo removido
                $("#useMascara").css("visibility", "visible");
                // table
                // está buscando o primeiro elemento th e td na tabela
                $("tr th:nth-child(1)").css("visibility", "visible");
                $("tr td:nth-child(1)").css("visibility", "visible");
                // criando um elemento h3 antes da descrição dos setores
                $("tr th").prepend('<h3>Fase Vermelha - Alerta máximo</h3>').css({
                    "color": "#e62e2d",
                    "text-shadow": "1px 1px 1px black"
                });
                // constroi a segunda coluna ao lado das colunas de descrição
                $("#linha1").append('<td class="cross">&cross;</td>');
                $("#linha2").append('<td class="cross">&cross;</td>');
                $("#linha3").append('<td class="cross">&cross;</td>');
                $("#linha4").append('<td class="cross">&cross;</td>');
                $("#linha5").append('<td class="cross">&cross;</td>');
                $("#linha6").append('<td class="cross">&cross;</td>');
                $("#linha7").append('<td class="cross">&cross;</td>');
                $("#linha8").append('<td class="cross">&cross;</td>');
                $("#linha9").append('<td class="cross">&cross;</td>');
                $("#linha10").append('<td class="cross">&cross;</td>');
                $("#linha11").append('<td class="cross">&cross;</td>');
                $("#linha12").append('<td class="aDefinir">a ser definido</td>');
                $("#linha13").append('<td class="aDefinir">a ser definido</td>');
            } else if (taxaMedia > 70 && taxaMedia <= 80) {
                // fase2 - laranja
                $("#taxaTexto").css({
                    "background": "#f2bf11"
                });
                $("#taxas").hide();
                $("#useMascara").css("visibility", "visible");
                // table
                $("tr th:nth-child(1)").css("visibility", "visible");
                $("tr td:nth-child(1)").css("visibility", "visible");
                // criando um elemento h3 antes da descrição dos setores
                $("tr th").prepend('<h3>Fase Laranja - Controle</h3>').css({
                    "color": "#f2bf11",
                    "text-shadow": "1px 1px 1px black"
                });
                $("#linha1").append('<td class="cross">&cross;</td>');
                $("#linha2").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha3").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha4").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha5").append('<td class="cross">&cross;</td>');
                $("#linha6").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha7").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha8").append('<td class="cross">&cross;</td>');
                $("#linha9").append('<td class="cross">&cross;</td>');
                $("#linha10").append('<td class="cross">&cross;</td>');
                $("#linha11").append('<td class="cross">&cross;</td>');
                $("#linha12").append('<td class="aDefinir">a ser definido</td>');
                $("#linha13").append('<td class="aDefinir">a ser definido</td>');

            } else if (taxaMedia > 60 && taxaMedia <= 70) {
                // fase3 - amarela
                $("#taxaTexto").css({
                    "background": "#fdff00",
                });
                $("#taxas").hide();
                $("#useMascara").css("visibility", "visible");
                // table
                $("tr th:nth-child(1)").css("visibility", "visible");
                $("tr td:nth-child(1)").css("visibility", "visible");
                // criando um elemento h3 antes da descrição dos setores
                $("tr th").prepend('<h3>Fase Amarela Flexibilização</h3>').css({
                    "color": "#fdff00",
                    "text-shadow": "1px 1px 1px black"
                });
                $("#linha1").append('<td class="cross">&cross;</td>');
                $("#linha2").append('<td class="check">&check;</td>');
                $("#linha3").append('<td class="check">&check;</td>');
                $("#linha4").append('<td class="check">&check;</td>');
                $("#linha5").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha6").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha7").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha8").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha9").append('<td class="cross">&cross;</td>');
                $("#linha10").append('<td class="cross">&cross;</td>');
                $("#linha11").append('<td class="cross">&cross;</td>');
                $("#linha12").append('<td class="aDefinir">a ser definido</td>');
                $("#linha13").append('<td class="aDefinir">a ser definido</td>');

            } else {
                // fase4 - verde
                $("#taxaTexto").css({
                    "background": "#54b151",
                    "color": "#f8f8f8"
                });
                $("#taxas").hide();
                $("#useMascara").css("visibility", "visible");
                // table
                $("tr th:nth-child(1)").css("visibility", "visible");
                $("tr td:nth-child(1)").css("visibility", "visible");
                // criando um elemento h3 antes da descrição dos setores
                $("tr th").prepend('<h3>Fase Verde - Abertura Parcial</h3>').css({
                    "color": "#54b151",
                    "text-shadow": "1px 1px 1px black"
                });
                $("#linha1").append('<td class="cross">&cross;</td>');
                $("#linha2").append('<td class="check">&check;</td>');
                $("#linha3").append('<td class="check">&check;</td>');
                $("#linha4").append('<td class="check">&check;</td>');
                $("#linha5").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha6").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha7").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha8").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha9").append('<td class="restricoes">Aberto com restrições</td>');
                $("#linha10").append('<td class="cross">&cross;</td>');
                $("#linha11").append('<td class="cross">&cross;</td>');
                $("#linha12").append('<td class="aDefinir">a ser definido</td>');
                $("#linha13").append('<td class="aDefinir">a ser definido</td>');
            }
        }
    })

    $("#btnNovosDados").click(function () {
        $("#taxas").css({
            "background": "none"
        });
        $("#taxaUti, #taxaEnfermaria").css("visibility", "visible");
        $("input").css("visibility", "visible");
        $("#btnVerifica").css("display", "block");
        // esconde  tabela
        $("#table").css("visibility", "hidden");
        // esse item faz com que resete a página, limpando assim o valores que foram incluidos com append
        window.location.reload();
    })
})


