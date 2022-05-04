const connection = require('./connection');

const getAllCeps = async () => {
  const query = 'SELECT * FROM cep_lookup.ceps';
  const [ ceps ] = await connection.execute(query);

  return ceps;
}

module.exports = {
  getAllCeps,
}
