const {aulas} = require("../database/aulas");

const listasAulas = (req, res) => {
  return res.status(200).json(aulas);
};

const obterAula = (req, res) => {
  const {id} = req.params;

  const aula = aulas.find((aula) => {
    return aula.id === Number(id);
  });

  if (!aula) {
    return res.status(404).json({message: "Aula não encontrado."});
  }

  return res.status(200).json(aula);
};

module.exports = {
  listasAulas,
  obterAula,
};
