// Desvio Condicional - IF-Elementos

/*Condiçoes simples com IF
Sintaxe: if( condição) { 
    codigo a ser executado, se verdadeiro 
} 
*/ 

let anoNascimento = 2009 
if(anoNascimento > 2009){ 
    console.log("A pessoa nasceu depois de 2009.") 
}
if (anoNascimento < 2009){ 
    console.log ("A pessoa nasceu antes de 2009.")
} 

if(anoNascimento == 2009){ 
    console.log ("A pessoa nasceu em 2009.")
}

//Condicional IF-ELSE 
if(anoNascimento > 2000){ 
console.log("A pessoa nasceu depois de 2000."); 
}else{ 
    console.log ("A pessoa nasceu antes de 2000"); 
} 
 
//  Condicional Composta com IF 

const login = "Rapha";
const senha = "2105";

let loginUser = "Rapha"; 
let senhaUser = "2105"; 

if(loginUser == login && senhaUser == senha){
    console.log( "Login realizado com Sucesso!") 

}else{ 
    console.log("Acesso Negado!")
} 

// Desvio aninhados - IF-ELSE-IF-ELSE ...

let semaforo = "vermelho"; 

if(semaforo == "vermelho"){ 
    console.log("Pare"); 
}else if(semaforo == "verde"){ 
    console.log("Siga");
}else{ 
    console.log("Opção Inválida")
}

// Criando variaveis locais ( só existem dentro do bloco onde foram criadas )

let mes = "Maio"
let dia = "21"

if(dia == 21 && mes == "Maio"){
    let mensagem = "Hoje é dia 21 de Maio"
    console.log(mensagem); 
}
console.log("Tentando acessar a variavel 'mensagem' fora do escopo do IF, vai dar erro!");
//console.log(mensagem); 

/***************************************************************/
// IF Ternário (IF Inline)
let preco = 500;
let resultado = (preco <= 100) ? "Tá barato" : "Vish, ta caro!";
console.log("Preço:",preco, "-", resultado);
// O codigo acima, faz exatamente a mesma coisa que o código abaixo

if (preco <= 100) {
resultado = "Tá barato";
} else {
resultado = "Vish, ta caro!";
}
console.log("Preço:",preco, "-", resultado);

