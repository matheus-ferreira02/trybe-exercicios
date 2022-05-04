const connection = require('./connection');

const getAllCeps = async () => {
  const query = 'SELECT * FROM cep_lookup.ceps';
  const [ ceps ] = await connection.execute(query);

  return ceps;
}

const getCepById = async (id) => {
  const query = 'SELECT * FROM cep_lookup.ceps WHERE cep = ?';
  const [ cep ] = await connection.execute(query, [id]);

  return cep;
}

module.exports = {
  getAllCeps,
  getCepById,
}
