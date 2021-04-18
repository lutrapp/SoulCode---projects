// 3. Faça um programa que leia e valide as seguintes informações:
// Nome: maior que 3 caracteres;
// Idade: entre 0 e 150;
// Salário: maior que zero;
// Sexo: 'f' ou 'm';
// Estado Civil: 's', 'c', 'v', 'd';
// Dica: se sua variável é texto, o tamanho dela está armazenado em: texto.length

let nomeUsuario = prompt("Digite nome");
verificaNome(nomeUsuario);
let idadeUsuario = parseInt(prompt("Digite idade"));
verificaIdade(idadeUsuario);
let salarioUsuario = parseFloat(prompt("Digite salário"));
verificaSalario(salarioUsuario);
let sexoUsuario = prompt("Sexo. Digite f ou m");
verificaSexo(sexoUsuario);
let estadoCivilUsuario = prompt("Estado Civil. Digite: s(solteiro), c(casado), v(viúvo), ou d(divorciado)");
verificaEstadoCivil(estadoCivilUsuario);

// função para deixar primeira letra de cada palavra em maiúsculo
function primeiraLetraMaiuscula(texto) {
    // transforma todo o texto em minúsculo
    texto = texto.toLowerCase();
    // separa num array pelos espaços em branco
    let separaTexto = texto.split(" ");
    texto = "";
    for(i=0; i<separaTexto.length; i++){
        texto += separaTexto[i].charAt(0).toUpperCase() + separaTexto[i].slice(1) + " ";
    }
    return texto;
}


function verificaNome(nome) {
    while(nome.length <=3 || nome.length == 0){
        alert("Nome muito curto");
        nome = prompt("Digite nome");
    }
    document.getElementById('div1').innerHTML = `Nome: ${primeiraLetraMaiuscula(nome)}`;
}

function verificaIdade(idade) {
    while(idade < 0 || idade >= 150 || idade.length == 0 || isNaN(idade)){
        alert("IDADE: Dados inválidos");
        idade = parseInt(prompt("Digite idade"));
    }
    document.getElementById('div2').innerHTML = `Idade: ${idade}`;
 
}

function verificaSexo(sexo) {
 
    let validaSexo = false;
    do {
        if(sexo.length == 0 || sexo.length > 1 ){
            alert("Dados inválidos. Digite apenas uma letra");
            sexo = prompt("Sexo. Digite f ou m");
        }
        switch(sexo.toUpperCase()){
            case "F":
                validaSexo = true;
                break;
            case "M":
                validaSexo = true;
                break;
            default:
                validaSexo = false;
                alert("Dados inválidos");
                sexo = prompt("Sexo. Digite f ou m");
        }
    } while(!validaSexo);
    document.getElementById('div3').innerHTML = `Sexo: ${sexo}`;
}
    


function verificaEstadoCivil(estadoCivil) {
    
        let validaEstadoCivil = false;
        do {
            if (estadoCivil.length == 0 || estadoCivil.length > 1){
                alert("Dados inválidos. Digite apenas uma letra");
                estadoCivil = prompt("Estado Civil. Digite: s(solteiro), c(casado), v(viúvo), ou d(divorciado)");
            }
            switch(estadoCivil.toUpperCase()){
                case "S":
                    validaEstadoCivil = true;
                    break;
                case "C":
                    validaEstadoCivil = true;
                    break;
                case "V":
                    validaEstadoCivil = true;
                    break;
                case "D":
                    validaEstadoCivil = true;        
                    break;
                default:
                    validaEstadoCivil = false;
                    alert("DADOS inválidos");
                    estadoCivil = prompt("Estado Civil. Digite: s(solteiro), c(casado), v(viúvo), ou d(divorciado)");
            }
        } while(!validaEstadoCivil || estadoCivil.length == 0);
    
    document.getElementById('div4').innerHTML = `Estado Civil: ${estadoCivil}`;
}

function verificaSalario(salario) {
    while(salario <= 0 || salario.length == 0 || isNaN(salario)){
        alert("SALÁRIO: Dados inválidos");
        salario = parseFloat(prompt("Digite salário. Valor maior que zero"));
    }
    document.getElementById('div5').innerHTML = `Salário: R$ ${salario}.00`;
}
    

    
