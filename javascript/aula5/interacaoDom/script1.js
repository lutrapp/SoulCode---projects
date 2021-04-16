

var btn = document.querySelector('button');
btn.onclick = function(){
    var lista = [];
    var numero = parseInt(prompt("Digite um número entre 0 e 21"));
    if(numero > 0 && numero <21){
        for(x=1; x<=numero; x++){
            var indice = 2*x; 
            lista[x-1] = indice;
        }
        console.log(lista);
        document.getElementById('divText').innerHTML="Preciso fazer: " +lista+ "...vezes. Nunca desista!";
    }else{
        alert("O número que você digitou não estava no intervalo solicitado! Tente novamente!")
    }
}

