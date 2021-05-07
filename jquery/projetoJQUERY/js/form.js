var contador = 0;
// numero de itens que tem no formulario
var itensForm = 12;
// valor que soma na barra de progresso ao passar pelos campos
var incremento = 100 / itensForm;
var imc = 0;

// função apenas para verificar internamente
$("input, select").focusout(function () {
    // para mostrar durante a construção da função no console
    console.log($(this).attr("id") + " :" + $(this).val());
});
// quando sai dos campos input e select aciona essas funcçoes
// barra de progresso
$("input, select").blur(function () {
    contador = 0;
    var progresso = $("#progressIn");
    if ($("#nome").val() !== "") {
        console.log("nome");
        contador += incremento;
    }
    if ($("#nascimento").val() !== "") {
        console.log("nascimento");
        contador += incremento;
    }
    if ($("#email").val() !== "") {
        console.log("email");
        if (validaEmail($("#email").val())) {
            contador += incremento;
        }
    }
    if ($("#cpf").val() !== "") {
        console.log("cpf");
        if (validaCpf($("#cpf").val())) {
            contador += incremento;
        }
    }
    if ($("#sus").val() !== "") {
        console.log("sus");
        contador += incremento;
    }
    if ($("#peso").val() !== "") {
        console.log("peso");
        contador += incremento;
    }
    if ($("#altura").val() !== "") {
        console.log("altura");
        contador += incremento;
    }
    if ($(".checkComorbidades").is(":checked")) {
        console.log("comorbidades");
        contador += incremento;
    }
    if ($(".checkVacinas").is(":checked")) {
        console.log("vacinas");
        contador += incremento;
    }
    if ($("#sexo option:selected").val() !== "") {
        console.log("sexo");
        if (($("#sexo").val() == "masculino")) {
            console.log("masculino");
            contador += incremento;
        } else if (($("#sexo").val() == "feminino")) {
            console.log("feminino");
            contador += incremento / 2;
            if ($("#gestante option:selected").val() == "sim") {
                console.log("gestante sim");
                contador += incremento / 2;
            } else if ($("#gestante option:selected").val() == "nao") {
                contador += incremento / 2;
                console.log("gestante nao")
            }
        }
    }

    if ($("#profissao option:selected").val() !== "") {
        if ($("#profissao option:selected").val() == "saude") {
            console.log("profissao saude")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "educacao") {
            console.log("profissao educacao")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "transporte") {
            console.log("profissao transporte")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "limpeza") {
            console.log("profissao limpeza")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "portuario") {
            console.log("profissao portuario")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "industria") {
            console.log("profissao industria")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "motorista") {
            console.log("profissao motorista")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "segurancaPublica") {
            console.log("profissao segurancaPublica")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "metroviario") {
            console.log("profissao metroviario")
            contador += incremento;
        }
        if ($("#profissao option:selected").val() == "outros") {
            console.log("profissao outros")
            contador += incremento;
        }
    }
    if ($("#etnia option:selected").val() !== "") {
        if ($("#etnia option:selected").val() == "branco") {
            console.log("etnia branco")
            contador += incremento;
        }
        if ($("#etnia option:selected").val() == "pardo") {
            console.log("etnia pardo")
            contador += incremento;
        }
        if ($("#etnia option:selected").val() == "preto") {
            console.log("etnia preto")
            contador += incremento;
        }
        if ($("#etnia option:selected").val() == "amarelo") {
            console.log("etnia amarelo")
            contador += incremento;
        }
        if ($("#etnia option:selected").val() == "indígena") {
            console.log("etnia indígena")
            contador += incremento;
        }
        if ($("#etnia option:selected").val() == "naoInformado") {
            console.log("etnia naoInformado")
            contador += incremento;
        }
    }
    // aqui mostra o progresso em forma de texto, e crescendo a barra conforme o preenchimento dos dados
    $("#textProgress").text(`Preenchimento: ${contador.toFixed(2)} %`);
    //  traz o resultado incrementado do progresso
    // aumenta via css
    progresso.css({"width": contador + "%"})

    // próxima linha fim da função da barra progresso
})


// -----------------------------

$(document).ready(function () {

    // determina valores maximos e minimos para data
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    var yyyy_min = today.getFullYear() - 120;
    if (dd < 10) {
        dd = '0' + dd
    }
    if (mm < 10) {
        mm = '0' + mm
    }

    min_date = yyyy_min + '-' + mm + '-' + dd;
    max_date = yyyy + '-' + mm + '-' + dd;
    document.getElementById("nascimento").setAttribute("min", min_date);
    document.getElementById("nascimento").setAttribute("max", max_date);

    $("#enviar").click(function (event) {

        // valida email antes de enviar
        var sEmail = $("#email").val();
        if (validaEmail(sEmail)) {
            console.log("Email Ok")
        } else {
            console.log("Email com problema")
            alert('Por favor, informe um email válido.');
            event.stopPropagation();
            return;
        }

        // valida IMC
        peso = parseFloat($('#peso').val());
        altura = parseFloat($('#altura').val());
        if (peso <= 0 || altura <= 0) {
            alert("IMC - Digite valores válidos")
            return;
        }
        console.log("total contador:" + contador)


        // após o preenchimento do cadastro, validar algumas informações para ver se está apto a se vacinar
        // verifica se a barra de progresso está 100% preenchida
        if (Math.round(contador) == 100) {
            var semComorbidades = $(".checkComorbidades")[0].checked;
            var comorbidadesEspecifica = $(".checkComorbidades").checked;
            var profissao = $("#profissao option:selected").val();
            var dataNascimento = new Date($('#nascimento').val());
            var etnia = $("#etnia option:selected").val();
            var textoFinal = "";
            var nomeUsuario = $("#nome").val();
            idade = yyyy - dataNascimento.getFullYear();

            if (etnia == "indígena") {
                textoFinal = `${nomeUsuario}, você é indígena e já pode ser vacinado. Procure o local de vacinação mais próximo.`
            }
            if (imc > 40) {
                textoFinal = `${nomeUsuario}, de acordo com o valor de seu imc (classificação de obesidade mórbida), você já pode receber a vacina. Procure o local de vacinação mais próximo.`
            }
            if (profissao == "educacao" && idade > 47) {
                textoFinal = `${nomeUsuario}, como profissional da educação e idade maior que ${idade} anos, já pode receber a vacina. Procure a unidade de saúde mais próxima.`
            }
            if (profissao == "motorista") {
                textoFinal = `${nomeUsuario}, de acordo com seu ramo profissional, pode ser vacinado a partir de 18 de maio.`
            }
            if (profissao == "segurancaPublica") {
                textoFinal = `${nomeUsuario}, de acordo com seu ramo profissional relacionado à segurança pública, já pode receber a vacina.`
            }
            if (profissao == "metroviario") {
                textoFinal = `${nomeUsuario}, de acordo com seu ramo profissional, pode ser vacinado a partir de 11 de maio.`
            }
            if (idade > 63) {
                textoFinal = `${nomeUsuario}, você tem ${idade} anos e já pode ser vacinado. Procure o local de vacinação mais próximo.`
            }
            if( textoFinal == ""){
                textoFinal = `${nomeUsuario}, de acordo com suas características, você ainda não está apto a receber a vacina. Acompanhe as informações pelo site vacinaja`;
            }
            // textoFinal = $("#nome").val() + idade + $("#profissao option:selected").val();

            console.log("click enviar" + textoFinal);
            // faseusuario é o nome da div onde aparecerá a mensagem
            $("#faseUsuario").css("visibility", "visible");
            $(document).scrollTop(0);
            $("#faseUsuario").text(textoFinal);


            alert("100% preenchido");
            event.stopPropagation();
            return;

        } else {
            alert("Preencha todos os campos antes de enviar")
            //cancela o próximo evento de alert
            event.stopPropagation();
            return;
        }
    })

    //MÁSCARA CPF ---------------------------------------------------------------------------------
    $("#cpf").keydown(function () {
        fMascCPF(this)
    });

    // FUNÇÃO VALIDA CPF ---------------------------------------------------------------------------

    $("#cpf").focusout(function () {
        fMascCPF(this)
        if (validaCpf(obj.value)) {
            console.log("CPF OK")
        } else {
            console.log("CPF com Problema")
            alert("Digite um CPF válido.")
            return;
        }
    });


    $("#nascimento").focusout(function () {
        var dataNascimento = new Date($('#nascimento').val());
        idade = yyyy - dataNascimento.getFullYear();

        if (idade > 120) {
            alert("A idade deve ser menor ou igual a 120 anos.")
        }
    });

    // FUNÇÃO VALIDA EMAIL ---------------------------------------------------------------------------
    // $('#email').blur(function (event) {
    //     var sEmail = $("#email").val();
    //     // var re = /\S+@\S+\.\S+/;
    //     if (validaEmail(sEmail)) {
    //         // if (re.test(sEmail)) {
    //         console.log("Email Ok")
    //     } else {
    //         console.log("Email com problema")
    //         alert('Por favor, informe um email válido.');
    //         event.stopPropagation();
    //         return;
    //     }
    // });

    // Função Gestante (Caso o sexo escolhido for o feminino a <section id="gestante"> será habilitada.
    $("#sexo").click(function () {
        var sexo = $("select#sexo").val();
        if (sexo == "feminino") {
            $("#gestanteForm label").css("visibility", "visible");
            $("#gestanteForm select").css("visibility", "visible");
        } else {
            $("#gestanteForm label").css("visibility", "hidden")
            $("#gestanteForm select").css("visibility", "hidden")
        }
    })


    //CÁLCULO DO IMC -----------------------------------------------------------------------------------------

    // $('#botao').click(function () {
    $('#peso,#altura').focusout(function (event) {
        var peso = 0;
        var altura = 0;
        peso = parseFloat($('#peso').val());
        altura = parseFloat($('#altura').val());
        if (peso > 0 && altura > 0) {
            imc = 0;
            var tipo = ""
            imc = peso / (altura ** 2);
            if (imc < 18.5) {
                tipo = "Magreza";
            } else if (imc >= 18.5 && imc < 25) {
                tipo = "Saudável";
            } else if (imc >= 25 && imc < 30) {
                tipo = "Sobrepeso";
            } else if (imc >= 30 && imc < 35) {
                tipo = "Obesidade grau I";
            } else if (imc >= 35 && imc < 40) {
                tipo = "Obesidade Severa grau II";
            } else {
                tipo = "Obesidade Mórbida grau III";
            }
            $('#resultadoImc').text("Seu IMC é: " + imc.toFixed(2) + " | " + tipo);
            $("#imgImc").css("visibility", "visible");
        } else {
            $('#resultadoImc').text("");
        }
    });
})

// VALIDA CPF ---------------------------------------------------------------------------------------------

function validaCpf(valCPF) {
    var strCPF = valCPF.replaceAll('.', '').replaceAll('-', '');
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function fMascCPF(objeto) {
    obj = objeto
    obj.value = mCPF(obj.value)
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function validaEmail(sEmail) {
    var re = /\S+@\S+\.\S+/;
    return re.test(sEmail);
}


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