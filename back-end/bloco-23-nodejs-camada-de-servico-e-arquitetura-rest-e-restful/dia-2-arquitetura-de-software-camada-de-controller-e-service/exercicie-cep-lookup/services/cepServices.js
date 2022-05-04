const cepsModels = require('../models/cepsModels');

const getAll = async () => {
  const ceps = await cepsModels.getAllCeps();

  return ceps;
}

const getCepById = async (id) => {
  const cep = await cepsModels.getCepById(id);
  console.log(cep.length);

  if(!cep.length) {
    throw { code: 404, message: 'CEP não encontrado' }
  }

  return cep;
}

module.exports = {
  getAll,
  getCepById,
}
