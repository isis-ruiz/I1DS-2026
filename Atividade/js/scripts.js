const cadastrar = (event) => { 

//Parar a propagacao padrao do evento *// 
event.preventDefault(); 

//Capturar os valores do elementos por Id*// 
let nome = document.getElementById("nome").value; 
let email = document.getElementById("email").value; 

//Capturando o elemento de lista por Id*// 
let id = document.getElementById("lista"); 

//Criar um novo elemento <li>Nome - Email</li> 
let novoItem = document.createElement("li");
novoItem.innerHTML = 
id + 
" - " +
nome +
 " - " + 
 email + 
 " - " + 
 "<p onClick=editar(" + 
id + 
") class= 'btn'>Editar</p>" + 
"<p onClick=excluir(" + 
id + 
") class= 'btn'>Excluir</p>";
//Adicionar o novo item na lista ja existente 
lista.appendChild (novoItem); 
//Limpar os campos 
document.getElementById("nome").value = ""; 
document.getElementById("email").value = ""; 
}
const editar = (id) 




const excluir = (id) => {
    const lista = document. getElementById("lista");
    const itens = document.querySelectorAll("li"); 

    itens.forEach((item) => {
     if(item.innerHTML.includes(id)) {
        item.remove(); 
     }
    }); 
}; 
