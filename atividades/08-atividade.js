/*****************************************************
Lista de Exercícios
*****************************************************/
/*
Dada a matriz abaixo, faça um programa em JavaScript
que imprima os elementos da sua diagonal principal.
| 3 5 8 |
| 1 9 2 |
| 7 1 4 |
********************************************************
Dada a matriz abaixo, faça um programa em JavaScript
que multiplique seus elementos por um valor x e imprima
a matriz antes e após a multiplicação.
| 8 1 3 |
| 2 9 1 |
| 4 6 2 |
*/

 let matriz = [ 
        [3, 5, 8],
        [1, 9, 2],
        [7, 1, 4],
 ] 

console.log(matriz[0][0]); 
console.log(matriz[1][1]); 
console.log(matriz[2][2]); 
console.log(matriz[0][2]); 
console.log(matriz[1][1]);
console.log(matriz[2][0]); 

console.log ("-----------------------")

for (let i = 0; i < matriz.length; i++) {
  for (let i2 = 0; i2 < matriz[i].length;i2++) {
    console.log(matriz[i][i2]);
  } 
}
console.log("******************************") 

let matriz2 = [
  [8, 1, 3],
  [2, 9, 1],
  [4, 6, 2]
];

let x = 2;

console.log("Matriz2:");
for (let i = 0; i < matriz2.length; i++) {
  let linha = "";
  for (let i2 = 0; i2 < matriz2[i].length; i2++) {
    linha += matriz2[i][i2] + " ";
      }
  console.log(linha);
} 

for (let i = 0; i < matriz2.length; i++) {
  for (let i2 = 0; i2 < matriz2[i].length; i2++) {
    matriz2[i][i2] = matriz2[i][i2] * x;
  }
}

console.log("Matriz depois da multiplicação:");
for (let i = 0; i < matriz.length; i++) {
  let linha = "";
  for (let i2 = 0; i2 < matriz2[i].length; i2++) {
    linha += matriz2[i][i2] + " ";
  }
  console.log(linha);
}


