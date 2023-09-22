const express = require("express");
const aulas = require("./controllers/aulas");
const instrutores = require("./controllers/instrutores");

const rotas = express();

//Instrutores
rotas.get("/instrutores", instrutores.listarInstrutores);
rotas.get("/instrutores/:id", instrutores.obterInstrutor);
rotas.get("/instrutores/:id/aulas", instrutores.obterAulasDoInstrutor);

rotas.post("/instrutores", instrutores.cadastrarInstrutor);
rotas.post("/instrutores/:id/aulas", instrutores.cadastrarAula);

rotas.put("/instrutores/:id", instrutores.atualizarInstrutor);

rotas.patch("/instrutores/:id/status", instrutores.atualizatStatusInstrutor);

rotas.delete("/instrutores/:id", instrutores.excluirInstrutor);

//Aulas
rotas.get("/aulas", aulas.listasAulas);
rotas.get("/aulas/:id", aulas.obterAula);

module.exports = rotas;
