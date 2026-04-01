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
           PARTE 4 – Laço FOR (26 a 35) 
             (TODOS DEVEM USAR for)
*******************************************************************/
//26. Exiba números de 1 a 100.
for (let i = 1; i < 100; i++) {
}
console.log ("                                 "); 

//27. Exiba números de 100 até 1.
for (let i = 100; i >= 1; i--) {
console.log(i);
}
console.log ("                                 "); 

//28. Exiba apenas números pares de 1 a 50.
for (let i = 2; i <= 50; i += 2) {
console.log(i);
}
console.log ("                                 "); 

//29. Exiba apenas números ímpares de 1 a 50.  
for (let i = 1; i <= 50; i += 2) {
console.log(i);
}
console.log ("                                 "); 

//30. Calcule a soma de 1 até 100.
let soma2 = 0;

for (let i = 1; i <= 100; i++) {
soma2 += i;
}
console.log("A soma de 1 até 100 é:", soma);
console.log ("                                 "); 

//31. Calcule o fatorial de um número.
function fatorialRecursivo(n) {
if (n === 0 || n === 1) {
return 1;
}
return n * fatorialRecursivo(n - 1);
}

console.log(fatorialRecursivo(5));
console.log ("                                 "); 

//32. Exiba a tabuada de um número.
function exibirTabuada(numero) {
console.log(`.___. Tabuada do ${numero} .___.`);
for (let i = 1; i <= 10; i++) {
let resultado = numero * i;

// Usando Template Strings (com a crase ` `) para facilitar a leitura
console.log(`${numero} x ${i} = ${resultado}`);
}
console.log("_____________________________");
}
exibirTabuada(5);
console.log ("                                 "); 

//33. Conte quantos números pares existem entre 1 e 100.
let contador = 0;

for (let i = 2; i <= 100; i += 2) {
contador++;
}

console.log(`Existem ${contador} números pares entre 1 e 100.`);
console.log ("                                 "); 

//34. Exiba todos os múltiplos de 5 entre 0 e 100.
for (let i = 0; i <= 100; i += 5) {
console.log(i);
}
console.log ("                                 "); 


//35. Crie um programa que desenhe no console: 
for (let i = 1; i <= 5; i++) {
console.log("*".repeat(i));
}
console.log ("                                 "); 

/* 
*******************************************************************
               PARTE 5 – Vetores (36 a 42) 
                     (USAR for)
*******************************************************************/
//36. Crie um vetor com 10 números e exiba todos.
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

for (let i = 0; i < numeros.length; i++) {
console.log(`Posição ${i}: ${numeros[i]}`);
}
console.log ("                                 "); 

//37. Calcule a soma dos elementos do vetor.
for (let num of numeros) {
console.log(num);
}
console.log ("                                 "); 

//38. Calcule a média do vetor.
const lista = [10, 20, 30, 40, 50];
let acumuladorSoma = 0;
for (let i = 0; i < lista.length; i++) {
acumuladorSoma += lista[i];
}
const resultadoMedia = acumuladorSoma / lista.length;
console.log("A média dessa lista é:", resultadoMedia);
console.log ("                                 "); 

//39. Encontre o maior valor do vetor.
const numbers = [5, 12, 80, 55, 102, 4, 33, 71, 99, 2];
let grande = numbers[0];
for (let i = 1; i < numbers.length; i++) {
if (numbers[i] > grande) {
grande = numbers[i];
}
}
console.log("O maior número é: " + maior);
console.log ("                                 "); 


//40. Encontre o menor valor do vetor.
const nu0 = [15, 8, 42, 4, 23, 16];
let menor0 = nu0[0]
for (let i = 1; i < nu0.length; i++) {
if (nu0[i] < menor0)
menor0 = nu0[i]
}
console.log ("                                 "); 

//41. Conte quantos números são pares e ímpares.
const parimpar= [5, 12, 80, 55, 102, 4, 33, 71, 99, 2];
let pares = 0;
let impares = 0;

for (let i = 0; i < parimpar.length; i++) {
if (parimpar[i] % 2 === 0) {
pares++;
} else {
impares++;
}
}

console.log("Pares:", pares);
console.log("Ímpares:", impares);
console.log ("                                 "); 


//42. Multiplique todos os elementos por 2.
const multi = [15, 8, 42, 4, 23, 16];
for (let i = 0; i < multi.length; i++) {
multi[i] = multi[i] * 2;
}
console.log("Vetor multiplicado:", multi);
console.log ("                                 "); 

/* 
*******************************************************************
               PARTE 6 – Matrizes (43 a 50) 🚨
                    (USAR for ANINHADO)
*******************************************************************/
//43. Crie uma matriz 3x3 e exiba todos os valores.
let matriz = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
for (let i = 0; i < matriz.length; i++) {
for (let j = 0; j < matriz[i].length; j++) {
console.log(matriz[i][j]);
}
}
console.log ("                                 "); 

//44. Exiba a diagonal principal de uma matriz.
let matrix = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
console.log(matrix[i][i]);
}
console.log ("                                 "); 

//45. Exiba a diagonal secundária.
let matrizdia = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

let n = matrizdia.length;

for (let i = 0; i < n; i++) {
console.log(matrizdia[i][n - 1 - i]);
}
console.log ("                                 "); 

//46. Some todos os elementos da matriz.
let matrizele = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

let soma0 = 0;

for (let i = 0; i < matrizele.length; i++) {
for (let j = 0; j < matrizele[i].length; j++) {
soma0 += matrizele[i][j];
}
}
console.log("Soma total:", soma0);
console.log ("                                 "); 

//47. Encontre o maior valor da matriz.
let matrizm = [
[1, 2, 3],
[4, 50, 6],
[7, 8, 9]
];

let maior0 = matriz[0][0];

for (let i = 0; i < matrizm.length; i++) {
for (let j = 0; j < matrizm[i].length; j++) {
if (matrizm[i][j] > maior0) {
maior0 = matrizm[i][j];
}
}
}
console.log("Maior valor:", maior0);
console.log ("                                 "); 

//48. Multiplique todos os valores por um número X.
let matrizex = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];
let z = 2;
for (let i = 0; i < matrizex.length; i++) {
for (let j = 0; j < matrizex[i].length; j++) {
matrizex[i][j] = matrizex[i][j] * x;
}
}

console.log("Matriz Multiplicada:", matriz);
console.log ("                                 "); 

//49. Conte quantos valores são maiores que 10.
let matrizma = [
[2, 4, 6],
[8, 10, 12],
[14, 16, 18]
];
let cont = 0;
for (let i = 0; i < matrizma.length; i++) {
for (let j = 0; j < matrizma[i].length; j++) {
if (matrizma[i][j] > 10) {
cont++;
}
}
}
console.log ("                                 "); 
/*50. Crie uma matriz e exiba no formato:
[ 1 2 3 ]
[ 4 5 6 ]
[ 7 8 9 ]*/
let matrizdj = [
[1, 2, 3],
[4, 5, 6],
[7, 8, 9]
];

for (let i = 0; i < matrizdj.length; i++) {
console.log("[ " + matrizdj[i].join(" ") + " ]");
}
console.log ("                                 "); 
