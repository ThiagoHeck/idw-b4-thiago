const inputNome = document.querySelector("#nome");
const inputServico = document.querySelector("#servico");
const inputQuantidade = document.querySelector("#quantidade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

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
      desconto = preco - preco * 0.1;
      return quantidade * desconto;
    }
    return subtotal;
  }
});
