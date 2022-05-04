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

module.exports = {
  getAll,
  getCepById,
}
