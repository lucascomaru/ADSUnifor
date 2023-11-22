const ehPrimo = require('./NumeroPrimo'); 

test('ehPrimo verifica se um número é primo corretamente', () => {
  const numero1 = 17;
  const resultado1 = ehPrimo(numero1);
  expect(resultado1).toBe(true);

  const numero2 = 4;
  const resultado2 = ehPrimo(numero2);
  expect(resultado2).toBe(false);

});
