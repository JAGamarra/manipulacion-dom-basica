const inputNum1 = document.querySelector("#inputNum1");
const inputNum2 = document.querySelector("#inputNum2");
const btnSumar = document.querySelector("#btnSumar");
const parrafoResultado = document.querySelector("#result");

btnSumar.addEventListener("click", (e) => {
  const result = parseFloat(inputNum1.value) + parseFloat(inputNum2.value);
  parrafoResultado.textContent = `Resultado: ${result}`;
});
