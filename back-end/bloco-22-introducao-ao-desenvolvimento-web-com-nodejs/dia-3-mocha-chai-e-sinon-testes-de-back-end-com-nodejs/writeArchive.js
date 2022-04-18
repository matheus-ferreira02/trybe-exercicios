const fs = require('fs').promises;

const writeArchive = async (nameFile, contentFile) => {
  try {
    await fs.writeFile(nameFile, contentFile);
    return 'ok';
  } catch (err) {
    return `Erro ao escrever no arquivo`;
  }  
}

module.exports = {
  writeArchive
}