function quicksort(array) {
  if (array.length <= 1) return array;

  const pivo = array[0];
  const menores = [];
  const maiores = [];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < pivo) {
      menores.push(array[i]);
    } else {
      maiores.push(array[i]);
    }
  }

  return [...quicksort(menores), pivo, ...quicksort(maiores)];
}

const arrayParaOrdenar = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

const arrayOrdenado = quicksort(arrayParaOrdenar);

console.log("Array Ordenado:", arrayOrdenado);
