const quicksort = require('./Ordenado'); 

test('quicksort ordena o array corretamente', () => {
  const array1 = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
  const resultado1 = quicksort(array1);
  expect(resultado1).toEqual([1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]);

  const array2 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  const resultado2 = quicksort(array2);
  expect(resultado2).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);

});
