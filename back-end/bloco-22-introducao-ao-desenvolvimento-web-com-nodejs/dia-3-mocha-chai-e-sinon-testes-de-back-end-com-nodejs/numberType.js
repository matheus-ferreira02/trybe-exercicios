const numberType = (number) => {
  switch (true) {
    case number > 0:
      return 'positivo';
    case number < 0:
      return 'negativo';
    case number === 0:
      return 'neutro';
    default:
      return 'Erro! Insira um número por favor';
  }
}

module.exports = {
  numberType
}