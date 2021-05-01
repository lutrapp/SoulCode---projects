
// questão 1: use um método jquery para retornar o conteúdo de texto de um elemento <div>
// questão 2: use um método jquery para retornar o conteúdo HTML de um elemento <div>
// questão 3: use um método jquery para retornar  o endereço URL de um link.
// questão 4: use um método jquery para alterar o texto de um elemento <div> para Hello World".
// questão 5: use um método jquery para alterar o valor do src atributo de uma imagem para "myimage.jpg"
// questão 6: use jquery para alterar o  texto de um link para demo
// questão 7: use um método jquery para inserir o texto "SIM" no final de um elemento <p>
// questão 8: use um método jquery para inserir o texto "SIM" no início de um elemento <p>
// questão 9: use um método jquery para remover um elemento <div>
// questão 10: use um método jquery para remover apenas os elementos filho de um elemento <div>
// questão 11: use um método jquery para remover todos os elementos <div> com class = "test" e class = "demo"

$(document).ready(function () {
    $("#botao1").click(function () {
        var conteudoText = $("div.test").text();
        alert("Conteúdo da div" + conteudoText);
    });
    $("#botao2").click(function () {
        var conteudoHtml = $("div.test").html();
        alert("Conteúdo da div" + conteudoHtml);
    });
    $("#botao3").click(function () {
        var urlLink = $("a").attr("href");
        alert("Endereço da url do link exercícios: " + urlLink);
    });
    $("#botao4").click(function () {
        $("div#alimentacao").replaceWith("<h2>Hello World!</h2>");
    })
    $("#botao5").click(function () {
        $("#exercicio img").attr("src", "img/myimage.jpg");
    })
    $("#botao6").click(function () {
        $("#myLink").text("Demo");
        $("#myLink").attr('href', 'http://www.demo.com');
    })
    $("#botao7").click(function () {
        $("p#paragrafo1").append("<h2>SIM</h2>");
    })
    $("#botao8").click(function () {
        $("p#paragrafo1").prepend("<h2>SIM</h2>");
    })
    $("#botao9").click(function () {
        $("div#alimentacao").remove();
    })
    $("#botao10").click(function () {
        $("div#meditacao").empty();
    })
    $("#botao11").click(function () {
        $("div.test, div.demo").remove();
    })

});
