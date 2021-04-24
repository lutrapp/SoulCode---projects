let inputNome = document.getElementById('nome');
let inputEmail = document.getElementById('email');
let inputTextArea = document.getElementById('msg');

function mudaParaVermelho() {
    this.style.backgroundColor = "red";
// isso traz no console o que foi escrito no campo
    console.log(this.value);
}

// 'this' vai fazer a funçao funcionar para todas as variáveis invocadas sem a necessidade de fazer duas funções para cada uma

function mudaParaVerde() {
    this.style.backgroundColor = "green";
// isso traz no console o que foi escrito no campo
    console.log(this.value);
}

inputNome.addEventListener('focus', mudaParaVerde);
inputNome.addEventListener('blur', mudaParaVermelho);

inputEmail.addEventListener('focus', mudaParaVerde);
inputEmail.addEventListener('blur', mudaParaVermelho);

inputTextArea.addEventListener('focus', mudaParaVerde);
inputTextArea.addEventListener('blur', mudaParaVermelho);