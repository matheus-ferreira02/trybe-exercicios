const { expect } = require('chai');
const { numberType } = require('../numberType.js');

describe('Testa a chamada da função numberType', () => {
  describe('Quando passado por parâmetro um número, retorna a mensagem', () => {
    it('"positivo" se o valor for maior do que 0', () => {
      const resultado = numberType(3);

      expect(resultado).equals('positivo');
    });

    it('"negativo" se o valor for menor do que 0', () => {
      const resultado = numberType(-3);
      
      expect(resultado).equals('negativo');
    });

    it('"neutro" quando o valor for 0', () => {
      const resultado = numberType(0);

      expect(resultado).equals('neutro');
    });
  });

  describe('Quando passado um parâmetro', () => {
    it('do tipo string ', () => {
      resultado = numberType('a');

      expect(resultado).equals('Erro! Insira um número por favor');
    });

    it('vazio', () => {
      resultado = numberType();

      expect(resultado).equals('Erro! Insira um número por favor');
    });
  });
});