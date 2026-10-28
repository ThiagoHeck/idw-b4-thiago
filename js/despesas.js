const inputCategoria = document.querySelector("#categoria");
const inputDescricao = document.querySelector("#descricao");
const inputValor = document.querySelector("#valor");
const botaoAdicionar = document.querySelector("#botaoAdicionar");
const formulario = document.querySelector("form");

const tbody = document.querySelector("tbody");

function adicionarDespesa() {
  const categoria = inputCategoria.value.trim();
  const descricao = inputDescricao.value.trim();
  const valor = Number(inputValor.value);

  const linha = tbody.insertRow();
  linha.insertCell().textContent = tbody.rows.length;
  linha.insertCell().textContent = categoria;
  linha.insertCell().textContent = descricao;
  linha.insertCell().textContent = valor;

  formulario.reset();
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  adicionarDespesa();
});

localStorage.setItem("despesas", JSON.stringify([]));
