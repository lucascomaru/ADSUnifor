function calcularSomatorio(numeros) {
  let somatorio = 0;

  for (let i = 0; i < numeros.length; i++) {
    somatorio += numeros[i];
  }

  return somatorio;
}

const conjuntoNumeros = [2, 4, 6, 8, 10];

const resultadoSomatorio = calcularSomatorio(conjuntoNumeros);

console.log(`O somatório dos números é: ${resultadoSomatorio}`);
