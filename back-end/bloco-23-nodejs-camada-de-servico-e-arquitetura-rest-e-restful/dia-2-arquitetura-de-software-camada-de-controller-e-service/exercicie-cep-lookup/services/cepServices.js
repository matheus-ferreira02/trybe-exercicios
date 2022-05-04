const cepsModels = require('../models/cepsModels');

const getAll = async () => {
  const ceps = await cepsModels.getAllCeps();

  return ceps;
}

const getCepById = async (id) => {
  const cep = await cepsModels.getCepById(id);

  if(!cep.length) {
    throw { code: 404, message: 'CEP não encontrado' }
  }

  return cep;
}

const createCep = async (dataCep) => {
  const cep = await cepsModels.getCepById(dataCep.cep);
  if(cep.length) {
    console.log(cep);
    throw { code: 409, message: 'CEP já existente' }
  }
  const cepCreated = await cepsModels.createCep(dataCep);

  return cepCreated;
}

module.exports = {
  getAll,
  getCepById,
  createCep,
}
