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
console.log("-------------------------------------------------------");
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

let idades = [23, 95, 12, 57, 17, 72];

for (let i = 0; i < idades.length; i++) {
  console.log("Idade:", idades[i], "-", podeVotar(idades[i]));
}
console.log ("                                 "); 
//16. Verifique se um número está entre 10 e 50.
let numero = 25
if (numero >= 10 && numero <= 50) console.log("Está no intervalo");

console.log ("                                 "); 

//17. Crie um sistema de login simples (usuário e senha).
let user = "admin", pass = "1234";
if (user === "admin" && pass === "1234") console.log("Acesso permitido, Seja Bem-Vindo");
else console.log("Acesso negado");

console.log ("                                 "); 

//18. Verifique o maior entre dois números.
let v1 = 10, v2 = 20;
console.log("Maior:", v1 > v2 ? v1 : v2);

console.log ("                                 "); 

//19. Verifique o maior entre três números.
let a1 = 7, a2 = 23, a3 = 16;
let maior = a1;
if (a2 > maior) maior = a2;
if (a3 > maior) maior = a3;
console.log("O maior entre os três é:", maior);

console.log ("                                 "); 

/* 20. Classifique a idade:
       Criança
       Adolescente
       Adulto
       Idoso */
let Idade = 75;
if (Idade <= 12) console.log("Criança");
else if (Idade <= 17) console.log("Adolescente");
else if (Idade <= 59) console.log("Adulto");
else console.log("Idoso");
console.log ("                                 "); 

/* 
*******************************************************************
           PARTE 3 – Switch Case (21 a 25)
*******************************************************************/
console.log ("                                 "); 

//21. Dado um número de 1 a 7, exiba o dia da semana.
let dia = 4
switch(dia) {
    case 1: console.log("Domingo"); break;
    case 2: console.log("Segunda"); break;
    case 3: console.log("Terça"); break;
    case 4: console.log("Quarta"); break;
    case 5: console.log("Quinta"); break;
    case 6: console.log("Sexta"); break;
    case 7: console.log("Sábado"); break;
    default: console.log("Dia inválido");
}
console.log ("                                 "); 

//22. Dado um mês (1 a 12), exiba o nome do mês.
let menuSelecionado = "2 | Fevereiro";
switch (menuSelecionado) {
    case "1 | Janeiro":
        console.log("Primeiro Trimestre '1 | Janeiro'");
        break;
    case "2 | Fevereiro":
        console.log("Primeiro Trimestre '2 | Fevereiro'");
        break;
    case "3 | Março":
        console.log("Primeiro Trimestre '3 | Março'");
        break;
    case "4 | Abril":
        console.log("Segundo Trimestre '4 | Abril'");
        break;
    case "5 | Maio":
         console.log("Segundo Trimestre '5 | Maio'")    
        break;
     case "6 | Junho":
        console.log("Segundo Trimestre '6 | Junho'");
        break;
    case "7 | Julho":
        console.log("Terceiro Trimestre '7 | Julho'");
        break;
    case "8 | Agosto":
        console.log("Terceiro Trimestre '8 | Agosto'");
        break;
    case "9 | Setembro":
        console.log("Terceiro Trimestre '9 | Setembro'");
        break;
    case "10 | Outubro":
         console.log("Quarto Trimestre '10 | Outubro'")    
        break;
    case "11 | Novembro":
        console.log("Quarto Trimestre '11 | Novembro'");
        break;
    case "12 | Dezembro":
        console.log("Quarto Trimestre '12 | Dezembro'");
        break;
        default:
        console.log("Mês incorreto, selecione uma opção no menu!");
        break;
   
}  
console.log ("                                 "); 

//23. Dado um mês, informe o trimestre.
let mes = 6;
switch(mes) {
    case 1: case 2: case 3: console.log("1º Trimestre"); break;
    case 4: case 5: case 6: console.log("2º Trimestre"); break;
    case 7: case 8: case 9: console.log("3º Trimestre"); break;
    case 10: case 11: case 12: console.log("4º Trimestre"); break;
}
console.log ("                                 "); 

/* 24. Crie um menu simples:
       1: Somar
       2: Subtrair
       3: Multiplicar
       4: Dividir */

let op = 4;
switch(op) {
    case 1: console.log("Operação Soma"); break;
    case 2: console.log("Operação Subtrair"); break;
    case 3: console.log("Operação Multiplicar"); break;
    case 4: console.log("Operação dividir"); break;
}
console.log ("                                 "); 


/* 25. Sistema de avaliação:
       A → Excelente
       B → Bom
       C → Regular
       D → Ruim */ 
 let notA = "A";

switch(notA) {
    case "A": console.log("Excelente"); break;
    case "B": console.log("Bom"); break;
    case "C": console.log("Regular"); break;
    case "D": console.log("Ruim"); break;
    default: console.log("Nota inválida"); 
}

/* 
*******************************************************************
           PARTE 4 – Laço FOR (26 a 35) 🚨
             (TODOS DEVEM USAR for)
*******************************************************************/
