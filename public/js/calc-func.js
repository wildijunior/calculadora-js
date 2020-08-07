let calcular = (operacao, result, num1, num2) => {
  // recupera valores e os coloca em variaveis
  // recupera os valores dos elementos
  operacao = document.getElementById("operacao").value;
  num1 = document.getElementById("numero1").value;
  num2 = document.getElementById("numero2").value;

  result = null;

  // validar se numero é valido
  if (num1 == "" || num1 == null) {
    alert("Entre com numero 1 valido");
    return false;
  }

  if (num2 == "" || num2 == null) {
    alert("Entre com numero 2 valido");
    return false;
  }

  //   validacao
  //   alert("numero1: " + num1);
  //   alert("numero2: " + num2);
  //   alert("operacao: " + operacao);

  switch (operacao) {
    case "1":
      result = Number(num1) + Number(num2);
      break;

    case "2":
      result = num1 - num2;
      break;

    case "3":
      result = num1 * num2;
      break;

    case "4":
      result = num1 / num2;
      break;
    default:
      alert("OPCAO INVALIDA");
      break;
  }

  // o id resultado, o value dele recebe a variavel.
  // passamos a variavel como valor a ser atribuido ao value dele
  document.getElementById("resultado").value = result;
};

// FUNCAO PARA RECARREGAR PAGINA
function recarregar() {
  document.location.reload();
}
