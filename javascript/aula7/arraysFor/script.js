// Sua  professora, encomendou um trabalho para você.


// Ela quer que você crie um script que vai pedir o número de alunos da turma (peça via prompt mesmo).
// Em seguida, vai perguntar qual foi a nota de cada um deles.


// No final, seu script deve fornecer a média geral da turma.


// Use array para armazenar as notas, laço FOR para preencher cada elemento do array e um laço FOR IN para calcular a soma das notas (cálculo necessário para calcular a média).


function calculaMedias() {
    do {
        var qtdeAlunos = parseInt(prompt("Digite o número de alunos da turma"));
    } while (isNaN(qtdeAlunos));

    let listaNotas = new Array(qtdeAlunos);
    // funçãozinha para calcular média;
    let media = (totalDeNotas, alunos) => (totalDeNotas / alunos).toFixed(1);

    for (nota = 0; nota < listaNotas.length; nota++) {
        // listaNotas[nota] = parseFloat(prompt("Digite as notas dos alunos " + (nota + 1)));
        let teste = parseFloat(prompt("Digite as notas dos alunos " + (nota + 1)));
        // verifica se as notas são diferentes de números, ou se são valores negativos
        listaNotas[nota] = teste;
        if (isNaN(teste) || (teste) < 0) {
            // decrementa se for inválido e pede novamente o dado
            nota--;
        }
    }
    // confere as notas digitadas
    console.log(listaNotas);

    // para somar as notas e armazenas em contador
    let contador = 0;
    for (item in listaNotas) {
        contador = contador + listaNotas[item];
    }

    // para sumir o botaão de iniciar a função e  dar destaque ao resultado
    document.getElementsByTagName("button")[0].style.display = "none";
    // mostra na div de id medias o resultado
    document.getElementById("medias").innerHTML = `A média dos alunos é: ${media(contador, qtdeAlunos)}`;
}