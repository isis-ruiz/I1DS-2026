/*
    Introdução a funções em JavaScript
    função -> Uma função em JavaScript é um bloco de código reutilizável que executa uma tarefa quando é chamado.
*/

// Criar um função que soma dois valores e retorna um resultado
function subtrair(valor1, valor2) {
  return valor1 - valor2;
}

console.log("'2026 - 2009 ='", subtrair(2026, 2009));

let v1 = 10;
let v2 = 35;

console.log("A subtração de v1 - v2 =", subtrair(v1, v2));

/* Criar um função que escreve bom dia */

function bomDia() {
  console.log("Olá, muito bom dia para você!");
}

bomDia();
bomDia();
bomDia();

/* Função para apresentar uma pessoa */

function apresentarPessoa(nome, idade, cidade) {
  console.log(
    "Apresento a vocês:",
    nome,
    " que tem",
    idade,
    "anos, e mora em",
    cidade,
    ".");
}

apresentarPessoa("Isis Ruiz", 16, "Jaú");

/* Criar uma função que calcula e retorna o Kms ele pode viajar com esse combustivel */
function Kms( totalcombustivel) {
  let Kms = (totalcombustivel * 12);
  return Kms;
}

console.log("A autonomia do carro é:", Kms(20))