// um relógio atualizado na página-----------------

// para deixar os dígitos com dois algarismos
const doisZeros = x => {
   return ('0' + x).slice(-2);
}

function atualizaDataHora() {
   let hoje = new Date();
   let hora = doisZeros(hoje.getHours());
   let minutos = doisZeros(hoje.getMinutes());
   let segundos = doisZeros(hoje.getSeconds());
   document.getElementById('horaCerta').innerHTML = `${hora}:${minutos}:${segundos}`;
   //para atualizar a cada meio segundo(500)
   setTimeout('atualizaDataHora()', 500);
}

// Crie um objeto Date e alerte a data e hora atual

var d = new Date();
var data = `Hoje é ${d.getDate()}/${(d.getMonth()+1)}/${d.getFullYear()}. `;
var hora = `Não se atrase! Agora são ${doisZeros(d.getHours())}:${doisZeros(d.getMinutes())} `
alert(data + hora);

// Use o método de data correto para extrair o ano de (quatro dígitos) de um objeto de data.

var d = new Date();
anoAtual = d.getFullYear();
alert(`Estamos no ano ${anoAtual}`)

// Use o método Date correto para obter o mês (0-11) fora de um objeto de data
function mesPorExtenso() {
   var d = new Date();
   let mes = d.getMonth();
   switch (mes) {
      case (0):
         alert("Estamos no mês de Janeiro");
         break;
      case (1):
         alert("Estamos no mês de Fevereiro");
         break;
      case (2):
         alert("Estamos no mês de Março");
         break;
      case (3):
         alert("Estamos no mês de Abril");
         break;
      case (4):
         alert("Estamos no mês de Maio");
         break;
      case (5):
         alert("Estamos no mês de Junho");
         break;
      case (6):
         alert("Estamos no mês de Julho");
         break;
      case (7):
         alert("Estamos no mês de Agosto");
         break;
      case (8):
         alert("Estamos no mês de Setembro");
         break;
      case (9):
         alert("Estamos no mês de Outubro");
         break;
      case (10):
         alert("Estamos no mês de Novembro");
         break;
      case (11):
         alert("Estamos no mês de Dezembro");
         break;
   }
}
// chamando a função
mesPorExtenso();

// use o método correto de date para definir o ano de um objeto de data como 2020
var d = new Date();
ano = (d.getFullYear() - 1);
alert(`Ano passado foi ${ano}`);


// function para mudar o background de acordo com a hora do dia

function mudaBackground() {
   let h = d.getHours();
   if (h > 5 && h < 8) {
      document.getElementById("bodyIndex").style.backgroundColor = "url(img/manha.jpg)";
   }
   if (h >= 8 && h < 12) {
      document.getElementById("bodyIndex").style.backgroundColor = "url(img/dia.jpg)";
   }
   if (h >= 12 && h < 13) {
      document.getElementById("bodyIndex").style.backgroundColor = "url(img/almoco.jpg)";
   }
   if (h >= 13 && h < 18) {
      document.getElementById("bodyIndex").style.backgroundColor = "url(img/dia.jpg)";
   }
   if (h >= 18 && h < 20) {
      document.getElementById("bodyIndex").style.backgroundColor = "url(img/anoitecendo.jpg)";
   } else {
      document.getElementById("bodyIndex").style.backgroundImage = "url(img/noite.jpg)";
   }
}
// chamando a função
mudaBackground();