// Criando variaveis do tipo Array (Vetor) 

var dinos = ["Tiroanosauro Rex", "Estegossauro","Brontossauro", "Tricerátops"];

// Imprimindo os dados em linha
console.log(dinos); 
//Imprimindo os dados em forma de tabela 
console.table(dinos); 

//length ->"Tamanho" do Array (Quantidade de Elementos) 
console.log ("O Vetor tem", dinos.length, "elementos");

//Imprimindo Elemento a partir do indice 
console.log(dinos[2]); 
// push -> Adiciona um novo elemento no final da fila
dinos.push("Anquilossauro");
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");

// unshift -> Adiciona um novo elemento no inicio da fila
dinos.unshift("Velociraptor");
console.table(dinos);
console.log("O Vetor agora tem", dinos.length, "elementos");


//  Obter um Elemento a partir do indice
console.log("1ª posição:", dinos[0]);
console.log("4ª posição:", dinos[3]);
console.log("20ª posição:", dinos[20]);