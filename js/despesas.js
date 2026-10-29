const inputCategoria = document.querySelector("#categoria");
const inputDescricao = document.querySelector("#descricao");
const inputValor = document.querySelector("#valor");
const formulario = document.querySelector("form");
const tbody = document.querySelector("tbody");
const CHAVE_DESPESAS = "despesas";
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const obterDespesas = () =>
  JSON.parse(localStorage.getItem(CHAVE_DESPESAS) || "[]");

function renderizarDespesas() {
  tbody.replaceChildren();

  obterDespesas().forEach((despesa, indice) => {
    const linha = tbody.insertRow();
    linha.insertCell().textContent = indice + 1;
    linha.insertCell().textContent = despesa.categoria;
    linha.insertCell().textContent = despesa.descricao;
    linha.insertCell().textContent = formatadorMoeda.format(despesa.valor);
  });
}

function adicionarDespesa() {
  const categoria = inputCategoria.value.trim();
  const descricao = inputDescricao.value.trim();
  const valor = Number(inputValor.value);

  if (!categoria || !descricao || !Number.isFinite(valor) || valor <= 0) {
    return;
  }

  const despesas = obterDespesas();
  despesas.push({ categoria, descricao, valor });
  localStorage.setItem(CHAVE_DESPESAS, JSON.stringify(despesas));

  formulario.reset();
  renderizarDespesas();
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  adicionarDespesa();
});

renderizarDespesas();
