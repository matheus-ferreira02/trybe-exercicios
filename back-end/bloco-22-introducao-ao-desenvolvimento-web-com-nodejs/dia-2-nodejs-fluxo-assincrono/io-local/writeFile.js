const fs = require('fs').promises;

fs.writeFile('./meu-arquivo.txt', 'Meu Textão', { flag: 'wx+' })
  .then(() => console.log('Arquivo escrito com sucesso!'))
  .catch((err) => console.log(`Erro ao escrever o arquivo! ${err.message}`))
