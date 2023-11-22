const contarValoresInteiros = require('./ContadorInteiro'); 

test('contarValoresInteiros conta corretamente os valores inteiros', () => {

  const primeiroDado1 = 5;
  const N1 = 20;
  const resultado1 = contarValoresInteiros(primeiroDado1, N1);
  expect(resultado1).toBe(N1 - primeiroDado1 + 1);

  const primeiroDado2 = 1;
  const N2 = 10;
  const resultado2 = contarValoresInteiros(primeiroDado2, N2);
  expect(resultado2).toBe(N2 - primeiroDado2 + 1);
});
