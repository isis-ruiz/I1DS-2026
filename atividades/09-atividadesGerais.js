/* 
*******************************************************************
          PARTE 1 – Variáveis, Operações e Lógica (1 a 10)
*******************************************************************/

console.log("PARTE 1 – Variáveis, Operações e Lógica (1 a 10)");
console.log("                     ");

//1.Crie variáveis para nome, idade e cidade. Exiba uma frase completa.
var nome = "Rapha";
var idade = 17;
console.log("Meu nome é", nome, "e eu tenho", idade, "anos \n");

/*2.Crie duas variáveis numéricas e exiba:
      soma
      subtração
      multiplicação
      divisão 
      resto da divisão */ 


let x = 2;
let y = 3;
console.log("x =", x, "\ny =", y);


let soma = x + y; 
console.log("A soma de x + y é", soma); 

let subtracao = x - y;
console.log("A subtração de x - y é", subtracao); 

let multiplicacao = x * y;
console.log("A multiplicação de x * y é", multiplicacao);

let divisao = x / y; 
console.log("A divisão de x / y é", divisao);

console.log("                     "); 

//3.Calcule a área de um retângulo.
// área = base × altura
let base = 6, altura = 5;
console.log("Área do Retângulo:", base * altura); 

console.log("                     "); 

//4.Calcule o volume de um paralelepípedo.
// comprimento × largura × altura

let largura = 7, comp = 5, alt = 6;
console.log("Volume:", largura * comp * alt)

console.log("                     "); 

//5.Dado o valor de um produto, calcule: 10% de desconto | valor final
function desconto(valorVenda, percentualDesconto) {
  let valorDesconto = valorVenda * (percentualDesconto / 100);
  return valorDesconto;
}

let totalPedido = 550.0;
let totalDesconto = desconto(totalPedido, 7.5);
let valorFinal = totalPedido - totalDesconto;

console.log("Total do Pedido:", totalPedido);
console.log("Total do Desconto:", totalDesconto);
console.log("Valor Final do Pedido:", valorFinal);
console.log("                     "); 

//6. Converta temperatura de Celsius para Fahrenheit.
 
// fórmula de conversão de Celsius para Fahrenheit:
// F=(C×59​)+32

let c = 25;
let f = (c * 9/5) + 32;
console.log(c + "°C equivale a " + f + "°F");
console.log("                     "); 

//7. Calcule o IMC e exiba o valor.
let peso = 67, h = 1.56;
let imc = peso / (h * h);
console.log("IMC:", imc.toFixed(2));
console.log("                     "); 

//8. Calcule a média de 3 notas.

let nota1 = 8, nota2 = 7, nota3 = 6;
console.log("média:", (nota1 + nota2 + nota3) / 3);
console.log("                     "); 

//9. Calcule o delta de uma equação de 2º grau.
//delta: Δ=b2−4ac
let a = 2
let b = -8
let c_ = 4
let delta = (b * b) - (4 * a * c_);
console.log("Delta:", delta);
//b*b => b2   // 4 * a * c_ = 4ac
console.log("                     "); 

//10. Dado um valor em horas, converta para minutos e segundos.
console.log ("Tempo:")
let horas = 6;
let minutos = horas * 45;
let segundos = minutos * 60;
console.log(horas + "h  " + minutos + "min  " + segundos + "s");
console.log ("                                 ");

/* 
*******************************************************************
PARTE 2 – Condicionais (IF) (11 a 20)
*******************************************************************/
console.log("PARTE 2 – Condicionais (IF) (11 a 20)");
console.log ("                                 "); 

//11. Verifique se um número é positivo, negativo ou zero.
let num = -69;
if (num > 0) console.log("Positivo");
else if (num < 0) console.log("Negativo");
else console.log("Zero");

let num2 = 21;
if (num2 > 0) console.log("Positivo");
else if (num2 < 0) console.log("Negativo");
else console.log("Zero");

let num3 = 0;
if (num3 > 0) console.log("Positivo");
else if (num3 < 0) console.log("Negativo");
else console.log("Zero");
console.log ("                                 "); 

//12. Verifique se um número é par ou ímpar.
let num4 = 5
if (num4 % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
let num5 = 4
if (num5 % 2 === 0) {
  console.log("Par");
} else {
  console.log("Ímpar");
}
console.log ("                                 "); 

//13. Dado um número, verifique se é múltiplo de 3.
let num6 = 9;
if (num6 % 3 === 0) console.log("Múltiplo de 3");
console.log ("                                 "); 

/*14. Verifique se um aluno foi:
       Aprovado (≥ 7)
       Recuperação (≥ 5 e < 7)
       Reprovado (< 5) 
       */ 
function verificarAluno(nota) {
  let resultado;

  if (nota >= 7) {
    resultado = "Aprovado";
  } else if (nota >= 5) {
    resultado = "Recuperação";
  } else {
    resultado = "Reprovado";
  }

  return resultado;
}

let nota = 5;
console.log("Nota:", nota, "-", verificarAluno(nota));

nota = 8;
console.log("Nota:", nota, "-", verificarAluno(nota));

nota = 4;
console.log("Nota:", nota, "-", verificarAluno(nota));

nota = 6;
console.log("Nota:", nota, "-", verificarAluno(nota));

nota = 3;
console.log("Nota:", nota, "-", verificarAluno(nota));
console.log ("                                 "); 

//15. Verifique se uma pessoa pode votar (use regras reais).
function podeVotar(idade) {
  let frase;

  if (idade < 16) {
    frase = "Não pode votar";
  } else if ((idade >= 16 && idade < 18) || idade >= 70) {
    frase = "Pode votar, mas é opcional!";
  } else {
    frase = "Pode votar, e é obrigatório!";
  }

  return frase;
}

let idades = [23, 25, 12, 57, 17, 72];

for (let i = 0; i < idades.length; i++) {
  console.log("Idade:", idades[i], "-", podeVotar(idades[i]));
}
