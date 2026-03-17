// Criando variaveis do tipo Array (Vetor)

var frutas = ["Banana", "Maçã","Pera", "Uva", "Morango"];

// Imprimindo os dados em forma de linha
console.log(frutas);
// Imprimindo os dados em forma de tabelas
console.table(frutas);

// length -> "Tamanho" do Array (Quantidade de Elementos)
console.log("O Vetor tem", frutas.length, "elementos");

// Imprimir Elemento a partir do indice
console.log(frutas[2]);

// push -> Adiciona um novo elemento no final da fila
frutas.push("Tangerina");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
frutas.unshift("Goiaba");
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// Obter um  Elemento a partir do indice
console.log("2ª posição:", frutas[0]);
console.log("3ª posição:", frutas[3]);
console.log("4ª posição (não existe):", frutas[4]);

// pop -> Remover um elemento do final do vetor (ultimo elemento)
frutas.pop();
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// shift -> Remover um elemento do inicio do vetor (primeiro elemento)
frutas.shift();
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");

// splice -> Remove um elemento a partir de um indice, e tambem precisa ser informada a quantidade de registro a ser excluído a partir do indíce.
frutas.splice(1, 1); // Remove somente o segundo item da lista
console.table(frutas);
console.log("O Vetor agora tem", frutas.length, "elementos");



// Procurar um elemento a partir do nome (descrição)
// indexOf(procurado) -> retorna o indice do elemento no vetor
let procurado = "Uva";
let indice = frutas.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);

// indexOf(procurado) -> retorna -1 caso não encontre o elemento
procurado = "Uva";
indice = frutas.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);

// Excluir um elemento com base em seu nome
// 1º localizar o indice do elemento a partir do nome
// 2º excluir o registro com base no indice retornado
procurado = "Uva";
indice = frutas.indexOf(procurado);
console.log("O ", procurado, "está no indice:", indice);
frutas.splice(indice, 1);
console.table(frutas);

// Alterar o valor de um elemento a partir do Indice
frutas[1] = "Maça";
console.table(frutas);


// slice -> Criar uma cópia do Vetor
let novaLista = frutas.slice(); // Cópia completa do vetor frutas
console.table(novaLista);


let listaParcial = frutas.slice(2, 5); // Cria uma cópia do vetor frutas a partir do indice onde começa e onde termina a copia
console.table(listaParcial);