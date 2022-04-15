const fs = require('fs').promises;

const createJSON = async (clientes, compras) => {
  const arrayClientes = clientes.split('\n');
  const arrayCompras = compras.split('\n');
  const newClientes = arrayClientes.map(elements => elements.split(' - '));
  const newCompras = arrayCompras.map(elements => elements.split(' - '));

  const obj = newClientes.map((element, index) => ({
    [element[0]]: element[1],
    [newCompras[index][0]]: newCompras[index][1]
  }));
  console.log(obj);

  fs.writeFile('./resultado.json', JSON.stringify(obj, null, 2));
}

Promise.all([
  fs.readFile('./data/arquivo1.txt', 'utf8'),
  fs.readFile('./data/arquivo2.txt', 'utf8')
])
  .then(([clientes, compras]) => createJSON(clientes, compras))
  .catch((err) => console.log(`Erro ao tentar escrever no arquivo\nErro: ${err.message}`));

