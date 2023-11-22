const calcularSomatorio = require('./Somatorio'); 

test('calcularSomatorio calcula o somatório corretamente', () => {
  const conjunto1 = [2, 4, 6, 8, 10];
  const resultado1 = calcularSomatorio(conjunto1);
  expect(resultado1).toBe(30);

  const conjunto2 = [1, 3, 5, 7, 9];
  const resultado2 = calcularSomatorio(conjunto2);
  expect(resultado2).toBe(25);

});
