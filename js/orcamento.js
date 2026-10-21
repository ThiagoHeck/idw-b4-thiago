const inputNome = document.querySelector("#nome");
const inputServico = document.querySelector("#servico");
const inputQuantidade = document.querySelector("#quantidade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

const servicos = [
  { nome: "Formatação", preco: 120 },
  { nome: "Limpeza", preco: 80 },
  { nome: "Instalação", preco: 50 },
];

function atualizarServicos() {
  inputServico.innerHTML = '<option value="">Selecione um serviço</option>';

  for (let i = 0; i < servicos.length; i++) {
    const opcao = document.createElement("option");

    opcao.value = servicos[i].preco;

    opcao.textContent = `${servicos[i].nome} - R$ ${servicos[i].preco}`;

    inputServico.appendChild(opcao);
  }
}

for (let i = 0; i < servicos.length; i++) {
  const opcao = document.createElement("option");

  opcao.value = servicos[i].preco;

  opcao.textContent = `${servicos[i].nome} - R$ ${servicos[i].preco}`;

  inputServico.appendChild(opcao);
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const preco = Number(inputServico.value);
  const quantidadeString = inputQuantidade.value.trim();
  const quantidade = Number(quantidadeString);

  resultado.classList.remove("d-none", "alert-success", "alert-warning");

  if (
    nome === "" ||
    quantidadeString === "" ||
    !Number.isInteger(quantidade) ||
    quantidade <= 0
  ) {
    resultado.classList.add("alert-warning");
    resultado.textContent =
      "Os campos devem ser preenchidos. Por favor os preencha.";
    return;
  }

  const total = calcularTotal(preco, quantidade);

  resultado.textContent = `Olá ${nome}! Subtotal: ${subtotal}. Desconto: -${desconto}. Total: ${total}`;

  resultado.classList.add("alert-success");

  function calcularTotal(preco, quantidade) {
    subtotal = quantidade * preco;

    if (quantidade >= 3) {
      desconto = preco * 0.1;
      return subtotal - desconto;
    }
    desconto = 0;
    return subtotal;
  }
});

const formCadastro = document.querySelector("#formCadastro");
const novoNome = document.querySelector("#novoNome");
const novoPreco = document.querySelector("#novoPreco");
const avisoCadastro = document.querySelector("#avisoCadastro");

formCadastro.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = novoNome.value.trim();
  const precoTexto = novoPreco.value.trim();
  const preco = Number(precoTexto);

  avisoCadastro.classList.remove("d-none", "alert-success", "alert-warning");

  if (
    nome === "" ||
    precoTexto === "" ||
    !Number.isFinite(preco) ||
    preco <= 0
  ) {
    avisoCadastro.textContent = "Informe nome e preço válidos.";
    avisoCadastro.classList.add("alert-warning");
    return;
  }

  servicos.push({
    nome: nome,
    preco: preco,
  });

  atualizarServicos();
  formCadastro.reset;

  avisoCadastro.textContent = "Serviço cadastrado!";
  avisoCadastro.classList.add("alert-success");
});
atualizarServicos();
