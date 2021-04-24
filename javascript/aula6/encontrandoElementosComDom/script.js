
// use o get Elementby Id para encontrar o p e altere o texto para Olá

let novoTexto = document.getElementById('demo');

function mudaTexto() {
    novoTexto.innerHTML = "olá" ;
}

function voltaTexto() {
    novoTexto.innerHTML = "Bem vindo a esta página" ;
}