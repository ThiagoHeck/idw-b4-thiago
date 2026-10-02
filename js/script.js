const inputNome = document.querySelector("#nome");
const inputIdade = document.querySelector("#idade");
const botao = document.querySelector("#botao");
const resultado = document.querySelector("#resultado");

botao.addEventListener("click", function () {
  const nome = inputNome.value;
  const idade = Number(inputIdade.value);

  if (idade >= 18) {
    resultado.textContent = "Olá, " + nome + "! Você é maior de idade.";
  } else {
    resultado.textContent = `Olá ${nome}! Você é menor de idade.`;
  }
});
