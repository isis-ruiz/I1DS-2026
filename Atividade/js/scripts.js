let contador = 0;

const cadastrar = (event) => {
  event.preventDefault();

  let nome = document.getElementById("nome").value;
  let email = document.getElementById("email").value;

  let lista = document.getElementById("lista");
  contador++;

  let novoItem = document.createElement("li");
  novoItem.setAttribute("data-id", contador);

  novoItem.innerHTML =
    contador + " - " +
    nome + " - " +
    email +
    ` <button onclick="editar(${contador})">Editar</button>
      <button onclick="excluir(${contador})">Excluir</button>`;

  lista.appendChild(novoItem);

  document.getElementById("nome").value = "";
  document.getElementById("email").value = "";
};

const excluir = (id) => {
  const itens = document.querySelectorAll("li");

  itens.forEach((item) => {
    if (item.getAttribute("data-id") == id) {
      item.remove();
    }
  });
};

const editar = (id) => {
  const itens = document.querySelectorAll("li");

  itens.forEach((item) => {
    if (item.getAttribute("data-id") == id) {
      let texto = item.innerText.split(" - ");

      let novoNome = prompt("Novo nome:", texto[1]);
      let novoEmail = prompt("Novo email:", texto[2]);

      if (novoNome && novoEmail) {
        item.innerHTML =
          id + " - " +
          novoNome + " - " +
          novoEmail +
          ` <button onclick="editar(${id})">Editar</button>
            <button onclick="excluir(${id})">Excluir</button>`;
      }
    }
  });
};