const inputCategoria = document.querySelector("#categoria");
const inputDescricao = document.querySelector("#descricao");
const inputValor = document.querySelector("#valor");
const botao = document.querySelector("#botao");
const formulario = document.querySelector("form");

function adicionarDespesa() {
  const descricao = inputDescricao.value.trim();
  const valor = Number(inputValor.value);
  const categoria = inputCategoria.value;
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const descricao = inputDescricao.value.trim();
  const valor = Number(inputValor.value);
  const categoria = inputCategoria.value;
});
