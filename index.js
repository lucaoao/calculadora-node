const express = require("express");
const app = express();
const porta = 5500;

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}.`);
});

app.get("/calculadoraresposta", function (req, res) {
  const n1 = parseInt(req.query.numero1);
  const n2 = parseInt(req.query.numero2);
  const op = req.query.op;
  let resultado = 0;

  switch (op) {
    case "+":
      resultado = n1 + n2;
      break;
    case "-":
      resultado = n1 - n2;
      break;
    case "*":
      resultado = n1 * n2;
      break;
    case "/":
      if (n2 === 0) {
        resultado = "Erro, não é possível dividir por 0";
      } else {
        resultado = n1 / n2;
      }
      break;
  }
  res.render("calculadoraresposta", { resultado: resultado });
});
