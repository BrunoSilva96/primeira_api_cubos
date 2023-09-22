let {instrutores, identificadorInstrutor} = require("../database");

const listarInstrutores = (req, res) => {
  return res.status(200).json(instrutores);
};

const obterInstrutor = (req, res) => {
  const {id} = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({message: "Instrutor não encontrado."});
  }

  return res.status(200).json(instrutor);
};

const cadastrarInstrutor = (req, res) => {
  const {nome, email, status} = req.body;

  if (!nome) {
    return res.status(400).json({message: "O nome é obrigatorio!"});
  }
  if (!email) {
    return res.status(400).json({message: "O email é obrigatorio!"});
  }

  const instrutor = {
    id: identificadorInstrutor++,
    nome: nome,
    email: email,
    status: status ?? true,
  };

  instrutores.push(instrutor);

  return res.status(201).json(instrutor);
};

const atualizarInstrutor = (req, res) => {
  const {id} = req.params;
  const {nome, email, status} = req.body;

  if (!nome) {
    return res.status(400).json({message: "O nome é obrigatorio!"});
  }
  if (!email) {
    return res.status(400).json({message: "O email é obrigatorio!"});
  }

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({message: "Instrutor não encontrado."});
  }

  instrutor.nome = nome;
  instrutor.email = email;
  instrutor.status = status;

  return res.status(204).send();
};

const atualizatStatusInstrutor = (req, res) => {
  const {id} = req.params;
  const {status} = req.body;
  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({message: "Instrutor não encontrado."});
  }

  instrutor.status = status;

  return res.status(204).send();
};

const excluirInstrutor = (req, res) => {
  const {id} = req.params;

  const instrutor = instrutores.find((instrutor) => {
    return instrutor.id === Number(id);
  });

  if (!instrutor) {
    return res.status(404).json({message: "Instrutor não encontrado."});
  }

  instrutores = instrutores.filter((instrutor) => {
    instrutor.id !== Number(id);
  });

  return res.status(204).send();
};

module.exports = {
  listarInstrutores,
  obterInstrutor,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizatStatusInstrutor,
  excluirInstrutor,
};
