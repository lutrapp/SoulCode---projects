// banner automático parte superior lado direito

$(document).ready(function () {
    let tempo = 3000, //tempo de rotação
        currentImageIndex = 0, //imagem inicial (começa pelo índice 0)
        imagens = document.querySelectorAll("#slide img"), //selecionando todas as imagens que serão rotacionadas
        max = imagens.length; //máximo de imagens que serão utilizadas

    function rotacionar() {
        imagens[currentImageIndex].classList.remove("imgOne") //4º remove a classe "imgOne" depois que a imagem é exibida, para adicionar à outra imagem. Dessa forma, só 1 imagem terá essa classe por vez.

        currentImageIndex++ //2º adicionando +1 pra que a classe imgOne vá passando para cada imagem de cada vez

        if (currentImageIndex >= max) { //3º condição para que o contador pare quando atingir o número máximo de imgs
            currentImageIndex = 0
        }

        imagens[currentImageIndex].classList.add("imgOne") //1º adicionando a classe imgOne à primeira imagem
    }

    function inicio() {
        setInterval(() => {
            rotacionar() //chama a função acima
        }, tempo) //setinterval executará a função a cada tempo definido na variável tempo (5s)
    }

    window.addEventListener("load", inicio) //a função inicio será executada quando a janela for carregada
})
// ------------------------------------------------------------------------------------------------

//função tabs parte superior lado direito
$(document).ready(function () {
    $("#content div:nth-child(1)").show();
    $(".abas li:first div").addClass("selected");
    $(".aba").click(function () {
        $(".aba").removeClass("selected");
        $(this).addClass("selected");
        var indice = $(this).parent().index();
        indice++;
        $("#content div").hide();
        $("#content div:nth-child(" + indice + ")").show();
    });
    $(".aba").hover(
        function () {
            $(this).addClass("ativa")
        },
        function () {
            $(this).removeClass("ativa")
        });
});

// ------------------------------------------------------------------------------------------------

// focus quando clicado e blur deselecionado
$(document).ready(function () {
    $("input").focus(function () {
        $(this).css('background-color', 'rgb(250, 249, 195)');
        $("input").blur(function () {
            $(this).css('background-color', 'rgb(255,255,255)');
        });
    });
});

// ------------------------------------------------------------------------------------------------

// valida se todos os campos estão preenchidos antes de exibir a mensagem que a atualização está registrada
$(document).ready(function () {
    $(function () {
        $("#myForm").submit(function () {
            var vazios = $("input[type=number]").filter(function () {
                return !this.value;
            }).get();

            if (vazios.length || !isNaN(nome.value)) {
                $(vazios).addClass('vazio');
                alert("Preencha o campo corretamente.");
                $("#nome").css("background", "red")
                return false;
            } else {

                alert("Atualização registrada, " + nome.value + "!");
            
            }
        });
    });
});
// $("#myForm > input:nth-child(2)").val() = "";
// $("#myForm > input:nth-child(3)").val() = "";
// $("#myForm > input:nth-child(4)").val() = "";
// $("#myForm > input:nth-child(7)").val() = "";
// $("#myForm > input:nth-child(9)").val() = "";


//DATA
var d = new Date()

function datasite(data = new Date()) {
    var dia = data.getDate()
    var mes = data.getMonth() + 1 //adiciona +1 pra contagem do mês começar a partir de 1 e não 0
    var ano = data.getFullYear()

    if (dia.toString().length == 1) dia = '0' + dia //se o dia tiver 1 caractere, adicione 0 na frente
    if (mes.toString().length == 1) mes = '0' + mes

    return dia + '/' + mes + '/' + ano
}

document.querySelector("#datadata").innerHTML = datasite() //retornando valor no HTML

//HORA
function horasite(data = new Date()) {
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()


    if (hora.toString().length == 1) hora = '0' + hora //se a hora tiver 1 caractere, adicione 0 na frente
    if (minuto.toString().length == 1) minuto = '0' + minuto
    if (segundo.toString().length == 1) segundo = '0' + segundo

    //para atualizar a cada meio segundo(500)
    setTimeout('horasite()', 500);

    var horaAtualizada = hora + ':' + minuto + ':' + segundo;
    document.querySelector("#horahora").innerHTML = horaAtualizada;

}
// chamando a função
horasite()

//ACESSIBILIDADE
// VARIÁVEIS QUE SERÃO MODIFICADAS COM A LETRA MAIOR 
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
var paragrafo10 = document.getElementsByTagName('p')[0]
var paragrafo11 = document.getElementsByTagName('p')[1]
var paragrafo12 = document.getElementsByTagName('p')[2]
var paragrafo13 = document.getElementsByTagName('h3')[0]
var paragrafo14 = document.getElementsByTagName('h3')[1]
var paragrafo15 = document.getElementsByTagName('p')[3]
var paragrafo16 = document.getElementsByTagName('p')[4]
var paragrafo17 = document.getElementsByTagName('p')[5]
var paragrafo18 = document.getElementsByTagName('h2')[0]
var paragrafo19 = document.getElementsByTagName('h2')[1]
var paragrafo20 = document.getElementsByTagName('h2')[2]
var acessibilidade2 = document.getElementById('aumentar')

// FUNÇÃO PARA MODIFICAR AS VARIÁVEIS (A MODIFICAÇÃO É FEITA NO CSS)
acessibilidade2.addEventListener('click', function () {
    paragrafo.classList.toggle('mais')
    paragrafo1.classList.toggle('mais')
    paragrafo2.classList.toggle('mais')
    paragrafo3.classList.toggle('mais')
    paragrafo4.classList.toggle('mais')
    paragrafo5.classList.toggle('mais')
    paragrafo6.classList.toggle('mais')
    paragrafo7.classList.toggle('mais')
    paragrafo8.classList.toggle('mais')
    paragrafo9.classList.toggle('mais')
    paragrafo10.classList.toggle('mais')
    paragrafo11.classList.toggle('mais')
    paragrafo12.classList.toggle('mais')
    paragrafo13.classList.toggle('mais')
    paragrafo14.classList.toggle('mais')
    paragrafo15.classList.toggle('mais')
    paragrafo16.classList.toggle('mais')
    paragrafo17.classList.toggle('mais')
    paragrafo18.classList.toggle('mais')
    paragrafo19.classList.toggle('mais')
    paragrafo20.classList.toggle('mais')
})
