const { expect } = require('chai');
const { writeArchive } = require('../writeArchive.js');
const sinon = require('sinon');
const fs = require('fs').promises;

describe('Testa a função writeArchive', () => {
  describe('quando passar', () => {
    it('os dois parâmetros, retorna "ok"', async () => {
      const resultado = await writeArchive('./teste.txt', 'olá mundo');

      expect(resultado).equals('ok');
    });

    it('só um parâmetro, retorna "Erro ao escrever no arquivo"', async () => {
      const resultado = await writeArchive('./teste.txt');

      expect(resultado).equals('Erro ao escrever no arquivo');
    });
  });

  describe('Quando cria o arquivo', () => {
    before(() => {
      sinon.stub(fs, 'readFile').returns('ola mundo');
    });

    after(() => {
      fs.readFile.restore();
    })

    it('ele armazena o conteúdo no arquivo', async () => {
      await writeArchive('./teste.txt', 'ola mundo');
      const resultado = fs.readFile('../teste.txt');
      expect(resultado).equals('ola mundo');
    });
  });
});