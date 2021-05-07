
/*****************************FUNÇÃO PARA O ACCORDION*********************************/

(function(){ // funcao que abrange todas as outras funçoes chamada de capsula
    var $acordeao = document.querySelector('.acordeao') // criando uma variavel para chamar a class acordeao
    $acordeao.addEventListener('click', function(event) {// quando clicar na aba faça
        var $this = this // variavel criada para
        var $origin = event.target
    if($origin.classList.contains('acordeao-item-titulo')) {
        document.querySelector('.acordeao-item_2').classList.remove('acordeao-item_2')
        $origin.parentNode.classList.add('acordeao-item_2')
    }
    })

    $(document).ready(function(){
    	$("#content div:nth-child(1)").show();
    	$(".abas li:first div").addClass("selected");
    	$(".aba").click(function(){
    		$(".aba").removeClass("selected");
    		$(this).addClass("selected");
    		var indice = $(this).parent().index();
    		indice++;
    		$("#content div").hide();
    		$("#content div:nth-child("+indice+")").show();
    	});
       	$(".aba").hover(
    		function(){$(this).addClass("ativa")},
    		function(){$(this).removeClass("ativa")
        });
    });

/********FUNÇÃO PARA SCROLL******/
//ASSIM QUE ACIONAR O SCROLL APARECE
var $target = $(".anime"), // TARGET SAO OS ITENS QUE EU QUERO QUE ACONTEÇA
animationClass = "anime-start"; // VARIAVEL GLOBAL PARA ACINAR COM O SCROLL
offset = $(window).height()*3/4 // calculando o elemento PARA O TAMANHO DA PAGINA

function animeScroll(){ // DEI O NOME PARA FUNÇÃO
    var documentTop = $(document).scrollTop();// DISTANCIA DO TOPO DO DOCUMENTO

$target.each(function(){ // 
    var itemTop = $(this).offset().top;// DISTANCIA DO TOPP// OFFSET é um método apenas de leitura que retorna a medida, em pixels, da distância do elemento atual em relação ao topo
    if(documentTop > itemTop - offset){ // SE O DOCUMENTOP FOR MAIOR QUE O ITEM TOP
        $(this).addClass(animationClass);
    }else{ // SE NAO FOR MAIOR 
        $(this).removeClass(animationClass)
    }
})
}
animeScroll(); //ATIVANDO A FUNÇÃO
$(document).scroll(function(){ 
animeScroll();

$(".box11").click(function(){ //fade toggle           
      $(".box11").fadeOut("slow");          
    $(".box11").fadeIn("slow");

});

$(".box12").click(function(){ //fade toggle           
      $(".box12").fadeOut("slow");          
    $(".box12").fadeIn("slow");

});

$(".box13").click(function(){ //fade toggle           
      $(".box13").fadeOut("slow");          
    $(".box13").fadeIn("slow");

});

$(".box14").click(function(){ //fade toggle           
      $(".box14").fadeOut("slow");          
    $(".box14").fadeIn("slow");

});
});
})(); // () invoca a função
    

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
document.querySelector("#data").innerHTML = datasite() //retornando valor no HTML

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
    document.querySelector("#hora").innerHTML = horaAtualizada;
   
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