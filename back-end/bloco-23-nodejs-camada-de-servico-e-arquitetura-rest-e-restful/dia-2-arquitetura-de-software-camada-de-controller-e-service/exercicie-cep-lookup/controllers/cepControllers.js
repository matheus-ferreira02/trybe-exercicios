const cepServices = require('../services/cepServices');

const getAll = async (_req, res) => {
  const ceps = await cepServices.getAll();

  return res.status(200).json(ceps);
};

const getCepById = async (req, res) => {
  const { id } = req.params;
  const cep = await cepServices.getCepById(id);

  res.status(200).json(cep);
}

const createCep = async (req, res) => {
  const cepCreated = await cepServices.createCep(req.body);
  console.log('entrou');

  return res.status(201).json(cepCreated);
}

module.exports = {
  getAll,
  getCepById,
  createCep,
}
