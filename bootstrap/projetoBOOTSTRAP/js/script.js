// função que chama api do correio a partir da digitacao do cep

function limpa_formulário_cep() {
   //Limpa valores do formulário de cep.
   document.getElementById('rua').value = ("");
   document.getElementById('bairro').value = ("");
   document.getElementById('cidade').value = ("");
   document.getElementById('uf').value = ("");
   // document.getElementById('ibge').value=("");
}

function meu_callback(conteudo) {
   if (!("erro" in conteudo)) {
      //Atualiza os campos com os valores.
      document.getElementById('rua').value = (conteudo.logradouro);
      document.getElementById('bairro').value = (conteudo.bairro);
      document.getElementById('cidade').value = (conteudo.localidade);
      document.getElementById('uf').value = (conteudo.uf);
      // document.getElementById('ibge').value=(conteudo.ibge);
   } //end if.
   else {
      //CEP não Encontrado.
      limpa_formulário_cep();
      alert("CEP não encontrado.");
   }
}

function pesquisacep(valor) {

   //Nova variável "cep" somente com dígitos.
   var cep = valor.replace(/\D/g, '');

   //Verifica se campo cep possui valor informado.
   if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if (validacep.test(cep)) {

         //Preenche os campos com "..." enquanto consulta webservice.
         document.getElementById('rua').value = "...";
         document.getElementById('bairro').value = "...";
         document.getElementById('cidade').value = "...";
         document.getElementById('uf').value = "...";
         //  document.getElementById('ibge').value="...";

         //Cria um elemento javascript.
         var script = document.createElement('script');

         //Sincroniza com o callback.
         script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

         //Insere script no documento e carrega o conteúdo.
         document.body.appendChild(script);

      } //end if.
      else {
         //cep é inválido.
         limpa_formulário_cep();
         alert("Formato de CEP inválido.");
      }
   } //end if.
   else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
   }
};

// ------------------fim buscador cep-----------

// ------------------início função botão início com scroll-----------

$(document).ready(function () {
   $(window).scroll(function () {
      if ($(document).scrollTop() > 400) {
         $("#btnTopo").show();
         $("#btnDesce").show();
      } else {
         $("#btnTopo").hide();
         $("#btnDesce").hide();

      }
   })
})

// função com retorno suave ao topo
$('#btnTopo').click(function () {
   $("html, body").animate({
      scrollTop: 0
   }, 1500);
   return false;
});


// ------------------fim função botão início com scroll-----------

// ------------------início de animação (TRANSIÇÃO 1) logo diminui e surge conteúdo portfolio -----------

$(document).ready(function () {
   $(".imgLogoInicio").click(function () {
      $(".imgLogoInicio").animate({
         width: "15%",
         left: "0",
         top: "1",
      }, 1500);
      $(".portfolio").show();
      $(".vejaMais").show();
      $(".menu1").show();
      $(".footer1").show();
      $(".imgLogoInicio").addClass("logoFixa");
      // adiciona essa classe, que o fundo é cinza, podem ser alterada via css as cores em .bodyGray
      $("body").addClass("bodyGray")
      $(".textoFinalPortfolio").css("display", "block");
   });
   if ($(document).scrollTop() > 400) {
      $("#btnTopo").show();
   } else {
      $("#btnTopo").hide();

   }
})

// ------------------fim de animação (TRANSIÇÃO 1) logo diminui e surge conteúdo portfolio -----------

// ----------valida cnpj-------------


function validarCNPJ(cnpj) {

   try {
      cnpj = cnpj.replace(/[^\d]+/g, '');

      if (cnpj == '') return false;

      if (cnpj.length != 14)
         return false;

      // Elimina CNPJs invalidos conhecidos
      if (cnpj == "00000000000000" ||
         cnpj == "11111111111111" ||
         cnpj == "22222222222222" ||
         cnpj == "33333333333333" ||
         cnpj == "44444444444444" ||
         cnpj == "55555555555555" ||
         cnpj == "66666666666666" ||
         cnpj == "77777777777777" ||
         cnpj == "88888888888888" ||
         cnpj == "99999999999999")
         return false;

      // Valida DVs
      tamanho = cnpj.length - 2
      numeros = cnpj.substring(0, tamanho);
      digitos = cnpj.substring(tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (i = tamanho; i >= 1; i--) {
         soma += numeros.charAt(tamanho - i) * pos--;
         if (pos < 2)
            pos = 9;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(0))
         return false;

      tamanho = tamanho + 1;
      numeros = cnpj.substring(0, tamanho);
      soma = 0;
      pos = tamanho - 7;
      for (i = tamanho; i >= 1; i--) {
         soma += numeros.charAt(tamanho - i) * pos--;
         if (pos < 2)
            pos = 9;
      }
      resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
      if (resultado != digitos.charAt(1))
         return false;

      return true;
   } catch (e) {

      return false;
   }

}

// chamando a função

if (document.querySelector("#cnpjForm") != null) {
   document.querySelector("#cnpjForm").onblur = function () {

      var numeroCnpj = document.querySelector("#cnpjForm").value;

      if (validarCNPJ(numeroCnpj)) {
         document.getElementById("cnpjForm").style.color = "black";

      } else {
         document.querySelector("#msgModalAvisoCnpj").innerText = `CNPJ inválido. Por favor digite novamente`;
         $('#modalAvisoCnpj').modal('show');
         document.getElementById("cnpjForm").style.color = "red";
      }
   }
}

// -------valida cpf-----------------

function valideCPF(cpf) {

   try {
      var Soma;
      var Resto;
      var strCPF = cpf.replace("-", "").replace(".", "").replace(".", "")
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

   } catch (e) {

      return false;
   }
}

// chamando a função

if (document.querySelector("#cpfForm") != null) {
   document.querySelector("#cpfForm").onblur = function () {

      var numeroCpf = document.querySelector("#cpfForm").value;

      if (valideCPF(numeroCpf)) {
         document.getElementById("cpfForm").style.color = "black";

      } else {
         document.querySelector("#msgModalAvisoCpf").innerText = `CPF inválido. Por favor digite novamente`;
         $('#modalAvisoCpf').modal('show');
         document.getElementById("cpfForm").style.color = "red";
      }
   }
}


// ------------------ função para personalizar a mensagem inicial na página de contato----------

if (document.getElementById("nome") != null) {
   document.getElementById("nome").onblur = function () {
      nome = document.getElementById("nome").value.toUpperCase();
      document.getElementById("nomeCliente").style.fontFamily = "Quicksand";
      document.getElementById("nomeCliente").style.color = "#5757BA";
      if (nome) {
         document.getElementById("nomeCliente").innerText = `${nome}, que bom ver você na Pasillo!`;
      }
   }
}

// -------------- função para escrever uma mensagem após envio do formulário

document.getElementById("btnEnviar").onclick = function () {
   if (document.getElementById("nome").value == "") {
      document.getElementById("nome").focus();
      return
   }
   if (document.getElementById("email").value == "") {
      document.getElementById("email").focus();
      return
   }
   $("#msgFormularioEnviado").show();
   document.getElementById("msgFormularioEnviado").innerText = `${nome}, seus dados foram enviados com sucesso! Aguarde nosso contato!`;
   $(document).scrollTop(0);
}