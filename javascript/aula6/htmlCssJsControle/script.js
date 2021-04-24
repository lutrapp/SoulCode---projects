
function inicio() {
    console.log('inicio');
    temperatura();

    let m = 0;
    let listaNomes = [];

    do {
        m = parseInt(prompt("Vamos fazer uma lista de nomes. Quantas pessoas você deseja registrar?"));
    } while (isNaN(m));

    for (let j = 0; j < m; j++) {
        listaNomes[j] = prompt("Registre um nome");
        if ((listaNomes[j]).length == "") {
            j--;
        }
    }

    document.getElementById("eliana").innerHTML = verificaNomes("Eliana", listaNomes);
    document.getElementById("carlos").innerHTML = verificaNomes("Carlos", listaNomes);

}

function verificaNomes(pessoa, listaNomes) {
    let achou = false;
    let posicao = 0;
    let resposta = "";
    listaNomes.forEach(element => {
        // para validar se a pessoa digitar o nome em minúsculo, vamos comparar em uppercase para garantir.
        if (element.toUpperCase() == pessoa.toUpperCase()) {
            achou = true;
            resposta = pessoa + " está na lista! Sua posição é " + posicao;
        }
        posicao++;
    });

    if (!achou) {
        resposta = pessoa + " não está na lista ";
    }
    return resposta;
}

// inicio function temperatura
function temperatura() {
    // console.log('temperatura');
    let listaTemp = [];
    let listaMais20 = [];
    let indice = 0;
    let n = 0;

    do {
        n = parseInt(prompt('Vamos fazer uma lista de temperaturas. Quantas você deseja registrar?'));
    } while (isNaN(n));

    let num = 0;
    for (let i = 0; i < n; i++) {
        listaTemp[i] = parseInt(prompt("Digite a temperatura"));
        if (isNaN(listaTemp[i])) {
            i--;
        }
    }
    console.log(listaTemp);

    for (let t = 0; t < listaTemp.length; t++) {
        // temperatura vai receber os valores string convertidos para int
        let temperatura = parseInt(listaTemp[t]);
        if (temperatura > 20) {
            listaMais20[indice] = " " +temperatura+"&deg;";
            indice++;
        }
    }
    // document.write("<br>");
    document.getElementById("temperaturas20").innerHTML = (listaMais20);

    //cubo dos itens da lista de temperatura
    let cubos = [];
    listaTemp.forEach(element => {
        cubos.push(" "+Math.pow(element, 3));
    })
    document.getElementById("cubo").innerHTML = cubos;
}
// esconde o botão de iniciar
// document.getElementsByTagName("button")[0].style.display = "none";