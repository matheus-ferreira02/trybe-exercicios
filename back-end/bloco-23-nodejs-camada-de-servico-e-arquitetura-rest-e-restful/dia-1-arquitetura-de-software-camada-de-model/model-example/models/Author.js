const connection = require('./connection');

const getNewAuthor = ({ firstName, middleName, lastName }) => {
  const fullname = [firstName, middleName, lastName]
    .filter(name => name)
    .join(' ');
  return {
    firstName,
    middleName,
    lastName,
    fullname,
  }
}

const serialize = (authorResult) => ({
  id: authorResult.id,
  firstName: authorResult.first_name,
  middleName: authorResult.middle_name,
  lastName: authorResult.last_name,
});

const getAll = async () => {
  const [results] = await connection.execute('SELECT first_name, middle_name, last_name FROM model_example.authors');

  return results.map(serialize).map(getNewAuthor);
}

module.exports = {
  getAll,
}
