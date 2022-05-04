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

const createCep = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const query = `INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf)
  VALUES (?, ?, ?, ?, ?)`;

  const [ cepCreated ] = await connection.execute(query, [cep, logradouro, bairro, localidade, uf ]);

  return { cep, logradouro, bairro, localidade, uf };
}

module.exports = {
  getAllCeps,
  getCepById,
  createCep,
}
