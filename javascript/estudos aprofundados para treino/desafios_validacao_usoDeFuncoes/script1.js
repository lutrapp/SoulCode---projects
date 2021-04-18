// 1. Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido. 

do {
    let nota = parseFloat(prompt("Digite uma nota entre 0 e 10"));
    while(nota >10 || nota <0 || isNaN(nota)) {
        nota = parseFloat(prompt("Digite uma nota válida. Entre 0 e 10"));
    
    }
    // esse caminho seria o mesmo que chamar pelo id "div1"
    document.getElementsByTagName('section').item(0).children.item(0).innerHTML=`A nota digitada foi ${nota}`;
}while(false);

// 2. Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações. 

function validaSenha(nome, senha) {
    while(nome.length == 0 || senha.length == 0) {
        alert("Entradas vazias. Digite novamente")
        nome = prompt("Digite um nome de usuário válido");
        senha = prompt("Digite uma senha");
    }
   
    while(nome.toUpperCase() == senha.toUpperCase() || nome.length == 0 || senha.length == 0){
        alert("ERROR - senha igual ao nome de usuário");
        nome = prompt("Digite um nome de usuário válido");
        senha = prompt("Digite uma senha");
    }
    document.getElementById('div2').innerHTML = `Usuário: ${nome} | Senha: ${senha}`
}
nome = prompt('Digite seu nome de usuário');
senha = prompt('Digite uma senha');

validaSenha(nome, senha);
