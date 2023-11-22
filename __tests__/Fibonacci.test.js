const fibonacci = require('./Fibonacci'); 

test('fibonacci gera a sequência correta', () => {

  const n1 = 5;
  const resultado1 = fibonacci(n1);
  expect(resultado1).toEqual([0, 1, 1, 2, 3]); 

  const n2 = 8;
  const resultado2 = fibonacci(n2);
  expect(resultado2).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);

});
