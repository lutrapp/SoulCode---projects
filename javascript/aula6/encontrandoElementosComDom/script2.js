
// use o get ElementbyTagName para encontrar o p e altere o texto para Olá

let muda = document.getElementsByTagName('p');

function mudaTexto() {
    muda[0].innerHTML = "olá" ;
}