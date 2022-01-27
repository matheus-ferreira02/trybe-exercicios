const math = require('./service');

describe('Test a função randomNumeber', () => {
  it('Verifica se a função é chamada', () => {
    math.randomNumber = jest.fn();
    math.randomNumber();

    expect(math.randomNumber).toHaveBeenCalled();
  });

  it('Verifica quantas vezes a função foi chamada', () => {
    math.randomNumber = jest.fn();
    math.randomNumber();
    math.randomNumber();
    math.randomNumber();

    expect(math.randomNumber).toHaveBeenCalledTimes(3);
  });

  it('Verifica se retorna um valor correto', () => {
    math.randomNumber = jest.fn().mockReturnValue(10);

    expect(math.randomNumber()).toBe(10);
  })
});

describe('Implementação da Mock', () => {
  it('Testa se a função foi chamada e nova implementação foi aplicada', () => {
    math.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(math.randomNumber(10, 2)).toBe(5);
    expect(math.randomNumber).toHaveBeenCalled();
    expect(math.randomNumber).toHaveBeenCalledTimes(1);
    expect(math.randomNumber).toHaveBeenCalledWith(10, 2);
  });
});