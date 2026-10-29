const novaRenda = document.querySelector("#novaRenda");
const faturaRenda = document.querySelector("#faturaRenda");
const formulario = document.querySelector("#formCadastro");
const tbody = document.querySelector("table tbody");
const totalRendas = document.querySelector("#totalRendas");
const totalDespesas = document.querySelector("#totalDespesas");
const saldoFinal = document.querySelector("#saldoFinal");
const botaoReiniciar = document.querySelector("#botaoReiniciar");
const CHAVE_RENDAS = "rendas";
const CHAVE_DESPESAS = "despesas";
const formatadorMoeda = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const obterRegistros = (chave) =>
  JSON.parse(localStorage.getItem(chave) || "[]");

function adicionarLinha(...colunas) {
  const linha = tbody.insertRow();
  colunas.forEach((coluna) => (linha.insertCell().textContent = coluna));
}

function renderizarOrcamento() {
  const rendas = obterRegistros(CHAVE_RENDAS);
  const despesas = obterRegistros(CHAVE_DESPESAS);
  const faturamento = rendas.reduce((total, renda) => total + renda.valor, 0);
  const gastos = despesas.reduce((total, despesa) => total + despesa.valor, 0);

  tbody.replaceChildren();

  despesas.forEach((despesa) =>
    adicionarLinha(
      tbody.rows.length + 1,
      despesa.categoria,
      formatadorMoeda.format(despesa.valor),
      "",
    ),
  );
  rendas.forEach((renda) =>
    adicionarLinha(
      tbody.rows.length + 1,
      `Renda: ${renda.nome}`,
      "",
      formatadorMoeda.format(renda.valor),
    ),
  );

  totalRendas.textContent = formatadorMoeda.format(faturamento);
  totalDespesas.textContent = formatadorMoeda.format(gastos);
  saldoFinal.textContent = formatadorMoeda.format(faturamento - gastos);
}

function adicionarRenda() {
  const nome = novaRenda.value.trim();
  const valor = Number(faturaRenda.value);

  if (!nome || !Number.isFinite(valor) || valor <= 0) {
    return;
  }

  const rendas = obterRegistros(CHAVE_RENDAS);
  rendas.push({ nome, valor });
  localStorage.setItem(CHAVE_RENDAS, JSON.stringify(rendas));
  formulario.reset();
  renderizarOrcamento();
}

formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  adicionarRenda();
});

botaoReiniciar.addEventListener("click", () => {
  if (!confirm("Apagar todas as despesas e rendas?")) return;

  localStorage.removeItem(CHAVE_DESPESAS);
  localStorage.removeItem(CHAVE_RENDAS);
  renderizarOrcamento();
});

renderizarOrcamento();
