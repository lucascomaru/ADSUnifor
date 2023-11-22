const calcularMDC = require('./MDC'); 

test('calcularMDC calcula o MDC corretamente', () => {
  const numero1_1 = 36;
  const numero2_1 = 48;
  const resultado1 = calcularMDC(numero1_1, numero2_1);
  expect(resultado1).toBe(12);

  const numero1_2 = 21;
  const numero2_2 = 14;
  const resultado2 = calcularMDC(numero1_2, numero2_2);
  expect(resultado2).toBe(7);

});
