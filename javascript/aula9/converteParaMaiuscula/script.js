// Crie uma pagina que contenha um formulário, em que, a medida que o usuário for digitando o texto e des-selecionar o campo input, o texto será transformado em letras maiúscula:

// campos do formulário:
// Nome
// Email
// Endereço

function saiDoInput(item) {
   item.value = item.value.toUpperCase();
}