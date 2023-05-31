const express = require("express");
const app = express();

let contador = 0;
let incre1cont = 0;
let incre5cont = 0;

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/ola", function (req, res) {
  res.send("Olá Mundo!");
});

app.get("/contador", function (req, res) {
  res.send({ contador });
});

app.get("/incrementar1", function (req, res) {
    contador += 1;
    incre1cont += 1;
    res.send({ contador });
});

app.get("/incrementar5", function (req, res) {
    contador += 5;
    incre5cont +=1;
    res.send({ contador });
});
  
app.get("/relatorio", function (req, res) {
    const relatorio = {
        contador,
        incre1cont,
        incre5cont
    }
    res.send({ contador });
});  

app.listen(3000);