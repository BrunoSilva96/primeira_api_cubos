const express = require("express");
const instrutores = require("./controllers/instrutores");

const rotas = express();

rotas.get("/instrutores", instrutores.listarInstrutores);
rotas.get("/instrutores/:id", instrutores.obterInstrutor);

rotas.post("/instrutores", instrutores.cadastrarInstrutor);

rotas.put("/instrutores/:id", instrutores.atualizarInstrutor);

rotas.patch("/instrutores/:id/status", instrutores.atualizatStatusInstrutor);

rotas.delete("/instrutores/:id", instrutores.excluirInstrutor);

module.exports = rotas;
