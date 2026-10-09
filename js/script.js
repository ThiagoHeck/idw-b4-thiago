const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  const nome = inputNome.value.trim();
  const idade = Number(inputIdade.value).trim();

  resultado.classList.remove(
    "d-none",
    "alert-info",
    "alert-danger",
    "alert-success",
    "alert-warning",
  );

  if (nome === "" || inputIdade === "") {
    resultado.classList.add("alert-warning");
    resultado.textContent =
      "Os campos devem ser preenchidos. Por favor os preencha.";
    return;
  }

  const mensagem = verificarIdade(idade);

  resultado.textContent = `Olá ${nome}! ${mensagem}`;
});

function verificarIdade(idade) {
  if (idade >= 18) {
    resultado.classList.add("alert-success");

    // Concatenação de texto
    resultado.textContent = "Olá, " + nome + "! Você é maior de idade.";

    return "Vocé é maior de idade!";
  }
  resultado.textContent = `Olá, ${nome}! Você é menor de idade.`;
  resultado.classList.add("alert-danger");
  return "Vocé é menor de idade!";
}
