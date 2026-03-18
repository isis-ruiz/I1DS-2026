//Switch Case -> estrutura de decisão usada quando queremos comparar o valor de uma variavel com varios possiveis resultados;
//REGRA DO PROF CASTELLO - se tiver mais que 3 comparadores. faça um switch case

//Exemplo 1 = MENU
//Nesse exemplo a variavel menuSelecionado guardará o nome de uma opção de menu
//o switch verifica qual foi a opção escolhida e exibe uma mensagem correspondentes

let menuSelecionado = "Pague um café";
switch (menuSelecionado) {
  case "Home":
    console.log("Você clicou no link 'Home'");
    break;
  case "Quem somos":
    console.log("Você clicou no link 'Quem somos'");
    break;
  case "Contrato":
    console.log("Você clicou no link 'Contrato'");
    break;

 case "Redes Sociais":
    console.log("Você clicou no link 'Redes Sociais'");
    break;

 case "Pague um café":
    console.log("Você clicou no link 'Pague um café'");
    break;

  default:
    console.log("Opção Incorreta, selecione uma opção no menu!");
    break;
}

const pi = 3.1415683

console.log (pi);
console.log(pi.toFixed(2)); //coloca numeros com 2 casas decimais somante 
