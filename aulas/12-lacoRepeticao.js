//  Laço de repetição - FOR (PARA)
//o professor te colocou de castigo e pediu para você escrever 1000 vezes a frase 
// "Eu vou prestar atenção nas aulas e anotar tudo!"
 
// let i = 0 => primeiro ultizo uma variavél de controle 
// i < 1000 => condição da repetição 
// i++ => aumenta a variavél de controle para não travar e somar 
for (let i = 0; i < 1000; i++) {
 console.log("Eu vou prestar atenção nas aulas e anotar tudo");
}
console.log("---------------------------------------")

//Escreva todos os números de 1 a 20 
for (let i = 1; i <= 20; i++) {
   console.log(i); 
}
console.log("---------------------------------------")

//Escreva todos os números pares entre o 1 e 20 
for (let i = 0; i <= 20; i += 2) {
console.log (i); 
}
//Outra solução de números pares 
for (let i = 1; i <= 20; i++) {
  if(i % 2 == 0) console.log(i); 
  // % => resto da divisão 
  // i % 2 == 0 => se o resto da divisão de i por 2 for 0, ele mostra i 
}

console.log("---------------------------------------")

///Dados de um vetor, calcule e exiba o somatória de seus elementos 
var numeros = [5, 6, 8, 14, 0, 6, 9, 7, 2,];
let soma = 0; 

console.log(numeros.length)
    // numeros.length => mostra a quantidade de itens do array 

for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i]; 
}
 console.log (soma);
