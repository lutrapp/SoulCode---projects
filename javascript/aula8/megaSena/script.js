function embaralha() {
    numero = Math.round(Math.random() * (60 - 1) + 1);
    return numero
}

// chamada da função acionada por button
function sorteiaJa() {
    do {
        var meuSorteio = Array();
        for (i = 0; i < 6; i++) {
            var sorteado = embaralha(i);
            // para nao repetir número
            var verifica = meuSorteio.find(elemento => elemento == sorteado);
            if (!verifica)
                meuSorteio.push(sorteado);
        }
        // nesse console mostra as ocorr~encias de número repetido deixariam o array mais curto
        // console.log(meuSorteio)
        // para garantir sempre 6 números
    } while (meuSorteio.length < 6);
    document.getElementById("sorteio").innerHTML = `${meuSorteio.join("  ")}   `
}